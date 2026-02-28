"use client";

import Image from "next/image";

export interface ContentSectionProps {
  heading: string;
  subheading?: string;
  bodyParagraphs?: string[];
  bulletPoints?: string[];
  image: string;
  imagePosition?: "left" | "right";
  backgroundColor?: "white" | "light-grey" | "black" | "transparent";
  textColor?: "white" | "black";
  closingStatement?: string;
  variant?: "split" | "overlay";
}

export default function ContentSection({
  heading,
  subheading,
  bodyParagraphs = [],
  bulletPoints = [],
  image,
  imagePosition = "right",
  backgroundColor = "white",
  textColor = "black",
  closingStatement,
  variant = "split",
}: ContentSectionProps) {
  const isImageLeft = imagePosition === "left";

/* =========================================================
   OVERLAY VARIANT — FULL WIDTH IMAGE + TEXT RIGHT
========================================================= */
if (variant === "overlay") {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[700px] md:h-[680px] sm:h-auto">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-[center_30%] sm:bg-[center]"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Mobile Overlay Layer (ONLY mobile) */}
        <div className="absolute inset-0 bg-white/70 sm:bg-transparent md:bg-transparent" />

        {/* RIGHT TEXT BLOCK */}
        <div className="relative z-10 h-full flex items-center justify-end sm:justify-center md:justify-end md:mr-20">

          <div
            className="
              w-full max-w-[620px]
              pr-[8%] md:pr-[40px]
              
              sm:mr-0
              sm:px-6
              sm:py-20
            "
          >

            <h2 className="
              heading-lg text-[#050505]
              mb-8
              max-w-[560px]
              sm:max-w-full
            ">
              {heading}
            </h2>

            <div className="pl-6 md:pl-8 sm:pl-0">
              {bodyParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="
                    body-standard text-[#050505]
                    mb-4
                    leading-[1.45]
                  "
                >
                  {p}
                </p>
              ))}

              {closingStatement && (
                <p className="label-accent text-[#050505] mt-6">
                  {closingStatement}
                </p>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

  /* =========================================================
     SPLIT VARIANT (UNCHANGED)
  ========================================================= */

  const bgClass =
    backgroundColor === "light-grey"
      ? "bg-[#f7f6f3]"
      : backgroundColor === "black"
      ? "bg-[#050505]"
      : backgroundColor === "transparent"
      ? "bg-transparent"
      : "bg-white";

  const textClass =
    textColor === "white" ? "text-white" : "text-[#23252b]";

  return (
    <section className={`w-full ${bgClass}`}>
      <div className="grid md:grid-cols-2">

        {/* IMAGE */}
        <div
          className={`
            relative min-h-[300px] md:min-h-[500px]
            ${isImageLeft ? "md:order-1" : "md:order-2"}
          `}
        >
          <Image
            src={image}
            alt={heading}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div
          className={`
            flex items-center
            ${isImageLeft ? "md:order-2" : "md:order-1"}
          `}
        >
          <div className="px-6 py-12 md:px-16 md:py-20 max-w-[640px]">

            <h2 className={`heading-lg mb-6 ${textClass}`}>
              {heading}
            </h2>

            {subheading && (
              <h3 className={`ui-nav mb-6 ${textClass}`}>
                {subheading}
              </h3>
            )}

            {bodyParagraphs.map((p, i) => (
              <p key={i} className={`body-standard mb-4 ${textClass}`}>
                {p}
              </p>
            ))}

            {bulletPoints.length > 0 && (
              <ul className={`body-standard list-disc ml-6 space-y-2 mt-4 ${textClass}`}>
                {bulletPoints.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}

            {closingStatement && (
              <p className={`label-accent mt-6 ${textClass}`}>
                {closingStatement}
              </p>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}