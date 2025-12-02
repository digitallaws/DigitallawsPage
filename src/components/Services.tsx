const services = [
  {
    title: "Consultoría Legal Digital",
    desc: "Asesoría en transformación digital y cumplimiento normativo.",
  },
  {
    title: "Protección de Datos",
    desc: "Implementación de políticas y auditorías de privacidad.",
  },
  {
    title: "Compliance y Riesgos",
    desc: "Gobierno corporativo, gestión de riesgos y cumplimiento regulatorio.",
  },
  {
    title: "Contratos Tecnológicos",
    desc: "Redacción y revisión de contratos de software y servicios IT.",
  },
  {
    title: "Propiedad Intelectual",
    desc: "Registro y defensa de marcas, patentes y derechos de autor.",
  },
  {
    title: "Formación y Capacitación",
    desc: "Programas de entrenamiento para equipos y liderazgo.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mt-10">
      <h2 className="text-center text-2xl font-bold text-navy">Servicios</h2>
      <p className="mt-2 text-center text-steel">
        Soluciones empresariales para tu transformación.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-white/20 bg-white/60 backdrop-blur-md p-5 shadow"
          >
            <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
            <p className="mt-2 text-graphite">{s.desc}</p>
            <div className="mt-4">
              <a
                href="#contact"
                className="inline-flex rounded-xl bg-brand px-4 py-2 text-white hover:bg-steel"
              >
                Solicitar información
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
