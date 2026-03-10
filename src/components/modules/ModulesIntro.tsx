"use client";

interface ModulesIntroProps {
  heading: string;
  paragraphs: string[];
}

export default function ModulesIntro({
  heading,
  paragraphs,
}: ModulesIntroProps) {
  return (
    <section className="w-full bg-white section-padding">
      <div className="container-narrow">

        <h2 className="heading-lg text-[var(--color-warm-black)] mb-[var(--space-6)]">
          {heading}
        </h2>

        <div className="space-y-[var(--space-4)] body-standard text-[var(--color-warm-black)]">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

      </div>
    </section>
  );
}