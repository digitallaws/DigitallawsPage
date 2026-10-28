import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SiteLayout() {
  const scrollRef = useRef<HTMLElement>(null);
  const { pathname, hash } = useLocation();

  // El scroll vive en el contenedor .snap-container (no en window).
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    if (hash) {
      const el = container.querySelector(hash);
      if (el instanceof HTMLElement) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    container.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return (
    <ThemeProvider>
      <div className="h-svh overflow-hidden bg-canvas text-text">
        <Navbar />
        <main ref={scrollRef} className="snap-container mt-20">
          <Outlet />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
