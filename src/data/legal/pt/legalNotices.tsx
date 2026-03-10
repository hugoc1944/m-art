import { LegalPageData } from "../types"

export const legalNotices: LegalPageData = {
  title: "AVISOS LEGAIS E TERMOS DE UTILIZAÇÃO",
  breadcrumbLabel: "Avisos Legais",

  intro: (
    <>
      Esta página apresenta as informações legais relativas à publicação
      e utilização do website da M•ART Geneva Makeup Academy. Ao aceder
      e navegar neste website, aceita os termos estabelecidos abaixo.
      <br />
      <br />
      Última atualização: 28/02/2026
    </>
  ),

  sections: [

    {
      title: "I. Informações do editor",
      content: (
        <>
          <p>
            <strong>[Full Legal Company Name]*mandatory</strong>
          </p>

          <p>
            Sede social*mandatory: [Full Legal Address]
            <br />
            Número de registo (UID)*mandatory: [Registration Number]
            <br />
            Número de IVA: [If applicable]
          </p>

          <p>
            A operar como: M•ART Geneva Makeup Academy
          </p>

          <p>
            Email de contacto*mandatory: info@ecoledemaquillage.ch
            <br />
            Número de telefone: +41 21 555 48 72
          </p>
        </>
      ),
    },

    {
      title: "II. Alojamento",
      content: (
        <>
          <p>Este website é alojado por:</p>

          <p>
            Vercel Inc.
            <br />
            Estados Unidos
          </p>
        </>
      ),
    },

    {
      title: "III. Âmbito do website",
      content: (
        <>
          <p>
            O website fornece informações sobre a M•ART Geneva Makeup
            Academy, os seus programas e atividades relacionadas.
          </p>

          <p>
            O website inclui um formulário de contacto que permite
            aos utilizadores solicitar informações.
          </p>

          <p>
            O website não disponibiliza serviços de compra online nem
            um portal de estudante. Pode existir um portal administrativo
            interno para fins operacionais.
          </p>

          <p>
            As informações publicadas neste website são fornecidas
            apenas para fins informativos e não constituem uma oferta
            contratual vinculativa, salvo indicação expressa em contrário.
          </p>
        </>
      ),
    },

    {
      title: "IV. Propriedade intelectual",
      content: (
        <>
          <p>
            Todo o conteúdo disponível neste website, incluindo,
            entre outros, textos, imagens, gráficos, logótipos,
            elementos de design, layout e identidade visual,
            está protegido pelas leis de propriedade intelectual.
          </p>

          <p>
            Salvo indicação em contrário, esse conteúdo é propriedade
            exclusiva da M•ART Geneva Makeup Academy ou é utilizado
            sob licença apropriada.
          </p>

          <p>
            Qualquer reprodução, distribuição, modificação ou utilização
            do conteúdo do website sem autorização prévia por escrito
            é estritamente proibida.
          </p>
        </>
      ),
    },

    {
      title: "V. Utilização aceitável",
      content: (
        <>
          <p>
            Os utilizadores comprometem-se a aceder e utilizar este
            website em conformidade com as leis e regulamentos aplicáveis.
          </p>

          <p>Os utilizadores não devem:</p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Utilizar o website para fins ilegais</li>
            <li>Tentar obter acesso não autorizado a sistemas ou dados</li>
            <li>Interferir com a segurança ou o funcionamento do website</li>
            <li>Carregar ou transmitir software malicioso ou código prejudicial</li>
            <li>Falsificar identidade ou afiliação</li>
          </ul>
        </>
      ),
    },

    {
      title: "VI. Hiperligações",
      content: (
        <>
          <p>
            A criação de ligações para este website é permitida desde
            que a ligação seja legal, justa e não enganosa.
          </p>

          <p>
            O website pode conter ligações para websites externos.
            A M•ART Geneva Makeup Academy não controla nem é
            responsável pelo conteúdo, disponibilidade ou práticas
            de privacidade desses websites de terceiros.
          </p>
        </>
      ),
    },

    {
      title: "VII. Limitação de responsabilidade",
      content: (
        <>
          <p>
            O website e o seu conteúdo são fornecidos “tal como estão”,
            sem garantias de qualquer tipo, expressas ou implícitas.
          </p>

          <p>
            A M•ART Geneva Makeup Academy não será responsável
            por danos diretos ou indiretos resultantes do acesso ou
            utilização deste website, incluindo, entre outros,
            perda de dados, interrupções técnicas ou imprecisões
            nas informações publicadas.
          </p>

          <p>
            Não garantimos acesso contínuo ou livre de erros
            ao website.
          </p>
        </>
      ),
    },

    {
      title: "VIII. Dados pessoais e cookies",
      content: (
        <>
          <p>
            Para obter informações sobre a forma como tratamos
            dados pessoais, consulte a nossa Política de Privacidade.
          </p>

          <p>
            Para obter informações sobre cookies e tecnologias
            de rastreamento, consulte a nossa Política de Cookies.
          </p>
        </>
      ),
    },

    {
      title: "IX. Lei aplicável e jurisdição",
      content: (
        <>
          <p>
            Estes Avisos Legais e Termos de Utilização são regidos
            pela legislação suíça.
          </p>

          <p>
            Qualquer litígio relacionado com a utilização deste
            website estará sujeito à jurisdição dos tribunais
            competentes de Genebra, Suíça.
          </p>

          <p>
            Se for um consumidor residente na União Europeia,
            poderão também aplicar-se as disposições obrigatórias
            de proteção do consumidor do seu país de residência.
          </p>
        </>
      ),
    },

    {
      title: "X. Atualizações",
      content: (
        <>
          <p>
            A M•ART Geneva Makeup Academy reserva-se o direito
            de modificar estes Avisos Legais e Termos de Utilização
            a qualquer momento.
          </p>

          <p>
            Recomenda-se aos utilizadores que consultem esta página
            regularmente para se manterem informados sobre eventuais
            atualizações.
          </p>
        </>
      ),
    },

  ],
}