import LegalDoc, { type LegalSection } from "../components/LegalDoc";

const sections: LegalSection[] = [
  {
    heading: "Responsable del tratamiento",
    paragraphs: [
      "DigitalALWS es responsable del tratamiento de los datos personales recolectados a través de este sitio y de sus plataformas corporativas. Tratamos la información con fines legítimos, de forma proporcional y conforme a la normativa aplicable de protección de datos.",
    ],
  },
  {
    heading: "Datos que recolectamos",
    bullets: [
      "Datos de contacto comercial: nombre, empresa, correo electrónico y teléfono.",
      "Datos de uso del sitio: páginas visitadas y métricas agregadas de navegación.",
      "Datos necesarios para la prestación de servicios de comunicaciones y notificaciones.",
    ],
  },
  {
    heading: "Finalidad del tratamiento",
    paragraphs: [
      "Utilizamos los datos para atender solicitudes comerciales, prestar nuestros servicios, emitir constancias y acuses, mejorar la experiencia del sitio y cumplir obligaciones legales y contractuales.",
    ],
  },
  {
    heading: "Derechos del titular",
    paragraphs: [
      "El titular puede conocer, actualizar, rectificar y suprimir sus datos, así como revocar la autorización otorgada, cuando proceda. Para ejercer estos derechos puede escribir a nuestro canal de contacto oficial.",
    ],
  },
  {
    heading: "Seguridad de la información",
    paragraphs: [
      "Aplicamos medidas técnicas, administrativas y organizativas razonables para proteger la información frente a accesos no autorizados, pérdida o alteración, acorde con estándares corporativos de seguridad.",
    ],
  },
  {
    heading: "Conservación y transferencias",
    paragraphs: [
      "Conservamos los datos durante el tiempo necesario para las finalidades descritas y los plazos legales aplicables. Cualquier transferencia a terceros se realiza bajo acuerdos que preservan la confidencialidad y el uso debido de la información.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      badge="Seguridad y Privacidad"
      title="Política de Privacidad"
      intro="Describimos cómo DigitalALWS recolecta, utiliza y protege los datos personales tratados a través de este sitio y sus plataformas."
      updated="Octubre de 2026"
      sections={sections}
    />
  );
}
