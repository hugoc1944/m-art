import AcademyHero from "@/components/academy/AcademyHero"
import CTABand from "@/components/shared/CTABand"
import ContentSection from "@/components/shared/ContentSection"
import TeacherGrid from "@/components/academy/TeacherGrid"
import SectionSlogan from "@/components/shared/SectionSlogan"

import { academyData } from "@/data/academy"
import { homeData } from "@/data/homeData"
import { Locale } from "@/i18n/config"

export default async function TheAcademyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {

  const { locale } = await params

  const data = academyData[locale]
  const home = homeData[locale]

  return (
    <>
      {/* =========================================
          1. HERO
      ========================================= */}
      <AcademyHero {...data.hero} />

      {/* =========================================
          2. CTA BAND — EXPERIENCE THE MÉTIER
      ========================================= */}
      <CTABand
        heading={data.ctaBand1.heading}
        buttons={data.ctaBand1.buttons}
      />

      {/* =========================================
          3–5. CONTENT SECTIONS
      ========================================= */}
      {data.sections.map((section, index) => (
        <ContentSection
          key={index}
          {...section}
        />
      ))}

      {/* =========================================
          6. CTA BAND — TEACHERS
      ========================================= */}
      <CTABand
        heading={data.teachersBand.heading}
        buttons={[]}
      />

      {/* =========================================
          7. TEACHERS
      ========================================= */}
      <TeacherGrid teachers={data.teachers} />

      {/* =========================================
          8. SLOGAN
      ========================================= */}
      <SectionSlogan slogan={home.slogan} />
    </>
  )
}