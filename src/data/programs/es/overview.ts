import type { ProgramOverview } from "../types"

export const overview: ProgramOverview = {
  breadcrumb: {
    home: "INICIO",
    programs: "PROGRAMAS"
  },
  pageTitle: "PROGRAMA DE MAQUILLAJE PROFESIONAL",
  description:
    "M·ART Academy ofrece un recorrido académico progresivo y refinado. Cada año está diseñado como una experiencia independiente, acompañando tu desarrollo desde técnicas fundamentales hasta la excelencia profesional y la capacidad de guiar e inspirar a otras personas. Nuestro plan de estudios permite a cada participante alcanzar la maestría en cada etapa de su trayecto personal.",
  actions: {
    viewYear: "Descubrir el año",
    scheduleInfo: "Información y horarios"
  },
  programs: [
    {
      year: 1,
      title: "FUNDAMENTOS",
      subtitle: "Programa de Maquillaje Profesional - Año 1",
      description:
        "Establece cimientos artísticos y técnicos sólidos en un entorno inclusivo que abraza y celebra cada identidad. Cultiva la disciplina y las habilidades creativas esenciales para tu ingreso al mundo profesional del maquillaje.",
      tags: [
        "BASE TÉCNICA",
        "PORTAFOLIO",
        "DISCIPLINA PROFESIONAL"
      ],
      image: "/year1-hero.jpg",
      imageMobile: "/year1-hero-mobile.jpg",
      slug: "professional-makeup-year-1"
    },
    {
      year: 2,
      title: "MAESTRÍA AVANZADA",
      subtitle: "Programa de Maquillaje Profesional - Año 2",
      description:
        "Desarrolla y perfecciona tu identidad artística mientras dominas técnicas avanzadas. Este año está diseñado para ayudarte a destacar con excelencia profesional, creatividad elevada y una comprensión profunda de las más altas exigencias de la industria.",
      tags: [
        "MORFOLOGÍA",
        "EDITORIAL",
        "MERCADO DE LUJO"
      ],
      image: "/year2-hero.jpg",
      imageMobile: "/year2-hero-mobile.jpg",
      slug: "professional-makeup-year-2"
    },
    {
      year: 3,
      title: "PEDAGOGÍA Y FORMACIÓN",
      subtitle: "Programa de Maquillaje Profesional - Año 3",
      description:
        "Convierte tu experiencia refinada en la capacidad de inspirar y formar a otras personas. Desarrolla tu liderazgo, métodos pedagógicos y presencia profesional para guiar y asesorar con confianza y autoridad.",
      tags: [
        "PEDAGOGÍA",
        "FORMACIÓN DE MARCA",
        "LIDERAZGO"
      ],
      image: "/year3-hero.jpg",
      imageMobile: "/year3-hero-mobile.jpg",
      slug: "professional-makeup-year-3"
    }
  ]
} as const
