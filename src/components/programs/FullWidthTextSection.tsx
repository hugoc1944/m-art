"use client";

interface FullWidthTextSectionProps {
  heading: string;
  bodyParagraphs?: string[];
  bulletPoints?: string[];
  closingStatement?: string;
  backgroundColor?: "white" | "light-grey";
}

export default function FullWidthTextSection({
  heading,
  bodyParagraphs = [],
  bulletPoints = [],
  closingStatement,
  backgroundColor = "light-grey",
}: FullWidthTextSectionProps) {
  return (
    <section
      className={`w-full ${
        backgroundColor === "light-grey"
          ? "bg-[#f7f6f3]"
          : "bg-white"
      }`}
    >
      <div className="container">

        <div className="max-w-[820px] mx-auto px-6 py-16 md:py-20">

          <h2 className="heading-lg text-[#23252b] mb-8 text-left">
            {heading}
          </h2>

          {bodyParagraphs.map((p, i) => (
            <p key={i} className="body-standard text-[#23252b] mb-4">
              {p}
            </p>
          ))}

          {bulletPoints.length > 0 && (
            <ul className="body-standard list-disc ml-6 space-y-2 mt-6">
              {bulletPoints.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}

          {closingStatement && (
            <p className="label-accent text-[#23252b] mt-8">
              {closingStatement}
            </p>
          )}

        </div>
      </div>
    </section>
  );
}