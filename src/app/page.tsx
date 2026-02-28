import Hero from "@/components/home/Hero";
import SectionSlogan from "@/components/shared/SectionSlogan";
import FeatureSplit from "@/components/home/FeatureSplit";
import PassionBand from "@/components/home/PassionBand";
import PortfolioSection from "@/components/home/PortfolioSection";
import FieldsOfStudySection from "@/components/home/FieldsOfStudySection";
import CTABand from "@/components/shared/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionSlogan />

      <FeatureSplit
        imageLeft
        imageSrc="/home_the_program.jpg"
        title={
          <>
            The 3-Year <br />
            Professional Makeup Program
          </>
        }
        paragraphs={[
          "A progressive academic journey structured across three distinct years - Foundations, Advanced Mastery, and Educator & Trainer.",
          "Each year functions as an independent diploma, allowing artists to begin, advance, or specialize according to their rhythm and professional goals.",
          "Built with precision and grounded in real industry experience, the program develops technical excellence, artistic identity, and long-term professional confidence."
        ]}
        buttonLabel="→ Explore the 3-Year Program"
        buttonHref="/programs"
      />

      <FeatureSplit
        imageLeft={false}
        imageSrc="/home_about.jpg"
        title={
          <>
            A DIFFERENT KIND OF<br />
            MAKEUP ACADEMY
          </>
        }
        paragraphs={[
          "M·ART was created to unite excellence with inclusivity - a space where discipline and creativity grow side by side.",
          "Here, makeup is taught as a complete profession, guided by industry-active educators and rooted in the realities of the field - open to beginners, self-taught artists, and professionals in evolution."
        ]}
        buttonLabel="→ Discover Our Academy"
        buttonHref="/the-academy"
      />

      <PassionBand />
      <PortfolioSection />
      <FieldsOfStudySection />

      <CTABand
        tone="dark"
        heading="SEPTEMBER INTAKE"
        description="Applications are open for the upcoming academic year. Limited places ensure a focused, supportive, and demanding learning environment."
        buttons={[
          { text: "→ Learn More", variant: "solid", link: "/programs" },
          {
            text: "→ Schedule an Information Meeting",
            variant: "outline",
            link: "/contact?intent=meeting",
          },
        ]}
      />
    </>
  );
}