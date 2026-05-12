# Perfiliza — Landing Page

Landing page institucional + de captação para a Perfiliza, negócio one-person de **criação de sites institucionais para PMEs brasileiras por R$ 347/ano**, com pagamento só depois que o cliente vê o site pronto. Hospedagem inclusa, sem mensalidade, sem fidelização. CTA único leva para WhatsApp.

## Stack

- Next.js 16 (App Router), TypeScript, src/ directory
- Tailwind CSS v4 (tokens em `src/app/globals.css` via `@theme inline`, sem `tailwind.config.ts`)
- **Build**: static export (`output: "export"` em `next.config.ts` → diretório `out/`)
- **Hospedagem**: Cloudflare Pages (Git Integration, auto-deploy em push pra `main`)
- Domínio: perfiliza.com
- Sem analytics na v1 — toda interação externa é navegação direta pra `wa.me`. Quando voltarmos a medir, escolher stack compatível com CSP estrito (Plausible, Umami self-hosted, ou GTM com hash CSP).

## Estrutura de pastas

```
src/
  app/
    layout.tsx          # metadata + header/footer globais
    page.tsx            # home (única página de marketing)
    privacidade/
      page.tsx
    termos/
      page.tsx
    opengraph-image.tsx # OG dinâmico (pre-rendered no build)
    apple-icon.tsx      # icon Apple touch
    icon.svg            # favicon vetorial
    manifest.ts         # PWA manifest
    sitemap.ts          # sitemap.xml
    robots.ts           # robots.txt
    globals.css         # design tokens via @theme inline
  components/
    sections/           # Hero, ComoFunciona, OQueEstaIncluido, PerguntasComuns
    ui/                 # Button, Card, WhatsAppCTA
  lib/
    whatsapp.ts         # gerador de URL wa.me
    seo/constants.ts    # nome, descrição, tagline, theme color
public/
  _headers              # headers de segurança (CSP, HSTS etc.) lidos pelo Cloudflare Pages
  images/               # vazio na v1 (landing é type-driven)
```

## Decisões fixas

- **5 seções na home, sem mais:** Hero, Como funciona (3 passos com ícones inline), O que está incluído (card off-white com lista + preço R$ 347), Perguntas comuns (5 perguntas em accordion), Footer (no `layout.tsx`).
- **CTA único:** WhatsApp via `wa.me`. Nada de formulário, nada de e-mail.
- **Mobile-first:** começar layout em 375px (iPhone SE) e adicionar `lg:` depois. Mais de 70% do tráfego virá de busca mobile.
- **Linguagem simples:** tom de conversa com dono de PME. Sem jargão técnico. "Site da sua empresa" no corpo, nunca "website" ou "presença digital".
- **Hero type-driven:** sem imagem, sem mockup, sem ilustração. Whitespace é o protagonista.
- **CTAs em verde WhatsApp #25D366** — mantido como sinal visual do canal, mesmo na paleta monocromática sálvia.
- **Acessibilidade:** contraste AA mínimo, foco visível, `prefers-reduced-motion` respeitado, área de toque ≥ 44×44px nos botões e accordion triggers.
- **Sem scripts de terceiros** — CSP fica em `script-src 'self'` puro. Qualquer script externo (analytics, chat widget) precisa de decisão consciente e ajuste em `public/_headers`.

## Variáveis de ambiente

Configurar em `.env.local` (dev) e no painel Cloudflare Pages (Production + Preview):

```
NEXT_PUBLIC_WHATSAPP_NUMBER=55XXXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://perfiliza.com
```

Manter `.env.example` atualizado a cada nova variável.

## Decisões pendentes

- **Número de WhatsApp em produção:** confirmar valor em `NEXT_PUBLIC_WHATSAPP_NUMBER` no painel Cloudflare Pages.
- **CNPJ/endereço no footer:** ainda não exibido — adicionar quando MEI estiver formalizado.
- **Cookie banner LGPD:** desnecessário hoje (sem cookies de tracking). Revisitar se analytics voltar.

## Tokens de design (paleta v1 monocromática sálvia)

Definidos em `src/app/globals.css` via `@theme inline`:

- **Fundo principal:** branco puro `#FFFFFF` (`bg-bg`)
- **Cards / destaques:** off-white `#F5F1E8` (`bg-surface`)
- **Texto principal:** `#1F2419` (`text-ink`)
- **Texto secundário:** `#75695B` (`text-muted`)
- **Bordas:** `#D6C9B5` (`border-line`)
- **Marca (verde sálvia):** `#4A5A3A` (`text-primary` / `bg-primary`)
- **CTA (verde WhatsApp):** `#25D366` (`bg-action`)
- **Font heading:** Lora (Google Fonts, via `next/font` — self-hosted no build) — utility `font-display`
- **Font body:** Geist (Google Fonts, via `next/font` — self-hosted no build) — utility `font-sans` (default)
- **Border-radius:** `rounded-xl` (12px) nos cards, `rounded-full` nos botões CTA.
- **Escala tipográfica:** defaults Tailwind. H1 mobile `text-4xl` (36px), desktop `lg:text-6xl` (60px). H2 mobile `text-3xl` / `text-[26px]`, desktop `lg:text-3xl` ou `lg:text-4xl`. Body `text-base` ou `text-[17px]` mobile.

## Headers de segurança

`public/_headers` aplica em todas as rotas via Cloudflare Pages:

- HSTS com preload (2 anos)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY` + `frame-ancestors 'none'` (anti-clickjacking)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` bloqueando camera/mic/geo/FLoC
- CSP estrito: `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; frame-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; manifest-src 'self'; object-src 'none'`

`'unsafe-inline'` em `style-src` é necessário porque o Next injeta CSS crítico inline pro `next/font`. Resto é trancado.

## Convenções de código

- TypeScript estrito (`strict: true` no tsconfig).
- Componentes server-side por padrão; só marcar `"use client"` quando precisar (interatividade, hooks de browser). Como o site é static export puro, evitar `"use client"` quando possível.
- Props tipadas com `interface ComponentProps`.
- Sem `any`. Sem `@ts-ignore` sem comentário explicando.
- Tailwind direto no JSX, sem `@apply` em CSS module exceto pra utilities globais em `globals.css`.
- Naming: componentes em PascalCase, hooks em camelCase com prefixo `use`, helpers em camelCase.
- Texto da UI sempre em PT-BR. Comentários em código também em PT-BR.
- Ícones: inline SVG (não instalar `lucide-react`) seguindo o padrão de `MapPinHouseIcon` em `layout.tsx` — `viewBox="0 0 24 24"`, `stroke="currentColor"`, `strokeLinecap="round"`, `strokeLinejoin="round"`, `aria-hidden="true"`.

## Comandos

```bash
npm run dev          # dev server
npm run build        # static export → out/ (rodar antes de cada push)
npm run lint         # ESLint
npx serve out        # smoke test local do build estático
```

Static export não suporta `next start` — `out/` é servido por qualquer static host.

## Prioridade de qualidade

1. Lighthouse mobile ≥ 90 em Performance, Accessibility, SEO.
2. CTA acima do fold em mobile (375px).
3. LCP < 2.5s em mobile 4G simulado (fácil — landing sem imagens nem scripts externos).
4. Headers de segurança verdes em [securityheaders.com](https://securityheaders.com) e [observatory.mozilla.org](https://observatory.mozilla.org).
5. Testar em smartphone real (Android + iPhone) antes de declarar pronto — não confiar só em DevTools.

## Persona-alvo (pra calibrar copy e UX)

Dono ou gestor de PME brasileira (food service, saúde, serviços locais), 35-55 anos, pouco tempo, conhecimento técnico baixo. Dor: "não tenho site, ou tenho um site velho que cobra mensalidade que não cabe no caixa", "já fui enganado prometendo SEO/marketing", "não confio em pagar antes". Decide rápido se a página soa confiável e direta. Some se vê formulário longo, jargão técnico ou promessa exagerada. A promessa central — "veja pronto antes de pagar" — é o que mais converte ceticismo.
