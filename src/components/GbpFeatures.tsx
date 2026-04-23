import MockupFrame from "./visual/MockupFrame";
import GbpDashboardScene from "./visual/scenes/GbpDashboardScene";

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

const KEYS: FeatureKey[] = [
  "posts",
  "fotos",
  "servicos",
  "qa",
  "atributos",
  "horarios",
  "reservas",
  "reviews",
];

export default function GbpFeatures({
  intro = "Mais que nome e endereço. 8 funcionalidades que o Google usa para te ranquear — a gente cuida de todas.",
  featureDescriptions,
}: Props) {
  return (
    <section className="reveal relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-normal text-ink md:tracking-tight md:text-4xl">
            Seu Google Meu Negócio tem muito mais do que você imagina.
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">{intro}</p>
        </div>

        {/* Desktop: mockup de dashboard + legenda lateral */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-10 lg:items-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 via-mesh-2/10 to-mesh-3/10 blur-2xl"
            />
            <MockupFrame
              variant="browser"
              ariaLabel="Painel do Google Meu Negócio com 8 funcionalidades destacadas"
            >
              <GbpDashboardScene />
            </MockupFrame>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {KEYS.map((k, i) => (
              <li
                key={k}
                className="rounded-xl border border-line bg-surface-alt p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-ink">
                    {GBP_FEATURE_TITLES[k]}
                  </h3>
                </div>
                <p className="mt-2 text-xs text-muted">
                  {featureDescriptions?.[k] ?? GBP_FEATURE_DEFAULTS[k]}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile/tablet: grid clássico com mini-previews */}
        <ul className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:hidden">
          {KEYS.map((k) => (
            <li
              key={k}
              className="rounded-xl border border-line bg-surface-alt p-5"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FeatureIcon kind={k} />
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-ink">
                    {GBP_FEATURE_TITLES[k]}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">
                    {featureDescriptions?.[k] ?? GBP_FEATURE_DEFAULTS[k]}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeatureIcon({ kind }: { kind: FeatureKey }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor" as const,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (kind) {
    case "posts":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 9h8M8 13h8M8 17h5" />
        </svg>
      );
    case "fotos":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="11" r="2" />
          <path d="m3 17 5-5 4 4 3-3 6 6" />
        </svg>
      );
    case "servicos":
      return (
        <svg {...common}>
          <path d="M4 6h16M4 12h16M4 18h10" />
        </svg>
      );
    case "qa":
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 0 1 7.6 14l.4 4-4-.4A9 9 0 1 1 12 3Z" />
          <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.7-2.5 2-2.5 4" />
          <circle cx="12" cy="17" r="0.6" fill="currentColor" />
        </svg>
      );
    case "atributos":
      return (
        <svg {...common}>
          <path d="m5 12 5 5L20 7" />
        </svg>
      );
    case "horarios":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "reservas":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      );
    case "reviews":
      return (
        <svg {...common}>
          <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 3Z" />
        </svg>
      );
  }
}
