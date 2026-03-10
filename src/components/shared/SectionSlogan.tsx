"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SectionSloganProps {
  slogan: {
    top: string
    rotating: string[]
    bottom: string[]
  }
}

function RotatingStatements({ statements }: { statements: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % statements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [statements.length]);

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

export default function SectionSlogan({ slogan }: SectionSloganProps) {
  return (
    <section>

      {/* =========================
          TOP BAND
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
          {slogan.top}
        </div>
      </div>

      {/* =========================
          IMAGE GRID
      ========================= */}

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

      <div className="hidden lg:grid h-[110px] bg-[#f7f6f3] grid-cols-4 items-center text-center">
        {slogan.bottom.map((label, index) => (
          <div
            key={index}
            className="text-[#23252b] text-[24px] font-bold italic uppercase tracking-[-0.48px] leading-[0.9]"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="hidden sm:grid lg:hidden bg-[#f7f6f3] grid-cols-2 grid-rows-2 h-[90px] py-2">
        {slogan.bottom.map((label, index) => (
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
          MOBILE ROTATING
      ========================= */}
      <div className="sm:hidden bg-[#f7f6f3] h-[100px] flex items-center justify-center overflow-hidden">
        <RotatingStatements statements={slogan.rotating} />
      </div>

    </section>
  );
}