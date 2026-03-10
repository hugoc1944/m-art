import type { ContentSectionProps } from "@/components/shared/ContentSection";
import type { CTABandProps } from "@/components/shared/CTABand";

export interface Teacher {
  name: string;
  title: string;
  image: string;
  imageMobile?: string;
  bio: string[];
}

interface AcademyContent {
  hero: {
    backgroundImage: string;
    backgroundImageMobile: string;
    headline: string;
    ctaText: string;
    ctaLink: string;
  };
  ctaBand1: CTABandProps;
  sections: ContentSectionProps[];
  teachers: Teacher[];
}

export const academyContent: AcademyContent = {
  hero: {
    backgroundImage: "/about_1.jpg",
    backgroundImageMobile: "/about_1_mobile.jpg",
    headline: "L'ÉCOLE DE MAQUILLAGE QUI TRANSFORME LA PASSION EN CARRIÈRE.",
    ctaText: "→ Découvrez nos programmes",
    ctaLink: "/programs",
  },

  ctaBand1: {
    heading: "DÉCOUVREZ LE MÉTIER",
    buttons: [
      { text: "→ En savoir plus", variant: "outline", link: "/programs" },
      {
        text: "→ Planifiez un entretien d'information",
        variant: "solid",
        link: "/contact?intent=meeting",
      },
    ],
  },

  sections: [
    {
      heading: "UNE ACADÉMIE ANCRÉE DANS LA RÉALITÉ.",
      bodyParagraphs: [
        "M·ART est née d'une conviction claire : le talent seul ne suffit pas. Pour bâtir une carrière durable dans le maquillage, il faut une structure, une préparation et une compréhension approfondie des réalités du métier.",
        "Fondée par un·e professionnel·le actif·ve avec plus de 20 ans d'expérience dans le spectacle, la cosmétique de luxe et les festivals, l'académie établit un lien solide entre passion créative et préparation professionnelle.",
        "Ici, la formation est transparente, exigeante et ancrée dans les réalités du métier, loin des tendances éphémères.",
      ],
      image: "/about_2.jpg",
      imagePosition: "right",
      backgroundColor: "black",
      textColor: "white",
    },
    {
      heading: "NOUS ENSEIGNONS UN MÉTIER - PAS SEULEMENT UNE TECHNIQUE.",
      bodyParagraphs: [
        "Chez M·ART, le maquillage est exploré dans toutes ses dimensions : beauté, transformation artistique, événements, festivals, éditorial, théâtre, cinéma et cosmétique de luxe.",
        "Les étudiant·e·s acquièrent des bases techniques solides en beauté, peaux matures et maquillage correctif, tout en explorant la création artistique, les effets spéciaux et les transformations.",
        "Mais l'apprentissage va au-delà de la technique. Nous préparons nos étudiant·e·s à des environnements professionnels réels : simulations avec client·e·s, scénarios événementiels, gestion de l'autonomie, travail en équipe et exigences du secteur.",
        "Notre mission est d'aider chaque étudiant·e à construire non seulement des compétences, mais aussi une identité, une vision et une compréhension approfondie du métier dans son ensemble.",
      ],
      image: "/about_3.jpg",
      imagePosition: "left",
      backgroundColor: "black",
      textColor: "white",
    },
    {
      heading: "OUVERT·E·S À TOU·TE·S. ENGAGÉ·E·S POUR L'EXCELLENCE.",
      bodyParagraphs: [
        "L'académie accueille débutant·e·s, autodidactes et professionnel·le·s en reconversion. Peu importe votre point de départ, vous avez votre place ici si vous souhaitez apprendre, évoluer et progresser.",
        "Nous cultivons un environnement sérieux, inclusif et bienveillant où la créativité est encouragée tout en étant guidée avec rigueur.",
        "Chaque étudiant·e progresse à son propre rythme dans un cadre structuré, équilibrant exigences élevées et accompagnement personnalisé.",
        "Notre objectif est de développer bien plus que la technique. Nous cultivons la confiance, l'identité créative, une posture professionnelle et une vision à long terme.",
      ],
      image: "/about_4.jpg",
      imageMobile: "/about_4_mobile.jpg",
      variant: "overlay",
      backgroundColor: "transparent",
      textColor: "black",
    },
  ],

  teachers: [
    {
      name: "FLORENT ALLEMANN",
      title: "Fondateur·rice & Directeur·rice Créatif·ve",
      image: "/teacher_1.jpg",
      bio: [
        "Maquilleur·se indépendant·e avec plus de 20 ans d'expérience dans l'univers du spectacle, où le maquillage a toujours été une vocation.",
        "Sa passion pour la transmission s'est révélée lors de son passage dans une école de maquillage, où iel a découvert un profond engagement pour partager ses connaissances et révéler le potentiel créatif de chaque étudiant·e.",
        "Face aux défis réels du secteur, souvent dus à un manque de préparation, iel a décidé de créer une académie différente : transparente, exigeante et ancrée dans la réalité professionnelle.",
        "Avec une expertise en cosmétique de luxe et en environnements événementiels, iel a collaboré avec des marques, artistes et publics variés dans des contextes très exigeants.",
        "Son approche allie excellence, élégance, inclusion et épanouissement personnel, des valeurs qui définissent la philosophie de l'académie : professionnelle, bienveillante, exigeante et profondément humaine.",
      ],
    },
    {
      name: "CAMILLE LINDENBERGER",
      title: "Co-Fondateur·rice & Développement Stratégique",
      image: "/teacher_2.jpg",
      bio: [
        "Camille a co-fondé l'académie avec une vision claire : former des artistes qui allient excellence créative et intelligence stratégique.",
        "Avec une formation en management et développement, iel apporte structure, rigueur et vision à long terme au secteur de la beauté.",
        "Sa philosophie est simple : le talent est essentiel, mais la maîtrise, la posture et la conscience entrepreneuriale sont les clés de la pérennité.",
        "Grâce à des exigences élevées et un accompagnement stratégique, iel prépare les artistes à s'imposer avec assurance dans des environnements de luxe et à construire des carrières significatives et durables.",
      ],
    },
  ],
};
