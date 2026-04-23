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
  posts: "Publicações semanais que aparecem quando te procuram.",
  fotos: "Capa, equipe, interior — cada uma na categoria certa.",
  servicos: "Catálogo com descrição, preço e foto quando couber.",
  qa: "Monitoramos e respondemos o que o público pergunta.",
  atributos: "Estacionamento, acessibilidade, Wi-Fi, pagamentos.",
  horarios: "Feriados e recessos atualizados antes da data.",
  reservas: "Link direto para agenda, WhatsApp ou reserva.",
  reviews: "100% das avaliações respondidas com revisão humana.",
};

interface Props {
  intro?: string;
  featureDescriptions?: Partial<Record<FeatureKey, string>>;
}

export default function GbpFeatures({
  intro = "Mais que nome e endereço. 8 funcionalidades que o Google usa para te ranquear — a gente cuida de todas.",
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
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-normal text-ink md:tracking-tight md:text-4xl">
            Seu Google Meu Negócio tem muito mais do que você imagina.
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">{intro}</p>
        </div>
        <ul className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
