interface Props {
  paragraphs: string[];
}

export default function ModulePositioning({ paragraphs }: Props) {
  return (
    <section className="bg-white section-padding">
      <div className="container-narrow">

        <h2 className="heading-lg mb-[var(--space-8)]">
          MODULE OVERVIEW
        </h2>

        <div className="body-intro space-y-[var(--space-6)]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

      </div>
    </section>
  );
}