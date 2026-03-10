"use client";

import Image from "next/image";

interface FieldsOfStudySectionProps {
  heading: string
  fields: string[]
}

export default function FieldsOfStudySection({
  heading,
  fields,
}: FieldsOfStudySectionProps) {
  return (
    <section className="pt-6 md:pt-16">

      {/* ================= HEADING ================= */}
      <h2
        className="
          text-[#23252b] font-bold italic uppercase text-center

          text-[24px]
          tracking-[-0.48px]
          px-5
          mb-6

          md:text-[28px]
          md:tracking-[-0.56px]
          md:px-6
          md:mb-8

          lg:text-[36px]
          lg:tracking-[-0.72px]
          lg:px-0
          lg:mb-6
        "
      >
        {heading}
      </h2>

      {/* ================= GRID ================= */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {fields.map((field, i) => (
          <div
            key={field}
            className="
              relative
              h-[240px]
              md:h-[280px]
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

            <div
              className="
                absolute inset-0
                bg-black/30
                lg:bg-black/20
              "
            />

            <div
              className="
                absolute inset-0
                flex items-center justify-center
                text-white text-center
                font-bold italic uppercase

                text-[24px]
                tracking-[-0.4px]
                leading-[1.15]
                px-5

                md:text-[22px]
                md:tracking-[-0.44px]
                md:px-4

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