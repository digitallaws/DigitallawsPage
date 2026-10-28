import LegalDoc, { type LegalSection } from "../components/LegalDoc";

const sections: LegalSection[] = [
  {
    heading: "Aceptación de los términos",
    paragraphs: [
      "El acceso y uso de este sitio y de las plataformas de DigitalALWS implica la aceptación plena de estos Términos y Condiciones. Si no está de acuerdo con ellos, le solicitamos abstenerse de utilizar los servicios.",
    ],
  },
  {
    heading: "Uso de los servicios",
    bullets: [
      "Los servicios deben utilizarse con fines lícitos y conforme a la normativa vigente.",
      "El usuario es responsable de la veracidad de la información que proporciona.",
      "No está permitido el uso que afecte la disponibilidad, seguridad o integridad de las plataformas.",
    ],
  },
  {
    heading: "Propiedad intelectual",
    paragraphs: [
      "El software, marcas, contenidos y elementos gráficos de DigitalALWS son de su propiedad o cuentan con licencia. Queda prohibida su reproducción o uso no autorizado.",
    ],
  },
  {
    heading: "Niveles de servicio y disponibilidad",
    paragraphs: [
      "Procuramos mantener la continuidad operativa de nuestras plataformas. Los compromisos específicos de disponibilidad y soporte se definen en los acuerdos comerciales suscritos con cada cliente.",
    ],
  },
  {
    heading: "Limitación de responsabilidad",
    paragraphs: [
      "DigitalALWS no será responsable por daños derivados del uso indebido de los servicios o por causas ajenas a su control razonable. Las certificaciones y constancias se emiten conforme a la información efectivamente procesada.",
    ],
  },
  {
    heading: "Modificaciones",
    paragraphs: [
      "Podemos actualizar estos Términos para reflejar cambios legales, técnicos o comerciales. Las versiones vigentes se publicarán en este sitio con su fecha de actualización.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      badge="Términos y Condiciones"
      title="Términos y Condiciones de Uso"
      intro="Condiciones que regulan el acceso y uso del sitio y de las plataformas corporativas de DigitalALWS."
      updated="Octubre de 2026"
      sections={sections}
    />
  );
}
