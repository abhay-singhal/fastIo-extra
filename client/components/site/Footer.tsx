import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t mt-24">
      <div className="container py-12 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <Logo className="text-3xl" />
          <p className="text-muted-foreground mt-2 max-w-xl">
            End-to-end software solutions across SaaS, payroll, iGaming, games
            and web. We architect, build, ship and scale.
          </p>
        </div>
        <div className="md:justify-self-end text-sm text-muted-foreground">
          <p>
            Contact:{" "}
            <a
              className="underline hover:text-foreground"
              href="mailto:singhalabhay19@gmail.com"
            >
              business@fastio.in
            </a>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} FastIO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
