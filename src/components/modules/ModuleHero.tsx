"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface ModuleHeroProps {
  title: string;
  duration: string;
  shortDescription: string;
  backgroundImage: string;
  heroPosition?: string;
}

export default function ModuleHero({
  title,
  duration,
  shortDescription,
  backgroundImage,
  heroPosition,
}: ModuleHeroProps) {
  return (
    <section className="relative w-full h-[70vh] md:h-[70vh] sm:h-[50vh] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
          objectPosition: heroPosition ?? "center center",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-center">

        {/* ================= DESKTOP / TABLET ================= */}
        <div className="hidden sm:block max-w-[640px] text-white">

          {/* Breadcrumb */}
          <div className="ui-utility mb-[var(--space-6)] uppercase flex flex-wrap gap-2">

            <Link href="/" className="hover:opacity-70 transition-opacity">
              HOME
            </Link>

            <span>/</span>

            <Link href="/modules" className="hover:opacity-70 transition-opacity">
              MODULES
            </Link>

            <span>/</span>

            <span className="opacity-70">
              {title}
            </span>

          </div>

          {/* Duration */}
          <div className="ui-utility mb-[var(--space-4)] opacity-80">
            {duration}
          </div>

          {/* Title */}
          <h1 className="heading-xl mb-[var(--space-6)]">
            {title}
          </h1>

          {/* Description */}
          <p className="body-intro mb-[var(--space-8)]">
            {shortDescription}
          </p>

          {/* CTA */}
          <Button
            href="/contact?intent=module"
            variant="outline"
            tone="light"
            size="md"
          >
            → Request Information
          </Button>

        </div>

        {/* ================= MOBILE ================= */}
        <div className="sm:hidden text-center px-6 text-white">

          <div className="ui-utility mb-4 uppercase flex justify-center gap-2 flex-wrap">

            <Link href="/" className="hover:opacity-70 transition-opacity">
              HOME
            </Link>

            <span>/</span>

            <Link href="/modules" className="hover:opacity-70 transition-opacity">
              MODULES
            </Link>

            <span>/</span>

            <span className="opacity-70">
              MODULE
            </span>

          </div>

          <div className="ui-utility mb-4 opacity-80">
            {duration}
          </div>

          <h1 className="heading-lg mb-6">
            {title}
          </h1>

          <p className="body-standard mb-8">
            {shortDescription}
          </p>

          <Button
            href="/contact?intent=module"
            variant="outline"
            tone="light"
            size="sm"
            className="w-full h-[48px]"
          >
            → Request Information
          </Button>

        </div>

      </div>
    </section>
  );
}