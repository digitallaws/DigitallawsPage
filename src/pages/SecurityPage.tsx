import { Link } from "react-router-dom";

const pillars = [
  {
    icon: "shield",
    title: "Protección de Datos",
    desc: "Salvaguarda exhaustiva de la información sensible corporativa, aplicando estándares modernos de almacenamiento seguro y resguardo de la información.",
  },
  {
    icon: "admin_panel_settings",
    title: "Privacidad Corporativa",
    desc: "Políticas estrictas de confidencialidad y tratamiento ético en la gestión de bases de contactos, notificaciones y comunicaciones comerciales.",
  },
  {
    icon: "verified_user",
    title: "Confiabilidad Continua",
    desc: "Disponibilidad sostenida y soporte corporativo calificado para garantizar que cada entrega, mensaje y proceso se ejecute sin contratiempos.",
  },
];

const practices = [
  {
    icon: "encrypted",
    title: "Cifrado en tránsito y reposo",
    desc: "Las comunicaciones y los datos se protegen con cifrado estándar de la industria durante su transmisión y almacenamiento.",
  },
  {
    icon: "fact_check",
    title: "Evidencia verificable",
    desc: "Cada notificación genera constancias y acuses con respaldo probatorio e integridad del mensaje.",
  },
  {
    icon: "manage_accounts",
    title: "Control de accesos",
    desc: "Gestión de permisos por rol y trazabilidad de operaciones sobre las plataformas corporativas.",
  },
  {
    icon: "backup",
    title: "Continuidad y respaldo",
    desc: "Procesos de respaldo y recuperación orientados a mantener la disponibilidad del servicio.",
  },
];

export default function SecurityPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="hero-bg relative w-full overflow-hidden border-b border-border py-16 lg:py-20">
        <div aria-hidden className="hero-ambient" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
          <span className="mx-auto w-fit rounded-full border border-brand/25 bg-brand-tint px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand">
            Seguridad y Respaldo
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-text md:text-5xl">
            La confianza de nuestros clientes es el pilar de cada producto.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-muted">
            Establecemos criterios rigurosos de protección, privacidad y calidad
            que aseguran la máxima integridad en las operaciones de su empresa.
          </p>
        </div>
      </section>

      {/* Pilares */}
      <section className="w-full border-b border-border bg-surface py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-5 md:grid-cols-3 md:px-8">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface-low p-8 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/15 bg-brand-tint text-brand">
                <span className="material-symbols-outlined text-2xl">
                  {p.icon}
                </span>
              </div>
              <h2 className="font-display text-xl font-bold text-text">
                {p.title}
              </h2>
              <p className="text-sm leading-relaxed text-text-muted">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Prácticas */}
      <section className="w-full border-b border-border bg-surface-low py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="mx-auto mb-10 flex max-w-2xl flex-col gap-3 text-center">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-brand">
              Prácticas Operativas
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
              Cómo protegemos su operación
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {practices.map((p) => (
              <article
                key={p.title}
                className="flex gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand">
                  <span className="material-symbols-outlined text-xl">
                    {p.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg font-bold text-text">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-surface py-16 lg:py-20">
        <div className="mx-auto w-full max-w-4xl px-5 text-center md:px-8">
          <h2 className="font-display text-2xl font-bold tracking-tight text-text md:text-3xl">
            ¿Quiere conocer nuestros estándares en detalle?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-text-muted">
            Consulte nuestras políticas o escríbanos para una revisión conjunta
            de requisitos de seguridad y cumplimiento.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/privacidad"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-low px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface-high"
            >
              <span className="material-symbols-outlined text-base">
                policy
              </span>
              Ver Política de Privacidad
            </Link>
            <Link
              to="/#contacto"
              className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25"
            >
              <span>Hablemos de tu proyecto</span>
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
