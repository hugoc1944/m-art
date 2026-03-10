import { Locale } from "@/i18n/config"

export interface VideoIntroCopy {
  goToHome: string
  brandLine: string
  academyLine: string
}

export const videoIntroCopy: Record<Locale, VideoIntroCopy> = {
  en: {
    goToHome: "Go to Home",
    brandLine: "M•ART",
    academyLine: "GENEVA MAKEUP ACADEMY",
  },

  fr: {
    goToHome: "Accéder à l'accueil",
    brandLine: "M•ART",
    academyLine: "GENEVA MAKEUP ACADEMY",
  },

  es: {
    goToHome: "Ir al inicio",
    brandLine: "M•ART",
    academyLine: "GENEVA MAKEUP ACADEMY",
  },

  pt: {
    goToHome: "Ir para a página inicial",
    brandLine: "M•ART",
    academyLine: "GENEVA MAKEUP ACADEMY",
  },
}