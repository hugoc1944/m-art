import AcademyHero from "@/components/academy/AcademyHero";
import CTABand from "@/components/shared/CTABand";
import ContentSection from "@/components/shared/ContentSection";
import TeacherGrid from "@/components/academy/TeacherGrid";
import SectionSlogan from "@/components/shared/SectionSlogan";
import { academyContent } from "@/data/academyData";

export default function TheAcademyPage() {
  return (
    <>
      {/* =========================================
          1. HERO
      ========================================= */}
      <AcademyHero {...academyContent.hero} />

      {/* =========================================
          2. CTA BAND — EXPERIENCE THE MÉTIER
      ========================================= */}
      <CTABand
        heading={academyContent.ctaBand1.heading}
        buttons={academyContent.ctaBand1.buttons}
      />

      {/* =========================================
          3–5. CONTENT SECTIONS
      ========================================= */}
      {academyContent.sections.map((section, index) => (
        <ContentSection
          key={index}
          {...section}
        />
      ))}

      {/* =========================================
          6. CTA BAND — TEACHERS
      ========================================= */}
      <CTABand
        heading="The Vision Behind M·ART"
        buttons={[]}
      />

      {/* =========================================
          7. TEACHER GRID
      ========================================= */}
      <TeacherGrid teachers={academyContent.teachers} />

      {/* =========================================
          8. SLOGAN SECTION (Reuse)
      ========================================= */}
      <SectionSlogan />
    </>
  );
}