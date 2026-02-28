interface SignatureBandProps {
  text: string;
}

export default function SignatureBand({ text }: SignatureBandProps) {
  return (
    <section className="w-full bg-[var(--color-warm-black)] py-[var(--space-6)]">
      <div className="container">
        <div className="max-w-[620px]">
          <p className="heading-sm italic uppercase text-[var(--color-white)] leading-[1.1]">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}