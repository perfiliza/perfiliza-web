import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições de contratação, execução, cobrança e cancelamento do serviço Perfiliza.",
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return (
    <LegalLayout title="Termos de Uso" updatedAt="23 de abril de 2026">
      <section>
        <p>
          Este documento descreve as condições do serviço Perfiliza: o que a
          gente faz, o que você faz, como começa a cobrança, como cancela e
          até onde vai a nossa responsabilidade. Ao acionar qualquer CTA do
          site para iniciar um atendimento, você declara ter lido e aceitado
          estes termos.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">1. Quem é quem</h2>
        <p>
          <strong>Perfiliza</strong> é o serviço de consultoria em Google Meu
          Negócio e GEO operado em pessoa física (CPF), com MEI em
          formalização. Contato oficial:{" "}
          <a
            href="mailto:contato@perfiliza.com"
            className="font-medium text-primary hover:underline"
          >
            contato@perfiliza.com
          </a>
          .
        </p>
        <p>
          <strong>Cliente</strong> é a pessoa física ou jurídica que contrata
          o serviço após o diagnóstico gratuito.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          2. O que está incluído no serviço
        </h2>
        <p>
          A Perfiliza oferece dois planos. O que estiver no cartão do plano
          correspondente (Starter ou Growth) na página de planos do site é o
          escopo acordado.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Starter (R$ 197/mês)</strong>: gestão completa do seu
            Google Meu Negócio — posts, respostas a avaliações, fotos,
            horários, perguntas e respostas, atributos, serviços, relatório
            mensal e suporte por WhatsApp.
          </li>
          <li>
            <strong>Growth (R$ 297/mês)</strong>: tudo do Starter mais GEO —
            auditoria mensal em ChatGPT/Gemini/Perplexity/Claude, cadastro em
            Foursquare/Apple Business/Bing, ajustes técnicos no site do
            cliente e relatório GEO mensal.
          </li>
        </ul>
        <p>
          O serviço é executado manualmente pela Perfiliza, em até 7 dias úteis
          por ciclo de publicação, com ação semanal. Postagens, respostas e
          atualizações no perfil são feitas via painel oficial do Google
          (business.google.com), nunca por API não autorizada.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          3. Como começa a cobrança
        </h2>
        <p>
          <strong>Os primeiros 30 dias são por nossa conta.</strong> Você
          começa sem pagar nada, sem cartão, sem boleto. A gente cuida do seu
          perfil por 30 dias corridos, contados a partir do dia em que você
          nos adiciona como Administrador do seu Google Meu Negócio (este é o{" "}
          <em>dia 1</em> do ciclo individual).
        </p>
        <p>
          No <strong>dia 30</strong>, você recebe um relatório completo do que
          foi feito no período e os links para pagar via PIX o mês seguinte,
          caso queira continuar. Se decidir não continuar, a gente se despede
          sem cobrar absolutamente nada — você só tira a Perfiliza de
          Administrador do seu perfil.
        </p>
        <p>
          A partir daí, a cobrança é mensal via PIX (Mercado Pago), sempre no
          aniversário do seu ciclo.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          4. Sem fidelidade, sem multa
        </h2>
        <p>
          Não existe prazo de fidelidade. O cancelamento é feito enviando{" "}
          <strong>uma mensagem por WhatsApp</strong> ao canal oficial. Não há
          multa, letra miúda ou período de carência. Após o pedido, o acesso
          de Administrador da Perfiliza ao seu Google Meu Negócio é removido,
          por você mesmo pelo painel oficial do Google — a Perfiliza nunca
          tem a sua senha.
        </p>
        <p>
          Clientes do beta mantêm o{" "}
          <strong>preço legacy</strong>: o valor contratado não sobe enquanto
          a assinatura estiver ativa e sem interrupção.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          5. O que a gente não promete
        </h2>
        <p>
          A Perfiliza <strong>não promete posição</strong> no Google, número
          específico de ligações, volume específico de avaliações novas ou
          aparições garantidas em IAs. Ranking é decisão do Google e resultado
          depende de fatores do seu negócio, do mercado e do comportamento
          dos seus próprios clientes. O que a gente promete é{" "}
          <strong>executar o escopo contratado</strong> com qualidade e
          cadência semanal.
        </p>
        <p>
          Projeções numéricas exibidas na landing (“+60% em cliques de rota”,
          “+15 a 30 avaliações”, “10% → 60% em IAs”) são{" "}
          <em>projeções baseadas em benchmarks setoriais</em> e não
          configuram garantia contratual.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          6. Responsabilidades do cliente
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Fornecer acesso de Administrador ao Google Meu Negócio via convite
            no painel oficial (sem senha).
          </li>
          <li>
            Prestar informações verdadeiras (nome fantasia, endereço,
            categoria, horário, fotos) e ter permissão para usar as imagens
            que enviar.
          </li>
          <li>
            Em nichos com regulação específica, fornecer{" "}
            <strong>consentimento escrito</strong> quando aplicável (ex.:
            fotos antes/depois em odontologia e estética) antes da publicação.
          </li>
          <li>
            Respeitar as diretrizes do Google para perfis comerciais; a
            Perfiliza não executa nenhuma ação contrária a essas diretrizes.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          7. Responsabilidades da Perfiliza
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Executar o escopo contratado com frequência semanal e entregar
            relatório mensal.
          </li>
          <li>
            Respeitar as políticas do Google e a legislação aplicável ao
            nicho do cliente (CFO/CRO em odontologia, ANVISA em estética,
            regulamentação municipal em alimentos e bebidas).
          </li>
          <li>
            Não divulgar informações confidenciais do cliente a terceiros que
            não estejam diretamente envolvidos na execução do serviço.
          </li>
          <li>
            Comunicar com antecedência qualquer mudança relevante de escopo
            ou preço para a base ativa.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          8. Limitação de responsabilidade
        </h2>
        <p>
          A Perfiliza não responde por:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Suspensão, banimento ou remoção do perfil do Google Meu Negócio
            por ação do Google, salvo se causada por conduta comprovada da
            Perfiliza.
          </li>
          <li>
            Perda de ranking por alterações no algoritmo do Google ou por
            concorrência direta.
          </li>
          <li>
            Avaliações negativas publicadas por clientes do contratante,
            salvo no que diz respeito à resposta pública, que continua sendo
            executada dentro do escopo.
          </li>
          <li>
            Uso inadequado, pelo cliente, das orientações do relatório mensal
            fora do escopo gerenciado pela Perfiliza.
          </li>
        </ul>
        <p>
          Em qualquer hipótese, a responsabilidade da Perfiliza fica limitada
          ao valor efetivamente pago pelo cliente nos 3 meses anteriores ao
          fato gerador.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          9. Privacidade e LGPD
        </h2>
        <p>
          O tratamento de dados pessoais segue a{" "}
          <a
            href="/privacidade"
            className="font-medium text-primary hover:underline"
          >
            Política de Privacidade
          </a>
          , parte integrante destes Termos.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          10. Alterações destes termos
        </h2>
        <p>
          Podemos atualizar estes termos. Mudanças relevantes são comunicadas
          aos clientes ativos por WhatsApp ou e-mail com pelo menos 15 dias de
          antecedência. A versão mais recente fica sempre publicada nesta
          página, com a data de atualização no topo.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">11. Lei e foro</h2>
        <p>
          Este contrato é regido pelas leis do Brasil. Fica eleito o foro da
          comarca do cliente como competente para dirimir questões oriundas
          deste contrato, salvo se a lei determinar outro foro.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">12. Contato</h2>
        <p>
          Qualquer dúvida contratual:{" "}
          <a
            href="mailto:contato@perfiliza.com"
            className="font-medium text-primary hover:underline"
          >
            contato@perfiliza.com
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
