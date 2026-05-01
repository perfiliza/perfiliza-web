# Plano de execução — Landing page Perfiliza + Campanhas Google Ads

**Objetivo:** publicar perfiliza.com com landing page enxuta que gera leads qualificados via WhatsApp para os 3 serviços de GBP (Criação, Otimização, Recuperação) e ativar tráfego pago no Google Ads com tracking funcional ponta-a-ponta.

**Stack:** Next.js 14 (App Router) + Tailwind CSS + Vercel + Google Tag Manager → GA4 + Google Ads.

**Tempo estimado total:** 15–22h distribuídas em 8 fases.

---

## Fase 0 — Decisões pendentes (resolver antes de começar)

Antes de codar, fechar:

1. **Número de WhatsApp** que receberá os leads (provavelmente o mesmo já em uso no negócio).
2. **Mensagem padrão pré-preenchida** no link wa.me (ex.: "Olá! Vim do site e quero falar sobre [serviço]").
3. **Privacy policy e termos de uso** — Google Ads exige privacy policy acessível. Pode ser página simples /privacidade.
4. **Cookie banner LGPD?** Recomendado mesmo. Vanilla-cookieconsent é leve e gratuito.
5. **Imagens do hero** — foto real (cliente, painel GBP, Maps) ou ilustração? Definir agora pra não trancar implementação.

---

## Fase 1 — Análise da referência (epic.new) — 1-2h

Antes de qualquer linha de código, capturar o que vai replicar.

### Passo 1.1 — Auditoria visual da epic.new
- Abrir epic.new em desktop e mobile.
- Tirar prints de cada seção (desktop e mobile).
- Salvar em `design-reference/` na raiz do repo (não comitar imagens grandes — usar .gitignore se necessário).

### Passo 1.2 — Extrair tokens de design
Documentar em `design-reference/tokens.md`:
- **Paleta:** cores primárias, secundárias, neutras, em hex.
- **Tipografia:** font-family (provavelmente uma do Google Fonts), tamanhos h1/h2/h3/body, line-heights.
- **Espaçamento:** padding de seção (mobile e desktop), gaps entre elementos.
- **Bordas/sombras:** border-radius padrão, box-shadow nos cards.
- **Breakpoints:** onde a layout muda (provavelmente sm/md/lg do Tailwind padrão).

### Passo 1.3 — Inspirar, não copiar
Replicar **aparência geral** (tipografia, espaçamento, paleta, micro-interações), não o conteúdo nem layouts protegidos. Se identificar componentes muito específicos, recriar from scratch com Tailwind.

---

## Fase 2 — Estrutura de seções e copy — 2-3h

### Passo 2.1 — Estrutura mínima (4 seções)

Para evitar poluição visual:

1. **Hero**
   - Headline (1 linha, foco em resultado)
   - Subheadline (1-2 linhas explicando o que faz)
   - CTA primário: botão WhatsApp
   - Visual: print do Maps com perfil otimizado OU ilustração

2. **Serviços** (3 cards)
   - Criação de Perfil — R$ 497
   - Otimização de Perfil — R$ X
   - Recuperação de Perfil Suspenso — R$ 1.497
   - Cada card: título, 1 frase de benefício, 3-4 bullets do que está incluso, CTA "Quero esse"

3. **Como funciona** (3 passos)
   - 1) Você fala comigo no WhatsApp
   - 2) Eu diagnostico e mando proposta
   - 3) Executo e entrego o perfil pronto
   - Reforço de garantia/forma de pagamento (Mercado Pago somente após entrega)

4. **Prova + CTA final**
   - 2-3 depoimentos curtos (ou cases anônimos)
   - Mini-FAQ (3-4 perguntas: quanto demora, posso pagar antes, e se não der certo, atende minha cidade)
   - CTA final WhatsApp

### Passo 2.2 — Copy persuasiva (linguagem simples)

Princípios:
- **Sem jargão** — "Perfil da Empresa no Google" no lugar de "GBP" no body. "GBP" só onde inevitável.
- **Foco no resultado**, não na ferramenta — "mais clientes te encontrando no celular" > "otimização de meta-tags".
- **Específico** — números e prazos sempre que possível.
- **Tom de conversa** — escreve como se tivesse falando com o dono da padaria.

Headlines candidatas pra hero:
- "Seu negócio bem posicionado no Google Maps em até 7 dias"
- "Apareça no Google Maps quando o cliente procurar perto de você"
- "Perfil no Google que traz cliente de verdade — não só cadastrado"

Escolher após teste rápido com 2-3 conhecidos do perfil-alvo.

### Passo 2.3 — Links de WhatsApp com UTM

Cada CTA leva pra wa.me com mensagem pré-preenchida e UTM diferente — pra saber qual seção converteu.

Formato:
```
https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1!%20Vim%20do%20site%20e%20quero%20falar%20sobre%20[servico]
```

Tracking via GTM (não dá pra colocar UTM no wa.me, então a "UTM" vira o **dataLayer event** que dispara no clique, com a seção como propriedade).

---

## Fase 3 — Setup técnico Next.js — 1-2h

### Passo 3.1 — Clonar e limpar repo
```bash
git clone git@github.com:perfiliza/perfiliza-web.git
cd perfiliza-web
# remover placeholder atual, manter .git e config Vercel
```

### Passo 3.2 — Inicializar Next.js (se ainda não estiver)
```bash
npx create-next-app@latest . --typescript --tailwind --app --eslint
```

Confirmar:
- App Router (não Pages Router)
- TypeScript
- Tailwind CSS
- src/ directory: opcional (recomendado: sim)

### Passo 3.3 — Estrutura de pastas
```
src/
  app/
    layout.tsx          # GTM script aqui
    page.tsx            # home
    privacidade/
      page.tsx          # privacy policy
    globals.css
  components/
    sections/
      Hero.tsx
      Servicos.tsx
      ComoFunciona.tsx
      ProvaSocial.tsx
    ui/
      Button.tsx
      Card.tsx
      WhatsAppCTA.tsx   # botão com tracking embutido
  lib/
    gtm.ts              # helpers para dataLayer
    whatsapp.ts         # gerador de link wa.me com tracking
public/
  images/
```

### Passo 3.4 — Configurar Tailwind com tokens da epic.new
Editar `tailwind.config.ts`:
- Adicionar paleta custom em `theme.extend.colors`
- Adicionar fontes em `theme.extend.fontFamily`
- Adicionar spacing custom se necessário

### Passo 3.5 — Variáveis de ambiente
Criar `.env.local` (e `.env.example`):
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=55XXXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://perfiliza.com
```

Configurar essas mesmas variáveis no painel da Vercel (Production + Preview).

---

## Fase 4 — Implementação UI — 4-6h

### Passo 4.1 — Componentes base
Implementar primeiro `Button`, `Card`, `WhatsAppCTA` — vão ser reusados.

`WhatsAppCTA.tsx` deve:
- Receber prop `section` (string) — pra disparar evento com origem
- Receber prop `serviceContext` opcional — pra pré-preencher mensagem WhatsApp
- Disparar `dataLayer.push({ event: 'click_whatsapp', section, service })` no onClick

### Passo 4.2 — Seções, na ordem
1. Hero — fixar layout antes, copy depois
2. Serviços — cards iguais, dados em array
3. Como funciona — visual simples (ícones + número + texto)
4. Prova + FAQ + CTA final
5. Footer — endereço/CNPJ se houver, links Privacidade e Termos, redes

### Passo 4.3 — Responsividade mobile-first
- Começar mobile, depois adicionar `md:` e `lg:`.
- Testar em viewports reais: 360px, 390px (iPhone), 768px, 1280px.
- Hero mobile: stack vertical, CTA acima do fold.
- Cards de serviço mobile: scroll horizontal ou stack — testar qual funciona melhor.

### Passo 4.4 — Imagens
- `next/image` sempre, com `width` e `height` explícitos.
- Formato: WebP ou AVIF.
- Hero image com `priority` pra LCP.
- Demais com `loading="lazy"`.

---

## Fase 5 — Google Tag Manager + GA4 + Pixel Google Ads — 2-3h

### Passo 5.1 — Criar container GTM
- tagmanager.google.com → criar conta "Perfiliza" → container "perfiliza.com" tipo Web.
- Anotar GTM-ID e colocar em `.env.local` e Vercel.

### Passo 5.2 — Instalar GTM no Next.js
No `app/layout.tsx`, dois snippets do GTM:
- Script tag no `<head>`
- noscript tag no `<body>` (logo após abertura)

Usar `next/script` com strategy `afterInteractive` pro snippet do head.

Criar tipagem global pra `window.dataLayer` em `src/types/gtm.d.ts`:
```ts
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
```

### Passo 5.3 — Configurar GA4 dentro do GTM
- analytics.google.com → criar property GA4 → anotar Measurement ID.
- No GTM: criar tag "GA4 Configuration" com o ID, trigger All Pages.

### Passo 5.4 — Tag de conversão Google Ads
- ads.google.com → criar conta (ou logar) → Tools → Conversions → New conversion action.
- Tipo: Website → Categoria: Submit lead form → Nome: "Click WhatsApp" → Valor: R$ 200 (valor médio de conversão estimado, ajustar depois).
- Anotar Conversion ID e Conversion Label.
- No GTM: criar duas tags:
  - "Google Ads — Conversion Linker" (trigger All Pages)
  - "Google Ads — Conversion: Click WhatsApp" (Conversion ID + Label, trigger custom event `click_whatsapp`)

### Passo 5.5 — Tag GA4 evento click_whatsapp
- No GTM: criar tag "GA4 Event — click_whatsapp" disparando no mesmo trigger.
- Parameters: `section` (de dataLayer), `service` (de dataLayer).

### Passo 5.6 — Trigger custom event
- No GTM: criar trigger "Custom Event" com nome `click_whatsapp`.
- Esse trigger é referenciado nas tags Google Ads e GA4 acima.

### Passo 5.7 — Publicar versão GTM
- Submit → publicar versão 1 com nota descritiva.

---

## Fase 6 — Deploy + QA — 1-2h

### Passo 6.1 — Build local
```bash
npm run build
npm run start
```
Resolver qualquer erro/warning.

### Passo 6.2 — Push e deploy
```bash
git add .
git commit -m "feat: landing page inicial com tracking"
git push origin main
```
Vercel faz deploy automático. Verificar no painel.

### Passo 6.3 — Confirmar domínio
- perfiliza.com responde HTTPS válido.
- Redirect www → apex (ou vice-versa, padronizar).

### Passo 6.4 — QA tracking (crítico)
- **Tag Assistant** (extensão Chrome): abrir perfiliza.com, conferir GTM, GA4, Conversion Linker firing.
- **GA4 DebugView**: ativar GA Debug, clicar nos botões WhatsApp, ver evento `click_whatsapp` chegando.
- **Google Ads**: aguardar até 24h, conferir status da conversão como "Recording conversions".
- Teste em **smartphone real** (Android + iPhone) — não só DevTools.

### Passo 6.5 — Lighthouse
Rodar Lighthouse mobile. Meta: ≥90 em Performance, Accessibility, SEO.
Quick wins se score baixo:
- Imagens: dimensões, formato, lazy loading.
- Fontes: `display: swap`, preload da principal.
- JS desnecessário: remover.

---

## Fase 7 — Campanhas Google Ads — 3-4h

> Usar a skill **google-ads-copy-analise-br** pra gerar copy e palavras-chave por nicho.

### Passo 7.1 — Estrutura de conta inicial

Começar enxuto. **2 campanhas de busca**:

**Campanha 1 — "Recuperação Suspenso"**
- Ângulo de urgência (cliente perdeu o perfil, dor aguda).
- Maior ticket (R$ 1.497), maior tolerância a CPC alto.
- Volume baixo mas conversão tende a ser melhor.

**Campanha 2 — "Criação + Otimização"**
- Volume maior, ticket menor.
- Pode subdividir em 2 ad groups: "Criar perfil" e "Otimizar perfil".

### Passo 7.2 — Palavras-chave (gerar via skill)

Tipos de match: **phrase match** no início (mais controle), abrir pra broad só depois de ter histórico de conversão.

Exemplos por campanha:
- Recuperação: `"perfil google suspenso"`, `"google meu negocio bloqueado"`, `"como recuperar perfil google"`.
- Criação/otim: `"criar perfil google empresa"`, `"otimizar google meu negocio"`, `"aparecer no google maps"`.

### Passo 7.3 — Negativas iniciais (lista compartilhada)
- gratis, gratuito, free, curso, aula, tutorial, como fazer
- vagas, salario, emprego, trabalhar
- youtube, tiktok
- maps amazing
- (refinar pelos search terms na primeira semana)

### Passo 7.4 — Anúncios responsivos de busca (RSA)
Usar a skill pra gerar:
- 12-15 headlines (variar ângulos: dor, solução, prova, urgência, CTA)
- 4 descriptions
- Pinning estratégico: 1 headline na posição 1 (a mais forte).
- Sitelinks (4): "Criação de Perfil", "Recuperação Suspenso", "Otimização", "Como funciona"
- Callouts (4-6): "Pagamento só após entrega", "Atendimento em 24h", "Garantia de execução", "Mais de X clientes"

### Passo 7.5 — Configurações de campanha
- **Localização:** Brasil. Excluir lugares irrelevantes se notar tráfego ruim.
- **Idioma:** Português.
- **Rede:** apenas Search. **Desmarcar** Search Partners e Display Network no início.
- **Orçamento:** começar com R$ 30-50/dia/campanha.
- **Estratégia de lance:** "Maximize Clicks" com CPC máximo manual (ex.: R$ 4) **até atingir 30 conversões**. Depois mudar pra "Maximize Conversions" ou "Target CPA".
- **Audience:** observar comportamentos relevantes (donos de pequenos negócios) sem segmentar restritivamente — só observation mode.

### Passo 7.6 — UTMs nas URLs finais
Em campaign settings → Tracking → Final URL suffix (ou no Final URL):
```
utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&utm_term={keyword}
```

Esses parâmetros chegam no GA4 e ajudam atribuir conversão certa.

### Passo 7.7 — Conversões
- Importar conversão "Click WhatsApp" como **conversão primária**.
- Marcar "Count: One" (não múltiplos cliques na mesma sessão).
- Janela de conversão: 30 dias (default).

### Passo 7.8 — Acompanhamento dos primeiros 7 dias
**Diariamente:**
- Search Terms Report → identificar termos irrelevantes → adicionar como negativos.
- Anúncios sem impressão ou CTR <2% após 1.000 impressões → revisar headline.

**No dia 7:**
- Avaliar CPC médio vs. estimativa.
- Ajustar orçamento entre campanhas conforme volume de conversão.

**Após 30 conversões:**
- Migrar pra "Maximize Conversions" ou "Target CPA" (CPA-alvo = ticket × margem aceitável).

---

## Fase 8 — Iteração contínua

Não é uma fase única — é o que vem depois.

- **Semanal nas primeiras 4 semanas:** revisar search terms, pausar anúncios fracos, testar 1 nova headline.
- **Mensal:** Lighthouse no site, Tag Assistant (não vai ter quebrado nada?), revisar funil GA4 (taxa de clique no CTA).
- **A cada 90 dias:** revisar copy do site se conversão cair, considerar A/B test do hero.

---

## Skills do Cowork que vão ser usadas

- **google-ads-copy-analise-br** — gerar headlines, descriptions, sitelinks, callouts; analisar dados depois que campanhas rodarem.
- **whatsapp-templates-gbp-br** — quando o lead chegar no WhatsApp, fluxo de qualificação já está estruturado.
- **gbp-onboarding-cliente-br** — quando o lead virar cliente pago, abertura de pasta + CRM.
- **proposta-comercial-gbp-br** — gerar proposta após qualificação.

---

## Checklist final antes de ligar tráfego pago

- [ ] perfiliza.com responde com HTTPS
- [ ] Lighthouse mobile ≥90 em Performance, Accessibility, SEO
- [ ] Tag Assistant mostra GTM, GA4, Conversion Linker e Conversion firing
- [ ] GA4 DebugView recebendo `click_whatsapp` com `section` e `service`
- [ ] Google Ads Conversion status = "Recording conversions"
- [ ] WhatsApp recebendo mensagem pré-preenchida em mobile real (Android + iPhone)
- [ ] Privacy policy publicada em /privacidade
- [ ] Cookie banner LGPD ativo (se decisão fase 0 = sim)
- [ ] Footer com CNPJ/endereço (se aplicável)
- [ ] 404 customizada
- [ ] Variáveis de ambiente todas em Production na Vercel
