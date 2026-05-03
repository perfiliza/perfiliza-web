# Reestruturação total — landing Perfiliza

## Context

A branch `develop` cresceu para algo bem maior do que o escopo descrito em `docs/PLANO.md` e `CLAUDE.md`: a home tem 12+ seções, existem 3 páginas de nicho (clinicas-esteticas, clinicas-odontologicas, restaurantes), há tracking server-side de Meta CAPI via `app/api/cta/route.ts`, e visual scenes elaboradas. O PLANO prescreve algo radicalmente mais enxuto: **uma única landing com 4 seções (Hero, Serviços, Como funciona, FAQ+CTA final)**, página `/privacidade`, e tracking apenas via GTM → GA4 + Google Ads.

O usuário decidiu:
- **Voltar ao escopo enxuto do PLANO**, removendo Meta Pixel/CAPI e páginas de nicho.
- Trabalhar **direto na branch `develop`** (commits de remoção em cima do estado atual).
- Tratar as **decisões da Fase 0 do PLANO como placeholders** durante a execução (não bloqueiam).
- **Não incluir prova social** na primeira versão (sem testimonials/cases). A 4ª seção fica como FAQ + CTA final apenas.
- **Copiar paleta/tipografia/espaçamentos de https://epic.new** como referência visual (inspiração, não plágio de conteúdo).
- **Manter cópia do plano em `docs/PLANO_REESTRUTURACAO.md`** para consulta durante a execução.

Resultado esperado: repositório com a estrutura de pastas exata de `CLAUDE.md`, build verde, GTM disparando `dataLayer.push({ event: 'click_whatsapp', section, service })` em todos os CTAs, copy com `[A DEFINIR]` nos pontos pendentes, tokens de design extraídos de epic.new aplicados em `tailwind.config.ts`, pronto para a Fase 0 ser preenchida e seguir para deploy.

---

## Fase 0 — Salvar cópia do plano

Antes de qualquer alteração, copiar este arquivo para `C:/Users/rsgon/Documents/perfiliza-web/docs/PLANO_REESTRUTURACAO.md` (mesmo conteúdo). Serve de referência rápida durante a execução, mesmo após o plan-mode encerrar.

---

## Fase A — Limpeza (deletar)

**Rotas/páginas:**
- `src/app/clinicas-esteticas/`, `src/app/clinicas-odontologicas/`, `src/app/restaurantes/` (pastas inteiras)
- `src/app/api/` (todo — remove a Edge route do Meta CAPI)
- `src/app/termos/` (PLANO só pede `/privacidade`)

**Componentes fora do escopo das 4 seções:**
- `src/components/TrustBar.tsx`, `NicheChooser.tsx`, `NichePage.tsx`, `PainPoints.tsx`, `GbpFeatures.tsx`, `WhereTheyFindYou.tsx`, `Pricing.tsx`, `VideoSection.tsx`, `ProofSection.tsx`, `FAQ.tsx`, `FinalCTA.tsx`, `HowItWorks.tsx`, `StickyMobileCTA.tsx`, `BrandLogo.tsx`, `LegalLayout.tsx`, `SiteHeader.tsx`, `Footer.tsx`
- `src/components/visual/` inteiro (scenes/, MeshGradient, MockupFrame, BadgeLive, AnimatedCounter, RevealMount)
- `src/components/seo/JsonLd.tsx`

**Conteúdo e tipos:**
- `src/content/` inteiro (`_shared.ts`, `home.ts`, `estetica.ts`, `odonto.ts`, `restaurantes.ts`)
- `src/types/content.ts`
- `src/types/globals.d.ts` (será reescrito como `gtm.d.ts` com apenas `dataLayer`)

**Lib obsoleto:**
- `src/lib/tracking.ts` (Meta Pixel + CAPI dedup)
- `src/lib/utm.ts` (FBP/FBC/eventID)
- `src/lib/seo/schemas.ts` (JSON-LD)
- `src/lib/seo/constants.ts` — manter (continua sendo usado por `layout.tsx`/`sitemap.ts`/manifest/og-image)

**Env:**
- `.env.example`: remover `META_CAPI_ACCESS_TOKEN` e `META_CAPI_PIXEL_ID`; adicionar `NEXT_PUBLIC_SITE_URL` (já citado em CLAUDE.md como obrigatório).

**Dependências npm:** nenhuma a remover. `package.json` já é minimalista (Next 16.2.4, React 19, Tailwind v4).

---

## Fase B — Estrutura final

Estrutura prescrita em CLAUDE.md, com mapeamento dos sobreviventes:

```
src/
  app/
    layout.tsx              # reescrever (remover RevealMount/JsonLd/schemas)
    page.tsx                # reescrever — importa as 4 seções
    privacidade/page.tsx    # reescrever sem LegalLayout/JsonLd
    globals.css             # mantido
    sitemap.ts              # reescrever (só `/` e `/privacidade`)
    manifest.ts             # mantido
    robots.ts               # mantido
    opengraph-image.tsx     # mantido
    apple-icon.tsx          # mantido
    icon.svg, favicon.ico   # mantidos
  components/
    sections/
      Hero.tsx              # novo (substitui components/Hero.tsx)
      Servicos.tsx          # novo
      ComoFunciona.tsx      # novo
      FaqCta.tsx            # novo (mini-FAQ + CTA final, SEM prova social na v1)
    ui/
      Button.tsx            # novo
      Card.tsx              # novo
      WhatsAppCTA.tsx       # derivado de WhatsAppButton.tsx
    analytics/
      GoogleTagManager.tsx  # mantido (já alinhado: next/script afterInteractive + noscript)
  lib/
    gtm.ts                  # novo
    whatsapp.ts             # simplificar (remover lógica de UTM)
    seo/constants.ts        # mantido
  types/
    gtm.d.ts                # novo (substitui globals.d.ts)
public/
  images/                   # criar com .gitkeep
```

`components/analytics/GoogleTagManager.tsx` fica nesse caminho (CLAUDE.md não proíbe subpasta) — já está alinhado com Passo 5.2 do PLANO.

---

## Fase C — Tracking simplificado

`src/types/gtm.d.ts`:
```ts
export {};
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
```

`src/lib/gtm.ts`:
```ts
export type Section = 'hero' | 'servicos' | 'como_funciona' | 'cta_final';
export type Service = 'criacao' | 'otimizacao' | 'recuperacao' | 'geral';

export function pushClickWhatsapp(section: Section, service: Service) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: 'click_whatsapp', section, service });
}
```

`src/lib/whatsapp.ts` simplificado — assinatura final:
```ts
export function buildWaUrl(message: string): string {
  const num = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '55000000000';
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
```

`src/components/ui/WhatsAppCTA.tsx` (`"use client"`): props `{ section: Section; service: Service; message: string; variant?; size?; children }`. Renderiza `<a href={buildWaUrl(message)} target="_blank" rel="noopener noreferrer">` e no `onClick` chama `pushClickWhatsapp(section, service)` antes do navigate. Sem `data-cta-position`, sem manipulação de UTM via DOM, sem `fireCTAEvents`.

`src/app/layout.tsx`: importa `<GoogleTagManager />`, fontes Geist+Fraunces, metadata mínima usando `seo/constants.ts`. Remove `RevealMount`, `JsonLd`, `organizationSchema`, `websiteSchema`. Footer mínimo inline com link `/privacidade` e CNPJ `[A DEFINIR]`.

---

## Fase C2 — Captura de tokens de design da epic.new

Antes de implementar UI, extrair os tokens visuais que serão aplicados em `tailwind.config.ts`. **Objetivo: replicar aparência (paleta, tipografia, espaçamento, micro-interações), não copiar conteúdo nem layout protegido.**

Passos:
1. **Capturar referências**:
   - Abrir https://epic.new em desktop (1280px+) e mobile (390px). Se a URL exigir login ou redirecionar, registrar a URL final e usar a página landing pública.
   - Tirar screenshots completos de cada viewport e salvar em `design-reference/` (criar a pasta na raiz do repo). **Adicionar `design-reference/` ao `.gitignore`** se imagens forem grandes — só `tokens.md` precisa ser comitado.
2. **Extrair tokens via DevTools** (Inspect Element → Computed):
   - Cores: paleta primária (background, hero), neutros (texto, borda), destaque (CTAs), todas em hex.
   - Tipografia: `font-family` (heading e body — geralmente Google Fonts; anotar nome exato), `font-size` e `line-height` de `h1`/`h2`/`h3`/`p`/`button`, `font-weight` usado em cada nível.
   - Espaçamento: `padding` vertical e horizontal de seção (mobile e desktop), `gap` entre cards/elementos.
   - Bordas/sombras: `border-radius` padrão (botões, cards), `box-shadow` em cards.
   - Breakpoints: identificar onde a layout muda (provavelmente `md` 768px e `lg` 1024px do Tailwind padrão).
3. **Documentar em `design-reference/tokens.md`** com tabelas: cor (nome → hex → uso), tipografia (elemento → font + size + line-height + weight), spacing (token → valor mobile → valor desktop), radius/shadow.
4. **Aplicar em `tailwind.config.ts`** em `theme.extend`:
   - `colors`: paleta custom nomeada (`brand`, `surface`, `ink`, `accent`, etc.)
   - `fontFamily`: `sans` (body) e `display` ou `heading` (titles), referenciando CSS variables das fontes Google que entram em `app/layout.tsx`
   - `borderRadius`: token padrão (ex: `rounded-card`, `rounded-cta`)
   - `boxShadow`: token padrão (ex: `shadow-card`)
5. **Importar fontes** em `app/layout.tsx` via `next/font/google` com `display: 'swap'` e expor como CSS variables (já há precedente: Geist+Fraunces no estado atual). Substituir pelas fontes da epic.new.
6. **Aplicar nos componentes**: usar os tokens nomeados (`bg-brand`, `text-ink`, `font-display`, `rounded-card`) em vez de valores hex/px direto.

Se a referência epic.new for inacessível ou não inspirar uma direção clara, o plano segue com tokens neutros (paleta cinza+verde WhatsApp `#25D366`, fonte Inter, `rounded-2xl`, `shadow-md`) como fallback — anotar em `tokens.md` que é fallback.

---

## Fase D — Componentes e copy (placeholders)

Todas as strings de copy ficam como `"[A DEFINIR]"` no código — Fase 0 do PLANO preenche depois.

- **`Hero`** (server): `<h1>[A DEFINIR — headline]</h1>`, sub `[A DEFINIR]`, `<WhatsAppCTA section="hero" service="geral" message="[A DEFINIR]">`. Visual: `<div className="aspect-square bg-neutral-100">` placeholder até Fase 0 decidir foto vs ilustração.
- **`Servicos`**: array tipado de 3 itens (`criacao` R$497, `otimizacao` R$ TBD, `recuperacao` R$1497), bullets `["[A DEFINIR]"]`. Renderiza `<Card>` por item com `<WhatsAppCTA section="servicos" service={s.key} message="[A DEFINIR]">Quero esse</WhatsAppCTA>`.
- **`ComoFunciona`**: 3 passos hardcoded conforme PLANO (1 fala WhatsApp, 2 diagnóstico+proposta, 3 entrega). Sem CTA.
- **`FaqCta`** (4ª seção, sem prova social na v1): mini-FAQ com 4 itens placeholder usando `<details>`/`<summary>` para acordeão acessível nativo, seguido de bloco de CTA final com `<WhatsAppCTA section="cta_final" service="geral" message="[A DEFINIR]">`. Adicionar comentário no topo do arquivo: `// v1: sem testimonials. Adicionar bloco de prova social aqui quando houver depoimentos reais.`
- **`Button` / `Card`**: utilitários simples Tailwind aplicando os tokens da Fase C2 (Button: primary/secondary, Card: container com `rounded-card shadow-card`).

Header/footer: PLANO não exige `SiteHeader`. Footer fica inline em `layout.tsx` como `<footer>` simples.

---

## Fase E — SEO mínimo + página legal

- `manifest.ts`, `robots.ts`, `opengraph-image.tsx`, `apple-icon.tsx`: inalterados.
- `sitemap.ts`: reescrito com apenas `/` e `/privacidade` (remove URLs de nicho e `/termos`).
- `app/privacidade/page.tsx`: reescrito sem `LegalLayout` e sem `JsonLd`. Estrutura simples (`<main>` com `<h1>` + seções). Conteúdo do arquivo atual pode ser portado, **mas remover seções que mencionam Meta Pixel / `_fbp` / `_fbc`** (atualizar para citar apenas GA4 + GTM + cookies próprios do WhatsApp).
- `seo/constants.ts`: revisar para remover constantes não usadas. Manter `BRAND_NAME`, `BRAND_DESCRIPTION`, `BRAND_THEME_COLOR`, `SITE_LOCALE`, `SITE_URL`.

---

## Fase F — Verificação

1. `npm run build` — zero warnings de import órfão.
2. `npm run lint` — verde.
3. `npm run dev` + DevTools Console: clicar em cada CTA e confirmar `dataLayer.push` com `event: 'click_whatsapp'` e os pares `section`/`service` esperados (sem `NEXT_PUBLIC_GTM_ID` real, o `<GoogleTagManager />` retorna null, mas o push manual roda igual — testar abrindo `window.dataLayer` no console).
4. Verificar links wa.me em mobile real abrem o WhatsApp com mensagem correta (mesmo com placeholders).
5. Manual em deploy preview Vercel: Tag Assistant verde, Lighthouse mobile ≥90 em Performance/Accessibility/SEO (alvos de CLAUDE.md).

---

## Pendências de Fase 0 (placeholders no código, não bloqueiam build)

A serem preenchidas pelo usuário após o plano executar:
- `NEXT_PUBLIC_WHATSAPP_NUMBER` no `.env.local`
- 4 mensagens WhatsApp (criação, otimização, recuperação, geral) → substituir `[A DEFINIR]` em cada `<WhatsAppCTA message="...">`
- Visual do Hero (foto real vs ilustração) → trocar o `<div>` placeholder
- Cookie banner LGPD (sim/não) → se sim, adicionar componente
- CNPJ/endereço no footer → substituir `[A DEFINIR]` no `<footer>` de `layout.tsx`
- Adicionar bloco de prova social em `FaqCta.tsx` (ou criar `ProvaSocial.tsx` separado) quando houver 2-3 depoimentos reais

---

## Critical files

- `src/app/layout.tsx` — reescrever
- `src/app/page.tsx` — reescrever (importa 4 seções)
- `src/app/sitemap.ts` — reescrever
- `src/app/privacidade/page.tsx` — reescrever sem LegalLayout/JsonLd/Meta
- `src/components/ui/WhatsAppCTA.tsx` — novo (deriva de `WhatsAppButton.tsx`, simplificado)
- `src/components/sections/{Hero,Servicos,ComoFunciona,FaqCta}.tsx` — novos
- `tailwind.config.ts` — aplicar tokens extraídos de epic.new
- `design-reference/tokens.md` — novo (documentação dos tokens visuais)
- `.gitignore` — adicionar `design-reference/*.png` se necessário
- `docs/PLANO_REESTRUTURACAO.md` — esta cópia
- `src/components/ui/{Button,Card}.tsx` — novos
- `src/lib/gtm.ts` — novo
- `src/lib/whatsapp.ts` — simplificar (remover param `utms`)
- `src/types/gtm.d.ts` — novo (substitui `globals.d.ts`)
- `.env.example` — remover Meta vars, adicionar `NEXT_PUBLIC_SITE_URL`

Reaproveitamento direto: `components/analytics/GoogleTagManager.tsx`, `lib/seo/constants.ts`, `app/manifest.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `app/apple-icon.tsx`, `app/globals.css`, `next.config.ts`, `tsconfig.json`, `package.json`, fontes Geist+Fraunces.
