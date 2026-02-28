"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ModuleCard from "@/components/modules/ModuleCard";
import { ModuleData } from "@/data/modulesData";

interface Props {
  currentSlug: string;
  modules: ModuleData[];
}

export default function RelatedModules({ currentSlug, modules }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const otherModules = modules.filter(
    (module) => module.slug !== currentSlug
  );

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const width = containerRef.current.offsetWidth;
    containerRef.current.scrollBy({
      left: direction === "left" ? -width * 0.8 : width * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white section-padding overflow-hidden">

      <div className="container">

        {/* HEADER */}
        <div className="mb-[var(--space-12)]">
          <div className="label-eyebrow mb-[var(--space-4)]">
            CONTINUE YOUR DEVELOPMENT
          </div>

          <h2 className="heading-lg uppercase">
            Further Specialization
          </h2>

          <div className="mt-[var(--space-6)] h-px bg-black/10" />
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative">

          {/* NAV BUTTONS (desktop only) */}
          <div className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("left")}
              className="bg-white border border-black/20 px-3 py-2 text-sm hover:bg-black hover:text-white transition"
            >
              ←
            </button>
          </div>

          <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("right")}
              className="bg-white border border-black/20 px-3 py-2 text-sm hover:bg-black hover:text-white transition"
            >
              →
            </button>
          </div>

          {/* SCROLL CONTAINER */}
          <motion.div
            ref={containerRef}
            className="flex gap-[var(--space-8)] overflow-x-auto scroll-smooth no-scrollbar pb-2 cursor-grab active:cursor-grabbing"            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {otherModules.map((module) => (
              <div
                key={module.slug}
                className="min-w-[320px] max-w-[360px] flex-shrink-0"
              >
                <ModuleCard module={module} />
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}