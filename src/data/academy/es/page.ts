import { AcademyPageData } from "../types"

export const page: AcademyPageData = {

  hero: {
    backgroundImage: "/about_1.jpg",
    backgroundImageMobile: "/about_1_mobile.jpg",

    headline: "LA ACADEMIA DE MAQUILLAJE QUE TRANSFORMA LA PASIÓN EN PROFESIÓN.",

    ctaText: "→ Explorar nuestros programas",
    ctaLink: "/programs",
  },

  ctaBand1: {
    heading: "DESCUBRE LA PROFESIÓN",

    buttons: [
      {
        text: "→ Saber más",
        variant: "outline",
        link: "/programs",
      },
      {
        text: "→ Programar una reunión informativa",
        variant: "solid",
        link: "/contact?intent=meeting",
      },
    ],
  },

  sections: [

    {
      heading: "UNA ACADEMIA ARRAIGADA EN LA REALIDAD.",

      bodyParagraphs: [
        "M·ART nació de una convicción profunda: el talento por sí solo no es suficiente. Para construir una carrera duradera en el maquillaje, se requiere estructura, preparación y una comprensión auténtica del sector.",

        "Fundada por un profesional activo en la industria con más de 20 años de experiencia en el mundo del espectáculo, la cosmética de lujo y los entornos festivaleros, la academia establece un puente entre la pasión creativa y la preparación profesional.",

        "Aquí, la formación es transparente, rigurosa y fundamentada en las realidades de la industria, no en tendencias efímeras.",
      ],

      image: "/about_2.jpg",
      imagePosition: "right",

      backgroundColor: "black",
      textColor: "white",
    },

    {
      heading: "TRANSMITIMOS UNA PROFESIÓN, NO ÚNICAMENTE UNA TÉCNICA.",

      bodyParagraphs: [
        "En M·ART, el maquillaje se explora en todas sus dimensiones: belleza, transformación artística, entornos de eventos y festivales, editorial, teatro, cine y cosmética de lujo.",

        "Los estudiantes desarrollan fundamentos técnicos sólidos en maquillaje de belleza, piel madura y trabajo correctivo, mientras exploran la creación artística, los efectos especiales y la transformación.",

        "Sin embargo, el aprendizaje trasciende la técnica. Preparamos a los estudiantes para entornos profesionales auténticos: simulaciones con clientela, escenarios de eventos, desarrollo de autonomía, trabajo colaborativo y comprensión de las expectativas del sector.",

        "Nuestra misión es acompañar a cada estudiante en la construcción no solo de competencias, sino también de identidad, visión y una comprensión integral de la profesión.",
      ],

      image: "/about_3.jpg",
      imagePosition: "left",

      backgroundColor: "black",
      textColor: "white",
    },

    {
      heading: "ABIERTOS A TODOS. COMPROMETIDOS CON LA EXCELENCIA.",

      bodyParagraphs: [
        "La academia acoge a principiantes, artistas autodidactas y profesionales en transición. Independientemente de tu punto de partida, aquí encontrarás tu lugar si compartes el deseo de aprender, evolucionar y crecer.",

        "Cultivamos un entorno riguroso, inclusivo y enriquecedor, donde la creatividad nunca se limita, pero siempre se guía con precisión.",

        "Cada estudiante progresa a su propio ritmo dentro de un marco estructurado que equilibra estándares elevados con acompañamiento individualizado.",

        "Lo que construimos trasciende la técnica. Desarrollamos confianza, identidad creativa, postura profesional y una visión a largo plazo.",
      ],

      image: "/about_4.jpg",
      imageMobile: "/about_4_mobile.jpg",

      variant: "overlay",

      backgroundColor: "transparent",
      textColor: "black",
    },

  ],

  teachersBand: {
    heading: "La visión detrás de M·ART",
  },

  teachers: [

    {
      name: "FLORENT ALLEMANN",
      title: "Fundador y Director Creativo",
      image: "/teacher_1.jpg",

      bio: [
        "Maquillador independiente con más de 20 años de experiencia en el mundo del espectáculo, donde el maquillaje siempre ha formado parte de su identidad creativa.",

        "Su pasión por la enseñanza surgió durante su etapa como formador en una escuela de maquillaje, donde descubrió un profundo compromiso con la transmisión del conocimiento y el desarrollo del potencial creativo de cada estudiante.",

        "Al enfrentarse a desafíos reales de la industria que podrían haberse evitado con una preparación más sólida, decidió crear una academia diferente: transparente, rigurosa y profundamente arraigada en la realidad profesional.",

        "Con una amplia experiencia en cosmética de lujo y en el circuito internacional de festivales, ha colaborado con marcas, artistas y públicos diversos en entornos de gran exigencia.",

        "La excelencia, la elegancia, la inclusión y el desarrollo personal guían su visión de la belleza y de la educación. La academia refleja esta filosofía: profesional, exigente y profundamente humana.",
      ],
    },

    {
      name: "CAMILLE LINDENBERGER",
      title: "Co-fundadora y Desarrollo Estratégico",
      image: "/teacher_2.jpg",

      bio: [
        "Camille cofundó la academia con una ambición clara: formar artistas que combinen excelencia creativa con inteligencia estratégica.",

        "Con formación en gestión y desarrollo, aporta estructura, rigor y una visión a largo plazo al proyecto académico.",

        "Su filosofía es clara: el talento es esencial, pero el dominio técnico, la postura profesional y la visión emprendedora permiten construir carreras sólidas y duraderas.",

        "A través de estándares elevados y una orientación estratégica, prepara a los artistas para posicionarse con confianza en entornos profesionales de alto nivel y construir trayectorias significativas.",
      ],
    },

  ],

}