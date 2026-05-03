export type Section = "hero" | "servicos" | "como_funciona" | "cta_final";
export type Service = "criacao" | "otimizacao" | "recuperacao" | "geral";

export function pushClickWhatsapp(section: Section, service: Service): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: "click_whatsapp", section, service });
}
