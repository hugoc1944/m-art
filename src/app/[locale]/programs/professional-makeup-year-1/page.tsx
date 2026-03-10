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

export default async function ProfessionalMakeupYear1Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {

  const { locale } = await params

  const data = programData[locale].years[1]
  const home = homeData[locale]

  return (
    <>
      <ProgramHero year={1} {...data.hero} />

      <InfoBand items={data.infoBand.items} />

      <ProgramIntro year={1} {...data.intro} />

      <DiplomaSelector
        currentYear={1}
        heading={data.diplomaSelector!.heading}
        years={data.diplomaSelector!.years}
      />

      {data.contentSections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}

      <YearNavigator
        currentYear={1}
        yearLabel={data.yearNavigation.yearLabel}
      />

      <SectionSlogan slogan={home.slogan} />
    </>
  )
}