export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO (YYYY-MM-DD)
  readMin: number;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "que-hacer-despido-injustificado",
    title: "¿Te despidieron sin justificación? Qué hacer paso a paso",
    excerpt:
      "Si te corrieron sin causa, la ley te protege. Esto es lo que te corresponde, el plazo que tienes para reclamar y los errores que debes evitar.",
    category: "Despidos",
    date: "2026-10-20",
    readMin: 6,
    content: [
      {
        type: "p",
        text: "Un despido injustificado ocurre cuando tu patrón termina la relación laboral sin una causa de las que marca la Ley Federal del Trabajo. Si es tu caso, tienes derechos claros y vale la pena conocerlos antes de firmar o aceptar cualquier oferta.",
      },
      { type: "h2", text: "Tienes dos caminos" },
      {
        type: "p",
        text: "Ante un despido injustificado, en términos generales puedes elegir entre dos opciones: que te reinstalen en tu puesto en las mismas condiciones, o recibir una indemnización por la separación. Cuál conviene depende de tu situación, y es justo lo que un abogado te ayuda a decidir.",
      },
      { type: "h2", text: "Qué te corresponde" },
      {
        type: "p",
        text: "Dependiendo del caso, una indemnización por despido injustificado suele integrarse por conceptos como:",
      },
      {
        type: "ul",
        items: [
          "Indemnización constitucional de tres meses de salario.",
          "Prima de antigüedad (12 días por año trabajado, con tope de ley).",
          "Salarios caídos generados desde el despido, conforme a la ley vigente.",
          "Partes proporcionales de aguinaldo, vacaciones y prima vacacional.",
          "En ciertos supuestos, 20 días de salario por cada año trabajado.",
        ],
      },
      { type: "h2", text: "Ojo con el plazo" },
      {
        type: "p",
        text: "El tiempo corre en tu contra: la acción por despido suele prescribir en un plazo corto a partir del día siguiente a la separación. Por eso lo más importante es asesorarte cuanto antes para no perder tu derecho a reclamar.",
      },
      { type: "h2", text: "Qué hacer (y qué no)" },
      {
        type: "ul",
        items: [
          "No firmes renuncias ni convenios bajo presión sin revisarlos con un abogado.",
          "Reúne pruebas: contrato, recibos de nómina, mensajes, credencial, testigos.",
          "Guarda cualquier documento que acredite tu antigüedad y tu salario real.",
          "Busca asesoría legal de inmediato para valorar tu caso sin costo.",
        ],
      },
      {
        type: "p",
        text: "Cada caso es distinto. Si quieres saber cuánto podrías recibir, usa nuestra calculadora de finiquito y agenda una revisión gratuita con un abogado.",
      },
    ],
  },
  {
    slug: "como-se-calcula-finiquito-liquidacion",
    title: "Finiquito y liquidación: cuánto te corresponde y cómo se calcula",
    excerpt:
      "¿Es lo mismo finiquito que liquidación? No. Te explicamos qué incluye cada uno y cómo estimar lo que deberían pagarte.",
    category: "Finiquito",
    date: "2026-10-10",
    readMin: 5,
    content: [
      {
        type: "p",
        text: "Es muy común confundir el finiquito con la liquidación, pero son cosas distintas. Entender la diferencia te ayuda a saber si la oferta que te hacen es justa.",
      },
      { type: "h2", text: "¿Qué es el finiquito?" },
      {
        type: "p",
        text: "El finiquito es el pago de lo que ya ganaste y no te han pagado al terminar la relación laboral, sin importar el motivo de la salida (incluso si renuncias). En términos generales incluye:",
      },
      {
        type: "ul",
        items: [
          "Días trabajados y no pagados del último periodo.",
          "Aguinaldo proporcional al tiempo trabajado en el año.",
          "Vacaciones pendientes y prima vacacional.",
        ],
      },
      { type: "h2", text: "¿Qué es la liquidación?" },
      {
        type: "p",
        text: "La liquidación aplica cuando la salida no fue tu decisión, como en un despido injustificado. Incluye el finiquito más una indemnización por la separación (por ejemplo, la indemnización constitucional, la prima de antigüedad y, según el caso, otros conceptos).",
      },
      { type: "h2", text: "Cómo estimar el monto" },
      {
        type: "p",
        text: "El punto de partida es tu salario diario (tu salario mensual entre 30) y tu antigüedad. Con esos datos se calculan los conceptos proporcionales y, si corresponde, la indemnización. Nuestra calculadora te da un estimado en segundos.",
      },
      {
        type: "p",
        text: "Importante: el cálculo exacto depende de los detalles de tu contrato y de tu caso. Antes de aceptar una oferta, conviene que un abogado revise los números: muchas veces la empresa ofrece menos de lo que realmente corresponde.",
      },
    ],
  },
  {
    slug: "conciliacion-laboral-como-funciona",
    title: "Conciliación laboral: cómo funciona antes de demandar",
    excerpt:
      "Desde la reforma laboral, antes de ir a juicio hay que pasar por una instancia de conciliación. Te explicamos cómo es el proceso.",
    category: "Conciliación",
    date: "2026-09-28",
    readMin: 5,
    content: [
      {
        type: "p",
        text: "Con la reforma al sistema de justicia laboral, antes de iniciar un juicio la mayoría de los conflictos deben pasar primero por una etapa de conciliación. El objetivo es que trabajador y empresa lleguen a un acuerdo de forma más rápida.",
      },
      { type: "h2", text: "¿Dónde se lleva a cabo?" },
      {
        type: "p",
        text: "La conciliación se solicita ante los Centros de Conciliación (federal o local, según el caso). Ahí se cita a ambas partes a una audiencia para intentar un arreglo antes de acudir a los tribunales laborales.",
      },
      { type: "h2", text: "Cómo es el proceso, a grandes rasgos" },
      {
        type: "ul",
        items: [
          "Se presenta la solicitud de conciliación ante el Centro correspondiente.",
          "Se cita a una audiencia a la que acuden trabajador y empresa.",
          "Un conciliador facilita el diálogo para buscar un acuerdo justo.",
          "Si hay acuerdo, se firma un convenio con valor legal.",
          "Si no hay acuerdo, se emite una constancia que te permite demandar ante el tribunal.",
        ],
      },
      { type: "h2", text: "¿Conviene conciliar?" },
      {
        type: "p",
        text: "La conciliación puede ahorrarte meses de proceso, pero solo conviene aceptar un acuerdo cuando el monto es justo. Acudir acompañado de un abogado marca la diferencia: evita que firmes por menos de lo que te corresponde y te prepara para el juicio si no hay un buen arreglo.",
      },
      {
        type: "p",
        text: "En Cuatecontzi te acompañamos en toda la etapa de conciliación y, de ser necesario, hasta el juicio. La primera valoración de tu caso es gratuita.",
      },
    ],
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
