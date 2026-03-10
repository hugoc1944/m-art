import ContactHero from "@/sections/contact/ContactHero"
import ContactFormSection from "@/sections/contact/ContactFormSection"
import ContactInfoSection from "@/sections/contact/ContactInfoSection"
import SignatureBand from "@/components/shared/SignatureBand"

import { contactData } from "@/data/contactData"
import { Locale } from "@/i18n/config"

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  const { locale } = await params
  const query = await searchParams

  const data = contactData[locale]

  const intent =
    typeof query.intent === "string" ? query.intent : undefined

  const isMeeting = intent === "meeting"

  const heading = isMeeting
    ? data.hero.meetingHeading
    : data.hero.enquiryHeading

  const description = isMeeting
    ? data.hero.meetingDescription
    : data.hero.enquiryDescription

  return (
    <>
      <ContactHero
        heading={heading}
        description={description}
      />

      <ContactFormSection
      locale={locale}
      formCopy={data.form}
      defaultRequest={
        isMeeting
          ? data.form.meetingDefaultRequest
          : undefined
      }
      intent={intent}
    />

      <ContactInfoSection
        heading={data.info.heading}
        visit={data.info.visit}
        call={data.info.call}
        email={data.info.email}
      />

      <SignatureBand text={data.signature} />
    </>
  )
}