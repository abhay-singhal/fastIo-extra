export function HeroGraphics() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-brand/25 to-brand2/25 blur-3xl" />
      <svg
        className="absolute right-10 top-10 h-56 w-56 opacity-40"
        viewBox="0 0 200 200"
        fill="none"
      >
        <defs>
          <radialGradient
            id="g"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(100 100) rotate(90) scale(100)"
          >
            <stop offset="0%" stopColor="hsl(var(--brand))" />
            <stop
              offset="100%"
              stopColor="hsl(var(--brand-2))"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="96" stroke="url(#g)" strokeWidth="2" />
        <g className="origin-center animate-orbit">
          <circle cx="100" cy="10" r="4" fill="hsl(var(--brand))" />
          <circle cx="190" cy="100" r="3" fill="hsl(var(--brand-2))" />
          <circle cx="100" cy="190" r="3" fill="hsl(var(--brand))" />
          <circle cx="10" cy="100" r="4" fill="hsl(var(--brand-2))" />
        </g>
      </svg>
      <svg
        className="absolute bottom-10 left-8 h-48 w-48 opacity-30"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle
          cx="100"
          cy="100"
          r="80"
          className="stroke-brand/40"
          strokeDasharray="6 6"
        />
        <circle
          cx="100"
          cy="100"
          r="50"
          className="stroke-brand2/40"
          strokeDasharray="4 8"
        />
      </svg>
    </div>
  );
}
