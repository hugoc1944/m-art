"use client";

import Link from "next/link";

interface DiplomaSelectorProps {
  currentYear: 1 | 2 | 3;
}

const yearConfig = {
  1: {
    label: "YEAR 1",
    title: "Professional Makeup Artistry & Image Consulting",
    href: "/programs/professional-makeup-year-1",
  },
  2: {
    label: "YEAR 2",
    title: "Advanced Techniques & Image Consulting",
    href: "/programs/professional-makeup-year-2",
  },
  3: {
    label: "YEAR 3",
    title: "Certified Makeup Educator & Trainer",
    href: "/programs/professional-makeup-year-3",
  },
};

export default function DiplomaSelector({
  currentYear,
}: DiplomaSelectorProps) {
  return (
    <section className="bg-[#000000] py-24 md:py-20 sm:py-16">
      <div className="container">

        <div className="max-w-[1100px] mx-auto text-center">

          <h2 className="heading-lg text-white mb-20 md:mb-16 sm:mb-12">
            THREE PATHWAYS. THREE DIPLOMAS.
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-10">

            {[1, 2, 3].map((year) => {
              const y = year as 1 | 2 | 3;
              const isActive = currentYear === y;
              const config = yearConfig[y];

              const CardContent = (
                <div
                  className={`
                    relative w-full md:w-[340px] h-[240px]
                    px-10 py-8
                    transition-all duration-300
                    border
                    ${isActive
                      ? "border-white bg-white/10"
                      : "border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20"
                    }
                  `}
                >
                  {/* Decorative Number */}
                  <div
                    className={`
                        absolute ${y === 3 ? "top-[-4px]" : "top-2"} left-8
                        font-serif text-[120px] leading-none pointer-events-none select-none
                        ${isActive
                        ? "text-white/15"
                        : "text-white/6"
                        }
                    `}
                    >
                    {y}
                    </div>

                  {/* Content */}
                  <div className="relative z-10 mt-10 text-left">

                    <div className="ui-nav text-white mb-8">
                      {config.label}
                    </div>

                    <div className="text-[18px] font-bold italic uppercase tracking-[-0.36px] text-white leading-snug max-w-[260px]">
                      {config.title}
                    </div>

                  </div>
                </div>
              );

              return isActive ? (
                <div key={y}>{CardContent}</div>
              ) : (
                <Link key={y} href={config.href}>
                  {CardContent}
                </Link>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}