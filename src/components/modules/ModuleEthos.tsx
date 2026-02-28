interface Props {
  paragraphs: string[];
}

export default function ModuleEthos({ paragraphs }: Props) {
  return (
    <section className="bg-white section-padding">
      <div className="container-narrow">

        <h3 className="heading-md uppercase mb-[var(--space-8)]">
          A Safe & Confidential Environment
        </h3>

        <div className="body-standard space-y-[var(--space-6)]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

      </div>
    </section>
  );
}