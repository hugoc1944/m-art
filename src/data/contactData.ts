import { Locale } from "@/i18n/config"

export interface ContactData {
  hero: {
    meetingHeading: string
    meetingDescription: string
    enquiryHeading: string
    enquiryDescription: string
  }

  form: {
    meetingDefaultRequest: string

    labels: {
      firstName: string
      lastName: string
      email: string
      phone: string
      request: string
      message: string
      consent: string
    }

    placeholders: {
      requestSelect: string
    }

    requestOptions: string[]

    buttons: {
      submitMeeting: string
      submitEnquiry: string
      submitting: string
      submitAnother: string
    }

    success: {
      meetingTitle: string
      meetingText: string
      enquiryTitle: string
      enquiryText: string
    }

    errors: {
      generic: string
    }
  }

  info: {
    heading: string

    visit: {
      title: string
      lines: string[]
    }
    call: {
      title: string
      lines: string[]
    }
    email: {
      title: string
      lines: string[]
    }
  }

  signature: string
}

export const contactData: Record<Locale, ContactData> = {
  en: {
    hero: {
      meetingHeading: "REQUEST AN INFORMATION MEETING",
      meetingDescription:
        "Schedule a personalized consultation with our dedicated team to discover the academy, explore our transformative programs, and navigate the admissions process.",

      enquiryHeading: "ENQUIRIES & ADMISSIONS",
      enquiryDescription:
        "Whether you're exploring our visionary programs or starting your application, we're here to guide your artistic journey. Share your aspirations, and we'll connect with you personally."
    },

    form: {
      meetingDefaultRequest: "Request an Information Meeting",

      labels: {
        firstName: "First Name*",
        lastName: "Last Name*",
        email: "Email*",
        phone: "Phone Number*",
        request: "Your enquiry concerns*",
        message: "Message*",
        consent:
          "I agree to receive communications from M•ART Academy and consent to the processing of my personal data for this purpose."
      },

      placeholders: {
        requestSelect: "Select an option"
      },

      requestOptions: [
        "Request an Information Meeting",
        "Program Details",
        "Application Support",
        "General Enquiry"
      ],

      buttons: {
        submitting: "Submitting...",
        submitMeeting: "Request Consultation",
        submitEnquiry: "Submit Your Enquiry",
        submitAnother: "Submit Another Enquiry"
      },

      success: {
        meetingTitle: "Consultation Request Received",
        meetingText:
          "Thank you. Our team will contact you shortly to schedule your personal consultation.",

        enquiryTitle: "Enquiry Received",
        enquiryText:
          "Thank you for sharing your aspirations. Our team will personally review your message and respond thoughtfully."
      },

      errors: {
        generic: "Something went wrong. Please try again."
      }
    },

    info: {
      heading: "Our Contacts",

      visit: {
        title: "Visit Us",
        lines: [
          "M·ART Geneva Makeup Academy",
          "Rue Centrale 12, 1003 Geneva",
          "Switzerland"
        ]
      },

      call: {
        title: "Call Us",
        lines: [
          "Phone number: +41 21 555 48 72",
          "Monday to Friday 9:00 AM - 6:00 PM"
        ]
      },

      email: {
        title: "Email Us",
        lines: [
          "General enquiries: info@ecoledemaquillage.ch",
          "Admissions: admissions@ecoledemaquillage.ch"
        ]
      }
    },

    signature:
      "Cultivating excellence, revealing artistic signatures, preparing visionary futures."
  },

  fr: {
    hero: {
      meetingHeading: "DEMANDER UN RENDEZ-VOUS D'INFORMATION",
      meetingDescription:
        "Planifiez un rendez-vous d'information avec notre équipe pour découvrir l'académie, explorer nos programmes et faciliter votre parcours d'admission.",

      enquiryHeading: "DEMANDES & ADMISSIONS",
      enquiryDescription:
        "Que vous exploriez nos programmes ou prépariez votre candidature, nous sommes là pour vous accompagner. Partagez vos aspirations et notre équipe vous contactera personnellement."
    },

    form: {
      meetingDefaultRequest: "Demander un rendez-vous d'information",

      labels: {
        firstName: "Prénom*",
        lastName: "Nom*",
        email: "Email*",
        phone: "Numéro de téléphone*",
        request: "Votre demande concerne*",
        message: "Message*",
        consent:
          "J'accepte de recevoir des communications de M•ART Academy et j'autorise le traitement de mes données personnelles à cette fin."
      },

      placeholders: {
        requestSelect: "Sélectionnez une option"
      },

      requestOptions: [
        "Demander un rendez-vous d'information",
        "Détails du Programme",
        "Aide à la Candidature",
        "Demande Générale"
      ],

      buttons: {
        submitting: "Envoi en cours...",
        submitMeeting: "Demander un rendez-vous",
        submitEnquiry: "Envoyer votre Demande",
        submitAnother: "Envoyer une Autre Demande"
      },

      success: {
        meetingTitle: "Demande de rendez-vous reçue",
        meetingText:
          "Merci. Notre équipe vous contactera prochainement pour organiser votre rendez-vous d'information.",

        enquiryTitle: "Demande reçue",
        enquiryText:
          "Merci d'avoir partagé votre message. Notre équipe l'examinera attentivement et vous répondra prochainement."
      },

      errors: {
        generic: "Une erreur est survenue. Veuillez réessayer."
      }
    },

    info: {
      heading: "Nos Coordonnées",

      visit: {
        title: "Nous rendre visite",
        lines: [
          "M·ART Geneva Makeup Academy",
          "Rue Centrale 12, 1003 Genève",
          "Suisse"
        ]
      },

      call: {
        title: "Nous appeler",
        lines: [
          "Téléphone : +41 21 555 48 72",
          "Lundi au vendredi 09h00-18h00"
        ]
      },

      email: {
        title: "Nous écrire",
        lines: [
          "Demandes générales : info@ecoledemaquillage.ch",
          "Admissions : admissions@ecoledemaquillage.ch"
        ]
      }
    },

    signature:
      "Cultiver l'excellence, révéler les signatures artistiques, préparer des avenirs visionnaires."
  },

  es: {
    hero: {
      meetingHeading: "SOLICITAR UNA REUNIÓN INFORMATIVA",
      meetingDescription:
        "Programe una reunión informativa con nuestro equipo para descubrir la academia, explorar nuestros programas y facilitar su proceso de admisión.",

      enquiryHeading: "CONSULTAS Y ADMISIONES",
      enquiryDescription:
        "Si está explorando nuestros programas o preparando su solicitud, estamos aquí para acompañarle. Comparta sus aspiraciones y nos pondremos en contacto personalmente."
    },

    form: {
      meetingDefaultRequest: "Solicitar una reunión informativa",

      labels: {
        firstName: "Nombre*",
        lastName: "Apellido*",
        email: "Correo electrónico*",
        phone: "Número de teléfono*",
        request: "Su consulta se refiere a*",
        message: "Mensaje*",
        consent:
          "Acepto recibir comunicaciones de M•ART Academy y autorizo el tratamiento de mis datos personales para este fin."
      },

      placeholders: {
        requestSelect: "Seleccione una opción"
      },

      requestOptions: [
        "Solicitar una reunión informativa",
        "Detalles del Programa",
        "Ayuda con la Solicitud",
        "Consulta General"
      ],

      buttons: {
        submitting: "Enviando...",
        submitMeeting: "Solicitar reunión",
        submitEnquiry: "Enviar Consulta",
        submitAnother: "Enviar Otra Consulta"
      },

      success: {
        meetingTitle: "Solicitud de reunión recibida",
        meetingText:
          "Gracias. Nuestro equipo se pondrá en contacto con usted pronto para programar su reunión informativa.",

        enquiryTitle: "Consulta recibida",
        enquiryText:
          "Gracias por compartir su mensaje. Nuestro equipo lo revisará atentamente y le responderá próximamente."
      },

      errors: {
        generic: "Algo salió mal. Por favor, inténtelo de nuevo."
      }
    },

    info: {
      heading: "Nuestros Contactos",

      visit: {
        title: "Visítenos",
        lines: [
          "M·ART Geneva Makeup Academy",
          "Rue Centrale 12, 1003 Ginebra",
          "Suiza"
        ]
      },

      call: {
        title: "Llámenos",
        lines: [
          "Teléfono: +41 21 555 48 72",
          "Lunes a viernes 09:00-18:00"
        ]
      },

      email: {
        title: "Escríbanos",
        lines: [
          "Consultas generales: info@ecoledemaquillage.ch",
          "Admisiones: admissions@ecoledemaquillage.ch"
        ]
      }
    },

    signature:
      "Cultivando excelencia, revelando firmas artísticas, preparando futuros visionarios."
  },

  pt: {
    hero: {
      meetingHeading: "Solicitar uma Reunião Informativa",
      meetingDescription:
        "Agende uma consulta informativa personalizada com a nossa equipa para conhecer a academia, explorar os nossos programas transformadores e simplificar o seu processo de admissão.",

      enquiryHeading: "INFORMAÇÕES & ADMISSÕES",
      enquiryDescription:
        "Quer esteja a explorar os nossos programas ou a preparar a sua candidatura, estamos aqui para apoiar a sua jornada artística. Partilhe as suas aspirações e entraremos em contacto consigo pessoalmente."
    },

    form: {
      meetingDefaultRequest: "Solicitar uma Reunião Informativa",

      labels: {
        firstName: "Nome*",
        lastName: "Apelido*",
        email: "Email*",
        phone: "Número de telefone*",
        request: "O seu pedido refere-se a*",
        message: "Mensagem*",
        consent:
          "Concordo em receber comunicações da M•ART Academy e autorizo o tratamento dos meus dados pessoais para este fim."
      },

      placeholders: {
        requestSelect: "Selecione uma opção"
      },

      requestOptions: [
        "Solicitar uma Reunião Informativa",
        "Detalhes do Programa",
        "Apoio à Candidatura",
        "Pedido Geral"
      ],

      buttons: {
        submitting: "A enviar...",
        submitMeeting: "Solicitar Consulta",
        submitEnquiry: "Enviar Pedido",
        submitAnother: "Enviar Outro Pedido"
      },

      success: {
        meetingTitle: "Pedido de Consulta Recebido",
        meetingText:
          "Obrigado. A nossa equipa entrará em contacto consigo em breve para agendar a sua consulta personalizada.",

        enquiryTitle: "Pedido Recebido",
        enquiryText:
          "Obrigado por partilhar as suas aspirações. A nossa equipa irá analisar a sua mensagem e responder com atenção."
      },

      errors: {
        generic: "Ocorreu um erro. Por favor, tente novamente."
      }
    },

    info: {
      heading: "Os nossos Contactos",

      visit: {
        title: "Visite-nos",
        lines: [
          "M·ART Geneva Makeup Academy",
          "Rue Centrale 12, 1003 Genebra",
          "Suíça"
        ]
      },

      call: {
        title: "Ligue-nos",
        lines: [
          "Telefone: +41 21 555 48 72",
          "Segunda a sexta-feira 09:00-18:00"
        ]
      },

      email: {
        title: "Envie-nos um Email",
        lines: [
          "Informações gerais: info@ecoledemaquillage.ch",
          "Admissões: admissions@ecoledemaquillage.ch"
        ]
      }
    },

    signature:
      "Cultivar excelência, revelar assinaturas artísticas, preparar futuros visionários."
  }
}