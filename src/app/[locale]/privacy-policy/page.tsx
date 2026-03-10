import { notFound } from "next/navigation"
import LegalPageLayout from "@/components/legal/LegalPageLayout"
import { legalData } from "@/data/legal"
import { Locale } from "@/i18n/config"

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {

  const { locale } = await params

  const data = legalData[locale]?.privacyPolicy

  if (!data) {
    notFound()
  }

  return (
    <LegalPageLayout
      title={data.title}
      breadcrumbLabel={data.breadcrumbLabel}
      intro={data.intro}
      sections={data.sections}
    />
  )
}