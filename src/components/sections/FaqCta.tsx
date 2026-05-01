// v1: sem testimonials. Adicionar bloco de prova social aqui quando houver depoimentos reais.

import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

interface QA {
  pergunta: string;
  resposta: string;
}

const faq: QA[] = [
  {
    pergunta: "[A DEFINIR — quanto demora?]",
    resposta: "[A DEFINIR — resposta sobre prazo]",
  },
  {
    pergunta: "[A DEFINIR — posso pagar antes?]",
    resposta:
      "[A DEFINIR — resposta sobre pagamento via Mercado Pago só após entrega]",
  },
  {
    pergunta: "[A DEFINIR — e se não der certo?]",
    resposta: "[A DEFINIR — resposta sobre garantia]",
  },
  {
    pergunta: "[A DEFINIR — atende minha cidade?]",
    resposta: "[A DEFINIR — resposta sobre atendimento remoto / nacional]",
  },
];

export default function FaqCta() {
  return (
    <section
      id="faq-cta"
      className="px-4 sm:px-6 py-16 sm:py-24 bg-surface-alt"
    >
      <div className="mx-auto max-w-3xl flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">
            Perguntas frequentes
          </h2>
          <ul className="flex flex-col gap-3">
            {faq.map((qa, i) => (
              <li key={i}>
                <details className="group rounded-2xl border border-line bg-surface p-5 open:shadow-lift">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-ink">
                    <span>{qa.pergunta}</span>
                    <span
                      aria-hidden="true"
                      className="text-muted transition-transform group-open:rotate-180"
                    >
                      ▾
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-muted">{qa.resposta}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="font-display text-2xl sm:text-3xl text-ink">
            [A DEFINIR — chamada do CTA final]
          </h3>
          <p className="text-base text-muted max-w-xl">
            [A DEFINIR — reforço final antes do CTA]
          </p>
          <WhatsAppCTA
            section="cta_final"
            service="geral"
            message="[A DEFINIR — mensagem geral CTA final]"
          >
            Falar no WhatsApp
          </WhatsAppCTA>
        </div>
      </div>
    </section>
  );
}
