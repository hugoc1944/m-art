"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Locale } from "@/i18n/config"
import Button from "@/components/ui/Button"

interface ProgramHeroProps {
  year: 1 | 2 | 3
  breadcrumb: {
    home: string
    programs: string
    current: string
  }
  headline: string
  subheadline: string
  ctaLabel: string
  ctaHref: string
  backgroundImage: string
  backgroundImageMobile?: string
}

export default function ProgramHero({
  year,
  breadcrumb,
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  backgroundImage,
  backgroundImageMobile,
}: ProgramHeroProps) {

  const params = useParams()
  const locale = params.locale as Locale

  const imagePosition =
    year === 2
      ? "object-cover sm:object-[center_45%] md:object-[center_40%]"
      : "object-cover sm:object-[center_30%]"

  return (
    <section className="relative w-full h-[483px] md:h-[500px] sm:h-[420px] overflow-hidden">

      <div className="absolute inset-0">

        <Image
          src={backgroundImage}
          alt={`Program Year ${year}`}
          fill
          priority
          sizes="(max-width: 640px) 0px, 100vw"
          className={`hidden sm:block ${imagePosition}`}
        />

        <Image
          src={backgroundImageMobile ?? backgroundImage}
          alt={`Program Year ${year}`}
          fill
          priority
          sizes="100vw"
          className="sm:hidden object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40" />

      </div>

      <div className="relative z-10 container h-full flex flex-col justify-center">

        <div className="hidden sm:block max-w-[680px]">

          {/* Breadcrumb */}

          <div className="ui-utility text-white mb-4 uppercase flex gap-2">

            <Link href={`/${locale}`} className="hover:opacity-70">
              {breadcrumb.home}
            </Link>

            <span>/</span>

            <Link
              href={`/${locale}/programs`}
              className="hover:opacity-70"
            >
              {breadcrumb.programs}
            </Link>

            <span>/</span>

            <span className="opacity-70">
              {breadcrumb.current}
            </span>

          </div>

          <h1 className="heading-xl text-white whitespace-pre-line">
            {headline}
          </h1>

          <p className="body-intro text-white uppercase mt-4">
            {subheadline}
          </p>

          <div className="mt-6">

            <Button
              href={`/${locale}${ctaHref}`}
              variant="outline"
              tone="light"
              size="sm"
            >
              → {ctaLabel}
            </Button>

          </div>

        </div>

      </div>

    </section>
  )
}