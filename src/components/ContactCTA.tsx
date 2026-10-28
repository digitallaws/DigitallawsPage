export default function ContactCTA() {
  return (
    <section id="contacto" className="w-full bg-surface-low py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center shadow-sm lg:p-16">
          <div aria-hidden className="hero-ambient" />

          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30">
            <span className="material-symbols-outlined text-3xl">forum</span>
          </div>

          <h2 className="relative z-10 max-w-2xl font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
            El próximo gran proyecto comienza con una conversación.
          </h2>
          <p className="relative z-10 max-w-xl text-lg leading-relaxed text-text-muted">
            Permítanos mostrarle cómo nuestras soluciones digitales pueden
            transformar y fortalecer las comunicaciones y operaciones de su
            organización.
          </p>

          <div className="relative z-10 flex flex-col items-center gap-3 pt-2 sm:flex-row">
            <a
              href="https://wa.me/573243555142"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25"
            >
              <span>Hablemos de tu proyecto</span>
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </a>
            <a
              href="mailto:contacto@digitalalws.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-muted transition-colors hover:bg-surface-high hover:text-text"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              contacto@digitalalws.com
            </a>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-text-subtle">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base text-brand">
                check
              </span>
              Atención comercial dedicada
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base text-brand">
                check
              </span>
              Asesoría personalizada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
