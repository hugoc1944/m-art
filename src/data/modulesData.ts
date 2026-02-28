export interface ModuleData {
  slug: string;
  title: string;
  shortDescription: string;
  duration: string;
  heroImage: string;
  heroPosition?: string;

  positioning: string[];
  approach?: string[];
  techniques?: string[];
  framework?: string[];
  ethos?: string[];
}

export const modulesData: ModuleData[] = [
  {
    slug: "artistic-makeup",
    title: "ARTISTIC MAKEUP INTENSIVE",
    shortDescription:
      "An immersive creative module designed to unlock imagination and affirm each participant’s unique visual signature.",
    duration: "3–5 Day Intensive",
    heroImage: "/module_1.jpg",
    heroPosition: "center 30%",

    positioning: [
      "Enter the limitless universe of artistic creation through an intensive designed to liberate imagination and strengthen individual visual identity.",
      "Makeup is explored as a medium of concept, transformation, texture, and narrative - beyond convention and beyond repetition.",
      "Creativity is approached with structure, intention, and professional rigor."
    ],

    approach: [
      "Participants develop the ability to conceive strong, coherent artistic concepts grounded in clear creative direction.",
      "Each project follows a structured methodology that supports both expressive freedom and technical precision.",
      "Exploration is bold, but always anchored in professional standards and portfolio relevance."
    ],

    techniques: [
      "Developing impactful and cohesive artistic concepts",
      "Mastering texture interplay, color dynamics, and volumetric balance",
      "Working with special effects materials, illusions, and transformative techniques",
      "Adapting creativity to professional briefs and real project constraints",
      "Translating abstract ideas into refined, technically controlled execution"
    ],

    framework: [
      "This immersive experience bridges artistic experimentation and technical mastery.",
      "Participants refine composition, material control, and aesthetic coherence.",
      "Creative outcomes are positioned within professional contexts to ensure strong, industry-relevant portfolio work."
    ],

    ethos: [
      "Designed for professional artists seeking to elevate their portfolio, as well as passionate creatives ready to explore a more expressive dimension of makeup.",
      "Technique and imagination meet to give life to distinctive, high-level artistic work."
    ],
  },

  {
    slug: "beauty-makeup",
    title: "BEAUTY MAKEUP INTENSIVE",
    shortDescription:
      "Timeless techniques and contemporary applications for refined, professional beauty environments.",
    duration: "3–4 Day Intensive",
    heroImage: "/module_2.jpg",
    heroPosition: "center 28%",

    positioning: [
      "Refine your expertise through a comprehensive module dedicated to timeless beauty techniques and modern industry applications.",
      "This formation guides participants through essential foundations and contemporary methods used in events, bridal, editorial, and private clientele environments.",
      "The objective is mastery of beauty in its most adaptable, precise, and professional form."
    ],

    approach: [
      "Participants are guided step by step through structured technical development, ensuring clarity, discipline, and confidence.",
      "Each technique is adapted to facial morphology, skin characteristics, undertones, and aesthetic intention.",
      "Beauty is approached inclusively - respecting all skin tones, ages, and individual features."
    ],

    techniques: [
      "Achieving a flawless, luminous, and long-lasting complexion",
      "Enhancing facial structure through contouring and highlighting",
      "Adapting makeup to diverse skin tones and skin types",
      "Creating natural, sophisticated, or glamour-oriented looks",
      "Developing efficiency for real client-facing professional environments"
    ],

    framework: [
      "The module emphasizes precision, harmony, and the enhancement of natural beauty.",
      "Techniques are structured to meet professional standards while remaining adaptable to diverse contexts and client expectations.",
      "Participants develop reliability, consistency, and technical confidence aligned with industry realities."
    ],

    ethos: [
      "Accessible to professionals and dedicated enthusiasts alike, this module supports growth in confidence, efficiency, and technical excellence.",
      "Beauty is approached not as excess - but as balance: intentional, structured, and refined."
    ],
  },

  {
    slug: "fragilized-skin-wellbeing",
    title: "FRAGILIZED SKIN & WELL-BEING SUPPORT",
    shortDescription:
      "A specialized, compassionate module designed to support medically sensitized skin with expertise, discretion, and care.",
    duration: "Specialized Support Module",
    heroImage: "/module_3.jpg",

    positioning: [
      "Certain life experiences profoundly transform one’s relationship with personal image. Medical treatments - including chemotherapy - may sensitize the skin and alter facial features.",
      "In these moments, it is essential to feel supported with gentleness, respect, and professionalism.",
      "This module has been carefully designed to respond to the specific needs of medically sensitized skin within a confidential and benevolent framework."
    ],

    approach: [
      "Each session begins with a dedicated exchange and a precise skin assessment.",
      "We take time to understand sensitivities, expectations, and personal habits in order to adapt techniques and product selection with care.",
      "Every step is personalized to restore comfort, harmony, and confidence."
    ],

    techniques: [
      "Complexion unification using lightweight, high-tolerance textures",
      "Gentle correction of redness, dark circles, or irregularities",
      "Natural brow redefinition",
      "Enhancement of the eyes and smile",
      "Simple techniques designed for safe daily reproduction"
    ],

    framework: [
      "All products are rigorously selected for high tolerance and skin compatibility.",
      "Formulas are hypoallergenic, fragrance-free, dermatologically tested, and adapted to sensitized skin.",
      "The objective is never transformation - but subtle revelation, respecting both the skin and the individual."
    ],

    ethos: [
      "Beyond technique, this module offers a dedicated moment to reconnect gently with one’s image.",
      "Sessions take place in a discreet, professional, and reassuring environment where attentive listening is central.",
      "This is a space of care, dignity, and personal restoration."
    ],
  },

  {
    slug: "gender-affirmation",
    title: "GENDER AFFIRMATION MAKEUP",
    shortDescription:
      "A respectful, inclusive, and technically advanced space for identity-aligned presentation and authentic self-expression.",
    duration: "Private Intensive Session",
    heroImage: "/module_4.jpg",

    positioning: [
      "Makeup is a powerful tool for self-expression and identity affirmation.",
      "This module provides a safe, respectful, and affirming space where each person can explore and refine an image aligned with who they truly are.",
      "The objective is not transformation into someone else - but affirmation of the person you already are."
    ],

    approach: [
      "Each session begins with a confidential consultation to explore your goals, comfort level, experience with makeup, and the features you wish to soften, enhance, or redefine.",
      "Every technique is adapted to your identity, your preferences, and your lifestyle.",
      "The process moves at your rhythm, within a framework of respect and professional expertise."
    ],

    techniques: [
      "Facial structuring and contouring to support feminine, masculine, or androgynous presentation",
      "Brow restructuring and definition",
      "Complexion unification and skin preparation",
      "Eye and lip techniques adapted to the desired aesthetic",
      "Practical guidance for daily, autonomous application"
    ],

    framework: [
      "This module combines advanced artistic expertise with a nuanced understanding of gender expression and facial morphology.",
      "The approach is both technical and compassionate, ensuring each participant feels supported and respected throughout the process.",
      "Products are selected for performance, comfort, and skin compatibility."
    ],

    ethos: [
      "Sessions take place in a discreet, welcoming, and inclusive environment where identity and personal boundaries are honored without condition.",
      "More than a technical session, this is a space of confidence, recognition, and empowerment."
    ],
  },
];