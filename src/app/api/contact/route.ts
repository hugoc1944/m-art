import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  request: z.string().min(1),
  message: z.string().min(1),
});

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

    const { firstName, lastName, email, phone, request, message } =
      parsed.data;

    /* ===============================
       INTERNAL ADMIN EMAIL
    =============================== */

    await resend.emails.send({
      from: "M-Art Academy <contact@m-art.webtogo.pt>",
      to: ["contact@m-art.webtogo.pt"],
      subject: `New Contact Enquiry - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background:#ffffff; padding:40px;">
          <h2 style="margin-bottom:24px;">New Enquiry Submission</h2>
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
      subject: "We’ve received your enquiry - M•ART Academy",
      html: generateUserEmailTemplate({
        firstName,
        request,
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
   CUSTOM BRANDED EMAIL TEMPLATE
========================================= */

function generateUserEmailTemplate({
  firstName,
  request,
}: {
  firstName: string;
  request: string;
}) {
  return `
  <div style="margin:0; padding:0; background:#f5f5f5; font-family: Arial, Helvetica, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; margin:40px 0;">
            
            <!-- HEADER -->
            <tr>
              <td style="background:#050505; padding:32px 40px; text-align:center;">
                
                <!-- Logo Icon -->
                <img 
                src="https://m-art.webtogo.pt/logo_v2.png" 
                alt="M-ART Icon"
                width="60"
                style="
                    display:block;
                    margin:0 auto 6px auto;
                    width:60px;
                    height:auto;
                    max-width:60px;
                    border:0;
                    outline:none;
                    text-decoration:none;
                "
                />

                <!-- Brand -->
                <div style="
                  color:#ffffff;
                  font-size:24px;
                  letter-spacing:4px;
                  text-transform:uppercase;
                  font-weight:600;
                  margin:0;
                ">
                  M•ART
                </div>

                <!-- Subheading -->
                <div style="
                  color:#ffffff;
                  margin-top:6px;
                  font-size:12px;
                  letter-spacing:2px;
                  text-transform:uppercase;
                ">
                  Geneva Makeup Academy
                </div>

              </td>
            </tr>

            <!-- BODY -->
            <tr>
              <td style="padding:40px;">
                
                <h2 style="
                  margin:0 0 24px 0;
                  font-size:20px;
                  text-transform:uppercase;
                ">
                  Enquiry Received
                </h2>

                <p style="margin:0 0 16px 0; line-height:1.6;">
                  Dear ${firstName},
                </p>

                <p style="margin:0 0 16px 0; line-height:1.6;">
                  Thank you for contacting M•ART Academy regarding:
                </p>

                <p style="margin:0 0 24px 0; font-weight:bold;">
                  ${request}
                </p>

                <p style="margin:0 0 16px 0; line-height:1.6;">
                  Our team will personally review your message and respond shortly.
                </p>

                <p style="margin:0 0 32px 0; line-height:1.6;">
                  We appreciate your intention and look forward to guiding you.
                </p>

                <p style="margin:0; font-size:14px;">
                  M•ART Academy<br/>
                  Rue Centrale 12<br/>
                  1003 Lausanne<br/>
                  Switzerland
                </p>

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="
                background:#050505;
                padding:24px 40px;
                color:#ffffff;
                font-size:12px;
                text-align:center;
                letter-spacing:1px;
              ">
                YOUR JOURNEY BEGINS WITH INTENTION.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </div>
  `;
}