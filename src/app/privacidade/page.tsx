import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/seo/constants";

const PAGE_PATH = "/privacidade";
const PAGE_TITLE = "Política de Privacidade";
const PAGE_DESCRIPTION = `Como a ${BRAND_NAME} coleta, usa e protege os dados dos seus visitantes, leads e clientes, em conformidade com a LGPD.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
    type: "article",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <main className="px-6 py-12 sm:py-20">
      <article className="mx-auto max-w-3xl flex flex-col gap-6 text-base text-muted">
        <header className="flex flex-col gap-2">
          <h1 className="font-display text-3xl sm:text-4xl text-ink">
            Política de Privacidade
          </h1>
          <p className="text-sm">Atualizada em 12 de maio de 2026.</p>
        </header>

        <section className="flex flex-col gap-3">
          <p>
            Esta política explica, de forma direta, quais dados a {BRAND_NAME} coleta,
            por que coleta, com quem compartilha e como você pode exercer os seus direitos.
            Ela se aplica ao site <strong>perfiliza.com</strong> e a qualquer atendimento
            feito por WhatsApp ou e-mail a partir dele.
          </p>
          <p>
            A {BRAND_NAME} respeita a{" "}
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

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            1. Quem é o responsável pelos dados
          </h2>
          <p>
            A {BRAND_NAME} é operada como pessoa física em processo de formalização como MEI.
            O canal oficial de atendimento e encarregado pelo tratamento de dados (DPO) é{" "}
            <strong>contato@perfiliza.com</strong>.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            2. Quais dados a gente coleta
          </h2>
          <p>
            <strong>2.1. Dados que você manda voluntariamente no WhatsApp</strong>{" "}
            ou por e-mail: seu nome, o nome do seu negócio, a cidade, mensagens e
            qualquer informação que você compartilhar espontaneamente durante o
            atendimento.
          </p>
          <p>
            <strong>2.2. Dados de navegação no site:</strong> endereço IP,
            identificador do navegador (user-agent), páginas visitadas, referência de
            origem (UTMs) e eventos de clique em botões de CTA. Esses dados chegam via
            Google Tag Manager, Google Analytics 4 e Google Ads.
          </p>
          <p>
            <strong>2.3. Dados públicos da sua empresa:</strong>{" "}
            para montar o seu site, consultamos informações que já estão publicamente
            disponíveis sobre o seu negócio (Google, Instagram, redes sociais, fotos,
            avaliações, endereço, horários). Nada que exija login seu.
          </p>
          <p>
            <strong>2.4. Dados de execução do serviço (apenas clientes):</strong>{" "}
            quando você nos contrata, podemos receber textos, fotos e informações
            adicionais que você queira que apareçam no site, além de dados necessários
            para emissão de nota fiscal e — se aplicável — para registrar um domínio
            próprio no seu nome no Registro.br.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            3. Por que a gente coleta (finalidades e base legal)
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Responder o seu contato e elaborar a proposta</strong> — base
              legal: <em>procedimentos preliminares a contrato</em> (art. 7º, V, LGPD).
            </li>
            <li>
              <strong>Criar, publicar e hospedar o site contratado</strong> — base
              legal: <em>execução de contrato</em> (art. 7º, V, LGPD).
            </li>
            <li>
              <strong>Avisar sobre renovação anual e suporte pós-entrega</strong> —
              base legal: <em>execução de contrato</em> e{" "}
              <em>legítimo interesse</em> (art. 7º, V e IX, LGPD).
            </li>
            <li>
              <strong>Medir a eficiência das campanhas</strong> (qual anúncio, qual
              landing, qual criativo converteu) — base legal:{" "}
              <em>legítimo interesse</em> (art. 7º, IX, LGPD), com impacto minimizado
              (sem identificação pessoal direta no analytics).
            </li>
            <li>
              <strong>Cumprir obrigações legais e fiscais</strong> — base legal:{" "}
              <em>obrigação legal</em> (art. 7º, II, LGPD).
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            4. Com quem compartilhamos
          </h2>
          <p>
            A {BRAND_NAME} só compartilha dados com operadores que são necessários para
            entregar o serviço:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Vercel Inc.</strong> — hospedagem do site institucional da
              Perfiliza e dos sites entregues aos clientes.
            </li>
            <li>
              <strong>Google Ireland Ltd.</strong> — Google Tag Manager, Google
              Analytics 4 e Google Ads (medição de tráfego e conversões).
            </li>
            <li>
              <strong>WhatsApp LLC</strong> (Meta) — canal de atendimento.
            </li>
            <li>
              <strong>Mercado Pago</strong> — cobrança via PIX ou cartão depois que o
              site é aprovado.
            </li>
            <li>
              <strong>Registro.br</strong> — registro de domínio .com.br no seu nome,
              quando você optar pelo domínio próprio.
            </li>
            <li>
              <strong>Google Workspace</strong> — e-mail corporativo.
            </li>
          </ul>
          <p>
            Nenhum dado seu é vendido. Nenhum dado é compartilhado com terceiros para
            fins de marketing de outras empresas.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            5. Cookies e tecnologias similares
          </h2>
          <p>
            O site usa cookies para medir a origem do tráfego e aferir o desempenho das
            campanhas. Os principais são:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>_ga, _ga_*</strong> — Google Analytics 4 (estatísticas agregadas
              de uso).
            </li>
            <li>
              <strong>_gcl_*</strong> — Google Ads (atribuição de conversão de
              campanhas pagas).
            </li>
          </ul>
          <p>
            Você pode bloquear esses cookies pelas configurações do seu navegador. O
            site continua funcionando normalmente sem eles.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            6. Quanto tempo a gente guarda
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Conversas de WhatsApp e e-mail</strong>: até 2 anos após o
              último contato.
            </li>
            <li>
              <strong>Dados de clientes ativos</strong>: pelo tempo da contratação.
              Após o término, mantemos o mínimo exigido por obrigação fiscal (até 5
              anos).
            </li>
            <li>
              <strong>Dados de analytics</strong>: retenção padrão do Google Analytics
              4 (14 meses).
            </li>
            <li>
              <strong>Dados de Google Ads</strong>: retenção padrão da plataforma.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            7. Seus direitos (LGPD)
          </h2>
          <p>Você tem, a qualquer momento, o direito de:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Confirmar se a {BRAND_NAME} trata os seus dados.</li>
            <li>Acessar os seus dados.</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
            <li>
              Pedir a eliminação dos seus dados (quando não houver obrigação legal
              de retenção).
            </li>
            <li>Pedir a portabilidade dos seus dados em formato estruturado.</li>
            <li>
              Revogar consentimento dado anteriormente (quando for essa a base legal).
            </li>
            <li>Se informar sobre com quem seus dados foram compartilhados.</li>
          </ul>
          <p>
            Para exercer qualquer direito, mande um e-mail para{" "}
            <strong>contato@perfiliza.com</strong>. Respondemos em até 15 dias úteis.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            8. Segurança dos dados
          </h2>
          <p>
            Os dados ficam em laptops pessoais com criptografia de disco ativada, com
            2FA (autenticação em duas etapas) em todas as contas operacionais e
            armazenamento em nuvem apenas em serviços com criptografia em repouso
            (Google Workspace, Google Drive, Vercel). Senhas e chaves ficam em
            gerenciador dedicado, nunca em texto plano.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            9. Alterações desta política
          </h2>
          <p>
            Esta política pode ser atualizada. Quando houver mudança relevante,
            avisamos pelo canal de contato que você já usa (WhatsApp ou e-mail), além
            de publicar a nova versão com data atualizada aqui mesmo.
          </p>
        </section>

        <section className="flex flex-col gap-3">
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
      </article>
    </main>
  );
}
