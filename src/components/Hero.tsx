import personas from "../assets/Personas.png";

export default function Hero() {
  return (
    <section id="features" className="relative grid place-items-center w-full min-h-[calc(100svh-9rem)] overflow-hidden">
      <div aria-hidden className="hero-diagonal" />
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:gap-16 md:grid-cols-2 -translate-y-10 md:-translate-y-16">
          <div className="text-center md:text-left md:pr-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-navy">Automatice y controle digitalmente el trámite de la notificación personal</h1>
            <p className="mt-4 text-lg text-graphite">
              Plataforma digital de comunicaciones diseñada conforme a la Ley 2213 de 2022.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 md:flex-row md:justify-start">
              <a
                href="#services"
                className="inline-flex rounded-xl border border-brand px-5 py-2.5 text-brand hover:bg-white"
              >
                Conocer nuestros servicios
              </a>
            </div>
          </div>
          <div className="hidden md:flex md:justify-end md:pl-8 relative">
            <div aria-hidden className="hero-accent" />
            <img
              src={personas}
              alt="Flujo legal, envío, trazabilidad y constancias"
              className="relative z-10 h-56 w-auto md:h-72"
            />
          </div>
        </div>
      </div>
      
    </section>
  );
}
