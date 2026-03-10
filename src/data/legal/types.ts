import { ReactNode } from "react"

export interface LegalSection {
  title: string
  content: ReactNode
}

export interface LegalPageData {
  title: string
  breadcrumbLabel: string
  intro: ReactNode
  sections: LegalSection[]
}

export type Locale = "en" | "pt" | "fr" | "es"

export type LegalPages = {
  privacyPolicy: LegalPageData
  cookies: LegalPageData
  terms: LegalPageData
  legalNotices: LegalPageData
}

export type LegalData = Record<Locale, LegalPages>