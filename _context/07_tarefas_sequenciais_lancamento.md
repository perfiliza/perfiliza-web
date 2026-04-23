# 07. Tarefas sequenciais — do zero ao lançamento em 14 dias

> **Propósito**: checklist diário detalhado para sair **exatamente do zero** (nada mais que o domínio `perfiliza.com` e a ideia) até ter o **projeto ativo, com tráfego pago rodando e primeira landing recebendo leads reais**. Cada tarefa tem estimativa de tempo, entregável claro e dependências com tarefas anteriores.

---

## 7.1. Resumo do plano de 14 dias

| Fase | Dias | Foco | Entregável principal |
|---|---|---|---|
| **F1 — Fundação** | D1-D3 | Infra básica, contas, identidade | Domínio, emails, Sheets, contas Google/Meta Ads |
| **F2 — Produto** | D4-D6 | Landing pages, captação WhatsApp, agentes | perfiliza.com + `/clinicas-odontologicas` + `/clinicas-esteticas` + `/restaurantes` + CTAs wa.me + 6 agentes locais |
| **F3 — Go-to-market** | D7-D9 | Tráfego pago + materiais comerciais | Campanhas ativas, criativos, pitch, templates WhatsApp |
| **F4 — Primeiros leads** | D10-D14 | Primeiros leads, calls, venda | Diagnósticos enviados, calls agendadas, primeiro PIX |

**Tempo total estimado do fundador**: ~65-80h em 14 dias (≈5-6h/dia). Assume fundador solo, em dedicação parcial. Se for full-time, dá pra comprimir para 8-10 dias.

**Investimento financeiro nos 14 dias**: ~R$ 1.200-1.500.

> **Atualização 2026-04-22**: D1 fragmentado entre 2026-04-19 e 2026-04-22 (execução parcial fora da ordem original); D2 também iniciado parcialmente. O remanescente do D1 + D2 será executado na próxima janela contínua. A janela de 14 dias permanece válida a partir do dia em que a operação retomar em ritmo full-time (referenciado daqui em diante como `D-novo-1`).

---

## 7.2. Dia 1 — Fundação: identidade, emails, contas

> **Estado em 2026-04-23**: D1 parcialmente executado entre 2026-04-19 e 2026-04-23.
>
> **Já concluído**: domínio `perfiliza.com` (GoDaddy, 2026-04-19) · MX/TXT/SPF do Workspace na GoDaddy · Workspace Business Starter · `reinaldo.gonzaga@perfiliza.com` · alias `admin@perfiliza.com` · grupo `contato@perfiliza.com` (Collaborative Inbox) · 2FA do Workspace · cancelamento Google One · conta Mercado Pago CPF · GitHub `perfiliza-ops` (2026-04-20) · conta Vercel + integração GitHub · Claude Code Max (D2) · **GitHub `perfiliza-web` + projeto Vercel + domínio `perfiliza.com`/`www` apontados + HTTPS válido (2026-04-23)**.
>
> **Remanescente do D1**: `backup.perfiliza@gmail.com` (failover GBP) · 2FA em Vercel/GitHub/Mercado Pago/Google Ads/Meta · Mercado Pago: chave PIX aleatória + teste R$ 1 + Carnê-Leão + template de recibo PF · conta Google Ads · Meta Business Manager · Google Sheets "Perfiliza — CRM".

**Meta do dia**: ao fim do dia, o fundador tem **todas as contas criadas e seguras** para começar a construir no dia 2.

**Tempo estimado**: 5-6h.

### 7.2.1. Tarefas

- [x] **[~45min ativos + 5–60min de propagação]** Preparar `perfiliza.com` para receber a landing na Vercel — **concluído em 2026-04-23**
  - Domínio adquirido na GoDaddy em 2026-04-19. Objetivo desta tarefa: deixar DNS apto a receber deploy real no D3, validando o fluxo GoDaddy ↔ Vercel antes.
  - **Resultado**: `https://perfiliza.com` no ar com placeholder Next.js (repo `perfiliza-web`), HTTPS válido, MX do Workspace preservados.
  - Sub-passos:
    - [x] **Comprar `perfiliza.com` na GoDaddy** — concluído em 2026-04-19.
    - [x] **Criar conta Vercel** e integrar com GitHub — concluído em 2026-04-21.
    - [x] **Confirmar estado atual do DNS** — concluído em 2026-04-23.
    - [x] **Criar projeto Vercel placeholder**: repo `perfiliza-web` (Next.js) importado na Vercel, build inicial OK em `perfiliza-web.vercel.app` — concluído em 2026-04-23.
    - [x] **Adicionar domínio na Vercel**: `perfiliza.com` (apex, canônico) + `www.perfiliza.com` (redirect 308 para o apex) — concluído em 2026-04-23.
    - [x] **Trocar A/CNAME na GoDaddy**: A `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`. MX/TXT/SPF do Workspace preservados — concluído em 2026-04-23.
    - [x] **Validar**: painel Vercel com `Valid Configuration`, certificado Let's Encrypt emitido, `https://perfiliza.com` e `https://www.perfiliza.com` carregando placeholder com cadeado — concluído em 2026-04-23.
    - [x] **Checagem via terminal**: `nslookup` e MX confirmados — concluído em 2026-04-23.
  - **Notas**: o repo `perfiliza-web` foi criado em 2026-04-23 (antes era postergado para o D3); como a landing real ainda não está pronta, ele permanece com placeholder simples até a substituição planejada para o D3.
  - *(Opcional, pós-lançamento D30+)* Avaliar migração de DNS para Cloudflare se precisar de proxy/CDN, WAF gratuito ou gestão centralizada de múltiplos subdomínios

- [ ] **[~3h ativas + até 48h de propagação DNS]** Contratar Google Workspace e consolidar emails em `perfiliza.com`
  - **Decisão (2026-04-18)**: adotar **Google Workspace Business Starter (R$ 30/mês)** desde o D1. Motivo: plano de contratar equipe em breve exige controle admin, auditoria e revogação de acessos — recursos inexistentes no Gmail gratuito. Zoho e Gmail gratuito são descartados como solução permanente.
  - **Status em 2026-04-22**: passos 1–5 concluídos. Passos 6–8 são **N/A** — domínio e e-mails são novos, não há histórico Zoho/Gmail a migrar nem conta Zoho a encerrar. Falta apenas a conta de emergência (failover GBP).
  - **Sequência de execução (ordem importa — DNS leva até 48h):**
    - [x] **1. Assinar Workspace Business Starter** em [workspace.google.com](https://workspace.google.com) usando o domínio `perfiliza.com` — concluído em 2026-04-21.
    - [x] **2. Verificar propriedade do domínio** via registro TXT no DNS da GoDaddy — concluído em 2026-04-21.
    - [x] **3. Conta principal paga `reinaldo.gonzaga@perfiliza.com`** ativa (única licença paga neste momento) — concluído em 2026-04-21.
    - [x] **4. Alias `admin@perfiliza.com`** de `reinaldo.gonzaga@perfiliza.com` (aliases não contam como usuário adicional — custo zero). Acumula dois usos: (a) ser convidado como Administrador nos GBPs dos clientes; (b) cadastrar e gerenciar contas em ferramentas técnicas (Vercel, GitHub, Google Ads, Meta Business Manager). `admin@` precisa ser alias (não Grupo) porque o Google Business Profile não aceita Google Groups como Administrador — só contas de usuário individuais. Concluído em 2026-04-21.
    - [x] **4a. Grupo `contato@perfiliza.com`** com **Collaborative Inbox** ativada. Proprietário e único membro inicial: `reinaldo.gonzaga@perfiliza.com`. Em "Quem pode postar", marcado **Qualquer pessoa na web** (clientes externos podem enviar). Futuros atendentes entram como membros do grupo — sem consumir licença paga. Concluído em 2026-04-21.
    - [x] **5. MX records do `perfiliza.com` na GoDaddy** apontando para o Workspace (`smtp.google.com`, prioridade 1) — concluído em 2026-04-21. **Nota**: o passo original mencionava "remover entradas do Zoho", mas não havia Zoho prévio — só foram limpadas as entradas de estacionamento da GoDaddy.
    - ~~**6.** Importar histórico de emails do Zoho via Data Migration Service.~~ **N/A** — domínio e e-mail novos, sem histórico Zoho.
    - ~~**7.** Importar emails relevantes da marca Perfiliza de `trimmobe@gmail.com` e `rsgonzaga@gmail.com`.~~ **N/A** — não há histórico de marca anterior a migrar.
    - ~~**8.** Encerramento Zoho.~~ **N/A** — sem Zoho ativo.
  - **Notas importantes sobre contas existentes:**
    - `trimmobe@gmail.com` (com typo "mm") → **aposentar**. Não usar em nada relacionado a clientes, GBP ou marca Perfiliza. Prejudica percepção profissional.
    - `rsgonzaga@gmail.com` → **permanece estritamente pessoal**. Nunca vincular a GBP de cliente, Mercado Pago PJ, Ads da Perfiliza ou qualquer infraestrutura de negócio.
  - [ ] **Conta de emergência (failover):** criar uma conta Google gratuita adicional, ex: `backup.perfiliza@gmail.com`, e cadastrá-la como **Gerente backup em todos os GBPs de clientes** desde o primeiro cliente. Serve como failover caso a conta principal do Workspace seja comprometida ou suspensa temporariamente. 2FA obrigatório, senha em gerenciador. **Status em 2026-04-22**: pendente.
  - **Entregáveis**:
    - ✅ `reinaldo.gonzaga@perfiliza.com` ativo como conta principal paga; `admin@perfiliza.com` funcionando como alias (compatível com convite GBP); `contato@perfiliza.com` funcionando como Grupo com Collaborative Inbox.
    - ✅ MX records apontando para Google.
    - N/A — Histórico Zoho/Gmail (domínio novo, sem migração).
    - ⏳ `backup.perfiliza@gmail.com` criado, 2FA ativo, credenciais no gerenciador.
    - ⏳ Todas as senhas e códigos de recuperação em gerenciador (Bitwarden/1Password).

- [x] **[15min]** Cancelar assinatura Google One pessoal em `rsgonzaga@gmail.com` — **concluído em 2026-04-21**
  - Pré-requisito: confirmar em [one.google.com/storage](https://one.google.com/storage) que o uso atual é **< 15GB**.
  - Cancelar plano pago — conta pessoal volta ao tier gratuito de 15GB, sem perda de dados.
  - **Motivo**: consolidação de custos — Workspace Business Starter assume o papel de storage profissional (30GB em `admin@perfiliza.com`). Economia de R$ 12/mês.
  - **Custo líquido final da consolidação**: R$ 30 (Workspace) − R$ 12 (Google One cancelado) = **R$ 18/mês adicionais**.
  - **Entregável**: assinatura Google One cancelada; confirmação por email recebida.

- [ ] **[30min]** Configurar 2FA em tudo com app autenticador
  - **Status em 2026-04-22**: 2FA do Workspace já ativo (concluído em 2026-04-21). Pendente: Vercel, GitHub (`perfiliza`), Mercado Pago, e (após criação) Google Ads, Meta Business Manager, Cloudflare se aplicar.
  - Instalar Authy ou 1Password no celular (preferência declarada do usuário: ecossistema Apple — Senhas da Apple + iCloud Keychain).
  - Ativar 2FA em: Google ✅, Meta ⏳, Registro.br ⏳, Cloudflare ⏳, Vercel ⏳, GitHub ⏳, Mercado Pago ⏳.
  - **NÃO USAR SMS como 2FA** (risco de SIM swap).
  - Salvar códigos de recuperação em local seguro (físico ou gerenciador).

- [ ] **[20min]** Preparar Mercado Pago CPF para receber os primeiros pagamentos
  - **Decisão**: operar em CPF nesta fase inicial. **Não abrir MEI agora** — validar hipótese primeiro com até ~10 clientes.
  - **Status em 2026-04-22**: conta MP CPF já existe. Falta ativar chave PIX aleatória, fazer o teste R$ 1, criar coluna Carnê-Leão e o template de recibo PF.
  - Sub-passos:
    - [x] **Conta Mercado Pago pessoa física** disponível — concluído (preexistente).
    - [ ] **Ativar PIX com chave aleatória** (não usar CPF como chave pública — preserva privacidade).
    - [ ] **Testar "Link de pagamento"** gerando R$ 1,00 e pagando de outra conta para validar o fluxo end-to-end.
    - [ ] **Coluna `Carnê-Leão` na aba `Financeiro` do CRM** — toda entrada de cliente é lançada lá e gera DARF mensal até o dia 20 do mês seguinte via [Meu Imposto de Renda](https://www.gov.br/receitafederal). Isento até R$ 2.259,20/mês em 2026, depois alíquota progressiva 7,5–27,5%.
    - [ ] **Template de recibo simples** em `templates/recibo-pf.md` (criar junto com estrutura de pastas do D2). Não emitir NF neste estágio.
  - Separação contábil estrita: toda receita Perfiliza passa pela conta MP CPF; retiradas para conta pessoal saem mensalmente como "pró-labore informal", não misturar despesas pessoais com recebimento de cliente.
  - **Gatilhos para abrir MEI** (primeiro que disparar → abrir em 30 min via [gov.br/mei](https://www.gov.br/empresas-e-negocios), CNAE primária `7319-0/04` consultoria em publicidade, e adicionar CNPJ à conta MP existente para upgrade dual CPF+CNPJ):
    1. MRR ≥ R$ 2.500 por 2 meses consecutivos
    2. Receita anual acumulada ≥ R$ 20.000 (margem antes dos R$ 28.559 de isenção IRPF)
    3. 10º cliente pagante ativo
    4. Primeiro cliente PJ exigindo NFS-e

- [ ] **[1h]** Criar conta Google Ads
  - Acessar ads.google.com com `admin@perfiliza.com`
  - Configurar billing (cartão de crédito com limite ≥ R$ 2.000)
  - **Não criar campanha ainda** — só deixar a conta provisionada
  - Anotar Customer ID (formato `xxx-xxx-xxxx`)

- [ ] **[1h]** Criar Meta Business Manager
  - Acessar business.facebook.com com `admin@perfiliza.com`
  - Criar Business Manager "Perfiliza"
  - Criar Ad Account dentro do BM
  - Configurar billing (mesmo cartão)
  - Adicionar página do Facebook da Perfiliza (criar uma simples, se não existir)
  - Adicionar perfil Instagram `@perfiliza` (criar se não existir)

- [x] **[30min]** Criar conta no GitHub (ou usar existente) — **concluído em 2026-04-20** (ops) / **2026-04-23** (web)
  - **Decisão (2026-04-20)**: usar **2 repositórios separados** em vez de um único `perfiliza`:
    - `perfiliza-ops` (privado) → agentes, `_context/`, `CLAUDE.md`, templates, prompts, scripts. **Criado e com primeiro push em 2026-04-20** (`C:\Users\rsgon\Documents\PERFILIZA\`).
    - `perfiliza-web` (público) → landing Next.js, conectado à Vercel. **Criado em 2026-04-23 com placeholder Next.js** (será substituído pela landing real no D3).
  - Chave SSH `~/.ssh/perfiliza_ed25519` gerada e vinculada à conta `perfiliza` do GitHub.
  - Alias `github.com-perfiliza` configurado em `~/.ssh/config` para separar da conta antiga (`trimobe-git`) que já existia na máquina.
  - Identidade de commit definida **por repo** (`git config user.email 277848915+perfiliza@users.noreply.github.com`), não global — evita vazar autoria cruzada.
  - Primeiro commit de `perfiliza-ops` em 2026-04-20: `chore: contexto inicial do projeto Perfiliza` (`CLAUDE.md` + 9 arquivos em `_context/` + `.gitignore`).

- [ ] **[30min]** Criar Google Sheets "Perfiliza — CRM"
  - Criar 5 abas (mesmo plano de `00_visao_geral.md`):
    - `Leads`
    - `Clientes`
    - `Tarefas_Semana`
    - `Metricas_GBP`
    - `Financeiro`
    - `Trafego_Pago` (do arquivo 05)
    - `Placas_Enviadas` (do arquivo 06, se for usar)
  - Copiar cabeçalhos de cada aba
  - Compartilhar apenas com `admin@perfiliza.com` (não deixar público)

### 7.2.2. Checkpoint de fim de dia

**Concluído (2026-04-19 a 2026-04-23)**

- ✅ Domínio `perfiliza.com` ativo, com **HTTPS válido** servindo placeholder Next.js via Vercel
- ✅ Conta `reinaldo.gonzaga@perfiliza.com` ativa; alias `admin@perfiliza.com` e Grupo `contato@perfiliza.com` funcionando
- ✅ MX/TXT/SPF do Workspace preservados na GoDaddy após troca de A/CNAME
- ✅ 2FA do Google Workspace ativo (app autenticador)
- ✅ Google One pessoal cancelado
- ✅ Conta MP CPF disponível (chave PIX e teste pendentes)
- ✅ GitHub `perfiliza-ops` privado criado com primeiro push em 2026-04-20
- ✅ GitHub `perfiliza-web` público criado em 2026-04-23 (com placeholder Next.js)
- ✅ Conta Vercel + projeto `perfiliza-web` deployado + domínio `perfiliza.com`/`www` apontando + HTTPS validado (2026-04-23)

**Pendente para fechar o D1** (será executado fora da janela calendárica original)

- ⏳ `backup.perfiliza@gmail.com` (failover GBP) com 2FA
- ⏳ 2FA em Vercel, GitHub, Mercado Pago (e Google Ads/Meta após criação)
- ⏳ Mercado Pago: chave PIX aleatória + teste R$ 1 + coluna Carnê-Leão + template recibo PF
- ⏳ Conta Google Ads provisionada (sem campanha)
- ⏳ Meta Business Manager + Ad Account + página Facebook + IG `@perfiliza`
- ⏳ Google Sheets "Perfiliza — CRM" com 5–7 abas

---

## 7.3. Dia 2 — Fundação: stack técnica local + identidade visual mínima

**Meta do dia**: ambiente de desenvolvimento local funcionando + identidade visual básica (logo, cores, tipografia) definida.

**Tempo estimado**: 5-6h.

### 7.3.1. Tarefas

- [x] **[45min]** Instalar Claude Code Max localmente — **concluído em 2026-04-21**
  - Plano Claude Code Max contratado.
  - CLI instalada e autenticada localmente.
  - Sessões em uso ativo a partir de 2026-04-20.

- [ ] **[30min]** Criar estrutura de pastas local
  - **Ajuste (2026-04-20)**: em vez de um `~/perfiliza/` único, usar dois diretórios espelhando os dois repos.
  - `perfiliza-ops` já existe em `C:\Users\rsgon\Documents\PERFILIZA\` com `CLAUDE.md` + `_context/` + `.gitignore` versionados e remote `git@github.com-perfiliza:perfiliza/perfiliza-ops.git`. Falta apenas criar as subpastas operacionais:
    ```bash
    cd /c/Users/rsgon/Documents/PERFILIZA
    mkdir -p agentes templates prompts scripts logs clientes leads
    # clientes/ e leads/ já estão no .gitignore (LGPD)
    ```
  - `perfiliza-web` a clonar em D3:
    ```bash
    cd /c/Users/rsgon/Documents
    git clone git@github.com-perfiliza:perfiliza/perfiliza-web.git
    cd perfiliza-web
    git config user.email "277848915+perfiliza@users.noreply.github.com"
    ```

- [ ] **[1h]** Criar arquivo `CLAUDE.md` central (ver `03_agentes_claude_code_local.md`)
  - Definir persona, tom de voz, instruções globais
  - Salvar em `~/perfiliza/CLAUDE.md`
  - Primeiro commit no GitHub

- [ ] **[2h]** Identidade visual mínima
  - **Nome da marca**: Perfiliza (já definido)
  - **Cores**: definir 2 cores primárias + 1 secundária (sugestão: azul profundo `#0F2744`, verde `#34A853` — as cores do Google Maps — e branco `#FFFFFF`)
  - **Tipografia**: 2 fontes Google Fonts (sugestão: Inter + Fraunces, ou Manrope + Lora)
  - **Logo**: gerar no Canva ou Figma (versão "wordmark" simples, sem ícone complexo) — se não sair nada bom em 1h, usar apenas o texto "Perfiliza" em Fraunces SemiBold
  - **Favicon**: gerar .ico e .png 512x512

- [ ] **[45min]** Criar painel `@perfiliza` no Instagram (se não existe)
  - Bio mínima: "Gestão profissional do seu Google Meu Negócio. Diagnóstico gratuito → [link]"
  - Publicar **1 post inicial** (pode ser o logo + frase "em breve")
  - Conectar ao Meta Business Manager criado no D1

- [ ] **[30min]** Documentar tudo no README do repositório
  - Stack, convenções, senhas (via variáveis de ambiente, nunca commitadas)
  - Arquivo `.env.example` com as chaves esperadas

### 7.3.2. Checkpoint de fim de dia

- ✅ Claude Code funcionando no terminal
- ✅ Estrutura `~/perfiliza/` criada e versionada no GitHub
- ✅ `CLAUDE.md` central pronto
- ✅ Identidade visual mínima definida (ainda que rústica)
- ✅ Instagram @perfiliza ativo com 1 post

---

## 7.4. Dia 3 — Fundação: landing base (home perfiliza.com)

**Meta do dia**: `perfiliza.com` no ar, servindo **apenas a home** (ainda sem subpáginas específicas de nicho) + Meta Pixel + GA4 instalados.

**Tempo estimado**: 6h.

### 7.4.1. Tarefas

- [ ] **[30min]** Decidir stack de landing
  - Opção A (recomendada): Next.js 16 export estático + Vercel (gratuito)
  - Opção B (rápida): Framer (gratuito com limite + domínio custom R$ 90/mês)
  - Opção C (ultra-rápida): Carrd.co (R$ 190/ano)
  - **Recomendação para desenvolvedor**: A. Para não-dev: C.

- [ ] **[3h]** Implementar home da `perfiliza.com`
  - Usar a copy do arquivo `02_copy_landing_pages.md` (seção home)
  - Seções: Hero, Proposta de valor, Como funciona, Nichos atendidos (cards odonto + estética), Prova social (placeholder), Planos, FAQ, CTA final, Footer
  - Mobile-first, testar em celular
  - Velocidade: Lighthouse ≥ 85 em mobile

- [ ] **[45min]** Configurar Vercel + DNS
  - Conectar repo GitHub ao projeto Vercel
  - Adicionar domínio `perfiliza.com` e `www.perfiliza.com` no Vercel
  - Configurar DNS no Cloudflare (CNAME apontando para `cname.vercel-dns.com`)
  - Aguardar propagação (5-60min)

- [ ] **[30min]** Instalar Google Analytics 4
  - Criar propriedade GA4 em analytics.google.com
  - Adicionar tag base no `<head>` de todas as páginas
  - Configurar evento `generate_lead` como conversão
  - Testar via GA4 DebugView

- [ ] **[45min]** Instalar Meta Pixel
  - Copiar código do pixel de business.facebook.com
  - Adicionar no `<head>` global
  - Testar com Meta Pixel Helper (extensão Chrome): ao carregar a home, deve disparar `PageView`

- [ ] **[30min]** Configurar robots.txt + sitemap.xml
  - Sitemap automático pelo Next.js (`next-sitemap` ou equivalente)
  - robots.txt: permitir tudo, apontar para sitemap
  - Submeter sitemap ao Google Search Console (criar conta)

### 7.4.2. Checkpoint de fim de dia

- ✅ `https://perfiliza.com` no ar com a home
- ✅ GA4 e Meta Pixel instalados e disparando
- ✅ Mobile responsivo, Lighthouse ≥ 85 mobile
- ✅ Sitemap submetido ao Search Console

---

## 7.5. Dia 4 — Produto: landing `/clinicas-odontologicas` + captação WhatsApp

**Meta do dia**: a página de nicho primário (odontologia) está no ar, com CTA para WhatsApp funcionando end-to-end e rastreamento de conversão ativo.

**Tempo estimado**: 5h.

### 7.5.1. Tarefas

- [ ] **[3h]** Implementar `/clinicas-odontologicas`
  - Usar copy de `02_copy_landing_pages.md`
  - Todas as dobras: Hero, Dores específicas, Como funciona (3 passos), Resultados esperados (com disclaimer de projeção), Casos de uso (placeholder), Planos com preços, FAQ odontológico, CTA final
  - Todos os botões primários apontam para `wa.me/55XXXXXXXXXX?text=...` com a mensagem pré-preenchida odonto (ver `_context/02` §2.6)
  - Mesma velocidade e qualidade mobile da home

- [ ] **[30min]** Configurar mensagem pré-preenchida e testar links `wa.me`
  - Gerar URL com encoding correto (usar encodeURIComponent do JS ou ferramenta online)
  - Incluir no final da URL o UTM da campanha na própria mensagem: `...Google Maps: (vim do google-odonto-search)`
  - Testar no celular (iOS + Android): clicar abre WhatsApp nativo com mensagem já colada
  - Testar no desktop: abre WhatsApp Web com mesma mensagem
  - Validar que o número configurado está correto e com WhatsApp Business ativo

- [ ] **[45min]** Configurar rastreamento de conversão no clique do CTA
  - Adicionar `onclick` nos botões CTA disparando 3 eventos simultâneos:
    - GA4: `click_whatsapp_cta` com parâmetros `landing` e `posicao`
    - Meta Pixel: `ClickWhatsAppCTA` (evento customizado)
    - Google Ads: conversão "Clique no WhatsApp"
  - Configurar o evento `ClickWhatsAppCTA` como **conversão** no Meta Events Manager
  - Ativar Conversions API server-side (duplicar o evento) via Edge Function da Vercel ou GTM Server
  - Testar: clicar no CTA e conferir que os 3 eventos aparecem nos respectivos dashboards em até 10 min

- [ ] **[30min]** WhatsApp Business: respostas rápidas + mensagem de boas-vindas
  - Cadastrar respostas rápidas no app: `/diag-confirm` (template 1), `/diag-entrega` (template 2), `/call-convite` (template 3)
  - **Desativar mensagem automática de ausência** — queremos atender sempre manual nos primeiros 14 dias
  - Atalhos dos templates memorizados pelo fundador

- [ ] **[15min]** Testar funil end-to-end em celular real
  - Abrir `perfiliza.com/clinicas-odontologicas` no 4G (sem Wi-Fi)
  - Clicar no CTA principal → WhatsApp abre com mensagem pronta
  - Enviar mensagem de teste → conferir que chegou no WhatsApp Business do fundador
  - Conferir que o evento `ClickWhatsAppCTA` foi registrado (GA4 Realtime / Meta Events Manager)

### 7.5.2. Checkpoint de fim de dia

- ✅ `/clinicas-odontologicas` no ar
- ✅ Links `wa.me` funcionando em iOS + Android + Desktop (WhatsApp Web)
- ✅ Evento `ClickWhatsAppCTA` disparando nos 3 pixels (GA4, Meta, Google Ads)
- ✅ WhatsApp Business do fundador com respostas rápidas cadastradas
- ✅ Conversa de teste enviada e recebida

---

## 7.6. Dia 5 — Produto: landings `/clinicas-esteticas` + `/restaurantes` + ajustes

**Meta do dia**: as outras 2 landings de nicho no ar (estética e restaurantes) + correções dos bugs descobertos no D4. Como o template de seções já foi consolidado no D4, replicar para os 2 nichos é majoritariamente preenchimento de conteúdo por nicho (`content/niches/<slug>.ts`).

**Tempo estimado**: 6-7h.

### 7.6.1. Tarefas

- [ ] **[2h]** Implementar `/clinicas-esteticas`
  - Mesma estrutura de `/clinicas-odontologicas`, com copy específica do arquivo `_context/02_copy_landing_pages.md` §2.7.3
  - Trocar imagens/ícones para refletir nicho estética
  - Botões CTA apontam para `wa.me/...` com **mensagem pré-preenchida específica da estética** (diferente da odonto — ver `_context/02` §2.6.2) — isso permite identificar origem do lead sem UTM externo

- [ ] **[2h]** Implementar `/restaurantes`
  - Mesma estrutura do template, com copy específica do arquivo `_context/02_copy_landing_pages.md` §2.7.4
  - Trocar imagens/ícones para refletir nicho restaurantes (Maps com pratos, foto de salão, etc.)
  - Botões CTA apontam para `wa.me/...` com **mensagem pré-preenchida específica de restaurantes** (ver `_context/02` §2.6.2)
  - Disclaimer de regulamentação municipal (bebida alcoólica) no rodapé

- [ ] **[30min]** Validar tracking das duas landings novas
  - Testar que o evento `ClickWhatsAppCTA` dispara com parâmetro `landing=estetica` em `/clinicas-esteticas`
  - Testar idem com `landing=restaurantes` em `/restaurantes`
  - Conferir que o Meta e GA4 diferenciam cliques de cada landing

- [ ] **[1h]** Polir home (reler com olhos críticos)
  - Ajustar headlines se não estão convertendo mentalmente
  - Checar CTAs (todos apontam para o `wa.me` correto com mensagem pré-preenchida?)
  - Atualizar footer com dados mínimos: CNPJ, email de contato, link para Política de Privacidade e Termos (usar gerador online como privacyterms.io)

- [ ] **[30min]** Criar páginas legais mínimas
  - `/privacidade`: política de privacidade LGPD (usar template gratuito)
  - `/termos`: termos de uso do serviço (template)
  - Ambas linkadas no footer

- [ ] **[15min]** Testar mobile novamente com colega ou familiar
  - Peça para uma pessoa não-técnica navegar e relatar confusões
  - Anotar fricções e corrigir as 3 piores

### 7.6.2. Checkpoint de fim de dia

- ✅ `/clinicas-esteticas` no ar
- ✅ `/restaurantes` no ar
- ✅ Home com ajustes de fricção identificados
- ✅ Páginas legais (`/privacidade` + `/termos`) publicadas
- ✅ Funil testado por 3ª pessoa

---

## 7.7. Dia 6 — Produto: agentes Claude Code locais

**Meta do dia**: os 6 agentes do arquivo `03_agentes_claude_code_local.md` implementados localmente e testados com 1 perfil GBP de teste.

**Tempo estimado**: 6-7h.

### 7.7.1. Tarefas

- [ ] **[30min]** Criar perfil GBP de teste para desenvolvimento
  - Usar um perfil real (pode ser MEI do próprio fundador ou de um amigo que autorize)
  - Evitar testar em perfil de cliente real antes de validar os agentes

- [ ] **[1h]** Implementar agente `review-responder`
  - Estrutura em `~/perfiliza/agentes/review-responder/`
  - `agent.md` (prompt), `README.md` (uso), exemplo input/output
  - Testar com 3 reviews reais (positiva, negativa, neutra)

- [ ] **[1h]** Implementar agente `post-creator`
  - Criar em `~/perfiliza/agentes/post-creator/`
  - Testar gerando 3 posts para o perfil de teste

- [ ] **[1h]** Implementar agente `profile-auditor`
  - `~/perfiliza/agentes/profile-auditor/`
  - Testar rodando contra o perfil de teste + 1 perfil real público

- [ ] **[1h]** Implementar agente `geo-auditor`
  - Auditar presença em ChatGPT, Perplexity, Claude
  - Testar com nome da clínica fictícia

- [ ] **[1h]** Implementar agente `report-generator`
  - Consolidar outputs dos outros agentes em PDF ou markdown estilizado
  - Template em `~/perfiliza/templates/relatorio-mensal.md`

- [ ] **[1h]** Implementar agente `diagnostico`
  - Este é o mais importante — gera o relatório gratuito para leads
  - Tempo de execução alvo: ≤ 10 min
  - Output: PDF ou link estático de landing personalizada

- [ ] **[30min]** Commit tudo no GitHub
  - Commit organizado por agente
  - README do repo atualizado listando os 6 agentes

### 7.7.2. Checkpoint de fim de dia

- ✅ 6 agentes implementados e commitados
- ✅ Cada agente testado com ao menos 1 execução real bem-sucedida
- ✅ Tempo de execução do agente `diagnostico` medido (≤ 10 min alvo)

---

## 7.8. Dia 7 — Go-to-market: criativos de tráfego pago

**Meta do dia**: todos os criativos de anúncios produzidos (conforme arquivo `05_trafego_pago_reduzido.md`).

**Tempo estimado**: 5-6h.

### 7.8.1. Tarefas

- [ ] **[2h]** Criar 3 criativos para Meta Odontologia
  - Carrossel "5 erros" (5 cards no Canva/Figma)
  - Vídeo 15s "voz do fundador" (gravar com celular, editar no CapCut)
  - Estático "antes e depois" (Figma)

- [ ] **[1h30]** Criar 2 criativos para Meta Estética
  - Carrossel adaptado
  - Vídeo curto adaptado

- [ ] **[45min]** Criar sitelinks + extensões do Google Ads
  - Configurar sitelinks, callouts, structured snippets na interface do Google Ads

- [ ] **[45min]** Montar os 3 anúncios responsivos (RSA) do Google Search
  - Usar os 15 títulos + 4 descrições de cada RSA (arquivo 05)
  - Deixar em rascunho, ainda não ativar

- [ ] **[30min]** Revisar tudo com olhar crítico
  - Todos os criativos têm disclaimer "projeção baseada em benchmarks setoriais" onde necessário?
  - Todos os CTAs levam para URL correta com UTM correto?
  - Todos os textos cabem no espaço do posicionamento (testar em preview)?

### 7.8.2. Checkpoint de fim de dia

- ✅ 5 criativos Meta (3 odonto + 2 estética) produzidos
- ✅ 3 RSAs Google Ads em rascunho
- ✅ Extensões e sitelinks configurados
- ✅ Disclaimers de honestidade presentes em todos os criativos

---

## 7.9. Dia 8 — Go-to-market: subir campanhas + materiais comerciais

**Meta do dia**: campanhas ativas + materiais prontos para o primeiro lead responder.

**Tempo estimado**: 5h.

### 7.9.1. Tarefas

- [ ] **[1h]** Subir campanha Google Search (odonto)
  - Seguir estrutura do arquivo 05
  - Orçamento R$ 20/dia
  - Palavras-chave negativas aplicadas
  - Conversão configurada (evento `generate_lead` do GA4 importado como conversão no Google Ads)
  - **Deixar em rascunho** até o fim do dia — só ativar após revisão cruzada

- [ ] **[1h]** Subir campanha Meta Odontologia
  - Conjunto A (interesse profissional)
  - 3 criativos
  - Orçamento R$ 10/dia
  - Otimização por conversão `Lead`
  - Em rascunho

- [ ] **[30min]** Subir campanha Meta Estética
  - Versão reduzida com 2 criativos
  - Orçamento R$ 5/dia
  - Em rascunho

- [ ] **[45min]** Montar pitch de call (script de venda de 20 min)
  - Abertura (2min): rapport + contexto
  - Descoberta (8min): 3 perguntas-chave do cliente
  - Apresentação do diagnóstico (5min): mostrar 2-3 pontos críticos
  - Oferta (3min): planos e preço (Starter R$ 197 / Growth R$ 297) + promessa do 1º mês por nossa conta
  - Fechamento (2min): próximo passo = adicionar `admin@perfiliza.com` como Administrador do GBP hoje, início do ciclo de 30 dias conta a partir do aceite, PIX só no dia 30 se cliente decidir continuar

- [ ] **[30min]** Criar templates de WhatsApp (cadastrar como **respostas rápidas** no WhatsApp Business)
  - Template 1 (`/diag-confirm`): confirmação em até 2h úteis após primeira mensagem do lead — "Recebemos, até amanhã neste horário você tem o PDF" + pedido de nome da clínica + link do Google Maps (se ainda não mandou). Ver texto completo em `_context/02` §2.6.
  - Template 2 (`/diag-entrega`): entrega do PDF no mesmo chat com 3 insights + convite pra call. Ver `_context/02` §2.6.
  - Template 3 (`/call-convite`): agendamento de call com link Cal.com
  - Template 4 (`/call-lembrete`): lembrete 24h antes da call
  - Template 5 (`/onboarding`): pós-call com tutorial de adicionar `admin@perfiliza.com` como Administrador GBP (sem cobrança neste momento)
  - Template 6 (`/ciclo-25`): check-in dia 25 do ciclo (relatório em preparação)
  - Template 7 (`/ciclo-28`): dia 28 do ciclo (preview do relatório + expectativa da decisão do cliente)
  - Template 8 (`/ciclo-30`): dia 30 do ciclo — relatório final + link PIX R$ 197 (recorrente) OU mensagem de despedida amigável

- [ ] **[30min]** Criar link Cal.com (ou Google Calendar público)
  - Slots de 30 min, seg-sex 10h-18h, exceto horário de almoço
  - Perguntas pré-call: nome, clínica, link GBP (já coletadas no form, mas reconfirmar)
  - Notificações ligadas (email + celular)

- [ ] **[45min]** **Revisão final antes de ativar**: checklist de 5.11 do arquivo 05
  - Testar fluxo `wa.me` uma última vez em iOS + Android + Desktop
  - Confirmar que os 3 pixels (GA4, Meta, Google Ads) estão capturando `ClickWhatsAppCTA`
  - Ativar as 3 campanhas (todas simultaneamente é ok se budget permitir)

### 7.9.2. Checkpoint de fim de dia

- ✅ 3 campanhas **ativas** (Google Search odonto, Meta Odonto, Meta Estética)
- ✅ Pitch de call ensaiado (gravado em áudio para autoavaliação)
- ✅ Templates de WhatsApp salvos
- ✅ Cal.com público e funcional

---

## 7.10. Dia 9 — Go-to-market: outreach manual + networking

**Meta do dia**: gerar tráfego orgânico/manual além dos ads para ter mais dados nos primeiros dias.

**Tempo estimado**: 4h.

### 7.10.1. Tarefas

- [ ] **[1h]** Listar 30 contatos quentes da rede do fundador
  - Dentistas ou esteticistas conhecidos pessoalmente
  - Amigos que conhecem dentistas/esteticistas (pedir indicação)
  - Ex-colegas de trabalho com acesso ao ICP

- [ ] **[1h30]** Enviar 30 mensagens personalizadas no WhatsApp
  - Template base (personalizar cada uma):

  ```
  Oi, {Nome}! Tudo bem?
  
  {Contexto pessoal: 1 linha sobre onde se conheceram ou última conversa}
  
  Fiz um projeto novo chamado Perfiliza: consultoria de Google Meu Negócio
  especializada em {nicho do contato}.
  
  Tô oferecendo um diagnóstico gratuito do perfil do Google pros primeiros
  contatos. Me manda aqui o link do Google Maps da clínica e em até 24h
  devolvo um PDF mostrando onde tá sangrando visibilidade e o que priorizar.
  
  Se quiser receber o seu (ou indicar alguém que possa ter interesse),
  é só me mandar o link.
  
  Sem compromisso, sem venda pressionada. Só pra abrir conversa.
  ```

- [ ] **[45min]** Postar no LinkedIn e Instagram pessoais
  - LinkedIn: post contando o que é a Perfiliza, com link para landing. Pedir comentários/compartilhamento.
  - Instagram pessoal: story com link para `perfiliza.com`
  - Não massificar — só 1 post em cada canal, focado no nicho

- [ ] **[45min]** Entrar em 3 grupos de WhatsApp/Telegram de ICP
  - Grupos de proprietários de clínicas odontológicas (buscar no Google + LinkedIn)
  - Grupos de empreendedorismo em estética
  - **Não fazer spam**: só apresentar + contribuir com conteúdo útil (link de GBP, dica de review)

### 7.10.2. Checkpoint de fim de dia

- ✅ 30 mensagens pessoais enviadas
- ✅ 2 posts (LinkedIn + Instagram) publicados
- ✅ 3 grupos novos + apresentação feita
- ✅ Alerta ligado no celular para responder qualquer lead em < 2h

---

## 7.11. Dia 10 — Primeiros leads e diagnósticos

**Meta do dia**: responder os primeiros leads que chegaram + entregar os primeiros diagnósticos.

**Tempo estimado**: 4-5h (depende do volume).

### 7.11.1. Tarefas

- [ ] **[30min]** Revisão matinal do painel
  - WhatsApp Business: quantas conversas novas chegaram em D8-D9?
  - Para cada conversa nova, criar linha na aba `Leads` do Sheets com nome, cidade, link GBP, canal (google/meta/orgânico — identificável pela mensagem pré-preenchida)
  - Google Ads: impressões, cliques, CPL (cliques em CTA WhatsApp)
  - Meta Ads: impressões, CTR, CPL
  - Atualizar aba `Trafego_Pago`

- [ ] **[até 2h úteis após primeira mensagem]** Confirmar recebimento no WhatsApp
  - Responder cada nova conversa com template 1 (`/diag-confirm`) em < 2h úteis
  - Pedir (se ainda faltar): nome da clínica + link do Google Maps
  - Atualizar Sheets: `status = "diagnostico_em_preparacao"`

- [ ] **[para cada lead, ~30min]** Executar diagnóstico e entregar em até 24h
  - Rodar agente `diagnostico` no terminal com URL do perfil
  - Revisar PDF gerado (30-60s de checagem humana)
  - **Entregar pelo MESMO chat do WhatsApp** (template 2 — `/diag-entrega`) anexando o PDF. **Não enviar por email** — a promessa na landing é WhatsApp.
  - Oferecer call usando template 3 (`/call-convite`) com link Cal.com (pode ser 1h-24h depois da entrega, não junto)
  - Atualizar Sheets: `status = "diagnostico_entregue"`, timestamp

- [ ] **[variável]** Responder mensagens de outreach do D9
  - Algumas pessoas vão pedir diagnóstico — pedir link do GBP, prometer 24h
  - Algumas vão indicar outros contatos — agradecer e seguir

- [ ] **[30min]** Retrospectiva rápida do dia
  - O que funcionou?
  - Onde tive fricção? (Ex: agente travou, PDF saiu ruim, template de WhatsApp confuso)
  - Ajustar o que der pra ajustar em < 30 min

### 7.11.2. Checkpoint de fim de dia

- ✅ Todos os leads recebidos até agora têm diagnóstico entregue
- ✅ Todos os leads receberam convite para call
- ✅ Google Sheets 100% atualizado
- ✅ Bugs/fricções do dia registrados em `logs/bugs.md`

---

## 7.12. Dia 11 — Primeiras calls + ajustes de funil

**Meta do dia**: fazer as primeiras calls de diagnóstico + ajustar funil com base no que aprendeu.

**Tempo estimado**: 5-6h.

### 7.12.1. Tarefas

- [ ] **[1h]** Preparação para calls do dia
  - Reler pitch de venda
  - Abrir perfil GBP de cada lead no navegador antes da call
  - Ter diagnóstico aberto em outra aba
  - Ter link de pagamento Mercado Pago pronto para colar

- [ ] **[~30 min/call]** Executar calls agendadas
  - Seguir o script (abertura, descoberta, apresentação, oferta, fechamento)
  - **Gravar (com consentimento) para autoavaliação**
  - Ao fim: se o cliente topar, enviar link PIX no WhatsApp imediatamente
  - Se não fechar na hora, agendar follow-up em 48h

- [ ] **[1h]** Análise pós-call
  - Ouvir 1 gravação integralmente, anotar 3 melhorias no pitch
  - Identificar padrões nas objeções (preço? credibilidade? escopo?)
  - Ajustar materiais de apoio (FAQ da landing, templates WhatsApp) com base no que ouviu

- [ ] **[30min]** Atualizar Sheets
  - Registrar cada call: participou, fechou, não fechou, próxima ação
  - Se fechou: mover da aba `Leads` para a aba `Clientes`, iniciar onboarding no dia 12

### 7.12.2. Checkpoint de fim de dia

- ✅ Todas as calls agendadas do dia executadas
- ✅ Gravações ouvidas e anotações registradas
- ✅ Follow-ups agendados para os que não fecharam
- ✅ Sheets atualizado

---

## 7.13. Dia 12 — Onboarding do 1º cliente (se houver)

**Meta do dia**: se 1+ cliente fechou, fazer o onboarding seguindo protocolo do arquivo `04_operacao_manual_gbp.md`.

**Importante:** **não há PIX no dia do fechamento**. O cliente fecha dando o aceite verbal + adicionando `admin@perfiliza.com` como Administrador do GBP. O ciclo de 30 dias começa nesse momento e a primeira cobrança PIX só acontece no dia 30 do ciclo individual, se o cliente decidir continuar (ver seção 4.6 do arquivo 04).

**Tempo estimado**: 3h por cliente + 2h de operação geral.

### 7.13.1. Tarefas

- [ ] **[15min]** Confirmar aceite verbal do cliente (gravação da call ou WhatsApp por escrito)
  - Registrar no CRM: `status = "aguardando_admin"`, `data_aceite`, `plano_acordado` (Starter/Growth)

- [ ] **[30min]** Enviar tutorial de convite de administrador GBP
  - Usar template do arquivo 04
  - Reforçar no WhatsApp: "me adiciona como Administrador lá, link do tutorial abaixo. Lembrando: os primeiros 30 dias são por nossa conta — você não paga nada agora."

- [ ] **[depende do cliente]** Aguardar cliente adicionar `admin@perfiliza.com` como Admin
  - Prazo razoável: 48h
  - Se demorar mais, oferecer call rápida de 15 min para fazer junto
  - **Ao receber o convite**: registrar `data_inicio_ciclo` no CRM — é a partir desse dia que contam os 30 dias

- [ ] **[30min]** Ao receber acesso: primeira auditoria
  - Rodar agente `profile-auditor` contra o perfil
  - Gerar plano de ação das primeiras 2 semanas
  - Enviar plano por email ao cliente + registrar em `~/perfiliza/clientes/{slug}/plano-inicial.md`

- [ ] **[1h]** Primeiras ações no perfil do cliente (via painel oficial GBP)
  - Atualizar fotos de capa e perfil se necessário
  - Corrigir horários se desatualizados
  - Revisar categorias (primária + secundárias)
  - Responder reviews pendentes usando agente `review-responder`

- [ ] **[15min]** Agendar lembretes no Google Calendar para o ciclo do cliente
  - Dia 25 do ciclo: preparar relatório
  - Dia 28 do ciclo: check-in proativo
  - Dia 30 do ciclo: enviar relatório + link PIX (ou despedida amigável se cliente não continuar)
  - Dia 60, 90, 120...: cobrança recorrente no aniversário

- [ ] **[1h]** Rotina normal de ads (monitorar, ajustar)
  - Analisar performance dos 4 dias de ads
  - Pausar criativo pior em CTR
  - Ainda sem subir orçamento — mesmo que esteja indo bem

### 7.13.2. Checkpoint de fim de dia

- ✅ Aceite verbal registrado e cliente movido para aba `Clientes` com `status = "aguardando_admin"` ou `status = "ciclo_ativo"` (se acesso já liberado)
- ✅ Tutorial de convite enviado
- ✅ `data_inicio_ciclo` registrada (se cliente já aceitou convite)
- ✅ Lembretes dos dias 25/28/30 do ciclo agendados no calendário
- ✅ Primeiras 2-4 ações executadas no perfil (se acesso já liberado)
- ✅ Ads monitorados e pequenos ajustes feitos

---

## 7.14. Dia 13 — Entrega contínua + follow-ups pendentes

**Meta do dia**: manter ritmo de operação + fazer follow-up com leads frios/mornos.

**Tempo estimado**: 4-5h.

### 7.14.1. Tarefas

- [ ] **[1h30]** Rotina diária dos clientes ativos (arquivo 04)
  - Checar perfil do(s) cliente(s): novas reviews, mensagens GBP, perguntas
  - Responder tudo em < 24h
  - Publicar post semanal se for o dia certo

- [ ] **[1h]** Diagnósticos pendentes de novos leads
  - Processar leads chegados nos últimos 2 dias
  - Enviar diagnósticos
  - Agendar calls

- [ ] **[1h]** Follow-up ativo com leads que não responderam
  - Template WhatsApp: "Oi, {nome}, consegue dar uma olhada no PDF que mandei? Se fizer sentido, bora agendar 20min?"
  - Limite: 3 follow-ups por lead, espaçados em 2-3 dias, depois marca como `frio`

- [ ] **[30min]** Postagem social mínima
  - 1 post no Instagram @perfiliza (conteúdo educativo, não venda)
  - 1 post no LinkedIn pessoal (construção de autoridade)

### 7.14.2. Checkpoint de fim de dia

- ✅ Nenhum lead sem resposta há mais de 24h
- ✅ Nenhum review/mensagem de cliente sem resposta há mais de 24h
- ✅ 2 posts sociais publicados

---

## 7.15. Dia 14 — Retrospectiva + decisão estratégica

**Meta do dia**: parar de executar por 1 dia e **olhar os números honestamente**. Decidir próximos passos.

**Tempo estimado**: 4h.

### 7.15.1. Tarefas

- [ ] **[1h]** Consolidar números dos 14 dias
  - **Funil**:
    - Impressões de ads: ___
    - Cliques: ___ (CTR ___%)
    - Leads capturados: ___ (conversão de landing ___%)
    - Diagnósticos entregues: ___
    - Calls agendadas: ___ (da taxa de ___% dos leads)
    - Calls realizadas: ___
    - Vendas (PIX confirmado): ___
  - **Financeiro**:
    - Investimento total (ads + ferramentas + domínio + placas): R$ ___
    - Receita bruta (se houve): R$ ___
    - CAC real: R$ ___
  - **Operacional**:
    - Horas trabalhadas: ___ h
    - Agentes rodados: ___ execuções
    - Bugs registrados: ___

- [ ] **[1h30]** Retrospectiva escrita
  - O que funcionou? (listar 5+)
  - O que falhou? (listar 5+)
  - Qual foi a maior surpresa? (positiva ou negativa)
  - Se fosse recomeçar, o que mudaria?
  - Qual hipótese foi confirmada? Qual foi refutada? Qual ficou inconclusiva?

- [ ] **[1h]** Decidir plano dos próximos 30 dias
  - **Plano A** (se 1+ cliente fechou e CPL está no alvo): manter operação, subir budget 25%, dobrar outreach manual, buscar 3-5 clientes até D45
  - **Plano B** (se 0 clientes mas funil tá capturando leads): continuar 14 dias, focar em **converter leads existentes** (ajustar pitch, oferta, preço), pausar novos ads temporariamente
  - **Plano C** (se 0 leads ou leads 100% não qualificados): pausar ads, revisar ICP e nicho, considerar mudança radical no posicionamento
  - Registrar decisão em `logs/retrospectiva-dia-14.md`

- [ ] **[30min]** Comunicar a decisão
  - Publicar post pessoal (LinkedIn) contando aprendizados dos 14 dias — seja honesto
  - Isso faz marketing de conteúdo e responsabiliza o próximo passo
  - Agendar próxima retrospectiva para D28

### 7.15.2. Checkpoint de fim de dia

- ✅ Planilha de números fechada e salva
- ✅ Retrospectiva escrita em `logs/retrospectiva-dia-14.md`
- ✅ Plano A/B/C definido para os próximos 30 dias
- ✅ Post de aprendizado publicado
- ✅ Próxima retrospectiva agendada (D28)

---

## 7.16. Tabela-resumo dos 14 dias

| Dia | Foco | Entregável principal | Horas |
|---|---|---|---|
| D1 | Contas e identidade | Email corporativo, 2FA, contas Ads, Sheets CRM | 5-6h |
| D2 | Stack local | Claude Code, estrutura de pastas, identidade visual | 5-6h |
| D3 | Home no ar | `perfiliza.com` com home + GA4 + Pixel | 6h |
| D4 | Landing odonto | `/clinicas-odontologicas` + CTA wa.me + tracking de clique | 5h |
| D5 | Landings estética + restaurantes | `/clinicas-esteticas` + `/restaurantes` + páginas legais | 6-7h |
| D6 | Agentes | 6 agentes locais em Claude Code | 6-7h |
| D7 | Criativos | 5 criativos Meta + 3 RSAs Google | 5-6h |
| D8 | Ads no ar | 3 campanhas ativas + templates comerciais | 5h |
| D9 | Outreach | 30 mensagens personalizadas + posts orgânicos | 4h |
| D10 | 1ºs diagnósticos | Leads respondidos, diagnósticos enviados | 4-5h |
| D11 | 1ªs calls | Calls executadas, ajustes de pitch | 5-6h |
| D12 | 1º onboarding | PIX confirmado, convite admin, primeiras ações | 5h |
| D13 | Operação contínua | Rotina diária + follow-ups + posts | 4-5h |
| D14 | Retrospectiva | Números consolidados, plano A/B/C | 4h |
| **Total** | | | **~70-80h** |

---

## 7.17. Critérios de sucesso no D14

Ao final do dia 14, o lançamento é considerado **sucesso** se:

- [ ] **Critério mínimo (validação de infra)**: perfiliza.com no ar, funil funcional de ponta a ponta, 6 agentes rodados ao menos uma vez
- [ ] **Critério intermediário (validação de mercado)**: ≥ 5 leads qualificados + ≥ 2 calls realizadas + feedback qualitativo indicando que a oferta ressoa
- [ ] **Critério ambicioso (validação de monetização)**: ≥ 1 cliente em ciclo ativo (aceite + `admin@perfiliza.com` adicionado como Administrador). A primeira confirmação de PIX acontece no dia 30 do ciclo individual do cliente — portanto, fora da janela dos 14 dias de lançamento. A validação final de monetização é posterior, quando o primeiro ciclo fechar.

Se atingiu **critério mínimo**: continuar iterando, dar mais 14 dias com ajustes.
Se atingiu **intermediário**: plano A — manter e escalar com cautela.
Se atingiu **ambicioso**: validação inicial completa — consolidar a operação com os próximos clientes.

---

## 7.18. O que não fazer nos 14 dias (armadilhas comuns)

- ❌ **Tentar automatizar coisas que ainda não foram executadas manualmente**: automação sem experiência manual não resolve problema real; cria tecnologia que ninguém usa.
- ❌ **Ficar iterando logo, cor, copy por horas**: "perfeito" no D3 impede de lançar; publicar "bom o suficiente" no D4 gera aprendizado real.
- ❌ **Responder leads em mais de 2h**: lead responsivo em mais de 2h perde 70% da intenção. **Tenha o celular com notificação sempre.**
- ❌ **Subir o budget antes de ter PIX confirmado**: orçamento grande sem cliente = caixa virando fumaça.
- ❌ **Aceitar cliente problemático no primeiro "sim"**: clientes difíceis viram pesadelo; preferir 1 cliente bom do que 3 ruins.
- ❌ **Usar ferramentas pagas que não vão ser usadas**: qualquer SaaS > R$ 100/mês precisa justificar receita proporcional.
- ❌ **Prometer resultado específico na venda**: "vou colocar você em 1º lugar" é insustentável e cria churn no mês 2. **Prometer processo, não resultado.**

---

## 7.19. Próximos 30 dias após o lançamento

Se tudo der certo (mesmo que timidamente), a trajetória sugerida:

| Dias | Foco |
|---|---|
| D15-D30 | Atender primeiros 3-5 clientes com excelência. Gerar cases reais. Iterar pitch com base em calls. |
| D31-D45 | Subir budget de ads (se performando), testar mais 1 nicho (advocacia ou contabilidade), primeiro estudo de caso publicado |
| D46-D60 | Consolidar rotina operacional, revisar métricas acumuladas, decidir com o usuário próximas prioridades de aprimoramento |

---

**Este é o último arquivo do pacote.**

Voltar ao [`README.md`](./README.md) para revisar o índice completo.

O diferencial entre quem lança e quem continua planejando é **executar a Tarefa 1 do Dia 1 hoje**.
