import ProgramHero from "@/components/programs/ProgramHero"
import InfoBand from "@/components/programs/InfoBand"
import ProgramIntro from "@/components/programs/ProgramIntro"
import DiplomaSelector from "@/components/programs/DiplomaSelector"
import ContentSection from "@/components/shared/ContentSection"
import YearNavigator from "@/components/programs/YearNavigator"
import SectionSlogan from "@/components/shared/SectionSlogan"

import { programData } from "@/data/programs"
import { homeData } from "@/data/homeData"
import { Locale } from "@/i18n/config"

export default async function ProfessionalMakeupYear2Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {

  const { locale } = await params

  const data = programData[locale].years[2]
  const year1 = programData[locale].years[1] // shared diploma selector
  const home = homeData[locale]

  return (
    <>
      <ProgramHero year={2} {...data.hero} />

      <InfoBand items={data.infoBand.items} />

      <ProgramIntro year={2} {...data.intro} />

      <DiplomaSelector
        currentYear={2}
        heading={year1.diplomaSelector!.heading}
        years={year1.diplomaSelector!.years}
      />

      {data.contentSections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}

      <YearNavigator
        currentYear={2}
        yearLabel={data.yearNavigation.yearLabel}
      />

      <SectionSlogan slogan={home.slogan} />
    </>
  )
}