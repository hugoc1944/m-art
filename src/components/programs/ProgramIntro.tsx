"use client"

import Button from "@/components/ui/Button"
import { usePathname } from "next/navigation"

interface ProgramIntroProps {
  year: 1 | 2 | 3
  headline: string
  bodyParagraphs: string[]

  cta: {
    label: string
    href: string
  }

  infoLinks: string[]

  sessionDetails: {
    sessionLabel: string
    programTitle: string
    duration: string
    hours: string
    differentiatorsTitle: string
    differentiators: string[]
  }
}

export default function ProgramIntro({
  year,
  headline,
  bodyParagraphs,
  cta,
  infoLinks,
  sessionDetails,
}: ProgramIntroProps) {

  const pathname = usePathname()

  // Extract locale from URL (/fr/programs/... → fr)
  const locale = pathname.split("/")[1] || "en"

  const localizedHref =
    cta.href.startsWith("/")
      ? `/${locale}${cta.href}`
      : cta.href

  return (
    <section className="bg-[#F7F6F3]">

      <div className="container">

        <div className="max-w-[1100px] mx-auto">

          <div className="grid md:grid-cols-[45%_55%]">

            {/* LEFT COLUMN */}

            <div className="py-24 md:py-20 sm:py-14 md:pr-14">

              <h2 className="heading-xl text-[#23252b] max-w-[520px]">
                {headline}
              </h2>

              {bodyParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="body-intro text-[#23252b] mt-8 max-w-[520px]"
                >
                  {p}
                </p>
              ))}

              <div className="mt-10">

                <Button
                  href={localizedHref}
                  variant="solid"
                  tone="dark"
                  size="sm"
                >
                  → {cta.label}
                </Button>

              </div>

              {/* Info Links */}

              <ul className="mt-14 space-y-3 text-[12px] font-medium italic uppercase tracking-[-0.24px] text-[#23252b] max-w-[520px]">

                {infoLinks.map((item, i) => (
                  <li
                    key={i}
                    className="underline underline-offset-4 hover:opacity-70 transition"
                  >
                    {item}
                  </li>
                ))}

              </ul>

            </div>

            {/* RIGHT COLUMN */}

            <div className="py-24 md:py-20 sm:py-14 md:pl-14">

              <div className="max-w-[560px]">

                <div className="ui-nav text-[#23252b]">
                  {sessionDetails.sessionLabel}
                </div>

                <div className="mt-6 ui-nav underline underline-offset-4">
                  {sessionDetails.programTitle}
                </div>

                <p className="body-standard mt-6">
                  {sessionDetails.duration}
                </p>

                <p className="body-standard mt-2">
                  {sessionDetails.hours}
                </p>

                <h3 className="ui-nav mt-12">
                  {sessionDetails.differentiatorsTitle}
                </h3>

                <ul className="body-standard list-disc ml-6 mt-6 space-y-3">

                  {sessionDetails.differentiators.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}