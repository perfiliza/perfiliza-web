# 02. Copy e estrutura das landing pages

**Fonte de verdade da copy e da arquitetura das 4 landings da Perfiliza.**

Template replicável: a mesma estrutura de seções vale para qualquer nicho; só muda o conteúdo de alguns campos. Captação 100% via WhatsApp, com fallback `contato@perfiliza.com`. Design minimalista, mobile-first, cor primária Google Blue.

---

## 2.1. Escopo e filosofia

**4 páginas neste ciclo** (todas no mesmo deploy Next.js 16.2 export estático, servidas por pastas no `perfiliza.com`):

| Path | Audiência | Mensagem central |
|---|---|---|
| `perfiliza.com/` | Misto — direciona por nicho | "Onde seu cliente procura, você precisa aparecer." |
| `perfiliza.com/clinicas-odontologicas` | Dentista-proprietário(a), 35–55 | "Pacientes procuram dentista no Google toda hora." |
| `perfiliza.com/clinicas-esteticas` | Proprietária(o) de clínica estética | "Seu Instagram vai bem. Seu Google some." |
| `perfiliza.com/restaurantes` | Dono(a) de restaurante | "'Comer perto de mim' decide quem lota o salão." |

**Regra de ouro:** CTA único = WhatsApp (`wa.me` com mensagem pré-preenchida). Label secundário com email abaixo do botão principal. **Sem formulário web. Sem Tally. Sem Typeform.** Diagnóstico gratuito entregue em até 24h pelo mesmo chat.

**Template replicável:** conteúdo variável por nicho vive em `content/niches/<slug>.ts` (shape detalhada em §2.7). Estrutura de componentes (Hero, TrustBar, etc.) é idêntica — basta acrescentar um novo arquivo de conteúdo para publicar um novo nicho.

**Fora de escopo nesta rodada:** páginas legais (`/privacidade`, `/termos`), cases reais (entram quando houver permissão escrita de cliente), landing de confirmação pós-WhatsApp (não existe — a captação termina dentro do próprio chat).

## 2.2. Princípios editoriais

### 2.2.1. Tom e voz

- **"Amigo consultor", nunca vendedor agressivo.** Frases curtas, ativas. Sem superlativos vazios ("incrível", "imperdível", "revolucionário").
- **Tempo verbal:** presente e 2ª pessoa ("você"). Evitar 3ª pessoa ("o cliente", "o empresário").
- **Português brasileiro** em tudo. Sem termos em inglês sem tradução (exceção: "Google", "WhatsApp", "ChatGPT", "Gemini", "Claude", "PIX").

### 2.2.2. Tradução de jargão

O ICP (35–55 anos, dono(a) de clínica/restaurante, não-técnico) não conhece — e não precisa conhecer — os termos técnicos. Traduzir sempre:

| Evitar | Usar |
|---|---|
| SEO local | "aparecer em primeiro no mapa" |
| GEO / LLMs | "quando alguém pergunta ao ChatGPT ou Gemini" |
| Google Business Profile, GBP | "seu perfil no Google", "seu Google Meu Negócio" |
| Schema.org, llms.txt | "ajustamos a parte técnica do seu site pra IA te achar" |
| Keyword, ranking | "palavra que seu cliente pesquisa", "posição no Google" |
| Ficha | "perfil" |

### 2.2.3. Frases-chave (devem aparecer com consistência em todas as páginas)

- "Primeiro mês por nossa conta."
- "Sem fidelidade. Sem cartão. PIX quando funcionar."
- "Diagnóstico gratuito no WhatsApp em até 24h."
- "Você só paga se fizer sentido continuar."

### 2.2.4. Promessas e honestidade

- **Nunca prometer ranking específico** (top 3, 1º lugar, "colocamos você acima do concorrente").
- **Prometer processo e execução**, não resultado.
- **Toda projeção numérica** carrega rodapé: *Projeção baseada em benchmarks setoriais. Não é garantia de resultado.*
- **Odonto:** nunca afirmar "sem dor", "resultado garantido", "100% de sucesso". Respeitar diretrizes CFO/CRO.
- **Estética:** nunca fazer claim médico ("trata celulite", "cura estrias"). Usar "cuidado estético", "resultado esperado". Antes/depois só com autorização escrita.
- **Restaurantes:** não prometer volume de clientes. Posts com bebida alcoólica respeitam a regulamentação da praça.

### 2.2.5. Emojis

Banidos em copy publicada (regra do `CLAUDE.md`). Exceções:
- ✓ verde `#1E8E3E` em listas de benefícios inclusos.
- ✗ vermelho `#D93025` apenas em comparativos "sem Perfiliza".

### 2.2.6. Tamanhos-alvo por bloco

| Bloco | Limite |
|---|---|
| Hero H1 | ≤ 9 palavras |
| Hero sub-H1 | ≤ 22 palavras |
| Bullets de benefício | ≤ 14 palavras |
| Descrição de item de plano | ≤ 18 palavras (mais 1 linha opcional de exemplo) |
| Texto de pain point | ≤ 10 palavras, em 1ª pessoa |
| Resposta de FAQ | ≤ 40 palavras |

## 2.3. Design system

### 2.3.1. Paleta

| Token | Hex | Uso |
|---|---|---|
| `--color-primary` | `#1A73E8` | Google Blue — links, ícones de destaque, bordas de cartão ativo |
| `--color-action` | `#25D366` | Verde WhatsApp — botões de CTA primário, apenas |
| `--color-success` | `#1E8E3E` | ✓ em listas de benefícios inclusos |
| `--color-danger` | `#D93025` | ✗ em comparativos "sem Perfiliza"; nunca em outros contextos |
| `--color-text` | `#0B1220` | Texto primário |
| `--color-muted` | `#5F6368` | Texto secundário (label de email, legendas) |
| `--color-border` | `#E8EAED` | Bordas e separadores |
| `--color-bg` | `#FFFFFF` | Base |
| `--color-bg-alt` | `#F8FAFC` | Seções alternadas |

**Regra de uso:** azul para confiança/autoridade (identidade "Google"), verde WhatsApp **apenas** em CTA primário. Nunca usar verde Maps (`#34A853`) no botão — conflita com a identidade da ação (WhatsApp).

### 2.3.2. Tipografia

- **Família única:** Inter (Google Fonts).
- **Pesos:** 400 (corpo), 500 (labels), 600 (sub-H e destaques), 700 (H1/H2).
- **Escala modular 1.25:** 16px corpo → 20px → 25px → 31px → 39px → 49px.
- **Tamanho mínimo em texto corrido:** 16px. Hero H1 no mobile: 34–40px. Line-height 1.45 no corpo, 1.15 em H1/H2.

### 2.3.3. Componentes (para o dev implementar)

| Componente | Em que seções é usado |
|---|---|
| `<Hero>` | §2.5.1 |
| `<TrustBar>` | §2.5.2 |
| `<PainPoints>` | §2.5.3 |
| `<HowItWorks>` | §2.5.4 |
| `<GbpFeatureShowcase>` | §2.5.5 |
| `<WhereClientsFindYou>` | §2.5.6 |
| `<PlanComparison>` | §2.5.7 |
| `<VideoSection>` (condicional) | §2.5.8 |
| `<Proof>` | §2.5.9 |
| `<Faq>` | §2.5.10 |
| `<FinalCta>` | §2.5.11 |
| `<Footer>` | §2.5.12 |
| `<StickyMobileCta>` | Global (mobile) |
| `<NicheChooser>` | Só na home |

Todo componente recebe os campos variáveis via prop `content` (conteúdo do nicho). Estrutura idêntica para qualquer nicho futuro.

## 2.4. Arquitetura de seções — template mestre

Ordem do fluxo em cada landing de nicho (12 seções + barra mobile):

1. Hero
2. TrustBar
3. Pain Points ("Você sente isso?")
4. Como funciona em 3 passos
5. O Google é muito mais do que nome e telefone (educativa — 8 funcionalidades do GBP)
6. Onde seu cliente te encontra hoje (bloco duplo: Google / IA)
7. Planos e preços (Starter R$ 197 · Growth R$ 297)
8. Vídeo explicativo (condicional — só aparece se houver URL)
9. Prova (projeção setorial rotulada; substituir por case real quando houver)
10. FAQ
11. CTA final
12. Footer
13. (mobile) Sticky CTA no rodapé

**Na home**, a ordem é quase idêntica. A única diferença: entre a seção 2 (TrustBar) e a 3 (Pain Points), entra uma seção extra `<NicheChooser>` — 3 cartões grandes, um por nicho, levando a cada landing específica. Pain Points na home é opcional (versão curta, 3 frases genéricas).

## 2.5. Copy master por seção — conteúdo que não varia por nicho

Copy estrutural comum a todas as landings. Os campos variáveis por nicho ficam em §2.7.

### 2.5.1. Hero

**Estrutura:**
- H1 (variável por nicho — ver §2.7).
- Sub-H1 (variável por nicho).
- CTA primário (botão verde WhatsApp): **"Quero meu diagnóstico gratuito"**.
- Label abaixo do botão: *Prefere por e-mail? **contato@perfiliza.com***.
- Selo de risco-zero (pequeno, ao lado ou abaixo do botão): **"Sem cartão · Sem fidelidade · PIX só se fizer sentido"**.
- Imagem: mockup de celular do ICP vendo o próprio perfil no Google Maps em 1º lugar (ver §2.8).

### 2.5.2. TrustBar

**Texto fixo em todas as páginas** (uma linha, separadores `·`):

> **Primeiro mês por nossa conta · Sem fidelidade, cancelamento em 1 mensagem · Diagnóstico gratuito pelo WhatsApp em até 24h**

Barra horizontal, fundo `--color-bg-alt`, texto em `--color-text`, altura reduzida.

### 2.5.3. Pain Points — "Você sente isso?"

**Título da seção:** "Você sente isso?"
**Subtítulo:** "A gente ouve essas frases toda semana. Veja se alguma combina com você."
**Estrutura:** 4 cartões, cada um com ícone line minimalista + 1 frase em 1ª pessoa. Frases variam por nicho (§2.7).

### 2.5.4. Como funciona em 3 passos

**Título da seção:** "Como a gente começa."
**Subtítulo:** "3 passos, sem cartão de crédito, sem contrato."

**Cartão 1 — "Mande um WhatsApp"**
> Você clica aqui em baixo e já abre o WhatsApp com a mensagem pronta. Me conta o nome do seu negócio e manda o link do seu Google. Em até 24h você recebe um PDF grátis com o diagnóstico completo.

**Cartão 2 — "Se fizer sentido, adicione a gente como Administrador"**
> 2 minutos pelo painel oficial do Google. **Você nunca me dá senha.** Só convida `admin@perfiliza.com` como Administrador — e pode remover a qualquer momento, do mesmo jeito.

**Cartão 3 — "A gente cuida por 30 dias, sem cobrança"**
> No dia 30 te mando um relatório mostrando tudo que mudou. Se fez sentido continuar, é R$ 197/mês via PIX (ou R$ 297 no Growth). Se não, a gente se despede sem cobrar nada.

### 2.5.5. "O Google é muito mais do que nome e telefone"

**Título da seção:** "Seu Google Meu Negócio tem muito mais do que você imagina."
**Subtítulo:** "A maioria dos donos acha que o perfil é só nome, endereço e telefone. Na verdade, é um mini-site com 8+ funcionalidades que o Google usa pra te ranquear — e a gente cuida de todas elas."

**Estrutura:** grid de 8 cartões (2 colunas no mobile, 4 em desktop). Cada cartão tem: ícone · nome da funcionalidade · 1 linha de descrição aplicada ao nicho (§2.7).

**Funcionalidades exibidas (fixas em todas as landings):**

1. **Posts** — publicações semanais no seu perfil, que aparecem quando alguém te procura.
2. **Fotos categorizadas** — capa, equipe, interior, produtos e serviços, cada uma no lugar certo.
3. **Serviços / cardápio** — catálogo detalhado com descrição, preço e foto (quando couber).
4. **Perguntas e respostas** — monitoramos e respondemos o que o público pergunta por lá.
5. **Atributos** — estacionamento, acessibilidade, Wi-Fi, formas de pagamento, aceita convênio.
6. **Horários especiais** — feriados, recessos, plantão, atualizados antes de o feriado cair.
7. **Reservas e agendamento** — link direto pra sua agenda, WhatsApp ou sistema de reserva.
8. **Reviews respondidas** — 100% das avaliações com resposta em até 24h, revisadas por humano.

**Imagem:** um screenshot mockado de um perfil GBP rico, com 8 círculos numerados indicando cada funcionalidade (ver §2.8).

### 2.5.6. Onde seu cliente te encontra hoje (bloco duplo)

**Título da seção:** "Seu cliente procura em dois lugares. A gente cuida dos dois."

**Bloco A — Google (Starter):**
- H3: "Quando alguém pesquisa no Google."
- Texto: "Google Maps, Google Search e Google Assistente. É aqui que 9 em cada 10 clientes começam a procurar por [serviço do nicho] perto de onde estão. A Perfiliza aparece no seu perfil toda semana pra você ser a primeira opção."
- Imagem: tela de celular mostrando o negócio em 1º no Maps; ícones discretos de Search e Assistant ao lado.
- CTA contextual (link, não botão): "Cuidamos disso no **Starter · R$ 197/mês** →".

**Bloco B — IA (Growth):**
- H3: "Quando alguém pergunta à IA."
- Texto: "ChatGPT, Gemini, Claude, Perplexity. Hoje, milhões de brasileiros pedem recomendação à IA antes de decidir. Se você não aparece nas respostas, seu concorrente aparece. A Perfiliza cuida disso também."
- Imagem: 3 telas lado a lado (ChatGPT, Gemini, Claude) recomendando o negócio. Selo "GEO" no topo com tooltip que traduz: *Fazer a IA te conhecer.*
- CTA contextual: "Incluso no **Growth · R$ 297/mês** →".

### 2.5.7. Planos e preços

**Título da seção:** "Dois planos. Primeiro mês por nossa conta nos dois."
**Subtítulo:** "Você começa sem pagar. No dia 30, decide se continua."

**Cartão 1 — Starter · R$ 197/mês**
*Gestão completa do seu Google.*

- ✓ **4 posts por mês no seu Google**, escritos, formatados e publicados por nós com foto.
- ✓ **Resposta a 100% das avaliações em até 24h**, revisadas por humano antes de irem ao ar.
- ✓ **Fotos tratadas e subidas** na categoria certa (capa, equipe, interior, produto).
- ✓ **Horários especiais atualizados** antes de cada feriado.
- ✓ **Perguntas e Respostas do perfil** monitoradas e respondidas.
- ✓ **Serviços e atributos** do perfil preenchidos e mantidos.
- ✓ **Relatório mensal em PDF** com o que mudou e o que vem pela frente.
- ✓ **Suporte direto no WhatsApp**, sem formulário, sem fila.

**Cartão 2 — Growth · R$ 297/mês**
*Starter + aparecer quando alguém pergunta à IA.*

- ✓ **Tudo do Starter.**
- ✓ **Auditoria mensal em ChatGPT, Gemini, Perplexity e Claude** — testamos 20 perguntas reais e mostramos onde você aparece.
- ✓ **Cadastro e manutenção em Foursquare, Apple Business e Bing**, as fontes que alimentam as IAs.
- ✓ **Ajustes técnicos no seu site** (marcação estruturada e instrução para IA) pra elas te reconhecerem.
- ✓ **Relatório mensal GEO** mostrando ganho de visibilidade em cada IA.

**Badge destacado nos dois cartões:** "Primeiro mês por nossa conta".

**Rodapé dos cartões (linha única):** "PIX mensal · sem contrato · cancelamento em 1 mensagem por WhatsApp · preço legacy pra quem entra no beta (o seu preço nunca sobe)."

**CTA ao final da seção:** botão WhatsApp com texto **"Quero começar pelo diagnóstico gratuito"** + label email.

### 2.5.8. Vídeo explicativo (condicional)

Só renderiza se `content.videoUrl` estiver preenchido no objeto de conteúdo. Enquanto não houver vídeo, o bloco não aparece.

**Quando existir:**
- Título: "Em 90 segundos: o que a Perfiliza faz pelo seu Google."
- Embed responsivo 16:9.
- Roteiro-alvo (a produzir): 0–10s dor · 10–40s o que incluímos · 40–70s como começa · 70–90s 1º mês por nossa conta + CTA.

### 2.5.9. Prova (projeção setorial até haver case real)

**Título da seção:** "O que costuma acontecer nos primeiros 60 dias."
**Subtítulo:** "Estamos no beta — ainda não temos case público. Os números abaixo são projeção de benchmarks setoriais, não garantia. Quando tivermos o primeiro cliente com permissão de divulgação, substituímos isso por depoimento real."

**3 cartões-projeção (substituir por cases reais assim que houver):**

1. **+50 a 120% em cliques para rota**, no perfil do Google, em 60 dias de operação contínua.
2. **+15 a 40 avaliações novas por trimestre**, combinando placa no balcão + pedido no atendimento.
3. **Aparições em ChatGPT/Gemini/Perplexity** subindo de 10–20% para 50–70% em 90 dias (apenas Growth).

Cada cartão leva, obrigatoriamente, o rótulo: ***Projeção baseada em benchmarks setoriais. Não é garantia de resultado.***

**Alternativa temporária sugerida:** bloco "Quem está por trás" com foto e 2 linhas do fundador — credibilidade por pessoa, quando ainda não há case.

### 2.5.10. FAQ

**Título da seção:** "Perguntas que todo mundo faz."

Formato acordeão. Ordem das 8 perguntas comuns (idênticas em todas as landings). Nichos ganham 1–2 perguntas extras (§2.7).

1. **Eu preciso te dar minha senha?**
   Não. Você me adiciona como **Administrador** pelo painel oficial do Google — leva 2 minutos. E pode remover do mesmo jeito, a qualquer hora.

2. **Como é esse "primeiro mês por nossa conta" de verdade?**
   Você começa hoje sem pagar nada. A gente cuida do seu Google por 30 dias. No dia 30, te mando um relatório. Se fez sentido, é R$ 197 via PIX e continua. Se não fez, a gente se despede sem cobrar.

3. **Tem fidelidade?**
   Não. Cancelamento por WhatsApp em 1 mensagem, em qualquer mês. Seu preço nunca sobe enquanto você for cliente.

4. **Em quanto tempo eu vejo resultado?**
   Os primeiros sinais — visualizações e cliques no Maps — costumam aparecer entre 15 e 30 dias. Avaliações dependem de quem te atende e do volume. Não prometo ranking; prometo o trabalho feito toda semana.

5. **Vocês prometem 1º lugar no Google?**
   Não. Ninguém honesto promete ranking — isso depende do Google. A gente promete executar o que mexe a agulha: posts, reviews, fotos, perguntas, atualizações.

6. **O que é "GEO"?**
   É o trabalho pra que ChatGPT, Gemini e Perplexity te mencionem quando alguém pergunta por [nicho] na sua cidade. Está no Growth.

7. **E se eu já tenho agência de marketing?**
   A Perfiliza é **específica para Google**. Convivemos bem com agência de Instagram ou site. Se a agência atual já cuida do Google, vale comparar o que cada lado entrega item a item.

8. **Como vocês lidam com meus dados?**
   LGPD. A gente usa só o que está público no seu Google + o que você me manda. Você pode pedir exclusão a qualquer momento, e eu entrego todos os seus dados num zip.

### 2.5.11. CTA final

**Título da seção:** "Começa hoje, sem cartão."
**Parágrafo:** "Me chame no WhatsApp com o link do seu Google. Em até 24h eu te devolvo um PDF grátis com o diagnóstico completo — problemas, prioridades e o que mudaria já nas primeiras 2 semanas."

**Botão primário (verde WhatsApp, tamanho grande):** **"Mandar mensagem no WhatsApp"**
**Label abaixo do botão:** *Prefere por e-mail? **contato@perfiliza.com***
**Linha de fechamento (cinza, pequena):** "Perfiliza — Consultoria de Google Meu Negócio + GEO para pequenos e médios negócios brasileiros."

### 2.5.12. Footer

**3 blocos em desktop (empilhados no mobile):**

- **Logo + tagline:** "Perfiliza. Cuidamos do seu Google."
- **Nichos atendidos:** links para `/clinicas-odontologicas`, `/clinicas-esteticas`, `/restaurantes`.
- **Legal e contato:** link para `/privacidade` (placeholder até publicar), `/termos` (placeholder), linha "LGPD: pedidos de exclusão em contato@perfiliza.com", CNPJ (quando houver).

**Linha final (centralizada, pequena):** "Perfiliza © 2026 · perfiliza.com · contato@perfiliza.com".

### 2.5.13. StickyMobileCta (fixo no rodapé do mobile)

- Só aparece no mobile, após o Hero sair da viewport.
- Altura 56px, fundo branco com borda superior sutil.
- Conteúdo: texto "Diagnóstico grátis em 24h" à esquerda + botão verde WhatsApp à direita ("WhatsApp").
- Ao clicar, dispara a mesma mensagem pré-preenchida do CTA da seção visível naquele momento (ou, se ambíguo, a mensagem "Hero" da página).

## 2.6. Sistema de CTAs — WhatsApp + fallback de email

### 2.6.1. Número do WhatsApp

Número único do fundador (WhatsApp Business) configurado em variável de ambiente `NEXT_PUBLIC_WHATSAPP_NUMBER` no formato `55XXXXXXXXXXX` (13 dígitos, sem `+`, sem espaços). Todos os links `wa.me` são montados a partir dessa variável.

### 2.6.2. Matriz de mensagens pré-preenchidas

Cada botão primário aponta para `https://wa.me/<NUMERO>?text=<mensagem>`. A mensagem varia por **página × posição** — permite identificar de onde veio o lead sem depender só de UTM.

| Página | Posição | Mensagem pré-preenchida |
|---|---|---|
| Home | Hero | "Oi! Vim pelo site da Perfiliza. Quero o diagnóstico gratuito do meu Google." |
| Home | Planos / CTA final | "Oi! Vim pelo site da Perfiliza, seção de planos. Posso receber o diagnóstico gratuito?" |
| Odonto | Hero | "Oi! Tenho clínica odontológica. Quero o diagnóstico gratuito do meu Google." |
| Odonto | Planos / CTA final | "Oi! Vi o plano (Starter ou Growth) para clínica odontológica. Podemos começar?" |
| Estética | Hero | "Oi! Tenho clínica de estética. Quero o diagnóstico gratuito do meu Google." |
| Estética | Planos / CTA final | "Oi! Vi o plano (Starter ou Growth) para clínica de estética. Podemos começar?" |
| Restaurantes | Hero | "Oi! Tenho restaurante. Quero o diagnóstico gratuito do meu Google." |
| Restaurantes | Planos / CTA final | "Oi! Vi o plano (Starter ou Growth) para restaurante. Podemos começar?" |

**Encoding:** usar `encodeURIComponent` no JavaScript ao montar o link (ou codificar no build, já que é export estático).

### 2.6.3. Label secundário (email)

Abaixo de todo botão primário (mesmo hero, CTA final e Sticky), exibir em texto pequeno `--color-muted`:

> Prefere por e-mail? **contato@perfiliza.com**

O email é um clique em `mailto:contato@perfiliza.com?subject=Diagn%C3%B3stico%20Perfiliza&body=Oi%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20ges%C3%A7%C3%A3o%20do%20Google%20Meu%20Neg%C3%B3cio.`. O endereço é o grupo com Collaborative Inbox já configurado no Workspace (ver `_context/00` §0.5 / `CLAUDE.md`).

### 2.6.4. Rastreamento

Cada clique no CTA primário dispara o evento `ClickWhatsAppCTA` em **3 destinos** (GA4, Meta Pixel, Google Ads), com parâmetros:

```json
{
  "landing": "home | odonto | estetica | restaurantes",
  "posicao": "hero | planos | cta_final | sticky_mobile"
}
```

Ver detalhes em `_context/05` §5.6 (pixel, CAPI, UTMs).

## 2.7. Copy específica por nicho

O conteúdo abaixo preenche o objeto `content/niches/<slug>.ts` para cada nicho. O template visual é idêntico ao descrito em §2.5.

### 2.7.1. Home (`perfiliza.com/`)

Home funciona como porta de entrada institucional e direciona cada visitante ao nicho certo. Usa uma versão reduzida do template (sem pain points específicos, com um bloco extra `<NicheChooser>`).

**Hero**
- **H1:** "Onde seu cliente procura, você precisa aparecer."
- **Sub-H1:** "Cuidamos do seu Google Meu Negócio toda semana e fazemos a IA te recomendar. Primeiro mês por nossa conta."
- **Imagem:** celular mostrando Google Maps com um negócio em 1º lugar; sobreposta, em silhueta, a tela de ChatGPT citando o mesmo nome.

**NicheChooser (logo após a TrustBar)**
- Título: "Qual o seu negócio?"
- 3 cartões clicáveis (grid 1×3 em desktop, empilhados em mobile):
  - **Clínicas odontológicas** → `/clinicas-odontologicas`
  - **Clínicas de estética** → `/clinicas-esteticas`
  - **Restaurantes** → `/restaurantes`
  - Cada cartão: ícone simples + nome + 1 linha ("Ver como a Perfiliza cuida do Google da sua [nicho]").

**Pain Points (versão curta, 3 frases genéricas)**
- "Meu perfil no Google está parado há meses."
- "Meu concorrente aparece antes de mim."
- "Não sei se a IA me menciona quando alguém pergunta por [meu serviço]."

**Seção educativa §2.5.5** — mesma copy genérica (sem exemplos específicos de nicho — usar texto neutro "posts sobre seus serviços", "fotos do seu estabelecimento").

**FAQ** — 8 perguntas comuns, sem perguntas extras de nicho.

**CTA final** — texto idêntico a §2.5.11.

**Mensagens WhatsApp** — ver §2.6.2 (linhas "Home").

### 2.7.2. Odontologia (`perfiliza.com/clinicas-odontologicas`)

**One-liner interno:** "Pacientes procuram dentista no Google toda hora."

**Hero**
- **H1:** "Pacientes procuram dentista no Google toda hora."
- **Sub-H1:** "A gente cuida do seu perfil toda semana. Primeiro mês por nossa conta. Depois, R$ 197/mês via PIX — sem fidelidade."
- **Imagem:** celular mostrando resultado no Maps com uma clínica odontológica em 1º lugar; pin azul destacado; segunda tela discreta mostrando busca "dentista perto de mim".

**Pain Points (4 frases em 1ª pessoa)**
1. "Minha agenda só enche por indicação."
2. "Tenho avaliações antigas sem resposta e fico travado."
3. "Meu concorrente aparece antes no Maps."
4. "Não sei se o ChatGPT me menciona quando alguém pesquisa."

**Seção "O Google é muito mais…" — descrições aplicadas ao nicho**

| Funcionalidade | Descrição aplicada |
|---|---|
| Posts | 4 por mês sobre os procedimentos que você quer destacar (ortodontia, limpeza, implante, clareamento). |
| Fotos categorizadas | Equipe, consultório, equipamentos, antes/depois com autorização escrita. |
| Serviços | Ortodontia, implante, clareamento, limpeza, harmonização orofacial — cada um com descrição própria. |
| Perguntas e respostas | "Aceita convênio?", "Faz parcelamento?", "Atende criança?" — respondemos primeiro. |
| Atributos | Aceita convênio, estacionamento, acessível, Wi-Fi, formas de pagamento. |
| Horários especiais | Feriados, Carnaval, recesso de fim de ano — atualizados antes do feriado. |
| Reservas / agendamento | Link direto pra sua agenda online ou WhatsApp clínico. |
| Reviews respondidas | 100% das avaliações com resposta em até 24h, em conformidade com o CRO. |

**Bloco "Onde seu cliente te encontra" — adaptações**
- Bloco A texto: "9 em cada 10 pacientes começam procurando 'dentista perto de mim' ou 'ortodontia em [bairro]' no Google. A Perfiliza faz seu perfil aparecer — e aparecer bem."
- Bloco B texto: "Cada vez mais gente pergunta 'qual melhor dentista no [bairro]?' pra IA. Se ela não te cita, cita seu concorrente. O Growth resolve isso."

**Prova — projeções setoriais (rotuladas)**
1. "Clínicas odontológicas em capitais chegam a **+60% em cliques para rota** em 60 dias de gestão consistente. *Projeção setorial, não garantia.*"
2. "Média de **+15 a 30 avaliações novas** por trimestre quando a clínica pede review no atendimento + coloca placa na recepção. *Projeção setorial.*"
3. "Aparições em ChatGPT/Gemini/Perplexity para perguntas do tipo 'melhor dentista em [bairro]' sobem, em média, **de 10% para 60%** em 90 dias no Growth. *Projeção setorial.*"

**FAQ — perguntas extras do nicho**
9. **Vocês respeitam as diretrizes do CFO e CRO nas respostas?**
   Sim. Nenhuma resposta de avaliação promete resultado clínico, não cita procedimento específico do paciente e nunca expõe dado de saúde. Revisamos cada texto antes de publicar.

10. **Posso subir foto antes/depois?**
    Só com autorização escrita do paciente. A gente fornece o termo pronto pra você usar.

**Palavras-chave SEO (para meta tags e sub-headlines internas)**
- dentista perto de mim, clínica odontológica [cidade], ortodontia, implante, clareamento dental, harmonização orofacial, avaliações google dentista, google meu negócio dentista.

**Disclaimers obrigatórios (no rodapé da landing)**
- "Perfiliza não emite receita nem presta serviço clínico. Toda comunicação respeita as diretrizes do CFO/CRO."

**Mensagens WhatsApp** — ver §2.6.2 (linhas "Odonto").

### 2.7.3. Estética (`perfiliza.com/clinicas-esteticas`)

**One-liner interno:** "Seu Instagram vai bem. Seu Google é que paga o aluguel."

**Hero**
- **H1:** "Seu Instagram vai bem. Seu Google some."
- **Sub-H1:** "Clientes novas te procuram no Google antes de agendar. A Perfiliza cuida desse canal por você — primeiro mês por nossa conta."
- **Imagem:** celular mostrando busca "harmonização facial [bairro]" no Google, com uma clínica de estética em 1º.

**Pain Points**
1. "Meu Instagram bomba, meu Google some."
2. "Foto boa fica no Instagram, nunca no Google."
3. "Não sei responder review sobre dor de procedimento."
4. "Sumi do mapa depois da última atualização do Google."

**Seção "O Google é muito mais…" — descrições aplicadas**

| Funcionalidade | Descrição aplicada |
|---|---|
| Posts | 4 por mês sobre os procedimentos da casa (harmonização, limpeza de pele, laser, drenagem). |
| Fotos categorizadas | Equipe, cabines, equipamentos, antes/depois com autorização escrita da cliente. |
| Serviços | Harmonização facial, botox, preenchimento, limpeza de pele, depilação a laser, drenagem linfática. |
| Perguntas e respostas | "Quanto tempo dura?", "Dói?", "Faz parcelamento?" — respondemos primeiro. |
| Atributos | Estacionamento, acessibilidade, Wi-Fi, formas de pagamento. |
| Horários especiais | Feriados, férias coletivas, agendas de véspera de festa — atualizados antes. |
| Reservas / agendamento | Link direto pra sua agenda online ou WhatsApp. |
| Reviews respondidas | 100% das avaliações com resposta em até 24h, sem claim médico. |

**Bloco "Onde seu cliente te encontra" — adaptações**
- Bloco A texto: "Antes de agendar harmonização, limpeza de pele ou laser, as clientes abrem o Google. Se o seu perfil estiver parado, elas vão pra concorrente."
- Bloco B texto: "A IA recomenda clínica estética quando alguém pergunta 'onde fazer botox em [bairro]'. O Growth faz você entrar nessas respostas."

**Prova — projeções setoriais**
1. "Clínicas estéticas em capitais chegam a **+70% em pedidos de rota** em 60 dias com gestão consistente. *Projeção setorial, não garantia.*"
2. "Média de **+20 a 40 avaliações novas** por trimestre combinando pedido no atendimento + placa na recepção. *Projeção setorial.*"
3. "Visibilidade em IA para 'melhor clínica de estética em [bairro]' sobe, em média, **de 5% para 55%** em 90 dias no Growth. *Projeção setorial.*"

**FAQ — perguntas extras do nicho**
9. **Podem subir foto antes/depois?**
   Só com autorização escrita da cliente. A gente fornece o termo pronto. Sem autorização, a foto fica fora do perfil.

10. **Vocês fazem claim médico (tipo "trata celulite")?**
    Nunca. Usamos "cuidado estético", "resultado esperado", "procedimento indicado". Respeitamos ANVISA e evitamos qualquer reclamação sanitária.

**Palavras-chave SEO**
- harmonização facial [cidade], botox, preenchimento, limpeza de pele, laser, drenagem linfática, clínica estética perto de mim, google meu negócio estética.

**Disclaimers obrigatórios (rodapé)**
- "Perfiliza não executa procedimento estético e respeita ANVISA em toda comunicação. Antes/depois só com consentimento escrito."

**Mensagens WhatsApp** — ver §2.6.2 (linhas "Estética").

### 2.7.4. Restaurantes (`perfiliza.com/restaurantes`)

**One-liner interno:** "'Comer perto de mim' decide quem lota o salão."

**Hero**
- **H1:** "'Comer perto de mim' decide quem lota o salão."
- **Sub-H1:** "Quando alguém pesquisa restaurante no Google, alguém ganha a mesa. A Perfiliza faz você ser esse alguém. Primeiro mês por nossa conta."
- **Imagem:** celular no caminho de um almoço mostrando Maps com restaurantes, com o estabelecimento do cliente em 1º lugar.

**Pain Points**
1. "Quem pesquisa 'comer perto' não me encontra."
2. "Tenho foto dos 2010 no perfil."
3. "Reviews ruins sem resposta afastam cliente novo."
4. "Concorrente da esquina aparece com promoção; eu não."

**Seção "O Google é muito mais…" — descrições aplicadas**

| Funcionalidade | Descrição aplicada |
|---|---|
| Posts | 4 por mês com prato do dia, promoção, novidade no cardápio, horário especial. |
| Fotos categorizadas | Fachada, salão, pratos por categoria (entrada, prato principal, sobremesa, bebida), equipe. |
| Cardápio / serviços | Cardápio detalhado com foto, descrição e preço — direto no Google. |
| Perguntas e respostas | "Faz delivery?", "Aceita pet?", "Tem opção vegana?" — respondemos primeiro. |
| Atributos | Aceita pet, estacionamento, acessibilidade, Wi-Fi, delivery, reserva, esplanada. |
| Horários especiais | Feriados, véspera, Dia dos Namorados, Natal — atualizados antes. |
| Reservas / agendamento | Link direto para reserva online, iFood ou WhatsApp. |
| Reviews respondidas | 100% das avaliações com resposta em até 24h, incluindo as críticas. |

**Bloco "Onde seu cliente te encontra" — adaptações**
- Bloco A texto: "'Comer perto de mim', 'restaurante no [bairro]', 'rodízio', 'almoço executivo' — são as buscas que enchem mesa. A Perfiliza deixa seu perfil pronto pra cada uma."
- Bloco B texto: "A IA recomenda restaurante o tempo todo. 'Qual melhor [tipo de cozinha] no [bairro]?' O Growth coloca você nessa resposta."

**Prova — projeções setoriais**
1. "Restaurantes em bairros de alta circulação chegam a **+80% em pedidos de rota** em 60 dias com gestão consistente. *Projeção setorial, não garantia.*"
2. "Média de **+30 a 60 avaliações novas** por trimestre combinando placa na mesa + pedido educado ao final do atendimento. *Projeção setorial.*"
3. "Aparições em IA para 'melhor [tipo de cozinha] em [bairro]' sobem, em média, **de 10% para 65%** em 90 dias no Growth. *Projeção setorial.*"

**FAQ — perguntas extras do nicho**
9. **Vocês atualizam cardápio e preço no Google?**
   Sim. A gente mantém o cardápio do seu perfil sincronizado com o que você serve — inclusive foto, descrição e preço. Mudou o prato do dia? Me manda no WhatsApp e eu subo.

10. **Posso promover cerveja, vinho ou drinque no post?**
    Dá. A gente respeita as restrições da praça (horário e regulamentação local) e evita promessa de consumo. Posts com bebida vão sempre sem apelação a quem não pode consumir.

**Palavras-chave SEO**
- restaurante perto de mim, almoço executivo [cidade], rodízio, pizzaria, hamburgueria, comida italiana/japonesa/árabe [bairro], melhor restaurante [bairro], google meu negócio restaurante.

**Disclaimers obrigatórios (rodapé)**
- "Perfiliza respeita as normas municipais de publicidade de alimentos e bebidas. Posts de bebida alcoólica seguem a regulamentação da cidade do cliente."

**Mensagens WhatsApp** — ver §2.6.2 (linhas "Restaurantes").

## 2.8. Briefings de imagem e mídia

**Princípios comuns a todas as imagens:**
- Mockups de tela limpos. Sem foto de banco genérica.
- Celular preferido a desktop (ICP usa celular).
- Azul `#1A73E8` apenas em detalhes, nunca como fundo.
- Pessoas em fotos com rosto parcialmente enquadrado ou desfocado — ênfase na tela, não na fisionomia.

**Mídia por bloco:**

| Bloco | Briefing |
|---|---|
| Hero — Home | Celular em mão com Maps em 1º lugar + silhueta de ChatGPT citando o negócio atrás. |
| Hero — Odonto | Celular mostrando "dentista perto de mim" no Maps, clínica odontológica em 1º, pin azul destacado. |
| Hero — Estética | Celular com busca "harmonização facial [bairro]", clínica estética em 1º. |
| Hero — Restaurantes | Celular no caminho do almoço com Maps, restaurante em 1º, indicador de 5 estrelas visível. |
| Pain Points (§2.5.3) | Ícones line minimalistas 24px, 1 por card. Nada de ilustração complexa. |
| Como funciona (§2.5.4) | 3 ícones line: balão WhatsApp · chave Admin · escudo Google. |
| GBP Features (§2.5.5) | Screenshot mockado de um perfil GBP rico, com 8 círculos numerados sobre cada funcionalidade. Imagem única, densa, didática. |
| Onde seu cliente te encontra — Bloco A (Google) | Celular com Maps em 1º + ícones pequenos de Search e Assistant. |
| Onde seu cliente te encontra — Bloco B (IA) | 3 telas lado a lado (ChatGPT, Gemini, Claude) recomendando o negócio. Selo "GEO" com tooltip. |
| Planos (§2.5.7) | Sem imagem. Só cards tipográficos. |
| Vídeo (§2.5.8) | Thumbnail gerada quando houver vídeo. Seção oculta até lá. |
| Prova (§2.5.9) | Sem imagem. Cards com tipografia + selo "projeção setorial". |
| CTA final (§2.5.11) | Sem imagem. Bloco centralizado, respiro generoso. |

**Formatos técnicos:** WebP primário, fallback JPG, retina 2x. Lazy-load em tudo abaixo da dobra. Alt text descritivo obrigatório (acessibilidade + SEO).

## 2.9. Compliance e disclaimers (resumo operacional)

- **Todo número** carrega rodapé: *Projeção baseada em benchmarks setoriais. Não é garantia de resultado.*
- **Nenhuma promessa de ranking.**
- **Odonto:** CFO/CRO — sem promessa clínica, sem expor dado de saúde em resposta pública.
- **Estética:** ANVISA — sem claim médico, antes/depois só com autorização escrita.
- **Restaurantes:** regulamentação municipal — bebida alcoólica respeita horário e normas locais.
- **LGPD:** texto explícito na FAQ + link para `/privacidade` (quando publicada).
- **Acessibilidade:** contraste AA mínimo, texto corrido ≥ 16px, alt text em toda imagem.

## 2.10. Checklist de verificação pré-publicação

Antes de ativar qualquer campanha de `_context/05`:

- [ ] Todas as 4 landings estão no ar com HTTPS válido.
- [ ] Lighthouse mobile ≥ 85 em cada landing.
- [ ] Todos os botões primários disparam `ClickWhatsAppCTA` em GA4, Meta Pixel e Google Ads.
- [ ] Cada botão primário abre a **mensagem pré-preenchida correta** (testado em iOS + Android + WhatsApp Web).
- [ ] Label de email aparece abaixo de todos os CTAs primários, com `mailto:` funcional.
- [ ] Badge "Primeiro mês por nossa conta" visível no hero e na seção de planos.
- [ ] Seção §2.5.5 lista as 8 funcionalidades do GBP com descrição aplicada ao nicho.
- [ ] Seção §2.5.6 tem visual Google **e** visual IA.
- [ ] Seção §2.5.7 lista ao menos 7 itens no Starter + delta do Growth.
- [ ] Todos os números têm rótulo "*projeção setorial, não garantia*".
- [ ] Nenhuma frase promete ranking específico.
- [ ] Disclaimers CFO/ANVISA/Regulamentação municipal presentes nos rodapés dos nichos respectivos.
- [ ] FAQ responde: senha, fidelidade, 1º mês, tempo de resultado, ranking, GEO, agência, dados.
- [ ] Sticky CTA mobile aparece após o hero sair da viewport.
- [ ] Footer com links para os 3 nichos + legais + CNPJ (quando houver).
- [ ] Teste de leitura com 1 pessoa fora do ICP: em 10s, ela explica o que a Perfiliza faz.
- [ ] Teste de leitura com 1 dono do nicho (amigo do fundador): dúvidas anotadas e fricções corrigidas.

## 2.11. Como este arquivo se conecta ao resto

- **`_context/00`** define a arquitetura mínima e o CRM em Sheets — a copy aqui respeita a captação via WhatsApp (§0.3–§0.5).
- **`_context/01`** define ICP e vocabulário por nicho — as variações em §2.7 puxam dali. A promoção de restaurantes a nicho ativo exige atualizar `_context/01` em paralelo.
- **`_context/03`** descreve o agente `diagnostico` que gera o PDF do lead em até 24h — é o que materializa a promessa da landing.
- **`_context/04`** descreve o onboarding (convite de Administrador via `admin@perfiliza.com`) — reflete o passo 2 da seção §2.5.4.
- **`_context/05`** define pixel, UTMs, Conversions API e CPL — o sistema de CTAs em §2.6 é o ponto de disparo desses eventos.
- **`_context/07`** lista D4 (`/clinicas-odontologicas`) e D5 (`/clinicas-esteticas`) como janela de implementação da landing. Com restaurantes promovido a nicho inicial, D5 precisa incluir também `/restaurantes`.

---

**Próximo arquivo:** [`03_agentes_claude_code_local.md`](./03_agentes_claude_code_local.md) — os 6 agentes locais que executam a operação.
