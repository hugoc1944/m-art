"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface ProgramHeroProps {
  year: 1 | 2 | 3;
  breadcrumb: string;
  headline: string;
  subheadline: string;
  backgroundImage: string;
}

export default function ProgramHero({
  year,
  breadcrumb,
  headline,
  subheadline,
  backgroundImage,
}: ProgramHeroProps) {

  const imagePosition =
    year === 2
      ? "object-cover sm:object-[center_45%] md:object-[center_40%]"
      : "object-cover sm:object-[center_30%]";

  return (
    <section className="relative w-full h-[483px] md:h-[500px] sm:h-[420px] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={`Professional Makeup Program Year ${year}`}
          fill
          priority
          sizes="100vw"
          className={imagePosition}
        />
        <div className="absolute inset-0 bg-black/35 md:bg-black/40 sm:bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-center">

        {/* Desktop / Tablet */}
        <div className="hidden sm:block max-w-[640px]">

          {/* 🔹 Clickable Breadcrumb */}
          <div className="ui-utility text-white mb-4 uppercase flex flex-wrap gap-2">

            <Link href="/" className="hover:opacity-70 transition-opacity">
              HOME
            </Link>

            <span>/</span>

            <Link href="/programs" className="hover:opacity-70 transition-opacity">
              PROGRAMS
            </Link>

            <span>/</span>

            <span className="opacity-70">
              PROFESSIONAL MAKEUP - YEAR {year}
            </span>

          </div>

          <h1 className="heading-xl text-white whitespace-pre-line">
            {headline}
          </h1>

          <p className="body-intro text-white uppercase mt-4">
            {subheadline}
          </p>

          <div className="mt-6">
            <Button
              href="/contact?intent=meeting"
              variant="outline"
              tone="light"
              size="sm"
            >
              → Schedule an Information Meeting
            </Button>
          </div>
        </div>

        {/* Mobile */}
        <div className="sm:hidden text-center px-6">

          <div className="ui-utility text-white mb-4 uppercase flex justify-center gap-2 flex-wrap">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              HOME
            </Link>
            <span>/</span>
            <Link href="/programs" className="hover:opacity-70 transition-opacity">
              PROGRAMS
            </Link>
            <span>/</span>
            <span className="opacity-70">
              YEAR {year}
            </span>
          </div>

          <h1 className="heading-lg text-white whitespace-pre-line">
            {headline}
          </h1>

          <p className="body-standard text-white uppercase mt-4">
            {subheadline}
          </p>

          <div className="mt-6">
            <Button
              href="/meeting"
              variant="outline"
              tone="light"
              size="sm"
              className="w-full h-[48px]"
            >
              → Schedule Meeting
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}