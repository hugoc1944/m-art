export type ProgramOverview = {
  breadcrumb: {
    home: string
    programs: string
  }

  pageTitle: string
  description: string

  actions: {
    viewYear: string
    scheduleInfo: string
  }

  programs: {
    year: number
    title: string
    subtitle: string
    description: string
    tags: string[]
    image: string
    imageMobile: string
    slug: string
  }[]
}

export type InfoBandItem = {
  icon: string
  label: string
  value: string
}

export type ContentSection = {
  heading: string
  subheading?: string
  bodyParagraphs: string[]
  bulletPoints?: string[]
  closingStatement?: string
  image: string
  imagePosition: "left" | "right"
  backgroundColor: "white" | "light-grey"
}

export type YearHero = {
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
  backgroundImageMobile: string
}

export type ProgramYear = {
  year: number

  hero: YearHero

  infoBand: {
    items: InfoBandItem[]
  }

  intro: {
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

  diplomaSelector?: {
    heading: string
    years: {
        year: 1 | 2 | 3
        label: string
        title: string
        href: string
    }[]
  }

  yearNavigation: {
    yearLabel: string
  }

  contentSections: ContentSection[]
}

export type ProgramYears = {
  1: ProgramYear
  2: ProgramYear
  3: ProgramYear
}

export type ProgramLocale = {
  overview: ProgramOverview
  years: ProgramYears
}

export type ProgramData = {
  en: ProgramLocale
  pt: ProgramLocale
  es: ProgramLocale
  fr: ProgramLocale
}