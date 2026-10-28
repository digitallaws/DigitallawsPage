const points = [
  {
    icon: "integration_instructions",
    title: "Integración Comercial Robusta",
    desc: "Trazabilidad de la mensajería coordinada en múltiples canales corporativos.",
  },
  {
    icon: "handshake",
    title: "Relaciones Comerciales Consolidadas",
    desc: "Acompañamiento tecnológico y continuidad operativa garantizada.",
  },
];

export default function Partners() {
  return (
    <section
      id="alianzas"
      className="w-full border-b border-border bg-surface-low py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm lg:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Contenido */}
            <div className="flex flex-col gap-6 lg:col-span-8">
              <span className="flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand">
                <span className="material-symbols-outlined text-base">hub</span>
                Alianzas Estratégicas
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
                Socio Tecnológico de AlfaMensajes
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
                Colaboramos estrechamente potenciando soluciones de mensajería
                empresarial e integración digital para el mercado corporativo.
                Nuestra sinergia consolida productos estables, escalables y con
                respaldo operativo de primer nivel.
              </p>

              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                {points.map((p) => (
                  <div
                    key={p.title}
                    className="flex gap-3 rounded-xl border border-border bg-surface-low p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand">
                      <span className="material-symbols-outlined text-xl">
                        {p.icon}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-text">
                        {p.title}
                      </span>
                      <span className="text-xs leading-relaxed text-text-subtle">
                        {p.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tarjeta de alianza */}
            <div className="lg:col-span-4">
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface-high/50 p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-md">
                  <span className="material-symbols-outlined text-3xl">
                    swap_horiz
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-display text-lg font-bold text-text">
                    AlfaMensajes &amp; DigitalALWS
                  </span>
                  <span className="text-xs text-text-subtle">
                    Sinergia Tecnológica Corporativa
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand-tint px-3 py-1 text-[0.6875rem] font-semibold text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Alianza Estratégica Activa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
