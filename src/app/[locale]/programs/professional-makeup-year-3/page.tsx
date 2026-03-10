import ProgramHero from "@/components/programs/ProgramHero"
import InfoBand from "@/components/programs/InfoBand"
import ProgramIntro from "@/components/programs/ProgramIntro"
import DiplomaSelector from "@/components/programs/DiplomaSelector"
import ContentSection from "@/components/shared/ContentSection"
import FullWidthTextSection from "@/components/programs/FullWidthTextSection"
import YearNavigator from "@/components/programs/YearNavigator"
import SectionSlogan from "@/components/shared/SectionSlogan"

import { programData } from "@/data/programs"
import { homeData } from "@/data/homeData"
import { Locale } from "@/i18n/config"

export default async function ProfessionalMakeupYear3Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {

  const { locale } = await params

  const data = programData[locale].years[3]
  const year1 = programData[locale].years[1] // shared diploma selector
  const home = homeData[locale]

  const splitSections = data.contentSections.slice(0, 3)
  const finalSection = data.contentSections[3]

  return (
    <>
      <ProgramHero year={3} {...data.hero} />

      <InfoBand items={data.infoBand.items} />

      <ProgramIntro year={3} {...data.intro} />

      <DiplomaSelector
        currentYear={3}
        heading={year1.diplomaSelector!.heading}
        years={year1.diplomaSelector!.years}
      />

      {splitSections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}

      <FullWidthTextSection
        heading={finalSection.heading}
        bodyParagraphs={finalSection.bodyParagraphs}
        bulletPoints={finalSection.bulletPoints}
        closingStatement={finalSection.closingStatement}
        backgroundColor="light-grey"
      />

      <YearNavigator
        currentYear={3}
        yearLabel={data.yearNavigation.yearLabel}
      />

      <SectionSlogan slogan={home.slogan} />
    </>
  )
}