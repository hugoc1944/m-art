import { AcademyPageData } from "../types"

export const page: AcademyPageData = {

  hero: {
    backgroundImage: "/about_1.jpg",
    backgroundImageMobile: "/about_1_mobile.jpg",

    headline: "A ESCOLA DE MAQUILHAGEM QUE TRANSFORMA PAIXÃO EM PROFISSÃO.",

    ctaText: "→ Explorar os nossos Programas",
    ctaLink: "/programs",
  },

  ctaBand1: {
    heading: "DESCUBRA A PROFISSÃO",

    buttons: [
      {
        text: "→ Saber mais",
        variant: "outline",
        link: "/programs",
      },
      {
        text: "→ Agendar uma reunião informativa",
        variant: "solid",
        link: "/contact?intent=meeting",
      },
    ],
  },

  sections: [

    {
      heading: "UMA ACADEMIA ENRAIZADA NA REALIDADE.",

      bodyParagraphs: [
        "A M·ART nasceu de uma convicção clara: o talento por si só não é suficiente. Para construir uma carreira sustentável na maquilhagem, é necessária estrutura, preparação e uma compreensão real da indústria.",

        "Fundada por um profissional ativo no setor, com mais de 20 anos de experiência no universo do espetáculo, da cosmética de luxo e dos ambientes de festival, a academia cria uma ponte entre a paixão criativa e a preparação profissional.",

        "Aqui, a formação é transparente, exigente e assente na realidade da indústria, e não em tendências passageiras.",
      ],

      image: "/about_2.jpg",
      imagePosition: "right",

      backgroundColor: "black",
      textColor: "white",
    },

    {
      heading: "ENSINAMOS UMA PROFISSÃO, NÃO APENAS UMA TÉCNICA.",

      bodyParagraphs: [
        "Na M·ART, a maquilhagem é abordada em todas as suas dimensões: beleza, transformação artística, ambientes de eventos e festivais, editorial, teatro, cinema e cosmética de luxo.",

        "Os alunos desenvolvem bases técnicas sólidas em maquilhagem de beleza, pele madura e trabalho corretivo, ao mesmo tempo que exploram a criação artística, os efeitos especiais e a transformação.",

        "Mas a aprendizagem vai além da técnica. Preparamos os alunos para contextos profissionais reais: simulações com clientes, cenários de eventos, gestão da atividade independente, trabalho em equipa e expectativas da indústria.",

        "A nossa missão é ajudar cada aluno a construir não apenas competências, mas também identidade, visão e uma compreensão profunda da profissão como um todo.",
      ],

      image: "/about_3.jpg",
      imagePosition: "left",

      backgroundColor: "black",
      textColor: "white",
    },

    {
      heading: "ABERTA A TODOS. COMPROMETIDA COM A EXCELÊNCIA.",

      bodyParagraphs: [
        "A academia acolhe iniciantes, artistas autodidatas e profissionais em transição. Seja qual for o seu ponto de partida, terá aqui o seu lugar se partilhar o desejo de aprender, crescer e evoluir.",

        "Cultivamos um ambiente sério, inclusivo e de apoio, onde a criatividade nunca é limitada, mas sempre orientada com rigor.",

        "Cada aluno progride ao seu próprio ritmo dentro de uma estrutura que equilibra elevados padrões com acompanhamento individualizado.",

        "O que construímos vai além da técnica. Desenvolvemos confiança, identidade criativa, postura profissional e uma direção de longo prazo.",
      ],

      image: "/about_4.jpg",
      imageMobile: "/about_4_mobile.jpg",

      variant: "overlay",

      backgroundColor: "transparent",
      textColor: "black",
    },

  ],

  teachersBand: {
    heading: "A visão por trás da M·ART",
  },

  teachers: [

    {
      name: "FLORENT ALLEMANN",
      title: "Fundador & Diretor Criativo",
      image: "/teacher_1.jpg",

      bio: [
        "Maquilhador independente com mais de 20 anos de experiência no mundo do espetáculo, onde a maquilhagem sempre fez parte do seu ADN.",

        "A sua paixão pelo ensino surgiu durante o período em que lecionou numa escola de maquilhagem, onde descobriu um profundo compromisso com a transmissão de conhecimento e com o desenvolvimento do potencial criativo de cada aluno.",

        "Confrontado com desafios reais da indústria que poderiam ter sido evitados com uma preparação mais sólida, decidiu criar um tipo diferente de academia: transparente, exigente e enraizada na realidade profissional.",

        "Com vasta experiência em cosmética de luxo e em ambientes de festivais, trabalhou de perto com marcas, artistas e públicos diversos em contextos de elevada exigência.",

        "Excelência, elegância, inclusão e desenvolvimento pessoal orientam a sua visão da beleza e da educação. A academia reflete esta filosofia: profissional, mas acolhedora; exigente, mas profundamente humana.",
      ],
    },

    {
      name: "CAMILLE LINDENBERGER",
      title: "Co-fundadora & Desenvolvimento Estratégico",
      image: "/teacher_2.jpg",

      bio: [
        "Camille cofundou a academia com uma ambição clara: formar artistas que combinem excelência criativa com inteligência estratégica.",

        "Com formação em gestão e desenvolvimento, traz estrutura, rigor e uma visão de longo prazo para a indústria da beleza.",

        "A sua filosofia é simples: o talento é essencial, mas o domínio, a postura profissional e a consciência empreendedora são o que criam sustentabilidade.",

        "Através de elevados padrões e orientação estratégica, prepara os artistas para se posicionarem com confiança em ambientes de luxo e construírem carreiras significativas e duradouras.",
      ],
    },

  ],

}