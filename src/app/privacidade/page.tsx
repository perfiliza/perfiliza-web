import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Perfiliza coleta, usa e protege os dados dos seus visitantes, leads e clientes, em conformidade com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <LegalLayout title="Política de Privacidade" updatedAt="23 de abril de 2026">
      <section>
        <p>
          Esta política explica, de forma direta, quais dados a Perfiliza
          coleta, por que coleta, com quem compartilha e como você pode
          exercer os seus direitos. Ela se aplica ao site{" "}
          <strong>perfiliza.com</strong> e a qualquer atendimento feito por
          WhatsApp ou e-mail a partir dele.
        </p>
        <p>
          A Perfiliza respeita a{" "}
          <strong>Lei Geral de Proteção de Dados (Lei 13.709/2018)</strong>.
          Qualquer dúvida, crítica ou pedido de exclusão deve ser enviado para{" "}
          <a
            href="mailto:contato@perfiliza.com"
            className="font-medium text-primary hover:underline"
          >
            contato@perfiliza.com
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          1. Quem é o responsável pelos dados
        </h2>
        <p>
          A Perfiliza é operada como pessoa física em processo de formalização
          como MEI. O canal oficial de atendimento e encarregado pelo
          tratamento de dados (DPO) é{" "}
          <strong>contato@perfiliza.com</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          2. Quais dados a gente coleta
        </h2>
        <p>
          <strong>2.1. Dados que você manda voluntariamente no WhatsApp</strong>{" "}
          ou por e-mail: seu nome, o nome do seu negócio, a cidade, o link do
          seu perfil no Google Meu Negócio, mensagens e qualquer informação
          que você compartilhar espontaneamente durante o atendimento.
        </p>
        <p>
          <strong>2.2. Dados de navegação no site:</strong> endereço IP,
          identificador do navegador (user-agent), páginas visitadas,
          referência de origem (UTMs) e eventos de clique em botões de CTA.
          Esses dados chegam via Google Analytics 4 e Meta Pixel/Conversions
          API.
        </p>
        <p>
          <strong>2.3. Dados públicos do seu Google Meu Negócio:</strong> ao
          receber o link do seu perfil, analisamos informações que já estão
          publicamente visíveis no Google (nome, endereço, categoria, fotos,
          avaliações, perguntas, posts). Nada que exija login seu.
        </p>
        <p>
          <strong>2.4. Dados de execução do serviço (apenas clientes):</strong>{" "}
          quando você nos adiciona como Administrador do seu Google Meu
          Negócio, passamos a ter acesso autorizado ao painel da sua conta
          (business.google.com) para executar o escopo contratado. Nunca
          pedimos a sua senha.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          3. Por que a gente coleta (finalidades e base legal)
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Responder o seu contato</strong> e entregar o diagnóstico
            gratuito prometido — base legal:{" "}
            <em>procedimentos preliminares a contrato</em> (art. 7º, V, LGPD).
          </li>
          <li>
            <strong>Executar o serviço contratado</strong> (gestão do seu
            Google Meu Negócio + GEO) — base legal:{" "}
            <em>execução de contrato</em> (art. 7º, V, LGPD).
          </li>
          <li>
            <strong>Medir a eficiência das campanhas</strong> (qual anúncio,
            qual landing, qual criativo converteu) — base legal:{" "}
            <em>legítimo interesse</em> (art. 7º, IX, LGPD), com impacto
            minimizado (sem identificação pessoal direta no analytics).
          </li>
          <li>
            <strong>Cumprir obrigações legais e fiscais</strong> (Carnê-Leão,
            escrituração, eventual NF) — base legal:{" "}
            <em>obrigação legal</em> (art. 7º, II, LGPD).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          4. Com quem compartilhamos
        </h2>
        <p>
          A Perfiliza só compartilha dados com operadores que são necessários
          para entregar o serviço:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Google Ireland Ltd.</strong> — Google Analytics 4 e Google
            Ads (medição de tráfego e conversões).
          </li>
          <li>
            <strong>Meta Platforms Ireland Ltd.</strong> — Facebook Pixel e
            Conversions API (medição de tráfego e conversões vindas de
            Instagram e Facebook).
          </li>
          <li>
            <strong>WhatsApp LLC</strong> (Meta) — canal de atendimento.
          </li>
          <li>
            <strong>Mercado Pago</strong> — cobrança via PIX para clientes
            contratados.
          </li>
          <li>
            <strong>Vercel Inc.</strong> — hospedagem do site.
          </li>
          <li>
            <strong>Google Workspace</strong> — e-mail corporativo.
          </li>
        </ul>
        <p>
          Nenhum dado seu é vendido. Nenhum dado é compartilhado com terceiros
          para fins de marketing de outras empresas.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          5. Cookies e tecnologias similares
        </h2>
        <p>
          O site usa cookies para medir a origem do tráfego e aferir o
          desempenho das campanhas. Os principais são:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>_ga, _ga_*</strong> — Google Analytics 4 (estatísticas
            agregadas de uso).
          </li>
          <li>
            <strong>_fbp, _fbc</strong> — Meta Pixel (atribuição de anúncios
            no Facebook e Instagram).
          </li>
        </ul>
        <p>
          Você pode bloquear esses cookies pelas configurações do seu
          navegador. O site continua funcionando normalmente sem eles — o que
          muda é a nossa capacidade de entender quais campanhas estão trazendo
          leads.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          6. Quanto tempo a gente guarda
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Conversas de WhatsApp e e-mail</strong>: até 2 anos após o
            último contato.
          </li>
          <li>
            <strong>Dados de clientes ativos</strong>: pelo tempo da
            contratação. Após o cancelamento, mantemos o mínimo exigido por
            obrigação fiscal (até 5 anos).
          </li>
          <li>
            <strong>Dados de analytics</strong>: retenção padrão do Google
            Analytics 4 (14 meses).
          </li>
          <li>
            <strong>Dados de ads (Meta/Google)</strong>: retenção padrão de
            cada plataforma.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          7. Seus direitos (LGPD)
        </h2>
        <p>Você tem, a qualquer momento, o direito de:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Confirmar se a Perfiliza trata os seus dados.</li>
          <li>Acessar os seus dados.</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
          <li>
            Pedir a eliminação dos seus dados (quando não houver obrigação
            legal de retenção).
          </li>
          <li>
            Pedir a portabilidade dos seus dados em formato estruturado.
          </li>
          <li>
            Revogar consentimento dado anteriormente (quando for essa a base
            legal).
          </li>
          <li>Se informar sobre com quem seus dados foram compartilhados.</li>
        </ul>
        <p>
          Para exercer qualquer direito, mande um e-mail para{" "}
          <strong>contato@perfiliza.com</strong>. Respondemos em até 15 dias
          úteis, com confirmação do atendimento do pedido ou com justificativa
          fundamentada caso não seja possível.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          8. Segurança dos dados
        </h2>
        <p>
          Os dados ficam em laptops pessoais com criptografia de disco
          ativada, com 2FA (autenticação em duas etapas) em todas as contas
          operacionais e armazenamento em nuvem apenas em serviços com
          criptografia em repouso (Google Workspace, Google Drive, Vercel).
          Senhas e chaves ficam em gerenciador dedicado, nunca em texto
          plano.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">
          9. Alterações desta política
        </h2>
        <p>
          Esta política pode ser atualizada. Quando houver mudança relevante,
          avisamos pelo canal de contato que você já usa (WhatsApp ou
          e-mail), além de publicar a nova versão com data atualizada aqui
          mesmo.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">10. Contato</h2>
        <p>
          Encarregado pelo tratamento de dados (DPO):{" "}
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
