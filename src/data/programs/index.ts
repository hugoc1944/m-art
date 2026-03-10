import { overview as enOverview } from "./en/overview"
import { years as enYears } from "./en/years"

import { overview as ptOverview } from "./pt/overview"
import { years as ptYears } from "./pt/years"

import { overview as esOverview } from "./es/overview"
import { years as esYears } from "./es/years"

import { overview as frOverview } from "./fr/overview"
import { years as frYears } from "./fr/years"

import type { ProgramData } from "./types"

export const programData: ProgramData = {
  en: {
    overview: enOverview,
    years: enYears
  },
  pt: {
    overview: ptOverview,
    years: ptYears
  },
  es: {
    overview: esOverview,
    years: esYears
  },
  fr: {
    overview: frOverview,
    years: frYears
  }
} as const