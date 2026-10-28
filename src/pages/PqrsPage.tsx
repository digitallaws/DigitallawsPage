import { useState, type FormEvent } from "react";

const highlights = [
  {
    icon: "verified_user",
    title: "SLA Legal Garantizado",
    desc: "Respuesta hasta 15 días hábiles según la normativa aplicable.",
  },
  {
    icon: "fingerprint",
    title: "Trazabilidad Inmutable",
    desc: "Número único de radicado para el seguimiento de su caso.",
  },
  {
    icon: "headset_mic",
    title: "Gestión Especializada",
    desc: "Atención directa por equipos técnicos y legales.",
  },
];

const requestTypes = [
  "Petición (Derecho de Petición)",
  "Queja (Inconformidad con la atención)",
  "Reclamo (Deficiencia en servicio o plataforma)",
  "Sugerencia (Propuesta de mejora)",
];

const countries = [
  "Colombia",
  "México",
  "Chile",
  "Perú",
  "España",
  "Estados Unidos",
];

function genRadicado() {
  const year = new Date().getFullYear();
  const n = Math.floor(1000 + Math.random() * 9000);
  return `ALWS-PQRS-${year}-${n}`;
}

export default function PqrsPage() {
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(genRadicado());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="hero-bg relative w-full overflow-hidden border-b border-border py-14 lg:py-16">
        <div aria-hidden className="hero-ambient" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
          <span className="mx-auto w-fit rounded-full border border-brand/25 bg-brand-tint px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-brand">
            Atención y Servicio al Cliente
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-text md:text-4xl">
            Peticiones, Quejas, Reclamos y Sugerencias
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-muted">
            Garantizamos una atención oportuna, rigurosa y transparente a las
            solicitudes de nuestros usuarios, aliados y organizaciones.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-5 text-center shadow-sm"
              >
                <span className="material-symbols-outlined text-2xl text-brand">
                  {h.icon}
                </span>
                <span className="text-sm font-bold text-text">{h.title}</span>
                <span className="text-xs leading-relaxed text-text-subtle">
                  {h.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario / Confirmación */}
      <section className="w-full bg-surface-low py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          {submitted ? (
            <Confirmation radicado={submitted} onReset={() => setSubmitted(null)} />
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8"
            >
              {/* Paso 1 */}
              <fieldset className="flex flex-col gap-5">
                <legend className="mb-2 flex items-center gap-2 font-display text-lg font-bold text-text">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm text-white">
                    1
                  </span>
                  Datos de identificación
                </legend>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Razón social / Nombre" name="nombre" required />
                  <Field label="NIT / Documento" name="documento" required />
                  <Field
                    label="Correo electrónico"
                    name="correo"
                    type="email"
                    required
                  />
                  <Field
                    label="Teléfono / WhatsApp"
                    name="telefono"
                    type="tel"
                    required
                  />
                  <Select label="País" name="pais" options={countries} required />
                  <Field label="Ciudad / Municipio" name="ciudad" required />
                </div>
              </fieldset>

              {/* Paso 2 */}
              <fieldset className="flex flex-col gap-5 border-t border-border pt-6">
                <legend className="mb-2 flex items-center gap-2 font-display text-lg font-bold text-text">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm text-white">
                    2
                  </span>
                  Detalle del requerimiento
                </legend>
                <Select
                  label="Tipo de solicitud"
                  name="tipo"
                  options={requestTypes}
                  required
                />
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="detalle"
                    className="text-sm font-medium text-text"
                  >
                    Descripción del caso{" "}
                    <span className="text-brand">*</span>
                  </label>
                  <textarea
                    id="detalle"
                    name="detalle"
                    required
                    rows={5}
                    placeholder="Describa su solicitud con el mayor detalle posible…"
                    className="rounded-lg border border-border bg-surface-low px-3 py-2.5 text-sm text-text outline-none transition-colors placeholder:text-text-subtle focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <label className="flex items-start gap-2 text-sm text-text-muted">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-[color:var(--color-brand)]"
                  />
                  Autorizo el tratamiento de mis datos conforme a la Política de
                  Privacidad.
                </label>
              </fieldset>

              <button
                type="submit"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/25"
              >
                <span>Radicar solicitud</span>
                <span className="material-symbols-outlined text-base">
                  send
                </span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function Confirmation({
  radicado,
  onReset,
}: {
  radicado: string;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-10 text-center shadow-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-success)]/15 text-[color:var(--color-success)]">
        <span className="material-symbols-outlined text-4xl">task_alt</span>
      </div>
      <h2 className="font-display text-2xl font-bold text-text">
        ¡Solicitud radicada exitosamente!
      </h2>
      <p className="max-w-md text-sm text-text-muted">
        Su trámite ha sido registrado. Hemos enviado una constancia formal a su
        correo electrónico.
      </p>
      <div className="mt-2 flex flex-col items-center gap-1 rounded-xl border border-brand/25 bg-brand-tint px-6 py-4">
        <span className="text-[0.6875rem] font-semibold uppercase tracking-wide text-brand">
          Código de radicado oficial
        </span>
        <span className="font-mono text-lg font-bold text-brand">
          {radicado}
        </span>
      </div>
      <button
        onClick={onReset}
        className="mt-2 inline-flex items-center gap-2 rounded-lg border border-border bg-surface-low px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-surface-high"
      >
        <span className="material-symbols-outlined text-base">add</span>
        Radicar otro requerimiento
      </button>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-text">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-border bg-surface-low px-3 py-2.5 text-sm text-text outline-none transition-colors placeholder:text-text-subtle focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-text">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="rounded-lg border border-border bg-surface-low px-3 py-2.5 text-sm text-text outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
      >
        <option value="" disabled>
          Seleccione…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
