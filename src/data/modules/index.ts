import { ModulesData } from "./types"

/* =========================================================
   EN
   ========================================================= */

import { modules as enModules } from "./en/modules"
import { page as enPage } from "./en/page"

/* =========================================================
   PT
   ========================================================= */

import { modules as ptModules } from "./pt/modules"
import { page as ptPage } from "./pt/page"

/* =========================================================
   ES
   ========================================================= */

import { modules as esModules } from "./es/modules"
import { page as esPage } from "./es/page"

/* =========================================================
   FR
   ========================================================= */

import { modules as frModules } from "./fr/modules"
import { page as frPage } from "./fr/page"


/* =========================================================
   DATA
   ========================================================= */

export const modulesData: ModulesData = {
  en: {
    modules: enModules,
    page: enPage,
  },

  pt: {
    modules: ptModules,
    page: ptPage,
  },

  es: {
    modules: esModules,
    page: esPage,
  },

  fr: {
    modules: frModules,
    page: frPage,
  },
}