import { AcademyPageData } from "../types"

export const page: AcademyPageData = {
  hero: {
    backgroundImage: "/about_1.jpg",
    backgroundImageMobile: "/about_1_mobile.jpg",
    headline: "THE MAKEUP SCHOOL WHERE PASSION BECOMES A PROFESSION.",

    ctaText: "→ Discover Our Courses",
    ctaLink: "/programs",
  },

  ctaBand1: {
    heading: "EXPLORE THE PROFESSION",

    buttons: [
      {
        text: "→ Learn More",
        variant: "outline",
        link: "/programs",
      },
      {
        text: "→ Schedule an Information Session",
        variant: "solid",
        link: "/contact?intent=meeting",
      },
    ],
  },

  sections: [
    {
      heading: "AN ACADEMY ROOTED IN REALITY.",

      bodyParagraphs: [
        "M·ART is built on a strong belief: talent alone doesn’t guarantee a sustainable career. True success in makeup requires structure, rigorous preparation, and a genuine understanding of how the industry operates.",

        "Founded by an active professional with over 20 years’ experience in performance, luxury cosmetics, and artistic events, the academy bridges the gap between creative ambition and professional achievement.",

        "Here, teaching remains clear, focused, and always grounded in real-world practices, never influenced by fleeting trends.",
      ],

      image: "/about_2.jpg",
      imagePosition: "right",
      backgroundColor: "black",
      textColor: "white",
    },

    {
      heading: "WE TEACH THE PROFESSION, NOT JUST THE TECHNIQUE.",

      bodyParagraphs: [
        "At M·ART, makeup is explored in all its forms: beauty, transformation, events and festivals, editorial and artistic work, theatre, cinema, and luxury cosmetics.",

        "Participants build strong technical foundations, not only in beauty, mature skin, and corrective techniques but also in artistic creation, special effects, and innovative transformations.",

        "Our teaching goes beyond technical mastery. We prepare every participant for all aspects of the profession: client simulations, event scenarios, developing autonomy, collaborative work, and understanding the realities and expectations of the industry.",

        "Our commitment is to help every individual develop not only skills but also a creative identity, a strong vision, and a sophisticated, holistic understanding of the profession.",
      ],

      image: "/about_3.jpg",
      imagePosition: "left",
      backgroundColor: "black",
      textColor: "white",
    },

    {
      heading: "EXCELLENCE FOR EVERYONE. OPEN TO ALL.",

      bodyParagraphs: [
        "The academy welcomes beginners, self-taught artists, and professionals looking to explore new directions. Whatever your background or experience, you have a place here if you share a passion for learning, growth, and creative expression.",

        "We foster a professional, inclusive, and supportive environment where creativity is encouraged and nurtured with care, balancing rigour with sensitivity.",

        "Each learner progresses at their own pace within a structured curriculum that maintains high standards while offering personalised support.",

        "Our promise goes beyond technical skills. We cultivate confidence, artistic voice, professional presence, and a clear sense of long-term purpose.",
      ],

      image: "/about_4.jpg",
      imageMobile: "/about_4_mobile.jpg",
      variant: "overlay",
      backgroundColor: "transparent",
      textColor: "black",
    },
  ],

  teachersBand: {
    heading: "The Vision That Inspires M·ART",
  },

  teachers: [
    {
      name: "FLORENT ALLEMANN",
      title: "Founder & Creative Director",
      image: "/teacher_1.jpg",
      bio: [
        "An independent makeup artist with over 20 years of experience in the performing arts, where makeup has always been at the heart of his creative identity.",

        "His passion for teaching emerged during his years as an instructor at a renowned makeup school, where he discovered a deep commitment to nurturing creative talent and sharing his professional expertise.",

        "Having faced real industry challenges that could have been overcome with better preparation, he became dedicated to building an academy that is transparent, demanding, and firmly grounded in professional realities.",

        "With extensive experience in luxury cosmetics and on the international festival circuit, he has worked with brands, artists, and diverse audiences in highly demanding environments.",

        "Excellence, elegance, inclusivity, and personal growth define his philosophy of both beauty and education. The academy embodies this vision: consistently professional, supportive, rigorous, and deeply human.",
      ],
    },

    {
      name: "CAMILLE LINDENBERGER",
      title: "Co-Founder & Strategic Development",
      image: "/teacher_2.jpg",
      bio: [
        "Camille co-founded the academy with one goal: to nurture artists who combine creative brilliance with strategic vision.",

        "With a background in management and leadership, she brings structure, discipline, and forward-thinking to the world of beauty.",

        "Her approach is intentional: talent is essential, but true impact is achieved through mastery, presence, and a strong sense of entrepreneurship.",

        "By maintaining the highest standards and offering strategic mentorship, she empowers artists to confidently establish themselves in luxury markets and build rewarding, sustainable careers.",
      ],
    },
  ],
}