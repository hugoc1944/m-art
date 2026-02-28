"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const images = [
  "/portfolio_1.jpg",
  "/portfolio_2.jpg",
  "/portfolio_3.jpg",
];

export default function PortfolioSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden lg:h-[626px]">
      {/* ================= BACKGROUND IMAGE STACK ================= */}
      <div
        className="
          relative w-full h-[400px]

          lg:absolute lg:inset-0 lg:h-auto
        "
      >
        {images.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{
              duration: 1.4,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              className="
                object-cover
                lg:scale-[1]
                lg:-translate-x-[13%]
                lg:-translate-y-[0%]
                lg:transform-gpu
              "
            />
          </motion.div>
        ))}
      </div>

      {/* ================= DESKTOP OVERLAY ONLY ================= */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <Image
          src="/portfolio_fill.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-[2] lg:h-full lg:flex">
        {/* Spacer only for desktop */}
        <div className="hidden lg:block w-2/3" />

        <div
          className="
            text-white

            /* Mobile */
            bg-black w-full px-6 py-12 text-center

            /* Desktop */
            lg:bg-transparent lg:w-1/3 lg:flex lg:flex-col lg:justify-center lg:px-16 lg:text-left
          "
        >
          <h3 className="text-[24px] font-bold italic uppercase tracking-[-0.48px] leading-[1.1]">
            A PORTFOLIO THAT REFLECTS YOUR VISION
          </h3>

          <p className="mt-4 text-[14px] font-medium tracking-[-0.28px]">
            Throughout the year, your work is photographed, refined, and positioned through professional shoots and real creative productions - building a body of work that reflects both your artistic identity and industry readiness.
          </p>

          <ul
            className="
                mt-4
                text-[14px]
                font-medium

                /* Mobile */
                list-disc list-inside
                text-center
                mx-auto

                /* Desktop */
                lg:list-outside
                lg:ml-5
                lg:text-left
            "
            >
            <li>Professional photo shoots</li>
            <li>Real-world industry simulations</li>
            <li>Artistic, editorial, and transformative projects</li>
            </ul>

          <div className="mt-6">
            <Button
              href="/students"
              variant="solid"
              tone="light"
              size="sm"
            >
              → View Student Portfolios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}