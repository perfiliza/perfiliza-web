import Card from "@/components/ui/Card";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import type { Service } from "@/lib/gtm";

interface Servico {
  key: Exclude<Service, "geral">;
  tag: string;
  titulo: string;
  preco: string;
  precoSubtext: string;
  beneficio: string;
  bullets: string[];
  ctaLabel: string;
  message: string;
}

const servicos: Servico[] = [
  {
    key: "criacao",
    tag: "Pra quem ainda não tem",
    titulo: "Criação de Perfil",
    preco: "R$ 497",
    precoSubtext: "pagamento à vista, só após a entrega",
    beneficio:
      "Seu negócio aparece no Google e no Maps com perfil completo, sem cair na suspensão automática.",
    bullets: [
      "Cadastro do zero com categoria certa pro seu nicho",
      "Endereço, horário, telefone e fotos no padrão que o Google aceita",
      "Acompanhamento do processo de verificação até ficar no ar",
      "Primeira semana de ajustes inclusa, sem custo extra",
    ],
    ctaLabel: "Quero criar meu perfil",
    message:
      "Olá! Vi o serviço de Criação de Perfil no site da Perfiliza e quero saber como funciona pro meu negócio.",
  },
  {
    key: "otimizacao",
    tag: "Pra quem já tem mas não rende",
    titulo: "Otimização de Perfil",
    preco: "R$ 497",
    precoSubtext: "pagamento à vista, só após a entrega",
    beneficio:
      "Seu perfil sai do \"tá lá mas ninguém vê\" e passa a aparecer nas buscas certas, com mais cliques pra ligar e pra rota.",
    bullets: [
      "Diagnóstico completo do que está bloqueando seu perfil hoje",
      "Ajuste de categorias, descrição, serviços e atributos",
      "Plano de fotos, posts e respostas a avaliações",
      "Checklist do que você pode manter sozinho depois",
    ],
    ctaLabel: "Quero otimizar meu perfil",
    message:
      "Olá! Meu perfil no Google já existe mas tá rendendo pouco. Quero saber sobre a Otimização da Perfiliza.",
  },
  {
    key: "recuperacao",
    tag: "URGÊNCIA · Pra quem perdeu o perfil",
    titulo: "Recuperação de Perfil",
    preco: "R$ 1.497",
    precoSubtext:
      "pagamento à vista, só após reativar ou apresentar tentativa formal de recurso",
    beneficio:
      "Perfil suspenso ou removido do Google? A gente diagnostica o motivo, redige o recurso e organiza tudo que o Google pede pra reativar.",
    bullets: [
      "Análise do motivo real da suspensão (e do que precisa mudar)",
      "Carta de apelação escrita no padrão que o Google aceita",
      "Organização das provas e documentos exigidos",
      "Plano pra reduzir risco de cair de novo após reativação",
    ],
    ctaLabel: "Quero recuperar meu perfil",
    message:
      "Olá! Meu perfil no Google foi suspenso e preciso recuperar. Vim pelo site da Perfiliza.",
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="px-4 sm:px-6 py-16 sm:py-24 bg-surface-alt"
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-10">
        <header className="flex flex-col gap-3 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            3 serviços, 1 preço justo pra cada
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink">
            Escolha o que você precisa hoje
          </h2>
          <p className="text-base sm:text-lg text-muted">
            Sem mensalidade, sem fidelização. Você contrata uma vez, recebe
            pronto.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {servicos.map((s) => (
            <Card key={s.key} className="flex flex-col gap-4">
              <span className="self-start rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {s.tag}
              </span>
              <h3 className="font-display text-xl text-ink">{s.titulo}</h3>
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-semibold text-primary">{s.preco}</p>
                <p className="text-xs text-muted">{s.precoSubtext}</p>
              </div>
              <p className="text-base text-muted">{s.beneficio}</p>
              <ul className="flex flex-col gap-2 text-sm text-ink">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden="true" className="text-action">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <WhatsAppCTA
                  section="servicos"
                  service={s.key}
                  message={s.message}
                  size="md"
                  className="w-full"
                >
                  {s.ctaLabel}
                </WhatsAppCTA>
              </div>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted text-center max-w-2xl mx-auto">
          Garantia de execução: entrego exatamente o escopo combinado.
          <br />
          Não prometo posição no ranking — quem promete, mente.
        </p>
      </div>
    </section>
  );
}
