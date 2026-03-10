import type { ProgramOverview } from "../types"

export const overview: ProgramOverview = {
  breadcrumb: {
    home: "HOME",
    programs: "PROGRAMS"
  },

  pageTitle: "PROFESSIONAL MAKEUP PROGRAM",

  description:
    "M·ART Academy offers a progressive and modular academic journey. Each year is designed as a distinct stage of development, guiding participants from technical foundations to advanced mastery and the transmission of knowledge. The curriculum supports the growth of each artist, combining rigorous training, creative exploration, and a deep understanding of professional environments.",

  actions: {
    viewYear: "View Year",
    scheduleInfo: "Schedule Information"
  },

  programs: [
    {
      year: 1,
      title: "FOUNDATIONS",
      subtitle: "Professional Makeup Program — Year 1",

      description:
        "Build strong artistic and technical foundations within a structured and inclusive environment. This first year develops discipline, precision, and creative awareness while introducing the realities of professional makeup practice.",

      tags: [
        "TECHNICAL FOUNDATIONS",
        "PORTFOLIO DEVELOPMENT",
        "PROFESSIONAL DISCIPLINE"
      ],

      image: "/year1-hero.jpg",
      imageMobile: "/year1-hero-mobile.jpg",
      slug: "professional-makeup-year-1"
    },

    {
      year: 2,
      title: "ADVANCED MASTERY",
      subtitle: "Professional Makeup Program — Year 2",

      description:
        "Deepen your technical expertise and refine your artistic identity. This year focuses on advanced techniques, professional precision, and the development of a distinctive creative signature aligned with the highest industry standards.",

      tags: [
        "MORPHOLOGY",
        "EDITORIAL",
        "LUXURY ENVIRONMENTS"
      ],

      image: "/year2-hero.jpg",
      imageMobile: "/year2-hero-mobile.jpg",
      slug: "professional-makeup-year-2"
    },

    {
      year: 3,
      title: "EDUCATOR & TRAINER",
      subtitle: "Professional Makeup Program — Year 3",

      description:
        "Transform advanced expertise into the ability to guide and inspire others. This final year develops pedagogical methodology, leadership presence, and the professional authority required to teach, mentor, and represent brands within the industry.",

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