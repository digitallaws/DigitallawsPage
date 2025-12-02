const clients = ["Acme", "Globex", "Umbrella", "Soylent", "Initech"];

export default function ClientsBanner() {
  return (
    <section className="mt-8">
      <div className="rounded-2xl border border-white/20 bg-white/50 backdrop-blur-md px-6 py-4 shadow">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {clients.map((c) => (
            <div key={c} className="flex items-center justify-center">
              <span className="text-graphite">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
