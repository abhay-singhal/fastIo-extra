import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cloud,
  Cog,
  Cpu,
  Database,
  Gamepad2,
  Globe2,
  Layers,
  LineChart,
  Rocket,
  Wallet,
} from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { HeroGraphics } from "@/components/site/HeroGraphics";
import { HeroThree } from "@/components/site/HeroThree";
import { CircuitBG } from "@/components/site/Circuit";
import { TechGrid } from "@/components/site/TechGrid";

export default function Index() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast.success("Thanks! We'll get back within 24 hours.");
      form.reset();
    } catch (err) {
      toast.error("Something went wrong. Please email us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        <div className="absolute inset-0">
          {/** decorative */}
          <span className="absolute inset-0 animate-spin-slow" />
        </div>
        <HeroGraphics />
        <CircuitBG />
        <TechGrid />
        <HeroThree />
        <div className="container pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-3xl">
            <Reveal className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-background/60 backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full bg-brand animate-pulse" />
              End‑to‑end product delivery
            </Reveal>
            <Reveal>
              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                We forge ideas into world‑class software.
              </h1>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 text-lg md:text-xl text-muted-foreground">
                FastIO partners with companies to design, build and scale
                complete solutions — SaaS platforms, payroll systems, betting &
                iGaming, games and high‑performance web.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand via-brand2 to-brand bg-[length:160%_160%] text-white shadow-xl shadow-brand/30 hover:shadow-brand/40 transition-all duration-500 hover:scale-[1.02]"
                  >
                    Start a project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#work">
                  <Button size="lg" variant="outline">
                    See our work
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section aria-hidden className="py-6">
        <Marquee
          items={[
            "LLMs",
            "RAG",
            "Vector DBs",
            "OpenAI",
            "Azure AI",
            "Vertex AI",
            "LangChain",
            "LlamaIndex",
            "Airflow",
            "Kafka",
            "Spark",
            "dbt",
            "Snowflake",
            "Kubernetes",
            "MLOps",
            "ETL Pipelines",
          ]}
          className="container"
        />
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="container py-16 md:py-24 scroll-mt-24 md:scroll-mt-28"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Solutions we deliver
          </h2>
          <p className="mt-3 text-muted-foreground">
            From strategy to launch to scale — one partner for the whole
            journey.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Layers className="h-6 w-6" />,
              title: "SaaS Platforms",
              desc: "Multi-tenant, secure, subscription-ready platforms built to scale.",
            },
            {
              icon: <Wallet className="h-6 w-6" />,
              title: "Payroll Systems",
              desc: "Compliant, reliable, and auditable payroll engines and portals.",
            },
            {
              icon: <Gamepad2 className="h-6 w-6" />,
              title: "Betting & iGaming",
              desc: "Real-time odds, KYC, payments, risk and compliance built‑in.",
            },
            {
              icon: <Rocket className="h-6 w-6" />,
              title: "Games",
              desc: "Engaging mobile and web games with analytics and live ops.",
            },
            {
              icon: <Cpu className="h-6 w-6" />,
              title: "AI Integrations",
              desc: "Chatbots, copilots, RAG, embeddings and vector search wired to your data.",
            },
            {
              icon: <Database className="h-6 w-6" />,
              title: "Data & MLOps",
              desc: "ETL/ELT pipelines, model serving, monitoring and CI/CD for ML.",
            },
            {
              icon: <Globe2 className="h-6 w-6" />,
              title: "Web Experiences",
              desc: "High‑performance websites that convert — from landing to CMS.",
            },
            {
              icon: <Cloud className="h-6 w-6" />,
              title: "Cloud & DevOps",
              desc: "CI/CD, observability, autoscaling and cost‑aware architectures.",
            },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group rounded-xl border bg-card/90 p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/20">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand/15 to-brand2/15 text-brand">
                  {s.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AI & DATA */}
      <section
        id="ai"
        className="bg-muted/40 py-16 md:py-24 scroll-mt-24 md:scroll-mt-28"
      >
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                AI‑first solutions
              </h2>
              <p className="mt-3 text-muted-foreground">
                We bring AI to your products responsibly: from discovery to
                model ops to secure integrations.
              </p>
              <ul className="mt-6 grid gap-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" /> RAG
                  search over your docs, data lakes and APIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />{" "}
                  Copilots and chatbots with guardrails and analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" /> ETL/ELT
                  with Airflow/Kafka, dbt transformations
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" /> MLOps:
                  model serving, monitoring and drift alerts
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative rounded-2xl border bg-card/80 p-8 overflow-hidden">
              <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-gradient-to-br from-brand/30 to-brand2/30 blur-2xl" />
              <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-br from-brand2/30 to-brand/30 blur-2xl" />
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border p-4">
                  <div className="text-xs text-muted-foreground">Model</div>
                  <div className="mt-1 font-semibold">GPT‑4o | Llama‑3</div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="text-xs text-muted-foreground">Vector DB</div>
                  <div className="mt-1 font-semibold">Pinecone | pgvector</div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="text-xs text-muted-foreground">Pipelines</div>
                  <div className="mt-1 font-semibold">
                    Airflow • Kafka • dbt
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="text-xs text-muted-foreground">Serving</div>
                  <div className="mt-1 font-semibold">Kubernetes • Ray</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="bg-muted/40 py-16 md:py-24 scroll-mt-24 md:scroll-mt-28"
      >
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How we deliver
            </h2>
            <p className="mt-3 text-muted-foreground">
              A proven, low‑risk path from idea to shipped product.
            </p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-5">
            {[
              {
                title: "Discover",
                desc: "Business goals, constraints, and success metrics.",
                icon: <LineChart className="h-5 w-5" />,
              },
              {
                title: "Design",
                desc: "UX, UI, architecture and delivery plan.",
                icon: <Cog className="h-5 w-5" />,
              },
              {
                title: "Build",
                desc: "Agile development with quality at every step.",
                icon: <Rocket className="h-5 w-5" />,
              },
              {
                title: "Launch",
                desc: "CI/CD, reliability, observability and scale.",
                icon: <Globe2 className="h-5 w-5" />,
              },
              {
                title: "Evolve",
                desc: "Roadmap execution and continuous improvement.",
                icon: <ArrowRight className="h-5 w-5" />,
              },
            ].map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-xl border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/20"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand/20 to-brand2/20 text-brand font-semibold">
                    {i + 1}
                  </span>
                  {step.icon}
                  <span>{step.title}</span>
                </div>
                <p className="mt-3 text-sm">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="container py-16 md:py-24 scroll-mt-24 md:scroll-mt-28"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Selected work
          </h2>
          <p className="mt-3 text-muted-foreground">
            Outcomes over outputs. A few examples of what we ship.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Fintech payroll suite",
              desc: "From zero to compliant payroll across 4 countries in 6 months.",
              accent: "from-brand to-brand2",
            },
            {
              title: "SaaS analytics platform",
              desc: "Real‑time dashboards and billing for 50k+ daily users.",
              accent: "from-brand2 to-brand",
            },
            {
              title: "iGaming engine",
              desc: "Modular betting engine with risk controls and KYC.",
              accent: "from-brand to-brand2",
            },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/20">
                <div
                  className={`absolute inset-0 -z-10 opacity-30 bg-gradient-to-br ${p.accent}`}
                />
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 inline-flex items-center text-sm font-medium text-foreground">
                  Case study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-muted/40 py-16 md:py-24 scroll-mt-24 md:scroll-mt-28"
      >
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Your product team, on demand
            </h2>
            <p className="mt-3 text-muted-foreground">
              We are engineers, designers and product leaders who have shipped
              at scale. We integrate with your team or deliver independently,
              always owning the outcome.
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />{" "}
                Full‑stack engineering
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Product &
                UX design
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" /> DevOps &
                SRE
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />{" "}
                Compliance & security
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-8 transition-all hover:shadow-2xl hover:shadow-brand/20">
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                { k: "+50", v: "Products shipped" },
                { k: "24/7", v: "Support & ops" },
                { k: "6 mos", v: "Avg time‑to‑market" },
                { k: "+99.9%", v: "Uptime targets" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border p-6">
                  <div className="text-2xl font-bold bg-gradient-to-r from-brand to-brand2 bg-clip-text text-transparent">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="container py-16 md:py-24 scroll-mt-24 md:scroll-mt-28"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tell us about your project
          </h2>
          <p className="mt-3 text-muted-foreground">
            We typically reply within a business day.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-brand/30 via-transparent to-brand2/30 p-[1px]">
          <form onSubmit={onSubmit} className="rounded-2xl bg-card/90 p-6 md:p-8 grid gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="name">Name</label>
              <div className="relative">
                <input required id="name" name="name" className="h-11 w-full rounded-md border bg-background pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-ring" />
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/70">👤</span>
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="email">Work email</label>
              <div className="relative">
                <input required id="email" name="email" type="email" className="h-11 w-full rounded-md border bg-background pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-ring" />
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/70">✉️</span>
              </div>
            </div>
            <div className="grid gap-2 md:col-span-2">
              <label className="text-sm" htmlFor="company">Company</label>
              <div className="relative">
                <input id="company" name="company" className="h-11 w-full rounded-md border bg-background pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-ring" />
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/70">🏢</span>
              </div>
            </div>
            <div className="grid gap-2 md:col-span-2">
              <label className="text-sm" htmlFor="message">What are you building?</label>
              <div className="relative">
                <textarea required id="message" name="message" rows={5} className="w-full rounded-md border bg-background pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" />
                <span className="pointer-events-none absolute left-3 top-3 text-muted-foreground/70">💬</span>
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <Button disabled={submitting} type="submit" className="bg-gradient-to-r from-brand via-brand2 to-brand bg-[length:200%_200%] animate-gradient-x text-white shadow-lg shadow-brand/30">
                {submitting ? "Sending..." : "Send message"}
              </Button>
              <a className="text-sm text-muted-foreground underline" href="mailto:singhalabhay19@gmail.com">or email us directly</a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
