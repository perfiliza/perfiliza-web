const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "55000000000";

export function buildWaUrl(
  message: string,
  utms?: URLSearchParams | null,
): string {
  const campaign = utms?.get("utm_campaign");
  const content = utms?.get("utm_content");

  let finalMessage = message;
  if (campaign) {
    const tag = content ? `${campaign} / ${content}` : campaign;
    finalMessage = `${message} (vim de ${tag})`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage)}`;
}
