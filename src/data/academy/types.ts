import type { ContentSectionProps } from "@/components/shared/ContentSection"
import type { CTABandProps } from "@/components/shared/CTABand"

export interface Teacher {
  name: string
  title: string
  image: string
  imageMobile?: string
  bio: string[]
}

export interface AcademyPageData {

  hero: {
    backgroundImage: string
    backgroundImageMobile: string
    headline: string
    ctaText: string
    ctaLink: string
  }

  ctaBand1: CTABandProps

  sections: ContentSectionProps[]

  teachers: Teacher[]

  teachersBand: {
    heading: string
  }

}

export type Locale = "en" | "pt" | "es" | "fr"

export type AcademyData = Record<Locale, AcademyPageData>