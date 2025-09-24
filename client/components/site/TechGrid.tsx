export function TechGrid() {
  const lines = Array.from({ length: 12 }).map((_, i) => (
    <line
      key={i}
      x1={-100}
      y1={i * 60}
      x2={1600}
      y2={i * 60 - 200}
      className="stroke-[1.5] [stroke-dasharray:8_12] animate-dash"
    />
  ));

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-25"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--brand))" stopOpacity="0.55" />
          <stop offset="100%" stopColor="hsl(var(--brand-2))" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <g stroke="url(#lg)" fill="none">
        {lines}
      </g>
    </svg>
  );
}
