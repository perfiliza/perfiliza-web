# 06. Placa física com QR code via Correios — avaliação estratégica

> **Propósito**: avaliar, com rigor, se a estratégia de enviar uma **placa física com QR code** (que leva à página de avaliação do perfil GBP do cliente) vale a pena. Aqui detalhamos viabilidade, economics, design, fluxo logístico e a decisão recomendada.

---

## 6.1. A ideia em uma frase

Para cada cliente pagante, a Perfiliza imprime e envia por Correios uma **placa física com QR code** (formato de mesa ou adesivo de balcão) que, ao ser escaneada pelo paciente/cliente, abre direto a **página de avaliação do Google** do perfil daquele cliente. Com isso, o próprio cliente passa a engajar seus consumidores finais a deixarem mais reviews — o maior gargalo da operação GBP é justamente **volume consistente de reviews**.

---

## 6.2. Por que isso importa (tese)

Reviews são o **combustível** do ranqueamento no Google Maps. Quase tudo que a Perfiliza faz (posts, fotos, respostas, categorias) tem impacto linear; **reviews têm impacto exponencial**:

| Alavanca | Impacto relativo no ranqueamento local | Quem executa |
|---|---|---|
| Respostas a reviews | Baixo-Médio | Perfiliza (agente) |
| Posts semanais | Baixo | Perfiliza (agente) |
| Fotos atualizadas | Médio | Cliente + Perfiliza |
| Categorias otimizadas | Médio | Perfiliza (uma vez) |
| **Volume e velocidade de reviews** | **ALTO** | **Só o paciente/cliente final** |
| Nota média | Alto | Consequência das reviews |

**Problema estrutural**: a Perfiliza **não pode gerar reviews** (é proibido pelos termos do Google e anti-ético). O único caminho legítimo é **facilitar o pedido** que o cliente faz ao seu próprio consumidor. E a maior barreira para isso é a **fricção física**: o paciente saiu do consultório, foi pra casa, esqueceu. Uma placa visível no balcão/mesa de recepção com QR code **reduz fricção a zero**.

### A matemática por trás

- Clínica odontológica média atende ~200-400 pacientes/mês
- Taxa natural de review (sem incentivo): 1-3% → ~4-12 reviews/mês
- Taxa de review com placa + pedido verbal do atendente: 6-12% → ~12-48 reviews/mês (projeção com base em benchmarks setoriais de estabelecimentos B2C com ponto físico)
- **Efeito**: 2-4x mais reviews/mês = salto de ranqueamento em 60-90 dias

Se essa mecânica funcionar mesmo, a placa vale mais do que todos os outros entregáveis somados.

---

## 6.3. Economics — quanto custa realmente

### 6.3.1. Custo de produção de 1 placa

| Item | Quantidade | Preço unitário (pesquisa 2026) | Subtotal |
|---|---|---|---|
| Placa acrílica 10x15cm com base (impressão UV + QR code) | 1 | R$ 18-35 | R$ 25 |
| Adesivo vinil 8x8cm (alternativa mais barata) | 1 | R$ 3-8 | R$ 5 |
| Embalagem cartonada + plástico bolha | 1 | R$ 3 | R$ 3 |
| Carta personalizada impressa (papel 120g, A5) | 1 | R$ 1,50 | R$ 1,50 |
| **Subtotal produção por cliente (placa + adesivo backup)** | — | — | **~R$ 30-35** |

### 6.3.2. Custo de envio pelos Correios

| Modalidade | Prazo | Peso até 300g | Preço médio |
|---|---|---|---|
| **PAC** (econômico) | 5-10 dias úteis | ≤ 300g | R$ 15-25 |
| **SEDEX** (expresso) | 1-3 dias úteis | ≤ 300g | R$ 25-45 |
| Impresso Urgente | 1-3 dias úteis | ≤ 150g | R$ 18-30 (depende da origem/destino) |

**Recomendação**: PAC com código de rastreio. Prazo aceitável, menor custo, e traz a embalagem certinha como "brinde" — reforça percepção de cuidado.

### 6.3.3. Custo total por cliente

| Cenário | Produção | Envio | **Total por cliente** |
|---|---|---|---|
| **Mínimo** (adesivo vinil + PAC SP→SP) | R$ 8 | R$ 15 | **R$ 23** |
| **Padrão** (placa acrílica + PAC interestadual) | R$ 30 | R$ 22 | **R$ 52** |
| **Premium** (placa + mini-kit com cards adicionais + SEDEX) | R$ 55 | R$ 40 | **R$ 95** |

> **Números reais só surgem após cotação formal** com 2-3 fornecedores (Printi, Gráfica Rocha, fornecedores locais Shopee/Mercado Livre). Os valores acima são **estimativas conservadoras**.

### 6.3.4. Custo em escala (se quiser estocar)

Comprar **10 placas neutras de uma vez** (com QR code customizado por cliente aplicado depois via adesivo holográfico):

| Volume | Custo unitário produção | Total |
|---|---|---|
| 10 placas | R$ 22-28 | R$ 240 |
| 25 placas | R$ 18-22 | R$ 500 |
| 50 placas | R$ 15-18 | R$ 800 |

**Recomendação**: comprar **10 placas neutras** de primeira leva (R$ 240). Cobre os primeiros 5 clientes + 5 de reserva para testes e perdas.

---

## 6.4. Margem — isso fura o preço da Perfiliza?

### Cenário A — Incluir placa no Starter (R$ 197/mês) sem custo extra

| Item | Valor |
|---|---|
| Receita mês 1 | R$ 197 |
| Custo placa + envio | R$ 52 |
| Receita líquida mês 1 | R$ 145 |
| Margem mês 1 | 74% |

**Funciona, mas consome parte relevante do mês 1**. Se o cliente cancelar no mês 2, a placa virou um prejuízo R$ 52 pra gerar R$ 197 de receita.

### Cenário B — Incluir placa só em planos Anuais (R$ 197 × 12 com desconto)

| Item | Valor |
|---|---|
| Receita contrato anual | R$ 2.004 (R$ 167/mês, desconto de 15%) |
| Custo placa + envio | R$ 52 |
| Receita líquida contrato | R$ 1.952 |
| Margem | 97% |

**Recomendado**. Placa como **bônus para quem contrata anual** — incentivando contratos mais longos e cobrindo o custo com folga.

### Cenário C — Add-on pago à parte

| Item | Valor |
|---|---|
| Preço cobrado | R$ 97 (one-time) |
| Custo placa + envio | R$ 52 |
| Margem unitária | R$ 45 (46%) |

**Funciona, mas é um atrito a mais na venda**. Menos recomendado (complicaria o pitch).

### Cenário D — Free pra todos, pago pelos primeiros clientes como investimento

Tratar a placa como **CAC aumentado**: custo de aquisição/ativação pago pela Perfiliza para acelerar reviews (e, portanto, resultado do cliente → menor churn).

Investimento de R$ 260 em 5 clientes = R$ 52/cliente = **equivale a ~1/4 de um mês de mensalidade**. Se isso reduzir churn em 20-30%, paga-se sozinho.

---

## 6.5. Design da placa — especificações

### 6.5.1. Formato recomendado

- **Material**: acrílico transparente 3mm com base de acrílico preto 5mm
- **Dimensões**: 10 × 15 cm (formato retrato)
- **Impressão**: UV flatbed, 4 cores + branco (para cobertura)
- **QR code**: 4 × 4 cm, alto contraste (preto sobre fundo branco), com margem de 5mm em todos os lados
- **Resistência**: água e álcool 70% (importante em clínicas de saúde)

### 6.5.2. Elementos visuais da placa

**Frente** (lado que o paciente vê):

```
┌─────────────────────────────┐
│                             │
│   Como foi o seu            │
│   atendimento hoje?         │
│                             │
│   ┌─────────────┐           │
│   │             │           │
│   │   [QR code] │           │
│   │             │           │
│   └─────────────┘           │
│                             │
│   Aponte sua câmera         │
│   e deixe sua avaliação     │
│                             │
│   ⭐⭐⭐⭐⭐                  │
│                             │
└─────────────────────────────┘
```

**Verso** (discreto):

```
┌─────────────────────────────┐
│                             │
│   Gestão profissional de    │
│   reputação por             │
│                             │
│        [logo Perfiliza]       │
│                             │
│         perfiliza.com         │
│                             │
└─────────────────────────────┘
```

> **Importante**: o **verso com o logo Perfiliza é opcional** e só com autorização explícita do cliente. Alguns clientes podem não querer "co-branding" visível. Default: placa limpa, sem referência à Perfiliza. O verso vira adesivo opcional no kit.

### 6.5.3. QR code — que URL apontar?

O QR code deve levar direto ao **link curto oficial do Google** para deixar avaliação:

```
https://search.google.com/local/writereview?placeid={PLACE_ID_DO_CLIENTE}
```

**Alternativa com rastreio** (recomendado):

```
https://perfiliza.com/r/{slug-do-cliente}
```

Essa URL faz **redirect 301** para o link oficial do Google, passando antes por um pixel de contagem (Plausible ou Google Analytics). Assim a Perfiliza sabe **quantas vezes a placa foi escaneada** por mês e pode reportar ao cliente.

- Implementação simples: uma página estática `perfiliza.com/r/clinica-sorriso` com redirect JavaScript + tracking event
- Custo: zero (hospedagem Vercel free tier)
- Benefício: **métrica palpável** pro cliente ver que a placa está sendo usada

### 6.5.4. Formatos alternativos (caso a placa acrílica não caiba no budget)

| Formato | Prós | Contras | Custo |
|---|---|---|---|
| **Placa acrílica** (default) | Premium, durável, bonita | Mais cara, frágil no envio | R$ 25-35 |
| **Adesivo vinil 8×8cm** | Barato, leve pro envio | Menos premium, pode descascar | R$ 5-8 |
| **Placa PVC 10×15cm** | Durável, leve | Aparência plástica | R$ 12-18 |
| **Placa de madeira MDF gravada a laser** | Muito premium, artesanal | Cara, demora pra produzir | R$ 40-70 |
| **Cartão acrílico de mesa com corrente** | Elegante, fica em pé sozinho | Mais caro | R$ 30-45 |

**Recomendação**: começar com placa acrílica 10×15 (acima) + adesivo vinil de bônus (como backup pra outro balcão, sala de espera, etc.).

---

## 6.6. Fluxo logístico — do pedido ao recebimento

### 6.6.1. Fluxo simplificado

```
[Cliente assina]
       ↓
[Fundador gera QR code personalizado via script local]
       ↓
[Fundador envia pedido pra gráfica (email/WhatsApp com arte em PDF)]
       ↓
[Gráfica imprime em 2-4 dias úteis e envia pro fundador]
       ↓
[Fundador recebe em casa]
       ↓
[Fundador monta kit (placa + adesivo + carta personalizada + embalagem)]
       ↓
[Fundador vai aos Correios e despacha via PAC com rastreio]
       ↓
[Cliente recebe em 5-10 dias úteis]
       ↓
[Fundador acompanha via rastreio + manda mensagem "chegou?" no dia previsto]
       ↓
[Cliente coloca no balcão; paciente escaneia; review aparece no GBP]
       ↓
[Perfiliza responde a review no dia seguinte]
```

### 6.6.2. Agente Claude Code que gera a arte da placa (script local)

Adicionar ao `~/perfiliza/agentes/placa-generator/`:

**Input**:
- `PLACE_ID` do perfil GBP do cliente
- `SLUG` do cliente (ex: `clinica-sorriso`)
- Cores da marca do cliente (opcional, para placa customizada)

**Output**:
- PDF da placa pronto para enviar à gráfica (300dpi, sangrias, CMYK)
- PDF da carta personalizada (template abaixo)
- QR code PNG em alta resolução (caso a gráfica peça separadamente)

Estimativa de tempo de execução: 2-3 min por cliente.

### 6.6.3. Template da carta que vai junto com a placa

```
[Logo da clínica do cliente, não da Perfiliza]

Oi, {Nome do Proprietário}!

Aqui vai a plaquinha que conversamos — coloca no balcão da recepção ou
em qualquer lugar visível pros pacientes.

🟦 Como usar:
1. Deixe a placa em um local que o paciente vê ao pagar ou agendar
2. Na hora de se despedir, peça gentilmente: "Se puder avaliar a gente
   lá no Google, ajuda demais. É só apontar a câmera."
3. Pronto. É isso.

🟨 Dica:
Pacientes que tiveram experiência positiva raramente se lembram de
avaliar sozinhos. O lembrete visual + pedido verbal triplica o
volume de avaliações, em média.

🟥 Se preferir, usa o adesivo que vai junto como backup — cola em
qualquer balcão adicional ou sala de espera.

Qualquer dúvida, me chama no WhatsApp.

[Nome do fundador]
Perfiliza
```

### 6.6.4. Controle de envios (aba no Google Sheets)

Nova aba `Placas_Enviadas`:

| Cliente | Data do pedido na gráfica | Data de chegada do kit | Data do envio Correios | Código de rastreio | Data prevista entrega | Data confirmada entrega | Placa instalada (sim/não) | Nº reviews pré-placa | Nº reviews 30d pós-placa |
|---|---|---|---|---|---|---|---|---|---|

Essa última coluna é **crítica**: é o que prova (ou refuta) a hipótese de que a placa realmente aumenta o volume de reviews.

---

## 6.7. Riscos e mitigações

| Risco | Impacto | Mitigação |
|---|---|---|
| Google altera URL de review (quebra QR code) | Alto — placa vira inútil | QR code apontar para `perfiliza.com/r/{slug}` (redirect controlado por nós). Se Google mudar URL, basta atualizar o redirect. |
| Cliente joga a placa no fundo de uma gaveta | Alto — investimento perdido | Acompanhar via WhatsApp D+7 do envio: "chegou? ficou legal?"; pedir foto da placa no balcão. Sem foto ≠ placa instalada (seguir insistindo). |
| Cliente cancela no mês 2 | Médio — R$ 52 vira prejuízo | Placa como bônus de contrato anual (ou: só enviar placa a partir do 2º mês pago) |
| Gráfica atrasa e chega o mês sem placa | Baixo-médio | Ter estoque de 5 placas neutras (QR code adesivado depois) |
| Correios perdem o envio | Baixo | Rastreio obrigatório + seguro no envio (custa R$ 2-3 a mais) |
| Google marca review vindo de QR code como "suspeito" | Médio | Não vincular incentivo monetário à review (apenas lembrete). Evitar enviar "campanhas" de review via placa (picos anormais disparam flags) |
| Review falso deixado pelo próprio cliente (pra inflar nota) | Alto — violação de termos | Deixar claro no onboarding que isso pode derrubar o perfil. Perfiliza não apoia. |

---

## 6.8. Métricas de sucesso da estratégia de placa

Após 60 dias da 1ª placa enviada, avaliar:

| Métrica | Meta (se funcionar) | Meta (se falhar) |
|---|---|---|
| % clientes que instalaram a placa (com foto comprovando) | ≥ 80% | < 50% |
| Aumento médio de reviews/mês nos 30d pós-placa vs 30d pré-placa | ≥ +50% | < +15% |
| NPS do cliente (especificamente sobre a placa) | ≥ 8 | ≤ 5 |
| Custo total de placas enviadas vs receita bruta 60d | ≤ 15% | > 25% |

**Se falhar em 2+ métricas**: descontinuar a placa. Se funcionar em 3+: **tornar padrão e inclusa no Starter**.

---

## 6.9. Decisão recomendada

### Versão recomendada

> **Incluir placa + adesivo como bônus para clientes em plano anual, e como add-on opcional de R$ 97 (one-time) para planos mensais.**

Razões:
1. **Não fura a margem do mês 1** (plano anual já paga com folga)
2. **Cria incentivo legítimo para contratos mais longos** (menor churn, mais LTV)
3. **Dá ao fundador dados reais sobre impacto em 60 dias** antes de decidir se institucionaliza
4. **Não é um compromisso pesado**: 10 placas na primeira leva custam R$ 240 (<10% do budget total de 60 dias)

### Alternativa mais agressiva (só se o fundador tem caixa)

> **Incluir placa **grátis** para TODOS os primeiros 5 clientes, explicitamente rotulado como "bônus early adopter".**

Razões:
1. Cria forte gancho de marketing/depoimento ("clínica X recebeu uma placa personalizada")
2. Aumenta velocidade de geração de dados sobre a hipótese
3. Funciona como "brinde físico" que diferencia da concorrência digital-only
4. Custo: R$ 260 total — equivalente a meio mês de tráfego pago

### Alternativa mais conservadora

> **Não enviar placa inicialmente. Apenas orientar o cliente a pedir reviews no WhatsApp com link direto (sem custo físico).**

Razões:
1. Remove todo custo físico e logístico
2. Permite validar a oferta pura (sem confundir com brinde)
3. Placa fica para uma fase futura (quando já houver fluxo de assinatura maduro, logística estabilizada, etc.)

### Matriz de decisão

| Se o fundador... | Recomendação |
|---|---|
| Tem < R$ 2.000 de caixa e quer risco mínimo | Alternativa conservadora (sem placa) |
| Tem R$ 2.500-5.000 e quer validar hipótese de reviews | **Versão recomendada** (bônus no anual + add-on R$ 97) |
| Tem > R$ 5.000 e quer acelerar case studies | Alternativa agressiva (placa free pros 5 primeiros) |

---

## 6.10. Fornecedores recomendados (pesquisa inicial)

| Fornecedor | Tipo | Observações |
|---|---|---|
| **Printi** (printi.com.br) | Online, escala | Placas acrílicas custom com preço de referência, entrega rápida, bom pra volume |
| **Gráficas locais (Google Maps "gráfica + bairro")** | Presencial | Mais barato, permite pedir amostra antes, relacionamento ajuda em urgência |
| **Mercado Livre / Shopee (vendedores de acrílico)** | Marketplace | Placas genéricas + gravação customizada; varia muito em qualidade |
| **Elo7** | Artesanal | MDF gravado a laser, estética mais premium, prazo maior |

**Recomendação**: **pedir orçamento de 1 placa amostra em 3 fornecedores antes de decidir**. Vale os R$ 100-150 de investimento pra descobrir qualidade real.

---

## 6.11. Próximo passo decisório

Antes de pedir a primeira tiragem de 10 placas:

1. [ ] Definir oficialmente qual modelo (acrílica, PVC, MDF) e tamanho
2. [ ] Pedir 3 orçamentos formais (com amostra física se possível)
3. [ ] Validar o fluxo: QR code → link curto → Google review com 1 perfil de teste (pode ser o próprio perfil GBP de teste da Perfiliza)
4. [ ] Criar o script `placa-generator` em `~/perfiliza/agentes/` (ver `03_agentes_claude_code_local.md`)
5. [ ] Incluir o gancho da placa na landing `/clinicas-odontologicas` e `/clinicas-esteticas` (apenas se decisão A ou B)
6. [ ] Adicionar campo "Enviar placa? (S/N + data prevista)" na aba `Clientes` do Google Sheets

---

**Próximo arquivo**: [`07_tarefas_sequenciais_lancamento.md`](./07_tarefas_sequenciais_lancamento.md) — checklist dia-a-dia do dia 1 ao dia 14 para sair do zero e lançar.
