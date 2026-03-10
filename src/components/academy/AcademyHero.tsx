"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";

interface AcademyHeroProps {
  backgroundImage: string;
  backgroundImageMobile: string;
  headline: string;
  ctaText: string;
  ctaLink: string;
}

export default function AcademyHero({
  backgroundImage,
  backgroundImageMobile,
  headline,
  ctaText,
  ctaLink,
}: AcademyHeroProps) {

  const pathname = usePathname();

  // Extract locale from URL (/fr/the-academy → fr)
  const locale = pathname.split("/")[1];

  const localizedLink = `/${locale}${ctaLink}`;

  return (
    <section className="relative w-full h-[675px] md:h-[695px] sm:h-[520px] overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0">

        <Image
          src={backgroundImage}
          alt="M-ART Academy"
          fill
          priority
          sizes="(max-width: 640px) 0px, 100vw"
          className="hidden sm:block object-cover object-[58%_60%] lg:scale-[1.08] lg:translate-x-[60px]"
        />

        <Image
          src={backgroundImageMobile}
          alt="M-ART Academy"
          fill
          priority
          sizes="100vw"
          className="sm:hidden object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/20 md:bg-black/20 sm:bg-black/35" />

      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 h-full flex items-center">

        {/* DESKTOP */}

        <div className="hidden sm:block pl-[65px] md:pl-[6%] max-w-[620px]">

          <div className="font-[Didot] font-bold text-white tracking-[6.72px] text-[56px] md:text-[52px] leading-none">
            M•ART
          </div>

          <div className="text-white tracking-[2.72px] md:tracking-[2.38px] text-[16px] md:text-[14px] uppercase mt-[-6px]">
            GENEVA MAKEUP ACADEMY
          </div>

          <h1 className="text-white font-bold italic uppercase text-[40px] md:text-[42px] tracking-[-0.8px] md:tracking-[-0.64px] leading-[1.05] mt-8 md:mt-5">
            {headline}
          </h1>

          <div className="mt-8">
            <Button
              href={localizedLink}
              variant="outline"
              tone="light"
              size="sm"
              className="min-w-[191px]"
            >
              {ctaText}
            </Button>
          </div>

        </div>

        {/* MOBILE */}

        <div className="sm:hidden w-full text-center px-6">

          <div className="font-[Didot] font-bold text-white tracking-[4.32px] text-[36px] leading-none">
            M•ART
          </div>

          <div className="text-white tracking-[2.04px] text-[12px] uppercase mt-2">
            GENEVA MAKEUP ACADEMY
          </div>

          <h1 className="text-white font-bold italic uppercase text-[24px] tracking-[-0.48px] leading-[1.1] mt-8">
            {headline}
          </h1>

          <div className="mt-6">
            <Button
              href={localizedLink}
              variant="outline"
              tone="light"
              size="sm"
              className="w-full h-[48px]"
            >
              {ctaText}
            </Button>
          </div>

        </div>

      </div>

    </section>
  );
}