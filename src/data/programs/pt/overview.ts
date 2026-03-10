import type { ProgramOverview } from "../types"
export const overview: ProgramOverview = {
  breadcrumb: {
    home: "INÍCIO",
    programs: "PROGRAMAS",
  },
  pageTitle: "PROGRAMA DE MAQUILHAGEM PROFISSIONAL",
  description:
    "A M·ART Academy oferece uma formação progressiva e modular, com cada ano concebido como uma experiência independente. O programa acompanha o desenvolvimento dos participantes, desde as técnicas fundamentais até à mestria e à capacidade de liderar e ensinar. O nosso currículo assegura excelência em todas as etapas de uma jornada única e inspiradora.",
  actions: {
    viewYear: "Explorar o ano",
    scheduleInfo: "Informações e horários",
  },
  programs: [
    {
      year: 1,
      title: "FUNDAÇÕES",
      subtitle: "Programa de Maquilhagem Profissional - Ano 1",
      description:
        "Crie bases técnicas e artísticas sólidas num ambiente inclusivo que valoriza todas as identidades. Adquira disciplina e competências criativas essenciais para iniciar a sua trajetória única no universo profissional da maquilhagem.",
      tags: [
        "BASE TÉCNICA",
        "PORTFÓLIO",
        "DISCIPLINA PROFISSIONAL",
      ],
      image: "/year1-hero.jpg",
      imageMobile: "/year1-hero-mobile.jpg",
      slug: "professional-makeup-year-1",
    },
    {
      year: 2,
      title: "MESTRIA AVANÇADA",
      subtitle: "Programa de Maquilhagem Profissional - Ano 2",
      description:
        "Aprofunde a sua identidade artística e domine técnicas avançadas. Este ano foi concebido para estimular a sua criatividade, combinando excelência técnica com as altas exigências do mercado profissional.",
      tags: [
        "MORFOLOGIA",
        "EDITORIAL",
        "MERCADO DE LUXO",
      ],
      image: "/year2-hero.jpg",
      imageMobile: "/year2-hero-mobile.jpg",
      slug: "professional-makeup-year-2",
    },
    {
      year: 3,
      title: "PEDAGOGIA E FORMAÇÃO",
      subtitle: "Programa de Maquilhagem Profissional - Ano 3",
      description:
        "Transforme a sua experiência em competências de liderança. Desenvolva competências pedagógicas, postura profissional e a capacidade de inspirar e guiar outras pessoas com confiança e autoridade.",
      tags: [
        "PEDAGOGIA",
        "FORMAÇÃO DE MARCA",
        "LIDERANÇA",
      ],
      image: "/year3-hero.jpg",
      imageMobile: "/year3-hero-mobile.jpg",
      slug: "professional-makeup-year-3",
    },
  ],
} as const
