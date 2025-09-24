export function CircuitBG() {
  return (
    <svg className="pointer-events-none absolute inset-0 -z-10 opacity-20" viewBox="0 0 1200 600" aria-hidden>
      <g stroke="hsl(var(--brand))" strokeOpacity="0.35" strokeWidth="1.2" fill="none">
        {Array.from({ length: 10 }).map((_, i) => (
          <path key={i} d={`M${120 * i} 0 V600`} />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <path key={i} d={`M0 ${100 * i} H1200`} />
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <circle key={i} cx={(i * 40) % 1200} cy={((i * 70) % 600)} r={2} />
        ))}
      </g>
    </svg>
  );
}
