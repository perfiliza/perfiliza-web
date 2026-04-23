export type FeatureKey =
  | "posts"
  | "fotos"
  | "servicos"
  | "qa"
  | "atributos"
  | "horarios"
  | "reservas"
  | "reviews";

export const GBP_FEATURE_TITLES: Record<FeatureKey, string> = {
  posts: "Posts",
  fotos: "Fotos categorizadas",
  servicos: "Serviços / cardápio",
  qa: "Perguntas e respostas",
  atributos: "Atributos",
  horarios: "Horários especiais",
  reservas: "Reservas e agendamento",
  reviews: "Reviews respondidas",
};

export const GBP_FEATURE_DEFAULTS: Record<FeatureKey, string> = {
  posts:
    "Publicações semanais no seu perfil, que aparecem quando alguém te procura.",
  fotos:
    "Capa, equipe, interior, produtos e serviços, cada uma no lugar certo.",
  servicos:
    "Catálogo detalhado com descrição, preço e foto (quando couber).",
  qa: "Monitoramos e respondemos o que o público pergunta por lá.",
  atributos:
    "Estacionamento, acessibilidade, Wi-Fi, formas de pagamento, aceita convênio.",
  horarios:
    "Feriados, recessos, plantão, atualizados antes de o feriado cair.",
  reservas:
    "Link direto pra sua agenda, WhatsApp ou sistema de reserva.",
  reviews:
    "100% das avaliações com resposta em até 24h, revisadas por humano.",
};

interface Props {
  intro?: string;
  featureDescriptions?: Partial<Record<FeatureKey, string>>;
}

export default function GbpFeatures({
  intro = "A maioria dos donos acha que o perfil é só nome, endereço e telefone. Na verdade, é um mini-site com 8+ funcionalidades que o Google usa pra te ranquear — e a gente cuida de todas elas.",
  featureDescriptions,
}: Props) {
  const keys: FeatureKey[] = [
    "posts",
    "fotos",
    "servicos",
    "qa",
    "atributos",
    "horarios",
    "reservas",
    "reviews",
  ];

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Seu Google Meu Negócio tem muito mais do que você imagina.
          </h2>
          <p className="mt-4 text-lg text-muted">{intro}</p>
        </div>
        <ul className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {keys.map((k) => (
            <li
              key={k}
              className="rounded-xl border border-line bg-surface-alt p-5"
            >
              <h3 className="text-base font-semibold text-ink">
                {GBP_FEATURE_TITLES[k]}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {featureDescriptions?.[k] ?? GBP_FEATURE_DEFAULTS[k]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
