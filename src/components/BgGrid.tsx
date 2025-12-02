export default function BgGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-20 -z-10 h-[calc(100svh-5rem)]"
    >
      <div className="absolute inset-0 bg-hero-gradient" />
    </div>
  );
}
