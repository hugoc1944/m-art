import type { ProgramOverview } from "../types"


export const overview: ProgramOverview = {
  breadcrumb: {
    home: "ACCUEIL",
    programs: "PROGRAMMES"
  },
  pageTitle: "PROGRAMME DE MAQUILLAGE PROFESSIONNEL",
  description:
    "La M·ART Academy propose un parcours académique progressif et modulaire. Chaque année est conçue comme une expérience autonome, accompagnant votre développement depuis les techniques fondamentales jusqu'à la maîtrise, tout en vous donnant les moyens d'inspirer d'autres artistes. Notre cursus permet à chaque participant·e d'atteindre l'excellence à chaque étape de son parcours créatif unique.",
  actions: {
    viewYear: "Découvrir l'année",
    scheduleInfo: "Infos et horaires"
  },
  programs: [
    {
      year: 1,
      title: "FONDATIONS",
      subtitle: "Programme de Maquillage Professionnel - Année 1",
      description:
        "Posez des bases artistiques et techniques solides dans un environnement inclusif qui valorise toutes les identités. Développez la discipline et les compétences créatives essentielles pour réussir votre entrée dans le monde professionnel du maquillage.",
      tags: [
        "BASE TECHNIQUE",
        "PORTFOLIO",
        "DISCIPLINE PROFESSIONNELLE"
      ],
      image: "/year1-hero.jpg",
      imageMobile: "/year1-hero-mobile.jpg",
      slug: "professional-makeup-year-1"
    },
    {
      year: 2,
      title: "MAÎTRISE AVANCÉE",
      subtitle: "Programme de Maquillage Professionnel - Année 2",
      description:
        "Affirmez votre identité artistique tout en maîtrisant des techniques avancées. Cette année vous prépare à vous démarquer par votre excellence professionnelle, votre créativité affinée et une compréhension approfondie des exigences haut de gamme du secteur.",
      tags: [
        "MORPHOLOGIE",
        "ÉDITORIAL",
        "MARCHÉ DU LUXE"
      ],
      image: "/year2-hero.jpg",
      imageMobile: "/year2-hero-mobile.jpg",
      slug: "professional-makeup-year-2"
    },
    {
      year: 3,
      title: "PÉDAGOGIE & FORMATION",
      subtitle: "Programme de Maquillage Professionnel - Année 3",
      description:
        "Transformez votre expertise avancée en une capacité à inspirer et guider d'autres talents. Développez votre leadership artistique, vos compétences pédagogiques et votre présence professionnelle pour accompagner avec élégance et engagement.",
      tags: [
        "PÉDAGOGIE",
        "FORMATION DE MARQUE",
        "LEADERSHIP"
      ],
      image: "/year3-hero.jpg",
      imageMobile: "/year3-hero-mobile.jpg",
      slug: "professional-makeup-year-3"
    }
  ]
} as const
