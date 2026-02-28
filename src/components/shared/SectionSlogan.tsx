"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function RotatingStatements() {
  const statements = [
    "Technical Mastery",
    "Creative Identity",
    "Professional Immersion",
    "Portfolio That Opens Doors",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % statements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            text-[#23252b]
            text-[28px]
            font-bold italic uppercase
            tracking-[-0.5px]
            text-center
            px-6
            leading-[1.1]
          "
        >
          {statements[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}


export default function SectionSlogan() {
  return (
    <section>

      {/* =========================
          TOP BAND (DESKTOP UNCHANGED)
      ========================= */}
      <div
        className="
          h-[115px] bg-black flex items-center
          md:h-[80px]
          sm:h-[70px]
        "
      >
        <div
          className="
            md:ml-[196px]
            ml-[24px]
            pr-6
            text-white
            text-[24px]
            md:text-[22px]
            sm:text-[16px]
            font-bold italic uppercase
            tracking-[-0.48px]
            md:tracking-[-0.4px]
            sm:tracking-[-0.32px]
            leading-[1.1]
            sm:leading-[1.2]
          "
        >
          Shaping excellence, revealing signatures, <br className="hidden sm:block" />
          preparing the future.
        </div>
      </div>

      {/* =========================
          IMAGE GRID
      ========================= */}

      {/* Desktop (UNCHANGED) */}
      <div className="hidden lg:grid grid-cols-4 h-[657px]">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative">
            <Image
              src={`/slog${i}.jpg`}
              alt="Portrait"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        ))}
      </div>

      {/* Tablet (2x2 grid) */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 grid-rows-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative h-[400px]">
            <Image
              src={`/slog${i}.jpg`}
              alt="Portrait"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        ))}
      </div>

      {/* Mobile (Stacked) */}
      <div className="sm:hidden flex flex-col">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative h-[280px]">
            <Image
              src={`/slog${i}.jpg`}
              alt="Portrait"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* =========================
          BOTTOM LABELS
      ========================= */}

      {/* Desktop (UNCHANGED) */}
      <div className="hidden lg:grid h-[110px] bg-[#f7f6f3] grid-cols-4 items-center text-center">
        {[
          <>Technical Mastery</>,
          <>Creative Identity</>,
          <>Professional <br /> Immersion</>,
          <>Portfolio That <br /> Opens Doors</>,
        ].map((label, index) => (
          <div
            key={index}
            className="text-[#23252b] text-[24px] font-bold italic uppercase tracking-[-0.48px] leading-[0.9]"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Tablet (2x2 matching grid) */}
      <div className="hidden sm:grid lg:hidden bg-[#f7f6f3] grid-cols-2 grid-rows-2 h-[90px] py-2">
        {[
          "Technical Mastery",
          "Creative Identity",
          "Professional Immersion",
          "Portfolio That Opens Doors",
        ].map((label, index) => (
          <div
            key={index}
            className="
              flex items-center justify-center
              text-[#23252b]
              text-[23px]
              font-bold italic uppercase
              tracking-[-0.36px]
              text-center
              px-4
            "
          >
            {label}
          </div>
        ))}
      </div>

    {/* =========================
            MOBILE — EDITORIAL ROTATING STATEMENT
        ========================= */}
       <div className="sm:hidden bg-[#f7f6f3] h-[100px] flex items-center justify-center overflow-hidden">
        <RotatingStatements />
       </div>
      

    </section>
  );
}