interface Props {
  paragraphs: string[];
}

export default function ModuleFramework({ paragraphs }: Props) {
  return (
    <section className="bg-[var(--color-deep-charcoal)] text-white section-padding">
      <div className="container-narrow">

        <h3 className="heading-md uppercase mb-[var(--space-8)]">
          Professional Framework
        </h3>

        <div className="body-standard space-y-[var(--space-6)] text-white/90">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

      </div>
    </section>
  );
}