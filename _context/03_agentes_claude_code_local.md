# 03. Agentes Locais via Claude Code

**Os 6 agentes rodam no terminal do fundador, recebem parâmetros e geram saída local. Zero backend.**

---

## 3.1. Filosofia dos agentes

Cada agente é uma **definição em Markdown** (`.claude/agents/<nome>.md`) que o Claude Code carrega quando é invocado. O fundador, no terminal, chama o agente com os parâmetros necessários (URL do perfil, ID do cliente, texto da avaliação) e o agente executa usando as ferramentas disponíveis (Read, Write, Bash, WebFetch, etc.).

**Vantagens**:
- Zero infra (não precisa deploy)
- Debug trivial (Claude Code mostra cada passo)
- Iteração rápida de prompts (edita o `.md` e roda de novo)
- Controle total (o fundador vê tudo que o agente faz)

**Limitações aceitas**:
- Tudo é síncrono — o fundador espera o agente terminar
- Não há multi-cliente em paralelo (1 execução = 1 cliente)
- Não há agendamento (se o fundador não rodar, não acontece)
- Se o fundador tirar férias, os clientes sofrem

Essas limitações são **aceitáveis** porque o número de clientes é baixo (≤ 8) e o objetivo é validar, não escalar.

## 3.2. Estrutura de pastas no laptop do fundador

```
~/perfiliza/
├── CLAUDE.md                          # cérebro externo - regras de negócio
├── .claude/
│   ├── settings.json                  # config do Claude Code (model, tools)
│   └── agents/
│       ├── review-responder.md
│       ├── post-creator.md
│       ├── profile-auditor.md
│       ├── geo-auditor.md
│       ├── report-generator.md
│       └── diagnostico.md
├── clientes/
│   ├── cliente-001-sorriso-vivo/
│   │   ├── ficha.md                   # dados mestres do cliente
│   │   ├── brand-voice.md             # tom de marca calibrado
│   │   ├── reviews/                   # capturas manuais do GBP
│   │   │   ├── 2026-04-15_Paulo_M_5estrelas.md
│   │   │   └── ...
│   │   ├── posts/
│   │   │   └── 2026-04-17_drafts.md
│   │   ├── auditorias/
│   │   │   ├── profile_2026-04-01.md
│   │   │   └── geo_2026-04-01.md
│   │   ├── fotos/
│   │   │   ├── raw/                   # como enviado pelo cliente
│   │   │   └── processadas/           # prontas p/ GBP
│   │   └── relatorios/
│   │       └── 2026-04-relatorio.pdf
│   └── cliente-002-...
├── leads/
│   └── diagnosticos/
│       ├── 2026-04-17_drjulianamello.pdf
│       └── ...
├── landing/                           # código das landing pages
│   └── ... (Next.js)
├── scripts/                           # utilitários auxiliares
│   ├── novo-cliente.sh               # cria pasta estruturada
│   ├── novo-diagnostico.sh           # roda agente diagnostico
│   └── gerar-relatorio.sh            # roda report-generator
└── templates/
    ├── ficha-cliente.md
    ├── relatorio-mensal.md
    └── termo-autorizacao-imagem.md
```

## 3.3. O arquivo `CLAUDE.md` central

Toda sessão do Claude Code começa lendo este arquivo. Ele contém regras que prevalecem sobre qualquer agente específico:

```markdown
# CLAUDE.md — Perfiliza

## Contexto
Perfiliza é consultoria de Google Meu Negócio (GBP) + GEO (Generative Engine 
Optimization) para PMEs brasileiras. Operação: fundador solo, 
todas operações manuais via painel oficial do GBP (business.google.com).

Conta de acesso ao GBP: admin@perfiliza.com (já convidada como Administrador 
em cada perfil de cliente pelos próprios clientes).

## Nichos ativos
1. Clínicas Odontológicas (primário)
2. Clínicas de Estética e Beleza (secundário)
3. Restaurantes (terciário — adicionado junto com a reescrita de `02_copy_landing_pages.md`)

## Regras inegociáveis

### Respostas a avaliações
- Máximo 280 caracteres (legibilidade mobile)
- NUNCA prometer resultado clínico/estético
- NUNCA mencionar procedimentos médicos específicos em negativas
- Avaliações ≤ 3 estrelas: começar com empatia, propor contato privado
- Avaliações ≥ 4 estrelas: gratidão específica + convite ao retorno
- SEMPRE gerar 2 variações (formal + casual) — fundador escolhe

### Posts no Google
- Corpo ≤ 1.500 caracteres (ideal 300-600)
- Sempre terminar com CTA (learn_more | book | call)
- Mínimo 2 palavras-chave do nicho por post
- Proibido keyword stuffing no nome do negócio

### Compliance por nicho
- Odontologia: respeitar diretrizes do CFO. Sem promessa de resultado. 
  Sem antes/depois sem consentimento escrito documentado.
- Estética/Beleza: respeitar normas da ANVISA. Sem claims médicos. 
  Termo de imagem obrigatório para antes/depois.
- Restaurantes: respeitar a regulamentação municipal de publicidade 
  de alimentos e bebidas. Posts com bebida alcoólica observam 
  horário e normas da cidade do cliente; nunca apelar a quem 
  não pode consumir. Sem promessa de volume de clientes.

### LGPD
- Dados de clientes armazenados em ~/perfiliza/clientes/ (local)
- Cloud somente em Google Drive autorizado pelo cliente
- Nunca compartilhar dados de um cliente com outro

## Decisões estratégicas que prevalecem
- Preço: R$ 197/mês (Starter Beta) ou R$ 297/mês (Growth Beta) — 
  nos primeiros 5 clientes
- Sem fidelidade, cancelamento com 7 dias de antecedência
- Preço legacy permanente para quem entrar no beta

## Workflow típico
1. Fundador abre o painel GBP (business.google.com) e captura dados 
   (reviews novas, insights do mês, fotos pendentes)
2. Cola os dados capturados em pasta local do cliente
3. Invoca o agente apropriado via Claude Code
4. Agente gera drafts (respostas, posts, relatório)
5. Fundador revisa e publica manualmente no painel GBP
6. Fundador marca como publicado no histórico local

## Ferramentas autorizadas
- Read, Write, Bash para manipulação local
- WebFetch para Google Places API e GEO audit
- Sem WebSearch promiscuidade (usa apenas se explicitamente relevante)
```

## 3.4. Convenções dos agentes

Cada agente `.md` tem a seguinte estrutura padrão:

```markdown
---
name: nome-do-agente
description: O que o agente faz em 1 linha
tools: [lista de tools permitidas]
model: claude-sonnet-4-7
---

# Agente: <nome>

## Quando usar
Descrição clara de quando invocar.

## Como invocar (terminal)
```bash
claude code agent <nome-do-agente> [args]
```

## Inputs esperados
- param1: descrição
- param2: descrição
- ...

## Outputs produzidos
- arquivo1.md
- ...

## Prompt/instrução do agente
(texto de instrução carregado pelo Claude Code)
```

---

## 3.5. Agente 1 — `review-responder`

### Propósito
Gera 2 variações de resposta (formal + casual) para uma avaliação específica, no tom do cliente.

### Fluxo operacional manual
1. Fundador abre `business.google.com` → "Avaliações" → vê avaliação nova
2. Copia o texto da avaliação + nota + nome do autor
3. Cola em um arquivo em `clientes/cliente-XXX/reviews/YYYY-MM-DD_autor_Nestrelas.md`
4. No terminal, na pasta do cliente: `claude code agent review-responder --review-file reviews/...md`
5. Agente lê o arquivo, lê `ficha.md` e `brand-voice.md` do cliente, gera 2 drafts
6. Fundador escolhe uma (ou edita) e cola no painel GBP manualmente
7. Marca "publicada" no arquivo adicionando linha `✅ PUBLICADA 2026-04-17 versão casual`

### Definição completa — `.claude/agents/review-responder.md`

```markdown
---
name: review-responder
description: Gera resposta empática e compliance-safe a uma avaliação do GBP
tools: [Read, Write]
model: claude-sonnet-4-7
---

# Agente: review-responder

## Quando usar
Sempre que o fundador detectar uma nova avaliação no painel GBP que 
precise de resposta.

## Como invocar
```bash
cd ~/perfiliza/clientes/cliente-001-sorriso-vivo
claude code agent review-responder --review-file reviews/2026-04-17_Paulo_M_5estrelas.md
```

## Inputs esperados
- --review-file: caminho relativo para o arquivo da review capturada

O arquivo deve conter:
```
# Review capturada
- Autor: Paulo M
- Data: 2026-04-17
- Nota: 5 estrelas
- Texto: "Atendimento excelente, Dra. Juliana foi super atenciosa..."
```

## Outputs produzidos
- Acrescenta ao mesmo arquivo uma seção "## Drafts gerados" com 2 variações
- Salva log em ~/perfiliza/logs/reviews-respondidas.csv (append)

## Instruções para o agente

Você é especialista em reputação online para negócios locais 
brasileiros. Sua tarefa é gerar 2 variações de resposta para a 
review informada.

PASSOS:
1. Leia `ficha.md` da pasta atual para entender: nicho, nome da 
   empresa, tom de voz, profissional(is) responsável(eis).
2. Leia `brand-voice.md` se existir para calibrar linguagem.
3. Leia o arquivo da review (parâmetro --review-file).
4. Gere 2 variações de resposta:
   - FORMAL: "senhor/senhora", tom profissional-acolhedor, sem emoji
   - CASUAL: primeiro nome do autor, tom amigável, no máximo 1 emoji 
     apropriado ao contexto
5. Aplique as regras:

### Regras para avaliações ≥ 4 estrelas
- Começar agradecendo especificamente o que foi citado 
  (atendimento, resultado, espaço físico...)
- Reforçar identidade da marca
- Convidar a voltar / recomendar
- Máximo 280 caracteres

### Regras para avaliações ≤ 3 estrelas
- NUNCA começar com "Obrigado pela avaliação"
- Começar com empatia genuína ("Sentimos muito que sua experiência 
  não tenha sido a esperada")
- Endereçar cada ponto específico citado
- NÃO admitir culpa publicamente (risco jurídico)
- NÃO prometer resultado ("vamos resolver" é OK; "garantimos que" 
  NÃO é)
- Propor contato privado (WhatsApp/telefone) para resolver
- Máximo 280 caracteres

### Regras de compliance por nicho
- Odontologia: nunca mencionar "cura", "sem dor garantida". 
  Identificar "CRO" se citado profissional específico. 
  Procedimento citado pelo paciente? Responder SEM entrar em 
  detalhe clínico ("sua satisfação é nossa prioridade", não 
  "o implante X é o melhor para seu caso").
- Estética: nunca usar claims médicos. Procedimento citado? 
  Falar de "cuidado", "resultado esperado", não "eficácia".

6. Acrescente ao final do arquivo:

```
## Drafts gerados em YYYY-MM-DD HH:MM

### FORMAL
[texto da resposta formal]

### CASUAL
[texto da resposta casual]

### Flags
- [ ] Cliente com histórico de processo? Revisar com cuidado antes.
- [ ] Mencionou concorrente? NÃO responder a menção direta.
- [ ] Avaliação possivelmente fake? Sugerir denúncia ao Google.

## A escolher pelo fundador (marcar abaixo)
- [ ] Publicar versão FORMAL
- [ ] Publicar versão CASUAL
- [ ] Editar manualmente (colocar texto final abaixo)
- [ ] Não responder (explicar motivo)
```

7. Atualize logs/reviews-respondidas.csv com:
   data, cliente, autor, nota, ação_sugerida, timestamp
```

### Exemplo de uso

Arquivo inicial `reviews/2026-04-17_Paulo_M_5estrelas.md`:
```
# Review
- Autor: Paulo Medeiros
- Data: 2026-04-17
- Nota: 5
- Texto: "Atendimento maravilhoso, Dra. Juliana fez minha limpeza 
  com muito cuidado. Ambiente impecável."
```

Comando: `claude code agent review-responder --review-file reviews/2026-04-17_Paulo_M_5estrelas.md`

Saída (adicionada ao mesmo arquivo):
```
## Drafts gerados em 2026-04-17 09:14

### FORMAL
Prezado Paulo, agradecemos sua avaliação! Ficamos muito felizes 
em saber que seu atendimento e o ambiente da clínica corresponderam 
às suas expectativas. Dra. Juliana e toda a equipe agradecem. 
Esperamos vê-lo em breve!

### CASUAL
Paulo, que alegria ler isso! 😊 A Dra. Juliana cuida de cada 
paciente com muito carinho mesmo — o elogio vai direto pra ela. 
Obrigado pela confiança e a gente espera te ver por aqui em breve!

### Flags
- [ ] Cliente com histórico de processo? Não detectado.
- [ ] Mencionou concorrente? Não.
- [ ] Avaliação possivelmente fake? Não (detalhes específicos).

## A escolher pelo fundador
- [ ] FORMAL
- [X] CASUAL  ← selecionada
- Publicada em 2026-04-17 09:22
```

---

## 3.6. Agente 2 — `post-creator`

### Propósito
Gera 4 posts semanais/mensais otimizados para o GBP do cliente, prontos para serem copiados/colados no painel oficial.

### Fluxo operacional
1. Fundador cria arquivo `posts/YYYY-MM-DD_briefing.md` com:
   - Mês/semana alvo
   - Data comercial relevante (se houver)
   - Serviço/procedimento a destacar (opcional)
2. Comando: `claude code agent post-creator --briefing posts/YYYY-MM-DD_briefing.md`
3. Agente lê ficha do cliente, posts recentes (para evitar repetição) e briefing; gera 4 drafts completos
4. Fundador revisa, ajusta, copia para o painel GBP, publica manualmente

### Definição — `.claude/agents/post-creator.md`

```markdown
---
name: post-creator
description: Cria 4 posts GBP otimizados com CTA, imagem brief e data de publicação
tools: [Read, Write]
model: claude-sonnet-4-7
---

# Agente: post-creator

## Quando usar
Uma vez por semana (ideal: domingo ou segunda de manhã) para gerar 
a batelada da semana. Ou mensalmente para gerar 4 posts do mês.

## Como invocar
```bash
cd ~/perfiliza/clientes/cliente-001-sorriso-vivo
claude code agent post-creator --briefing posts/2026-04-20_briefing.md
```

## Arquivo de briefing (exemplo)
```
# Briefing de posts — semana de 2026-04-20
- Datas comerciais: Dia Internacional do Riso (04/04, passou); 
  Dia do Índice de Saúde (08/04, passou); nada relevante nesta semana
- Procedimento para destacar: limpeza de tártaro
- Promoção ativa: -20% primeira consulta em abril
- Restrições: não mencionar "branqueamento a laser" (aguardando 
  documentação CRO)
```

## Outputs produzidos
- posts/YYYY-MM-DD_drafts.md com 4 posts prontos

## Instruções para o agente

Você é copywriter de SEO Local para pequenos negócios brasileiros, 
especializado em odontologia e estética. Sua tarefa é gerar 4 posts 
para o GBP do cliente desta semana.

PASSOS:
1. Leia `ficha.md` — nicho, nome, cidade, serviços, tom de voz, 
   profissionais.
2. Leia `brand-voice.md` se existir.
3. Leia os últimos 10 posts em `posts/` para evitar repetição 
   temática/formato.
4. Leia o briefing.
5. Gere 4 posts no formato:

## Post 1 — EDUCATIVO
### Dia sugerido: segunda-feira
### Título (≤ 60 chars)
### Corpo (300-600 chars)
### CTA: learn_more | book | call | order
### Palavras-chave incluídas: [lista, mínimo 2]
### Prompt para foto/imagem: [descrição concreta]

## Post 2 — PROMOCIONAL/SAZONAL
### Dia sugerido: quarta-feira
### Título
### Corpo
### CTA
### Palavras-chave
### Prompt para foto

## Post 3 — SOCIAL PROOF / CASO
### Dia sugerido: sexta-feira
### Título
### Corpo
### CTA
### Palavras-chave
### Prompt para foto

## Post 4 — DICA PRÁTICA
### Dia sugerido: domingo
### Título
### Corpo
### CTA
### Palavras-chave
### Prompt para foto

REGRAS OBRIGATÓRIAS:
- Português brasileiro
- Tom profissional-amigável, nunca robótico
- Sempre terminar com CTA
- Mínimo 2 palavras-chave do nicho por post (naturalmente integradas)
- NUNCA keyword stuffing
- Para odontologia: respeitar diretrizes CFO/CRO (sem promessa 
  de resultado, sem antes/depois sem autorização)
- Para estética: respeitar ANVISA (sem claim médico)
- Se houver promoção: incluir validade clara
- Se houver procedimento destacado: descrever benefício ao paciente, 
  não vender procedimento

6. Ao final do arquivo, adicionar checklist:

## Checklist de publicação (fundador preencher)
- [ ] Post 1 publicado em ___/___/___
- [ ] Post 2 publicado em ___/___/___
- [ ] Post 3 publicado em ___/___/___
- [ ] Post 4 publicado em ___/___/___
- [ ] Fotos anexadas conforme briefing em cada post
```

---

## 3.7. Agente 3 — `profile-auditor`

### Propósito
Auditoria completa de um GBP (do cliente ou de um lead) — nota de 0 a 100, lista priorizada de 10-15 erros, estimativa de impacto, usado como base do lead magnet e do diagnóstico inicial ao onboarding.

### Fluxo operacional
1. Fundador tem a URL do perfil GBP (link do Maps)
2. Comando: `claude code agent profile-auditor --url "https://maps.app.goo.gl/..." --output auditorias/profile_YYYY-MM-DD.md`
3. Agente:
   - Usa Google Places API (chave configurada em `.env`) para puxar dados públicos do perfil
   - Compara com benchmarks do nicho (embutidos no prompt)
   - Gera relatório estruturado com nota 0-100 e 10-15 erros priorizados

### Definição — `.claude/agents/profile-auditor.md`

```markdown
---
name: profile-auditor
description: Auditoria completa de um GBP via Places API + heurísticas
tools: [Read, Write, WebFetch, Bash]
model: claude-sonnet-4-7
---

# Agente: profile-auditor

## Quando usar
- Ao receber uma nova conversa no WhatsApp com pedido de diagnóstico (lead envia nome + link do Google Maps)
- No dia do onboarding de novo cliente (baseline)
- Mensalmente para clientes ativos (medir progresso)

## Como invocar
```bash
claude code agent profile-auditor \
  --url "https://maps.app.goo.gl/XYZ" \
  --nicho odontologia \
  --output auditorias/profile_2026-04-17.md
```

## Inputs
- --url: link do Google Maps do perfil
- --nicho: odontologia | estetica | restaurantes | outro
- --output: caminho do arquivo de saída

## Outputs
- Arquivo markdown estruturado com o diagnóstico
- Opcional: converter para PDF com `pandoc` (comando shell acionado 
  pelo fundador depois)

## Instruções

Você é auditor de Google Business Profile. Dado um perfil público, 
sua tarefa é gerar um relatório de 2-3 páginas.

PASSOS:
1. Extraia o place_id da URL (pode ser necessário resolver 
   encurtador primeiro via WebFetch).
2. Use Places API para obter detalhes:
   - Nome, endereço, telefone, URL site
   - Categoria primária e secundárias
   - Nota média, total de avaliações
   - Horários
   - Fotos (quantidade, qualidade inferida do count)
   - Posts (últimos, se disponíveis)
3. Faça 1 busca no Places API por concorrentes próximos no mesmo 
   nicho (top 3 por relevância).
4. Gere o relatório com a estrutura:

```markdown
# Diagnóstico Google Meu Negócio — [Nome da empresa]
**Cidade**: [cidade]
**Nicho**: [nicho]
**Data**: [data]

## Nota geral: XX/100

### Critérios de pontuação
| Critério | Peso | Nota | Pontos |
|---|---|---|---|
| Preenchimento do perfil (descrição, categorias, atributos) | 15 | X/10 | X |
| Volume e qualidade de avaliações | 20 | X/10 | X |
| Atividade recente (posts, fotos, atualizações) | 20 | X/10 | X |
| Fotografia (quantidade e diversidade de categorias) | 15 | X/10 | X |
| Horários completos e atualizados | 5 | X/10 | X |
| Presença em diretórios paralelos (Foursquare, Apple) | 10 | X/10 | X |
| Schema.org no site (LocalBusiness, etc.) | 10 | X/10 | X |
| Respostas a reviews recentes | 5 | X/10 | X |

## Top 3 erros críticos
1. **[erro]** — impacto: alto | prazo para corrigir: 7 dias
2. **[erro]** — impacto: alto | prazo: 7 dias
3. **[erro]** — impacto: médio | prazo: 15 dias

## Demais erros identificados (priorizados)
4-15. [listagem]

## Comparativo com 3 concorrentes próximos
| Concorrente | Avaliações | Nota | Posts recentes | GEO |
|---|---|---|---|---|
| Nome A | 87 | 4,7 | 2 este mês | Parcial |
| Nome B | 142 | 4,9 | 5 este mês | Forte |
| Nome C | 34 | 4,5 | 0 | Nenhuma |

## Estimativa de impacto financeiro (mês)
Baseado em volume de busca local do nicho e nota média:
- **Clientes "perdidos" por mês (estimativa)**: XX-YY pessoas 
  que pesquisaram, viram o perfil, mas escolheram concorrente 
  visualmente mais forte
- **Valor aproximado (considerando ticket médio do nicho 
  R$ [valor])**: R$ X.XXX - R$ Y.YYY por mês

(Estimativa baseada em benchmarks setoriais; 
não é garantia de resultado.)

## Próximos passos recomendados
Se corrigir apenas os top-3 erros nas próximas 2 semanas, 
projeção de impacto em 30 dias:
- +XX% em visualizações
- +YY% em pedidos de rota
- +ZZ reviews novas

## Como a Perfiliza pode ajudar
[Texto padronizado com oferta Starter Beta R$ 197/mês]
[CTA: WhatsApp direto]
```

5. Salve em --output

REGRAS:
- Nunca inventar números — se dados não estiverem disponíveis, marcar 
  "Não disponível" e rebaixar o critério
- Sempre marcar estimativas como estimativas (não como garantias)
- Tom: direto, profissional, **sem apelação comercial agressiva**. 
  O relatório é técnico; a venda fica só no rodapé.
```

### Exemplo: ver a saída do agente

```bash
$ claude code agent profile-auditor \
    --url "https://maps.app.goo.gl/ABC123" \
    --nicho odontologia \
    --output auditorias/profile_2026-04-17.md

[Claude Code output]
✅ Place resolvido: ChIJ...
✅ Places API: 23 campos extraídos
✅ 3 concorrentes analisados
✅ Relatório salvo em auditorias/profile_2026-04-17.md (2.3 KB)
✅ Para converter em PDF: pandoc auditorias/profile_2026-04-17.md -o auditorias/profile_2026-04-17.pdf
```

---

## 3.8. Agente 4 — `geo-auditor`

### Propósito
Executa 20 prompts em 4 LLMs (ChatGPT, Claude, Gemini, Perplexity) e analisa se e como a empresa do cliente aparece.

### Fluxo operacional
1. Fundador tem nicho + cidade + nome + serviços do cliente
2. Comando: `claude code agent geo-auditor --cliente cliente-001-sorriso-vivo --output auditorias/geo_YYYY-MM-DD.md`
3. Agente:
   - Lê `ficha.md` do cliente
   - Gera 20 prompts específicos
   - Executa os 20 em cada LLM via API (requer chaves em `.env`)
   - Analisa respostas: cliente aparece? Em que posição? Quais concorrentes apareceram?
   - Gera relatório consolidado com score 0-100 de visibilidade em LLMs

### Definição — `.claude/agents/geo-auditor.md`

```markdown
---
name: geo-auditor
description: Audita presença de uma empresa em ChatGPT, Gemini, Perplexity e Claude
tools: [Read, Write, Bash, WebFetch]
model: claude-sonnet-4-7
---

# Agente: geo-auditor

## Quando usar
- No dia do diagnóstico gratuito (se Growth)
- Mensalmente para clientes Growth (medir evolução)
- On-demand quando fundador quiser validar se GEO está funcionando

## Dependências
Variáveis de ambiente em `.env`:
- ANTHROPIC_API_KEY
- OPENAI_API_KEY
- GEMINI_API_KEY
- PERPLEXITY_API_KEY

## Como invocar
```bash
claude code agent geo-auditor \
  --cliente cliente-001-sorriso-vivo \
  --output auditorias/geo_2026-04-17.md
```

## Instruções

PASSOS:

1. Leia `clientes/<cliente>/ficha.md` para extrair: nome da empresa, 
   nicho, cidade, bairro, serviços principais, procedimentos 
   diferenciadores.

2. Gere 20 prompts realistas que um cliente em potencial digitaria. 
   Exemplos para odontologia em Curitiba:
   - "melhor dentista no batel curitiba"
   - "clínica odontológica com atendimento infantil em curitiba"
   - "onde fazer implante dentário em curitiba com parcelamento"
   - "dentista que faz harmonização orofacial batel"
   - "clínica odontológica aberta aos sábados curitiba"
   - (prompts variam por nicho)

3. Para cada prompt, execute em 4 LLMs via API:
   
   Para ChatGPT (OpenAI):
   ```bash
   curl https://api.openai.com/v1/chat/completions \
     -H "Authorization: Bearer $OPENAI_API_KEY" \
     -d '{"model":"gpt-5","messages":[{"role":"user","content":"<prompt>"}]}'
   ```
   
   Para Gemini: idem com Google API
   Para Perplexity: API da Perplexity
   Para Claude: já está no contexto (usar Anthropic API)

4. Parse cada resposta procurando:
   - O nome da empresa do cliente aparece?
   - Em que ordem (1º, 2º, 3º, listado depois)?
   - Há detalhes corretos (endereço, telefone)?
   - Quais concorrentes aparecem no lugar?

5. Agregue resultados em tabela:

```markdown
# GEO Audit — [Nome da empresa]
**Data**: 2026-04-17
**Prompts testados**: 20
**LLMs consultadas**: ChatGPT (gpt-5), Gemini (gemini-2.5), 
Perplexity, Claude (sonnet-4-7)

## Score de visibilidade em LLMs: X/100

| Prompt | ChatGPT | Gemini | Perplexity | Claude |
|---|---|---|---|---|
| "melhor dentista batel curitiba" | ❌ | 3º | ✅ 1º | ❌ |
| "onde fazer implante curitiba" | ❌ | ❌ | ❌ | ❌ |
| ... | | | | |

**Legenda**: ✅ = aparece, número = posição, ❌ = não aparece

## Aparições por LLM
- ChatGPT: 1/20 (5%)
- Gemini: 6/20 (30%)
- Perplexity: 12/20 (60%)
- Claude: 0/20 (0%)

**Média geral**: 19/80 = 24% de visibilidade

## Concorrentes dominantes nos prompts
| Concorrente | Aparições | LLMs |
|---|---|---|
| Clínica XYZ | 15 | CGP |
| Dra. Mariana Odonto | 8 | GP |
| ... | | |

## Hipóteses sobre baixa aparição
1. [hipótese sobre dados do Knowledge Graph]
2. [hipótese sobre ausência em Foursquare/Apple]
3. [hipótese sobre falta de Schema.org]
4. [hipótese sobre textos na web citando a empresa]

## Ações recomendadas (priorizadas)
1. **Cadastrar em Foursquare** (CRÍTICO para ChatGPT) — 30 min
2. **Implementar LocalBusiness Schema** no site — 2h
3. **Criar página FAQ** com 10 perguntas sobre os serviços — 3h
4. **Publicar llms.txt** no site — 15 min
5. **Solicitar Knowledge Graph panel** no Google — 1h trabalho + 
   espera

## Projeção
Implementando ações 1-4 nos próximos 30 dias, projeção de atingir 
60-80% de visibilidade em 90 dias (referência: clientes Growth 
da Perfiliza).
```

6. Salve em --output.
```

### Custo estimado por execução
- 20 prompts × 4 LLMs × ~300 tokens de saída = 24.000 tokens
- Média R$ 0,40 por 1k tokens entre todos provedores → **~R$ 10 por auditoria completa**
- Claude Code Max já incluso no plano mensal (R$ 500), então o custo real é só das APIs externas

---

## 3.9. Agente 5 — `report-generator`

### Propósito
Gera relatório mensal em Markdown (convertível em PDF) para cliente ativo.

### Fluxo operacional
1. No 1º dia útil do mês, fundador abre o painel GBP do cliente e copia os insights do mês anterior
2. Cola em `clientes/<cliente>/metricas/YYYY-MM-metricas.md`
3. Comando: `claude code agent report-generator --cliente ... --mes 2026-03`
4. Agente lê métricas + auditorias anteriores + posts publicados e gera relatório estruturado
5. Fundador converte para PDF: `pandoc relatorios/2026-03-relatorio.md -o relatorios/2026-03-relatorio.pdf --css=template.css`
6. Envia PDF por email ao cliente

### Definição — `.claude/agents/report-generator.md`

```markdown
---
name: report-generator
description: Gera relatório mensal de resultados do cliente
tools: [Read, Write, Bash]
model: claude-sonnet-4-7
---

# Agente: report-generator

## Como invocar
```bash
cd ~/perfiliza/clientes/cliente-001-sorriso-vivo
claude code agent report-generator --mes 2026-03
```

## Inputs esperados
- Existência de `metricas/2026-03-metricas.md` com insights copiados 
  do painel GBP (visualizações, ligações, rotas, etc.)
- Existência de `metricas/2026-02-metricas.md` para comparativo M-1
- Posts publicados em `posts/`
- Auditoria GEO mais recente em `auditorias/` (se Growth)

## Instruções

Gerar relatório com estrutura:

```markdown
# Relatório Perfiliza — [Nome] — [Mês/Ano]

## Resumo executivo
3 linhas máximo: o que aconteceu de importante neste mês.

## Métricas do GBP (antes / depois)

| Métrica | Mês anterior | Este mês | Variação |
|---|---|---|---|
| Visualizações do perfil | XXX | YYY | +A% |
| Cliques no site | XX | YY | +A% |
| Pedidos de rota | XX | YY | +A% |
| Ligações | XX | YY | +A% |
| Avaliações novas | X | Y | +N |
| Nota média | 4.5 | 4.7 | +0.2 |

## Entregas do mês
- Posts publicados: 4/4 ✅
- Avaliações respondidas: 8/8 ✅ (SLA médio: 12h)
- Fotos publicadas: 6
- Horários especiais atualizados: 1 (Sexta Santa)

## GEO (se Growth)
Aparições em LLMs:
- ChatGPT: X/20 (comparação com mês anterior: +N)
- Gemini: X/20 (+N)
- Perplexity: X/20 (+N)

## Destaques positivos
- [1-2 pontos concretos]

## Oportunidades para o próximo mês
- [1-3 ações recomendadas]

## Fotos publicadas no mês
[lista com referência às URLs do GBP]

## Próximos passos
- [calendário do próximo mês]

---
*Perfiliza — Consultoria de Google Meu Negócio + GEO*
*contato@perfiliza.com | perfiliza.com*
```
```

---

## 3.10. Agente 6 — `diagnostico`

### SLA prometido na landing
**Até 24h** da chegada da mensagem no WhatsApp. Tempo real de processamento do agente segue sendo 10-15 min (ver §3.11) — o SLA maior dá folga para revisão humana, diferenças de fuso, fila e qualidade antes do envio.

### Propósito
Agente orquestrador que consolida `profile-auditor` + `geo-auditor` em 1 único documento (PDF) para entrega do lead magnet.

### Fluxo operacional
1. Lead inicia conversa no WhatsApp (via CTA da landing `wa.me/...`) e envia: nome, nome da clínica, cidade, link do Google Maps/site
2. Fundador responde confirmando recebimento e prometendo o PDF em até 24h (template 1 do arquivo 07)
3. Fundador cria pasta `leads/diagnosticos/<slug>/` e registra a linha no Sheets (aba `Leads`, `Canal = WhatsApp`)
4. Comando: `claude code agent diagnostico --url "..." --nome "Dra. Juliana Mello" --empresa "..." --nicho odontologia --cidade "Curitiba" --output leads/diagnosticos/2026-04-17-dr-juliana.md`
5. Agente roda internamente `profile-auditor` + mini-versão do `geo-auditor` (5 prompts em vez de 20)
6. Consolida em 1 documento de 2-3 páginas no formato de lead magnet
7. Fundador converte em PDF e **envia pelo mesmo chat do WhatsApp em até 24h** (SLA prometido). **Sem email e sem formulário web.**

### Definição — `.claude/agents/diagnostico.md`

```markdown
---
name: diagnostico
description: Gera o PDF do lead magnet (diagnóstico gratuito) em 10-15 min
tools: [Read, Write, Bash, WebFetch]
model: claude-sonnet-4-7
---

# Agente: diagnostico

## Como invocar
```bash
claude code agent diagnostico \
  --url "https://maps.app.goo.gl/ABC" \
  --nome "Dra. Juliana Mello" \
  --empresa "Clínica Sorriso Vivo" \
  --nicho odontologia \
  --cidade "Curitiba-PR" \
  --output leads/diagnosticos/2026-04-17-dr-juliana.md
```

## Instruções

PASSOS:
1. Executar `profile-auditor` com os parâmetros fornecidos 
   (ver agente 3).
2. Executar mini-versão `geo-auditor` com 5 prompts (em vez de 20) 
   para economia de tempo e custo. Prompts sugeridos:
   - "melhor [nicho] em [bairro/cidade]"
   - "[serviço principal 1] em [cidade]"
   - "[serviço principal 2] em [cidade]"
   - "[nicho] aberto hoje em [cidade]"
   - "[nicho] com boa avaliação em [cidade]"
3. Consolidar em 1 documento com estrutura adaptada:

```markdown
# Diagnóstico Gratuito do seu Google Meu Negócio

**Para**: [Dra. Juliana Mello] — [Clínica Sorriso Vivo]
**Data**: 2026-04-17

---

## Em 2 páginas, você vai ver:
1. Nota do seu perfil de 0 a 100 (com critérios claros)
2. Os 3 erros mais críticos (para corrigir esta semana)
3. Como o ChatGPT, Gemini e Perplexity falam da sua clínica hoje
4. Comparativo com 3 concorrentes próximos
5. O que a Perfiliza pode fazer por você

---

## Sua nota: XX/100

### O que está OK
✅ [item positivo 1]
✅ [item positivo 2]

### O que está prejudicando
❌ [problema 1] — impacto: ALTO
❌ [problema 2] — impacto: ALTO
❌ [problema 3] — impacto: MÉDIO

## Como você aparece no ChatGPT, Gemini e Perplexity

Testamos 5 perguntas que um paciente em potencial faria. Resultado:

| Pergunta | ChatGPT | Gemini | Perplexity |
|---|---|---|---|
| "melhor dentista no [bairro]" | ❌ | ❌ | ❌ |
| "[serviço] em Curitiba" | ❌ | ❌ | ✅ 3º |
| ... | | | |

**Visibilidade média em IA: XX%**

Em 2026, 93% dos brasileiros já usam IA. Quando um paciente pergunta 
à IA, se você não aparece, você não existe.

## Quem apareceu no seu lugar

Concorrentes que o ChatGPT, Gemini e Perplexity recomendam no seu 
bairro:
1. [Concorrente A] — X aparições
2. [Concorrente B] — X aparições
3. [Concorrente C] — X aparições

## Comparativo rápido com 3 concorrentes próximos

| Critério | Você | Concorrente A | Concorrente B | Concorrente C |
|---|---|---|---|---|
| Avaliações | XX | 87 | 142 | 34 |
| Nota | 4.5 | 4.7 | 4.9 | 4.5 |
| Posts/mês | 0 | 2 | 5 | 0 |

## Estimativa de impacto

Considerando volume típico de busca por dentista em Curitiba 
e ticket médio do nicho, sua clínica pode estar deixando de lado 
**entre XX e YY pacientes potenciais por mês** — o equivalente a 
**R$ X.XXX a R$ Y.YYY em receita não capturada**.

(Estimativa baseada em benchmarks setoriais. Projeção, não garantia.)

## Como a Perfiliza resolve isso

Nosso plano **Starter Beta R$ 197/mês** inclui:
- 4 posts por mês no seu Google
- Resposta a 100% das avaliações em 24h
- Fotos processadas e subidas
- Relatório mensal

**Growth Beta R$ 297/mês** adiciona:
- Auditoria mensal GEO (ChatGPT, Gemini, Perplexity)
- Cadastros em Foursquare, Apple Business, Bing
- Schema.org + llms.txt no seu site

**Sem fidelidade**. Cancele quando quiser, sem multa.

## Próximo passo

Se quiser, podemos fazer uma call de 15 min esta semana para 
discutir os pontos deste relatório e ver se faz sentido. 
Zero pressão.

WhatsApp: (XX) XXXXX-XXXX
Email: contato@perfiliza.com

---
*Este diagnóstico foi gerado por agentes de IA da Perfiliza, com 
revisão humana antes do envio. Nenhum dado foi coletado além do 
que está publicamente acessível no seu perfil do Google.*
```

4. Salvar em --output (markdown).
5. Mostrar ao fundador o caminho final + comando pronto para 
   converter em PDF:
   ```bash
   pandoc <output>.md -o <output>.pdf \
     --css=~/perfiliza/templates/lead-magnet.css \
     --pdf-engine=weasyprint
   ```
```

---

## 3.11. Tempo médio de execução dos agentes

| Agente | Tempo (wall clock) | Custo API (Anthropic + externos) |
|---|---|---|
| review-responder | 30-60s | R$ 0,10-0,30 |
| post-creator | 2-4 min | R$ 0,40-0,80 |
| profile-auditor | 2-5 min | R$ 0,80-1,50 |
| geo-auditor (full 20 prompts) | 8-15 min | R$ 8-15 |
| report-generator | 1-2 min | R$ 0,50-1,00 |
| diagnostico | 10-15 min | R$ 3-5 |

**Observação**: com Claude Code Max (R$ 500/mês) o custo do Claude é "ilimitado" para fins práticos. Os valores acima são para os LLMs externos (OpenAI, Gemini, Perplexity).

## 3.12. Gestão de custo das APIs externas

As únicas APIs pagas são:
- OpenAI (para `geo-auditor`)
- Gemini (para `geo-auditor`)
- Perplexity (para `geo-auditor`)
- Google Places (para `profile-auditor` e `diagnostico`)

**Limite sugerido**: US$ 30/mês total entre as 4 APIs. Isso dá aproximadamente:
- 20 diagnósticos completos (para leads)
- 5 auditorias GEO completas/mês (para clientes Growth)
- Ilimitados `profile-auditor` para monitoramento

Configurar **limite de gasto mensal** em cada console (OpenAI, Google Cloud) para evitar surpresas.

## 3.13. Versionamento dos agentes

**Decisão (2026-04-20)**: o projeto usa **dois repositórios separados** no GitHub, em vez de um único repo como plano original. Motivo: separar código público-facing (landing) de tooling/documentação interna, permitindo landing pública (bom para SEO/credibilidade) e ops estritamente privado.

- **`perfiliza-ops`** (privado) — agentes, `_context/`, `CLAUDE.md`, templates, prompts, scripts. **Criado em 2026-04-20.**
- **`perfiliza-web`** (público) — somente landing Next.js, conectado à Vercel. A criar quando iniciar D3.

Estrutura do `perfiliza-ops`:

```
perfiliza-ops/
├── CLAUDE.md
├── _context/
├── .claude/agents/
├── templates/
├── prompts/
├── scripts/
└── logs/
```

**Não versionar** (em nenhum dos dois repos):
- `/clientes/` (dados sensíveis de clientes — LGPD) — só local, backup criptografado
- `/leads/` (dados pessoais de leads) — só local
- `.env` (chaves de API)

`.gitignore` do `perfiliza-ops` (já aplicado):
```
clientes/
leads/
.env
.env.*
*.pdf
logs/*.log
node_modules/
.DS_Store
Thumbs.db
```

**Multi-conta GitHub na mesma máquina**: esta máquina tem 2 contas configuradas com aliases em `~/.ssh/config`:
- `github.com` → conta antiga (chave `~/.ssh/id_ed25519`)
- `github.com-perfiliza` → conta `perfiliza` (chave `~/.ssh/perfiliza_ed25519`)

Remotes do projeto **sempre** usam o alias `github.com-perfiliza`. Identidade de commit é configurada por repo (`git config user.email 277848915+perfiliza@users.noreply.github.com`), nunca global.

Commit conventions:
- `agent: <nome>: <mudança>` — para mudanças em agentes
- `clientes: adicionar template` — para estrutura (não dados)
- `scripts: <mudança>`
- `chore: <mudança>` — infra/config/docs internos

---

**Próximo arquivo**: [`04_operacao_manual_gbp.md`](./04_operacao_manual_gbp.md) — protocolo operacional completo no painel oficial do Google Business Profile.
