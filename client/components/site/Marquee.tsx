import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const list = [...items, ...items];
  return (
    <div className={cn("overflow-hidden relative", className)}>
      <ul className="flex w-[200%] gap-10 whitespace-nowrap animate-marquee will-change-transform">
        {list.map((t, i) => (
          <li key={i} className="text-sm md:text-base text-muted-foreground">
            {t}
          </li>
        ))}
      </ul>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background [mask-image:linear-gradient(to_right,black,transparent_20%,transparent_80%,black)]" />
    </div>
  );
}
