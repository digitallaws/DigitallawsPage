import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="hero-bg relative flex min-h-[70svh] w-full items-center justify-center overflow-hidden px-5">
      <div aria-hidden className="hero-ambient" />
      <div className="relative z-10 flex max-w-lg flex-col items-center gap-5 text-center">
        <span aria-hidden="true" className="material-symbols-outlined text-6xl text-brand">
          warning
        </span>
        <h1 className="font-display text-2xl font-bold text-text md:text-3xl">
          Algo salió mal
        </h1>
        <p className="max-w-md text-base text-text-muted">
          Ocurrió un error al mostrar esta página. Puedes volver al inicio o intentar cargarla de nuevo.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25"
          >
            <span className="material-symbols-outlined text-base">home</span>
            Volver al inicio
          </Link>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface-high"
          >
            <span className="material-symbols-outlined text-base">refresh</span>
            Recargar página
          </button>
        </div>
      </div>
    </section>
  );
}