import type { NextRequest } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const META_GRAPH_VERSION = "v19.0";

interface Payload {
  eventId?: string;
  landing?: string;
  posicao?: string;
  fbp?: string | null;
  fbc?: string | null;
  eventSourceUrl?: string;
}

export async function POST(request: NextRequest) {
  const pixelId = process.env.META_CAPI_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  // Sem credenciais configuradas: aceita o POST e responde OK sem encaminhar.
  // Permite desenvolver sem tokens; em produção as envs devem estar populadas.
  if (!pixelId || !accessToken) {
    return Response.json({ ok: true, forwarded: false });
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  if (!body.eventId || !body.landing || !body.posicao) {
    return Response.json(
      { ok: false, error: "missing_fields" },
      { status: 400 },
    );
  }

  const userAgent = request.headers.get("user-agent") ?? "";
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const clientIp =
    forwardedFor.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "";

  const userData: Record<string, string> = {};
  if (clientIp) userData.client_ip_address = clientIp;
  if (userAgent) userData.client_user_agent = userAgent;
  if (body.fbp) userData.fbp = body.fbp;
  if (body.fbc) userData.fbc = body.fbc;

  const event = {
    event_name: "ClickWhatsAppCTA",
    event_time: Math.floor(Date.now() / 1000),
    event_id: body.eventId,
    event_source_url: body.eventSourceUrl,
    action_source: "website",
    user_data: userData,
    custom_data: {
      landing: body.landing,
      posicao: body.posicao,
    },
  };

  const url = `https://graph.facebook.com/${META_GRAPH_VERSION}/${pixelId}/events?access_token=${accessToken}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ data: [event] }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[CAPI] upstream failed", res.status, detail);
      return Response.json(
        { ok: false, forwarded: false },
        { status: 502 },
      );
    }

    return Response.json({ ok: true, forwarded: true });
  } catch (err) {
    console.error("[CAPI] fetch error", err);
    return Response.json(
      { ok: false, forwarded: false },
      { status: 502 },
    );
  }
}
