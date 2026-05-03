// v1: sem testimonials. Adicionar bloco de prova social aqui quando houver depoimentos reais.

import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

interface QA {
  pergunta: string;
  resposta: string;
}

const faq: QA[] = [
  {
    pergunta: "Em quanto tempo fica pronto?",
    resposta:
      "De 7 a 15 dias úteis depois que você me passa todas as informações. Recuperação de perfil suspenso pode levar mais por causa do tempo de resposta do Google — te aviso prazo realista no diagnóstico.",
  },
  {
    pergunta: "Preciso pagar antes de começar?",
    resposta:
      "Não. Você só paga depois que o serviço está entregue, via link Mercado Pago (PIX à vista ou cartão em até 12x). Se eu não entregar o que combinamos, você não paga nada.",
  },
  {
    pergunta:
      "Você garante que meu perfil vai aparecer em primeiro lugar?",
    resposta:
      "Não. Quem garante posição no Google está mentindo — a posição depende de muitos fatores que ninguém controla. O que eu garanto é entregar exatamente o escopo combinado, com qualidade técnica que o Google espera.",
  },
  {
    pergunta: "Vocês atendem minha cidade?",
    resposta:
      "Sim. O serviço é 100% remoto, feito pelo painel do Google Business Profile. Atendo PMEs em todo o Brasil, de qualquer porte e segmento. A conversa toda acontece pelo WhatsApp.",
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
            Dúvidas que todo dono de PME tem
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
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Pronto pra começar?
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-ink">
            Manda uma mensagem. A gente conversa em 5 minutos e você decide se
            faz sentido.
          </h3>
          <p className="text-base text-muted max-w-xl">
            Sem compromisso, sem cobrança pra entender o que você precisa.
          </p>
          <WhatsAppCTA
            section="cta_final"
            service="geral"
            message="Olá! Vim do site da Perfiliza e quero conversar sobre o meu perfil no Google."
          >
            Falar agora no WhatsApp
          </WhatsAppCTA>
        </div>
      </div>
    </section>
  );
}
