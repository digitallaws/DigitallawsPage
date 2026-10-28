const pillars = [
  {
    icon: "layers",
    title: "Creación de Productos Propios",
    desc: "Software propietario diseñado para resolver desafíos concretos, concebido desde el entendimiento exhaustivo de las operaciones de negocio contemporáneas.",
    tag: "Soluciones nativas",
  },
  {
    icon: "balance",
    title: "Experiencia y Solidez",
    desc: "Acompañamiento continuo y evolución sostenida de nuestras plataformas, asegurando disponibilidad, mantenimiento preventivo y servicio de excelencia.",
    tag: "Respaldo total",
  },
  {
    icon: "all_inclusive",
    title: "Visión a Largo Plazo",
    desc: "Construcción de un ecosistema digital conectado y escalable, capaz de acompañar el crecimiento y expansión de nuestros clientes corporativos de forma transparente.",
    tag: "Escalabilidad sostenida",
  },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="w-full border-b border-border bg-surface-low py-16 lg:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8">
        {/* Encabezado */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-3 lg:col-span-8">
            <span className="flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="material-symbols-outlined text-base">
                corporate_fare
              </span>
              Presentación Institucional
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
              Innovación con propósito y visión sostenible.
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-text-muted">
              DigitalALWS es una empresa enfocada en la creación y evolución de
              soluciones digitales. Desarrollamos productos propios que responden
              a necesidades reales de empresas y organizaciones, combinando
              innovación, experiencia y una visión de crecimiento a largo plazo.
            </p>
          </div>

          <div className="flex lg:col-span-4 lg:justify-end">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-4 shadow-sm">
              <span className="material-symbols-outlined text-3xl text-brand">
                verified_user
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-text">
                  Confianza y Solidez
                </span>
                <span className="text-xs text-text-subtle">
                  Compromiso empresarial constante
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 pilares */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-brand/15 bg-brand-tint text-brand">
                  <span className="material-symbols-outlined text-3xl">
                    {p.icon}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-text">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {p.desc}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-brand">
                <span>{p.tag}</span>
                <span className="material-symbols-outlined text-base">check</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
