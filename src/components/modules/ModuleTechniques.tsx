interface Props {
  items: string[];
}

export default function ModuleTechniques({ items }: Props) {
  return (
    <section className="bg-white section-padding">
      <div className="container-narrow">

        <h3 className="heading-md uppercase mb-[var(--space-8)]">
          Techniques May Include
        </h3>

        <ul className="space-y-[var(--space-4)] body-standard">
          {items.map((item, i) => (
            <li key={i} className="flex gap-[var(--space-4)]">
              <span className="opacity-40">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}