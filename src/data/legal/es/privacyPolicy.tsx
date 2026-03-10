import { LegalPageData } from "../types"

export const privacyPolicy: LegalPageData = {

  title: "POLÍTICA DE PRIVACIDAD",

  breadcrumbLabel: "Política de Privacidad",

  intro: (
    <>
      M•ART Geneva Makeup Academy concede gran importancia al tratamiento,
      la confidencialidad y la seguridad de los datos personales. Esta
      Política de Privacidad explica cómo se recopilan, procesan,
      almacenan y protegen los datos personales de conformidad con el
      Reglamento General de Protección de Datos (UE) 2016/679 (RGPD),
      la legislación suiza aplicable en materia de protección de datos
      y otras leyes pertinentes.
      <br />
      <br />
      Última actualización: 28/02/2026
    </>
  ),

  sections: [

    {
      title: "I. Responsable del tratamiento",
      content: (
        <>
          <p>El responsable del tratamiento de los datos personales es:</p>

          <p>
            <strong>[Full Legal Company Name]</strong>
            <br />
            Domicilio social: [Full Legal Address]
            <br />
            Número de registro: [Registration Number]
            <br />
            Número de IVA / UID: [If applicable]
          </p>

          <p>Operando como: M•ART Geneva Makeup Academy</p>

          <p>
            Consultas generales: info@ecoledemaquillage.ch
            <br />
            Contacto para protección de datos: privacy@ecoledemaquillage.ch
          </p>
        </>
      ),
    },

    {
      title: "II. ¿Qué son los datos personales?",
      content: (
        <>
          <p>
            Los datos personales se refieren a cualquier información
            relacionada con una persona física identificada o identificable,
            directa o indirectamente.
          </p>

          <p>
            Esto incluye, por ejemplo, nombres, direcciones de correo
            electrónico, números de teléfono, direcciones IP e
            identificadores en línea.
          </p>
        </>
      ),
    },

    {
      title: "III. Qué datos recopilamos",
      content: (
        <>
          <p>Recopilamos datos personales en las siguientes situaciones:</p>

          <p><strong>1. Cuando se pone en contacto con nosotros</strong></p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Nombre</li>
            <li>Apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Asunto de su solicitud</li>
            <li>Contenido del mensaje</li>
          </ul>

          <p>
            Los campos marcados como obligatorios son necesarios para
            que podamos responder a su consulta.
          </p>

          <p><strong>2. Cuando navega por nuestro sitio web</strong></p>

          <p>
            Podemos recopilar automáticamente datos técnicos y de
            interacción como la dirección IP, tipo de navegador,
            tipo de dispositivo, páginas visitadas, tiempo pasado en
            las páginas y eventos de interacción.
          </p>

          <p>
            Estos datos se recopilan mediante herramientas de
            seguimiento basadas en el consentimiento, incluyendo
            Google Analytics, Google Tag Manager, Google Ads y
            Meta Pixel.
          </p>
        </>
      ),
    },

    {
      title: "IV. Finalidades del tratamiento",
      content: (
        <>
          <p>Tratamos datos personales para los siguientes fines:</p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Responder a consultas y solicitudes de contacto</li>
            <li>Proporcionar información sobre nuestros programas</li>
            <li>Mejorar el rendimiento del sitio web y la experiencia del usuario</li>
            <li>Medir la eficacia del marketing y la publicidad</li>
            <li>Garantizar la seguridad e integridad del sitio web</li>
          </ul>

          <p>
            No realizamos toma de decisiones automatizadas que produzcan
            efectos jurídicos o efectos significativos similares.
          </p>
        </>
      ),
    },

    {
      title: "V. Base legal para el tratamiento",
      content: (
        <>
          <p>Los datos personales se tratan sobre la base de:</p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Su consentimiento (para cookies analíticas, marketing y comunicaciones)</li>
            <li>Nuestro interés legítimo en responder a consultas y mantener la seguridad del sitio web</li>
            <li>El cumplimiento de obligaciones legales aplicables cuando sea necesario</li>
          </ul>
        </>
      ),
    },

    {
      title: "VI. Conservación de los datos",
      content: (
        <>
          <p>Los datos del formulario de contacto se conservan durante un período máximo de 365 días.</p>

          <p>
            Si no se produce ninguna interacción adicional durante este
            período, los datos se eliminan automáticamente.
          </p>

          <p>
            Puede solicitar la eliminación de sus datos en cualquier
            momento contactando con:
            privacy@ecoledemaquillage.ch.
          </p>

          <p>
            Los períodos de conservación de datos analíticos y de marketing
            dependen de la configuración de cada plataforma.
          </p>
        </>
      ),
    },

    {
      title: "VII. Compartición de datos y encargados del tratamiento",
      content: (
        <>
          <p>No vendemos datos personales.</p>

          <p>
            Los datos personales pueden ser tratados por proveedores
            de servicios de confianza exclusivamente con fines operativos:
          </p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Vercel Inc. (infraestructura de alojamiento)</li>
            <li>Resend (servicios de envío de correo electrónico)</li>
            <li>Prisma (capa de gestión de bases de datos)</li>
            <li>Google Analytics y Google Ads</li>
            <li>Meta Pixel</li>
          </ul>

          <p>
            Estos proveedores están obligados contractualmente a
            garantizar medidas adecuadas de protección de datos.
          </p>
        </>
      ),
    },

    {
      title: "VIII. Transferencias internacionales de datos",
      content: (
        <>
          <p>
            Algunos proveedores de servicios pueden procesar datos
            fuera de Suiza o de la Unión Europea.
          </p>

          <p>
            Cuando corresponda, las transferencias se protegen mediante
            Cláusulas Contractuales Tipo (SCC), decisiones de adecuación
            u otros mecanismos legales equivalentes.
          </p>
        </>
      ),
    },

    {
      title: "IX. Seguridad de los datos",
      content: (
        <>
          <p>
            Aplicamos medidas técnicas y organizativas apropiadas para
            proteger los datos personales, incluyendo comunicación
            cifrada mediante HTTPS, infraestructura de alojamiento
            segura, control de accesos y protección de bases de datos.
          </p>

          <p>
            Aunque nos esforzamos por proteger sus datos, ningún sistema
            puede garantizar una seguridad absoluta.
          </p>
        </>
      ),
    },

    {
      title: "X. Sus derechos",
      content: (
        <>
          <p>De conformidad con el RGPD y la legislación aplicable, usted tiene derecho a:</p>

          <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
            <li>Acceder a sus datos personales</li>
            <li>Solicitar la rectificación de datos inexactos</li>
            <li>Solicitar la supresión de sus datos</li>
            <li>Limitar u oponerse al tratamiento</li>
            <li>Retirar su consentimiento en cualquier momento</li>
            <li>Solicitar la portabilidad de los datos cuando proceda</li>
          </ul>

          <p>
            Para ejercer sus derechos, contacte con:
            <br />
            privacy@ecoledemaquillage.ch
          </p>

          <p>
            También tiene derecho a presentar una reclamación ante su
            autoridad local de protección de datos.
          </p>
        </>
      ),
    },

    {
      title: "XI. Cookies",
      content: (
        <>
          <p>Nuestro sitio web utiliza cookies esenciales, analíticas y de marketing.</p>

          <p>
            Las cookies no esenciales solo se activan después de su
            consentimiento explícito mediante nuestro banner de cookies,
            donde puede gestionar sus preferencias en cualquier momento.
          </p>

          <p>
            Para más información, consulte nuestra Política de Cookies.
          </p>
        </>
      ),
    },

    {
      title: "XII. Cambios en esta política",
      content: (
        <>
          <p>
            Podemos actualizar esta Política de Privacidad periódicamente
            para reflejar cambios legales u operativos.
          </p>

          <p>
            La versión más reciente estará siempre disponible en esta
            página con la fecha de actualización correspondiente.
          </p>
        </>
      ),
    },

  ]
}