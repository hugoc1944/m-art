import { ContentSectionProps } from "@/components/shared/ContentSection";

export interface YearContent {
  year: 1 | 2 | 3;
  hero: {
    breadcrumb: string;
    headline: string;
    subheadline: string;
    backgroundImage: string;
    backgroundImageMobile?: string;
  };
  infoBand: {
    diploma: string;
  };
  intro: {
    headline: string;
    bodyParagraphs: string[];
    sessionDetails: {
      programTitle: string;
      duration: string;
      hours: string;
      differentiators: string[];
    };
  };
  contentSections: ContentSectionProps[];
}

export const programData: Record<1 | 2 | 3, YearContent> = {
  1: {
    year: 1,
    hero: {
      breadcrumb:
        "HOME / PROGRAMS / PROFESSIONAL MAKEUP - YEAR 1",
      headline:
        "PROFESSIONAL MAKEUP PROGRAM\nYEAR 1: FOUNDATIONS",
      subheadline:
        "From beauty to cinema. From fashion to transformation. Celebrate every face.",
      backgroundImage: "/year1-hero.jpg",
      backgroundImageMobile: "/year1-hero-mobile.jpg",
    },
    infoBand: {
      diploma:
        "Professional Makeup Artistry & Image Consulting",
    },
    intro: {
      headline: "BUILD YOUR FOUNDATION",
      bodyParagraphs: [
        "Step into the world of professional makeup and unlock your creative potential in an environment where every identity, every background, and every beauty is welcomed.",
        "This immersive year guides you step by step to transform passion into profession. Together, we create, transform, and tell stories — celebrating all singularities through makeup.",
      ],
      sessionDetails: {
        programTitle:
          "Professional Makeup Artist Program - Year 1",
        duration: "September – June",
        hours: "Structured part-time immersive curriculum",
        differentiators: [
          "Inclusive approach to all skin tones and identities",
          "Daily guided technical practice",
          "Professional photoshoots & portfolio development",
          "Strong artistic and industry foundations",
        ],
      },
    },
    contentSections: [
      {
        heading: "TRAINING DETAILS",
        bodyParagraphs: [
          "Throughout the year, you practice intensively across all fields of professional makeup: beauty, fashion, bridal, artistic, editorial, theatre, cinema, special effects, and digital creation.",
          "Each look is first demonstrated, then practiced with guidance, and captured during professional photoshoots to build a strong and impactful portfolio.",
          "You master essential foundations such as color theory, morphology, dermatology, and skin preparation, alongside professional techniques used backstage, on set, and in studio environments.",
          "Thematic creative weeks, guest industry professionals, and personal projects allow you to explore your own style while developing discipline, precision, and confidence.",
        ],
        closingStatement:
          "Creative. Inclusive. Professionally transformative.",
        image: "/year1-training.jpg",
        imagePosition: "right",
        backgroundColor: "white",
      },
      {
        heading: "OBJECTIVES & CONTEXT",
        subheading: "CAREER OPPORTUNITIES",
        bodyParagraphs: [
          "This program prepares you to work independently or within professional teams across multiple sectors of the makeup industry.",
          "By the end of the year, you leave with technical mastery, a confident artistic voice, and a portfolio that reflects your versatility.",
        ],
        bulletPoints: [
          "Beauty & Fashion",
          "Social Media & Content Creation",
          "Theatre & Film",
          "Special Effects (FX)",
          "Editorial & Artistic Productions",
          "Events & Bridal",
          "Freelance Makeup Artistry",
        ],
        closingStatement:
          "A year to reveal your potential, refine your skills, and begin building a career without limits.",
        image: "/year1-objectives.jpeg",
        imagePosition: "left",
        backgroundColor: "light-grey",
      },
    ],
  },

  2: {
    year: 2,
    hero: {
      breadcrumb:
        "HOME / PROGRAMS / PROFESSIONAL MAKEUP - YEAR 2",
      headline:
        "PROFESSIONAL MAKEUP PROGRAM\nYEAR 2: ADVANCED MASTERY",
      subheadline:
        "Affirm your signature. Refine your expertise. Own your position.",
      backgroundImage: "/year2-hero.jpg",
      backgroundImageMobile: "/year2-hero-mobile.jpg",
    },
    infoBand: {
      diploma:
        "Advanced Techniques & Image Consulting",
    },
    intro: {
      headline: "AFFIRM YOUR ARTISTRY",
      bodyParagraphs: [
        "After exploring the full spectrum of makeup artistry in Year 1, this second year guides you toward advanced mastery, technical precision, and confident professional positioning.",
        "Here, it is no longer only about creating. It is about analyzing, structuring, adapting, performing — and affirming a strong, intentional artistic vision.",
      ],
      sessionDetails: {
        programTitle:
          "Advanced Makeup Artistry - Year 2",
        duration: "September – June",
        hours:
          "Advanced specialization and professional immersion",
        differentiators: [
          "Advanced morphological analysis & visagism",
          "High-level technical precision",
          "Luxury and editorial positioning",
          "Personal branding & artistic signature development",
        ],
      },
    },
    contentSections: [
      {
        heading: "ADVANCED TECHNICAL EXPERTISE",
        subheading:
          "Image Consulting & Advanced Morphological Analysis",
        bodyParagraphs: [
          "You deepen your expertise in advanced morphological analysis and image consulting, learning to justify every artistic choice through solid professional evaluation.",
          "Creativity becomes intentional, structured, and fully mastered — adaptable to every face, every client, and every professional context.",
        ],
        bulletPoints: [
          "In-depth face and body morphology studies",
          "Expert color analysis",
          "Personalized technical corrections",
          "Makeup / hair / styling harmonization",
          "Development of a coherent artistic signature",
        ],
        closingStatement:
          "Precision meets vision. Technique serves intention.",
        image: "/year2-im1.jpg",
        imagePosition: "left",
        backgroundColor: "white",
      },
      {
        heading: "TECHNICAL MASTERY & ARTISTIC SIGNATURE",
        bodyParagraphs: [
          "High-level technical mastery combines with creative exploration to help you sign your work with confidence, clarity, and maturity.",
        ],
        bulletPoints: [
          "Advanced HD complexion techniques (photo, video, studio lighting)",
          "Professional sculpting & structural correction",
          "Conceptual editorial makeup",
          "Luxury and premium client adaptation",
          "Advanced FX refinement & realistic textures",
        ],
        closingStatement:
          "The objective: no longer just to execute — but to sign.",
        image: "/year2-im2.jpg",
        imagePosition: "right",
        backgroundColor: "light-grey",
      },
      {
        heading:
          "PROFESSIONAL IMMERSION & CAREER DEVELOPMENT",
        bodyParagraphs: [
          "Because a professional artist must perform in real conditions, this year includes immersive scenarios and industry simulations.",
        ],
        bulletPoints: [
          "Real client brief simulations",
          "Time management & speed execution",
          "Team collaboration (photographers, stylists, models)",
          "Premium portfolio refinement",
        ],
        closingStatement:
          "You do not simply become a stronger artist. You become a positioned professional.",
        image: "/year2-im3.jpg",
        imagePosition: "left",
        backgroundColor: "white",
      },
    ],
  },

  3: {
    year: 3,
    hero: {
      breadcrumb:
        "HOME / PROGRAMS / PROFESSIONAL MAKEUP - YEAR 3",
      headline:
        "PROFESSIONAL MAKEUP PROGRAM\nYEAR 3: EDUCATOR & TRAINER",
      subheadline:
        "Transmit. Lead. Inspire. Shape the future of artistry.",
      backgroundImage: "/year3-hero.jpg",
      backgroundImageMobile: "/year3-hero-mobile.jpg",
    },
    infoBand: {
      diploma:
        "Certified Makeup Educator & Trainer",
    },
    intro: {
      headline: "BECOME AN EDUCATOR",
      bodyParagraphs: [
        "After mastering technique and affirming your artistic identity, Year 3 invites you into a new role: expert educator.",
        "It is no longer only about knowing how to do. It is about knowing how to transmit, structure knowledge, guide diverse learners, and inspire growth with clarity and confidence.",
      ],
      sessionDetails: {
        programTitle:
          "Makeup Educator Training - Year 3",
        duration: "September – June",
        hours:
          "Pedagogical methodology and supervised professional teaching practice",
        differentiators: [
          "Structured teaching methodology",
          "Brand & product training preparation",
          "Public speaking and stage presence",
          "Independent training business development",
        ],
      },
    },
    contentSections: [
      {
        heading:
          "PEDAGOGY & KNOWLEDGE TRANSMISSION",
        subheading: "Teaching Methodology",
        bodyParagraphs: [
          "You learn to transform your expertise into impactful educational content through structured methodology and supervised practice.",
        ],
        bulletPoints: [
          "Designing structured programs",
          "Defining clear learning objectives",
          "Adapting communication to different experience levels",
          "Managing groups while individualizing support",
          "Developing a credible educator posture",
        ],
        closingStatement:
          "Your expertise becomes transferable. Your impact multiplies.",
        image: "/year3-im1.jpg",
        imagePosition: "right",
        backgroundColor: "white",
      },
      {
        heading:
          "BRAND TRAINING & STAGE PRESENCE",
        subheading:
          "Becoming a Trainer for Professional Beauty Brands",
        bodyParagraphs: [
          "Professional educators represent brands, lead demonstrations, and speak publicly with clarity, precision, and authenticity.",
        ],
        bulletPoints: [
          "Technical product analysis",
          "Translating marketing into pedagogy",
          "Expert demonstrations",
          "Public speaking techniques",
          "Live masterclass execution",
        ],
        closingStatement:
          "An educator inspires through both mastery and presence.",
        image: "/year3-im2.jpg",
        imagePosition: "left",
        backgroundColor: "light-grey",
      },
      {
        heading: "BUILDING YOUR TRAINING OFFER",
        bodyParagraphs: [
          "Learn to structure, position, and commercialize your expertise while preserving your professional integrity and value.",
        ],
        bulletPoints: [
          "Creating your own modules",
          "Structuring profitable workshops",
          "Strategic pricing",
          "Developing expert positioning",
          "Prospecting schools & brands",
        ],
        image: "/year3-im3_v2.jpg",
        imagePosition: "right",
        backgroundColor: "white",
      },
      {
        heading: "A YEAR TO TAKE THE LEAD",
        bodyParagraphs: [
          "Through real teaching simulations and supervised practice, you develop leadership posture, institutional credibility, and strategic vision.",
        ],
        bulletPoints: [
          "Teach in professional schools",
          "Train for cosmetic brands",
          "Lead retail education",
          "Launch independent workshops",
        ],
        closingStatement:
          "You no longer become only a makeup expert. You become an expert in transmission.",
        image: "",
        imagePosition: "left",
        backgroundColor: "light-grey",
      },
    ],
  },
};