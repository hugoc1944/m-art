import ModulesHero from "@/components/modules/ModulesHero";
import ModulesIntro from "@/components/modules/ModulesIntro";
import ModulesGrid from "@/components/modules/ModulesGrid";
import CTABand from "@/components/shared/CTABand";

export default function ModulesPage() {
  return (
    <>
      {/* =========================================
          1. HERO
      ========================================= */}
      <ModulesHero backgroundImage="/module_hero.jpg" />

      {/* =========================================
          2. INTRO
      ========================================= */}
      <ModulesIntro />

      {/* =========================================
          3. GRID
      ========================================= */}
      <ModulesGrid />

      {/* =========================================
          4. CTA BAND
      ========================================= */}
      <CTABand
        heading="Refine Your Expertise."
        description="Targeted professional intensives designed to deepen technical mastery and expand creative authority."
        buttons={[
          {
            text: "→ Request Information",
            variant: "outline",
            link: "/contact?intent=modules",
          },
        ]}
        tone="dark"
      />
    </>
  );
}