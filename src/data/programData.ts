import { ContentSectionProps } from "@/components/shared/ContentSection"
import { Locale } from "@/i18n/config"

/* ========================================
   PROGRAM CARD (PROGRAMS PAGE)
======================================== */

export interface ProgramOverviewCard {
  year: 1 | 2 | 3
  title: string
  subtitle: string
  description: string
  tags: string[]
  image: string
  imageMobile?: string
  slug: string
}

/* ========================================
   PROGRAM OVERVIEW PAGE CONTENT
======================================== */

export interface ProgramOverview {
  breadcrumb: {
    home: string
    programs: string
  }

  pageTitle: string
  description: string

  actions: {
    viewYear: string
    scheduleInfo: string
  }

  programs: ProgramOverviewCard[]
}

/* ========================================
   YEAR CONTENT (INDIVIDUAL PROGRAM PAGES)
======================================== */

export interface YearContent {
  year: 1 | 2 | 3

  hero: {
    breadcrumb: {
      home: string
      programs: string
      current: string
    }
    headline: string
    subheadline: string
    ctaLabel: string
    ctaHref: string
    backgroundImage: string
    backgroundImageMobile?: string
  }

  infoBand: {
    items: {
      icon: string
      label: string
      value: string
    }[]
  }

  intro: {
    headline: string
    bodyParagraphs: string[]

    cta: {
      label: string
      href: string
    }

    infoLinks: string[]

    sessionDetails: {
      sessionLabel: string
      programTitle: string
      duration: string
      hours: string
      differentiatorsTitle: string
      differentiators: string[]
    }
  }

  diplomaSelector: {
    heading: string
    years: {
      year: 1 | 2 | 3
      label: string
      title: string
      href: string
    }[]
  }

  contentSections: ContentSectionProps[]

  yearNavigation: {
    yearLabel: string
  }
}

/* ========================================
   FULL PROGRAM DATA STRUCTURE
======================================== */

export interface ProgramLocaleData {
  overview: ProgramOverview
  years: Record<1 | 2 | 3, YearContent>
}

export type ProgramData = Record<Locale, ProgramLocaleData>
/* ========================================
   PROGRAM DATA
======================================== */

export const programData: ProgramData = {

  en: {

    /* ========================================
       PROGRAMS OVERVIEW
    ======================================== */

     overview: {

      breadcrumb: {
        home: "HOME",
        programs: "PROGRAMS"
      },

      pageTitle: "PROFESSIONAL MAKEUP PROGRAM",

      description:
        "A progressive yet modular academic structure, allowing each year to be taken independently, from foundational mastery to advanced expertise and professional transmission.",

      actions: {
        viewYear: "View Year",
        scheduleInfo: "Schedule Info"
      },

      programs: [

        {
          year: 1,
          title: "FOUNDATIONS",
          subtitle: "Professional Makeup Program - Year 1",
          description:
            "Build the technical and artistic foundations required to enter the professional makeup industry with structure and discipline.",
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
          subtitle: "Professional Makeup Program - Year 2",
          description:
            "Affirm your artistic identity and master advanced techniques designed for premium professional positioning.",
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
          subtitle: "Professional Makeup Program - Year 3",
          description:
            "Transform expertise into transmission. Develop leadership, pedagogy, and professional authority.",
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

    },

    /* ========================================
       YEAR CONTENT
    ======================================== */

    years: {

  /* =========================================================
     YEAR 1
  ========================================================= */

  1: {
    year: 1,

    hero: {
      breadcrumb: {
        home: "HOME",
        programs: "PROGRAMS",
        current: "PROFESSIONAL MAKEUP - YEAR 1"
      },
      headline: "PROFESSIONAL MAKEUP PROGRAM\nYEAR 1: FOUNDATIONS",
      subheadline:
        "From beauty to cinema. From fashion to transformation. Celebrate every face.",
      ctaLabel: "Schedule an Information Meeting",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year1-hero.jpg",
      backgroundImageMobile: "/year1-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Duration", value: "September – June" },
        { icon: "/icons/format.png", label: "Format", value: "Part-time (morning schedule)" },
        { icon: "/icons/language.png", label: "Language", value: "French / English" },
        { icon: "/icons/diploma.png", label: "Diploma", value: "Professional Makeup Artistry & Image Consulting" },
        { icon: "/icons/location.png", label: "Location", value: "Geneva, Switzerland" }
      ]
    },

    intro: {
      headline: "BUILD YOUR FOUNDATION",

      bodyParagraphs: [
        "Step into the world of professional makeup and unlock your creative potential in an environment where every identity, every background, and every beauty is welcomed.",
        "This immersive year guides you step by step to transform passion into profession. Together, we create, transform, and tell stories — celebrating all singularities through makeup."
      ],

      cta: {
        label: "Schedule an Info Meeting",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Professional Certification",
        "Curriculum Details",
        "Teaching Methods",
        "Examination & Diploma",
        "Accessibility Information"
      ],

      sessionDetails: {
        sessionLabel: "2026–2027 SESSION",
        programTitle: "Professional Makeup Artist Program - Year 1",
        duration: "September – June",
        hours: "Structured part-time immersive curriculum",
        differentiatorsTitle: "WHAT SETS THIS FORMATION APART",
        differentiators: [
          "Inclusive approach to all skin tones and identities",
          "Daily guided technical practice",
          "Professional photoshoots & portfolio development",
          "Strong artistic and industry foundations"
        ]
      }
    },

    diplomaSelector: {
      heading: "THREE PATHWAYS. THREE DIPLOMAS.",
      years: [
        { year: 1, label: "YEAR 1", title: "Professional Makeup Artistry & Image Consulting", href: "/programs/professional-makeup-year-1" },
        { year: 2, label: "YEAR 2", title: "Advanced Techniques & Image Consulting", href: "/programs/professional-makeup-year-2" },
        { year: 3, label: "YEAR 3", title: "Certified Makeup Educator & Trainer", href: "/programs/professional-makeup-year-3" }
      ]
    },

    yearNavigation: { yearLabel: "YEAR" },

    contentSections: [
      {
        heading: "TRAINING DETAILS",
        bodyParagraphs: [
          "Throughout the year, you practice intensively across all fields of professional makeup: beauty, fashion, bridal, artistic, editorial, theatre, cinema, special effects, and digital creation.",
          "Each look is first demonstrated, then practiced with guidance, and captured during professional photoshoots to build a strong and impactful portfolio.",
          "You master essential foundations such as color theory, morphology, dermatology, and skin preparation, alongside professional techniques used backstage, on set, and in studio environments.",
          "Thematic creative weeks, guest industry professionals, and personal projects allow you to explore your own style while developing discipline, precision, and confidence."
        ],
        closingStatement: "Creative. Inclusive. Professionally transformative.",
        image: "/year1-training.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },
      {
        heading: "OBJECTIVES & CONTEXT",
        subheading: "CAREER OPPORTUNITIES",
        bodyParagraphs: [
          "This program prepares you to work independently or within professional teams across multiple sectors of the makeup industry.",
          "By the end of the year, you leave with technical mastery, a confident artistic voice, and a portfolio that reflects your versatility."
        ],
        bulletPoints: [
          "Beauty & Fashion",
          "Social Media & Content Creation",
          "Theatre & Film",
          "Special Effects (FX)",
          "Editorial & Artistic Productions",
          "Events & Bridal",
          "Freelance Makeup Artistry"
        ],
        closingStatement:
          "A year to reveal your potential, refine your skills, and begin building a career without limits.",
        image: "/year1-objectives.jpeg",
        imagePosition: "left",
        backgroundColor: "light-grey"
      }
    ]
  },

  /* =========================================================
     YEAR 2
  ========================================================= */

  2: {
    year: 2,

    hero: {
      breadcrumb: {
        home: "HOME",
        programs: "PROGRAMS",
        current: "PROFESSIONAL MAKEUP - YEAR 2"
      },
      headline: "PROFESSIONAL MAKEUP PROGRAM\nYEAR 2: ADVANCED MASTERY",
      subheadline: "Affirm your signature. Refine your expertise. Own your position.",
      ctaLabel: "Schedule an Information Meeting",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year2-hero.jpg",
      backgroundImageMobile: "/year2-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Duration", value: "September – June" },
        { icon: "/icons/format.png", label: "Format", value: "Part-time (morning schedule)" },
        { icon: "/icons/language.png", label: "Language", value: "French / English" },
        { icon: "/icons/diploma.png", label: "Diploma", value: "Advanced Techniques & Image Consulting" },
        { icon: "/icons/location.png", label: "Location", value: "Geneva, Switzerland" }
      ]
    },

    intro: {
      headline: "AFFIRM YOUR ARTISTRY",

      bodyParagraphs: [
        "After exploring the full spectrum of makeup artistry in Year 1, this second year guides you toward advanced mastery, technical precision, and confident professional positioning.",
        "Here, it is no longer only about creating. It is about analyzing, structuring, adapting, performing — and affirming a strong, intentional artistic vision."
      ],

      cta: {
        label: "Schedule an Info Meeting",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Professional Certification",
        "Curriculum Details",
        "Teaching Methods",
        "Examination & Diploma",
        "Accessibility Information"
      ],

      sessionDetails: {
        sessionLabel: "2026–2027 SESSION",
        programTitle: "Advanced Makeup Artistry - Year 2",
        duration: "September – June",
        hours: "Advanced specialization and professional immersion",
        differentiatorsTitle: "WHAT SETS THIS FORMATION APART",
        differentiators: [
          "Advanced morphological analysis & visagism",
          "High-level technical precision",
          "Luxury and editorial positioning",
          "Personal branding & artistic signature development"
        ]
      }
    },

    diplomaSelector: undefined as any,
    yearNavigation: { yearLabel: "YEAR" },

    contentSections: [
      {
        heading: "ADVANCED TECHNICAL EXPERTISE",
        subheading: "Image Consulting & Advanced Morphological Analysis",
        bodyParagraphs: [
          "You deepen your expertise in advanced morphological analysis and image consulting, learning to justify every artistic choice through solid professional evaluation.",
          "Creativity becomes intentional, structured, and fully mastered — adaptable to every face, every client, and every professional context."
        ],
        bulletPoints: [
          "In-depth face and body morphology studies",
          "Expert color analysis",
          "Personalized technical corrections",
          "Makeup / hair / styling harmonization",
          "Development of a coherent artistic signature"
        ],
        closingStatement: "Precision meets vision. Technique serves intention.",
        image: "/year2-im1.jpg",
        imagePosition: "left",
        backgroundColor: "white"
      },
      {
        heading: "TECHNICAL MASTERY & ARTISTIC SIGNATURE",
        bodyParagraphs: [
          "High-level technical mastery combines with creative exploration to help you sign your work with confidence, clarity, and maturity."
        ],
        bulletPoints: [
          "Advanced HD complexion techniques (photo, video, studio lighting)",
          "Professional sculpting & structural correction",
          "Conceptual editorial makeup",
          "Luxury and premium client adaptation",
          "Advanced FX refinement & realistic textures"
        ],
        closingStatement: "The objective: no longer just to execute — but to sign.",
        image: "/year2-im2.jpg",
        imagePosition: "right",
        backgroundColor: "light-grey"
      },
      {
        heading: "PROFESSIONAL IMMERSION & CAREER DEVELOPMENT",
        bodyParagraphs: [
          "Because a professional artist must perform in real conditions, this year includes immersive scenarios and industry simulations."
        ],
        bulletPoints: [
          "Real client brief simulations",
          "Time management & speed execution",
          "Team collaboration (photographers, stylists, models)",
          "Premium portfolio refinement"
        ],
        closingStatement:
          "You do not simply become a stronger artist. You become a positioned professional.",
        image: "/year2-im3.jpg",
        imagePosition: "left",
        backgroundColor: "white"
      }
    ]
  },

  /* =========================================================
     YEAR 3
  ========================================================= */

  3: {
    year: 3,

    hero: {
      breadcrumb: {
        home: "HOME",
        programs: "PROGRAMS",
        current: "PROFESSIONAL MAKEUP - YEAR 3"
      },
      headline: "PROFESSIONAL MAKEUP PROGRAM\nYEAR 3: EDUCATOR & TRAINER",
      subheadline: "Transmit. Lead. Inspire. Shape the future of artistry.",
      ctaLabel: "Schedule an Information Meeting",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year3-hero.jpg",
      backgroundImageMobile: "/year3-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Duration", value: "September – June" },
        { icon: "/icons/format.png", label: "Format", value: "Part-time (morning schedule)" },
        { icon: "/icons/language.png", label: "Language", value: "French / English" },
        { icon: "/icons/diploma.png", label: "Diploma", value: "Certified Makeup Educator & Trainer" },
        { icon: "/icons/location.png", label: "Location", value: "Geneva, Switzerland" }
      ]
    },

    intro: {
      headline: "BECOME AN EDUCATOR",

      bodyParagraphs: [
        "After mastering technique and affirming your artistic identity, Year 3 invites you into a new role: expert educator.",
        "It is no longer only about knowing how to do. It is about knowing how to transmit, structure knowledge, guide diverse learners, and inspire growth with clarity and confidence."
      ],

      cta: {
        label: "Schedule an Info Meeting",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Professional Certification",
        "Curriculum Details",
        "Teaching Methods",
        "Examination & Diploma",
        "Accessibility Information"
      ],

      sessionDetails: {
        sessionLabel: "2026–2027 SESSION",
        programTitle: "Makeup Educator Training - Year 3",
        duration: "September – June",
        hours: "Pedagogical methodology and supervised professional teaching practice",
        differentiatorsTitle: "WHAT SETS THIS FORMATION APART",
        differentiators: [
          "Structured teaching methodology",
          "Brand & product training preparation",
          "Public speaking and stage presence",
          "Independent training business development"
        ]
      }
    },

    diplomaSelector: undefined as any,
    yearNavigation: { yearLabel: "YEAR" },

    contentSections: [
      {
        heading: "PEDAGOGY & KNOWLEDGE TRANSMISSION",
        subheading: "Teaching Methodology",
        bodyParagraphs: [
          "You learn to transform your expertise into impactful educational content through structured methodology and supervised practice."
        ],
        bulletPoints: [
          "Designing structured programs",
          "Defining clear learning objectives",
          "Adapting communication to different experience levels",
          "Managing groups while individualizing support",
          "Developing a credible educator posture"
        ],
        closingStatement: "Your expertise becomes transferable. Your impact multiplies.",
        image: "/year3-im1.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },

      {
        heading: "BRAND TRAINING & STAGE PRESENCE",
        subheading: "Becoming a Trainer for Professional Beauty Brands",
        bodyParagraphs: [
          "Professional educators represent brands, lead demonstrations, and speak publicly with clarity, precision, and authenticity."
        ],
        bulletPoints: [
          "Technical product analysis",
          "Translating marketing into pedagogy",
          "Expert demonstrations",
          "Public speaking techniques",
          "Live masterclass execution"
        ],
        closingStatement: "An educator inspires through both mastery and presence.",
        image: "/year3-im2.jpg",
        imagePosition: "left",
        backgroundColor: "light-grey"
      },

      {
        heading: "BUILDING YOUR TRAINING OFFER",
        bodyParagraphs: [
          "Learn to structure, position, and commercialize your expertise while preserving your professional integrity and value."
        ],
        bulletPoints: [
          "Creating your own modules",
          "Structuring profitable workshops",
          "Strategic pricing",
          "Developing expert positioning",
          "Prospecting schools & brands"
        ],
        image: "/year3-im3_v2.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },

      {
        heading: "A YEAR TO TAKE THE LEAD",
        bodyParagraphs: [
          "Through real teaching simulations and supervised practice, you develop leadership posture, institutional credibility, and strategic vision."
        ],
        bulletPoints: [
          "Teach in professional schools",
          "Train for cosmetic brands",
          "Lead retail education",
          "Launch independent workshops"
        ],
        closingStatement:
          "You no longer become only a makeup expert. You become an expert in transmission.",
        image: "",
        imagePosition: "left",
        backgroundColor: "light-grey"
      }
    ]
  }

}

  },

  fr: {

  overview: {

  breadcrumb: {
    home: "ACCUEIL",
    programs: "PROGRAMMES"
  },

  pageTitle: "PROGRAMME PROFESSIONNEL DE MAQUILLAGE",

  description:
    "Une structure académique progressive et modulaire, permettant de suivre chaque année indépendamment, des fondations techniques à l’expertise avancée et à la transmission professionnelle.",

  actions: {
    viewYear: "Voir l’Année",
    scheduleInfo: "Planifier un Rendez-vous"
  },

  programs: [

    {
      year: 1,
      title: "FONDATIONS",
      subtitle: "Programme Professionnel de Maquillage – Année 1",
      description:
        "Construisez les bases techniques et artistiques nécessaires pour entrer dans l’industrie professionnelle du maquillage avec structure et discipline.",
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
      subtitle: "Programme Professionnel de Maquillage – Année 2",
      description:
        "Affirmez votre identité artistique et maîtrisez des techniques avancées conçues pour un positionnement professionnel premium.",
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
      title: "FORMATEUR & ÉDUCATEUR",
      subtitle: "Programme Professionnel de Maquillage – Année 3",
      description:
        "Transformez l’expertise en transmission. Développez leadership, pédagogie et autorité professionnelle.",
      tags: [
        "PÉDAGOGIE",
        "FORMATION DE MARQUES",
        "LEADERSHIP"
      ],
      image: "/year3-hero.jpg",
      imageMobile: "/year3-hero-mobile.jpg",
      slug: "professional-makeup-year-3"
    }

  ]

},

 years: {

  /* =========================================================
     YEAR 1
  ========================================================= */

  1: {
    year: 1,

    hero: {
      breadcrumb: {
        home: "ACCUEIL",
        programs: "PROGRAMMES",
        current: "MAQUILLAGE PROFESSIONNEL - ANNÉE 1"
      },
      headline: "PROGRAMME PROFESSIONNEL DE MAQUILLAGE\nANNÉE 1 : FONDATIONS",
      subheadline:
        "De la beauté au cinéma. De la mode à la transformation. Célébrez chaque visage.",
      ctaLabel: "Planifier une Réunion d’Information",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year1-hero.jpg",
      backgroundImageMobile: "/year1-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Durée", value: "Septembre – Juin" },
        { icon: "/icons/format.png", label: "Format", value: "Temps partiel (horaires du matin)" },
        { icon: "/icons/language.png", label: "Langue", value: "Français / Anglais" },
        { icon: "/icons/diploma.png", label: "Diplôme", value: "Maquillage Professionnel & Conseil en Image" },
        { icon: "/icons/location.png", label: "Lieu", value: "Genève, Suisse" }
      ]
    },

    intro: {
      headline: "CONSTRUIRE VOS FONDATIONS",

      bodyParagraphs: [
        "Entrez dans l’univers du maquillage professionnel et révélez votre potentiel créatif dans un environnement où chaque identité, chaque parcours et chaque forme de beauté sont accueillis.",
        "Cette année immersive vous guide pas à pas pour transformer la passion en profession. Ensemble, nous créons, transformons et racontons des histoires — en célébrant toutes les singularités à travers le maquillage."
      ],

      cta: {
        label: "Planifier une Réunion d’Information",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Certification Professionnelle",
        "Détails du Programme",
        "Méthodes d’Enseignement",
        "Examens & Diplôme",
        "Informations d’Accessibilité"
      ],

      sessionDetails: {
        sessionLabel: "SESSION 2026–2027",
        programTitle: "Programme Maquilleur Professionnel - Année 1",
        duration: "Septembre – Juin",
        hours: "Programme immersif structuré à temps partiel",
        differentiatorsTitle: "CE QUI DISTINGUE CETTE FORMATION",
        differentiators: [
          "Approche inclusive pour toutes les carnations et identités",
          "Pratique technique guidée au quotidien",
          "Shooting photos professionnels et développement de portfolio",
          "Bases artistiques et professionnelles solides"
        ]
      }
    },

    diplomaSelector: {
      heading: "TROIS PARCOURS. TROIS DIPLÔMES.",
      years: [
        { year: 1, label: "ANNÉE 1", title: "Maquillage Professionnel & Conseil en Image", href: "/programs/professional-makeup-year-1" },
        { year: 2, label: "ANNÉE 2", title: "Techniques Avancées & Conseil en Image", href: "/programs/professional-makeup-year-2" },
        { year: 3, label: "ANNÉE 3", title: "Formateur Certifié en Maquillage", href: "/programs/professional-makeup-year-3" }
      ]
    },

    yearNavigation: { yearLabel: "ANNÉE" },

    contentSections: [
      {
        heading: "DÉTAILS DE LA FORMATION",
        bodyParagraphs: [
          "Tout au long de l’année, vous pratiquez intensivement dans tous les domaines du maquillage professionnel : beauté, mode, mariée, artistique, éditorial, théâtre, cinéma, effets spéciaux et création digitale.",
          "Chaque maquillage est d’abord démontré, puis pratiqué avec accompagnement et capturé lors de shootings professionnels afin de construire un portfolio solide et impactant.",
          "Vous maîtrisez les bases essentielles telles que la théorie des couleurs, la morphologie, la dermatologie et la préparation de la peau, ainsi que les techniques professionnelles utilisées en coulisses, sur les plateaux et en studio.",
          "Des semaines créatives thématiques, des intervenants professionnels de l’industrie et des projets personnels vous permettent d’explorer votre propre style tout en développant discipline, précision et confiance."
        ],
        closingStatement: "Créatif. Inclusif. Professionnellement transformateur.",
        image: "/year1-training.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },
      {
        heading: "OBJECTIFS & CONTEXTE",
        subheading: "OPPORTUNITÉS DE CARRIÈRE",
        bodyParagraphs: [
          "Ce programme vous prépare à travailler de manière indépendante ou au sein d’équipes professionnelles dans de multiples secteurs de l’industrie du maquillage.",
          "À la fin de l’année, vous repartez avec une maîtrise technique, une voix artistique affirmée et un portfolio reflétant votre polyvalence."
        ],
        bulletPoints: [
          "Beauté & Mode",
          "Réseaux Sociaux & Création de Contenu",
          "Théâtre & Cinéma",
          "Effets Spéciaux (FX)",
          "Productions Éditoriales & Artistiques",
          "Événements & Mariage",
          "Maquillage Freelance"
        ],
        closingStatement:
          "Une année pour révéler votre potentiel, affiner vos compétences et commencer à construire une carrière sans limites.",
        image: "/year1-objectives.jpeg",
        imagePosition: "left",
        backgroundColor: "light-grey"
      }
    ]
  },

  /* =========================================================
     YEAR 2
  ========================================================= */

  2: {
    year: 2,

    hero: {
      breadcrumb: {
        home: "ACCUEIL",
        programs: "PROGRAMMES",
        current: "MAQUILLAGE PROFESSIONNEL - ANNÉE 2"
      },
      headline: "PROGRAMME PROFESSIONNEL DE MAQUILLAGE\nANNÉE 2 : MAÎTRISE AVANCÉE",
      subheadline: "Affirmez votre signature. Affinez votre expertise. Assumez votre position.",
      ctaLabel: "Planifier une Réunion d’Information",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year2-hero.jpg",
      backgroundImageMobile: "/year2-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Durée", value: "Septembre – Juin" },
        { icon: "/icons/format.png", label: "Format", value: "Temps partiel (horaires du matin)" },
        { icon: "/icons/language.png", label: "Langue", value: "Français / Anglais" },
        { icon: "/icons/diploma.png", label: "Diplôme", value: "Techniques Avancées & Conseil en Image" },
        { icon: "/icons/location.png", label: "Lieu", value: "Genève, Suisse" }
      ]
    },

    intro: {
      headline: "AFFIRMEZ VOTRE ART",

      bodyParagraphs: [
        "Après avoir exploré l’ensemble des domaines du maquillage lors de la première année, cette deuxième année vous guide vers une maîtrise avancée, une précision technique et un positionnement professionnel affirmé.",
        "Il ne s’agit plus seulement de créer. Il s’agit d’analyser, structurer, adapter et performer — en affirmant une vision artistique forte et intentionnelle."
      ],

      cta: {
        label: "Planifier une Réunion d’Information",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Certification Professionnelle",
        "Détails du Programme",
        "Méthodes d’Enseignement",
        "Examens & Diplôme",
        "Informations d’Accessibilité"
      ],

      sessionDetails: {
        sessionLabel: "SESSION 2026–2027",
        programTitle: "Maquillage Avancé - Année 2",
        duration: "Septembre – Juin",
        hours: "Spécialisation avancée et immersion professionnelle",
        differentiatorsTitle: "CE QUI DISTINGUE CETTE FORMATION",
        differentiators: [
          "Analyse morphologique avancée et visagisme",
          "Précision technique de haut niveau",
          "Positionnement éditorial et luxe",
          "Développement d’une marque personnelle et d’une signature artistique"
        ]
      }
    },

    diplomaSelector: undefined as any,
    yearNavigation: { yearLabel: "ANNÉE" },

    contentSections: [
      {
        heading: "EXPERTISE TECHNIQUE AVANCÉE",
        subheading: "Conseil en Image & Analyse Morphologique Avancée",
        bodyParagraphs: [
          "Vous approfondissez votre expertise en analyse morphologique avancée et en conseil en image, en apprenant à justifier chaque choix artistique par une évaluation professionnelle solide.",
          "La créativité devient intentionnelle, structurée et pleinement maîtrisée — adaptable à chaque visage, chaque client et chaque contexte professionnel."
        ],
        bulletPoints: [
          "Études approfondies de la morphologie du visage et du corps",
          "Analyse experte des couleurs",
          "Corrections techniques personnalisées",
          "Harmonisation maquillage / coiffure / stylisme",
          "Développement d’une signature artistique cohérente"
        ],
        closingStatement: "La précision rencontre la vision. La technique sert l’intention.",
        image: "/year2-im1.jpg",
        imagePosition: "left",
        backgroundColor: "white"
      },

      {
        heading: "MAÎTRISE TECHNIQUE & SIGNATURE ARTISTIQUE",
        bodyParagraphs: [
          "La maîtrise technique de haut niveau se combine avec l’exploration créative afin de vous permettre de signer votre travail avec confiance, clarté et maturité."
        ],
        bulletPoints: [
          "Techniques avancées de teint HD (photo, vidéo, éclairage studio)",
          "Sculpture professionnelle et correction structurelle",
          "Maquillage éditorial conceptuel",
          "Adaptation aux clients premium et luxe",
          "Perfectionnement avancé des FX et textures réalistes"
        ],
        closingStatement: "L’objectif : ne plus seulement exécuter, mais signer.",
        image: "/year2-im2.jpg",
        imagePosition: "right",
        backgroundColor: "light-grey"
      },

      {
        heading: "IMMERSION PROFESSIONNELLE & DÉVELOPPEMENT DE CARRIÈRE",
        bodyParagraphs: [
          "Parce qu’un artiste professionnel doit performer dans des conditions réelles, cette année inclut des scénarios immersifs et des simulations de l’industrie."
        ],
        bulletPoints: [
          "Simulations de briefs clients réels",
          "Gestion du temps et exécution rapide",
          "Collaboration en équipe (photographes, stylistes, modèles)",
          "Perfectionnement du portfolio professionnel"
        ],
        closingStatement:
          "Vous ne devenez pas seulement un artiste plus fort. Vous devenez un professionnel positionné.",
        image: "/year2-im3.jpg",
        imagePosition: "left",
        backgroundColor: "white"
      }
    ]
  },

  /* =========================================================
     YEAR 3
  ========================================================= */

  3: {
    year: 3,

    hero: {
      breadcrumb: {
        home: "ACCUEIL",
        programs: "PROGRAMMES",
        current: "MAQUILLAGE PROFESSIONNEL - ANNÉE 3"
      },
      headline: "PROGRAMME PROFESSIONNEL DE MAQUILLAGE\nANNÉE 3 : FORMATEUR & ÉDUCATEUR",
      subheadline: "Transmettre. Diriger. Inspirer. Façonner l’avenir de l’art du maquillage.",
      ctaLabel: "Planifier une Réunion d’Information",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year3-hero.jpg",
      backgroundImageMobile: "/year3-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Durée", value: "Septembre – Juin" },
        { icon: "/icons/format.png", label: "Format", value: "Temps partiel (horaires du matin)" },
        { icon: "/icons/language.png", label: "Langue", value: "Français / Anglais" },
        { icon: "/icons/diploma.png", label: "Diplôme", value: "Formateur Certifié en Maquillage" },
        { icon: "/icons/location.png", label: "Lieu", value: "Genève, Suisse" }
      ]
    },

    intro: {
      headline: "DEVENIR FORMATEUR",

      bodyParagraphs: [
        "Après avoir maîtrisé la technique et affirmé votre identité artistique, la troisième année vous invite à endosser un nouveau rôle : celui d’éducateur expert.",
        "Il ne s’agit plus seulement de savoir faire. Il s’agit de savoir transmettre, structurer les connaissances, accompagner différents profils d’apprenants et inspirer leur progression."
      ],

      cta: {
        label: "Planifier une Réunion d’Information",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Certification Professionnelle",
        "Détails du Programme",
        "Méthodes d’Enseignement",
        "Examens & Diplôme",
        "Informations d’Accessibilité"
      ],

      sessionDetails: {
        sessionLabel: "SESSION 2026–2027",
        programTitle: "Formation Formateur Maquillage - Année 3",
        duration: "Septembre – Juin",
        hours: "Méthodologie pédagogique et pratique d’enseignement supervisée",
        differentiatorsTitle: "CE QUI DISTINGUE CETTE FORMATION",
        differentiators: [
          "Méthodologie d’enseignement structurée",
          "Préparation aux formations marques et produits",
          "Prise de parole et présence scénique",
          "Développement d’une activité indépendante de formation"
        ]
      }
    },

    diplomaSelector: undefined as any,
    yearNavigation: { yearLabel: "ANNÉE" },

    contentSections: [
      {
        heading: "PÉDAGOGIE & TRANSMISSION DU SAVOIR",
        subheading: "Méthodologie d’Enseignement",
        bodyParagraphs: [
          "Vous apprenez à transformer votre expertise en contenu pédagogique impactant grâce à une méthodologie structurée et une pratique supervisée."
        ],
        bulletPoints: [
          "Conception de programmes structurés",
          "Définition d’objectifs pédagogiques clairs",
          "Adaptation de la communication selon les niveaux",
          "Gestion de groupe avec accompagnement individualisé",
          "Développement d’une posture crédible d’éducateur"
        ],
        closingStatement: "Votre expertise devient transmissible. Votre impact se multiplie.",
        image: "/year3-im1.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },

      {
        heading: "FORMATION MARQUES & PRÉSENCE SCÉNIQUE",
        subheading: "Devenir Formateur pour les Marques Professionnelles",
        bodyParagraphs: [
          "Les éducateurs professionnels représentent les marques, réalisent des démonstrations et s’expriment en public avec clarté, précision et authenticité."
        ],
        bulletPoints: [
          "Analyse technique des produits",
          "Traduction du marketing en pédagogie",
          "Démonstrations expertes",
          "Techniques de prise de parole en public",
          "Animation de masterclasses en direct"
        ],
        closingStatement: "Un éducateur inspire autant par sa maîtrise que par sa présence.",
        image: "/year3-im2.jpg",
        imagePosition: "left",
        backgroundColor: "light-grey"
      },

      {
        heading: "CONSTRUIRE VOTRE OFFRE DE FORMATION",
        bodyParagraphs: [
          "Apprenez à structurer, positionner et commercialiser votre expertise tout en préservant votre intégrité et votre valeur professionnelle."
        ],
        bulletPoints: [
          "Création de modules de formation",
          "Structuration d’ateliers rentables",
          "Stratégie de tarification",
          "Développement d’un positionnement expert",
          "Prospection d’écoles et de marques"
        ],
        image: "/year3-im3_v2.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },

      {
        heading: "UNE ANNÉE POUR PRENDRE LE LEAD",
        bodyParagraphs: [
          "À travers des simulations réelles d’enseignement et une pratique supervisée, vous développez posture de leadership, crédibilité institutionnelle et vision stratégique."
        ],
        bulletPoints: [
          "Enseigner dans des écoles professionnelles",
          "Former pour des marques cosmétiques",
          "Diriger des formations en retail",
          "Lancer des workshops indépendants"
        ],
        closingStatement:
          "Vous ne devenez plus seulement expert en maquillage. Vous devenez expert en transmission.",
        image: "",
        imagePosition: "left",
        backgroundColor: "light-grey"
      }
    ]
  }

}

  },

  es: {

  overview: {

  breadcrumb: {
    home: "INICIO",
    programs: "PROGRAMAS"
  },

  pageTitle: "PROGRAMA PROFESIONAL DE MAQUILLAJE",

  description:
    "Una estructura académica progresiva y modular que permite cursar cada año de forma independiente, desde los fundamentos técnicos hasta la experiencia avanzada y la transmisión profesional.",

  actions: {
    viewYear: "Ver Año",
    scheduleInfo: "Programar Información"
  },

  programs: [

    {
      year: 1,
      title: "FUNDAMENTOS",
      subtitle: "Programa Profesional de Maquillaje – Año 1",
      description:
        "Construya las bases técnicas y artísticas necesarias para entrar en la industria profesional del maquillaje con estructura y disciplina.",
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
      subtitle: "Programa Profesional de Maquillaje – Año 2",
      description:
        "Afirme su identidad artística y domine técnicas avanzadas diseñadas para un posicionamiento profesional de alto nivel.",
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
      title: "EDUCADOR & FORMADOR",
      subtitle: "Programa Profesional de Maquillaje – Año 3",
      description:
        "Transforme la experiencia en transmisión. Desarrolle liderazgo, pedagogía y autoridad profesional.",
      tags: [
        "PEDAGOGÍA",
        "FORMACIÓN DE MARCAS",
        "LIDERAZGO"
      ],
      image: "/year3-hero.jpg",
      imageMobile: "/year3-hero-mobile.jpg",
      slug: "professional-makeup-year-3"
    }

  ]

},

years: {

  /* =========================================================
     YEAR 1
  ========================================================= */

  1: {
    year: 1,

    hero: {
      breadcrumb: {
        home: "INICIO",
        programs: "PROGRAMAS",
        current: "MAQUILLAJE PROFESIONAL - AÑO 1"
      },
      headline: "PROGRAMA PROFESIONAL DE MAQUILLAJE\nAÑO 1: FUNDAMENTOS",
      subheadline:
        "De la belleza al cine. De la moda a la transformación. Celebre cada rostro.",
      ctaLabel: "Solicitar una Reunión Informativa",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year1-hero.jpg",
      backgroundImageMobile: "/year1-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Duración", value: "Septiembre – Junio" },
        { icon: "/icons/format.png", label: "Formato", value: "Tiempo parcial (horario de mañana)" },
        { icon: "/icons/language.png", label: "Idioma", value: "Francés / Inglés" },
        { icon: "/icons/diploma.png", label: "Diploma", value: "Maquillaje Profesional y Asesoría de Imagen" },
        { icon: "/icons/location.png", label: "Ubicación", value: "Ginebra, Suiza" }
      ]
    },

    intro: {
      headline: "CONSTRUYA SUS FUNDAMENTOS",

      bodyParagraphs: [
        "Entre en el mundo del maquillaje profesional y descubra su potencial creativo en un entorno donde cada identidad, cada origen y cada forma de belleza son bienvenidos.",
        "Este año inmersivo le guía paso a paso para transformar la pasión en profesión. Juntos creamos, transformamos y contamos historias, celebrando todas las singularidades a través del maquillaje."
      ],

      cta: {
        label: "Solicitar una Reunión Informativa",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Certificación Profesional",
        "Detalles del Programa",
        "Métodos de Enseñanza",
        "Exámenes y Diploma",
        "Información de Accesibilidad"
      ],

      sessionDetails: {
        sessionLabel: "SESIÓN 2026–2027",
        programTitle: "Programa de Maquillador Profesional - Año 1",
        duration: "Septiembre – Junio",
        hours: "Programa inmersivo estructurado a tiempo parcial",
        differentiatorsTitle: "LO QUE DISTINGUE ESTA FORMACIÓN",
        differentiators: [
          "Enfoque inclusivo para todos los tonos de piel e identidades",
          "Práctica técnica guiada diariamente",
          "Sesiones fotográficas profesionales y desarrollo de portafolio",
          "Sólidas bases artísticas y profesionales"
        ]
      }
    },

    diplomaSelector: {
      heading: "TRES CAMINOS. TRES DIPLOMAS.",
      years: [
        { year: 1, label: "AÑO 1", title: "Maquillaje Profesional y Asesoría de Imagen", href: "/programs/professional-makeup-year-1" },
        { year: 2, label: "AÑO 2", title: "Técnicas Avanzadas y Asesoría de Imagen", href: "/programs/professional-makeup-year-2" },
        { year: 3, label: "AÑO 3", title: "Educador y Formador Certificado en Maquillaje", href: "/programs/professional-makeup-year-3" }
      ]
    },

    yearNavigation: { yearLabel: "AÑO" },

    contentSections: [
      {
        heading: "DETALLES DE LA FORMACIÓN",
        bodyParagraphs: [
          "A lo largo del año, practica intensivamente en todos los ámbitos del maquillaje profesional: belleza, moda, novia, artístico, editorial, teatro, cine, efectos especiales y creación digital.",
          "Cada maquillaje se demuestra primero, luego se practica con acompañamiento y se captura durante sesiones fotográficas profesionales para construir un portafolio sólido e impactante.",
          "Dominará fundamentos esenciales como teoría del color, morfología, dermatología y preparación de la piel, junto con técnicas profesionales utilizadas entre bastidores, en rodajes y en estudio.",
          "Semanas creativas temáticas, profesionales invitados de la industria y proyectos personales le permitirán explorar su propio estilo mientras desarrolla disciplina, precisión y confianza."
        ],
        closingStatement: "Creativo. Inclusivo. Profesionalmente transformador.",
        image: "/year1-training.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },
      {
        heading: "OBJETIVOS Y CONTEXTO",
        subheading: "OPORTUNIDADES PROFESIONALES",
        bodyParagraphs: [
          "Este programa le prepara para trabajar de forma independiente o dentro de equipos profesionales en múltiples sectores de la industria del maquillaje.",
          "Al finalizar el año, contará con dominio técnico, una voz artística segura y un portafolio que refleja su versatilidad."
        ],
        bulletPoints: [
          "Belleza y Moda",
          "Redes Sociales y Creación de Contenido",
          "Teatro y Cine",
          "Efectos Especiales (FX)",
          "Producciones Editoriales y Artísticas",
          "Eventos y Novias",
          "Maquillaje Freelance"
        ],
        closingStatement:
          "Un año para revelar su potencial, perfeccionar sus habilidades y comenzar a construir una carrera sin límites.",
        image: "/year1-objectives.jpeg",
        imagePosition: "left",
        backgroundColor: "light-grey"
      }
    ]
  },

  /* =========================================================
     YEAR 2
  ========================================================= */

  2: {
    year: 2,

    hero: {
      breadcrumb: {
        home: "INICIO",
        programs: "PROGRAMAS",
        current: "MAQUILLAJE PROFESIONAL - AÑO 2"
      },
      headline: "PROGRAMA PROFESIONAL DE MAQUILLAJE\nAÑO 2: MAESTRÍA AVANZADA",
      subheadline: "Afirme su firma. Refine su experiencia. Defina su posición.",
      ctaLabel: "Solicitar una Reunión Informativa",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year2-hero.jpg",
      backgroundImageMobile: "/year2-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Duración", value: "Septiembre – Junio" },
        { icon: "/icons/format.png", label: "Formato", value: "Tiempo parcial (horario de mañana)" },
        { icon: "/icons/language.png", label: "Idioma", value: "Francés / Inglés" },
        { icon: "/icons/diploma.png", label: "Diploma", value: "Técnicas Avanzadas y Asesoría de Imagen" },
        { icon: "/icons/location.png", label: "Ubicación", value: "Ginebra, Suiza" }
      ]
    },

    intro: {
      headline: "AFIRME SU ARTE",

      bodyParagraphs: [
        "Después de explorar todo el espectro del maquillaje durante el primer año, este segundo año le guía hacia una maestría avanzada, precisión técnica y un posicionamiento profesional sólido.",
        "Ya no se trata solo de crear. Se trata de analizar, estructurar, adaptar y ejecutar — afirmando una visión artística clara e intencional."
      ],

      cta: {
        label: "Solicitar una Reunión Informativa",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Certificación Profesional",
        "Detalles del Programa",
        "Métodos de Enseñanza",
        "Exámenes y Diploma",
        "Información de Accesibilidad"
      ],

      sessionDetails: {
        sessionLabel: "SESIÓN 2026–2027",
        programTitle: "Maquillaje Avanzado - Año 2",
        duration: "Septiembre – Junio",
        hours: "Especialización avanzada e inmersión profesional",
        differentiatorsTitle: "LO QUE DISTINGUE ESTA FORMACIÓN",
        differentiators: [
          "Análisis morfológico avanzado y visagismo",
          "Precisión técnica de alto nivel",
          "Posicionamiento editorial y de lujo",
          "Desarrollo de marca personal y firma artística"
        ]
      }
    },

    diplomaSelector: undefined as any,
    yearNavigation: { yearLabel: "AÑO" },

    contentSections: [
      {
        heading: "EXPERIENCIA TÉCNICA AVANZADA",
        subheading: "Consultoría de Imagen y Análisis Morfológico Avanzado",
        bodyParagraphs: [
          "Profundiza en el análisis morfológico avanzado y la consultoría de imagen, aprendiendo a justificar cada decisión artística mediante una evaluación profesional sólida.",
          "La creatividad se vuelve intencional, estructurada y plenamente dominada — adaptable a cada rostro, cada cliente y cada contexto profesional."
        ],
        bulletPoints: [
          "Estudios profundos de morfología facial y corporal",
          "Análisis experto del color",
          "Correcciones técnicas personalizadas",
          "Armonización maquillaje / cabello / estilismo",
          "Desarrollo de una firma artística coherente"
        ],
        closingStatement: "La precisión se une a la visión. La técnica sirve a la intención.",
        image: "/year2-im1.jpg",
        imagePosition: "left",
        backgroundColor: "white"
      },
      {
        heading: "MAESTRÍA TÉCNICA Y FIRMA ARTÍSTICA",
        bodyParagraphs: [
          "La maestría técnica de alto nivel se combina con la exploración creativa para ayudarle a firmar su trabajo con confianza, claridad y madurez."
        ],
        bulletPoints: [
          "Técnicas avanzadas de piel HD (foto, vídeo, iluminación de estudio)",
          "Esculpido profesional y corrección estructural",
          "Maquillaje editorial conceptual",
          "Adaptación para clientes premium y de lujo",
          "Perfeccionamiento avanzado de FX y texturas realistas"
        ],
        closingStatement: "El objetivo: no solo ejecutar, sino firmar.",
        image: "/year2-im2.jpg",
        imagePosition: "right",
        backgroundColor: "light-grey"
      },
      {
        heading: "INMERSIÓN PROFESIONAL Y DESARROLLO DE CARRERA",
        bodyParagraphs: [
          "Porque un artista profesional debe desempeñarse en condiciones reales, este año incluye escenarios inmersivos y simulaciones de la industria."
        ],
        bulletPoints: [
          "Simulación de briefs de clientes reales",
          "Gestión del tiempo y ejecución rápida",
          "Colaboración en equipo (fotógrafos, estilistas, modelos)",
          "Perfeccionamiento de portafolio profesional"
        ],
        closingStatement:
          "No solo se convierte en un artista más fuerte. Se convierte en un profesional con posicionamiento.",
        image: "/year2-im3.jpg",
        imagePosition: "left",
        backgroundColor: "white"
      }
    ]
  },

  /* =========================================================
     YEAR 3
  ========================================================= */

  3: {
    year: 3,

    hero: {
      breadcrumb: {
        home: "INICIO",
        programs: "PROGRAMAS",
        current: "MAQUILLAJE PROFESIONAL - AÑO 3"
      },
      headline: "PROGRAMA PROFESIONAL DE MAQUILLAJE\nAÑO 3: EDUCADOR Y FORMADOR",
      subheadline: "Transmitir. Liderar. Inspirar. Dar forma al futuro del arte del maquillaje.",
      ctaLabel: "Solicitar una Reunión Informativa",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year3-hero.jpg",
      backgroundImageMobile: "/year3-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Duración", value: "Septiembre – Junio" },
        { icon: "/icons/format.png", label: "Formato", value: "Tiempo parcial (horario de mañana)" },
        { icon: "/icons/language.png", label: "Idioma", value: "Francés / Inglés" },
        { icon: "/icons/diploma.png", label: "Diploma", value: "Educador y Formador Certificado en Maquillaje" },
        { icon: "/icons/location.png", label: "Ubicación", value: "Ginebra, Suiza" }
      ]
    },

    intro: {
      headline: "CONVIÉRTASE EN EDUCADOR",

      bodyParagraphs: [
        "Después de dominar la técnica y afirmar su identidad artística, el tercer año le invita a asumir un nuevo rol: el de educador experto.",
        "Ya no se trata solo de saber hacer. Se trata de saber transmitir, estructurar el conocimiento, guiar a diferentes perfiles de estudiantes e inspirar crecimiento con claridad y confianza."
      ],

      cta: {
        label: "Solicitar una Reunión Informativa",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Certificación Profesional",
        "Detalles del Programa",
        "Métodos de Enseñanza",
        "Exámenes y Diploma",
        "Información de Accesibilidad"
      ],

      sessionDetails: {
        sessionLabel: "SESIÓN 2026–2027",
        programTitle: "Formación de Educador en Maquillaje - Año 3",
        duration: "Septiembre – Junio",
        hours: "Metodología pedagógica y práctica docente supervisada",
        differentiatorsTitle: "LO QUE DISTINGUE ESTA FORMACIÓN",
        differentiators: [
          "Metodología de enseñanza estructurada",
          "Preparación para formación de productos y marcas",
          "Oratoria y presencia escénica",
          "Desarrollo de negocio independiente de formación"
        ]
      }
    },

    diplomaSelector: undefined as any,
    yearNavigation: { yearLabel: "AÑO" },

    contentSections: [
      {
        heading: "PEDAGOGÍA Y TRANSMISIÓN DEL CONOCIMIENTO",
        subheading: "Metodología de Enseñanza",
        bodyParagraphs: [
          "Aprende a transformar su experiencia en contenido educativo impactante mediante metodología estructurada y práctica supervisada."
        ],
        bulletPoints: [
          "Diseño de programas estructurados",
          "Definición de objetivos de aprendizaje claros",
          "Adaptación de la comunicación a distintos niveles",
          "Gestión de grupos con seguimiento individual",
          "Desarrollo de una postura de educador creíble"
        ],
        closingStatement: "Su experiencia se vuelve transmisible. Su impacto se multiplica.",
        image: "/year3-im1.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },

      {
        heading: "FORMACIÓN DE MARCAS Y PRESENCIA ESCÉNICA",
        subheading: "Convertirse en Formador para Marcas Profesionales",
        bodyParagraphs: [
          "Los educadores profesionales representan marcas, realizan demostraciones y hablan en público con claridad, precisión y autenticidad."
        ],
        bulletPoints: [
          "Análisis técnico de productos",
          "Traducción del marketing en pedagogía",
          "Demostraciones expertas",
          "Técnicas de comunicación en público",
          "Ejecución de masterclasses en vivo"
        ],
        closingStatement: "Un educador inspira tanto por su dominio como por su presencia.",
        image: "/year3-im2.jpg",
        imagePosition: "left",
        backgroundColor: "light-grey"
      },

      {
        heading: "CONSTRUIR SU OFERTA DE FORMACIÓN",
        bodyParagraphs: [
          "Aprenda a estructurar, posicionar y comercializar su experiencia manteniendo su integridad profesional y su valor."
        ],
        bulletPoints: [
          "Creación de módulos propios",
          "Estructuración de talleres rentables",
          "Estrategia de precios",
          "Desarrollo de posicionamiento experto",
          "Prospección de escuelas y marcas"
        ],
        image: "/year3-im3_v2.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },

      {
        heading: "UN AÑO PARA LIDERAR",
        bodyParagraphs: [
          "A través de simulaciones reales de enseñanza y práctica supervisada, desarrolla liderazgo, credibilidad institucional y visión estratégica."
        ],
        bulletPoints: [
          "Enseñar en escuelas profesionales",
          "Formar para marcas cosméticas",
          "Dirigir formación en retail",
          "Lanzar talleres independientes"
        ],
        closingStatement:
          "Ya no se convierte solo en un experto en maquillaje. Se convierte en un experto en transmisión.",
        image: "",
        imagePosition: "left",
        backgroundColor: "light-grey"
      }
    ]
  }

}

  },

  pt: {

    overview: {

    breadcrumb: {
      home: "INÍCIO",
      programs: "PROGRAMAS"
    },

    pageTitle: "PROGRAMA PROFISSIONAL DE MAQUILHAGEM",

    description:
      "Uma estrutura académica progressiva e modular que permite frequentar cada ano de forma independente, desde os fundamentos técnicos até à especialização avançada e à transmissão profissional.",

    actions: {
      viewYear: "Ver Ano",
      scheduleInfo: "Agendar Informação"
    },

    programs: [

      {
        year: 1,
        title: "FUNDAMENTOS",
        subtitle: "Programa Profissional de Maquilhagem – Ano 1",
        description:
          "Construa as bases técnicas e artísticas necessárias para entrar na indústria profissional da maquilhagem com estrutura e disciplina.",
        tags: [
          "BASE TÉCNICA",
          "PORTFÓLIO",
          "DISCIPLINA PROFISSIONAL"
        ],
        image: "/year1-hero.jpg",
        imageMobile: "/year1-hero-mobile.jpg",
        slug: "professional-makeup-year-1"
      },

      {
        year: 2,
        title: "MESTRIA AVANÇADA",
        subtitle: "Programa Profissional de Maquilhagem – Ano 2",
        description:
          "Afirme a sua identidade artística e domine técnicas avançadas concebidas para um posicionamento profissional de excelência.",
        tags: [
          "MORFOLOGIA",
          "EDITORIAL",
          "MERCADO DE LUXO"
        ],
        image: "/year2-hero.jpg",
        imageMobile: "/year2-hero-mobile.jpg",
        slug: "professional-makeup-year-2"
      },

      {
        year: 3,
        title: "EDUCADOR & FORMADOR",
        subtitle: "Programa Profissional de Maquilhagem – Ano 3",
        description:
          "Transforme a experiência em transmissão. Desenvolva liderança, pedagogia e autoridade profissional.",
        tags: [
          "PEDAGOGIA",
          "FORMAÇÃO DE MARCAS",
          "LIDERANÇA"
        ],
        image: "/year3-hero.jpg",
        imageMobile: "/year3-hero-mobile.jpg",
        slug: "professional-makeup-year-3"
      }

    ]

  },

  years: {

  /* =========================================================
     YEAR 1
  ========================================================= */

  1: {
    year: 1,

    hero: {
      breadcrumb: {
        home: "INÍCIO",
        programs: "PROGRAMAS",
        current: "MAQUILHAGEM PROFISSIONAL - ANO 1"
      },
      headline: "PROGRAMA PROFISSIONAL DE MAQUILHAGEM\nANO 1: FUNDAMENTOS",
      subheadline:
        "Da beleza ao cinema. Da moda à transformação. Celebre cada rosto.",
      ctaLabel: "Agendar uma Reunião Informativa",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year1-hero.jpg",
      backgroundImageMobile: "/year1-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Duração", value: "Setembro – Junho" },
        { icon: "/icons/format.png", label: "Formato", value: "Part-time (horário da manhã)" },
        { icon: "/icons/language.png", label: "Idioma", value: "Francês / Inglês" },
        { icon: "/icons/diploma.png", label: "Diploma", value: "Maquilhagem Profissional & Consultoria de Imagem" },
        { icon: "/icons/location.png", label: "Localização", value: "Genebra, Suíça" }
      ]
    },

    intro: {
      headline: "CONSTRUA OS SEUS FUNDAMENTOS",

      bodyParagraphs: [
        "Entre no universo da maquilhagem profissional e descubra o seu potencial criativo num ambiente onde cada identidade, cada percurso e cada forma de beleza são bem-vindos.",
        "Este ano imersivo guia-o passo a passo para transformar a paixão em profissão. Juntos criamos, transformamos e contamos histórias — celebrando todas as singularidades através da maquilhagem."
      ],

      cta: {
        label: "Agendar uma Reunião Informativa",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Certificação Profissional",
        "Detalhes do Programa",
        "Métodos de Ensino",
        "Avaliação & Diploma",
        "Informação de Acessibilidade"
      ],

      sessionDetails: {
        sessionLabel: "SESSÃO 2026–2027",
        programTitle: "Programa de Maquilhador Profissional - Ano 1",
        duration: "Setembro – Junho",
        hours: "Programa imersivo estruturado em regime part-time",
        differentiatorsTitle: "O QUE DISTINGUE ESTA FORMAÇÃO",
        differentiators: [
          "Abordagem inclusiva para todos os tons de pele e identidades",
          "Prática técnica guiada diariamente",
          "Sessões fotográficas profissionais e desenvolvimento de portfólio",
          "Bases artísticas e profissionais sólidas"
        ]
      }
    },

    diplomaSelector: {
      heading: "TRÊS PERCURSOS. TRÊS DIPLOMAS.",
      years: [
        { year: 1, label: "ANO 1", title: "Maquilhagem Profissional & Consultoria de Imagem", href: "/programs/professional-makeup-year-1" },
        { year: 2, label: "ANO 2", title: "Técnicas Avançadas & Consultoria de Imagem", href: "/programs/professional-makeup-year-2" },
        { year: 3, label: "ANO 3", title: "Educador e Formador Certificado em Maquilhagem", href: "/programs/professional-makeup-year-3" }
      ]
    },

    yearNavigation: { yearLabel: "ANO" },

    contentSections: [
      {
        heading: "DETALHES DA FORMAÇÃO",
        bodyParagraphs: [
          "Ao longo do ano, pratica intensivamente em todas as áreas da maquilhagem profissional: beleza, moda, noivas, artístico, editorial, teatro, cinema, efeitos especiais e criação digital.",
          "Cada maquilhagem é primeiro demonstrada, depois praticada com acompanhamento e registada em sessões fotográficas profissionais para construir um portfólio sólido e impactante.",
          "Dominará fundamentos essenciais como teoria da cor, morfologia, dermatologia e preparação da pele, bem como técnicas profissionais utilizadas nos bastidores, em estúdio e em ambientes de produção.",
          "Semanas criativas temáticas, profissionais convidados da indústria e projetos pessoais permitem explorar o seu próprio estilo enquanto desenvolve disciplina, precisão e confiança."
        ],
        closingStatement: "Criativo. Inclusivo. Profissionalmente transformador.",
        image: "/year1-training.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },
      {
        heading: "OBJETIVOS & CONTEXTO",
        subheading: "OPORTUNIDADES DE CARREIRA",
        bodyParagraphs: [
          "Este programa prepara-o para trabalhar de forma independente ou integrado em equipas profissionais em diversos setores da indústria da maquilhagem.",
          "No final do ano, sairá com domínio técnico, uma voz artística confiante e um portfólio que reflete a sua versatilidade."
        ],
        bulletPoints: [
          "Beleza & Moda",
          "Redes Sociais & Criação de Conteúdo",
          "Teatro & Cinema",
          "Efeitos Especiais (FX)",
          "Produções Editoriais & Artísticas",
          "Eventos & Noivas",
          "Maquilhagem Freelance"
        ],
        closingStatement:
          "Um ano para revelar o seu potencial, aperfeiçoar as suas competências e começar a construir uma carreira sem limites.",
        image: "/year1-objectives.jpeg",
        imagePosition: "left",
        backgroundColor: "light-grey"
      }
    ]
  },

  /* =========================================================
     YEAR 2
  ========================================================= */

  2: {
    year: 2,

    hero: {
      breadcrumb: {
        home: "INÍCIO",
        programs: "PROGRAMAS",
        current: "MAQUILHAGEM PROFISSIONAL - ANO 2"
      },
      headline: "PROGRAMA PROFISSIONAL DE MAQUILHAGEM\nANO 2: MESTRIA AVANÇADA",
      subheadline: "Afirme a sua assinatura. Refine a sua experiência. Assuma a sua posição.",
      ctaLabel: "Agendar uma Reunião Informativa",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year2-hero.jpg",
      backgroundImageMobile: "/year2-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Duração", value: "Setembro – Junho" },
        { icon: "/icons/format.png", label: "Formato", value: "Part-time (horário da manhã)" },
        { icon: "/icons/language.png", label: "Idioma", value: "Francês / Inglês" },
        { icon: "/icons/diploma.png", label: "Diploma", value: "Técnicas Avançadas & Consultoria de Imagem" },
        { icon: "/icons/location.png", label: "Localização", value: "Genebra, Suíça" }
      ]
    },

    intro: {
      headline: "AFIRME A SUA ARTE",

      bodyParagraphs: [
        "Depois de explorar todo o espectro da maquilhagem no primeiro ano, este segundo ano conduz-o à mestria avançada, à precisão técnica e a um posicionamento profissional sólido.",
        "Já não se trata apenas de criar. Trata-se de analisar, estruturar, adaptar e executar — afirmando uma visão artística clara e intencional."
      ],

      cta: {
        label: "Agendar uma Reunião Informativa",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Certificação Profissional",
        "Detalhes do Programa",
        "Métodos de Ensino",
        "Avaliação & Diploma",
        "Informação de Acessibilidade"
      ],

      sessionDetails: {
        sessionLabel: "SESSÃO 2026–2027",
        programTitle: "Maquilhagem Avançada - Ano 2",
        duration: "Setembro – Junho",
        hours: "Especialização avançada e imersão profissional",
        differentiatorsTitle: "O QUE DISTINGUE ESTA FORMAÇÃO",
        differentiators: [
          "Análise morfológica avançada e visagismo",
          "Precisão técnica de alto nível",
          "Posicionamento editorial e de luxo",
          "Desenvolvimento de marca pessoal e assinatura artística"
        ]
      }
    },

    diplomaSelector: undefined as any,
    yearNavigation: { yearLabel: "ANO" },

    contentSections: [
      {
        heading: "EXPERTISE TÉCNICA AVANÇADA",
        subheading: "Consultoria de Imagem & Análise Morfológica Avançada",
        bodyParagraphs: [
          "Aprofunda a sua experiência em análise morfológica avançada e consultoria de imagem, aprendendo a justificar cada escolha artística através de uma avaliação profissional sólida.",
          "A criatividade torna-se intencional, estruturada e totalmente dominada — adaptável a cada rosto, cada cliente e cada contexto profissional."
        ],
        bulletPoints: [
          "Estudos aprofundados de morfologia facial e corporal",
          "Análise especializada de cor",
          "Correções técnicas personalizadas",
          "Harmonização maquilhagem / cabelo / styling",
          "Desenvolvimento de uma assinatura artística coerente"
        ],
        closingStatement: "A precisão encontra a visão. A técnica serve a intenção.",
        image: "/year2-im1.jpg",
        imagePosition: "left",
        backgroundColor: "white"
      },
      {
        heading: "MESTRIA TÉCNICA & ASSINATURA ARTÍSTICA",
        bodyParagraphs: [
          "A mestria técnica de alto nível combina-se com a exploração criativa para permitir que assine o seu trabalho com confiança, clareza e maturidade."
        ],
        bulletPoints: [
          "Técnicas avançadas de pele HD (foto, vídeo, iluminação de estúdio)",
          "Esculpir profissional e correção estrutural",
          "Maquilhagem editorial conceptual",
          "Adaptação para clientes premium e luxo",
          "Aperfeiçoamento avançado de FX e texturas realistas"
        ],
        closingStatement: "O objetivo: não apenas executar, mas assinar.",
        image: "/year2-im2.jpg",
        imagePosition: "right",
        backgroundColor: "light-grey"
      },
      {
        heading: "IMERSÃO PROFISSIONAL & DESENVOLVIMENTO DE CARREIRA",
        bodyParagraphs: [
          "Porque um artista profissional deve atuar em condições reais, este ano inclui cenários imersivos e simulações da indústria."
        ],
        bulletPoints: [
          "Simulação de briefs de clientes reais",
          "Gestão do tempo e execução rápida",
          "Colaboração em equipa (fotógrafos, stylists, modelos)",
          "Aperfeiçoamento do portfólio profissional"
        ],
        closingStatement:
          "Não se torna apenas um artista mais forte. Torna-se um profissional posicionado.",
        image: "/year2-im3.jpg",
        imagePosition: "left",
        backgroundColor: "white"
      }
    ]
  },

  /* =========================================================
     YEAR 3
  ========================================================= */

  3: {
    year: 3,

    hero: {
      breadcrumb: {
        home: "INÍCIO",
        programs: "PROGRAMAS",
        current: "MAQUILHAGEM PROFISSIONAL - ANO 3"
      },
      headline: "PROGRAMA PROFISSIONAL DE MAQUILHAGEM\nANO 3: EDUCADOR & FORMADOR",
      subheadline: "Transmitir. Liderar. Inspirar. Moldar o futuro da arte da maquilhagem.",
      ctaLabel: "Agendar uma Reunião Informativa",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year3-hero.jpg",
      backgroundImageMobile: "/year3-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Duração", value: "Setembro – Junho" },
        { icon: "/icons/format.png", label: "Formato", value: "Part-time (horário da manhã)" },
        { icon: "/icons/language.png", label: "Idioma", value: "Francês / Inglês" },
        { icon: "/icons/diploma.png", label: "Diploma", value: "Educador e Formador Certificado em Maquilhagem" },
        { icon: "/icons/location.png", label: "Localização", value: "Genebra, Suíça" }
      ]
    },

    intro: {
      headline: "TORNE-SE FORMADOR",

      bodyParagraphs: [
        "Depois de dominar a técnica e afirmar a sua identidade artística, o terceiro ano convida-o a assumir um novo papel: o de educador especialista.",
        "Já não se trata apenas de saber fazer. Trata-se de saber transmitir, estruturar o conhecimento, orientar diferentes perfis de alunos e inspirar evolução com clareza e confiança."
      ],

      cta: {
        label: "Agendar uma Reunião Informativa",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Certificação Profissional",
        "Detalhes do Programa",
        "Métodos de Ensino",
        "Avaliação & Diploma",
        "Informação de Acessibilidade"
      ],

      sessionDetails: {
        sessionLabel: "SESSÃO 2026–2027",
        programTitle: "Formação de Educador em Maquilhagem - Ano 3",
        duration: "Setembro – Junho",
        hours: "Metodologia pedagógica e prática docente supervisionada",
        differentiatorsTitle: "O QUE DISTINGUE ESTA FORMAÇÃO",
        differentiators: [
          "Metodologia de ensino estruturada",
          "Preparação para formação de produtos e marcas",
          "Comunicação em público e presença em palco",
          "Desenvolvimento de negócio independente de formação"
        ]
      }
    },

    diplomaSelector: undefined as any,
    yearNavigation: { yearLabel: "ANO" },

    contentSections: [
      {
        heading: "PEDAGOGIA & TRANSMISSÃO DE CONHECIMENTO",
        subheading: "Metodologia de Ensino",
        bodyParagraphs: [
          "Aprende a transformar a sua experiência em conteúdo educativo impactante através de metodologia estruturada e prática supervisionada."
        ],
        bulletPoints: [
          "Conceção de programas estruturados",
          "Definição de objetivos de aprendizagem claros",
          "Adaptação da comunicação a diferentes níveis de experiência",
          "Gestão de grupos com acompanhamento individual",
          "Desenvolvimento de uma postura credível de educador"
        ],
        closingStatement: "A sua experiência torna-se transmissível. O seu impacto multiplica-se.",
        image: "/year3-im1.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },

      {
        heading: "FORMAÇÃO DE MARCAS & PRESENÇA EM PALCO",
        subheading: "Tornar-se Formador para Marcas Profissionais de Beleza",
        bodyParagraphs: [
          "Educadores profissionais representam marcas, realizam demonstrações e comunicam em público com clareza, precisão e autenticidade."
        ],
        bulletPoints: [
          "Análise técnica de produtos",
          "Tradução do marketing em pedagogia",
          "Demonstrações especializadas",
          "Técnicas de comunicação em público",
          "Execução de masterclasses ao vivo"
        ],
        closingStatement: "Um educador inspira tanto pela sua mestria como pela sua presença.",
        image: "/year3-im2.jpg",
        imagePosition: "left",
        backgroundColor: "light-grey"
      },

      {
        heading: "CONSTRUIR A SUA OFERTA DE FORMAÇÃO",
        bodyParagraphs: [
          "Aprenda a estruturar, posicionar e comercializar a sua experiência mantendo a sua integridade profissional e valor."
        ],
        bulletPoints: [
          "Criação de módulos próprios",
          "Estruturação de workshops rentáveis",
          "Estratégia de preços",
          "Desenvolvimento de posicionamento especialista",
          "Prospecção de escolas e marcas"
        ],
        image: "/year3-im3_v2.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },

      {
        heading: "UM ANO PARA LIDERAR",
        bodyParagraphs: [
          "Através de simulações reais de ensino e prática supervisionada, desenvolve postura de liderança, credibilidade institucional e visão estratégica."
        ],
        bulletPoints: [
          "Ensinar em escolas profissionais",
          "Formar para marcas cosméticas",
          "Liderar formação em retail",
          "Lançar workshops independentes"
        ],
        closingStatement:
          "Deixa de ser apenas especialista em maquilhagem. Torna-se especialista em transmissão.",
        image: "",
        imagePosition: "left",
        backgroundColor: "light-grey"
      }
    ]
  }

}

}

}