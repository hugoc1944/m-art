"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Locale } from "@/i18n/config"

interface DiplomaYear {
  year: 1 | 2 | 3
  label: string
  title: string
  href: string
}

interface DiplomaSelectorProps {
  currentYear: 1 | 2 | 3
  heading: string
  years: DiplomaYear[]
}

export default function DiplomaSelector({
  currentYear,
  heading,
  years,
}: DiplomaSelectorProps) {

  const params = useParams()
  const locale = params.locale as Locale

  return (
    <section className="bg-[#000000] py-24 md:py-20 sm:py-16">

      <div className="container">

        <div className="max-w-[1100px] mx-auto text-center">

          <h2 className="heading-lg text-white mb-20 md:mb-16 sm:mb-12">
            {heading}
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-10">

            {years.map((y) => {

              const isActive = currentYear === y.year

              const CardContent = (
                <div
                  className={`
                    relative w-full md:w-[340px] h-[240px]
                    px-10 py-8
                    transition-all duration-300
                    border
                    ${
                      isActive
                        ? "border-white bg-white/10"
                        : "border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20"
                    }
                  `}
                >

                  <div
                    className={`
                      absolute ${y.year === 3 ? "top-[-4px]" : "top-2"} left-8
                      font-serif text-[120px] leading-none pointer-events-none select-none
                      ${
                        isActive
                          ? "text-white/15"
                          : "text-white/6"
                      }
                    `}
                  >
                    {y.year}
                  </div>

                  <div className="relative z-10 mt-10 text-left">

                    <div className="ui-nav text-white mb-8">
                      {y.label}
                    </div>

                    <div className="text-[18px] font-bold italic uppercase tracking-[-0.36px] text-white leading-snug max-w-[260px]">
                      {y.title}
                    </div>

                  </div>

                </div>
              )

              if (isActive) {
                return <div key={y.year}>{CardContent}</div>
              }

              return (
                <Link
                  key={y.year}
                  href={`/${locale}${y.href}`}
                >
                  {CardContent}
                </Link>
              )
            })}

          </div>

        </div>

      </div>

    </section>
  )
}