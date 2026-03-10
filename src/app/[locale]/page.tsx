import { homeData } from "@/data/homeData"
import { Locale } from "@/i18n/config"

import Hero from "@/components/home/Hero"
import SectionSlogan from "@/components/shared/SectionSlogan"
import FeatureSplit from "@/components/home/FeatureSplit"
import PassionBand from "@/components/home/PassionBand"
import PortfolioSection from "@/components/home/PortfolioSection"
import FieldsOfStudySection from "@/components/home/FieldsOfStudySection"
import CTABand from "@/components/shared/CTABand"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {

  const { locale } = await params
  const data = homeData[locale]

  const localized = (path: string) => `/${locale}${path}`

  return (
    <>
      <Hero
        headline={data.hero.headline}
        subheadline={data.hero.subheadline}
      />

      <SectionSlogan slogan={data.slogan} />

      <FeatureSplit
        imageLeft
        imageSrc="/home_the_program.jpg"
        title={data.programFeature.title}
        paragraphs={data.programFeature.paragraphs}
        buttonLabel={data.programFeature.buttonLabel}
        buttonHref={localized("/programs")}
      />

      <FeatureSplit
        imageLeft={false}
        imageSrc="/home_about.jpg"
        title={data.academyFeature.title}
        paragraphs={data.academyFeature.paragraphs}
        buttonLabel={data.academyFeature.buttonLabel}
        buttonHref={localized("/the-academy")}
      />

      <PassionBand text={data.passionBand.text} />

      <PortfolioSection
        title={data.portfolio.title}
        description={data.portfolio.description}
        bullets={data.portfolio.bullets}
        button={data.portfolio.button}
        buttonHref={localized("/students")}
      />

      <FieldsOfStudySection
        heading={data.fieldsOfStudy.heading}
        fields={data.fieldsOfStudy.fields}
      />

      <CTABand
        tone="dark"
        heading={data.cta.heading}
        description={data.cta.description}
        buttons={[
          {
            text: data.cta.buttons.learnMore,
            variant: "solid",
            link: "/programs",
          },
          {
            text: data.cta.buttons.meeting,
            variant: "outline",
            link: "/contact?intent=meeting",
          },
        ]}
      />
    </>
  )
}