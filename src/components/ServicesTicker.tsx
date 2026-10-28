const items = [
  {
    t: "Legal Envíos – Notificaciones Judiciales",
    d: "Gestione, envíe y certifique notificaciones digitales con evidencia técnica y cumplimiento normativo.",
  },
  {
    t: "Correo Electrónico Certificado",
    d: "Envíe comunicaciones oficiales con acuses verificables, integridad del mensaje y soporte probatorio.",
  },
  {
    t: "Software para Mensajería Certificada",
    d: "Plataforma en arriendo para operadores postales que requieren trazabilidad, constancias y evidencia digital.",
  },
  {
    t: "API Legal de Correspondencia",
    d: "Integre el envío de notificaciones y comunicaciones certificadas a su propio software con trazabilidad en tiempo real.",
  },
  {
    t: "Consulta y Ubicación Legal de Direcciones",
    d: "Verificación jurídica de correos, celulares y direcciones para completar el trámite de notificación.",
  },
];

export default function ServicesTicker() {
  const loop = [...items, ...items];
  return (
    <div className="carousel-mask w-full border-y border-border bg-brand text-white">
      <div className="carousel-track py-3">
        {loop.map((item, i) => (
          <div
            key={`${item.t}-${i}`}
            className="min-w-[75vw] px-2 sm:min-w-[50vw] md:min-w-[420px] md:px-4 lg:min-w-[520px]"
          >
            <div className="truncate whitespace-nowrap font-semibold text-white">
              {item.t}
            </div>
            <div className="hidden truncate whitespace-nowrap text-sm text-white/85 sm:block">
              {item.d}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
