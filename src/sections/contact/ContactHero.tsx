import { ReactNode } from "react";

interface ContactHeroProps {
  heading: string;
  description: string;
}

export default function ContactHero({
  heading,
  description,
}: ContactHeroProps) {
  return (
    <section className="w-full bg-[var(--color-editorial-white)] section-padding">
      <div className="container">
        <div className="flex flex-col gap-[var(--space-6)]">
          
          <h1 className="heading-xl uppercase">
            {heading}
          </h1>

          <p className="body-standard text-[var(--color-deep-charcoal)] max-w-prose">
            {description}
          </p>

        </div>
      </div>
    </section>
  );
}