interface Props {
  paragraphs: string[];
  title: string;
}

export default function ModulePositioning({
  paragraphs,
  title,
}: Props) {
  return (
    <section className="bg-white section-padding">
      <div className="container-narrow">

        <h2 className="heading-lg mb-[var(--space-8)]">
          {title}
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