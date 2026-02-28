"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

interface ModulesHeroProps {
  backgroundImage: string;
}

export default function ModulesHero({
  backgroundImage,
}: ModulesHeroProps) {
  return (
    <section className="relative w-full h-[70vh] md:h-[70vh] sm:h-[50vh] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Professional Makeup Modules"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-center">

        <div className="max-w-[640px]">

          <h1 className="heading-xl text-white mb-[var(--space-6)]">
            PROFESSIONAL MAKEUP MODULES
          </h1>

          <p className="body-intro text-white mb-[var(--space-8)]">
            Specialized intensives designed to refine technique,
            deepen artistic exploration, and support professional positioning.
          </p>

          <Button
            onClick={() => {
                const el = document.getElementById("modules-grid");
                if (el) {
                el.scrollIntoView({ behavior: "auto" });
                }
            }}
            variant="outline"
            tone="light"
            size="md"
            >
            → View Modules
            </Button>

        </div>
      </div>
    </section>
  );
}