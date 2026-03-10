import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

/* =========================================
   SUPPORTED LOCALES
========================================= */

type Locale = "en" | "fr" | "es" | "pt";

/* =========================================
   TRANSLATIONS
========================================= */

const emailTranslations: Record<Locale, any> = {
  en: {
    adminSubject: "New Contact Enquiry",
    adminHeading: "New Enquiry Submission",

    userSubject: "We’ve received your enquiry | M•ART Academy",
    emailTitle: "Enquiry Received",

    greeting: "Dear",
    intro: "Thank you for contacting M•ART Academy regarding:",
    response: "Our team will personally review your message and respond shortly.",
    closing: "We appreciate your intention and look forward to guiding you.",

    footer: "YOUR JOURNEY BEGINS WITH INTENTION.",
  },

  fr: {
    adminSubject: "Nouvelle demande de contact",
    adminHeading: "Nouvelle demande reçue",

    userSubject: "Nous avons bien reçu votre demande | M•ART Academy",
    emailTitle: "Demande reçue",

    greeting: "Cher / Chère",
    intro: "Merci d’avoir contacté M•ART Academy concernant :",
    response: "Notre équipe examinera votre message et vous répondra rapidement.",
    closing: "Nous vous remercions pour votre démarche et serons ravis de vous accompagner.",

    footer: "VOTRE PARCOURS COMMENCE PAR UNE INTENTION.",
  },

  es: {
    adminSubject: "Nueva solicitud de contacto",
    adminHeading: "Nueva solicitud recibida",

    userSubject: "Hemos recibido su solicitud | M•ART Academy",
    emailTitle: "Solicitud recibida",

    greeting: "Estimado/a",
    intro: "Gracias por contactar con M•ART Academy sobre:",
    response: "Nuestro equipo revisará su mensaje y le responderá en breve.",
    closing: "Agradecemos su interés y esperamos poder acompañarle.",

    footer: "TU CAMINO COMIENZA CON UNA INTENCIÓN.",
  },

  pt: {
    adminSubject: "Novo pedido de contacto",
    adminHeading: "Novo pedido recebido",

    userSubject: "Recebemos o seu pedido | M•ART Academy",
    emailTitle: "Pedido recebido",

    greeting: "Caro/a",
    intro: "Obrigado por contactar a M•ART Academy sobre:",
    response: "A nossa equipa irá analisar a sua mensagem e responder em breve.",
    closing: "Agradecemos a sua intenção e esperamos poder acompanhá-lo.",

    footer: "A SUA JORNADA COMEÇA COM INTENÇÃO.",
  },
};

/* =========================================
   VALIDATION
========================================= */

const contactSchema = z.object({
  locale: z.enum(["en", "fr", "es", "pt"]).default("en"),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  request: z.string().min(1),
  message: z.string().min(1),
});

/* =========================================
   API ROUTE
========================================= */

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const {
      locale,
      firstName,
      lastName,
      email,
      phone,
      request,
      message,
    } = parsed.data;

    const t = emailTranslations[locale];

    /* ===============================
       INTERNAL ADMIN EMAIL
    =============================== */

    await resend.emails.send({
      from: "M-Art Academy <contact@m-art.webtogo.pt>",
      to: ["contact@m-art.webtogo.pt"],
      subject: `${t.adminSubject} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background:#ffffff; padding:40px;">
          <h2 style="margin-bottom:24px;">${t.adminHeading}</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Request Type:</strong> ${request}</p>
          <p style="margin-top:24px;"><strong>Message:</strong></p>
          <p style="white-space:pre-line;">${message}</p>
        </div>
      `,
    });

    /* ===============================
       USER CONFIRMATION EMAIL
    =============================== */

    await resend.emails.send({
      from: "M-Art Academy <contact@m-art.webtogo.pt>",
      to: [email],
      subject: t.userSubject,
      html: generateUserEmailTemplate({
        firstName,
        request,
        locale,
      }),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

/* =========================================
   EMAIL TEMPLATE
========================================= */

function generateUserEmailTemplate({
  firstName,
  request,
  locale,
}: {
  firstName: string;
  request: string;
  locale: Locale;
}) {
  const t = emailTranslations[locale];

  return `
  <div style="margin:0; padding:0; background:#f5f5f5; font-family: Arial, Helvetica, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; margin:40px 0;">
            
            <!-- HEADER -->
            <tr>
              <td style="background:#F6F4F1; padding:32px 40px; text-align:center;">
                
                <img 
                src="https://m-art.webtogo.pt/logo_v2.png" 
                alt="M-ART Icon"
                width="60"
                style="display:block;margin:0 auto 6px auto;width:60px;height:auto;border:0;"
                />

                <div style="color:#222222;font-size:24px;letter-spacing:4px;text-transform:uppercase;font-weight:600;">
                  M•ART
                </div>

                <div style="color:#222222;margin-top:6px;font-size:12px;letter-spacing:2px;text-transform:uppercase;">
                  Geneva Makeup Academy
                </div>

              </td>
            </tr>

            <!-- BODY -->
            <tr>
              <td style="padding:40px;">
                
                <h2 style="margin:0 0 24px 0;font-size:20px;text-transform:uppercase;">
                  ${t.emailTitle}
                </h2>

                <p style="margin:0 0 16px 0; line-height:1.6;">
                  ${t.greeting} ${firstName},
                </p>

                <p style="margin:0 0 16px 0; line-height:1.6;">
                  ${t.intro}
                </p>

                <p style="margin:0 0 24px 0; font-weight:bold;">
                  ${request}
                </p>

                <p style="margin:0 0 16px 0; line-height:1.6;">
                  ${t.response}
                </p>

                <p style="margin:0 0 32px 0; line-height:1.6;">
                  ${t.closing}
                </p>

                <p style="margin:0; font-size:14px;">
                  M•ART Academy<br/>
                  Rue Centrale 12<br/>
                  1003 Geneva<br/>
                  Switzerland
                </p>

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="background:#050505;padding:24px 40px;color:#ffffff;font-size:12px;text-align:center;letter-spacing:1px;">
                ${t.footer}
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </div>
  `;
}