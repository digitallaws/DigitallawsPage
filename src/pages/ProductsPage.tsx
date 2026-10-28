import { Link } from "react-router-dom";
import Products from "../components/Products";

const metrics = [
  { value: "100%", label: "IP & Software Propio", accent: true },
  { value: "Alta", label: "Tasa de Entrega", accent: true },
  { value: "Digital + Física", label: "Comunicación Multicanal" },
  { value: "Continuo", label: "Acompañamiento", accent: true },
];

const dimailFeatures = [
  {
    icon: "dynamic_feed",
    title: "Gestión Multicanal",
    desc: "Email certificado, SMS prioritario y entrega física coordinada con acuse de recibo.",
  },
  {
    icon: "verified_user",
    title: "Certificación Legal",
    desc: "Respaldo probatorio pleno y constancias verificables criptográficamente.",
  },
  {
    icon: "sync_alt",
    title: "Integración Fácil",
    desc: "Conexión ágil vía API y conectores nativos para ERP, CRM y sistemas de cobro.",
  },
];

export default function ProductsPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="hero-bg relative w-full overflow-hidden border-b border-border py-16 lg:py-20">
        <div aria-hidden className="hero-ambient" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
          <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand/25 bg-brand-tint px-3 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand">
              Portafolio Corporativo de Software
            </span>
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-text md:text-5xl">
            Plataformas y productos de software para{" "}
            <span className="text-brand">impulsar tu empresa</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-muted">
            Desarrollamos soluciones digitales propias que simplifican la
            operación, aseguran las comunicaciones corporativas y abren nuevas
            posibilidades de negocio.
          </p>

          {/* Métricas */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center rounded-xl border border-border bg-surface p-4 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span
                  className={`font-display text-2xl font-bold ${m.accent ? "text-brand" : "text-text"}`}
                >
                  {m.value}
                </span>
                <span className="mt-1 text-xs font-medium text-text-subtle">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Producto insignia: DIMAIL */}
      <section className="w-full border-b border-border bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-low p-8 shadow-sm lg:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-80 w-80 rounded-full bg-brand-tint blur-3xl"
            />
            <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center">
              <div className="flex w-full flex-col gap-5 lg:w-7/12">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand-tint px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-brand">
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-brand" />
                    Disponible y en producción
                  </span>
                  <span className="rounded-full border border-border bg-surface px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-text-muted">
                    Producto insignia
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand text-white shadow-md">
                    <span className="material-symbols-outlined text-3xl">
                      mark_email_read
                    </span>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-bold text-text">
                      DIMAIL
                    </h2>
                    <p className="text-sm font-medium text-brand">
                      Comunicaciones y notificaciones con plena validez
                    </p>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-text-muted">
                  Plataforma especializada en comunicaciones y notificaciones
                  empresariales. Combina entrega digital y física, seguimiento
                  trazable en tiempo real y certificación de comunicaciones para
                  entidades financieras, legales y corporativas.
                </p>

                <div className="grid grid-cols-1 gap-4 pt-1 md:grid-cols-3">
                  {dimailFeatures.map((f) => (
                    <div
                      key={f.title}
                      className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-brand/40"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand">
                        <span className="material-symbols-outlined text-xl">
                          {f.icon}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-text">{f.title}</h3>
                      <p className="text-xs leading-relaxed text-text-muted">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://dimail.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25"
                  >
                    <span>Explorar DIMAIL</span>
                    <span className="material-symbols-outlined text-base">
                      arrow_outward
                    </span>
                  </a>
                  <Link
                    to="/#contacto"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface-high"
                  >
                    <span className="material-symbols-outlined text-base">
                      calendar_today
                    </span>
                    Solicitar demostración
                  </Link>
                </div>
              </div>

              {/* Panel visual */}
              <div className="w-full lg:w-5/12">
                <div className="rounded-2xl border border-border bg-surface p-5 shadow-xl">
                  <div className="mb-4 flex items-center justify-between rounded-lg border border-border bg-surface-low px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-rose-400" />
                      <span className="h-3 w-3 rounded-full bg-amber-400" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="font-mono text-[0.6875rem] text-text-subtle">
                      dimail.co/panel
                    </span>
                    <span className="material-symbols-outlined text-base text-brand">
                      lock
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-text">
                        Envío masivo certificado
                      </span>
                      <span className="rounded border border-brand/20 bg-brand-tint px-2 py-0.5 text-[0.6875rem] font-semibold text-brand">
                        En tiempo real
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-border bg-surface-low p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand">
                          <span className="material-symbols-outlined text-xl">
                            mark_email_read
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-text">
                            Lote Notificaciones #9842
                          </div>
                          <div className="text-xs text-text-subtle">
                            38.420 certificados emitidos
                          </div>
                        </div>
                      </div>
                      <span className="font-display text-lg font-bold text-brand">
                        99.9%
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-border bg-surface-low p-4 text-sm text-text-muted">
                      <span className="material-symbols-outlined text-base text-brand">
                        verified
                      </span>
                      Constancia con validez probatoria generada
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo completo (reutiliza la sección de la home) */}
      <Products />
    </div>
  );
}
