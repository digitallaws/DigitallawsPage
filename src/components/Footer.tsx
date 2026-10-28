import { Link } from "react-router-dom";
import { useTheme } from "../context/useTheme";
import logoLight from "../assets/Logo Claro.png";
import logoDark from "../assets/Logo Oscuro.png";

const columns = [
  {
    title: "Soluciones Comerciales",
    links: [
      { label: "Nuestros Productos", to: "/productos" },
      { label: "Seguridad & Respaldo", to: "/seguridad" },
      { label: "Alianzas Estratégicas", to: "/#alianzas" },
      { label: "PQRS", to: "/pqrs" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { label: "Inicio", to: "/" },
      { label: "Nosotros", to: "/#nosotros" },
      { label: "Contacto Comercial", to: "/#contacto" },
    ],
  },
];

const trustBadges = [
  { icon: "schedule", label: "Acompañamiento Continuo" },
  { icon: "workspace_premium", label: "Productos Propios" },
  { icon: "support_agent", label: "Soporte Corporativo Activo" },
];

const legalLinks = [
  { label: "Privacidad", to: "/privacidad" },
  { label: "Seguridad y Privacidad", to: "/seguridad" },
  { label: "Términos y Condiciones", to: "/terminos" },
  { label: "Política de Cookies", to: "/cookies" },
];

export default function Footer() {
  const { theme } = useTheme();
  const logo = theme === "dark" ? logoLight : logoDark;

  return (
    <footer className="w-full border-t border-border bg-surface-lowest">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Marca */}
          <div className="flex flex-col gap-4 md:col-span-5">
            <img src={logo} alt="DigitalALWS" className="h-8 w-auto self-start" />
            <p className="max-w-sm text-sm leading-relaxed text-text-muted">
              Tecnología empresarial: productos digitales escalables y soluciones
              seguras de alto impacto para organizaciones globales.
            </p>
            <a
              href="mailto:contacto@digitalalws.com"
              className="flex items-center gap-2 text-sm font-medium text-brand hover:underline"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              contacto@digitalalws.co
            </a>
          </div>

          {/* Columnas de enlaces */}
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3 md:col-span-2">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-text-subtle">
                {col.title}
              </span>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-text-muted transition-colors hover:text-brand"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Confianza & Estado */}
          <div className="flex flex-col gap-3 md:col-span-3">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-text-subtle">
              Confianza &amp; Estado
            </span>
            <ul className="flex flex-col gap-2.5">
              {trustBadges.map((b) => (
                <li
                  key={b.label}
                  className="flex items-center gap-2 text-sm text-text-muted"
                >
                  <span className="material-symbols-outlined text-base text-brand">
                    {b.icon}
                  </span>
                  {b.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pie legal */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-text-subtle">
            © {new Date().getFullYear()} DigitalALWS. Todos los derechos
            reservados.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-xs text-text-subtle transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
