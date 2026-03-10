import type { ProgramOverview } from "../types"


export const overview: ProgramOverview = {
  breadcrumb: {
    home: "HOME",
    programs: "PROGRAMMES"
  },
  pageTitle: "PROFESSIONAL MAKEUP PROGRAMME",
  description:
    "M·ART Academy offers a progressive and modular academic journey. Each year is structured as an independent experience, nurturing your evolution from foundational techniques to mastery and the ability to guide others. Our curriculum empowers every participant to achieve excellence at each stage of their unique creative path.",
  actions: {
    viewYear: "View Year",
    scheduleInfo: "Schedule Info"
  },
  programs: [
    {
      year: 1,
      title: "FOUNDATIONS",
      subtitle: "Professional Makeup Programme - Year 1",
      description:
        "Establish refined artistic and technical foundations in an inclusive environment that embraces all identities. Develop the discipline and creative vision essential for entering the professional realm of makeup artistry.",
      tags: [
        "TECHNICAL BASE",
        "PORTFOLIO",
        "INDUSTRY DISCIPLINE"
      ],
      image: "/year1-hero.jpg",
      imageMobile: "/year1-hero-mobile.jpg",
      slug: "professional-makeup-year-1"
    },
    {
      year: 2,
      title: "ADVANCED MASTERY",
      subtitle: "Professional Makeup Programme - Year 2",
      description:
        "Cultivate and refine your distinctive artistic identity while mastering advanced techniques. This transformative year is designed to elevate your artistry with professionalism, creativity, and a profound understanding of the industry's most exacting standards.",
      tags: [
        "MORPHOLOGY",
        "EDITORIAL",
        "LUXURY MARKET"
      ],
      image: "/year2-hero.jpg",
      imageMobile: "/year2-hero-mobile.jpg",
      slug: "professional-makeup-year-2"
    },
    {
      year: 3,
      title: "EDUCATOR & TRAINER",
      subtitle: "Professional Makeup Programme - Year 3",
      description:
        "Transform your refined expertise into the ability to inspire others. Further develop your leadership presence, pedagogical methods, and professional authority to guide and mentor with confidence and grace.",
      tags: [
        "PEDAGOGY",
        "BRAND TRAINING",
        "LEADERSHIP"
      ],
      image: "/year3-hero.jpg",
      imageMobile: "/year3-hero-mobile.jpg",
      slug: "professional-makeup-year-3"
    }
  ]
} as const
