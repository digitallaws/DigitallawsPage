import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="hero-bg relative flex min-h-[70svh] w-full items-center justify-center overflow-hidden px-5">
      <div aria-hidden className="hero-ambient" />
      <div className="relative z-10 flex max-w-lg flex-col items-center gap-5 text-center">
        <span className="font-display text-7xl font-extrabold text-brand md:text-8xl">
          404
        </span>
        <h1 className="font-display text-2xl font-bold text-text md:text-3xl">
          Página no encontrada
        </h1>
        <p className="max-w-md text-base text-text-muted">
          La ruta que buscas no existe o fue movida. Vuelve al inicio para
          seguir explorando nuestras soluciones.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25"
        >
          <span className="material-symbols-outlined text-base">home</span>
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
