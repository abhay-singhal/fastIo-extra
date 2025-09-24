import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const nav = [
  { label: "Services", href: "#services" },
  { label: "AI & Data", href: "#ai" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const href = (e.currentTarget.getAttribute("href") || "").trim();
    if (href.startsWith("#")) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const header = document.getElementById("site-header");
        const offset = (header?.offsetHeight ?? 0) + 12;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container h-16 flex items-center justify-between gap-4">
        <a href="/" aria-label="FastIO home" className="shrink-0">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleAnchorClick}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={handleAnchorClick}
            className="hidden sm:block"
          >
            <Button className="bg-gradient-to-r from-brand to-brand2 text-white shadow-lg shadow-brand/20 hover:from-brand/90 hover:to-brand2/90">
              Start a project
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
