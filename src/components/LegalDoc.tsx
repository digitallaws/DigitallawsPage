import { Link } from "react-router-dom";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalDocProps = {
  badge: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalDoc({
  badge,
  title,
  intro,
  updated,
  sections,
}: LegalDocProps) {
  return (
    <div className="hero-bg relative w-full">
      <div aria-hidden className="hero-ambient" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 py-16 md:px-8 lg:py-20">
        {/* Encabezado */}
        <nav className="mb-6 flex items-center gap-1.5 text-sm text-text-subtle">
          <Link to="/" className="transition-colors hover:text-brand">
            Inicio
          </Link>
          <span className="material-symbols-outlined text-base">
            chevron_right
          </span>
          <span className="text-text-muted">{badge}</span>
        </nav>

        <header className="flex flex-col gap-4 border-b border-border pb-8">
          <span className="w-fit rounded-full border border-brand/25 bg-brand-tint px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand">
            {badge}
          </span>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-text md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
            {intro}
          </p>
          <p className="flex items-center gap-2 text-sm text-text-subtle">
            <span className="material-symbols-outlined text-base">update</span>
            Última actualización: {updated}
          </p>
        </header>

        {/* Secciones */}
        <div className="mt-10 flex flex-col gap-10">
          {sections.map((s, i) => (
            <section key={s.heading} className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-bold text-text md:text-2xl">
                <span className="mr-2 text-brand">{i + 1}.</span>
                {s.heading}
              </h2>
              {s.paragraphs?.map((p, idx) => (
                <p
                  key={idx}
                  className="text-base leading-relaxed text-text-muted"
                >
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="flex flex-col gap-2 pt-1">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-base leading-relaxed text-text-muted"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-base text-brand">
                        check_circle
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Pie de documento */}
        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-2xl text-brand">
              contact_support
            </span>
            <p className="text-sm text-text-muted">
              ¿Dudas sobre este documento? Escríbenos y te ayudamos.
            </p>
          </div>
          <Link
            to="/#contacto"
            className="btn-primary inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold"
          >
            <span>Contactar</span>
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
