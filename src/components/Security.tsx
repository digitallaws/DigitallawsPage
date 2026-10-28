const cards = [
  {
    icon: "shield",
    title: "Protección de Datos",
    desc: "Salvaguarda exhaustiva de la información sensible corporativa, aplicando estándares modernos de almacenamiento seguro y resguardo de la información.",
  },
  {
    icon: "admin_panel_settings",
    title: "Privacidad Corporativa",
    desc: "Políticas estrictas de confidencialidad y tratamiento ético en la gestión de bases de contactos, notificaciones y comunicaciones comerciales.",
  },
  {
    icon: "verified_user",
    title: "Confiabilidad Continua",
    desc: "Disponibilidad e interrupción y soporte corporativo calificado para garantizar que cada entrega, mensaje y proceso se ejecute sin contratiempos.",
  },
];

export default function Security() {
  return (
    <section
      id="seguridad"
      className="w-full border-b border-border bg-surface py-16 lg:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8">
        {/* Encabezado */}
        <div className="mx-auto flex max-w-3xl flex-col gap-3 text-center">
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-brand">
            Seguridad y Respaldo
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
            La confianza de nuestros clientes es el pilar de cada producto que
            desarrollamos.
          </h2>
          <p className="text-lg leading-relaxed text-text-muted">
            Establecemos criterios rigurosos de protección y calidad que aseguran
            la máxima integridad en las operaciones de su empresa.
          </p>
        </div>

        {/* 3 tarjetas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface-low p-8 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/15 bg-brand-tint text-brand">
                <span className="material-symbols-outlined text-2xl">
                  {c.icon}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-text">
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
