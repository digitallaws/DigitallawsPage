import { Link } from "react-router-dom";
import { services } from "../seo/services";

export default function ServiceLinks() {
  return (
    <section
      id="servicios"
      className="border-b border-border bg-surface py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="font-display text-3xl font-bold text-text md:text-4xl">
          Software e integración tecnológica para tu organización
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.path}
              className="rounded-2xl border border-border bg-surface-low p-6"
            >
              <h3 className="font-display text-xl font-bold text-text">
                <Link to={service.path} className="hover:text-brand">
                  {service.title}
                </Link>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {service.intro}
              </p>
              <Link
                to={service.path}
                className="mt-5 inline-block font-semibold text-brand hover:underline"
              >
                Conocer el servicio
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
