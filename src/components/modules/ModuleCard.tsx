"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ModuleData } from "@/data/modulesData";

interface ModuleCardProps {
  module: ModuleData;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[480px] md:h-[420px] sm:h-[360px] overflow-hidden group"
    >
      <Link href={`/modules/${module.slug}`} className="absolute inset-0">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={module.heroImage}
            alt={module.title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end p-[var(--space-8)]">

          <div className="text-white max-w-[420px]">

            <div className="ui-utility mb-[var(--space-2)] opacity-80">
              {module.duration}
            </div>

            <h3 className="heading-md mb-[var(--space-4)]">
              {module.title}
            </h3>

            <p className="body-small mb-[var(--space-6)] opacity-90">
              {module.shortDescription}
            </p>

            <span className="ui-button border-b border-white pb-[2px]">
              → View Module
            </span>

          </div>

        </div>

      </Link>
    </motion.div>
  );
}