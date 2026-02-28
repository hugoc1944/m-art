
import ContactHero from "@/sections/contact/ContactHero";
import ContactFormSection from "@/sections/contact/ContactFormSection";
import ContactInfoSection from "@/sections/contact/ContactInfoSection";
import SignatureBand from "@/components/shared/SignatureBand";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const intent =
    typeof params.intent === "string" ? params.intent : undefined;

  const isMeeting = intent === "meeting";

  const heading = isMeeting
    ? "REQUEST AN INFORMATION MEETING"
    : "ENQUIRIES & ADMISSIONS";

  const description = isMeeting
    ? "Schedule a personal information meeting with our team to explore the academy, programs, and admissions process."
    : "Whether you're exploring our programs or preparing your application, we're here to guide you. Share your details and we will contact you personally.";

  return (
    <>
      <ContactHero heading={heading} description={description} />

      <ContactFormSection
        defaultRequest={
          isMeeting ? "Request an Information Meeting" : undefined
        }
        intent={intent}
      />

      <ContactInfoSection
        visit={{
          title: "Visit Us",
          lines: [
            "M·ART Geneva Makeup Academy",
            "Rue Centrale 12, 1003 Geneva",
            "Switzerland",
          ],
        }}
        call={{
          title: "Call Us",
          lines: [
            "Phone number: +41 21 555 48 72",
            "Monday to Friday 9:00 AM – 6:00 PM",
          ],
        }}
        email={{
          title: "Email Us",
          lines: [
            "General enquiries: info@ecoledemaquillage.ch",
            "Admissions: admissions@ecoledemaquillage.ch",
          ],
        }}
      />

      <SignatureBand text="Shaping excellence, revealing signatures, preparing the future." />
    </>
  );
}