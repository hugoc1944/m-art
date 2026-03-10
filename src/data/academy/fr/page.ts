import { AcademyPageData } from "../types"

export const page: AcademyPageData = {

  hero: {
    backgroundImage: "/about_1.jpg",
    backgroundImageMobile: "/about_1_mobile.jpg",

    headline: "L'ACADÉMIE DE MAQUILLAGE QUI TRANSFORME LA PASSION EN EXCELLENCE PROFESSIONNELLE.",

    ctaText: "→ Découvrir nos programmes",
    ctaLink: "/programs",
  },

  ctaBand1: {
    heading: "EXPLORER VOTRE VOCATION",

    buttons: [
      {
        text: "→ En savoir plus",
        variant: "outline",
        link: "/programs",
      },
      {
        text: "→ Planifier une réunion d'information",
        variant: "solid",
        link: "/contact?intent=meeting",
      },
    ],
  },

  sections: [

    {
      heading: "UNE ACADÉMIE ENRACINÉE DANS L'AUTHENTICITÉ PROFESSIONNELLE.",

      bodyParagraphs: [
        "M·ART est née d'une conviction fondamentale : le talent seul ne suffit pas. Pour bâtir une carrière durable dans l'art raffiné du maquillage, il faut des bases solides, une préparation méthodique et une compréhension approfondie des exigences du métier.",

        "Fondée par un professionnel actif dans l'industrie, fort de plus de 20 ans d'expérience dans l'univers prestigieux du spectacle, des cosmétiques de luxe et des environnements artistiques et festivaliers, l'académie établit un pont élégant entre passion créative et excellence professionnelle.",

        "Ici, la formation s'appuie sur la transparence, l'exigence et un ancrage réaliste dans les besoins contemporains du secteur, dépassant les tendances éphémères pour mettre en lumière l'essence intemporelle de cet art.",
      ],

      image: "/about_2.jpg",
      imagePosition: "right",

      backgroundColor: "black",
      textColor: "white",
    },

    {
      heading: "NOUS CULTIVONS UN ART AU-DELÀ DE LA SIMPLE TECHNIQUE.",

      bodyParagraphs: [
        "Chez M·ART, l'art du maquillage s'exprime dans toute sa richesse : beauté intemporelle, transformations artistiques, événements prestigieux et festivals, créations éditoriales raffinées, théâtre, cinéma et cosmétiques de luxe.",

        "Les participants développent des bases techniques solides en maquillage beauté, soins des peaux matures et corrections harmonieuses, tout en explorant l'expression créative, les effets spéciaux et l'art de la transformation.",

        "Mais l'apprentissage va bien au-delà de la technique. Nous préparons chaque apprenant à évoluer avec aisance dans des environnements professionnels réels : scénarios clients sophistiqués, simulations événementielles, autonomie créative, collaboration fluide, et compréhension approfondie des attentes du secteur.",

        "Notre mission est d'accompagner chaque étudiant dans le développement de compétences techniques avancées, d'une identité artistique authentique, d'une vision personnelle inspirante et d'une compréhension complète de ce métier et de ses multiples facettes.",
      ],

      image: "/about_3.jpg",
      imagePosition: "left",

      backgroundColor: "black",
      textColor: "white",
    },

    {
      heading: "OUVERT À TOUS. DÉDIÉ À L'EXCELLENCE.",

      bodyParagraphs: [
        "L'académie accueille avec bienveillance les débutants, artistes autodidactes et professionnels en reconversion. Quel que soit votre parcours, vous avez votre place ici si vous partagez une soif d'apprendre, de progresser et de vous épanouir créativement.",

        "Nous favorisons un environnement structuré, inclusif et bienveillant où la créativité s'exprime librement, toujours guidée avec élégance et rigueur artistique.",

        "Chaque participant évolue à son propre rythme dans un cadre structuré qui équilibre harmonieusement exigences élevées et accompagnement personnalisé.",

        "Ce que nous construisons dépasse la simple maîtrise technique. Nous insufflons la confiance en soi, développons l'identité créative, affinons la posture professionnelle et cultivons une vision longue et inspirante.",
      ],

      image: "/about_4.jpg",
      imageMobile: "/about_4_mobile.jpg",

      variant: "overlay",

      backgroundColor: "transparent",
      textColor: "black",
    },

  ],

  teachersBand: {
    heading: "La Vision Inspirante Derrière M·ART",
  },

  teachers: [

    {
      name: "FLORENT ALLEMANN",
      title: "Fondateur & Directeur Créatif",
      image: "/teacher_1.jpg",

      bio: [
        "Maquilleur indépendant avec plus de 20 ans d'expérience dans l'univers du spectacle, où l'art du maquillage a toujours été au cœur de son identité créative.",

        "Sa passion pour la transmission s'est révélée lors de ses années d'enseignement dans une école de maquillage, où il a découvert un profond engagement à partager son savoir et à révéler le potentiel créatif de chaque élève.",

        "Confronté aux réalités du terrain et à des situations qui auraient pu être évitées avec une meilleure préparation professionnelle, il a choisi de fonder une académie différente : transparente, exigeante et profondément ancrée dans la réalité du métier.",

        "Fort d'une vaste expérience dans l'univers des cosmétiques de luxe et sur la scène internationale des festivals, il a collaboré avec des marques, des artistes et des publics variés dans des environnements exigeants.",

        "Excellence, élégance, inclusion et développement personnel guident sa vision de la beauté et de l'enseignement. L'académie incarne cette philosophie : professionnelle, bienveillante, exigeante et profondément humaine.",
      ],
    },

    {
      name: "CAMILLE LINDENBERGER",
      title: "Co-Fondatrice & Développement Stratégique",
      image: "/teacher_2.jpg",

      bio: [
        "Camille a cofondé l'académie avec une ambition claire : former des artistes capables d'allier excellence créative et vision stratégique.",

        "Avec une formation solide en management et développement, elle apporte structure, organisation et vision à long terme au projet académique.",

        "Sa philosophie est claire : le talent est essentiel, mais la maîtrise, la posture professionnelle et l'esprit entrepreneurial permettent de construire une carrière durable.",

        "Grâce à des standards élevés et un accompagnement stratégique, elle aide les artistes à se positionner avec confiance dans les environnements professionnels du secteur du luxe et à bâtir des parcours solides et inspirants.",
      ],
    },

  ],

}