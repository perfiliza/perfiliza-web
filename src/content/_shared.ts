import type { FaqItem, NicheCard } from "@/types/content";

export const faqCommon: FaqItem[] = [
  {
    q: "Eu preciso te dar minha senha?",
    a: "Não. Você me adiciona como Administrador pelo painel oficial do Google — leva 2 minutos. E pode remover do mesmo jeito, a qualquer hora.",
  },
  {
    q: "Como é esse “primeiro mês por nossa conta” de verdade?",
    a: "Você começa hoje sem pagar nada. A gente cuida do seu Google por 30 dias. No dia 30, te mando um relatório. Se fez sentido, é R$ 197 via PIX e continua. Se não fez, a gente se despede sem cobrar.",
  },
  {
    q: "Tem fidelidade?",
    a: "Não. Cancelamento por WhatsApp em 1 mensagem, em qualquer mês. Seu preço nunca sobe enquanto você for cliente.",
  },
  {
    q: "Em quanto tempo eu vejo resultado?",
    a: "Os primeiros sinais — visualizações e cliques no Maps — costumam aparecer entre 15 e 30 dias. Avaliações dependem de quem te atende e do volume. Não prometo ranking; prometo o trabalho feito toda semana.",
  },
  {
    q: "Vocês prometem 1º lugar no Google?",
    a: "Não. Ninguém honesto promete ranking — isso depende do Google. A gente promete executar o que mexe a agulha: posts, reviews, fotos, perguntas, atualizações.",
  },
  {
    q: "O que é “GEO”?",
    a: "É o trabalho pra que ChatGPT, Gemini e Perplexity te mencionem quando alguém pergunta por um serviço na sua cidade. Está no Growth.",
  },
  {
    q: "E se eu já tenho agência de marketing?",
    a: "A Perfiliza é específica para Google. Convivemos bem com agência de Instagram ou site. Se a agência atual já cuida do Google, vale comparar o que cada lado entrega item a item.",
  },
  {
    q: "Como vocês lidam com meus dados?",
    a: "LGPD. A gente usa só o que está público no seu Google + o que você me manda. Você pode pedir exclusão a qualquer momento, e eu entrego todos os seus dados num zip.",
  },
];

export const nicheCards: NicheCard[] = [
  {
    key: "odonto",
    title: "Clínicas odontológicas",
    href: "/clinicas-odontologicas",
    blurb: "Ver como a Perfiliza cuida do Google da sua clínica.",
  },
  {
    key: "estetica",
    title: "Clínicas de estética",
    href: "/clinicas-esteticas",
    blurb: "Ver como a Perfiliza cuida do Google da sua clínica.",
  },
  {
    key: "restaurantes",
    title: "Restaurantes",
    href: "/restaurantes",
    blurb: "Ver como a Perfiliza cuida do Google do seu restaurante.",
  },
];

export const PROOF_DISCLAIMER =
  "Assim que tivermos o primeiro cliente com permissão, substituímos as projeções por depoimento real.";
