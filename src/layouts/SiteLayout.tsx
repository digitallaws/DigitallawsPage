import React from "react";
import { ThemeProvider } from "../context/ThemeContext";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const kids = React.Children.toArray(children);
  const heroIndex = kids.length > 1 ? 1 : 0;
  const before = kids.slice(0, heroIndex);
  const hero = kids[heroIndex] ?? null;
  const after = kids.slice(heroIndex + 1);
  return (
    <ThemeProvider>
      <div className="relative min-h-svh pt-20 overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4">{before}</div>
        {hero && <div className="relative w-full">{hero}</div>}
        <div className="w-screen z-30">
          <div className="carousel-mask bg-brand text-white border-t border-white/10 px-4 md:px-6">
            <div className="carousel-track py-3">
              {[
                {
                  t: "Legal Envíos – Notificaciones Judiciales",
                  d: "Gestione, envíe y certifique notificaciones digitales con evidencia técnica y cumplimiento normativo.",
                },
                { t: "Correo Electrónico Certificado", d: "Envíe comunicaciones oficiales con acuses verificables, integridad del mensaje y soporte probatorio." },
                { t: "Software para Mensajería Certificada", d: "Plataforma en arriendo para operadores postales que requieren trazabilidad, constancias y evidencia digital." },
                { t: "API Legal de Correspondencia", d: "Integre el envío de notificaciones y comunicaciones certificadas a su propio software con trazabilidad en tiempo real." },
                { t: "Consulta y Ubicación Legal de Direcciones", d: "Verificación jurídica de correos, celulares y direcciones para completar el trámite de notificación." },
              ]
                .concat([
                  {
                    t: "Legal Envíos – Notificaciones Judiciales",
                    d: "Gestione, envíe y certifique notificaciones digitales con evidencia técnica y cumplimiento normativo.",
                  },
                  { t: "Correo Electrónico Certificado", d: "Envíe comunicaciones oficiales con acuses verificables, integridad del mensaje y soporte probatorio." },
                  { t: "Software para Mensajería Certificada", d: "Plataforma en arriendo para operadores postales que requieren trazabilidad, constancias y evidencia digital." },
                  { t: "API Legal de Correspondencia", d: "Integre el envío de notificaciones y comunicaciones certificadas a su propio software con trazabilidad en tiempo real." },
                  { t: "Consulta y Ubicación Legal de Direcciones", d: "Verificación jurídica de correos, celulares y direcciones para completar el trámite de notificación." },
              ])
                .map((item, i) => (
                  <div
                    key={`${item.t}-${i}`}
                    className="min-w-[75vw] sm:min-w-[50vw] md:min-w-[420px] lg:min-w-[520px] px-2 md:px-4"
                  >
                    <div className="text-white font-semibold truncate whitespace-nowrap">{item.t}</div>
                    <div className="text-white/85 text-sm hidden sm:block truncate whitespace-nowrap">{item.d}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4">{after}</div>
      </div>
    </ThemeProvider>
  );
}
