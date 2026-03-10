/* =========================================================
   MODULE TYPES
   ========================================================= */

export interface ModuleData {
  slug: string
  title: string
  shortDescription: string
  duration: string
  heroImage: string
  heroPosition?: string

  positioning: string[]
  approach?: string[]
  techniques?: string[]
  framework?: string[]
  ethos?: string[]
}

export interface ModulesUI {
  breadcrumb: {
    home: string
    modules: string
    module: string
  }

  moduleSections: {
    overview: string
    approachTitle: string
    approachEyebrow: string
    techniques: string
    framework: string
    ethos: string
  }

  buttons: {
    requestInfo: string
    viewModule: string
  }
}

/* =========================================================
   MODULES PAGE CONTENT
   ========================================================= */

export interface ModulesPageData {
  hero: {
    title: string
    description: string
    backgroundImage: string
    buttonLabel: string
  }

  intro: {
    heading: string
    paragraphs: string[]
  }

  cta: {
    heading: string
    description: string
    buttonLabel: string
  }

moduleCta: {
    heading: string
    description: string
    buttonLabel: string
  }

  relatedModules: {
    eyebrow: string
    title: string
  }

  ui: ModulesUI
}

/* =========================================================
   LOCALE STRUCTURE
   ========================================================= */

export type Locale = "en" | "pt" | "es" | "fr"


export interface ModulesLocaleData {
  modules: ModuleData[]
  page: ModulesPageData
}


export type ModulesData = Record<Locale, ModulesLocaleData>