import heroEcosistema from "../assets/DigitalLaws_Ecosistema.svg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero-bg relative w-full overflow-hidden border-b border-border py-16 lg:py-20"
    >
      <div aria-hidden className="hero-ambient" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Columna de texto */}
          <div className="flex flex-col gap-7 lg:col-span-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/25 bg-brand-tint px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand">
                Creadores de Productos Digitales
              </span>
            </span>

            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-text md:text-6xl lg:text-[4rem]">
              Creamos productos que conectan.
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-text-muted">
              Somos DigitalLaws, la empresa detrás de DIMAIL, DIMAIL Marketing y
              LegalEnvios. Desarrollamos soluciones que simplifican la
              comunicación y los procesos empresariales.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#productos"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25"
              >
                <span>Explorar productos</span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </a>
              <a
                href="#nosotros"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-muted transition-colors hover:bg-surface-low hover:text-text"
              >
                Conócenos
              </a>
            </div>

            {/* Línea discreta de contexto */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 text-sm font-medium text-text-subtle">
              <span>Productos propios</span>
              <span className="text-brand/60">·</span>
              <span>Alianzas estratégicas</span>
              <span className="text-brand/60">·</span>
              <span>Nuevos desarrollos</span>
            </div>
          </div>

          {/* Columna visual (ilustración del ecosistema) */}
          <div className="relative lg:col-span-6">
            <img
              src={heroEcosistema}
              alt="Ecosistema de productos DigitalLaws: DIMAIL, DIMAIL Marketing, LegalEnvios y futuras plataformas, con AlfaMensajes como socio tecnológico"
              className="mx-auto h-auto w-full max-w-2xl drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
