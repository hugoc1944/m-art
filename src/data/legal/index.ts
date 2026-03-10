import { LegalData } from "./types"

/* ========================================
   EN
======================================== */

import { privacyPolicy as enPrivacyPolicy } from "./en/privacyPolicy"
import { cookies as enCookies } from "./en/cookies"
import { terms as enTerms } from "./en/terms"
import { legalNotices as enLegalNotices } from "./en/legalNotices"

/* ========================================
   PT
======================================== */

import { privacyPolicy as ptPrivacyPolicy } from "./pt/privacyPolicy"
import { cookies as ptCookies } from "./pt/cookies"
import { terms as ptTerms } from "./pt/terms"
import { legalNotices as ptLegalNotices } from "./pt/legalNotices"

/* ========================================
   ES
======================================== */

import { privacyPolicy as esPrivacyPolicy } from "./es/privacyPolicy"
import { cookies as esCookies } from "./es/cookies"
import { terms as esTerms } from "./es/terms"
import { legalNotices as esLegalNotices } from "./es/legalNotices"

/* ========================================
   FR
======================================== */

import { privacyPolicy as frPrivacyPolicy } from "./fr/privacyPolicy"
import { cookies as frCookies } from "./fr/cookies"
import { terms as frTerms } from "./fr/terms"
import { legalNotices as frLegalNotices } from "./fr/legalNotices"

/* ========================================
   DATA
======================================== */

export const legalData: LegalData = {

  en: {
    privacyPolicy: enPrivacyPolicy,
    cookies: enCookies,
    terms: enTerms,
    legalNotices: enLegalNotices,
  },

  pt: {
    privacyPolicy: ptPrivacyPolicy,
    cookies: ptCookies,
    terms: ptTerms,
    legalNotices: ptLegalNotices,
  },

  es: {
    privacyPolicy: esPrivacyPolicy,
    cookies: esCookies,
    terms: esTerms,
    legalNotices: esLegalNotices,
  },

  fr: {
    privacyPolicy: frPrivacyPolicy,
    cookies: frCookies,
    terms: frTerms,
    legalNotices: frLegalNotices,
  },

}