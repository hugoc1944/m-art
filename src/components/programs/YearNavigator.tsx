"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Locale } from "@/i18n/config"

interface YearNavigatorProps {
  currentYear: 1 | 2 | 3
  yearLabel: string
}

export default function YearNavigator({
  currentYear,
  yearLabel,
}: YearNavigatorProps) {

  const params = useParams()
  const locale = params.locale as Locale

  const prevYear = currentYear > 1 ? currentYear - 1 : null
  const nextYear = currentYear < 3 ? currentYear + 1 : null

  return (
    <section className="bg-black h-[120px] flex items-center">

      <div className="container flex justify-between text-white">

        <div>
          {prevYear && (
            <Link href={`/${locale}/programs/professional-makeup-year-${prevYear}`}>
              ← {yearLabel} {prevYear}
            </Link>
          )}
        </div>

        <div className="heading-sm">
          {yearLabel} {currentYear}
        </div>

        <div>
          {nextYear && (
            <Link href={`/${locale}/programs/professional-makeup-year-${nextYear}`}>
              {yearLabel} {nextYear} →
            </Link>
          )}
        </div>

      </div>

    </section>
  )
}