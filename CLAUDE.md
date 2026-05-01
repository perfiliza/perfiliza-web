# Perfiliza — Landing Page

Landing page institucional + de captação para a Perfiliza, negócio one-person de serviços pontuais de Google Business Profile (GBP) para PMEs brasileiras. CTA único leva para WhatsApp.

Plano de execução completo em `docs/PLANO.md`. Este arquivo carrega o contexto que Claude Code precisa em todo prompt.

## Stack

- Next.js 14 (App Router), TypeScript, src/ directory
- Tailwind CSS
- Hospedagem: Vercel (já configurada, deploy automático no push pra `main`)
- Domínio: perfiliza.com (já apontado)
- Tracking: Google Tag Manager → GA4 + Google Ads conversion

## Estrutura de pastas

```
src/
  app/
    layout.tsx          # GTM script + metadata
    page.tsx            # home (única página de marketing)
    privacidade/
      page.tsx
    globals.css
  components/
    sections/           # Hero, Servicos, ComoFunciona, ProvaSocial
    ui/                 # Button, Card, WhatsAppCTA
  lib/
    gtm.ts              # helpers de dataLayer
    whatsapp.ts         # gerador de URL wa.me
  types/
    gtm.d.ts
public/
  images/
docs/
  PLANO.md
design-reference/       # screenshots da referência (não comitar imagens grandes)
```

## Decisões fixas

- **4 seções na home, sem mais:** Hero, Serviços (3 cards), Como funciona (3 passos), Prova + CTA final.
- **CTA único:** WhatsApp via wa.me. Nada de formulário, nada de e-mail.
- **Mobile-first:** começar layout em 360-390px e adicionar `md:` / `lg:` depois. Mais de 70% do tráfego virá de busca mobile no Google.
- **Linguagem simples:** "Perfil da Empresa no Google" no body, não "GBP". Tom de conversa com dono de PME.
- **Imagens via `next/image`** sempre, com `width`/`height` explícitos. Hero com `priority`. Demais com `loading="lazy"`.
- **Acessibilidade:** alt text em toda imagem, contraste AA mínimo, foco visível, `prefers-reduced-motion` respeitado.

## Tracking — padrão obrigatório

Todo CTA WhatsApp dispara via componente `<WhatsAppCTA />` que faz `dataLayer.push`:

```ts
window.dataLayer.push({
  event: 'click_whatsapp',
  section: 'hero' | 'servicos' | 'como_funciona' | 'cta_final',
  service: 'criacao' | 'otimizacao' | 'recuperacao' | 'geral'
})
```

GTM tem trigger custom event `click_whatsapp` que dispara duas tags: GA4 event + Google Ads conversion.

Nunca colocar `window.open` ou `<a href="wa.me/...">` cru fora do componente — quebra tracking.

## Variáveis de ambiente

Configurar em `.env.local` (dev) e no painel Vercel (Production + Preview):

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=55XXXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://perfiliza.com
```

Manter `.env.example` atualizado a cada nova variável.

## Decisões pendentes (Fase 0 — preencher antes de codar)

> Substituir cada bloco abaixo conforme decidir. Não codar componentes que dependem desses dados antes de fechar.

- **Número de WhatsApp:** `[A DEFINIR]`
- **Mensagem pré-preenchida por serviço:**
  - Criação: `[A DEFINIR]`
  - Otimização: `[A DEFINIR]`
  - Recuperação: `[A DEFINIR]`
  - Geral (CTA hero/final): `[A DEFINIR]`
- **Visual do hero:** `[foto real | ilustração — A DEFINIR]`
- **Cookie banner LGPD:** `[sim | não — A DEFINIR]`
- **CNPJ/endereço no footer:** `[A DEFINIR]`

## Tokens de design (após Fase 1)

> Preencher após análise da referência (epic.new). Adicionar em `tailwind.config.ts` em `theme.extend`.

- **Paleta primária:** `[A DEFINIR — hex]`
- **Paleta neutros:** `[A DEFINIR — escala]`
- **Cor de destaque (CTA):** `[A DEFINIR]`
- **Font heading:** `[A DEFINIR]` (Google Fonts)
- **Font body:** `[A DEFINIR]`
- **Escala tipográfica:** seguir defaults Tailwind (`text-base` → `text-7xl`) salvo decisão contrária.
- **Border-radius padrão:** `[A DEFINIR — `rounded-lg` ou custom]`

## Convenções de código

- TypeScript estrito (`strict: true` no tsconfig).
- Componentes server-side por padrão; só marcar `"use client"` quando precisar (interatividade, hooks de browser, GTM).
- Props tipadas com `interface ComponentProps`.
- Sem `any`. Sem `@ts-ignore` sem comentário explicando.
- Tailwind direto no JSX, sem `@apply` em CSS module exceto pra utilities globais em `globals.css`.
- Naming: componentes em PascalCase, hooks em camelCase com prefixo `use`, helpers em camelCase.
- Texto da UI sempre em PT-BR. Comentários em código também em PT-BR.

## Comandos

```bash
npm run dev          # dev server
npm run build        # build de produção (rodar antes de cada push)
npm run start        # serve build local
npm run lint         # ESLint
```

## Prioridade de qualidade

1. Lighthouse mobile ≥ 90 em Performance, Accessibility, SEO.
2. CTA acima do fold em mobile (360px).
3. LCP < 2.5s em mobile 4G simulado.
4. Tag Assistant verde em todos os firings (GTM, GA4, Conversion Linker, Conversion).
5. Testar em smartphone real (Android + iPhone) antes de declarar pronto — não confiar só em DevTools.

## Persona-alvo (pra calibrar copy e UX)

Dono ou gestor de PME brasileira (food service, saúde, serviços locais), 35-55 anos, pouco tempo, conhecimento técnico baixo. Dor: "perfil mal aparece no Google quando o cliente procura perto de mim" ou "perfil foi suspenso e não sei o que fazer". Decide rápido se a página soa confiável e direta. Some se vê formulário longo, jargão técnico ou promessa exagerada.
