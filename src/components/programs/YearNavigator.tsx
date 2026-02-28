"use client";

import Link from "next/link";

interface YearNavigatorProps {
  currentYear: 1 | 2 | 3;
}

export default function YearNavigator({
  currentYear,
}: YearNavigatorProps) {
  const prevYear = currentYear > 1 ? currentYear - 1 : null;
  const nextYear = currentYear < 3 ? currentYear + 1 : null;

  return (
    <section className="bg-[#000000] h-[120px] md:h-[100px] sm:h-[80px] flex items-center">
      <div className="container flex justify-between items-center text-white">

        {/* PREVIOUS */}
        <div>
          {prevYear ? (
            <Link
              href={`/programs/professional-makeup-year-${prevYear}`}
              className="flex items-center gap-4 hover:opacity-100 opacity-80 transition"
            >
              <span className="text-2xl">←</span>
              <span className="ui-nav hidden sm:inline">
                YEAR {prevYear}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* CURRENT */}
        <div className="heading-sm text-[#ffffff]">
          YEAR {currentYear}
        </div>

        {/* NEXT */}
        <div>
          {nextYear ? (
            <Link
              href={`/programs/professional-makeup-year-${nextYear}`}
              className="flex items-center gap-4 hover:opacity-100 opacity-80 transition"
            >
              <span className="ui-nav hidden sm:inline">
                YEAR {nextYear}
              </span>
              <span className="text-2xl">→</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}