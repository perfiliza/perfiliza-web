# Perfiliza — Landing Page

Landing page institucional + de captação para a Perfiliza, negócio one-person de **criação de sites institucionais para PMEs brasileiras por R$ 347/ano**, com pagamento só depois que o cliente vê o site pronto. Hospedagem inclusa, sem mensalidade, sem fidelização. CTA único leva para WhatsApp.

Plano de execução em `docs/PLANO.md` (se existir). Este arquivo carrega o contexto que Claude Code precisa em todo prompt.

## Stack

- Next.js 14 (App Router), TypeScript, src/ directory
- Tailwind CSS v4 (tokens em `src/app/globals.css` via `@theme inline`, sem `tailwind.config.ts`)
- Hospedagem: Vercel (já configurada, deploy automático no push pra `main`)
- Domínio: perfiliza.com (já apontado)
- Tracking: Google Tag Manager → GA4 + Google Ads conversion

## Estrutura de pastas

```
src/
  app/
    layout.tsx          # GTM script + metadata + header/footer globais
    page.tsx            # home (única página de marketing)
    privacidade/
      page.tsx
    termos/
      page.tsx
    globals.css         # design tokens via @theme inline
  components/
    sections/           # Hero, ComoFunciona, OQueEstaIncluido, PerguntasComuns
    ui/                 # Button, Card, WhatsAppCTA
    analytics/          # GoogleTagManager
  lib/
    gtm.ts              # helpers de dataLayer
    whatsapp.ts         # gerador de URL wa.me
    seo/constants.ts    # nome, descrição, tagline, theme color
  types/
    gtm.d.ts
public/
  images/               # vazio na v1 (landing é type-driven)
```

## Decisões fixas

- **5 seções na home, sem mais:** Hero, Como funciona (3 passos com ícones Lucide), O que está incluído (card off-white com lista + preço R$ 347), Perguntas comuns (5 perguntas em accordion), Footer (no `layout.tsx`).
- **CTA único:** WhatsApp via `wa.me`. Nada de formulário, nada de e-mail.
- **Mobile-first:** começar layout em 375px (iPhone SE) e adicionar `lg:` depois. Mais de 70% do tráfego virá de busca mobile.
- **Linguagem simples:** tom de conversa com dono de PME. Sem jargão técnico. "Site da sua empresa" no corpo, nunca "website" ou "presença digital".
- **Hero type-driven:** sem imagem, sem mockup, sem ilustração. Whitespace é o protagonista.
- **CTAs em verde WhatsApp #25D366** — mantido como sinal visual do canal, mesmo na paleta monocromática sálvia.
- **Acessibilidade:** contraste AA mínimo, foco visível, `prefers-reduced-motion` respeitado, área de toque ≥ 44×44px nos botões e accordion triggers.

## Tracking — padrão obrigatório

Todo CTA WhatsApp dispara via componente `<WhatsAppCTA />` que faz `dataLayer.push`:

```ts
window.dataLayer.push({
  event: 'click_whatsapp',
  section: 'hero' | 'como_funciona' | 'preco' | 'footer',
  service: 'geral'
})
```

Como o produto agora é único, `service` é sempre `"geral"`. As `section`s refletem onde o CTA está: `hero` (Hero), `preco` (card "O que está incluído"), `footer` (link de WhatsApp no rodapé).

GTM tem trigger custom event `click_whatsapp` que dispara duas tags: GA4 event + Google Ads conversion.

Nunca colocar `window.open` ou `<a href="wa.me/...">` cru fora do componente — quebra tracking. Exceção: o link de WhatsApp no footer, que tem `data-cta-section="footer"` para o GTM disparar via trigger por atributo.

## Variáveis de ambiente

Configurar em `.env.local` (dev) e no painel Vercel (Production + Preview):

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=55XXXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://perfiliza.com
```

Manter `.env.example` atualizado a cada nova variável.

## Decisões pendentes

- **Número de WhatsApp em produção:** confirmar valor em `NEXT_PUBLIC_WHATSAPP_NUMBER` no painel Vercel.
- **CNPJ/endereço no footer:** ainda não exibido — adicionar quando MEI estiver formalizado.
- **Cookie banner LGPD:** decisão de não usar na v1 (cookies apenas analíticos, sem dados pessoais identificáveis).

## Tokens de design (paleta v1 monocromática sálvia)

Definidos em `src/app/globals.css` via `@theme inline`:

- **Fundo principal:** branco puro `#FFFFFF` (`bg-bg`)
- **Cards / destaques:** off-white `#F5F1E8` (`bg-surface`)
- **Texto principal:** `#1F2419` (`text-ink`)
- **Texto secundário:** `#75695B` (`text-muted`)
- **Bordas:** `#D6C9B5` (`border-line`)
- **Marca (verde sálvia):** `#4A5A3A` (`text-primary` / `bg-primary`)
- **CTA (verde WhatsApp):** `#25D366` (`bg-action`)
- **Font heading:** Lora (Google Fonts, via `next/font`) — utility `font-display`
- **Font body:** Geist (Google Fonts, via `next/font`) — utility `font-sans` (default)
- **Border-radius:** `rounded-xl` (12px) nos cards, `rounded-full` nos botões CTA.
- **Escala tipográfica:** defaults Tailwind. H1 mobile `text-4xl` (36px), desktop `lg:text-6xl` (60px). H2 mobile `text-3xl` / `text-[26px]`, desktop `lg:text-3xl` ou `lg:text-4xl`. Body `text-base` ou `text-[17px]` mobile.

## Convenções de código

- TypeScript estrito (`strict: true` no tsconfig).
- Componentes server-side por padrão; só marcar `"use client"` quando precisar (interatividade, hooks de browser, GTM).
- Props tipadas com `interface ComponentProps`.
- Sem `any`. Sem `@ts-ignore` sem comentário explicando.
- Tailwind direto no JSX, sem `@apply` em CSS module exceto pra utilities globais em `globals.css`.
- Naming: componentes em PascalCase, hooks em camelCase com prefixo `use`, helpers em camelCase.
- Texto da UI sempre em PT-BR. Comentários em código também em PT-BR.
- Ícones: inline SVG (não instalar `lucide-react`) seguindo o padrão de `MapPinHouseIcon` em `layout.tsx` — `viewBox="0 0 24 24"`, `stroke="currentColor"`, `strokeLinecap="round"`, `strokeLinejoin="round"`, `aria-hidden="true"`.

## Comandos

```bash
npm run dev          # dev server
npm run build        # build de produção (rodar antes de cada push)
npm run start        # serve build local
npm run lint         # ESLint
```

## Prioridade de qualidade

1. Lighthouse mobile ≥ 90 em Performance, Accessibility, SEO.
2. CTA acima do fold em mobile (375px).
3. LCP < 2.5s em mobile 4G simulado (fácil — landing sem imagens).
4. Tag Assistant verde em todos os firings (GTM, GA4, Conversion Linker, Conversion).
5. Testar em smartphone real (Android + iPhone) antes de declarar pronto — não confiar só em DevTools.

## Persona-alvo (pra calibrar copy e UX)

Dono ou gestor de PME brasileira (food service, saúde, serviços locais), 35-55 anos, pouco tempo, conhecimento técnico baixo. Dor: "não tenho site, ou tenho um site velho que cobra mensalidade que não cabe no caixa", "já fui enganado prometendo SEO/marketing", "não confio em pagar antes". Decide rápido se a página soa confiável e direta. Some se vê formulário longo, jargão técnico ou promessa exagerada. A promessa central — "veja pronto antes de pagar" — é o que mais converte ceticismo.
