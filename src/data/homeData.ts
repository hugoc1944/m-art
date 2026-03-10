import { Locale } from "@/i18n/config";

export interface HomeData {
  programFeature: {
    title: string
    paragraphs: string[]
    buttonLabel: string
  }

  academyFeature: {
    title: string
    paragraphs: string[]
    buttonLabel: string
  }

  cta: {
    heading: string
    description: string
    buttons: {
      learnMore: string
      meeting: string
    }
  }

  hero: {
    headline: string
    subheadline: string
  }

  slogan: {
    top: string
    rotating: string[]
    bottom: string[]
  }

  passionBand: {
    text: string
  }

  portfolio: {
    title: string
    description: string
    bullets: string[]
    button: string
  }

  fieldsOfStudy: {
    heading: string
    fields: string[]
  }
}

export const homeData: Record<Locale, HomeData> = {
  en: {
    programFeature: {
      title: "The 3-Year Professional Makeup Artistry Program",
      paragraphs: [
        "An elevated academic journey structured across three transformative years: Foundations, Advanced Mastery, and Educator & Trainer.",
        "Each year is an independent diploma, allowing artists to start, develop, or specialize according to their creative rhythm and professional goals.",
        "Designed with meticulous attention and grounded in authentic industry experience, the program fosters technical excellence, artistic identity, and lasting professional confidence."
      ],
      buttonLabel: "→ Explore the 3-Year Journey"
    },

    academyFeature: {
      title: "A Visionary Makeup Academy",
      paragraphs: [
        "M·ART was created to harmonize excellence with inclusivity, a space where discipline and creativity thrive together.",
        "Here, makeup is embraced as a holistic artistic profession, guided by industry-active educators and rooted in real-world practice, welcoming beginners, self-taught artists, and evolving professionals."
      ],
      buttonLabel: "→ Discover Our Academy"
    },

    cta: {
      heading: "September Intake",
      description:
        "Applications are open for the upcoming academic year. Limited spots ensure a focused, supportive, and challenging learning environment that nurtures each artist's unique potential.",
      buttons: {
        learnMore: "→ Learn More",
        meeting: "→ Schedule an Information Meeting"
      }
    },

    hero: {
      headline: "Where Passion Transforms Into Profession.",
      subheadline: "Professional makeup artistry academy in Geneva."
    },

    slogan: {
      top: "Cultivating excellence, revealing artistic signatures, preparing tomorrow's visionaries.",
      rotating: [
        "Technical Mastery",
        "Creative Identity",
        "Professional Immersion",
        "Portfolio That Opens Doors"
      ],
      bottom: [
        "Technical Mastery",
        "Creative Identity",
        "Professional Immersion",
        "Portfolio That Opens Doors"
      ]
    },

    passionBand: {
      text: "Passion, refined into profession. Inclusive. Demanding. Exceptional."
    },

    portfolio: {
      title: "A Portfolio That Embodies Your Artistic Vision",
      description:
        "Throughout your journey, your artistry is captured, refined, and elevated through professional shoots and authentic creative productions, building a portfolio that reflects both your unique artistic identity and industry readiness.",
      bullets: [
        "Professional photo shoots",
        "Real-world industry immersions",
        "Artistic, editorial, and transformative projects"
      ],
      button: "→ View Student Portfolios"
    },
    fieldsOfStudy: {
      heading: "Our Artistic Domains",
      fields: [
        "Fashion & Beauty",
        "Social Media & Content",
        "Theatre & Film",
        "Luxury Cosmetics",
        "Events & Weddings",
        "Freelance & Independent Artistry"
      ]
    }
  },

  fr: {
    programFeature: {
      title: "Le Programme Professionnel d'Art du Maquillage en 3 Ans",
      paragraphs: [
        "Une odyssée académique d'excellence structurée en trois années transformatrices : Fondements, Maîtrise Avancée et Éducateur·rice & Formateur·rice.",
        "Chaque année constitue un diplôme à part entière, permettant aux artistes de s'engager, d'évoluer ou de se spécialiser selon leur rythme créatif et leurs aspirations professionnelles.",
        "Conçu avec une attention méticuleuse et ancré dans une expérience authentique de l'industrie, ce programme cultive l'excellence technique, l'identité artistique et une confiance professionnelle durable."
      ],
      buttonLabel: "→ Découvrir le Parcours de 3 Ans"
    },

    academyFeature: {
      title: "Une Académie de Maquillage Visionnaire",
      paragraphs: [
        "M·ART a été conçue pour allier excellence et inclusivité, un lieu où discipline et créativité s'épanouissent ensemble.",
        "Ici, le maquillage est reconnu comme une profession artistique complète, guidée par des formateurs actifs dans l'industrie et ancrée dans les réalités du terrain, accueillant débutants, autodidactes et professionnels en évolution."
      ],
      buttonLabel: "→ Découvrir l'Académie"
    },

    cta: {
      heading: "Rentrée de Septembre",
      description:
        "Les candidatures sont ouvertes pour la prochaine rentrée académique. Le nombre de places limité garantit un apprentissage personnalisé, exigeant et bienveillant, qui révèle le potentiel unique de chaque artiste.",
      buttons: {
        learnMore: "→ En savoir plus",
        meeting: "→ Planifier une Réunion d'Information"
      }
    },

    hero: {
      headline: "Là Où la Passion Se Transforme en Profession.",
      subheadline: "Académie professionnelle d'art du maquillage à Genève."
    },

    slogan: {
      top: "Cultiver l'excellence, révéler les signatures artistiques, former les visionnaires de demain.",
      rotating: [
        "Maîtrise Technique",
        "Identité Créative",
        "Immersion Professionnelle",
        "Un Portfolio Qui Ouvre des Portes"
      ],
      bottom: [
        "Maîtrise Technique",
        "Identité Créative",
        "Immersion Professionnelle",
        "Un Portfolio Qui Ouvre des Portes"
      ]
    },

    passionBand: {
      text: "La Passion Raffinée en Profession. Inclusive. Exigeante. Exceptionnelle."
    },

    portfolio: {
      title: "Un Portfolio Qui Incarne Votre Vision Artistique",
      description:
        "Tout au long de votre parcours, votre art est capturé, affiné et sublimé au travers de shootings professionnels et de productions créatives authentiques, construisant un portfolio qui reflète à la fois votre identité artistique singulière et votre préparation au monde professionnel.",
      bullets: [
        "Shootings photos professionnels",
        "Immersions réelles dans l'industrie",
        "Projets artistiques, éditoriaux et transformationnels"
      ],
      button: "→ Voir les Portfolios des Étudiants·es"
    },
    fieldsOfStudy: {
      heading: "Nos Domaines Artistiques",
      fields: [
        "Mode & Beauté",
        "Réseaux Sociaux & Création de Contenu",
        "Théâtre & Cinéma",
        "Cosmétiques de Luxe",
        "Événements & Mariages",
        "Freelance & Art Indépendant"
      ]
    }
  },

  es: {
    programFeature: {
      title: "El Programa Profesional de Arte del Maquillaje de 3 Años",
      paragraphs: [
        "Una odisea académica de excelencia estructurada en tres años transformadores: Fundamentos, Maestría Avanzada y Educador/a & Formador/a.",
        "Cada año constituye un diploma independiente, permitiendo a los artistas comenzar, evolucionar o especializarse según su ritmo creativo y objetivos profesionales.",
        "Diseñado con atención al detalle y respaldado por experiencia auténtica en la industria, el programa fomenta excelencia técnica, identidad artística y confianza profesional duradera."
      ],
      buttonLabel: "→ Explorar el Recorrido de 3 Años"
    },

    academyFeature: {
      title: "Una Academia de Maquillaje Visionaria",
      paragraphs: [
        "M·ART fue creada para equilibrar excelencia e inclusión, un lugar donde disciplina y creatividad prosperan juntas.",
        "Aquí, el maquillaje se considera una profesión artística integral, guiada por educadores activos en la industria y basada en la práctica real, acogiendo a principiantes, autodidactas y profesionales en desarrollo."
      ],
      buttonLabel: "→ Descubrir la Academia"
    },

    cta: {
      heading: "Admisión de Septiembre",
      description:
        "Las solicitudes están abiertas para el próximo año académico. Las plazas limitadas garantizan un entorno de aprendizaje enfocado, solidario y desafiante que fomenta el potencial único de cada artista.",
      buttons: {
        learnMore: "→ Saber más",
        meeting: "→ Programar una Reunión Informativa"
      }
    },

    hero: {
      headline: "Donde la Pasión Se Transforma en Profesión.",
      subheadline: "Academia profesional de arte del maquillaje en Ginebra."
    },

    slogan: {
      top: "Cultivando excelencia, revelando firmas artísticas, formando visionarios del mañana.",
      rotating: [
        "Dominio Técnico",
        "Identidad Creativa",
        "Inmersión Profesional",
        "Un Portafolio Que Abre Puertas"
      ],
      bottom: [
        "Dominio Técnico",
        "Identidad Creativa",
        "Inmersión Profesional",
        "Un Portafolio Que Abre Puertas"
      ]
    },

    passionBand: {
      text: "Pasión Refinada en Profesión. Inclusiva. Exigente. Excepcional."
    },

    portfolio: {
      title: "Un Portafolio Que Refleja Tu Visión Artística",
      description:
        "A lo largo de tu recorrido, tu arte se captura, refina y eleva a través de sesiones profesionales y producciones creativas auténticas, construyendo un portafolio que refleja tanto tu identidad artística única como tu preparación para la industria.",
      bullets: [
        "Sesiones fotográficas profesionales",
        "Inmersiones reales en la industria",
        "Proyectos artísticos, editoriales y transformadores"
      ],
      button: "→ Ver Portafolios de Estudiantes"
    },
    fieldsOfStudy: {
      heading: "Nuestros Dominios Artísticos",
      fields: [
        "Moda & Belleza",
        "Redes Sociales & Contenido",
        "Teatro & Cine",
        "Cosmética de Lujo",
        "Eventos & Bodas",
        "Freelance & Arte Independiente"
      ]
    }
  },

  pt: {
    programFeature: {
      title: "O Programa Profissional de Arte da Maquilhagem de 3 Anos",
      paragraphs: [
        "Uma jornada académica de excelência dividida em três anos transformadores: Fundamentos, Mestria Avançada e Educador/a & Formador/a.",
        "Cada ano é um diploma independente, permitindo aos artistas começar, evoluir ou especializar-se de acordo com o seu ritmo criativo e metas profissionais.",
        "Desenvolvido com atenção ao detalhe e baseado em experiência autêntica no setor, o programa promove excelência técnica, identidade artística e confiança profissional duradoura."
      ],
      buttonLabel: "→ Explorar o Percurso de 3 Anos"
    },

    academyFeature: {
      title: "Uma Academia de Maquilhagem Visionária",
      paragraphs: [
        "A M·ART foi criada para alinhar excelência e inclusão, um espaço onde disciplina e criatividade florescem em harmonia.",
        "Aqui, a maquilhagem é tratada como uma profissão artística completa, orientada por educadores ativos na indústria e ancorada nas práticas reais, acolhendo iniciantes, autodidatas e profissionais em desenvolvimento."
      ],
      buttonLabel: "→ Descobrir a Academia"
    },

    cta: {
      heading: "Admissão de Setembro",
      description:
        "As candidaturas estão abertas para o próximo ano letivo. As vagas limitadas garantem um ambiente de aprendizagem focado, acolhedor e exigente, nutrindo o potencial único de cada artista.",
      buttons: {
        learnMore: "→ Saber Mais",
        meeting: "→ Agendar uma Reunião Informativa"
      }
    },

    hero: {
      headline: "Onde a Paixão Se Transforma em Profissão.",
      subheadline: "Academia profissional de arte da maquilhagem em Genebra."
    },

    slogan: {
      top: "Cultivar excelência, revelar assinaturas artísticas, formar os visionários de amanhã.",
      rotating: [
        "Domínio Técnico",
        "Identidade Criativa",
        "Imersão Profissional",
        "Um Portfólio Que Abre Portas"
      ],
      bottom: [
        "Domínio Técnico",
        "Identidade Criativa",
        "Imersão Profissional",
        "Um Portfólio Que Abre Portas"
      ]
    },

    passionBand: {
      text: "Paixão Refinada em Profissão. Inclusiva. Exigente. Excecional."
    },

    portfolio: {
      title: "Um Portfólio Que Reflete a Sua Visão Artística",
      description:
        "Ao longo do percurso, a sua arte é capturada, refinada e elevada através de sessões profissionais e produções criativas autênticas, construindo um portfólio que reflete a sua identidade artística única e a sua preparação para o mercado.",
      bullets: [
        "Sessões fotográficas profissionais",
        "Imersões práticas no mercado",
        "Projetos artísticos, editoriais e transformadores"
      ],
      button: "→ Ver Portfólios dos Estudantes"
    },
    fieldsOfStudy: {
      heading: "Os Nossos Domínios Artísticos",
      fields: [
        "Moda & Beleza",
        "Redes Sociais & Conteúdo",
        "Teatro & Cinema",
        "Cosmética de Luxo",
        "Eventos & Casamentos",
        "Freelance & Arte Independente"
      ]
    }
  }
}
