import { Link } from "react-router-dom";
import { services } from "../seo/services";

export default function ServicePage({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <article className="mx-auto max-w-5xl px-5 py-16 md:px-8 lg:py-20">
      <nav
        aria-label="Ruta de navegación"
        className="mb-8 text-sm text-text-muted"
      >
        <Link to="/" className="text-brand hover:underline">
          Inicio
        </Link>{" "}
        / {service.title}
      </nav>
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-text md:text-5xl">
        {service.title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-text-muted">
        {service.intro}
      </p>
      <h2 className="mt-12 font-display text-2xl font-bold text-text">
        {service.heading}
      </h2>
      {service.paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-relaxed text-text-muted">
          {paragraph}
        </p>
      ))}
      <ul className="mt-6 list-disc space-y-3 pl-6 text-text-muted">
        {service.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2 className="mt-12 font-display text-2xl font-bold text-text">
        {service.question}
      </h2>
      <p className="mt-4 leading-relaxed text-text-muted">{service.answer}</p>
      <Link
        to="/#contacto"
        className="btn-primary mt-8 inline-flex rounded-lg px-6 py-3 font-semibold"
      >
        Hablemos de tu proyecto
      </Link>
      <nav
        aria-label="Otras soluciones"
        className="mt-12 flex flex-wrap gap-5 border-t border-border pt-8 text-brand"
      >
        {services
          .filter((item) => item.path !== service.path)
          .map((item) => (
            <Link key={item.path} to={item.path} className="hover:underline">
              {item.title}
            </Link>
          ))}
        <Link to="/productos" className="hover:underline">
          Conoce DIMAIL y nuestros productos
        </Link>
      </nav>
    </article>
  );
}
