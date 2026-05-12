export type Section = "hero" | "como_funciona" | "preco" | "footer";
export type Service = "geral";

export function pushClickWhatsapp(section: Section, service: Service): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: "click_whatsapp", section, service });
}
