import { Project, ExperienceItem, SpecializationCard } from "./types";

export const SPECIALIZATIONS: SpecializationCard[] = [
  {
    id: "curricular",
    title: "Diseño Curricular",
    icon: "menu_book",
    description: "Creación de programas basados en Aprendizaje Basado en Proyectos (ABP) y dinámicas de gamificación para potenciar la motivación, participación y compromiso autónomo del estudiante.",
    tags: ["ABP", "Gamificación", "Metodologías Activas"]
  },
  {
    id: "tecnoeducacion",
    title: "Tecnoeducación",
    icon: "devices",
    description: "Gestión avanzada de plataformas LMS e integración de recursos multimedia interactivos que facilitan la interactividad, el autoaprendizaje y la analítica de progreso académico.",
    tags: ["LMS", "Multimedia", "E-Learning"]
  },
  {
    id: "inclusion",
    title: "Inclusión & Equidad",
    icon: "diversity_3",
    description: "Estructuración de estrategias adaptables para aulas diversas aplicando las pautas del Diseño Universal para el Aprendizaje (DUA), asegurando acceso equitativo y de calidad.",
    tags: ["DUA", "Adaptaciones", "Equidad Educativa"]
  },
  {
    id: "evaluacion",
    title: "Evaluación Formativa",
    icon: "assignment_turned_in",
    description: "Implementación de marcos evaluativos dinámicos enfocados en la retroalimentación cualitativa constante, rúbricas por competencias y portafolios digitales.",
    tags: ["Feedback", "Rúbricas", "Progreso Real"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "aula-inmersiva",
    title: "Diseño de Aula Inmersiva",
    category: "Espacios de Aprendizaje",
    description: "Rediseño arquitectónico y tecnológico de aulas físicas para crear entornos interactivos y flexibles centrados en el estudiante.",
    longDescription: "Este proyecto revolucionó la concepción tradicional del aula escolar. Se sustituyeron los pupitres alineados por mobiliario modular y configurable, permitiendo alternar instantáneamente entre trabajo individual, debate grupal y experimentación. Además, se integraron pantallas táctiles interactivas y zonas de realidad virtual, creando un ambiente inmersivo donde el espacio físico se convierte en un agente pedagógico activo que fomenta la colaboración y el pensamiento crítico.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdnTfB4oY4dtmEem4AwmTMNOVnBnGoa9epe2x-DjJZb_PfnAlvBFtIp1YBQGvhdOIoFAAxIHUhA1wm6IFV2skGhwG7vR5oG7Kz97iXPpxEDS2hHjIG4YlJXX4NP9j7FCRipb0Wfg0fkp9To45vbajy3FLf9XIHNw4pZOB2ko5x9WyaAvWcecSYMHcYa7gV7t_T9eLa2usBomKEYgESFddOMNXTBMA5EA04BgqwVqwCkVddQO-0JBla",
    methodologies: ["Mobiliario Flexible", "Tecnología Ubicua", "Aprendizaje Cooperativo"],
    role: "Líder de Diseño de Espacios de Aprendizaje e Integración Tecnológica",
    outcomes: [
      "Incremento del 34% en la participación activa de los alumnos durante las sesiones de debate.",
      "Reducción del 20% en tiempos muertos de transición entre actividades curriculares.",
      "Acreditación de diseño innovador otorgado por la Asociación de Espacios de Aprendizaje Modernos."
    ],
    impactMetric: "+34% de Participación Activa"
  },
  {
    id: "recursos-digitales",
    title: "Recursos Digitales Interactivos",
    category: "Tecnología Educativa",
    description: "Creación de una suite de recursos de aprendizaje gamificados en tablets para educación primaria y secundaria.",
    longDescription: "Suite integral de herramientas y aplicaciones interactivas diseñadas desde cero con un enfoque de gamificación pedagógica. El sistema permite a los estudiantes explorar conceptos complejos mediante simulaciones interactivas, desafíos de rol y mapas interactivos que se adaptan automáticamente al nivel del estudiante mediante algoritmos de aprendizaje adaptativo. Cuenta con un panel del profesor que analiza el progreso del aula en tiempo real.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1DSVQzS4wkkXIiiOEd6ek8sFiI56_kPLhQyGCnQIUYYyJkhhQ4EnNmT_mpchoefpcHPiLuSrU7o1NAc56FLMm8tHrTm1nMEajVWo4sHbyiFChIuyNG6L70p8-pDv-lJAOoMnv-gYlCscrY4LFSzJyRT53SIPXbZOD0r-cZEQW6ISAuLZAo62TfssBabco25jeH_4GGeGRE5fAD8Vo_0ocfBxcVUCRT_xhRoctPHW0WFGMtEChSNqD",
    methodologies: ["Diseño Instruccional Gamificado", "UX/UI Infantil", "Analíticas en Tiempo Real"],
    role: "Directora de Producto Pedagógico y Especialista en Gamificación",
    outcomes: [
      "Más de 15,000 licencias activadas en 12 colegios piloto durante el ciclo académico.",
      "Aumento del 42% en la retención a largo plazo de contenidos de ciencias naturales.",
      "Feedback sobresaliente (4.8/5) en la encuesta de satisfacción docente respecto al panel analítico."
    ],
    impactMetric: "4.8/5 Satisfacción Docente"
  },
  {
    id: "ensayo-inclusion",
    title: "Ensayo sobre Inclusión Integral",
    category: "Investigación",
    description: "Análisis y marco de trabajo propuesto para la integración equitativa en entornos escolares diversos aplicando DUA.",
    longDescription: "Un documento de investigación de vanguardia que detalla la reestructuración metodológica de los centros educativos públicos para una integración efectiva. En lugar de adaptar el contenido solo para estudiantes con necesidades especiales de forma reactiva, este ensayo propone un modelo proactivo basado en el Diseño Universal para el Aprendizaje (DUA) donde el currículo es flexible por naturaleza y ofrece múltiples formas de compromiso, representación y expresión para todos los estudiantes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvT60OKajawTdtLzus915BlQwjBNKJEwvpt0Fzv_CLCid2k-Ez4b0Kisi0eMexONMPmwAvh_iTpvXQC0is9fAy42Jat7h4ul4B--Hj1HXooONF8X0sQXTTyg7ZMBpPld4_CuTgdhpDIpj_diKPx9y9ZNuYYJFtJt1NblFSMvJwLwIp8Hpcp3I0CpRmBabKhPT0o5xgKtp_bjw8zBVcnTsZApIrUCNhWC-c6bpg5Vt0XCgwJsaFJpFH",
    methodologies: ["Diseño Universal para el Aprendizaje (DUA)", "Investigación Cualitativa", "Políticas Educativas"],
    role: "Investigadora Principal y Autora Pedagógica",
    outcomes: [
      "Publicado en la Revista Internacional de Educación Inclusiva y Tecnología Social.",
      "Utilizado como base para la guía de adaptaciones pedagógicas del Ministerio de Educación local.",
      "Presentado en el Congreso Internacional de Innovación Docente y Equidad en Madrid."
    ],
    impactMetric: "Publicado en Revista de Impacto"
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "exp1",
    year: "2024 - Presente",
    role: "Coordinadora de Innovación Pedagógica",
    institution: "Centro de Excelencia y Tecnología Educativa",
    description: "Lidero el diseño e implementación de programas de estudio con enfoque STEAM, evaluando e incorporando tecnologías de vanguardia (IA educativa, realidad aumentada y entornos inmersivos) en el currículo formativo de educación básica y media superior.",
    skills: ["Gestión del Cambio", "IA Pedagógica", "Formación Docente", "Liderazgo Escolar"]
  },
  {
    id: "exp2",
    year: "2022 - 2024",
    role: "Especialista en Diseño Instruccional y LMS",
    institution: "Universidad Digital Abierta",
    description: "Diseñé entornos virtuales de aprendizaje dinámicos enfocados en la educación híbrida. Creé suites de recursos interactivos para más de 8,000 estudiantes y estandaricé plantillas educativas con metodologías activas (ABP y gamificación).",
    skills: ["Diseño de E-Learning", "LMS Moodle/Canvas", "Multimedia Educativa", "Gamificación"]
  },
  {
    id: "exp3",
    year: "2020 - 2022",
    role: "Docente y Mentora de Aula de Integración",
    institution: "Colegio Internacional de la Paz",
    description: "Aplicación diaria de estrategias DUA y gamificación en aulas integradas. Fomenté el aprendizaje basado en proyectos colaborativos y diseñé planes de aprendizaje personalizados logrando un ambiente escolar con 100% de retención estudiantil.",
    skills: ["Metodologías Activas", "Diseño Universal para el Aprendizaje (DUA)", "Educación Emocional"]
  },
  {
    id: "exp4",
    year: "2018 - 2020",
    role: "Asistente de Investigación y Diseño Curricular",
    institution: "Facultad de Educación y Pedagogía Contemporánea",
    description: "Investigué el impacto a largo plazo de las tecnologías lúdicas de aprendizaje y desarrollé marcos teóricos e instrumentación metodológica para apoyar el acceso equitativo a la educación tecnológica en comunidades desfavorecidas.",
    skills: ["Investigación Educativa", "Rúbricas de Evaluación", "Análisis Curricular"]
  }
];

export const PEDAGOGICAL_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "¿Cuál es tu enfoque prioritario al planificar una nueva unidad de aprendizaje?",
    options: [
      { text: "Diseñar un reto o proyecto real que resuelva un problema tangible (ABP).", type: "curricular" },
      { text: "Identificar herramientas digitales o plataformas LMS interactivas que usarán.", type: "tecnoeducacion" },
      { text: "Asegurar que existan múltiples opciones y formatos para que todo estudiante participe (DUA).", type: "inclusion" },
      { text: "Estructurar la retroalimentación constante y procesos de co-evaluación formativa.", type: "evaluacion" }
    ]
  },
  {
    id: 2,
    question: "Si notas que varios estudiantes muestran desinterés durante una sesión, ¿qué medida tomas?",
    options: [
      { text: "Introduzco elementos lúdicos, recompensas o un juego educativo sorpresa.", type: "curricular" },
      { text: "Utilizo una herramienta interactiva digital como cuestionarios gamificados o simuladores.", type: "tecnoeducacion" },
      { text: "Reviso si el canal de representación no es adecuado y ofrezco alternativas visuales o prácticas.", type: "inclusion" },
      { text: "Abro un espacio de autoevaluación grupal para que den feedback sobre el proceso actual.", type: "evaluacion" }
    ]
  },
  {
    id: 3,
    question: "¿Qué tipo de evidencia de aprendizaje consideras más valiosa?",
    options: [
      { text: "Un artefacto o producto final desarrollado de forma colectiva que aporte valor real.", type: "curricular" },
      { text: "La interacción fluida y resultados de progreso registrados en nuestra plataforma digital.", type: "tecnoeducacion" },
      { text: "Un portafolio personalizado que demuestre el progreso individual desde el punto de partida de cada estudiante.", type: "inclusion" },
      { text: "Un proceso detallado de autocrítica y co-evaluación con base en rúbricas.", type: "evaluacion" }
    ]
  },
  {
    id: 4,
    question: "Para ti, ¿cuál es el rol principal de la tecnología en el aula del siglo XXI?",
    options: [
      { text: "Facilitar el aprendizaje autónomo y dinámicas creativas de gamificación.", type: "curricular" },
      { text: "Automatizar flujos de datos instructivos y potenciar la interactividad multimedia.", type: "tecnoeducacion" },
      { text: "Habilitar canales accesibles y personalizados para romper barreras de aprendizaje.", type: "inclusion" },
      { text: "Proporcionar datos rápidos sobre el nivel de comprensión para guiar la retroalimentación.", type: "evaluacion" }
    ]
  }
];

export const PEDAGOGICAL_PROFILES = {
  curricular: {
    title: "Diseñador Curricular e Innovador",
    description: "Te apasiona estructurar programas que empoderen al estudiante. Eres partidario del Aprendizaje Basado en Proyectos (ABP) y ves en la gamificación una forma excelente de crear compromiso constante. Buscas que cada contenido teórico tenga una repercusión directa en un desafío práctico.",
    recommendation: "Continúa expandiendo tus habilidades de gamificación integrando dinámicas narrativas complejas e implementando evaluación formativa cruzada.",
    icon: "menu_book"
  },
  tecnoeducacion: {
    title: "Facilitador Tecnoeducativo",
    description: "Ves la tecnología como un pilar fundamental para potenciar la educación. Te entusiasma el uso de plataformas LMS, la creación de materiales interactivos y el análisis de datos educativos. Eres un pionero digital que busca optimizar la interactividad docente-alumno.",
    recommendation: "Intenta profundizar en la inteligencia artificial generativa aplicada a la personalización de recursos educativos para optimizar el tiempo de preparación docente.",
    icon: "devices"
  },
  inclusion: {
    title: "Educador Inclusivo y Humanista (DUA)",
    description: "Pones la empatía y la equidad en el centro de tu práctica. Entiendes que cada mente es única y buscas estructurar ambientes de aprendizaje flexibles aplicando las pautas DUA, eliminando barreras de acceso físicas o cognitivas para cada uno de tus alumnos.",
    recommendation: "Comparte tus guías de adaptación con tus colegas de centro para expandir la cultura de inclusión colaborativa más allá de tu propia aula.",
    icon: "diversity_3"
  },
  evaluacion: {
    title: "Evaluador Formativo y Mentor",
    description: "Para ti, el camino es más valioso que el destino final. Consideras que el feedback constructivo y continuo tiene un poder transformador superior a una nota numérica de examen. Promueves la autocrítica y el autoaprendizaje guiado.",
    recommendation: "Integra herramientas digitales portátiles de microevaluación instantánea para agilizar la recopilación de evidencia pedagógica diaria.",
    icon: "assignment_turned_in"
  }
};
