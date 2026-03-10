import { modulesData } from "@/data/modules";
import ModulesHero from "@/components/modules/ModulesHero";
import ModulesIntro from "@/components/modules/ModulesIntro";
import ModulesGrid from "@/components/modules/ModulesGrid";
import CTABand from "@/components/shared/CTABand";

interface ModulesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ModulesPage({ params }: ModulesPageProps) {
  const { locale } = await params;

  const data = modulesData[locale as keyof typeof modulesData];

  if (!data) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  return (
    <>
      {/* HERO */}
      <ModulesHero
        backgroundImage={data.page.hero.backgroundImage}
        title={data.page.hero.title}
        description={data.page.hero.description}
        buttonLabel={data.page.hero.buttonLabel}
      />

      {/* INTRO */}
      <ModulesIntro
        heading={data.page.intro.heading}
        paragraphs={data.page.intro.paragraphs}
      />

      {/* GRID */}
      <ModulesGrid
        modules={data.modules}
        locale={locale}
        cardLabel={data.page.ui.buttons.viewModule}
      />

      {/* CTA */}
      <CTABand
        heading={data.page.cta.heading}
        description={data.page.cta.description}
        buttons={[
          {
            text: `→ ${data.page.cta.buttonLabel}`,
            variant: "outline",
            link: `/contact?intent=meeting`,
          },
        ]}
        tone="dark"
      />
    </>
  );
}