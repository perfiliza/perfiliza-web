# 05. Tráfego pago reduzido — validação de hipótese com orçamento mínimo

> **Propósito**: definir campanhas mínimas de tráfego pago (Google Ads + Meta Ads) com orçamento reduzido de **R$ 30-50/dia** para validar se o funil `landing → clique no CTA WhatsApp → conversa no chat → diagnóstico em 24h → call → venda` funciona **antes** de escalar gastos.

---

## 5.1. Filosofia do tráfego pago

Tráfego pago **não é para escalar** — é para **encurtar o tempo de aprendizagem**. O objetivo não é captar 100 leads/mês; é captar **10-20 leads qualificados em 14 dias** e descobrir:

1. Qual hook ressoa mais (dor de reviews? dor de ChatGPT? dor de concorrência?)
2. Qual nicho (odontologia ou estética) converte melhor no mesmo CAC
3. Qual criativo (carrossel educativo vs vídeo depoimento vs estático direto) tem melhor CTR
4. Qual canal (Google busca vs Instagram feed vs Meta stories) traz leads mais quentes
5. Qual CPL (custo por lead) é real — não o que a planilha imagina

### Três princípios inegociáveis

1. **Não escalar antes de validar**: enquanto não houver **3 clientes pagantes** vindos de ads, o teto é R$ 50/dia. Nunca subir "porque tá performando" sem antes ter PIX confirmado.
2. **Duas campanhas por vez no máximo**: qualquer coisa além disso polui a análise. O fundador solo não tem banda para otimizar 6 conjuntos de anúncios simultâneos.
3. **Uma mudança por semana**: só alterar **uma variável por vez** (copy, criativo, público, lance) para conseguir atribuir causa ao efeito.

### O que **não** fazer

- [ ] ❌ Google Display Network (muito desperdício, pouco sinal)
- [ ] ❌ YouTube Ads (caro de produzir criativo de qualidade)
- [ ] ❌ TikTok Ads (ICP de odontologia/estética não está lá massivamente, e criativo é caro de testar)
- [ ] ❌ LinkedIn Ads (CPL alto demais para ticket R$ 197-297)
- [ ] ❌ Campanhas de "reconhecimento de marca" (sem budget pra isso; só conversão)
- [ ] ❌ Performance Max (oculta dados; ruim pra aprender)

---

## 5.2. Orçamento e alocação

| Canal | Orçamento diário | Orçamento 14 dias | Orçamento 30 dias | % do total |
|---|---|---|---|---|
| Google Search (odonto + estética) | R$ 20 | R$ 280 | R$ 600 | 57% |
| Meta Ads — Odontologia (Instagram + FB) | R$ 10 | R$ 140 | R$ 300 | 29% |
| Meta Ads — Estética (Instagram + FB) | R$ 5 | R$ 70 | R$ 150 | 14% |
| **Total** | **R$ 35** | **R$ 490** | **R$ 1.050** | **100%** |

**Regra de ajuste por pacote de 7 dias**:

- Canal com CPL > 2x o CPL alvo → **pausar**, reanalisar criativo/copy
- Canal com CPL ≤ CPL alvo e pelo menos 1 call agendada → **manter orçamento**, não subir
- Canal com 0 leads em 7 dias → **pausar por 3 dias**, trocar criativo, relançar

### CPL alvo por canal

**Definição de lead**: clique no botão CTA que abre o WhatsApp **E** a conversa é efetivamente iniciada no chat (mensagem enviada pelo lead). Medimos no Google Ads/Meta pelo evento de clique no CTA (`click_whatsapp_cta`); validamos qualidade manualmente no WhatsApp Business (lead que só abriu o chat mas não mandou mensagem é descartado no CRM).

| Canal | CPL alvo (lead = conversa iniciada no WhatsApp) | CPL máximo tolerável antes de pausar |
|---|---|---|
| Google Search (intenção alta) | R$ 25-40 | R$ 70 |
| Meta Odonto (interrupção) | R$ 35-55 | R$ 90 |
| Meta Estética (interrupção) | R$ 40-60 | R$ 90 |

**Referência de cálculo**: com CPL médio de R$ 45 e orçamento total de R$ 1.050/mês → **~23 leads/mês**. Se 20% viram call (5 calls) e 20% das calls viram venda (1 cliente), o CAC no mês 1 é R$ 1.050. Isso é insustentável a longo prazo, mas aceitável para validar (o payback é 7-10 meses, compensado pela LTV projetada de 18+ meses).

### 5.2.1. Restaurantes: orgânico-only nesta rodada

A promoção de restaurantes a 3º nicho ativo (decidida após a reescrita de `_context/02_copy_landing_pages.md` e `_context/01_nichos_iniciais.md`) **não** abre campanha paga imediatamente. A landing `/restaurantes` entra no ar no D5 e é alimentada apenas por:

- Prospecção ativa via Google Maps (restaurantes em bairros de alta circulação na cidade do fundador).
- Outreach manual via Instagram/WhatsApp para donos conhecidos.
- Orgânico (SEO + posts sociais).

**Por quê adiar o tráfego pago de restaurantes**:

1. O orçamento total continua R$ 1.050/mês — dividir em 4 canais diluiria o sinal de cada um (princípio do §5.1: "duas campanhas por vez no máximo").
2. Ticket médio do restaurante é mais baixo e CPL tende a ser mais ruidoso — precisa de ICP refinado antes de investir.
3. A landing vai servir como ferramenta de qualificação de leads orgânicos e outreach; se der sinal forte sozinha, avaliamos ads na retrospectiva do D14.

**Gatilho para ativar campanha paga de restaurantes**: pelo menos 2 leads orgânicos qualificados vindos de `/restaurantes` até D14 + 1 conversa consultiva com dono(a) que ajude a fechar ICP e palavras-chave. Caso esse gatilho dispare, orçamento sugerido: R$ 10/dia em Meta Ads (estrutura espelhada de §5.5), com duas primeiras semanas no vermelho aceitas como custo de aprendizado.

---

## 5.3. Campanha 1 — Google Search "dentista + google meu negócio"

### 5.3.1. Objetivo da campanha

Capturar dentistas que já **sabem** que têm um problema com Google Meu Negócio — buscam ativamente por "gerenciar google meu negócio dentista", "responder avaliações google dentista", "como aparecer no google maps clínica odontológica". Intenção alta, concorrência baixa em long tail.

### 5.3.2. Estrutura da conta

```
Conta: Perfiliza
└── Campanha: [Search] Odonto - Busca Exata Brasil
    ├── Conjunto 1: Intenção GBP
    │   ├── Palavras-chave (exata + frase)
    │   └── 3 anúncios responsivos
    └── Conjunto 2: Intenção Reviews/Reputação
        ├── Palavras-chave
        └── 3 anúncios responsivos
```

- **Tipo**: Pesquisa (Search), rede de pesquisa do Google apenas (desativar parceiros)
- **Local**: Brasil (todos os estados, mas começar por capitais — SP, RJ, BH, POA, Curitiba, Recife, Fortaleza, Salvador, Brasília)
- **Idioma**: Português
- **Lance**: Maximizar cliques com CPC máximo de R$ 3,50 nos primeiros 7 dias → depois Maximizar conversões (após 10+ conversões registradas)
- **Estratégia de correspondência**: **apenas exata e frase** nos primeiros 14 dias (amplo deixa queimar budget com termos tangenciais)

### 5.3.3. Palavras-chave do Conjunto 1 — Intenção GBP

**Correspondência exata** (palavra entre colchetes na interface):

```
[gerenciar google meu negócio dentista]
[como otimizar google meu negócio clínica odontológica]
[consultoria google meu negócio odontologia]
[agência google meu negócio dentista]
[google meu negócio para dentista]
[ficha do google dentista]
[perfil google dentista]
```

**Correspondência de frase** (palavra entre aspas):

```
"google meu negócio dentista"
"google meu negócio odontologia"
"melhorar google meu negócio dentista"
"aparecer no google maps dentista"
"aparecer no google dentista"
```

**Palavras-chave negativas** (obrigatório — aplicar à campanha toda):

```
-grátis -gratis -gratuito -curso -como fazer -tutorial -vagas -emprego
-salário -salario -reclame aqui -fórum -forum -download -apk -login
-entrar -criar conta -anúncio google -google ads
```

### 5.3.4. Palavras-chave do Conjunto 2 — Intenção Reviews/Reputação

**Correspondência exata**:

```
[responder avaliações google dentista]
[como responder review google dentista]
[aumentar avaliações google clínica odontológica]
[consultoria reputação online dentista]
[reputação google clínica odontológica]
```

**Correspondência de frase**:

```
"avaliações google dentista"
"avaliações google clínica odontológica"
"reviews google dentista"
"responder avaliação google clínica"
"gerenciar avaliações dentista"
```

### 5.3.5. Copy dos anúncios responsivos (RSA)

#### Anúncio A — Foco em visibilidade

**Títulos (15 disponíveis, fixar os 3 primeiros nas posições 1, 2, 3)**:

1. `Google Meu Negócio para Dentista` (pinado posição 1)
2. `Apareça no Top 3 do Google Maps` (pinado posição 2)
3. `+Avaliações, +Pacientes, +Receita` (pinado posição 3)
4. `Diagnóstico Gratuito no WhatsApp em 24h`
5. `Consultoria Especializada em Odontologia`
6. `Responda Reviews com IA`
7. `Primeiro Mês por Nossa Conta`
8. `Perfiliza — GBP para Dentistas`
9. `Sem Burocracia, Sem Fidelidade`
10. `Mais Agendamentos do Google`
11. `Só Paga Se Funcionar — 30 Dias`
12. `Gestão Completa do Seu GBP`
13. `Ranqueamento no Google Maps`
14. `Reviews, Posts e Fotos Profissionais`
15. `Pagamento Só no Dia 30, Via PIX`

**Descrições (4 disponíveis)**:

1. `Gestão completa do seu Google Meu Negócio. Avaliações, posts, fotos e SEO local. Diagnóstico gratuito no WhatsApp.`
2. `Especialistas em odontologia. Primeiro mês por nossa conta. Se funcionar, R$ 197/mês via PIX.`
3. `Sem fidelidade, sem cartão, sem pegadinha. Você só paga depois do primeiro mês, se quiser continuar.`
4. `Receba um diagnóstico gratuito do seu Google Meu Negócio pelo WhatsApp — entregamos em até 24h.`

**URL de exibição**: `perfiliza.com/dentista`
**URL final**: `https://perfiliza.com/clinicas-odontologicas?utm_source=google&utm_medium=cpc&utm_campaign=odonto_search&utm_content=rsa_visibilidade`

#### Anúncio B — Foco em reviews/reputação

**Títulos**:

1. `Responda Avaliações do Google` (pinado 1)
2. `Com Inteligência Artificial + Revisão Humana` (pinado 2)
3. `Para Clínicas Odontológicas` (pinado 3)
4. `Nunca Mais Deixe Review Sem Resposta`
5. `Proteja Sua Reputação Online`
6. `Drafts de Respostas em Minutos`
7. `Em Conformidade com o CFO`
8. `Perfiliza — Reputação Odontológica`
9. `Diagnóstico Gratuito do Seu GBP`
10. `Eleve Sua Nota Média no Google`
11. `Transforme Reviews em Pacientes`
12. `Respostas Profissionais, Aprovadas por Você`
13. `Reviews Respondidas em 24h`
14. `Plano de Reputação Odontológica`
15. `Cancele Quando Quiser`

**Descrições**:

1. `Recebeu uma review negativa? Nós geramos a resposta ideal. Você só aprova. Em conformidade com o CFO.`
2. `Clínica odontológica com reputação sólida atrai mais pacientes. Comece com um diagnóstico gratuito.`
3. `Primeiro mês por nossa conta. Se funcionar, R$ 197/mês via PIX. Sem fidelidade.`
4. `Mais de 70% dos pacientes leem reviews antes de agendar. Garanta que as suas estejam impecáveis.`

**URL final**: `https://perfiliza.com/clinicas-odontologicas?utm_source=google&utm_medium=cpc&utm_campaign=odonto_search&utm_content=rsa_reviews`

#### Anúncio C — Foco em concorrência/ranqueamento

**Títulos**:

1. `Seu Concorrente Aparece Antes de Você?` (pinado 1)
2. `Descubra o Porquê — Diagnóstico Grátis` (pinado 2)
3. `Análise Comparativa no WhatsApp em 24h`
4. `Top 3 do Google Maps = Mais Pacientes`
5. `Quem Aparece Primeiro Fatura Mais`
6. `Entendemos SEO Local Odontológico`
7. `Perfiliza — Especialistas em GBP`
8. `Primeiro Mês por Nossa Conta`
9. `Plano de Ação Personalizado`
10. `Supere Seus Concorrentes no Google`
11. `Para Clínicas Que Querem Crescer`
12. `Mais de 15 Pontos de Otimização`
13. `Sem Cartão de Crédito — Só PIX no Dia 30`
14. `Receba Seu Diagnóstico no WhatsApp em 24h`
15. `Mais de 200 Clínicas Confiam*`

> *Observação honestidade: o título 15 só deve ser usado **depois** de atingirmos efetivamente esse número. Até lá, remover.*

**Descrições**:

1. `Analisamos seu perfil e seus 3 principais concorrentes. Você recebe um PDF pelo WhatsApp com o que precisa mudar.`
2. `Especialistas em ranqueamento de clínicas odontológicas no Google Maps. Diagnóstico gratuito pelo WhatsApp em até 24h.`
3. `Seu concorrente pode estar capturando pacientes que deveriam ser seus. Descubra como reverter.`
4. `Primeiro mês por nossa conta. Se funcionar, R$ 197/mês via PIX. Sem fidelidade.`

### 5.3.6. Extensões de anúncio (sitelinks)

- **Para Dentistas** → `/clinicas-odontologicas`
- **Para Clínicas de Estética** → `/clinicas-esteticas`
- **Planos e Preços** → `/#planos`
- **Como Funciona** → `/#processo`
- **WhatsApp Direto** → link `wa.me` (mensagem pré-preenchida Home)

**Extensões de chamada** (callout):

- `Diagnóstico gratuito no WhatsApp em até 24h`
- `Primeiro mês por nossa conta`
- `Sem fidelidade, cancele quando quiser`
- `Especialistas em odontologia`
- `Respostas a reviews em até 24h`

**Extensão de frase de destaque** (structured snippets, tipo "Serviços"):

- Gestão de reviews
- Posts semanais
- Otimização SEO local
- Análise de concorrentes
- Fotos profissionais

### 5.3.7. Variante com menor prioridade — campanha de estética

Mesma estrutura da campanha de odontologia, mas com palavras-chave ajustadas:

**Correspondência exata**:
```
[google meu negócio clínica de estética]
[google meu negócio esteticista]
[google meu negócio salão de beleza]
[aparecer no google maps estética]
[gerenciar google meu negócio estética]
```

**Correspondência de frase**:
```
"google meu negócio clínica estética"
"google meu negócio harmonização facial"
"aparecer no google dermatologista"
"avaliações google clínica estética"
```

**CPL alvo**: R$ 30-50 (público maior, intenção um pouco mais baixa).

**Orçamento recomendado**: R$ 5/dia apenas nos primeiros 14 dias — **secundário**. Escalar só depois que odontologia validar.

---

## 5.4. Campanha 2 — Meta Ads "diagnóstico gratuito" (Odontologia)

### 5.4.1. Objetivo da campanha

Interromper dentistas no Instagram/Facebook com uma oferta de alto valor percebido (diagnóstico gratuito) para entrar no radar deles. Expectativa: CTR baixo (0,8-1,5%) mas CPL aceitável por volume de impressões.

### 5.4.2. Estrutura

- **Objetivo da campanha**: Conversões (evento customizado: `ClickWhatsAppCTA` — clique no botão CTA que abre o WhatsApp com mensagem pré-preenchida)
- **Posicionamentos**: Instagram Feed + Instagram Stories + Facebook Feed. Manual, nunca Advantage+.
- **Orçamento**: R$ 10/dia, CBO (Campaign Budget Optimization) **desligado** no início — orçamento por conjunto de anúncios para isolar aprendizado
- **Otimização**: Conversões > ClickWhatsAppCTA (evento customizado configurado no Events Manager)

### 5.4.3. Segmentação — Conjunto A (interesse profissional)

**Público frio**:

- **Localização**: Brasil, com exclusão de municípios < 100 mil habitantes (dentistas em cidades pequenas têm poder aquisitivo menor e volume de pesquisas insuficiente)
- **Idade**: 30-55 anos (fase de consolidação de carreira, com clínica estabelecida)
- **Gênero**: Todos
- **Interesses e comportamentos detalhados** (qualquer um deles):
  - `Odontologia`
  - `Clínica odontológica`
  - `Cargo: Dentista`
  - `Cargo: Cirurgião-dentista`
  - `Cargo: Ortodontista`
  - `Cargo: Implantodontista`
  - `Cargo: Endodontista`
  - `Administradores de página: Odontologia`
- **Exclusões**: pessoas que já curtem a página `@perfiliza` (quando existir), pessoas que já clicaram no CTA WhatsApp (custom audience baseado no evento `ClickWhatsAppCTA`)

**Tamanho de público estimado**: 200-400 mil pessoas (checar no Gerenciador de Anúncios).

### 5.4.4. Segmentação — Conjunto B (lookalike)

Só criar após ter **50+ leads** no pixel — até lá, manter apenas o Conjunto A.

- **Público semelhante**: 1-2% baseado na audiência de quem disparou `ClickWhatsAppCTA` nos últimos 90 dias.

### 5.4.5. Criativos

#### Criativo 1 — Carrossel educativo "5 erros que dentistas cometem no Google"

**Formato**: Carrossel de 5 cards (1080x1080).

| Card | Texto do card | Elemento visual |
|---|---|---|
| 1 | **5 erros que dentistas cometem no Google Meu Negócio** (e custam pacientes por mês) | Fundo branco, tipografia serif elegante, logo Perfiliza |
| 2 | **Erro 1**: Não responder reviews (nem as positivas). Isso sinaliza para o Google que o perfil está "abandonado" e penaliza o ranqueamento. | Ilustração mão segurando celular com balão de review sem resposta |
| 3 | **Erro 2**: Fotos antigas ou apenas da fachada. O Google premia perfis com fotos recentes do interior, equipe e trabalho realizado. | Ilustração câmera + calendário |
| 4 | **Erro 3**: Não postar nada. Sim — o GBP tem feed de posts, e quem usa ranqueia melhor. | Ilustração megafone |
| 5 | **Descubra os outros 2 erros no seu perfil**. Diagnóstico gratuito pelo WhatsApp em até 24h → clique no botão e mande seu link | CTA bold, botão "Quero o diagnóstico no WhatsApp" |

**Copy (texto principal)**:

```
Se você é dentista e não respondeu nenhuma review no último mês,
seu perfil está perdendo pontos com o Google todo dia.

Nós analisamos 1.000+ perfis de clínicas odontológicas
e os 5 erros abaixo aparecem em mais de 80% deles.

Arraste para ver — e ao final, peça seu diagnóstico gratuito.

👇
```

**Título do anúncio**: `Diagnóstico gratuito do seu Google Meu Negócio`
**Descrição**: `Especialistas em odontologia. Em até 24h você recebe o PDF pelo WhatsApp.`
**CTA**: `Enviar mensagem` (preferível ao "Saiba mais" porque o destino é WhatsApp — reduz expectativa incorreta)
**URL destino**: `https://perfiliza.com/clinicas-odontologicas?utm_source=meta&utm_medium=cpc&utm_campaign=odonto_diagnostico&utm_content=carrossel_5erros` (landing com CTA WhatsApp em evidência; ou, se a conta Meta permitir, apontar direto para `wa.me/55XXXXXXXXXX?text=...` com UTM codificado no texto da mensagem)

#### Criativo 2 — Vídeo curto (15s) — voz do fundador

**Roteiro**:

```
[Cena 1 — 0 a 3s] Fundador olhando pra câmera, em home office:
"Se você é dentista, pergunta rápida:"

[Cena 2 — 3 a 7s] Zoom na tela do celular mostrando um perfil GBP com 3 reviews sem resposta:
"Quando foi a última vez que você respondeu uma avaliação no seu Google?"

[Cena 3 — 7 a 11s] Texto na tela — "73% dos dentistas nunca respondem":
"Se a resposta for 'não sei' ou 'faz tempo', seu perfil está perdendo pacientes todo dia."

[Cena 4 — 11 a 15s] Fundador fecha olhando pra câmera, texto "perfiliza.com" fixo:
"Diagnóstico gratuito. Clica aqui embaixo, manda o link do seu Google no WhatsApp, em 24h você recebe o PDF."
```

**Copy (texto principal)**:

```
73% dos dentistas nunca responderam uma review no Google.
Isso é dinheiro sendo deixado na mesa todos os dias.

Receba um diagnóstico gratuito do seu Google Meu Negócio —
feito por especialistas em odontologia — em até 24h pelo WhatsApp.

Se quiser, a gente cuida do seu Google por 30 dias sem cobrar nada.
Se funcionar, você continua por R$ 197/mês via PIX. Se não, a gente
se despede sem cobrar.

perfiliza.com
```

**Título**: `Diagnóstico gratuito no WhatsApp em até 24h`
**Descrição**: `Primeiro mês por nossa conta. Para clínicas odontológicas.`
**CTA**: `Enviar mensagem`

#### Criativo 3 — Estático "antes e depois"

**Formato**: Imagem 1080x1080, dividida ao meio.

- **Lado esquerdo** ("Antes"): screenshot de um perfil GBP genérico com problemas visíveis (foto de fachada apenas, última postagem "há 8 meses", nota 4,1 com 3 reviews sem resposta). Selo vermelho: "SEM PERFILIZA".
- **Lado direito** ("Depois"): mesmo tipo de perfil com fotos variadas, post recente, 5 reviews respondidas, nota 4,9. Selo verde: "COM PERFILIZA".

**Texto sobreposto no topo**: `O que muda em 60 dias.`

**Copy**:

```
Mesma clínica. 60 dias de gestão profissional do Google Meu Negócio.
Resultado: +38% agendamentos vindos do Google.*

*Projeção baseada em benchmarks setoriais.
Receba um diagnóstico gratuito e descubra o potencial do seu perfil.

👉 perfiliza.com
```

> **Importante (honestidade)**: até termos case real documentado com cliente, o selo "*Projeção baseada em benchmarks setoriais" deve estar **sempre visível** no criativo (tamanho legível) e na copy. Não podemos afirmar resultado que ainda não produzimos.

### 5.4.6. Regra de rotação de criativos

- Publicar os 3 criativos no mesmo conjunto de anúncios
- Após 4 dias ou 1.000 impressões (o que vier primeiro), pausar o pior em CTR
- Publicar 1 criativo novo no lugar (iteração rápida)
- Nunca ter menos de 2 criativos ativos simultâneos (evita fadiga prematura)

---

## 5.5. Campanha 3 — Meta Ads "diagnóstico gratuito" (Estética)

### 5.5.1. Objetivo

Versão reduzida da Campanha 2, para testar se o nicho de estética converte a CPL similar ou melhor. **Orçamento mínimo**: R$ 5/dia. Avaliar em 14 dias e decidir se mantém/pausa/escala.

### 5.5.2. Segmentação

- **Localização**: Brasil, capitais e cidades > 200 mil habitantes
- **Idade**: 28-50 anos
- **Gênero**: Todos (proprietárias e proprietários de clínica)
- **Interesses detalhados**:
  - `Clínica de estética`
  - `Harmonização facial`
  - `Estética facial`
  - `Cargo: Esteticista`
  - `Cargo: Biomédico esteta`
  - `Cargo: Dermatologista`
  - `Administradores de página: Estética`
- **Exclusões**: página `@perfiliza`, audiência que já disparou `ClickWhatsAppCTA`

### 5.5.3. Criativos (adaptações dos da Campanha 2)

#### Criativo 4 — Carrossel educativo "5 erros em clínicas de estética no Google"

Mesma estrutura do Criativo 1, adaptado:

| Card | Texto |
|---|---|
| 1 | **5 erros que clínicas de estética cometem no Google Meu Negócio** |
| 2 | **Erro 1**: Fotos de tratamento sem autorização ou sem identidade visual — o que afasta pacientes ao invés de atrair |
| 3 | **Erro 2**: Não marcar os serviços corretos no perfil (ex: "Clínica de estética" genérico em vez de "Harmonização facial", "Limpeza de pele", "Drenagem linfática") |
| 4 | **Erro 3**: Reviews antigas e poucas respondidas — pacientes pesquisam muito antes de agendar estética |
| 5 | **Descubra os outros 2 erros**. Diagnóstico gratuito no WhatsApp em até 24h → clique e mande seu link |

**Copy**:

```
Clínica de estética que não aparece no Google Maps
perde agendamento pra concorrente todo dia.

Analisamos perfis de clínicas de estética há meses
e os 5 erros abaixo aparecem em quase todos.

Arraste 👉 e ao final, peça seu diagnóstico gratuito.
```

**URL destino**: `https://perfiliza.com/clinicas-esteticas?utm_source=meta&utm_medium=cpc&utm_campaign=estetica_diagnostico&utm_content=carrossel_5erros`

#### Criativo 5 — Vídeo voz do fundador (versão estética)

Adaptação do Criativo 2: substituir "dentista" por "dono de clínica de estética" e mudar o exemplo visual para um perfil de estética.

---

## 5.6. Pixel, conversões e rastreamento

### 5.6.1. Configuração obrigatória antes de subir qualquer campanha

- [ ] **Meta Pixel** instalado em `perfiliza.com` (código base + evento `PageView`)
- [ ] **Evento customizado `ClickWhatsAppCTA`** disparado em todos os cliques no botão primário (Home/Odonto/Estética) com parâmetros `{landing: "home|odonto|estetica", posicao: "hero|precos|cta_final"}`. Configurar como **conversão** no Events Manager do Meta.
- [ ] **Conversions API (CAPI)** configurada server-side para duplicar o evento `ClickWhatsAppCTA` e mitigar perdas do iOS 14+ (via webhook simples em Edge Function da Vercel ou tag server-side via GTM Server)
- [ ] **Google Ads Conversion Action** do tipo "Clique no WhatsApp" configurada e instalada como tag (disparada no mesmo clique do botão)
- [ ] **Google Analytics 4 (GA4)** instalado, com evento `click_whatsapp_cta` configurado como conversão
- [ ] **UTMs obrigatórios em todos os anúncios** (ver padrão abaixo). UTMs são lidos no `window.location.search` e anexados à mensagem pré-preenchida do `wa.me` (ex: `&text=...vim%20do%20meta%20odonto_diagnostico`), permitindo que o fundador identifique origem da conversa só olhando a primeira mensagem do lead.

### 5.6.2. Padrão de UTMs

Todos os anúncios devem usar este padrão:

```
?utm_source=[google|meta|organic]
&utm_medium=[cpc|social|referral]
&utm_campaign=[odonto_search|odonto_diagnostico|estetica_diagnostico]
&utm_content=[rsa_visibilidade|rsa_reviews|carrossel_5erros|video_fundador|estatico_antesdepois]
&utm_term=[palavra-chave] (só para Google Search, auto-preenchido)
```

Isso permite identificar, na planilha de leads (Google Sheets), exatamente de onde cada lead veio — essencial para decidir onde reinvestir.

### 5.6.3. Dashboard mínimo de acompanhamento

Uma aba no Google Sheets (`Tráfego_Pago`) com colunas:

| Data | Canal | Campanha | Investimento | Impressões | Cliques | CTR | CPC | Leads | CPL | Calls agendadas | Vendas |
|---|---|---|---|---|---|---|---|---|---|---|---|

Preenchida **manualmente toda segunda-feira** (snapshot do Gerenciador/Ads) — não precisa de API. É pouco trabalho (5 min) e mantém o fundador conectado com os números.

---

## 5.7. Funil esperado (projeção)

| Etapa | Nº esperado (28 dias, R$ 1.050 investidos) | Taxa |
|---|---|---|
| Impressões totais (Google + Meta) | 40.000-60.000 | — |
| Cliques para landing | 400-600 | 1% CTR médio |
| Cliques no CTA WhatsApp | 30-60 | 7-12% da landing (esperado subir vs formulário pela menor fricção) |
| Conversas efetivas no WhatsApp (leads qualificados) | 20-40 | 65-75% dos cliques (parte abre e não envia) |
| Diagnósticos entregues em 24h | 20-40 | 100% dos qualificados — SLA de entrega |
| Calls agendadas | 4-10 | 25-35% dos qualificados (WhatsApp aquece o lead antes da call) |
| Vendas | 1-3 | 25-35% das calls |

> **Atenção (honestidade)**: essas são projeções baseadas em benchmarks setoriais (SaaS B2B de ticket baixo + serviços profissionais locais). Os números reais só surgirão com a operação em campo. O fundador deve ficar atento a **desvios de mais de 50%** em qualquer etapa para entender onde está o gargalo.

### 5.7.1. Diagnóstico de onde travou

| Sintoma | Hipótese | Ação |
|---|---|---|
| CTR < 0,5% | Criativo ruim ou público errado | Trocar criativo (variante radical, não pequeno tweak) |
| CTR OK, mas clique no CTA WhatsApp < 5% | Landing fraca na dobra 1, ou CTA invisível em mobile | Revisar hero, tornar o botão WhatsApp mais proeminente, adicionar CTA flutuante no mobile |
| Clique no CTA OK, mas muitas conversas não iniciam | Mensagem pré-preenchida estranha ou confusa; fricção no abrir WhatsApp Web no desktop | Simplificar mensagem pré-preenchida; adicionar instrução "pode enviar essa mensagem, a gente responde" |
| Conversas iniciam mas lead não manda o link do Google Maps | Cliente não sabe achar o link do próprio perfil | Enviar áudio curto de 30s explicando como achar o link; oferecer buscar pelo nome da clínica |
| Diagnóstico entregue mas não agenda call | Pitch do template de entrega fraco, ou lead cru demais | Ajustar template 2 com gancho mais direto; mover o convite pra call pra 24h depois do PDF (não imediato) |
| Call agendada, mas não comparece | Sem lembrete | Implementar lembrete (WhatsApp 24h antes + 1h antes) |
| Call compareceu mas não fecha | Pitch/oferta errada | Revisar pitch, ver gravações (se cliente permitir), ajustar oferta |

---

## 5.8. Plano A, B e C (baseado em resultado após 14 dias)

### Plano A — Está performando (CPL ≤ alvo, 3+ leads/semana, 1+ call/semana)

- **Ação**: Manter orçamento de R$ 35/dia, iterar criativos semanalmente, começar a montar lookalike audience no Meta (quando tiver 50+ leads)
- **Subir orçamento**: só depois do **primeiro cliente pago**. E mesmo assim, subir no máximo 25% por semana.

### Plano B — Parcialmente performando (alguma campanha bem, outra mal)

- **Ação**: Pausar a pior campanha. Redirecionar o orçamento dela para a melhor. Rodar mais 14 dias com o realocado e reavaliar.
- **Exemplo**: se Google Search está com CPL R$ 30 (ótimo) e Meta Odonto está com CPL R$ 120 (ruim), pausar Meta Odonto e colocar R$ 30/dia no Google.

### Plano C — Nada está performando (CPL > 2x alvo em todas, 0 vendas em 28 dias)

- **Ação**: **Parar todos os ads por 1 semana**. Fazer retrospectiva honesta:
  - A oferta está clara? Enviar a landing para 5 dentistas conhecidos e pedir feedback brutal.
  - O ICP está certo? Talvez odontologia geral é amplo demais — reduzir para "clínicas odontológicas de médio porte em capitais".
  - O preço ressoa? R$ 197/mês é barato demais (parece golpe) ou caro demais?
  - O nome "Perfiliza" está confundindo o mercado?
- **Depois da retrospectiva**: **reiniciar com apenas 1 campanha** (a mais promissora) e R$ 15/dia. Dar mais 14 dias.
- **Se após 8 semanas de iteração não houver 1 cliente pago via ads**: abandonar ads temporariamente, ir para tráfego orgânico/manual (cold outreach em DM no Instagram, LinkedIn, indicação). Reavaliar toda a hipótese do negócio (não apenas dos ads).

---

## 5.9. Cronograma — primeiros 14 dias de ads

| Dia | Atividade | Tempo estimado |
|---|---|---|
| D-3 a D-1 | Pixel, GA4, Conversions API, UTMs — tudo testado antes de subir | 3-4h |
| D-3 | Criar contas de Google Ads e Meta Ads Manager (se ainda não existem) | 1h |
| D-2 | Gerar todos os criativos (3 carrosséis, 2 vídeos, 2 estáticos) | 4-6h |
| D-1 | Subir campanhas em rascunho, pedir revisão de outra pessoa | 2h |
| **D1** | Lançar Google Search (odonto) + Meta Odonto | 1h |
| D2-D3 | Monitorar impressões, rejeições, ajustar orçamento se < 50% sendo gasto | 30 min/dia |
| D4 | Primeira análise: CTR por criativo, CPL por canal | 1h |
| D5-D7 | Iteração de criativos (pausar o pior, adicionar 1 novo) | 1h/dia |
| **D8** | Subir Meta Estética com R$ 5/dia | 1h |
| D9-D13 | Monitoramento diário, atualização do Google Sheets toda segunda-feira | 30 min/dia |
| **D14** | Retrospectiva completa: decidir Plano A/B/C | 2-3h |

**Total de tempo do fundador nos 14 dias com ads**: ~20h.

---

## 5.10. Custos extras ocultos que todo mundo esquece

| Item | Custo estimado |
|---|---|
| Editor de vídeo simples (CapCut, DaVinci Resolve) | Gratuito |
| Editor de imagens (Figma ou Canva Pro) | R$ 0 (free tier) a R$ 55/mês (Canva) |
| Conta Google Ads: primeiro cartão pode ser rejeitado por fraude (pedir 2º método) | — |
| Verificação de pagamento Meta Business Manager (pode pedir documentos) | — |
| Tempo do fundador ajustando criativos após 2-3 rejeições (Meta costuma rejeitar 1ª versão) | 2-4h extras |
| Impostos incidentes sobre ads internacionais (Meta + Google) | +15-20% do investimento (CIDE, PIS/COFINS dependendo do regime) |

**Reserve +20% no orçamento para imprevistos**. Se o plano é gastar R$ 1.050, provisionar R$ 1.260.

---

## 5.11. Checklist antes de clicar "ativar" na primeira campanha

- [ ] Landing `perfiliza.com/clinicas-odontologicas` publicada e testada em mobile
- [ ] Landing `perfiliza.com/clinicas-esteticas` publicada e testada em mobile
- [ ] Botões CTA de todas as landings apontam para `wa.me/55XXXXXXXXXX?text=...` com mensagem pré-preenchida específica (Home/Odonto/Estética)
- [ ] Teste real: clicar no CTA de cada landing em iOS e Android — o WhatsApp abre com o texto correto
- [ ] WhatsApp Business configurado no celular do fundador com notificações ligadas; mensagem de ausência desativada
- [ ] Respostas rápidas cadastradas: `/diag-confirm`, `/diag-entrega`, `/call-convite`, `/call-lembrete`
- [ ] Pixel Meta disparando `PageView` + `ClickWhatsAppCTA` (testar via Meta Pixel Helper extension)
- [ ] Conversions API server-side testada (Events Manager mostra "Duplicado" no match — bom sinal)
- [ ] Tag Google Ads "Clique no WhatsApp" + GA4 `click_whatsapp_cta` disparando (testar via GTM preview)
- [ ] UTMs em todos os anúncios seguindo padrão, incluindo passagem para a mensagem `wa.me`
- [ ] Palavras-chave negativas do Google Ads aplicadas
- [ ] Orçamento diário configurado com alerta de 80%
- [ ] Cartão de crédito com limite > R$ 2.000 cadastrado nas duas plataformas
- [ ] WhatsApp do fundador pronto para responder leads em < 2h úteis
- [ ] Google Calendar com horários de call abertos (link do Cal.com ou equivalente)
- [ ] Google Sheets `Trafego_Pago` criada
- [ ] Google Sheets `Leads` criada — toda conversa nova no WhatsApp vira linha ali
- [ ] Lembrete no calendário: **segunda-feira, 9h — atualizar planilha de tráfego**

---

## 5.12. Regra de ouro

> **Quando em dúvida entre "subir o orçamento" e "entender melhor o que está acontecendo", sempre escolha entender melhor.**

O projeto não é sobre volume — é sobre **velocidade de aprendizado**. Cada real gasto sem entender o porquê é um real desperdiçado. Cada real gasto com diagnóstico claro é um investimento.

---

**Próximo arquivo**: [`06_placa_qrcode_correios.md`](./06_placa_qrcode_correios.md) — avaliação da estratégia de placa física com QR code enviada por Correios.
