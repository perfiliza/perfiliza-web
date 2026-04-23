import type { CtaPosition, NicheKey } from "@/types/content";
import { generateEventId, getCookieValue } from "./utm";

export interface CTAEventParams {
  landing: NicheKey;
  posicao: CtaPosition;
}

export function fireCTAEvents({ landing, posicao }: CTAEventParams): void {
  if (typeof window === "undefined") return;

  const eventId = generateEventId();
  const params = { landing, posicao };

  // GA4
  window.gtag?.("event", "click_whatsapp_cta", params);

  // Meta Pixel (client-side) — eventID permite dedup com a CAPI server-side
  window.fbq?.("trackCustom", "ClickWhatsAppCTA", params, {
    eventID: eventId,
  });

  // Meta Conversions API (server-side) — duplica o evento via /api/cta
  // para mitigar bloqueios de iOS 14+ / ITP. Implementação do endpoint: Etapa 6.
  void fetch("/api/cta", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      eventId,
      landing,
      posicao,
      fbp: getCookieValue("_fbp"),
      fbc: getCookieValue("_fbc"),
      eventSourceUrl: window.location.href,
    }),
    keepalive: true,
  }).catch(() => {
    // Erro silencioso: não bloquear a navegação do usuário para o WhatsApp.
  });
}
