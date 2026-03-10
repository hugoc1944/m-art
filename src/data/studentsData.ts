import { Locale } from "@/i18n/config"
export interface StudentsData {
  heading: string
  subheading: string
}
export const studentsData: Record<Locale, StudentsData> = {
  en: {
    heading: "COMING SOON",
    subheading: "Discover the artistic achievements of our visionary students"
  },
  fr: {
    heading: "BIENTÔT DISPONIBLE",
    subheading: "Découvrez les réalisations artistiques de nos étudiant·es visionnaires"
  },
  es: {
    heading: "PRÓXIMAMENTE",
    subheading: "Descubre los logros artísticos de nuestro alumnado visionario"
  },
  pt: {
    heading: "EM BREVE",
    subheading: "Descubra as conquistas artísticas do nosso visionário corpo estudantil"
  }
}
