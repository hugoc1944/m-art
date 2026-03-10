interface Props {
  paragraphs: string[];
  title: string;
  eyebrow: string;
}

export default function ModuleApproach({
  paragraphs,
  title,
  eyebrow,
}: Props) {
  return (
    <section className="bg-[var(--color-editorial-white)] section-padding">
      <div className="container">

        <div className="grid md:grid-cols-[1fr_auto_1.2fr] gap-[var(--space-12)] items-start">

          {/* LEFT COLUMN */}
          <div>

            <div className="label-eyebrow mb-[var(--space-4)]">
              {eyebrow}
            </div>

            <h3 className="heading-lg uppercase">
              {title}
            </h3>

          </div>

          {/* DIVIDER */}
          <div className="hidden md:block w-px bg-[var(--color-deep-charcoal)] opacity-20 h-full" />

          {/* CONTENT */}
          <div className="body-standard space-y-[var(--space-6)]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}