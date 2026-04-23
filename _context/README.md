# Perfiliza

**Consultoria de Google Business Profile (GBP) + GEO (Generative Engine Optimization) para pequenas e médias empresas brasileiras.**
*Zero backend, zero automação agendada, operação 100% manual via painel oficial do Google Business Profile + agentes locais em Claude Code.*

Abril de 2026

---

## Visão geral

Perfiliza entrega gestão do perfil no Google Business Profile, respostas a avaliações, publicações de conteúdo e auditoria GEO para clínicas odontológicas e de estética. O foco é validar a oferta com o mínimo de código possível: as landing pages são estáticas (Next.js 16.2 export), a captura de leads acontece **direto pelo WhatsApp** (CTA abre o chat com mensagem pré-preenchida; lead manda nome + site/perfil; Perfiliza devolve o PDF em até 24h), o CRM vive em Google Sheets, a cobrança acontece por link PIX do Mercado Pago, e a execução operacional é 100% manual — o fundador acessa `business.google.com` com `admin@perfiliza.com` (já convidado como Administrador pelos clientes) e usa 6 agentes rodando em Claude Code local para acelerar tarefas repetitivas.

A meta de lançamento é alcançar 1–5 clientes pagantes em 60 dias, com MRR entre R$ 591 e R$ 1.085, executando o checklist diário descrito em `07_tarefas_sequenciais_lancamento.md` (D1–D14).

---

## Índice dos arquivos

| # | Arquivo | Conteúdo |
|---|---|---|
| 00 | [`00_visao_geral.md`](./00_visao_geral.md) | Filosofia, princípios, premissas, stack mínima, critérios de sucesso |
| 01 | [`01_nichos_iniciais.md`](./01_nichos_iniciais.md) | Seleção dos 2 nichos iniciais (odontologia + estética), ICP, motivos, copy master por nicho |
| 02 | [`02_copy_landing_pages.md`](./02_copy_landing_pages.md) | Copy completa e estrutura replicável das 4 landings: home `perfiliza.com` + `/clinicas-odontologicas` + `/clinicas-esteticas` + `/restaurantes`; captação via WhatsApp (sem formulário), fallback `contato@perfiliza.com` |
| 03 | [`03_agentes_claude_code_local.md`](./03_agentes_claude_code_local.md) | Estrutura dos 6 agentes locais executados no terminal via Claude Code, com inputs/outputs e prompts |
| 04 | [`04_operacao_manual_gbp.md`](./04_operacao_manual_gbp.md) | Protocolo operacional: como executar tudo manualmente pelo painel oficial do GBP |
| 05 | [`05_trafego_pago_reduzido.md`](./05_trafego_pago_reduzido.md) | 3 campanhas mínimas (Meta + Google) com orçamento R$ 30-50/dia, copy e segmentação |
| 06 | [`06_placa_qrcode_correios.md`](./06_placa_qrcode_correios.md) | Avaliação da estratégia de placa física com QR code enviada por Correios (viabilidade, economics, design, fluxo) |
| 07 | [`07_tarefas_sequenciais_lancamento.md`](./07_tarefas_sequenciais_lancamento.md) | **Checklist dia-a-dia do dia 1 ao dia 14** para sair do zero e lançar |

---

## Veredicto em um parágrafo

O projeto Perfiliza opera como um **lançamento de 14 dias** em que o fundador testa a oferta com **investimento abaixo de R$ 1.500**, **sem escrever código de produção**, validando se: (a) landing page + diagnóstico gratuito geram leads; (b) leads convertem em calls; (c) calls convertem em pagamentos PIX; (d) o fundador consegue operar 3–5 clientes manualmente em até 8h/semana. É o mesmo produto, com o mesmo pitch, com os mesmos 2 nichos iniciais — com **tudo o que é automação substituído por execução manual disciplinada assistida por agentes locais em Claude Code**.

---

## Quick Start — 3 arquivos para começar hoje

Se você tem apenas **40 minutos**:

1. **[`00_visao_geral.md`](./00_visao_geral.md)** — entenda a filosofia (10 min)
2. **[`07_tarefas_sequenciais_lancamento.md`](./07_tarefas_sequenciais_lancamento.md)** — pegue o checklist e comece (20 min)
3. **[`01_nichos_iniciais.md`](./01_nichos_iniciais.md)** — confirme que odontologia + estética fazem sentido pra você (10 min)

Depois, conforme for precisando:
- **Vai construir a landing?** → `02_copy_landing_pages.md`
- **Vai configurar os agentes?** → `03_agentes_claude_code_local.md`
- **Vai atender o 1º cliente?** → `04_operacao_manual_gbp.md`
- **Vai colocar ads no ar?** → `05_trafego_pago_reduzido.md`
- **Vai testar a placa física?** → `06_placa_qrcode_correios.md`

---

## Próximos passos (hoje mesmo)

1. Conferir se o domínio `perfiliza.com` está apontando corretamente (DNS)
2. Criar o Gmail corporativo `admin@perfiliza.com` com 2FA (se ainda não existe)
3. Abrir `07_tarefas_sequenciais_lancamento.md` e começar pelo **Dia 1, Tarefa 1**

A diferença entre quem lança e quem continua planejando é **executar a tarefa 1 hoje**.
