import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/seo/constants";

const PAGE_PATH = "/termos";
const PAGE_TITLE = "Termos de Uso";
const PAGE_DESCRIPTION = `Termos de uso do serviço de criação de site da ${BRAND_NAME}: escopo, pagamento, renovação anual, direito de não aceitar e suporte pós-entrega.`;

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

export default function TermosPage() {
  return (
    <main className="px-6 py-12 sm:py-20">
      <article className="mx-auto max-w-3xl flex flex-col gap-6 text-base text-muted">
        <header className="flex flex-col gap-2">
          <h1 className="font-display text-3xl sm:text-4xl text-ink">
            Termos de Uso
          </h1>
          <p className="text-sm">Atualizados em 12 de maio de 2026.</p>
        </header>

        <section className="flex flex-col gap-3">
          <p>
            Estes termos descrevem como funciona o serviço de criação de site da{" "}
            {BRAND_NAME} — o que está incluído, como acontece o pagamento, como
            funciona a renovação anual e o que você pode esperar do suporte. Ao
            contratar, você concorda com o que está escrito aqui.
          </p>
          <p>
            Linguagem simples e direta de propósito. Qualquer dúvida, pergunte por{" "}
            <a
              href="mailto:contato@perfiliza.com"
              className="font-medium text-primary hover:underline"
            >
              contato@perfiliza.com
            </a>{" "}
            antes de fechar.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">1. Definições</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Perfiliza</strong>: pessoa física em formalização como MEI que
              presta o serviço, identificada pelo e-mail contato@perfiliza.com.
            </li>
            <li>
              <strong>Cliente</strong>: pessoa física ou jurídica que contrata a
              Perfiliza para criar o site da sua empresa.
            </li>
            <li>
              <strong>Site</strong>: o site institucional pronto, com as
              características descritas no item 2 destes termos.
            </li>
            <li>
              <strong>Hospedagem</strong>: serviço de manter o Site no ar por 12 meses
              a partir do pagamento.
            </li>
            <li>
              <strong>Domínio Provisório</strong>: subdomínio fornecido pela Perfiliza
              durante a apresentação do Site (ex.: nomedaempresa.perfiliza.site),
              usado até o Cliente decidir contratar.
            </li>
            <li>
              <strong>Domínio Próprio</strong>: domínio .com.br registrado no nome do
              Cliente no Registro.br, opcional e cobrado à parte.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            2. O que está incluído no pacote de R$ 347
          </h2>
          <p>O Cliente recebe, dentro do pagamento único de R$ 347:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Site responsivo (funciona em celular, tablet e desktop).</li>
            <li>Hospedagem pelo período de 12 meses corridos a partir do pagamento.</li>
            <li>Conteúdo adaptado ao negócio do Cliente, redigido pela Perfiliza com base em informações públicas e materiais que o Cliente quiser enviar.</li>
            <li>Botão de WhatsApp direto.</li>
            <li>Galeria de fotos (fornecidas pelo Cliente ou obtidas de fontes públicas com autorização).</li>
            <li>Endereço com mapa.</li>
            <li>Horários de funcionamento.</li>
            <li>Formulário ou link de contato.</li>
          </ul>
          <p>
            Itens fora desse escopo (e-commerce, área logada, integrações com sistemas
            internos, blog editorial, criação de identidade visual completa,
            tradução para outros idiomas) <strong>não</strong> estão inclusos e
            podem ser orçados separadamente.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            3. Modelo de pagamento — só depois de aprovar
          </h2>
          <p>
            A Perfiliza monta o Site primeiro e mostra funcionando, em Domínio
            Provisório, pelo WhatsApp. O Cliente só paga depois de ver e decidir que
            faz sentido.
          </p>
          <p>
            O pagamento é único, no valor de R$ 347, via PIX à vista ou cartão de
            crédito parcelado em até 12x (juros da operadora). A cobrança é feita pelo
            Mercado Pago, com link enviado por WhatsApp ou e-mail.
          </p>
          <p>
            <strong>Não há cobrança automática.</strong> Sem débito recorrente, sem
            assinatura, sem fidelização.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            4. Direito de não aceitar
          </h2>
          <p>
            Se o Cliente não quiser o Site depois de ver pronto, basta avisar — não
            paga nada. Em até <strong>21 dias corridos</strong> a partir do aviso, o
            Domínio Provisório é desativado e o Site sai do ar.
          </p>
          <p>
            Não há multa, taxa de desistência, cobrança de &ldquo;diagnóstico&rdquo; nem qualquer
            valor a pagar. O Cliente pode fazer isso sem precisar justificar.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            5. Renovação anual
          </h2>
          <p>
            <strong>30 dias antes</strong> do término dos 12 meses de hospedagem, a
            Perfiliza entra em contato pelo WhatsApp avisando da data e oferecendo a
            renovação por mais R$ 347 anuais (sujeito a reajuste, com aviso prévio).
          </p>
          <p>
            Se o Cliente quiser continuar, é um novo pagamento manual, no mesmo
            modelo (PIX ou cartão). Se não quiser, nada acontece automaticamente — o
            Site sai do ar na data prevista e o domínio provisório é desativado.
          </p>
          <p>
            Não existe cobrança retroativa, multa por não-renovação ou qualquer
            penalidade. A decisão é sempre do Cliente.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            6. Alterações depois que o Site está no ar
          </h2>
          <p>
            <strong>Pequenos ajustes pontuais</strong> (trocar telefone, atualizar
            horário, corrigir um erro de texto, substituir uma foto) entram dentro do
            que a Perfiliza atende sem cobrança extra, dentro do bom-senso e do
            volume razoável.
          </p>
          <p>
            <strong>Manutenção contínua mensal</strong> (alterações frequentes,
            criação de novas páginas, atualização de catálogo, gestão de conteúdo)
            <strong> não</strong> está inclusa. Se o Cliente precisar disso de forma
            recorrente, a Perfiliza pode propor um modelo separado ou recomendar
            outro profissional.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            7. Domínio próprio (opcional)
          </h2>
          <p>
            O Cliente pode optar por usar um domínio próprio .com.br no lugar do
            Domínio Provisório da Perfiliza. Há dois caminhos:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Registrar um domínio novo</strong>: a Perfiliza faz o registro
              pelo Registro.br no nome do Cliente. O custo é de cerca de R$ 100/ano
              (valor do Registro.br, repassado sem margem) e o pagamento é separado
              do R$ 347 do Site.
            </li>
            <li>
              <strong>Apontar um domínio que o Cliente já tem</strong>: sem custo
              extra. A Perfiliza configura o apontamento DNS.
            </li>
          </ul>
          <p>
            O domínio próprio é sempre registrado em nome do Cliente, e o Cliente
            pode levá-lo embora a qualquer momento.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            8. Conteúdo e direitos de imagem
          </h2>
          <p>
            O Cliente declara que possui o direito de uso de qualquer material que
            enviar para o Site (fotos, logotipos, textos). A Perfiliza pode usar
            informações já públicas sobre o negócio do Cliente (avaliações no Google,
            descrições, fotos em perfis oficiais) para montar a primeira versão do
            Site — e ajusta o que o Cliente pedir antes de publicar.
          </p>
          <p>
            Após o pagamento, o conteúdo final do Site (textos e arte) é de uso do
            Cliente. A Perfiliza mantém os arquivos do projeto para suporte e
            renovação.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            9. Disponibilidade e limitações
          </h2>
          <p>
            A hospedagem é fornecida em infraestrutura terceirizada de alta
            disponibilidade (Vercel ou equivalente). A Perfiliza não garante uptime
            de 100% — ocorrências raras de indisponibilidade do provedor estão fora
            do controle da Perfiliza e não geram crédito ou reembolso.
          </p>
          <p>
            A Perfiliza não se responsabiliza por uso do Site para fins ilegais,
            promessas comerciais falsas inseridas pelo Cliente, ou pela exatidão de
            informações fornecidas pelo Cliente.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            10. Limitação de responsabilidade
          </h2>
          <p>
            A responsabilidade da Perfiliza fica limitada ao valor efetivamente pago
            pelo Cliente nos últimos 12 meses. Danos indiretos, lucros cessantes ou
            perda de oportunidade comercial não são cobertos.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">
            11. Alterações destes termos
          </h2>
          <p>
            Estes termos podem ser atualizados. Versões futuras só valem para novos
            contratos — quem já é Cliente segue regido pela versão vigente na data do
            seu pagamento, até a próxima renovação.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-ink">12. Foro e contato</h2>
          <p>
            Fica eleito o foro da comarca do domicílio do Cliente para resolver
            qualquer questão relativa a estes termos, com renúncia a qualquer outro,
            por mais privilegiado que seja.
          </p>
          <p>
            Canal oficial de atendimento:{" "}
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
