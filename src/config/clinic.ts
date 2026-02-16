export const clinic = {
  name: "Clínica de Fisioterapia Raquel",
  logo: "/images/logo.png",
  tagline: "Tu recuperación en manos expertas en Alagón del Río",
  description: "Clínica de Fisioterapia Raquel es tu centro de confianza en Alagón del Río, con 5 estrellas en Google y 20 reseñas que avalan nuestra profesionalidad. Combinamos aparatología avanzada con técnicas manuales, masaje descontracturante, osteopatía y rehabilitación personalizada. Nuestras instalaciones modernas y atención cercana hacen que pacientes vengan desde Plasencia buscando la mejor recuperación.",
  colors: {
    primary: "#2563EB",
    secondary: "#1E293B",
    accent: "#06B6D4",
    neutral: "#F8FAFC"
  },
  phone: "645 03 12 21",
  whatsapp: "+34645031221",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "C. Nervión, 7, 10690 Alagón del Río, Cáceres, España",
    city: "Alagón del Río",
    province: "",
    postalCode: "10690",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=17077756189654298659&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Cl%C3%ADnica%20de%20Fisioterapia%20Raquel%20%4039.9755%2C-6.31726&z=16&output=embed",
  coordinates: {
    lat: 39.9755,
    lng: -6.31726
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "9:00–21:30"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 20,
    url: "https://maps.google.com/?cid=17077756189654298659&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "Abraham Gaviro",
        rating: 5,
        text: "Vengo de Plasencia a esta clínica por recomendación, sin duda, Mi FAVORITA\n\nMuy buenas profesionales, buena atención rápida para coger cita\n\nBuenas instalaciones\n\nUsan aparatología para un mejor tratamiento\nAcompañado si es el caso de masaje descontracturante manual\n\nY también entienden de osteopatía\n\nTienen muy buenos conocimientos\n\nAdemás me pareció ver aparatos de gimnasia para tratar una rehabilitación\n\nVolveré sin duda",
        date: "Hace un año"
      },
      {
        author: "Veronica Cano Barco",
        rating: 5,
        text: "Hola soy David el de las galletas la experiencia es genial te ponen aire acondicionado calor en los pies calambres muy satisfactorios (no duelen nada) y Ami en mi caso me han dado galletas 😻 también eh salido como nuevo si se pudieran poner más estrellas las pondría pero es una experiencia genial y los empleados son majosimos",
        date: "Hace un año"
      },
      {
        author: "Taxi Sara Martín",
        rating: 5,
        text: "Me recomendó una amiga a ir, y tengo clarísimo que  volveré. Las chicas son muy profesionales, muy amables y simpáticas . En una hora me han hecho cantidad de cosas, y he salido como nueva. He salido muy satisfecha, lo recomiendo totalmente.",
        date: "Hace 5 años"
      },
      {
        author: "Luisma RA",
        rating: 5,
        text: "Profesionalidad, simpatía, empatía,... Si tenéis cualquier problema muscular esta clínica es una de las más cualificadas de toda Extremadura sin duda alguna y a unos precios más que razonables. Eso sí, para estar bien hay que sufrir. Un 10.",
        date: "Hace 4 años"
      },
      {
        author: "Luis Alberto Martin Neria",
        rating: 4,
        text: "Me fue genial en solo 3 sesiones empecé andar bien si no es x ellos lo de la mutua me dejan cojo, son muy amables y simpáticos y unos grandes profesionales",
        date: "Hace un año"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas realizadas por profesionales altamente cualificadas. Aplicamos masaje descontracturante y manipulaciones para aliviar el dolor, eliminar contracturas y mejorar la movilidad. Tratamiento personalizado que se adapta a las necesidades específicas de cada paciente.",
      benefits: [
        "Alivio inmediato del dolor muscular",
        "Mejora de la movilidad articular",
        "Tratamiento personalizado y efectivo"
      ],
      icon: "Hand"
    },
    {
      id: "osteopatia",
      name: "Osteopatía",
      description: "Nuestro equipo cuenta con amplios conocimientos en osteopatía para tratar disfunciones del sistema musculoesquelético. Abordamos la causa raíz de tu problema mediante técnicas osteopáticas que restauran el equilibrio corporal y mejoran tu calidad de vida.",
      benefits: [
        "Tratamiento integral del cuerpo",
        "Solución a problemas crónicos",
        "Recuperación duradera y efectiva"
      ],
      icon: "Activity"
    },
    {
      id: "electroterapia",
      name: "Electroterapia y Aparatología",
      description: "Utilizamos aparatología avanzada para potenciar tu recuperación. Aplicamos electroterapia con corrientes terapéuticas muy satisfactorias y nada dolorosas, combinadas con calor terapéutico. Tecnología de vanguardia que acelera los resultados del tratamiento manual.",
      benefits: [
        "Recuperación más rápida y efectiva",
        "Tratamientos indoloros y confortables",
        "Tecnología de última generación"
      ],
      icon: "Zap"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación",
      description: "Programas de rehabilitación completos con aparatos de gimnasia específicos para tu recuperación funcional. Diseñamos planes personalizados que te permiten recuperar la movilidad y fuerza perdidas. En pocas sesiones conseguimos resultados visibles.",
      benefits: [
        "Recuperación funcional completa",
        "Ejercicios adaptados a tu evolución",
        "Resultados en pocas sesiones"
      ],
      icon: "Target"
    },
    {
      id: "lesiones-musculares",
      name: "Tratamiento de Lesiones Musculares",
      description: "Especialistas en resolver problemas musculares de cualquier tipo. Combinamos técnicas manuales con aparatología para tratar contracturas, sobrecargas y lesiones. Nuestros pacientes salen como nuevos tras nuestros tratamientos integrales.",
      benefits: [
        "Solución efectiva a contracturas",
        "Tratamiento completo en cada sesión",
        "Alivio inmediato del dolor"
      ],
      icon: "Activity"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Recuperación y prevención de lesiones deportivas con técnicas avanzadas. Tratamos desde pequeñas molestias hasta lesiones complejas, permitiéndote volver a tu actividad deportiva en el menor tiempo posible y con total seguridad.",
      benefits: [
        "Vuelta rápida al deporte",
        "Prevención de recaídas",
        "Optimización del rendimiento"
      ],
      icon: "Dumbbell"
    },
    {
      id: "masaje-descontracturante",
      name: "Masaje Descontracturante",
      description: "Masaje terapéutico manual especializado para eliminar contracturas y tensiones musculares. Acompañamos los tratamientos con aparatología cuando es necesario para potenciar los resultados. Sales de cada sesión notando una mejora significativa.",
      benefits: [
        "Eliminación de contracturas profundas",
        "Relajación muscular inmediata",
        "Bienestar general del cuerpo"
      ],
      icon: "Hand"
    },
    {
      id: "tratamiento-integral",
      name: "Tratamiento Integral",
      description: "En cada sesión realizamos múltiples técnicas combinadas para maximizar tu recuperación. No nos limitamos a una sola terapia: aplicamos todo lo necesario en una hora para que salgas como nuevo. Atención completa y personalizada.",
      benefits: [
        "Múltiples técnicas en una sesión",
        "Máxima eficacia en cada visita",
        "Atención personalizada completa"
      ],
      icon: "Heart"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotras",
      description: "Llámanos al 645 03 12 21 o escríbenos por WhatsApp. Te ofrecemos cita rápida porque sabemos que cuando hay dolor, cada día cuenta. Nuestro equipo te atenderá con la amabilidad que nos caracteriza."
    },
    {
      step: 2,
      title: "Valoración Profesional",
      description: "En tu primera visita evaluamos tu estado físico de forma exhaustiva. Analizamos tu problema muscular o articular y diseñamos un plan de tratamiento personalizado combinando las técnicas más adecuadas para tu caso concreto."
    },
    {
      step: 3,
      title: "Tratamiento Completo",
      description: "Aplicamos múltiples técnicas en cada sesión: aparatología, masaje descontracturante, osteopatía y rehabilitación según necesites. En una hora te hacemos cantidad de cosas para que salgas como nuevo. Tratamientos efectivos pero siempre confortables."
    },
    {
      step: 4,
      title: "Tu Recuperación Total",
      description: "Seguimiento continuo de tu evolución hasta conseguir tu recuperación completa. Muchos pacientes notan mejora desde las primeras sesiones. Te acompañamos en todo el proceso hasta que recuperes tu bienestar y movilidad al 100%."
    }
  ],
  whyUs: [
    {
      title: "5 Estrellas en Google",
      description: "20 reseñas reales de pacientes satisfechos avalan nuestra profesionalidad. Somos la clínica de fisioterapia mejor valorada de la zona, con pacientes que vienen incluso desde Plasencia por recomendación. La confianza de nuestros pacientes es nuestro mejor aval.",
      icon: "Award"
    },
    {
      title: "Tecnología y Experiencia",
      description: "Combinamos aparatología avanzada con amplios conocimientos en técnicas manuales y osteopatía. No nos limitamos a una sola técnica: en cada sesión aplicamos todo lo necesario para tu recuperación. Instalaciones modernas con equipamiento de última generación.",
      icon: "Zap"
    },
    {
      title: "Equipo Profesional y Cercano",
      description: "Profesionales altamente cualificadas reconocidas como una de las más preparadas de Extremadura. Pero además, destacamos por nuestra amabilidad, simpatía y empatía. Tratamos a cada paciente con el cariño y la atención que merece, creando un ambiente de confianza.",
      icon: "Users"
    },
    {
      title: "Resultados Visibles",
      description: "Nuestros pacientes salen como nuevos tras nuestros tratamientos. Muchos notan mejora desde las primeras sesiones, algunos se recuperan completamente en solo 3 visitas. Aplicamos tratamientos integrales efectivos que combinan múltiples técnicas para maximizar tu recuperación.",
      icon: "TrendingUp"
    }
  ],
  team: [
    {
      name: "Equipo de Clínica de Fisioterapia Raquel",
      role: "Fisioterapeutas Colegiados",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Clínica de Fisioterapia Raquel nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Clínica de Fisioterapia Raquel - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Clínica de Fisioterapia Raquel - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Clínica de Fisioterapia Raquel - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Clínica de Fisioterapia Raquel - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Clínica de Fisioterapia Raquel - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Clínica de Fisioterapia Raquel - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "Clínica de Fisioterapia Raquel - Imagen 7"
    },
    {
      src: "/images/gallery/8.webp",
      alt: "Clínica de Fisioterapia Raquel - Imagen 8"
    }
  ],
  faq: [
    {
      question: "¿Qué hace diferente a Clínica de Fisioterapia Raquel?",
      answer: "Combinamos aparatología avanzada con técnicas manuales especializadas, osteopatía y rehabilitación personalizada. Nuestras 20 reseñas con 5 estrellas en Google avalan nuestra profesionalidad. Además, en cada sesión aplicamos múltiples técnicas para maximizar tu recuperación, no nos limitamos a un solo tratamiento. Pacientes vienen incluso desde Plasencia por recomendación."
    },
    {
      question: "¿Cuántas sesiones necesitaré para recuperarme?",
      answer: "Depende de cada caso, pero muchos de nuestros pacientes notan mejora significativa desde la primera sesión. Algunos casos se resuelven en 3 sesiones, mientras que problemas crónicos pueden requerir más tiempo. En la valoración inicial te daremos una estimación personalizada según tu situación específica y evolución."
    },
    {
      question: "¿Los tratamientos con aparatología son dolorosos?",
      answer: "No, nuestros tratamientos con electroterapia son muy satisfactorios y no duelen nada. Aplicamos corrientes terapéuticas, calor y otras técnicas que resultan confortables. Como dicen nuestros pacientes, la experiencia es genial y sales como nuevo. Siempre adaptamos la intensidad a tu tolerancia."
    },
    {
      question: "¿Qué problemas musculares tratáis en la clínica?",
      answer: "Somos especialistas en todo tipo de problemas musculares: contracturas, sobrecargas, lesiones deportivas, dolores crónicos, problemas articulares y rehabilitación post-lesión. Utilizamos técnicas de osteopatía, masaje descontracturante, aparatología y ejercicios de rehabilitación. Estamos entre las clínicas más cualificadas de Extremadura para problemas musculares."
    },
    {
      question: "¿Cómo puedo pedir cita en Clínica de Fisioterapia Raquel?",
      answer: "Pedir cita es muy fácil: llámanos al 645 03 12 21 o escríbenos por WhatsApp. Ofrecemos atención rápida para coger cita porque sabemos que cuando hay molestias es importante actuar pronto. Nuestro equipo te atenderá con amabilidad y te asignará el mejor horario disponible."
    },
    {
      question: "¿Qué incluye una sesión de tratamiento?",
      answer: "En Clínica de Fisioterapia Raquel no escatimamos en cada sesión. En una hora aplicamos múltiples técnicas según necesites: valoración, aparatología, electroterapia, masaje descontracturante manual, técnicas de osteopatía y ejercicios de rehabilitación si procede. Hacemos todo lo necesario para que salgas satisfecho y notes mejoría real."
    },
    {
      question: "¿Tenéis experiencia con casos complicados?",
      answer: "Sí, tratamos desde molestias leves hasta casos complicados que otras clínicas no han resuelto. Tenemos muy buenos conocimientos en fisioterapia avanzada y osteopatía. Pacientes que venían de mutuas sin mejoría han conseguido recuperarse con nosotras. Somos profesionales altamente cualificadas con amplia experiencia."
    },
    {
      question: "¿Los precios son accesibles?",
      answer: "Sí, ofrecemos precios más que razonables para la calidad y cantidad de técnicas que aplicamos en cada sesión. Nuestros pacientes valoran mucho la relación calidad-precio porque en una hora reciben un tratamiento muy completo. En la primera consulta te informaremos del coste según tu plan de tratamiento personalizado."
    }
  ],
  seo: {
    titleTemplate: "%s | Clínica de Fisioterapia Raquel",
    defaultTitle: "Clínica de Fisioterapia Raquel | Alagón del Río",
    defaultDescription: "Fisioterapia en Alagón del Río con 5★ en Google. Aparatología avanzada, osteopatía, masaje y rehabilitación. Profesionales expertas. Cita rápida: 645 03 12 21",
    keywords: [
      "fisioterapia Alagón del Río",
      "Clínica de Fisioterapia Raquel",
      "fisioterapeuta Alagón del Río",
      "osteopatía Alagón del Río",
      "rehabilitación Alagón del Río",
      "masaje descontracturante Alagón del Río",
      "electroterapia Alagón del Río",
      "lesiones musculares Alagón del Río",
      "fisioterapia deportiva Alagón del Río",
      "clínica fisioterapia Extremadura",
      "tratamiento contracturas Alagón del Río",
      "aparatología fisioterapia Alagón del Río"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Clínica de Fisioterapia Raquel",
    cif: "",
    registeredAddress: "C. Nervión, 7, 10690 Alagón del Río, Cáceres, España, Alagón del Río"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Alagón del Río"
  ],
  heroDescription: "En Clínica de Fisioterapia Raquel combinamos la tecnología más avanzada con el trato humano que mereces. Utilizamos aparatología especializada, electroterapia, técnicas manuales y osteopatía para conseguir tu recuperación completa. Con 5 estrellas en Google, somos la clínica de referencia en Alagón del Río.",
  specialty: "Fisioterapia Avanzada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar?",
  ctaDescription: "Solicita tu cita en Clínica de Fisioterapia Raquel y descubre por qué nuestros pacientes nos recomiendan. Primera valoración personalizada para diseñar tu plan de recuperación.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
