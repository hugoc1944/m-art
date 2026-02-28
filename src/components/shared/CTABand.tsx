"use client";

import Button from "@/components/ui/Button";

export interface CTAButton {
  text: string;
  variant: "solid" | "outline";
  link: string;
}

export interface CTABandProps {
  heading: string;
  description?: string;
  buttons?: CTAButton[];
  tone?: "dark" | "light";
}

export default function CTABand({
  heading,
  description,
  buttons = [],
  tone = "light",
}: CTABandProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={`
        w-full
        ${isDark ? "bg-[#23252b] text-white" : "bg-white text-[#050505]"}
        py-8 md:py-6 lg:py-6
      `}
    >
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* ================= LEFT SIDE (HEADING ONLY) ================= */}
        <div className="text-center md:text-left">
          <h2
            className="
              font-bold italic uppercase
              text-[28px] md:text-[36px] lg:text-[42px]
              tracking-[-0.72px]
            "
          >
            {heading}
          </h2>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        {(description || buttons.length > 0) && (
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[520px]">

            {/* Description ABOVE buttons */}
            {description && (
              <p
                className={`
                  text-[15px] md:text-[16px]
                  leading-[1.5]
                  mb-4
                  ${isDark ? "text-white/80" : "text-[#23252b]"}
                `}
              >
                {description}
              </p>
            )}

            {/* Buttons */}
            {buttons.length > 0 && (
              <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">

                {buttons.map((btn, index) => (
                  <Button
                    key={index}
                    href={btn.link}
                    variant={btn.variant}
                    tone={isDark ? "light" : "dark"}
                    size="sm"
                    className="w-full md:w-auto md:min-w-[200px] sm:h-[48px]"
                  >
                    {btn.text}
                  </Button>
                ))}

              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}