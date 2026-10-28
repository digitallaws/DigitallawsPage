import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/useTheme";
import logoLight from "../assets/Logo Claro.png";
import logoDark from "../assets/Logo Oscuro.png";

type NavLink = { label: string; to: string };

const links: NavLink[] = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/#nosotros" },
  { label: "Nuestros Productos", to: "/productos" },
  { label: "Alianzas", to: "/#alianzas" },
  { label: "Seguridad", to: "/seguridad" },
  { label: "Contacto", to: "/#contacto" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // En modo oscuro se usa el logo claro (sobre fondo oscuro) y viceversa.
  const logo = theme === "dark" ? logoLight : logoDark;

  const isActive = (to: string) =>
    to.startsWith("/#")
      ? false
      : to === "/"
        ? pathname === "/"
        : pathname.startsWith(to);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Link to="/" className="flex items-center gap-3 focus:outline-none">
          <img src={logo} alt="DigitalALWS" className="h-8 w-auto" />
        </Link>

        {/* Navegación escritorio */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Principal"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-brand ${
                isActive(l.to)
                  ? "font-semibold text-brand"
                  : "text-text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Acciones escritorio */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} toggle={toggle} />
          <Link
            to="/#contacto"
            className="btn-primary inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold shadow-md shadow-brand/20"
          >
            Hablemos de tu proyecto
          </Link>
        </div>

        {/* Acciones móvil */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-text"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            <span className="material-symbols-outlined text-2xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-border bg-surface`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-surface-low hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#contacto"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold"
          >
            Hablemos de tu proyecto
          </Link>
        </nav>
      </div>
    </header>
  );
}

function ThemeToggle({
  theme,
  toggle,
}: {
  theme: "light" | "dark";
  toggle: () => void;
}) {
  return (
    <button
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
      }
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-low text-text-muted transition-colors hover:text-brand"
    >
      <span className="material-symbols-outlined text-xl">
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
