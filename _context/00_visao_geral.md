# 00. Visão Geral — Perfiliza

**Filosofia, princípios, premissas, stack mínima e critérios de sucesso**

---

## 0.1. Por que começar pela operação manual?

Antes de investir em código de backend, integrações programáticas com a GBP API ou infraestrutura gerenciada, é preciso validar a hipótese mais básica do negócio: existe um cliente disposto a pagar R$ 197+/mês pela gestão do GBP + entrega de conteúdo + mais avaliações?

Perfiliza responde essa pergunta em **14 dias** com investimento de **R$ 800-1.500**, **sem escrever uma linha de código de backend**, e **sem depender da GBP API**.

Se a resposta for SIM (5 pagantes em até 60 dias), vale expandir a infraestrutura de suporte. Se for NÃO, o prejuízo é pequeno e a aprendizagem é gigante.

## 0.2. Os 6 princípios do Perfiliza

1. **Nada é automatizado antes de ser validado manualmente** — cada tarefa opera 100% manual nos primeiros 3-5 clientes; só depois vira automação.
2. **Zero backend, zero banco de dados próprio** — pastas locais + Google Sheets + planilha de Google Docs bastam.
3. **GBP via painel oficial, nunca via API** — o fundador abre `business.google.com` logado com `admin@perfiliza.com`, que já foi convidado como Administrador pelos clientes. Nenhuma chamada à GBP API.
4. **Agentes rodam no terminal, não no servidor** — todos os agentes são scripts/comandos em Claude Code executados localmente sob demanda. Recebem parâmetros (URL, ID do cliente) e imprimem saída no terminal ou geram arquivos em `output/`.
5. **Landing page enxuta, copy densa** — HTML estático ou Next.js export-only; foco absoluto na copy, não em design rebuscado.
6. **Preço introdutório baixo** — R$ 97-197/mês nos primeiros 5 clientes, com compromisso de preço legacy (nunca sobe para eles).

## 0.3. Arquitetura mínima

```
┌─────────────────────────────────────────────────────────┐
│ PÚBLICO (Landing pages estáticas)                        │
│ • perfiliza.com (home)                                     │
│ • perfiliza.com/clinicas-odontologicas                     │
│ • perfiliza.com/clinicas-esteticas                         │
│                                                           │
│ CAPTAÇÃO: todos os CTAs levam DIRETO ao WhatsApp          │
│ (wa.me com mensagem pré-preenchida). Sem formulário       │
│ web. Lead envia nome + site/perfil GBP no chat.           │
│ Perfiliza responde o diagnóstico (PDF) em até 24h.        │
│                                                           │
│ Hospedagem: Vercel (Next.js export) ou Netlify ou Carrd  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ FUNDADOR (local, Mac/Linux/Windows)                      │
│                                                           │
│ /perfiliza/                                                │
│ ├── CLAUDE.md                   (cérebro externo)        │
│ ├── .claude/                                             │
│ │   └── agents/                 (definições dos 6 agents)│
│ │       ├── review-responder.md                          │
│ │       ├── post-creator.md                              │
│ │       ├── profile-auditor.md                           │
│ │       ├── geo-auditor.md                               │
│ │       ├── report-generator.md                          │
│ │       └── diagnostico.md                               │
│ ├── clientes/                                            │
│ │   ├── cliente-001-sorriso-vivo/                        │
│ │   │   ├── ficha.md            (dados, brand voice)     │
│ │   │   ├── reviews/            (capturas manuais)       │
│ │   │   ├── posts/              (drafts gerados)         │
│ │   │   └── relatorios/         (relatórios mensais)     │
│ │   └── cliente-002-...                                  │
│ ├── leads/                                               │
│ │   └── diagnosticos/           (PDFs gerados de leads)  │
│ └── landing/                    (código das landing pages)│
│                                                           │
│ Dados agregados: Google Sheets (CRM leve)                │
│ Cobrança: link PIX Mercado Pago manual                   │
│ Comunicação: WhatsApp Business + Gmail                   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ EXECUÇÃO (browser, manual)                               │
│ • business.google.com (painel GBP oficial)               │
│   Login: admin@perfiliza.com (alias de reinaldo.gonzaga@, │
│   já convidado como Administrador em cada perfil)        │
│ • business.facebook.com (se cliente tem IG/FB)           │
│ • WhatsApp Business Web (comunicação com clientes)       │
└─────────────────────────────────────────────────────────┘
```

**Observações críticas**:
- Nenhum serviço recorrente custa mais que R$ 50/mês
- Não há servidor, VM, função serverless ou banco gerenciado
- O "backend" é o sistema de arquivos do laptop do fundador + uma planilha
- Todo o estado operacional fica em Markdown versionado (pode ir pra um repo privado no GitHub por segurança)

## 0.4. Stack técnica em detalhe

| Camada | Escolha | Custo/mês |
|---|---|---|
| Domínio | `perfiliza.com` (já existe) | R$ 40/ano ≈ R$ 3,30/mês |
| Landing pages | Next.js 16.2 export estático na Vercel Hobby | R$ 0 |
| Captação de leads | **CTA direto pro WhatsApp** (link `wa.me` com mensagem pré-preenchida). Sem formulário. | R$ 0 |
| Caixa de entrada de leads | WhatsApp Business (chat do fundador) — cada nova conversa = 1 lead | R$ 0 |
| CRM leve | **Google Sheets** com colunas padronizadas (ver seção 0.5) | R$ 0 |
| Comunicação com cliente | WhatsApp Business (app) + Gmail | R$ 0 |
| Cobrança | **Link de cobrança Mercado Pago** gerado manual | 0-0,99% por transação (PIX) |
| Armazenamento de fotos | iCloud Drive ou Google Drive | R$ 0 (até 15 GB) |
| Gestão do GBP | **Painel oficial** `business.google.com` manual | R$ 0 |
| Agentes de IA | **Claude Code** (Max assinatura) + subagents locais | R$ 500/mês (Max) |
| Controle de tarefas | **Notion grátis** ou `tarefas.md` no repo | R$ 0 |
| **TOTAL** | | **~R$ 505/mês** |

**Observação importante sobre Claude Code**: a assinatura Max (~R$ 500/mês) já cobre todo o uso dos agentes locais no terminal. Não há custo marginal por agente executado. Se o fundador quiser começar ainda mais barato, pode usar Claude Code via API pay-per-use (≈ R$ 30-80 para os primeiros 30 dias de operação).

## 0.5. Estrutura do CRM em Google Sheets

Uma única planilha com 5 abas:

### Aba `Leads`
Todo lead que inicia conversa pelo WhatsApp (via CTA da landing, prospecção ativa ou indicação). **Registro manual**: ao receber nova mensagem no WhatsApp Business, o fundador cria a linha no Sheets com os dados coletados no chat (ou disponíveis no perfil do contato).

| Coluna | Exemplo |
|---|---|
| Data | 2026-04-17 |
| Canal | Meta Ads / Google Ads / Prospecção / Indicação / Orgânico |
| Nome | Dra. Juliana Mello |
| Empresa | Clínica Sorriso Vivo |
| Nicho | Odontologia |
| Cidade | Curitiba – PR |
| WhatsApp | +55 41 99... |
| Email | juliana@sorrisovivo.com.br |
| URL GBP | https://maps.google.com/?cid=... |
| Status | Novo / Diagnóstico em preparação / Diagnóstico enviado / Call agendada / Proposta / Fechado / Perdido |
| Próxima ação | Executar diagnóstico (SLA 24h) / Enviar PDF via WhatsApp / Fazer follow-up em 24h |
| Observações | Já paga R$ 800/mês pra outra agência, reclama de ROI |

### Aba `Clientes`
Leads que viraram pagantes.

| Coluna | Exemplo |
|---|---|
| Slug | cliente-001-sorriso-vivo |
| Empresa | Clínica Sorriso Vivo |
| Nicho | Odontologia |
| Plano | Starter Beta R$ 97 / Starter R$ 197 / Growth R$ 297 |
| Data início | 2026-04-22 |
| Próxima cobrança | 2026-05-22 |
| Status pagamento | Em dia / Atrasado / Pago até D/M/A |
| Meta de posts/mês | 4 |
| Meta de respostas/mês | todas em 24h |
| NPS último | 9 |
| Link Sheet cliente | (link para pasta local / drive) |

### Aba `Tarefas_Semana`
O que vai ser feito para cada cliente nesta semana.

### Aba `Metricas_GBP`
Antes/depois mensal extraído do painel GBP (preenchido manual no dia 1 de cada mês).

### Aba `Financeiro`
Cobranças, entradas, custos do mês.

## 0.6. Papéis e responsabilidades

No Perfiliza, **só existe uma pessoa: o fundador**. Mas ele veste chapéus diferentes por hora do dia:

| Chapéu | % do tempo | Atividades |
|---|---|---|
| **Vendedor** | 40% | Prospecção, responder leads, fazer calls de fechamento, gerar propostas |
| **Operador de GBP** | 35% | Abrir painel GBP, responder reviews, publicar posts, atualizar fotos, checar insights |
| **Operador de agentes** | 10% | Rodar comandos no terminal (diagnóstico, geração de posts, auditoria GEO) |
| **Construtor** | 10% | Melhorar landing, ajustar copy, preparar próxima iteração |
| **Gerente** | 5% | Revisar planilha, planejar semana, cobrar pagamentos |

**Carga horária esperada**: 10-15h/semana com 3 clientes; 15-20h/semana com 5 clientes.

## 0.7. Critérios explícitos de sucesso

O projeto é avaliado no primeiro dos eventos abaixo:

### Cenário A — Sucesso validado
- [ ] ≥ 5 clientes pagantes simultâneos
- [ ] MRR ≥ R$ 950
- [ ] Pelo menos 1 cliente pagando há 2 meses sem cancelar
- [ ] NPS médio ≥ 7 entre os 5
- [ ] Fundador conseguiu operar tudo em ≤ 20h/semana

**Ação**: consolidar a operação manual com os 5 clientes e avaliar, junto ao usuário, quais processos passam a justificar investimento em automação.

### Cenário B — Sinal fraco mas real
- [ ] 2-4 clientes pagantes
- [ ] MRR entre R$ 300 e R$ 900
- [ ] Conversão lead → cliente > 5%

**Ação**: continuar a operação por mais 30 dias; investir os R$ 1.500 extras em ads direcionados para dobrar os clientes.

### Cenário C — Falha de hipótese (pivotar ou abortar)
- [ ] 0-1 cliente pagante após 30 dias + R$ 1.500 em ads
- [ ] Conversão lead → cliente < 2%
- [ ] CAC > R$ 1.000

**Ação**: fazer 20 calls abertos com leads não convertidos para entender objeções; considerar mudar de nicho OU mudar o modelo (setup one-shot R$ 897 em vez de mensalidade).

## 0.8. Custos totais projetados (60 dias)

| Item | Custo |
|---|---|
| Claude Code Max (2 meses) | R$ 1.000 |
| Domínio `perfiliza.com` (já pago) | R$ 0 |
| Vercel Hobby | R$ 0 |
| Captação WhatsApp (wa.me) | R$ 0 |
| Canva Pro (criativos ads) | R$ 90 |
| Google Ads teste | R$ 600 (R$ 20/dia x 30 dias) |
| Meta Ads teste | R$ 450 (R$ 15/dia x 30 dias) |
| Placas QR code (10 unidades impressas + Correios) | R$ 400 (ver `06_placa_qrcode_correios.md`) |
| Ferramentas diversas (edição vídeo, etc.) | R$ 150 |
| **TOTAL 60 dias** | **~R$ 2.690** |

Com 3 clientes a R$ 197/mês por 2 meses = R$ 1.182 de receita. Prejuízo máximo do experimento: ~R$ 1.500. **Risco financeiro muito baixo para o valor do aprendizado.**

## 0.9. Elementos estratégicos do projeto

Todos os elementos estratégicos a seguir são centrais à proposta:

✅ **Proposta de valor**: GBP + GEO para PMEs, mais rápido e mais barato que agência
✅ **Nichos**: odontologia primeiro, estética segundo
✅ **Tom de marca**: técnico, direto, sem enrolação, prova de IA embutida
✅ **Escopo de entrega**: 4 posts/mês + respostas a reviews + relatório mensal + GEO mensal (Growth)
✅ **Diferencial**: GEO embutido e auditoria de presença em LLMs
✅ **Política comercial**: sem fidelidade, cancelamento simples, preço legacy
✅ **Lead magnet**: diagnóstico gratuito entregue em até 24h pelo WhatsApp (com auditoria GEO)

## 0.10. Fora do escopo

- ❌ Dashboard próprio
- ❌ Banco de dados próprio
- ❌ GBP API integrada
- ❌ Cobrança recorrente automatizada
- ❌ Edge Functions, pg_cron, agendamento
- ❌ WhatsApp automatizado
- ❌ Multi-cliente por agente (cada execução é 1 cliente de cada vez)
- ❌ Observabilidade, Sentry, métricas avançadas
- ❌ RLS, criptografia avançada (dados sensíveis ficam em local controlado)
- ❌ Plano Autoridade (R$ 997) — somente Starter e Growth são ofertados

## 0.11. Cronograma macro

```
Dia  1-2: Preparação — landing + domínio + WhatsApp Business (respostas rápidas) + CRM + CLAUDE.md
Dia  3-4: Agentes — definir os 6 agentes locais, testar com um perfil fictício
Dia  5-6: Ofensiva — lançar ads mínimos + prospecção ativa (30 contatos)
Dia  7:    Primeira call de fechamento; meta: 1º cliente pagante
Dia  8-14: Operação do 1º cliente + aquisição de mais 2-4 clientes
Dia 15-30: Consolidar rotina; preparar placas QR code para clientes ativos
Dia 31-60: Segundo ciclo — revisar métricas e consolidar a operação
```

Detalhamento por dia em `07_tarefas_sequenciais_lancamento.md`.

## 0.12. Mentalidade

1. **Cada "no" é um dado** — lead que não fechou: perguntar por quê antes de passar adiante.
2. **Fidelidade nenhuma ao plano** — se no dia 5 aparecer uma rota melhor, seguir essa rota.
3. **Vender antes de polir** — cada hora gasta refinando landing é 1h a menos prospectando.
4. **Manual é feature, não bug** — operar manualmente é o que permite descobrir os padrões que guiam qualquer investimento futuro em eficiência.
5. **Escrever tudo em Markdown** — mantém dados, prompts e regras de negócio auditáveis e reaproveitáveis.

---

**Próximo arquivo**: [`01_nichos_iniciais.md`](./01_nichos_iniciais.md) — seleção dos 2 nichos iniciais com ICP e copy master por nicho.
