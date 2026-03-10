import type { ProgramYears } from "../types"
export const years: ProgramYears = {

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
      headline: "PROGRAMME DE MAQUILLAGE PROFESSIONNEL\nANNÉE 1 : FONDATIONS",
      subheadline:
        "De la beauté au cinéma, de la mode à la transformation. Célébrez la richesse de chaque visage.",
      ctaLabel: "Planifier une réunion d'information",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year1-hero.jpg",
      backgroundImageMobile: "/year1-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Durée", value: "De septembre à juin" },
        { icon: "/icons/format.png", label: "Format", value: "Temps partiel, cours le matin" },
        { icon: "/icons/language.png", label: "Langue", value: "Français / Anglais" },
        { icon: "/icons/diploma.png", label: "Diplôme", value: "Art du maquillage professionnel et conseil en image" },
        { icon: "/icons/location.png", label: "Lieu", value: "Genève, Suisse" }
      ]
    },

    intro: {
      headline: "CULTIVEZ VOS FONDATIONS",

      bodyParagraphs: [
        "Immergez-vous dans l'univers du maquillage professionnel et révélez votre voix créative dans un environnement inclusif, accueillant toutes les identités, tous les parcours et toutes les expressions de la beauté.",
        "Cette année transformatrice vous guide avec élégance pour transformer votre passion en profession. Ensemble, nous créons, transformons et partageons des récits, en célébrant l'unicité à travers l'art du maquillage."
      ],

      cta: {
        label: "Planifier une réunion d'information",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Certification professionnelle",
        "Détails du programme",
        "Méthodologie pédagogique",
        "Examen et diplôme",
        "Informations d'accessibilité"
      ],

      sessionDetails: {
        sessionLabel: "SESSION 2026 à 2027",
        programTitle: "Programme d'artiste maquilleur·se professionnel·le - Année 1",
        duration: "De septembre à juin",
        hours: "Programme transformateur structuré à temps partiel",
        differentiatorsTitle: "CE QUI DISTINGUE CETTE FORMATION",
        differentiators: [
          "Approche inclusive pour toutes les carnations, origines et identités",
          "Pratique technique quotidienne accompagnée avec bienveillance",
          "Séances photo professionnelles et développement du portfolio",
          "Fondations artistiques et professionnelles solides"
        ]
      }
    },

    diplomaSelector: {
      heading: "TROIS PARCOURS. TROIS DIPLÔMES.",
      years: [
        { year: 1, label: "ANNÉE 1", title: "Art du maquillage professionnel et conseil en image", href: "/programs/professional-makeup-year-1" },
        { year: 2, label: "ANNÉE 2", title: "Techniques avancées et conseil en image", href: "/programs/professional-makeup-year-2" },
        { year: 3, label: "ANNÉE 3", title: "Éducateur·rice et formateur·rice certifié·e en maquillage", href: "/programs/professional-makeup-year-3" }
      ]
    },

    yearNavigation: { yearLabel: "ANNÉE" },

    contentSections: [
      {
        heading: "DÉTAILS DE LA FORMATION",
        bodyParagraphs: [
          "Tout au long de l'année, vous explorez chaque discipline du maquillage professionnel : beauté, mode, mariage, création artistique et éditoriale, théâtre, cinéma, effets spéciaux et création numérique.",
          "Chaque réalisation est enseignée lors d'une démonstration experte, puis pratiquée sous supervision bienveillante et immortalisée lors de séances photo professionnelles pour enrichir votre portfolio personnel.",
          "Vous maîtrisez les fondements essentiels tels que la théorie des couleurs, la morphologie du visage, la dermatologie et la préparation de la peau, tout en développant les techniques utilisées en coulisses, sur les plateaux et en studio.",
          "Des semaines thématiques créatives, des collaborations avec des professionnel·le·s invité·e·s et des projets personnels encouragent l'expression de votre propre signature artistique, tout en cultivant discipline, précision technique et assurance créative."
        ],
        closingStatement: "Créatif·ve. Inclusif·ve. Transformateur·rice.",
        image: "/year1-training.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },
      {
        heading: "OBJECTIFS & CONTEXTE",
        subheading: "OPPORTUNITÉS DE CARRIÈRE",
        bodyParagraphs: [
          "Ce programme vous prépare au travail indépendant ou à la collaboration au sein d'équipes pluridisciplinaires dans divers secteurs de l'industrie du maquillage.",
          "À l'issue de l'année, vous disposerez de solides compétences techniques, d'une voix artistique affirmée et d'un portfolio témoignant de votre adaptabilité créative."
        ],
        bulletPoints: [
          "Beauté et mode",
          "Médias sociaux et création de contenu",
          "Théâtre et cinéma",
          "Effets spéciaux (FX)",
          "Productions éditoriales et artistiques",
          "Événementiel et mariage",
          "Maquillage indépendant"
        ],
        closingStatement:
          "Cette année est dédiée à révéler votre potentiel créatif, à raffiner votre art et à initier votre parcours vers une carrière sans limites.",
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
      headline: "PROGRAMME DE MAQUILLAGE PROFESSIONNEL\nANNÉE 2 : MAÎTRISE AVANCÉE",
      subheadline: "Affirmez votre signature. Raffinez votre expertise. Trouvez votre place.",
      ctaLabel: "Planifier une réunion d'information",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year2-hero.jpg",
      backgroundImageMobile: "/year2-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Durée", value: "De septembre à juin" },
        { icon: "/icons/format.png", label: "Format", value: "Temps partiel, cours le matin" },
        { icon: "/icons/language.png", label: "Langue", value: "Français / Anglais" },
        { icon: "/icons/diploma.png", label: "Diplôme", value: "Techniques avancées et conseil en image" },
        { icon: "/icons/location.png", label: "Lieu", value: "Genève, Suisse" }
      ]
    },

    intro: {
      headline: "AFFIRMEZ VOTRE IDENTITÉ ARTISTIQUE",

      bodyParagraphs: [
        "Après l'expérience créative acquise en première année, la deuxième année vous guide vers la maturité artistique, une maîtrise technique raffinée et un positionnement professionnel authentique.",
        "Votre travail transcende désormais la simple création. Vous analysez, structurez, adaptez, réalisez et développez une vision artistique claire et réfléchie."
      ],

      cta: {
        label: "Planifier une réunion d'information",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Certification professionnelle",
        "Détails du programme",
        "Méthodologie pédagogique",
        "Examen et diplôme",
        "Informations d'accessibilité"
      ],

      sessionDetails: {
        sessionLabel: "SESSION 2026 à 2027",
        programTitle: "Maquillage artistique avancé - Année 2",
        duration: "De septembre à juin",
        hours: "Spécialisation avancée et immersion professionnelle",
        differentiatorsTitle: "CE QUI DISTINGUE CETTE FORMATION",
        differentiators: [
          "Maîtrise approfondie de la morphologie du visage et du corps",
          "Excellence technique affirmée",
          "Orientation vers le luxe et l'éditorial",
          "Création d'une marque personnelle et d'une signature artistique unique"
        ]
      }
    },

    diplomaSelector: undefined as any,
    yearNavigation: { yearLabel: "ANNÉE" },

    contentSections: [
      {
        heading: "EXPERTISE TECHNIQUE AVANCÉE",
        subheading: "Conseil en image et analyse morphologique",
        bodyParagraphs: [
          "Approfondissez vos connaissances en analyse morphologique et en conseil en image, en justifiant chaque choix artistique par une réflexion professionnelle approfondie.",
          "Votre processus créatif devient structuré, intentionnel et adaptable, prêt à répondre à tous les contextes professionnels."
        ],
        bulletPoints: [
          "Études approfondies du visage et du corps",
          "Analyse experte et harmonisation des couleurs",
          "Méthodes personnalisées de correction technique",
          "Coordination raffinée entre maquillage, coiffure et stylisme",
          "Développement d'une signature artistique cohérente et unique"
        ],
        closingStatement: "La précision soutient la vision. La technique porte l'intention créative.",
        image: "/year2-im1.jpg",
        imagePosition: "left",
        backgroundColor: "white"
      },
      {
        heading: "MAÎTRISE TECHNIQUE & SIGNATURE ARTISTIQUE",
        bodyParagraphs: [
          "La maîtrise technique avancée s'associe à une exploration créative pour vous permettre d'exprimer votre signature avec clarté, confiance et maturité artistique."
        ],
        bulletPoints: [
          "Techniques HD avancées pour le teint (photo, vidéo, éclairage studio)",
          "Sculpture professionnelle et corrections structurelles",
          "Maquillage éditorial conceptuel",
          "Adaptation aux exigences du marché du luxe",
          "Perfectionnement FX et textures réalistes"
        ],
        closingStatement: "L'enjeu transcende l'exécution technique : imprimez votre marque unique.",
        image: "/year2-im2.jpg",
        imagePosition: "right",
        backgroundColor: "light-grey"
      },
      {
        heading: "IMMERSION PROFESSIONNELLE & DÉVELOPPEMENT DE CARRIÈRE",
        bodyParagraphs: [
          "Les artistes professionnel·le·s s'épanouissent dans des situations concrètes. Cette année propose des scénarios immersifs et des simulations inspirées du secteur."
        ],
        bulletPoints: [
          "Simulations de briefs clients et projets créatifs",
          "Gestion du temps et efficacité professionnelle",
          "Collaboration harmonieuse avec photographes, stylistes et modèles",
          "Perfectionnement de votre portfolio haut de gamme"
        ],
        closingStatement:
          "Il ne s'agit pas seulement de devenir un·e artiste accompli·e. Vous intégrez l'industrie avec la posture d'un·e professionnel·le reconnu·e.",
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
      headline: "PROGRAMME DE MAQUILLAGE PROFESSIONNEL\nANNÉE 3 : ÉDUCATEUR·RICE & FORMATEUR·RICE",
      subheadline: "Partagez votre expertise. Dirigez avec vision. Inspirez les artistes de demain.",
      ctaLabel: "Planifier une réunion d'information",
      ctaHref: "/contact?intent=meeting",
      backgroundImage: "/year3-hero.jpg",
      backgroundImageMobile: "/year3-hero-mobile.jpg"
    },

    infoBand: {
      items: [
        { icon: "/icons/calendar.png", label: "Durée", value: "De septembre à juin" },
        { icon: "/icons/format.png", label: "Format", value: "Temps partiel, cours le matin" },
        { icon: "/icons/language.png", label: "Langue", value: "Français / Anglais" },
        { icon: "/icons/diploma.png", label: "Diplôme", value: "Éducateur·rice et formateur·rice certifié·e en maquillage" },
        { icon: "/icons/location.png", label: "Lieu", value: "Genève, Suisse" }
      ]
    },

    intro: {
      headline: "DEVENEZ ÉDUCATEUR·RICE",

      bodyParagraphs: [
        "Après avoir acquis la maîtrise technique et affirmé votre identité créative, cette troisième année vous accueille en tant qu'expert·e et mentor·e.",
        "À ce stade, il ne s'agit plus uniquement de savoir-faire. Vous apprenez à transmettre vos connaissances avec élégance, à structurer des parcours d'apprentissage inspirants, à accompagner des profils variés et à encourager chaque talent avec bienveillance et clarté."
      ],

      cta: {
        label: "Planifier une réunion d'information",
        href: "/contact?intent=meeting"
      },

      infoLinks: [
        "Certification professionnelle",
        "Détails du programme",
        "Méthodologie pédagogique",
        "Examen et diplôme",
        "Informations d'accessibilité"
      ],

      sessionDetails: {
        sessionLabel: "SESSION 2026 à 2027",
        programTitle: "Formation d'éducateur·rice en maquillage - Année 3",
        duration: "De septembre à juin",
        hours: "Méthodologie pédagogique et expérience enseignante",
        differentiatorsTitle: "CE QUI DISTINGUE CETTE FORMATION",
        differentiators: [
          "Méthodologie d'enseignement structurée et aboutie",
          "Préparation à la formation pour les marques et produits",
          "Prise de parole en public et présence scénique inspirante",
          "Accompagnement dans la création de votre activité de formation indépendante"
        ]
      }
    },

    diplomaSelector: undefined as any,
    yearNavigation: { yearLabel: "ANNÉE" },

    contentSections: [
      {
        heading: "PÉDAGOGIE & TRANSMISSION DES CONNAISSANCES",
        subheading: "Méthodologie d'enseignement",
        bodyParagraphs: [
          "Transformez votre expertise en véritables expériences d'apprentissage grâce à une conception pédagogique réfléchie et à la pratique sur le terrain."
        ],
        bulletPoints: [
          "Conception de programmes adaptés à tou·te·s",
          "Définition d'objectifs pédagogiques clairs et accessibles",
          "Communication inspirante avec des apprenant·e·s aux expériences variées",
          "Équilibre entre travail de groupe et accompagnement individualisé",
          "Développement de votre posture distinctive d'éducateur·rice"
        ],
        closingStatement: "Vos compétences deviennent transmissibles. Votre impact rayonne.",
        image: "/year3-im1.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },

      {
        heading: "FORMATION DE MARQUE & PRÉSENCE SCÉNIQUE",
        subheading: "Se préparer en tant que formateur·rice pour les grandes marques de beauté",
        bodyParagraphs: [
          "Les formateur·rice·s expert·e·s représentent des marques avec distinction, réalisent des démonstrations professionnelles et s'expriment en public avec autorité, précision et authenticité."
        ],
        bulletPoints: [
          "Analyse technique approfondie des produits",
          "Transmutation élégante du contenu marketing en ressources pédagogiques",
          "Maîtrise des démonstrations professionnelles inspirantes",
          "Techniques avancées de prise de parole en public",
          "Animation de masterclasses captivantes"
        ],
        closingStatement: "Un·e formateur·rice inspirant·e transmet avec maîtrise et présence authentique.",
        image: "/year3-im2.jpg",
        imagePosition: "left",
        backgroundColor: "light-grey"
      },

      {
        heading: "CONSTRUIRE VOTRE OFFRE DE FORMATION",
        bodyParagraphs: [
          "Apprenez à structurer, positionner et valoriser votre expertise, tout en préservant votre intégrité professionnelle."
        ],
        bulletPoints: [
          "Création de modules personnalisés",
          "Conception d'ateliers efficaces et rentables",
          "Définition stratégique de votre tarification",
          "Renforcement de votre positionnement d'expert·e",
          "Développement de partenariats solides avec écoles et marques"
        ],
        image: "/year3-im3_v2.jpg",
        imagePosition: "right",
        backgroundColor: "white"
      },

      {
        heading: "UNE ANNÉE POUR PRENDRE LES DEVANTS",
        bodyParagraphs: [
          "À travers des mises en situation pédagogiques immersives et un accompagnement constant, vous développez votre leadership, consolidez votre crédibilité institutionnelle et raffinez votre vision stratégique."
        ],
        bulletPoints: [
          "Intervention dans des écoles professionnelles",
          "Formation pour des marques de cosmétiques et beauté",
          "Direction de formations en milieu commercial",
          "Lancement de vos propres ateliers indépendants"
        ],
        closingStatement:
          "C'est ici que vous transcendez le rôle d'artiste. Vous devenez un·e leader dans la transmission du savoir.",
        image: "",
        imagePosition: "left",
        backgroundColor: "light-grey"
      }
    ]
  }

} as const
