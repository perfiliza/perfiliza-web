import type { NicheContent } from "@/types/content";

export const restaurantes: NicheContent = {
  key: "restaurantes",
  metadata: {
    title: "Restaurantes — seu Google cuidado toda semana",
    description:
      "“Comer perto de mim” decide quem lota o salão. A Perfiliza cuida do seu Google Meu Negócio por 30 dias — primeiro mês por nossa conta.",
    path: "/restaurantes",
  },
  hero: {
    title: "“Comer perto de mim” decide quem lota o salão.",
    subtitle:
      "Quem busca restaurante no Google decide em segundos. Primeiro mês por nossa conta. Se não fizer sentido, se despede sem cobrar nada.",
    ctaText: "Quero meu diagnóstico gratuito",
  },
  painPoints: [
    { icon: "magnifier", text: "Quem pesquisa “comer perto” não me encontra." },
    { icon: "camera", text: "Tenho foto dos anos 2010 no perfil." },
    { icon: "chat", text: "Reviews ruins sem resposta afastam cliente novo." },
    {
      icon: "tag",
      text: "Concorrente da esquina aparece com promoção; eu não.",
    },
  ],
  gbpIntro:
    "Restaurante vive de quem decide onde comer nas próximas 2 horas. Seu Google precisa estar pronto: cardápio, fotos, horário, avaliação respondida.",
  gbpFeatureDescriptions: {
    posts:
      "4 por mês com prato do dia, promoção, novidade no cardápio, horário especial.",
    fotos:
      "Fachada, salão, pratos por categoria (entrada, prato principal, sobremesa, bebida), equipe.",
    servicos:
      "Cardápio detalhado com foto, descrição e preço — direto no Google.",
    qa:
      "“Faz delivery?”, “Aceita pet?”, “Tem opção vegana?” — respondemos primeiro.",
    atributos:
      "Aceita pet, estacionamento, acessibilidade, Wi-Fi, delivery, reserva, esplanada.",
    horarios:
      "Feriados, véspera, Dia dos Namorados, Natal — atualizados antes.",
    reservas:
      "Link direto para reserva online, iFood ou WhatsApp.",
    reviews:
      "100% das avaliações respondidas, incluindo as críticas.",
  },
  whereText: {
    google:
      "“Comer perto de mim”, “restaurante no [bairro]”, “rodízio”, “almoço executivo” — são as buscas que enchem mesa. A Perfiliza deixa seu perfil pronto pra cada uma.",
    ai: "A IA recomenda restaurante o tempo todo. “Qual melhor [tipo de cozinha] no [bairro]?” O Growth coloca você nessa resposta.",
  },
  faqExtra: [
    {
      q: "Vocês atualizam cardápio e preço no Google?",
      a: "Sim. A gente mantém o cardápio do seu perfil sincronizado com o que você serve — inclusive foto, descrição e preço. Mudou o prato do dia? Me manda no WhatsApp e eu subo.",
    },
    {
      q: "Posso promover cerveja, vinho ou drinque no post?",
      a: "Dá. A gente respeita as restrições da praça (horário e regulamentação local) e evita promessa de consumo. Posts com bebida vão sempre sem apelação a quem não pode consumir.",
    },
  ],
  nicheDisclaimer:
    "Perfiliza respeita as normas municipais de publicidade de alimentos e bebidas. Posts de bebida alcoólica seguem a regulamentação da cidade do cliente.",
  waMessages: {
    hero: "Oi! Tenho restaurante. Quero o diagnóstico gratuito do meu Google.",
    precos:
      "Oi! Vi o plano (Starter ou Growth) para restaurante. Podemos começar?",
    cta_final:
      "Oi! Vi o plano (Starter ou Growth) para restaurante. Podemos começar?",
    sticky_mobile:
      "Oi! Tenho restaurante. Quero o diagnóstico gratuito do meu Google.",
  },
  videoUrl: null,
};
