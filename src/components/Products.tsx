import dimailCover from "../assets/producto-dimail.png";
import legalenviosCover from "../assets/producto-legalenvios.png";

type Status = "available" | "development" | "soon" | "expansion";

const statusStyles: Record<Status, string> = {
  available: "bg-brand-tint text-brand border-brand/25",
  development:
    "bg-[color:var(--color-warning)]/12 text-[color:var(--color-warning)] border-[color:var(--color-warning)]/30",
  soon: "bg-[color:var(--color-info)]/12 text-[color:var(--color-info)] border-[color:var(--color-info)]/30",
  expansion: "bg-surface-low text-text-muted border-border",
};

type Product = {
  icon: string;
  name: string;
  category: string;
  status: Status;
  statusLabel: string;
  pulse?: boolean;
  image?: string;
  caption: { icon: string; text: string };
  desc: string;
  features: string[];
  cta: { label: string; icon: string; primary: boolean; href?: string };
};

const products: Product[] = [
  {
    icon: "mail",
    name: "DIMAIL",
    category: "Comunicaciones & Notificaciones",
    status: "available",
    statusLabel: "Solución Disponible",
    image: dimailCover,
    caption: { icon: "verified", text: "Certificación con validez probatoria" },
    desc: "Plataforma especializada en comunicaciones y notificaciones empresariales, con soluciones digitales y físicas, seguimiento de envíos y certificación legal.",
    features: [
      "Trazabilidad completa de envíos físicos y electrónicos",
      "Acreditación legal y constancia de recepción fehaciente",
    ],
    cta: {
      label: "Visitar DIMAIL",
      icon: "arrow_outward",
      primary: true,
      href: "https://dimail.co",
    },
  },
  {
    icon: "campaign",
    name: "DIMAIL Marketing",
    category: "Campañas & Multicanalidad",
    status: "development",
    statusLabel: "En desarrollo activo",
    pulse: true,
    caption: { icon: "groups", text: "Segmentación de audiencias y fidelización" },
    desc: "Plataforma de marketing y comunicaciones empresariales, orientada a campañas, gestión de contactos y comunicación multicanal.",
    features: [
      "Envío masivo coordinado de alta entregabilidad",
      "Métricas de interacción y análisis de respuesta en tiempo real",
    ],
    cta: { label: "Más información", icon: "info", primary: false },
  },
  {
    icon: "gavel",
    name: "LegalEnvios",
    category: "Gestión Legal & Entregas Certificadas",
    status: "available",
    statusLabel: "Solución Disponible",
    image: legalenviosCover,
    caption: { icon: "lock", text: "Custodia documental bajo protocolo legal" },
    desc: "Solución confiable de envíos certificados y gestión legal digital corporativa, estructurada para dar certeza jurídica a notificaciones críticas.",
    features: [
      "Fehaciencia en actos de notificación institucional",
      "Archivo inmutable de evidencias y acuses de recibo",
    ],
    cta: {
      label: "Visitar LegalEnvios",
      icon: "arrow_outward",
      primary: true,
      href: "https://legalenvios.up.railway.app/",
    },
  },
  {
    icon: "rocket_launch",
    name: "Nuevas Soluciones en Camino",
    category: "Evolución e Innovación Constante",
    status: "expansion",
    statusLabel: "Portafolio en Expansión",
    caption: {
      icon: "lightbulb",
      text: "Innovación focalizada en necesidades corporativas",
    },
    desc: "DigitalALWS continúa concibiendo y desarrollando nuevos productos para ampliar nuestro portafolio, brindando herramientas modernas que potencian la competitividad empresarial.",
    features: [
      "Investigación aplicada a retos de negocio reales",
      "Roadmap orientado a escalabilidad y valor sostenido",
    ],
    cta: { label: "Propón tu proyecto", icon: "arrow_forward", primary: false },
  },
];

export default function Products() {
  return (
    <section
      id="productos"
      className="w-full border-b border-border bg-surface py-16 lg:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8">
        {/* Encabezado */}
        <div className="mx-auto flex max-w-2xl flex-col gap-3 text-center">
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-brand">
            Catálogo Ejecutivo de Soluciones
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
            Nuestros Productos
          </h2>
          <p className="text-lg leading-relaxed text-text-muted">
            Plataformas digitales diseñadas para optimizar la comunicación,
            garantizar la validez legal y potenciar el rendimiento comercial de
            su organización.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product: p }: { product: Product }) {
  const ctaClass = p.cta.primary
    ? "btn-primary inline-flex w-fit items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-md shadow-brand/20"
    : "inline-flex w-fit items-center gap-1.5 rounded-lg border border-border bg-surface-low px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-surface-high";

  const external = Boolean(p.cta.href);

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full bg-brand-tint blur-2xl"
      />
      <div className="relative z-10 flex flex-col gap-6">
        {/* Cabecera */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-md">
              <span className="material-symbols-outlined text-xl">{p.icon}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-text">
                {p.name}
              </span>
              <span className="text-xs font-semibold text-brand">
                {p.category}
              </span>
            </div>
          </div>
          <span
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2.5 py-1 text-[0.6875rem] font-semibold ${statusStyles[p.status]}`}
          >
            {p.pulse && (
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
            )}
            {p.statusLabel}
          </span>
        </div>

        {/* Visual: portada del producto o placeholder */}
        <div className="relative flex h-44 items-end overflow-hidden rounded-xl border border-border bg-slate-900 shadow-inner">
          {p.image ? (
            <>
              <img
                src={p.image}
                alt={`Portada de ${p.name}`}
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
            </>
          ) : (
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(37,99,235,0.35)_0%,transparent_55%)]"
            />
          )}
          <div className="relative z-10 flex items-center gap-2 p-4">
            <span className="material-symbols-outlined text-base text-brand-400">
              {p.caption.icon}
            </span>
            <span className="text-sm font-medium text-white">
              {p.caption.text}
            </span>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-sm leading-relaxed text-text-muted">{p.desc}</p>

        {/* Features */}
        <ul className="flex flex-col gap-2">
          {p.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-text-muted"
            >
              <span className="material-symbols-outlined mt-0.5 text-base text-brand">
                check_circle
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="relative z-10 pt-6">
        <a
          href={p.cta.href ?? "#contacto"}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={ctaClass}
        >
          <span>{p.cta.label}</span>
          <span className="material-symbols-outlined text-base">
            {p.cta.icon}
          </span>
        </a>
      </div>
    </article>
  );
}
