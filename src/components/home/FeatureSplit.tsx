"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

interface FeatureSplitProps {
  imageLeft?: boolean;
  imageSrc: string;
  title: React.ReactNode;
  paragraphs: string[];
  buttonLabel: string;
  buttonHref: string;
}

export default function FeatureSplit({
  imageLeft = true,
  imageSrc,
  title,
  paragraphs,
  buttonLabel,
  buttonHref,
}: FeatureSplitProps) {
  return (
    <section
      className="
        w-full
        flex flex-col               /* Mobile default */
        md:flex-row                 /* Tablet side-by-side */
        lg:flex                     /* Desktop unchanged */
        h-auto
        md:h-[380px]                /* Tablet height */
        lg:h-[469px]                /* Desktop height EXACT */
      "
    >
      {/* ================= IMAGE ================= */}
      <div
        className={`
          relative
          w-full
          h-[300px]                 /* Mobile image height */
          md:h-full
          md:w-[45%]                /* Tablet 45% */
          lg:w-1/2                  /* Desktop EXACT 50% */
          ${imageLeft ? "md:order-1" : "md:order-2"}
          ${imageLeft ? "lg:order-1" : "lg:order-2"}
        `}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="(max-width:768px) 100vw, (max-width:1024px) 45vw, 50vw"
          className="object-cover object-center"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className={`
          bg-black text-white
          w-full
          px-6 py-10                /* Mobile padding */
          flex flex-col
          justify-center
          items-start               /* Mobile left aligned */
          text-left
          md:h-full
          md:w-[55%]                /* Tablet 55% */
          md:px-10
          md:items-center
          md:text-center
          lg:w-1/2                  /* Desktop EXACT 50% */
          lg:px-20
          lg:items-center
          lg:text-center
          ${imageLeft ? "md:order-2" : "md:order-1"}
          ${imageLeft ? "lg:order-2" : "lg:order-1"}
        `}
      >
        {/* Heading */}
        <h3
          className="
            text-[18px]                         /* Mobile */
            tracking-[-0.36px]
            italic font-bold uppercase
            mb-4
            md:text-[20px] md:tracking-[-0.4px]
            lg:text-[24px] lg:tracking-[-0.48px]
          "
        >
          {title}
        </h3>

        {/* Paragraphs */}
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="
              text-[14px]
              font-medium
              tracking-[-0.28px]
              leading-[1.4]                      /* Mobile readability */
              mb-[14px]
              md:text-[13px] md:leading-[1.05] md:mb-[12px] md:max-w-[300px]
              lg:text-[14px] lg:leading-[1.15] lg:max-w-[335px]
            "
          >
            {p}
          </p>
        ))}

        {/* Button */}
        <div className="mt-6 w-full md:w-auto">
          <Button
            href={buttonHref}
            variant="solid"
            tone="light"
            size="sm"
            className="
              w-full h-[48px]                 /* Mobile touch target */
              md:w-[180px] md:h-[39px]        /* Tablet */
              lg:w-auto                       /* Desktop default */
            "
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}