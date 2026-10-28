import LegalDoc, { type LegalSection } from "../components/LegalDoc";

const sections: LegalSection[] = [
  {
    heading: "¿Qué son las cookies?",
    paragraphs: [
      "Las cookies son pequeños archivos que se almacenan en su dispositivo cuando visita un sitio web. Permiten recordar preferencias y recopilar información de uso para mejorar la experiencia de navegación.",
    ],
  },
  {
    heading: "Tipos de cookies que utilizamos",
    bullets: [
      "Esenciales: necesarias para el funcionamiento del sitio, como recordar el tema claro u oscuro.",
      "Analíticas: ayudan a entender de forma agregada cómo se usa el sitio.",
      "Funcionales: recuerdan preferencias para personalizar la experiencia.",
    ],
  },
  {
    heading: "Gestión de preferencias",
    paragraphs: [
      "Puede configurar o eliminar las cookies desde los ajustes de su navegador. Tenga en cuenta que deshabilitar ciertas cookies puede afectar algunas funciones del sitio.",
    ],
  },
  {
    heading: "Cookies de terceros",
    paragraphs: [
      "Algunas funcionalidades pueden apoyarse en servicios de terceros que establecen sus propias cookies. Dichos terceros son responsables de sus respectivas políticas de privacidad.",
    ],
  },
  {
    heading: "Actualizaciones de esta política",
    paragraphs: [
      "Esta Política de Cookies puede actualizarse periódicamente. Publicaremos cualquier cambio en esta página junto con su fecha de actualización.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalDoc
      badge="Política de Cookies"
      title="Política de Cookies"
      intro="Explicamos qué cookies utilizamos en este sitio y cómo puede gestionarlas."
      updated="Octubre de 2026"
      sections={sections}
    />
  );
}
