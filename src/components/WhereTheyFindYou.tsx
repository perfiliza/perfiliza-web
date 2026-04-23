import MockupFrame from "./visual/MockupFrame";
import GoogleMapsScene from "./visual/scenes/GoogleMapsScene";
import ChatGptScene from "./visual/scenes/ChatGptScene";

interface Props {
  googleText?: string;
  aiText?: string;
}

export default function WhereTheyFindYou({
  googleText = "Google Maps, Google Search e Google Assistente. É aqui que 9 em cada 10 clientes começam a procurar por um serviço perto de onde estão. A Perfiliza aparece no seu perfil toda semana pra você ser a primeira opção.",
  aiText = "ChatGPT, Gemini, Claude, Perplexity. Hoje, milhões de brasileiros pedem recomendação à IA antes de decidir. Se você não aparece nas respostas, seu concorrente aparece. A Perfiliza cuida disso também.",
}: Props) {
  return (
    <section className="reveal relative overflow-hidden bg-surface-alt">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-24">
        <h2 className="text-center text-3xl font-bold tracking-normal text-ink md:tracking-tight md:text-4xl">
          Seu cliente procura em dois lugares.
          <br className="hidden md:inline" /> A gente cuida dos dois.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Card Google */}
          <article className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 md:p-8">
            <div className="relative mb-6">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-primary/15 to-mesh-2/10 blur-xl"
              />
              <MockupFrame
                variant="maps"
                ariaLabel="Prévia de busca no Google Maps com o seu negócio em destaque entre concorrentes"
              >
                <GoogleMapsScene />
              </MockupFrame>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-ink">
              Quando alguém pesquisa no Google.
            </h3>
            <p className="mt-3 text-muted">{googleText}</p>
            <a
              href="#planos"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Cuidamos disso no Starter · R$ 197/mês
              <span aria-hidden="true">→</span>
            </a>
          </article>

          {/* Card IA */}
          <article className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 md:p-8">
            <div className="relative mb-6">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-mesh-3/20 to-mesh-1/10 blur-xl"
              />
              <MockupFrame
                variant="chat"
                ariaLabel="Prévia de uma conversa com IA recomendando o seu negócio, com o selo Perfiliza como fonte"
                className="mx-auto max-w-sm"
              >
                <ChatGptScene />
              </MockupFrame>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm1.3-5.7A1 1 0 0 0 13 12v1h-2v-1a3 3 0 0 1 1.3-2.5 1.5 1.5 0 1 0-2.3-1.3h-2a3.5 3.5 0 1 1 5 3.1Z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-ink">
              Quando alguém pergunta à IA.
            </h3>
            <p className="mt-3 text-muted">{aiText}</p>
            <a
              href="#planos"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Incluso no Growth · R$ 297/mês
              <span aria-hidden="true">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
