import { notFound } from "next/navigation";
import { modulesData } from "@/data/modules";

import ModuleHero from "@/components/modules/ModuleHero";
import ModulePositioning from "@/components/modules/ModulePositioning";
import ModuleApproach from "@/components/modules/ModuleApproach";
import ModuleTechniques from "@/components/modules/ModuleTechniques";
import ModuleFramework from "@/components/modules/ModuleFramework";
import ModuleEthos from "@/components/modules/ModuleEthos";

import RelatedModules from "@/components/modules/RelatedModules";
import CTABand from "@/components/shared/CTABand";

interface ModulePageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { locale, slug } = await params;

  const data = modulesData[locale as keyof typeof modulesData];

  if (!data) {
    notFound();
  }

  const module = data.modules.find(
    (item) => item.slug === slug
  );

  if (!module) {
    notFound();
  }

  const ui = data.page.ui;

  return (
    <>
      {/* HERO */}

      <ModuleHero
        title={module.title}
        duration={module.duration}
        shortDescription={module.shortDescription}
        backgroundImage={module.heroImage}
        heroPosition={module.heroPosition}
        locale={locale}
        labels={{
          home: ui.breadcrumb.home,
          modules: ui.breadcrumb.modules,
          module: ui.breadcrumb.module,
          requestInfo: ui.buttons.requestInfo,
        }}
      />

      {/* MODULE CONTENT */}

      <ModulePositioning
        paragraphs={module.positioning}
        title={ui.moduleSections.overview}
      />

      {module.approach && (
        <ModuleApproach
          paragraphs={module.approach}
          title={ui.moduleSections.approachTitle}
          eyebrow={ui.moduleSections.approachEyebrow}
        />
      )}

      {module.techniques && (
        <ModuleTechniques
          items={module.techniques}
          title={ui.moduleSections.techniques}
        />
      )}

      {module.framework && (
        <ModuleFramework
          paragraphs={module.framework}
          title={ui.moduleSections.framework}
        />
      )}

      {module.ethos && (
        <ModuleEthos
          paragraphs={module.ethos}
          title={ui.moduleSections.ethos}
        />
      )}

      {/* CTA */}

      <CTABand
        heading={data.page.moduleCta.heading}
        description={data.page.moduleCta.description}
        buttons={[
          {
            text: `→ ${data.page.moduleCta.buttonLabel}`,
            variant: "outline",
            link: `/contact?intent=meeting`,
          },
        ]}
        tone="dark"
      />

      {/* RELATED MODULES */}

      <RelatedModules
        currentSlug={module.slug}
        modules={data.modules}
        locale={locale}
        eyebrow={data.page.relatedModules.eyebrow}
        title={data.page.relatedModules.title}
        cardLabel={ui.buttons.viewModule}
      />
    </>
  );
}