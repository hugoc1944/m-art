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
    headline: "THE MAKEUP SCHOOL THAT TURNS PASSION INTO PROFESSION.",
    ctaText: "→ Explore our Programs",
    ctaLink: "/programs",
  },

  ctaBand1: {
    heading: "DISCOVER THE MÉTIER",
    buttons: [
      { text: "→ Learn More", variant: "outline", link: "/programs" },
      {
        text: "→ Schedule an Information Meeting",
        variant: "solid",
        link: "/contact?intent=meeting",
      },
    ],
  },

  sections: [
    {
      heading: "AN ACADEMY ROOTED IN REALITY.",
      bodyParagraphs: [
        "M·ART was created from a clear conviction: talent alone is not enough. To build a sustainable career in makeup, you need structure, preparation, and real-world understanding.",
        "Founded by an industry-active professional with over 20 years of experience in spectacle, luxury cosmetics, and festival environments, the academy bridges the gap between creative passion and professional readiness.",
        "Here, training is transparent, demanding, and anchored in the realities of the métier - not passing trends.",
      ],
      image: "/about_2.jpg",
      imagePosition: "right",
      backgroundColor: "black",
      textColor: "white",
    },
    {
      heading: "WE TEACH A PROFESSION - NOT JUST TECHNIQUE.",
      bodyParagraphs: [
        "At M·ART, makeup is approached in all its dimensions: beauty, artistic transformation, event and festival environments, editorial, theatre, cinema, and luxury cosmetics.",
        "Students develop strong technical foundations - beauty, mature skin, corrective work - while also exploring artistic creation, FX, and transformation.",
        "But learning goes further than technique. We prepare students for real professional environments: client simulations, event scenarios, independence management, teamwork, and industry expectations.",
        "Our mission is to help each student build not only skill, but identity, vision, and a deep understanding of the profession as a whole.",
      ],
      image: "/about_3.jpg",
      imagePosition: "left",
      backgroundColor: "black",
      textColor: "white",
    },
    {
      heading: "OPEN TO ALL. COMMITTED TO EXCELLENCE.",
      bodyParagraphs: [
        "The academy welcomes beginners, self-taught artists, and professionals in transition. Whatever your starting point, you have your place here if you share the desire to learn, grow, and evolve.",
        "We cultivate a serious, inclusive, and supportive environment where creativity is never restrained - but always guided with rigor.",
        "Each student progresses at their own rhythm within a structured framework that balances high standards with individualized support.",
        "What we build goes beyond technique. We develop confidence, creative identity, professional posture, and long-term direction.",
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
      title: "Founder & Creative Director",
      image: "/teacher_1.jpg",
      bio: [
        "Independent makeup artist with over 20 years of experience in the world of spectacle, where makeup has always been part of his DNA.",
        "His passion for education emerged during his time teaching in a makeup school, where he discovered a deep commitment to transmitting knowledge and unlocking each student’s creative potential.",
        "Confronted with real-world industry challenges that could have been avoided with stronger preparation, he chose to build a different kind of academy: transparent, demanding, and grounded in professional reality.",
        "With extensive experience in luxury cosmetics and festival environments, he has worked closely with brands, artists, and diverse audiences in high-pressure settings.",
        "Excellence, elegance, inclusion, and personal development guide his vision of beauty and education. The academy reflects this philosophy - professional yet supportive, demanding yet deeply human.",
      ],
    },
    {
      name: "CAMILLE LINDENBERGER",
      title: "Co-Founder & Strategic Development",
      image: "/teacher_2.jpg",
      bio: [
        "Camille co-founded the academy with a clear ambition: to train artists who combine creative excellence with strategic intelligence.",
        "With a background in management and development, she brings structure, rigor, and long-term vision to the beauty industry.",
        "Her philosophy is simple: talent is essential - but mastery, posture, and entrepreneurial awareness create sustainability.",
        "Through high standards and strategic guidance, she prepares artists to position themselves confidently within luxury environments and build meaningful, lasting careers.",
      ],
    },
  ],
};