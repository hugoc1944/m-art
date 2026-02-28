import ProgramHero from "@/components/programs/ProgramHero";
import InfoBand from "@/components/programs/InfoBand";
import ProgramIntro from "@/components/programs/ProgramIntro";
import DiplomaSelector from "@/components/programs/DiplomaSelector";
import ContentSection from "@/components/shared/ContentSection";
import FullWidthTextSection from "@/components/programs/FullWidthTextSection";
import YearNavigator from "@/components/programs/YearNavigator";
import SectionSlogan from "@/components/shared/SectionSlogan";
import { programData } from "@/data/programData";

export default function ProfessionalMakeupYear3Page() {
  const data = programData[3];

  const splitSections = data.contentSections.slice(0, 3);
  const finalSection = data.contentSections[3];

  return (
    <>
      <ProgramHero year={3} {...data.hero} />

      <InfoBand diploma={data.infoBand.diploma} />

      <ProgramIntro year={3} {...data.intro} />

      <DiplomaSelector currentYear={3} />

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

      <YearNavigator currentYear={3} />

      <SectionSlogan />
    </>
  );
}