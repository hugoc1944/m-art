"use client";

import Image from "next/image";

const fields = [
  "FASHION & BEAUTY",
  "SOCIAL MEDIA & CONTENT",
  "THEATRE & FILM",
  "LUXURY COSMETICS",
  "EVENTS & WEDDINGS",
  "FREELANCE & INDEPENDENT ARTISTRY",
];

export default function FieldsOfStudySection() {
  return (
    <section className="pt-6 md:pt-16">
      {/* ================= HEADING ================= */}
      <h2
        className="
          text-[#23252b] font-bold italic uppercase text-center

          /* Mobile */
          text-[24px]
          tracking-[-0.48px]
          px-5
          mb-6

          /* Tablet */
          md:text-[28px]
          md:tracking-[-0.56px]
          md:px-6
          md:mb-8

          /* Desktop (restore original) */
          lg:text-[36px]
          lg:tracking-[-0.72px]
          lg:px-0
          lg:mb-6
        "
      >
        Our fields of study
      </h2>

      {/* ================= GRID ================= */}
      <div
        className="
          grid

          /* Mobile */
          grid-cols-1

          /* Tablet */
          md:grid-cols-2

          /* Desktop (restore original) */
          lg:grid-cols-3
        "
      >
        {fields.map((field, i) => (
          <div
            key={field}
            className="
              relative

              /* Mobile */
              h-[240px]

              /* Tablet */
              md:h-[280px]

              /* Desktop (restore original) */
              lg:h-[272px]
            "
          >
            <Image
              src={`/fields_${i + 1}.png`}
              alt=""
              fill
              sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
              className="object-cover object-center"
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0

                /* Mobile stronger contrast */
                bg-black/30

                /* Desktop original */
                lg:bg-black/20
              "
            />

            {/* Label */}
            <div
              className="
                absolute inset-0
                flex items-center justify-center
                text-white text-center
                font-bold italic uppercase

                /* Mobile */
                text-[24px]
                tracking-[-0.4px]
                leading-[1.15]
                px-5

                /* Tablet */
                md:text-[22px]
                md:tracking-[-0.44px]
                md:px-4

                /* Desktop (restore original) */
                lg:text-[32px]
                lg:tracking-[-0.64px]
                lg:px-6
              "
            >
              {field}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}