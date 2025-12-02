export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="rounded-2xl border border-white/20 bg-white/50 backdrop-blur-md px-6 py-6 text-center text-graphite">
        <p>
          © {new Date().getFullYear()} DigitalLaws. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
