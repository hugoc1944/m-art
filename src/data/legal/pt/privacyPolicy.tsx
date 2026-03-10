import { LegalPageData } from "../types"

export const privacyPolicy: LegalPageData = {

  title: "POLÍTICA DE PRIVACIDADE",

  breadcrumbLabel: "Política de Privacidade",

  intro: (
    <>
      A M•ART Geneva Makeup Academy atribui grande importância ao tratamento,
      à confidencialidade e à segurança dos dados pessoais. Esta Política
      de Privacidade explica como os dados pessoais são recolhidos,
      tratados, armazenados e protegidos em conformidade com o
      Regulamento Geral sobre a Proteção de Dados (UE) 2016/679 (RGPD),
      com a legislação suíça aplicável em matéria de proteção de dados
      e com outras leis relevantes.
      <br />
      <br />
      Última atualização: 28/02/2026
    </>
  ),

  sections: [

    {
      title: "I. Responsável pelo tratamento",
      content: (
        <>
          <p>O responsável pelo tratamento dos dados pessoais é:</p>

          <p>
            <strong>[Full Legal Company Name]</strong>
            <br />
            Sede social: [Full Legal Address]
            <br />
            Número de registo: [Registration Number]
            <br />
            Número de IVA / UID: [If applicable]
          </p>

          <p>A operar como: M•ART Geneva Makeup Academy</p>

          <p>
            Contacto geral: info@ecoledemaquillage.ch
            <br />
            Contacto para proteção de dados: privacy@ecoledemaquillage.ch
          </p>
        </>
      ),
    },

    {
      title: "II. O que são dados pessoais?",
      content: (
        <>
          <p>
            Dados pessoais referem-se a qualquer informação relacionada
            com uma pessoa singular identificada ou identificável,
            direta ou indiretamente.
          </p>

          <p>
            Isto inclui, por exemplo, nomes, endereços de email,
            números de telefone, endereços IP e identificadores online.
          </p>
        </>
      ),
    },

    {
      title: "III. Que dados recolhemos",
      content: (
        <>
          <p>Recolhemos dados pessoais nas seguintes situações:</p>

          <p><strong>1. Quando nos contacta</strong></p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Nome próprio</li>
            <li>Apelido</li>
            <li>Endereço de email</li>
            <li>Número de telefone</li>
            <li>Assunto do pedido</li>
            <li>Conteúdo da mensagem</li>
          </ul>

          <p>
            Os campos assinalados como obrigatórios são necessários
            para que possamos responder ao seu pedido.
          </p>

          <p><strong>2. Quando navega no nosso website</strong></p>

          <p>
            Podemos recolher automaticamente dados técnicos e de
            interação, tais como endereço IP, tipo de navegador,
            tipo de dispositivo, páginas visitadas, tempo passado
            nas páginas e eventos de interação.
          </p>

          <p>
            Estes dados são recolhidos através de ferramentas de
            rastreamento baseadas no consentimento, incluindo
            Google Analytics, Google Tag Manager, Google Ads
            e Meta Pixel.
          </p>
        </>
      ),
    },

    {
      title: "IV. Finalidades do tratamento",
      content: (
        <>
          <p>Tratamos dados pessoais para as seguintes finalidades:</p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Responder a pedidos de contacto e informações</li>
            <li>Fornecer informações sobre os nossos programas</li>
            <li>Melhorar o desempenho do website e a experiência do utilizador</li>
            <li>Medir a eficácia de marketing e publicidade</li>
            <li>Garantir a segurança e integridade do website</li>
          </ul>

          <p>
            Não realizamos decisões automatizadas que produzam efeitos
            jurídicos ou efeitos significativamente semelhantes.
          </p>
        </>
      ),
    },

    {
      title: "V. Base legal para o tratamento",
      content: (
        <>
          <p>Os dados pessoais são tratados com base em:</p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>O seu consentimento (para cookies analíticos, marketing e comunicações)</li>
            <li>O nosso interesse legítimo em responder a pedidos e manter a segurança do website</li>
            <li>O cumprimento de obrigações legais aplicáveis quando necessário</li>
          </ul>
        </>
      ),
    },

    {
      title: "VI. Conservação dos dados",
      content: (
        <>
          <p>Os dados do formulário de contacto são conservados por um período máximo de 365 dias.</p>

          <p>
            Caso não ocorra qualquer interação adicional durante este
            período, os dados são automaticamente eliminados.
          </p>

          <p>
            Pode solicitar a eliminação dos seus dados a qualquer
            momento contactando privacy@ecoledemaquillage.ch.
          </p>

          <p>
            Os períodos de conservação de dados analíticos e de marketing
            dependem da configuração das respetivas plataformas.
          </p>
        </>
      ),
    },

    {
      title: "VII. Partilha de dados e subcontratantes",
      content: (
        <>
          <p>Não vendemos dados pessoais.</p>

          <p>
            Os dados pessoais podem ser tratados por prestadores de
            serviços de confiança exclusivamente para fins operacionais:
          </p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Vercel Inc. (infraestrutura de alojamento)</li>
            <li>Resend (serviços de envio de emails)</li>
            <li>Prisma (camada de gestão de base de dados)</li>
            <li>Google Analytics e Google Ads</li>
            <li>Meta Pixel</li>
          </ul>

          <p>
            Estes prestadores estão contratualmente obrigados
            a garantir medidas adequadas de proteção de dados.
          </p>
        </>
      ),
    },

    {
      title: "VIII. Transferências internacionais de dados",
      content: (
        <>
          <p>
            Alguns prestadores de serviços podem tratar dados fora da
            Suíça ou da União Europeia.
          </p>

          <p>
            Quando aplicável, as transferências são protegidas através
            de Cláusulas Contratuais-Tipo (SCC), decisões de adequação
            ou mecanismos legais equivalentes.
          </p>
        </>
      ),
    },

    {
      title: "IX. Segurança dos dados",
      content: (
        <>
          <p>
            Implementamos medidas técnicas e organizacionais adequadas
            para proteger os dados pessoais, incluindo comunicação
            encriptada HTTPS, infraestrutura de alojamento segura,
            controlo de acessos e proteção da base de dados.
          </p>

          <p>
            Embora nos esforcemos por proteger os seus dados,
            nenhum sistema pode garantir segurança absoluta.
          </p>
        </>
      ),
    },

    {
      title: "X. Os seus direitos",
      content: (
        <>
          <p>Nos termos do RGPD e da legislação aplicável, tem o direito de:</p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Aceder aos seus dados pessoais</li>
            <li>Solicitar a retificação de dados incorretos</li>
            <li>Solicitar a eliminação dos seus dados</li>
            <li>Restringir ou opor-se ao tratamento</li>
            <li>Retirar o seu consentimento a qualquer momento</li>
            <li>Solicitar a portabilidade dos dados quando aplicável</li>
          </ul>

          <p>
            Para exercer os seus direitos, contacte:
            <br />
            privacy@ecoledemaquillage.ch
          </p>

          <p>
            Tem também o direito de apresentar uma reclamação junto
            da autoridade de proteção de dados competente.
          </p>
        </>
      ),
    },

    {
      title: "XI. Cookies",
      content: (
        <>
          <p>O nosso website utiliza cookies essenciais, analíticos e de marketing.</p>

          <p>
            Os cookies não essenciais são ativados apenas após o seu
            consentimento explícito através do nosso banner de cookies,
            onde pode gerir as suas preferências a qualquer momento.
          </p>

          <p>
            Para informações detalhadas, consulte a nossa
            Política de Cookies.
          </p>
        </>
      ),
    },

    {
      title: "XII. Alterações a esta política",
      content: (
        <>
          <p>
            Podemos atualizar esta Política de Privacidade
            periodicamente para refletir alterações legais
            ou operacionais.
          </p>

          <p>
            A versão mais recente estará sempre disponível
            nesta página com a data de revisão atualizada.
          </p>
        </>
      ),
    },

  ]
}