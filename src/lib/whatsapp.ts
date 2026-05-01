export function buildWaUrl(message: string): string {
  const num = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "55000000000";
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
