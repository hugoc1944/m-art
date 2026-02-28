"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const programs = [
  {
    year: 1,
    title: "FOUNDATIONS",
    subtitle: "Professional Makeup Program — Year 1",
    description:
      "Build the technical and artistic foundations required to enter the professional makeup industry with structure and discipline.",
    tags: ["TECHNICAL BASE", "PORTFOLIO", "INDUSTRY DISCIPLINE"],
    image: "/year1-hero.jpg",
    href: "/programs/professional-makeup-year-1",
  },
  {
    year: 2,
    title: "ADVANCED MASTERY",
    subtitle: "Professional Makeup Program — Year 2",
    description:
      "Affirm your artistic identity and master advanced techniques designed for premium professional positioning.",
    tags: ["MORPHOLOGY", "EDITORIAL", "LUXURY MARKET"],
    image: "/year2-hero.jpg",
    href: "/programs/professional-makeup-year-2",
  },
  {
    year: 3,
    title: "EDUCATOR & TRAINER",
    subtitle: "Professional Makeup Program — Year 3",
    description:
      "Transform expertise into transmission. Develop leadership, pedagogy, and professional authority.",
    tags: ["PEDAGOGY", "BRAND TRAINING", "LEADERSHIP"],
    image: "/year3-hero.jpg",
    href: "/programs/professional-makeup-year-3",
  },
];

export default function ProgramsPage() {
  const [isBgDark, setIsBgDark] = useState(false);

  /* =============================
     Scroll Detection (Background)
  ============================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsBgDark(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={`
        transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isBgDark ? "bg-black" : "bg-white"}
      `}
    >

      {/* ===== INTRO SECTION ===== */}
      <section className="container py-24 md:py-16 sm:py-12">

        <div
          className={`
            ui-utility mb-4 uppercase flex flex-wrap gap-2
            transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isBgDark ? "text-white" : "text-[#23252b]"}
          `}
        >
          <Link href="/" className="hover:opacity-70 transition-opacity">
            HOME
          </Link>
          <span>/</span>
          <Link href="/programs" className="hover:opacity-70 transition-opacity">
            PROGRAMS
          </Link>
        </div>

        <h1
          className={`
            heading-xl mb-8
            transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isBgDark ? "text-white" : "text-[#23252b]"}
          `}
        >
          PROFESSIONAL MAKEUP PROGRAM
        </h1>

        <p
          className={`
            body-intro max-w-[760px]
            transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isBgDark ? "text-white/80" : "text-[#23252b]"}
          `}
        >
          A progressive yet modular academic structure, allowing each year to be taken independently - from foundational mastery to advanced expertise and professional transmission.
        </p>
      </section>

      {/* ===== PROGRAM PANELS ===== */}
      <section className="space-y-16 md:space-y-12 sm:space-y-8 pb-24">
        {programs.map((program, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <motion.div
              key={program.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link href={program.href}>
                <div className="group relative w-full h-[520px] md:h-[420px] sm:h-auto sm:min-h-[480px] overflow-hidden cursor-pointer">

                  <div className="absolute inset-0">
                    <Image
                      src={program.image}
                      alt={program.subtitle}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/40 transition-all duration-300" />
                  </div>

                  <div className="relative z-10 h-full container flex items-center">
                    <div
                      className={`
                        max-w-[540px] text-white
                        ${isImageLeft ? "ml-0" : "ml-auto"}
                      `}
                    >
                      <div
                        className={`
                          font-serif text-[140px] leading-none
                          text-white opacity-35 mix-blend-overlay
                          group-hover:opacity-60 transition-all duration-300
                          ${program.year === 3 ? "-translate-y-[10px]" : ""}
                        `}
                      >
                        {program.year}
                      </div>

                      <div className="ui-nav mb-2">
                        {program.subtitle}
                      </div>

                      <h2 className="heading-lg mb-6">
                        {program.title}
                      </h2>

                      <div className="flex flex-wrap gap-3 mb-6">
                        {program.tags.map((tag) => (
                          <span
                            key={tag}
                            className="body-small uppercase tracking-[1px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="body-standard mb-8 max-w-[460px]">
                        {program.description}
                      </p>

                      <div className="flex items-center gap-6 text-sm uppercase tracking-wide">
                        <span className="ui-button border-b border-white pb-1 transition-all group-hover:opacity-80">
                          → View Year {program.year}
                        </span>

                        <span className="opacity-70 group-hover:opacity-100 transition">
                          Schedule Info
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 h-full w-[4px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </section>
    </main>
  );
}