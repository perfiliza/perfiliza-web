# 04. Operação Manual via Painel Oficial do Google Business Profile

**Todo o workflow executado em `business.google.com` logado com `admin@perfiliza.com`**

---

## 4.1. Premissas operacionais

No Perfiliza, **zero integração com GBP API**. Todas as operações são executadas pelo fundador manualmente no painel oficial, logado com a conta `admin@perfiliza.com` que foi convidada como Administrador pelo cliente.

**Por que manual em vez de API?**
- **Elimina dependência**: processo de aprovação da GBP API leva 2-4 semanas; a operação manual começa em 1 semana
- **Zero risco de ban**: uso programático pode disparar alertas do Google; uso manual é indistinguível de uso humano legítimo
- **Setup 10x mais rápido**: nenhum código, nenhum refresh token, nenhum OAuth flow
- **Compatível com funcionalidades que a API não cobre**: Q&A, certos tipos de edição, denúncias, suporte do Google
- **Ideal para volume baixo**: até ~8 clientes, operar manual é perfeitamente viável em 8-15h/semana

## 4.2. Conta operacional — `admin@perfiliza.com`

### 4.2.1. Setup inicial (1x, no dia 1)

- [ ] Criar Gmail `admin@perfiliza.com` (workspace não é obrigatório, mas recomendado ao ter 2 clientes)
- [ ] Ativar **2FA com app autenticador** (Google Authenticator ou Authy). **NUNCA SMS** — risco de SIM swap
- [ ] Configurar chaves de recuperação e imprimí-las fisicamente
- [ ] Criar senha de 20+ caracteres em gerenciador (1Password / Bitwarden)
- [ ] Nunca acessar essa conta de redes Wi-Fi públicas sem VPN
- [ ] Tirar backup dos códigos de recuperação em local offline (pendrive criptografado)

**Por que tanta segurança?** Essa conta é o "cofre" de acesso a todos os perfis GBP dos clientes. Se for comprometida, o atacante poderia editar/suspender múltiplos perfis. Impacto reputacional gigantesco.

### 4.2.2. Primeiro login

- [ ] Acessar `https://business.google.com/` logado
- [ ] Ver mensagem "Você ainda não tem perfis" (esperado)
- [ ] Salvar o URL no bookmark

## 4.3. Processo de convite do cliente (por cliente, no onboarding)

Este é o **único passo em que o cliente precisa agir**.

### 4.3.1. Tutorial para o cliente (enviar por email + vídeo de 90s gravado uma vez)

```
Oi, [Nome]! Bem-vindo à Perfiliza.

Para começarmos, preciso que você me adicione como "Administrador" 
do seu Google Meu Negócio. É um processo rápido (2 minutos) feito 
pelo próprio Google. Segue passo a passo:

PASSO 1: Acesse https://business.google.com/ logado com a sua conta 
Google (a mesma que usa o seu Google Meu Negócio).

PASSO 2: Selecione o perfil da sua empresa (se tiver vários, escolha 
o principal).

PASSO 3: Clique em "Usuários" no menu (normalmente fica no canto 
superior direito ou em "Configurações").

PASSO 4: Clique em "Adicionar usuários".

PASSO 5: Digite o email: admin@perfiliza.com
         Selecione a função: Administrador
         Clique em "Convidar".

PASSO 6: Me avisa aqui no WhatsApp que fez. Em até 24h vou aceitar 
o convite e começar o trabalho.

IMPORTANTE:
- Você NUNCA nos dá sua senha. Nada de senha, só o convite oficial 
  do Google.
- Você pode remover o acesso a qualquer momento, também por 
  "Usuários".
- Nos primeiros 7 dias após aceitar o convite, o Google bloqueia 
  algumas ações (é padrão do Google, não é algo que fizemos). 
  Essas ações se liberam sozinhas no dia 8.

Qualquer dúvida, me manda oi. 
[nome do fundador]
Perfiliza
```

### 4.3.2. Fluxo de aceitação do convite (pelo fundador)

- [ ] Ao ser avisado pelo cliente, abrir Gmail `admin@perfiliza.com`
- [ ] Procurar email do Google "Você foi convidado a gerenciar..."
- [ ] Clicar em "Aceitar convite"
- [ ] Confirmar em `business.google.com/` que o novo perfil aparece na listagem
- [ ] No painel, explorar o perfil e verificar funcionalidades disponíveis
- [ ] **Anotar em `clientes/<cliente>/ficha.md`**:
  - Data de aceite do convite: ___
  - Data em que o bloqueio de 7 dias expira: ___ (= aceite + 7 dias)
  - Todas ações sensíveis (editar nome, endereço, categoria) ficam **bloqueadas até o dia 8**

### 4.3.3. O que fazer durante os 7 dias de bloqueio

Ações permitidas mesmo durante o bloqueio:
- ✅ Responder a avaliações
- ✅ Publicar posts
- ✅ Upload de fotos
- ✅ Ver insights

Ações bloqueadas nos primeiros 7 dias:
- ❌ Editar nome, endereço, categoria, telefone, URL
- ❌ Desativar perfil
- ❌ Mesclar/mover perfis

**Estratégia**: usar os primeiros 7 dias para **respostas a reviews antigas** (backlog) + **publicação de posts** + **upload de fotos iniciais**. No dia 8, fazer as edições estruturais planejadas.

## 4.4. Rotina diária do fundador (operação solo 3-5 clientes)

Tempo total: **30-45 minutos/dia**, segunda a sexta.

### 4.4.1. Bloco da manhã (8:00-8:30)

#### 1. Checar alertas por email (5 min)
- Abrir Gmail `admin@perfiliza.com`
- Filtrar por "Google Business Profile"
- Notificações mais importantes:
  - "Você recebeu uma nova avaliação"
  - "Uma pergunta foi feita no seu perfil"
  - "Editamos seu perfil" (alertas suspeitos)
  - "Seu perfil foi suspenso" (emergência!)

#### 2. Ciclo de reviews — todos os clientes (15 min)
Para cada cliente:
- Abrir `business.google.com/` → selecionar perfil
- Ir para aba "Avaliações"
- Filtrar por "Sem resposta"
- Para cada avaliação nova:
  - Copiar texto, autor, nota
  - Criar arquivo `clientes/<cliente>/reviews/YYYY-MM-DD_autor_Nestrelas.md`
  - No terminal: `claude code agent review-responder --review-file ...`
  - Revisar drafts gerados
  - Copiar o texto escolhido
  - Colar no painel GBP → "Responder"
  - Marcar no arquivo local como publicada

**Shortcut útil**: manter 2 abas do Chrome abertas sempre — uma com o painel GBP e outra com o terminal/IDE. Copiar-colar é 80% do trabalho.

#### 3. Perguntas e respostas (Q&A) — 5 min
- Aba "Q&A" no GBP
- Responder perguntas sem resposta (prioridade: perguntas com 1+ voto)
- Para cada pergunta, usar o agente `review-responder` como base (adapta tom)

#### 4. Alertas de edição suspeita (5 min)
Uma vez por dia, checar a aba "Atualizações" / "Histórico" de cada perfil:
- Alguém sugeriu edição? (bem comum em perfis populares)
- Houve mudança automática pelo Google?
- Denúncia recebida?

Se detectar:
- Se for edição indevida de terceiro: rejeitar a sugestão no próprio painel
- Se for denúncia: anexar documentação (CNPJ, alvará) e contestar
- Se for suspensão: **parar tudo** e iniciar protocolo de recuperação

### 4.4.2. Bloco tarde (3-5 clientes — diferente todos os dias)

#### Segunda-feira: Planejamento semanal (45 min)
- Para cada cliente: olhar calendário do mês, datas comerciais, estoque de posts
- Criar briefing para `post-creator`:
  - `clientes/<cliente>/posts/YYYY-MM-DD_briefing.md`
  - Anotar: datas do mês, promoções ativas, procedimentos em destaque
- Rodar `claude code agent post-creator --briefing ...`
- Revisar 4 drafts gerados, editar se necessário
- Armazenar drafts prontos — não publicar ainda

#### Terça-feira: Publicação de posts (30 min)
- Para cada cliente, abrir painel GBP → aba "Atualizações" (ou "Promoções" se houver)
- Clicar "Criar publicação" → colar post 1 da semana → anexar foto → publicar
- Marcar no `posts/<...>_drafts.md` como publicado
- Repetir para o próximo cliente

#### Quarta-feira: Fotos (30 min)
- Clientes que enviaram fotos pelo WhatsApp → salvar em `clientes/<cliente>/fotos/raw/`
- No terminal: rodar script simples que processa fotos (ou fazer manual no Preview/Photoshop)
  - Redimensionar para 2048x1536 ou 1024x1024
  - Renomear: `[categoria]_[palavra-chave]_[cidade]_YYYYMMDD.jpg`
  - Remover EXIF problemático, adicionar metadata relevante
- Subir cada foto para o GBP: painel → aba "Fotos" → "Adicionar fotos" → escolher categoria
- Anotar no `ficha.md` a data e quantidade

#### Quinta-feira: Publicação de posts adicionais + Insights (45 min)
- Publicar 2º post da semana de cada cliente
- Aba "Insights" de cada perfil → capturar:
  - Visualizações dos últimos 7 dias
  - Busca direta vs. descoberta
  - Ações (ligações, rotas, cliques)
- Anotar em `clientes/<cliente>/metricas/YYYY-MM-WW.md`

#### Sexta-feira: Polimento + relatório mensal se for fim de mês (45 min)
- Publicar 3º post de cada cliente
- Se for último dia útil do mês: rodar `report-generator` para cada cliente, converter em PDF, enviar por email

### 4.4.3. Domingo (opcional, 30-60 min)
- Prospecção ativa: abrir Google Maps na cidade-alvo, buscar nicho, coletar 20-30 leads em planilha
- Pesquisar tendências de GBP (blog Google, Sterling Sky)
- Revisar CLAUDE.md e ajustar regras aprendidas na semana

## 4.5. Rotina semanal

### Todo domingo (1h total)
- [ ] Revisar aba `Leads` do Google Sheets — mover leads não respondidos para follow-up
- [ ] Revisar aba `Clientes` — identificar pendências (posts a publicar, fotos a processar)
- [ ] Planejar a semana: quais fotos pedir de cada cliente? Qual procedimento destacar?
- [ ] Revisar logs: qualquer erro recorrente em algum agente? Ajustar prompt.

## 4.6. Ciclo mensal por cliente (cobrança por aniversário, não por calendário)

**Mudança importante:** a Perfiliza promete **"primeiro mês por nossa conta"** na landing. Isso significa que cada cliente tem **seu próprio ciclo mensal individual**, contado a partir do dia em que o onboarding começou (dia em que o cliente adicionou `admin@perfiliza.com` como Administrador do GBP). A cobrança não acontece no dia 1 do calendário — acontece no **dia 30 do ciclo individual** de cada cliente, e a partir daí recorrentemente todo mês no aniversário do ciclo.

Cada cliente tem um campo `data_inicio_ciclo` na aba `Clientes` do CRM (Google Sheets). Todos os lembretes abaixo são relativos a esse dia.

### Dia 1 do ciclo (onboarding)
- [ ] Cliente adicionou `admin@perfiliza.com` como Administrador → registrar `data_inicio_ciclo` no CRM
- [ ] Enviar mensagem de boas-vindas reforçando a promessa:
  ```
  Oi [Nome]! Onboarding feito, já estamos dentro do seu Google.
  A gente cuida do seu perfil nos próximos 30 dias sem você pagar nada.
  No dia [data do dia 30], eu te mando o relatório completo —
  se fez sentido continuar, a partir daí é R$ 197 (ou R$ 297 no Growth)
  via PIX, todo mês. Pode parar quando quiser. Qualquer dúvida, me chama.
  ```
- [ ] Iniciar rotina operacional normal (posts, respostas a reviews, fotos)

### Dia 25 do ciclo (preparação de relatório — 45 min por cliente)
- [ ] Rodar `geo-auditor` para clientes Growth
- [ ] Capturar insights completos do GBP do cliente
- [ ] Rodar `report-generator`
- [ ] Converter relatório em PDF (pandoc + template CSS)
- [ ] Salvar em `clientes/<cliente>/relatorios/ciclo-01.pdf`

### Dia 28 do ciclo (check-in proativo — 5 min por cliente)
- [ ] Enviar mensagem de check-in no WhatsApp:
  ```
  Oi [Nome]! Faltam 2 dias pra fechar o primeiro ciclo. Tô terminando
  o relatório com tudo que rolou nesses 30 dias. Qualquer ajuste que
  você queira priorizar antes, me avisa.
  ```
- [ ] Registrar resposta (ou ausência de resposta) no CRM

### Dia 30 do ciclo (decisão do cliente — 30 min por cliente)
- [ ] Enviar relatório PDF por WhatsApp com a mensagem de decisão:
  ```
  Oi [Nome]! Fecha hoje o primeiro ciclo. Relatório em anexo:
  [resumo de 3 linhas com os principais ganhos do ciclo].

  Como combinado, os primeiros 30 dias foram por nossa conta.
  A partir daqui, se você quer continuar, é R$ 197/mês via PIX,
  todo dia [X] de cada mês. Pode parar a qualquer momento — é só
  me avisar por aqui.

  Topa seguir? Se sim, segue o link de pagamento do 2º ciclo:
  [link PIX Mercado Pago — R$ 197]

  Se preferir parar, sem problema — me avisa que a gente encerra
  sem cobrar nada.
  ```
- [ ] Se cliente confirmar continuidade + pagar: atualizar `status = ativo` e `proxima_cobranca = data_inicio_ciclo + 60`
- [ ] Se cliente não quiser continuar: remover `admin@perfiliza.com` do GBP, arquivar pastas do cliente, registrar motivo no CRM (`feedback_saida`)
- [ ] Se cliente não responder até o dia 33: pausar publicações, enviar lembrete único; se não responder até dia 35, encerrar.

### A cada novo ciclo (dia aniversário, todo mês)
- [ ] No dia 25 do ciclo: preparar relatório mensal
- [ ] No dia 28: mensagem de check-in opcional
- [ ] No dia aniversário (30/60/90/...): enviar relatório + link PIX:
  ```
  Oi [Nome]! Relatório do ciclo [N] em anexo.
  Link de pagamento do próximo ciclo: [link PIX — R$ 197].
  Algum procedimento em destaque esse mês?
  ```
- [ ] Prazo-padrão de pagamento: 3 dias do envio. Se não pagar em 3 dias, 1 lembrete. Se não pagar em 5 dias, pausar publicações. Se não pagar em 7 dias, encerrar ciclo.

### Observação sobre fluxo de caixa
Os primeiros 30 dias de cada cliente são **custo de aquisição**, não receita. A primeira entrada de PIX para cada cliente acontece **no dia 30+ do ciclo dele** — não há receita no mês de fechamento da venda. Provisionar caixa para suportar esse atraso ao aceitar múltiplos clientes simultâneos.

## 4.7. Protocolos específicos do painel GBP

### 4.7.1. Responder avaliação — passo a passo

1. `business.google.com/` → selecionar perfil
2. Menu esquerdo: "Avaliações"
3. Filtros: "Sem resposta" + ordenar por data (mais recentes primeiro)
4. Clicar na avaliação a responder
5. Campo de texto "Responder"
6. Colar texto gerado pelo agente
7. **Checagem final antes de publicar**:
   - [ ] Portugês correto?
   - [ ] Dentro de 280 caracteres?
   - [ ] Não contém informação que o paciente pode denunciar (ex: "obrigada pela avaliação Paulo, te atendemos com carinho" é OK; "obrigada pela avaliação Paulo, seu implante ficou lindo" NÃO é — revela dado de saúde)
   - [ ] Tom alinhado ao brand voice
8. Clicar "Publicar"
9. Voltar ao arquivo local e marcar como publicada com timestamp

### 4.7.2. Publicar post — passo a passo

1. Painel GBP → aba "Publicações" (pode se chamar "Atualizações" ou "Posts")
2. "+Criar publicação"
3. Escolher tipo: **Atualização** (default), **Evento**, **Oferta**, **Produto**
4. Colar corpo do post (do arquivo `posts/<...>_drafts.md`)
5. Adicionar **foto** (obrigatório para ter engajamento):
   - Se o cliente não mandou foto específica, usar foto genérica do banco já construído
   - Pode pedir ao cliente 1 foto por post durante o briefing
6. Adicionar **CTA**:
   - Saiba mais (learn_more) → URL do site ou WhatsApp
   - Ligar (call) → telefone
   - Reservar (book) → link de agendamento se houver
7. Validar pré-visualização (importante! mobile preview)
8. "Publicar"
9. Marcar no arquivo local

**Regra operacional**: publicar só em horários de alto engajamento:
- Segunda-feira 10h-11h
- Quarta-feira 14h-15h
- Sexta-feira 16h-17h
- Domingo 18h-20h (se for post de engajamento)

### 4.7.3. Upload de foto — passo a passo

1. Painel GBP → aba "Fotos"
2. Clicar "+" ou "Adicionar fotos"
3. Selecionar a **categoria correta**:
   - **Logo** (1 só, na marca)
   - **Capa** (1 só, primeiro hero)
   - **Equipe** (profissionais)
   - **Exterior** (fachada, fachada à noite)
   - **Interior** (recepção, salas)
   - **Produto / Serviço** (equipamentos, cadeira odontológica, etc.)
   - **Em ação** (profissional atendendo, sem rosto do paciente sem autorização)
4. Arrastar a foto (já processada e renomeada)
5. Adicionar **descrição** (opcional mas recomendado): 1-2 frases com palavras-chave
6. Publicar

### 4.7.4. Editar horários especiais (feriado) — passo a passo

1. Painel GBP → aba "Info" ou "Informações"
2. Seção "Horário" → "Adicionar horário especial"
3. Escolher data
4. Marcar: "Aberto" + horário OU "Fechado"
5. Salvar
6. **Regra**: atualizar feriados **7 dias antes** do feriado. Programar no calendário pessoal:
   - Carnaval
   - Sexta Santa
   - Tiradentes
   - Dia do Trabalho
   - Corpus Christi
   - Independência
   - Padroeira / Finados
   - Proclamação
   - Natal / Ano Novo
   - + datas estaduais/municipais do cliente

### 4.7.5. Atualizar descrição, categorias ou serviços

⚠️ **Ação "estrutural" — bloqueada nos primeiros 7 dias após convite**

Após dia 8 pós-aceite:
1. Painel GBP → "Info"
2. Editar o campo desejado
3. Google reverifica mudanças importantes (às vezes pede documento)
4. **Boas práticas**:
   - Descrição: 750 caracteres máximo, palavras-chave naturais, tom humano
   - Categoria primária: a mais específica e relevante (ex: "Clínica odontológica" não "Clínica")
   - Categorias secundárias: até 9, das mais relevantes à menos

## 4.8. Protocolo de emergência — perfil suspenso

Se receber email "Seu perfil foi suspenso":

1. **Não entrar em pânico** — suspensão é reversível em 60-80% dos casos quando há documentação
2. Ler motivo específico no email
3. Causas comuns:
   - Keyword stuffing no nome (ex: "Clínica Odontologia Implante Curitiba")
   - Endereço não corresponde ao CNPJ
   - Foto de fachada inconsistente
   - Denúncia de concorrente
   - Horário sistematicamente falso
4. **Contatar o cliente imediatamente** (chamada de voz):
   - Informar a suspensão
   - Pedir documentação: CNPJ, alvará, comprovante de endereço, foto atual da fachada com data visível
5. **Recorrer via painel GBP**:
   - Aba "Reivindicar perfil" ou "Contato" → "Entrar em recurso"
   - Anexar toda documentação
   - Explicar detalhadamente o caso
6. **Prazo esperado de resposta**: 3-14 dias úteis
7. **Durante a suspensão**:
   - Pausar publicações (não adianta)
   - Comunicar o cliente sobre o andamento (transparência)
   - Se suspensão persistir: oferecer **reembolso integral do mês** como ato de boa-fé

## 4.9. Protocolo LGPD para dados operacionais

### 4.9.1. Dados coletados
- Dados do cliente (CNPJ, endereço, telefone, email, WhatsApp)
- Dados de pacientes/clientes finais visíveis em reviews (nome, foto, texto)
- Insights agregados do GBP (métricas anônimas)

### 4.9.2. Obrigações
- [ ] Termo de serviço com cláusula LGPD clara (criar modelo no dia 1)
- [ ] Política de privacidade em `perfiliza.com/privacidade` publicada
- [ ] Senhas e chaves de API **nunca** no repositório Git
- [ ] Dados em laptop: **FileVault** (Mac) ou **BitLocker** (Windows) ativo
- [ ] Backup em Google Drive pessoal com criptografia de acesso
- [ ] Se houver violação suspeita: notificar cliente em 72h + ANPD

### 4.9.3. Pedido de exclusão (cliente cancela)
Em caso de cancelamento:
1. Exportar para o cliente **todos os dados** (PDF + pasta zip das fotos)
2. Confirmar com o cliente por escrito que recebeu
3. Em 30 dias: deletar localmente tudo relacionado ao cliente (pastas, sheets, drives)
4. Manter apenas: dados fiscais (recibos) pelo prazo legal

## 4.10. Métricas operacionais do próprio fundador

Para não virar "busy work", o fundador deve trackear (Google Sheets aba `Operacao`):

| Métrica | Meta |
|---|---|
| Tempo total operando/semana | 10-15h com 3 clientes; 15-20h com 5 |
| SLA médio respostas | < 24h |
| SLA médio posts (briefing→publicação) | < 48h |
| % de reviews com draft gerado pelo agente | 100% |
| % de drafts usados sem edição humana | Subir de 60% → 85% em 3 meses |
| Custos API externas | < US$ 30/mês |
| Reclamações de cliente | 0 |

Se alguma métrica sair do trilho por 2 semanas: **parar de aceitar novos clientes**, estabilizar antes de crescer.

## 4.11. Quando a operação manual deixa de escalar

Sinais claros de que a operação manual atingiu o limite:

- [ ] Fundador gasta > 20h/semana operando
- [ ] SLA de respostas > 24h frequentemente
- [ ] Fundador começa a perder post a publicar (esquecendo)
- [ ] 6+ clientes ativos simultâneos
- [ ] Cliente reclama 2x por semana de algo operacional

Nesse momento: parar temporariamente de aceitar novos clientes, estabilizar a operação com os atuais e conversar com o usuário sobre quais processos passam a justificar investimento em automação.

---

**Próximo arquivo**: [`05_trafego_pago_reduzido.md`](./05_trafego_pago_reduzido.md) — campanhas mínimas de tráfego pago.
