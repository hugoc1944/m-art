import { notFound } from "next/navigation";
import { modulesData } from "@/data/modulesData";
import ModuleHero from "@/components/modules/ModuleHero";
import CTABand from "@/components/shared/CTABand";
import ModulePositioning from "@/components/modules/ModulePositioning";
import ModuleApproach from "@/components/modules/ModuleApproach";
import ModuleTechniques from "@/components/modules/ModuleTechniques";
import ModuleFramework from "@/components/modules/ModuleFramework";
import ModuleEthos from "@/components/modules/ModuleEthos";
import RelatedModules from "@/components/modules/RelatedModules";

interface ModulePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { slug } = await params;

  const module = modulesData.find(
    (item) => item.slug === slug
  );

  if (!module) {
    notFound();
  }

  return (
    <>
      {/* =========================================
          1. HERO
      ========================================= */}
      <ModuleHero
        title={module.title}
        duration={module.duration}
        shortDescription={module.shortDescription}
        backgroundImage={module.heroImage}
        heroPosition={module.heroPosition}
        />

      <ModulePositioning paragraphs={module.positioning} />
      {module.approach && <ModuleApproach paragraphs={module.approach} />}
      {module.techniques && <ModuleTechniques items={module.techniques} />}
      {module.framework && <ModuleFramework paragraphs={module.framework} />}
      {module.ethos && <ModuleEthos paragraphs={module.ethos} />}
      {/* =========================================
          3. CTA BAND
      ========================================= */}
      <CTABand
        heading="Request Further Information."
        description="Receive detailed structure, scheduling information, and enrollment guidance for this module."
        buttons={[
          {
            text: "→ Request Information",
            variant: "outline",
            link: `/contact?intent=meeting`,
          },
        ]}
        tone="dark"
      />

      <RelatedModules
        currentSlug={module.slug}
        modules={modulesData}
       />
    </>
  );
}