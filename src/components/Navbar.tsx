import { useState } from "react";
import { useTheme } from "../context/useTheme";
import logoLight from "../assets/Logo Claro.png";
import logoDark from "../assets/Logo Oscuro.png";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`nav-white backdrop-blur-md`}
      >
        <nav
          className="flex items-center justify-between px-4 py-3 md:px-6"
          aria-label="Primary"
        >
          <a href="#" className="flex items-center gap-3">
            <img
              src={theme === "light" ? logoDark : logoLight}
              alt="DigitalLaws"
              className="h-8 w-auto"
            />
          </a>

          <button
            className="inline-flex items-center justify-center p-2 text-brand md:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-brand"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-brand"
              >
                <path
                  d="M5 7h14"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M9 12h10"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 17h14"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <div className="flex items-center gap-8">
              <a className="text-black hover:text-brand font-semibold" href="#nosotros">
                Nosotros
              </a>
              <a className="text-black hover:text-brand font-semibold" href="#contacto">
                Contacto
              </a>
              <a className="text-black hover:text-brand font-semibold" href="#features">
                Características
              </a>
              <a className="text-black hover:text-brand font-semibold" href="#services">
                Servicios
              </a>
            </div>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://wa.me/573243555142"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-brand px-4 py-2 text-white shadow hover:bg-steel"
            >
              Contacto
            </a>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`md:hidden ${open ? "block" : "hidden"}`}
        >
          <div className="rounded-xl border border-white/20 bg-white/70 backdrop-blur-md px-4 py-3 shadow">
            <div className="flex flex-col gap-3">
              <a
                className="text-graphite hover:text-brand font-semibold"
                href="#funcionalidades"
                onClick={() => setOpen(false)}
              >
                Funcionalidades
              </a>
              <a
                className="text-graphite hover:text-brand font-semibold"
                href="#cumplimiento"
                onClick={() => setOpen(false)}
              >
                Cumplimiento Legal
              </a>
              <a
                className="text-graphite hover:text-brand font-semibold"
                href="#nosotros"
                onClick={() => setOpen(false)}
              >
                Nosotros
              </a>
              <a
                className="text-graphite hover:text-brand font-semibold"
                href="#contacto"
                onClick={() => setOpen(false)}
              >
                Contacto
              </a>
              <a
                className="text-graphite hover:text-brand font-semibold"
                href="#features"
                onClick={() => setOpen(false)}
              >
                Características
              </a>
              <a
                className="text-graphite hover:text-brand font-semibold"
                href="#services"
                onClick={() => setOpen(false)}
              >
                Servicios
              </a>
              <a
                className="text-graphite hover:text-brand font-semibold"
                href="#support"
                onClick={() => setOpen(false)}
              >
                Recursos y Soporte
              </a>
              <a
                className="text-graphite hover:text-brand font-semibold"
                href="#pricing"
                onClick={() => setOpen(false)}
              >
                Precios
              </a>
              <a
                className="text-white rounded-xl bg-brand px-4 py-2 shadow hover:bg-steel"
                href="https://wa.me/573243555142"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Contacto
              </a>
              <button
                onClick={() => {
                  toggle();
                  setOpen(false);
                }}
                aria-label="Cambiar tema"
                className="inline-flex items-center justify-center rounded-xl bg-white/60 px-3 py-2 text-graphite hover:bg-white/80"
              >
                {theme === "light" ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-graphite"
                  >
                    <path d="M12 4a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-graphite"
                  >
                    <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zm10.48 0l1.79-1.79 1.79 1.79-1.79 1.79-1.79-1.79zM12 2h0v2h0V2zm0 18h0v2h0v-2zM4.84 17.24l-1.67 1.67 1.79 1.79 1.67-1.67-1.79-1.79zm14.32 0l1.79 1.79-1.67 1.67-1.79-1.79 1.67-1.67zM12 6a6 6 0 100 12 6 6 0 000-12z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
