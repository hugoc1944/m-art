"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ModuleCard from "@/components/modules/ModuleCard";
import { ModuleData } from "@/data/modules/types";

interface ModulesGridProps {
  modules: ModuleData[];
  locale: string;
  cardLabel: string;
}

export default function ModulesGrid({
  modules,
  locale,
  cardLabel,
}: ModulesGridProps) {
  const [isBgDark, setIsBgDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("modules-grid");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.3;

      setIsBgDark(rect.top <= triggerPoint);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="modules-grid"
      className={`
        w-full section-padding
        transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isBgDark ? "bg-black" : "bg-[var(--color-editorial-white)]"}
      `}
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-[var(--space-8)]
          "
        >
          {modules.map((module, index) => (
            <motion.div
              key={module.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <ModuleCard
                module={module}
                locale={locale}
                label={cardLabel}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}