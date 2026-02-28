import ProgramHero from "@/components/programs/ProgramHero";
import InfoBand from "@/components/programs/InfoBand";
import ProgramIntro from "@/components/programs/ProgramIntro";
import DiplomaSelector from "@/components/programs/DiplomaSelector";
import ContentSection from "@/components/shared/ContentSection";
import YearNavigator from "@/components/programs/YearNavigator";
import SectionSlogan from "@/components/shared/SectionSlogan";
import { programData } from "@/data/programData";

export default function ProfessionalMakeupYear1Page() {
  const data = programData[1];

  return (
    <>
      <ProgramHero
        year={1}
        {...data.hero}
      />

      <InfoBand diploma={data.infoBand.diploma} />

      <ProgramIntro
        year={1}
        {...data.intro}
      />

      <DiplomaSelector currentYear={1} />

      {data.contentSections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}

      <YearNavigator currentYear={1} />

      <SectionSlogan />
    </>
  );
}