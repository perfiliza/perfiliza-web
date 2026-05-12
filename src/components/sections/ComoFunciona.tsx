import type { ReactNode } from "react";

interface Passo {
  numero: number;
  icone: ReactNode;
  titulo: string;
  descricao: string;
}

function IconBase({ children }: { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 text-primary"
    >
      {children}
    </svg>
  );
}

function SearchCheckIcon() {
  return (
    <IconBase>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="m8 11 2 2 4-4" />
    </IconBase>
  );
}

function EyeIcon() {
  return (
    <IconBase>
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </IconBase>
  );
}

function HandshakeIcon() {
  return (
    <IconBase>
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </IconBase>
  );
}

const passos: Passo[] = [
  {
    numero: 1,
    icone: <SearchCheckIcon />,
    titulo: "1. A gente monta seu site",
    descricao:
      "Usamos as informações públicas da sua empresa (Google, Instagram, fotos) pra criar um site profissional pronto. Sem reunião, sem briefing longo.",
  },
  {
    numero: 2,
    icone: <EyeIcon />,
    titulo: "2. Você vê funcionando",
    descricao:
      "Mandamos o link pelo WhatsApp. Você abre, navega no celular, e decide se faz sentido.",
  },
  {
    numero: 3,
    icone: <HandshakeIcon />,
    titulo: "3. Se gostar, é R$ 347",
    descricao:
      "Pagamento único pelo ano todo, no PIX ou parcelado no cartão. Hospedagem inclusa. Sem mensalidade.",
  },
];

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="px-6 py-20 sm:py-24 scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl flex flex-col gap-12 lg:gap-16">
        <h2 className="font-display font-medium text-ink text-3xl lg:text-4xl lg:text-center">
          Como funciona
        </h2>
        <ol className="flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-12">
          {passos.map((p) => (
            <li key={p.numero} className="flex flex-col gap-4">
              {p.icone}
              <h3 className="font-display font-medium text-ink text-[22px] leading-snug">
                {p.titulo}
              </h3>
              <p className="text-muted text-base leading-relaxed">
                {p.descricao}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
