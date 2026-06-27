import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import portrait from "@/assets/vaibhav-portrait.png.asset.json";
import {
  ArrowRight, Linkedin, Instagram, Mail, Dribbble,
  Sparkles, Palette, Layers, Camera, Wand2, Brush,
  Send, CalendarClock, Quote, ChevronLeft, ChevronRight,
  Youtube, Smartphone, Star, ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaibhav Mohindra — Freelance Graphic Designer" },
      { name: "description", content: "Premium freelance design portfolio: scroll-stopping thumbnails, modern UI, packaging, and high-converting ad creatives." },
      { property: "og:title", content: "Vaibhav Mohindra — Freelance Graphic Designer" },
      { property: "og:description", content: "Scroll-stopping thumbnails, modern UI, and high-converting visual design." },
    ],
  }),
  component: Index,
});

function Index() {
  useMouseGlow();
  useScrollReveal();
  return (
    <div className="relative min-h-screen overflow-x-clip text-foreground">
      <CursorGlow />
      <Nav />
      <Hero />
      <LogoMarquee />
      <About />
      <Tools />
      <FeaturedWorks />
      <ThumbnailPortfolio />
      <UIDesignPortfolio />
      <PackagingPortfolio />
      <AdvertisementPortfolio />
      <FreelanceJourney />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

/* ─────────────────────── hooks & primitives ─────────────────────── */

function useMouseGlow() {
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, []);
}

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function CursorGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          "radial-gradient(380px circle at var(--mx,50%) var(--my,50%), oklch(0.78 0.18 305 / 0.18), transparent 60%)",
      }}
    />
  );
}

function Section({
  id, eyebrow, title, subtitle, children, className = "",
}: {
  id?: string; eyebrow?: string; title?: ReactNode; subtitle?: ReactNode;
  children: ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="reveal mb-14 max-w-3xl">
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand" /> {eyebrow}
            </span>
          )}
          {title && <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setV(Math.round(end * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return <span ref={ref}>{v}{suffix}</span>;
}

/* ─────────────────────── nav ─────────────────────── */

function Nav() {
  const links = [
    ["About", "#about"], ["Work", "#work"], ["Process", "#process"], ["Contact", "#contact"],
  ] as const;
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="glass-strong flex w-full max-w-3xl items-center justify-between rounded-full px-4 py-2.5 sm:px-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-primary-foreground">VM</span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">Vaibhav<span className="text-muted-foreground">.design</span></span>
        </a>
        <ul className="hidden gap-1 md:flex">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">
          Hire me <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}

/* ─────────────────────── hero ─────────────────────── */

const stats = [
  { n: 15, s: "+", l: "Freelance Projects" },
  { n: 10, s: "+", l: "Happy Clients" },
  { n: 3, s: "+", l: "Design Categories" },
  { n: 2, s: "+", l: "Years Experience" },
];

const socials = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Brush, href: "#", label: "Behance" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Dribbble, href: "#", label: "Dribbble" },
  { Icon: Mail, href: "#contact", label: "Email" },
];

function Hero() {
  return (
    <section id="top" className="relative z-10 pt-36 sm:pt-40">
      <div className="absolute -top-10 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[160px]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        {/* portrait */}
        <div className="reveal relative order-2 mx-auto lg:order-1">
          <div className="relative h-[420px] w-[340px] sm:h-[520px] sm:w-[420px]">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-brand opacity-30 blur-3xl" />
            <div className="gradient-border absolute inset-0 overflow-hidden rounded-[2.5rem] glass glow">
              <img
                src={portrait.url}
                alt="Vaibhav Mohindra, freelance graphic designer"
                width={420}
                height={520}
                className="h-full w-full object-cover float-slow"
              />
            </div>
            <FloatingTag className="-left-6 top-10" icon={<Palette className="h-3.5 w-3.5" />} text="Brand Visuals" />
            <FloatingTag className="-right-4 top-1/3" icon={<Youtube className="h-3.5 w-3.5" />} text="Thumbnails" />
            <FloatingTag className="-left-2 bottom-12" icon={<Smartphone className="h-3.5 w-3.5" />} text="UI Design" />
          </div>
        </div>

        {/* copy */}
        <div className="order-1 lg:order-2">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Available for freelance
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Vaibhav <span className="text-gradient">Mohindra</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Freelance Graphic Designer · Thumbnail Designer · UI Designer · Brand Visual Creator
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              I help creators, startups, and brands increase engagement through high-converting visual
              designs, scroll-stopping thumbnails, modern UI interfaces, and impactful advertising creatives.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground glow glow-hover">
                View Portfolio
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-medium transition hover:bg-white/10">
                Hire Me <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {socials.map(({ Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="group grid h-11 w-11 place-items-center rounded-full glass transition hover:scale-110 hover:border-white/20 hover:shadow-[0_0_24px_-4px_oklch(0.78_0.18_305/0.7)]"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 glow-hover">
                <div className="text-3xl font-semibold tracking-tight text-foreground">
                  <CountUp end={s.n} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs leading-snug text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingTag({ className = "", icon, text }: { className?: string; icon: ReactNode; text: string }) {
  return (
    <div className={`absolute z-10 inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-xs font-medium float-slow ${className}`}>
      <span className="text-brand">{icon}</span>{text}
    </div>
  );
}

/* ─────────────────────── logo marquee ─────────────────────── */

function LogoMarquee() {
  const items = ["Behance", "Dribbble", "YouTube", "Notion", "Awwwards", "Figma Community", "Product Hunt", "Webflow"];
  const row = [...items, ...items];
  return (
    <div className="relative z-10 overflow-hidden border-y border-white/5 py-6">
      <div className="flex w-max gap-12 marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="text-2xl font-semibold uppercase tracking-[0.18em] text-muted-foreground/50">
            {t} <span className="mx-6 text-brand/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────── about ─────────────────────── */

function About() {
  const items = [
    { Icon: Palette, t: "Visual Communication", d: "Translating complex ideas into clear, magnetic visuals that connect with audiences." },
    { Icon: Layers, t: "Problem Solving", d: "Every brief is a problem — I design solutions, not decorations." },
    { Icon: Wand2, t: "Client-Focused Workflow", d: "Transparent process, fast turnarounds, and revisions until it feels right." },
    { Icon: Camera, t: "Detail Obsessed", d: "Pixel-perfect alignment, typography rhythm, and color tension — the small things compound." },
  ];
  return (
    <Section id="about" eyebrow="About" title={<>Who <span className="text-gradient">I Am</span></>}
      subtitle="A freelance graphic designer obsessed with the intersection of aesthetics and conversion. I build visuals that don't just look beautiful — they move metrics.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ Icon, t, d }) => (
          <div key={t} className="reveal glass rounded-3xl p-6 glow-hover">
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────── tools ─────────────────────── */

const tools = [
  { name: "Adobe Photoshop", short: "Ps", desc: "Photo manipulation, thumbnails, composites.", level: 95, color: "from-sky-500 to-indigo-600" },
  { name: "Figma", short: "Fg", desc: "UI/UX, prototypes, design systems.", level: 90, color: "from-pink-500 to-violet-500" },
  { name: "Canva", short: "Cv", desc: "Rapid social creative & templates.", level: 95, color: "from-cyan-400 to-blue-600" },
];

function Tools() {
  return (
    <Section eyebrow="Toolkit" title={<>Tools I <span className="text-gradient">Work With</span></>}
      subtitle="The craft tools I lean on daily to ship pixel-perfect, on-brand visuals.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => (
          <div key={t.name} className="reveal group relative overflow-hidden rounded-3xl glass p-6 glow-hover">
            <div className="flex items-center gap-4">
              <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${t.color} text-lg font-bold text-white shadow-lg`}>
                {t.short}
              </div>
              <div className="min-w-0">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.desc}</div>
              </div>
            </div>
            <div className="mt-5">
              <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
                <span>Proficiency</span><span>{t.level}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <div className="h-full rounded-full bg-gradient-brand transition-all duration-1000 group-hover:opacity-90" style={{ width: `${t.level}%` }} />
              </div>
            </div>
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/20 opacity-0 blur-3xl transition group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────── featured works ─────────────────────── */

type Work = {
  title: string; category: string; client: string; objective: string;
  tools: string; result: string; gradient: string;
};

const featured: Work[] = [
  { title: "AI Revolution Series", category: "YouTube Thumbnails", client: "Tech Creator", objective: "Boost CTR for AI explainer videos", tools: "Photoshop, Illustrator", result: "+182% CTR uplift", gradient: "from-violet-600 via-fuchsia-600 to-rose-500" },
  { title: "FinPay Mobile Banking", category: "UI Design", client: "Fintech Startup", objective: "Modern banking dashboard redesign", tools: "Figma, Photoshop", result: "Investor demo-ready MVP", gradient: "from-emerald-500 via-teal-500 to-cyan-600" },
  { title: "Cold Brew Coffee Co.", category: "Packaging Design", client: "DTC Beverage Brand", objective: "Premium shelf presence", tools: "Illustrator, Photoshop", result: "Launched in 40+ stores", gradient: "from-amber-500 via-orange-600 to-red-600" },
  { title: "Black Friday Mega Sale", category: "Ad Campaign", client: "E-commerce", objective: "Drive 7-day flash sale traffic", tools: "Photoshop, Figma", result: "3.4× ROAS on paid ads", gradient: "from-sky-500 via-indigo-600 to-purple-700" },
  { title: "PulseFit Workout App", category: "UI Design", client: "Health & Fitness", objective: "Habit-forming workout flow", tools: "Figma, XD", result: "92% completion rate", gradient: "from-lime-500 via-emerald-500 to-teal-600" },
  { title: "Aura Cosmetics Box", category: "Packaging Design", client: "Beauty Brand", objective: "Unboxing-first identity", tools: "Illustrator, Photoshop", result: "Featured on Behance", gradient: "from-pink-500 via-rose-500 to-fuchsia-600" },
];

function FeaturedWorks() {
  return (
    <Section id="work" eyebrow="Featured Work" title={<>Explore <span className="text-gradient">My Work</span></>}
      subtitle="A collection of designs crafted to increase engagement, improve user experience, and strengthen brand identity.">
      <div className="-mx-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8">
        <div className="flex w-max gap-5">
          {featured.map((w) => (
            <article key={w.title} className="group relative h-[420px] w-[320px] shrink-0 overflow-hidden rounded-3xl glass glow-hover sm:w-[380px]">
              <div className={`absolute inset-0 bg-gradient-to-br ${w.gradient}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
              <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">{w.category}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-2xl font-semibold text-white drop-shadow">{w.title}</h3>
                <p className="mt-1 text-sm text-white/80">{w.client}</p>
              </div>
              <div className="absolute inset-0 flex translate-y-4 flex-col justify-end bg-gradient-to-t from-black/90 via-black/60 to-black/0 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="space-y-2 text-sm text-white/90">
                  <Detail k="Objective" v={w.objective} />
                  <Detail k="Tools" v={w.tools} />
                  <Detail k="Result" v={w.result} />
                </div>
                <button className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">
                  View Project <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">← scroll horizontally to explore →</p>
    </Section>
  );
}

function Detail({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="min-w-[72px] text-xs uppercase tracking-wider text-white/60">{k}</span>
      <span className="flex-1 text-sm">{v}</span>
    </div>
  );
}

/* ─────────────────────── thumbnails ─────────────────────── */

const thumbCats = ["All", "Educational", "Finance", "Technology", "Podcast", "Gaming", "Motivation", "Business", "Personal Branding"];
const thumbs = [
  { t: "AI Revolution Explained", c: "Technology", g: "from-indigo-600 to-cyan-500" },
  { t: "Stock Market Secrets", c: "Finance", g: "from-emerald-600 to-lime-500" },
  { t: "Future of Technology", c: "Technology", g: "from-violet-600 to-fuchsia-500" },
  { t: "Millionaire Habits", c: "Motivation", g: "from-amber-500 to-red-600" },
  { t: "Podcast Growth Hacks", c: "Podcast", g: "from-rose-500 to-pink-700" },
  { t: "Business Scaling Blueprint", c: "Business", g: "from-blue-600 to-indigo-700" },
  { t: "Gaming Highlights", c: "Gaming", g: "from-fuchsia-600 to-purple-800" },
  { t: "Personal Brand Masterclass", c: "Personal Branding", g: "from-orange-500 to-pink-600" },
  { t: "Startup Journey", c: "Business", g: "from-cyan-500 to-blue-700" },
  { t: "Marketing Psychology", c: "Educational", g: "from-teal-500 to-emerald-700" },
  { t: "Design Career Tips", c: "Educational", g: "from-pink-500 to-rose-700" },
  { t: "Productivity Formula", c: "Motivation", g: "from-yellow-500 to-orange-600" },
];

function ThumbnailPortfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? thumbs : thumbs.filter((t) => t.c === active);
  return (
    <Section eyebrow="YouTube" title={<>Thumbnail <span className="text-gradient">Designs</span></>}
      subtitle="CTR-optimized, scroll-stopping designs that turn impressions into views.">
      <div className="reveal mb-8 flex flex-wrap gap-2">
        {thumbCats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              active === c
                ? "bg-gradient-brand text-primary-foreground glow"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <div key={t.t} className="group relative aspect-video overflow-hidden rounded-2xl glass glow-hover">
            <div className={`absolute inset-0 bg-gradient-to-br ${t.g}`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
            <div className="absolute left-4 top-4">
              <span className="rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">{t.c}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="text-2xl font-extrabold leading-tight text-white drop-shadow-lg">{t.t}</div>
            </div>
            <div className="absolute inset-0 flex items-end bg-black/70 p-4 opacity-0 transition group-hover:opacity-100">
              <div className="space-y-1 text-xs text-white/90">
                <div>✦ CTR Optimized Design</div>
                <div>✦ Custom Typography</div>
                <div>✦ High Engagement Visuals</div>
                <div>✦ Crafted in Photoshop</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────── UI design ─────────────────────── */

const uiProjects = [
  { t: "Food Delivery App", g: "from-orange-500 via-red-500 to-rose-600" },
  { t: "Fitness Tracker App", g: "from-emerald-500 via-teal-500 to-cyan-600" },
  { t: "Banking Dashboard", g: "from-indigo-500 via-violet-600 to-purple-700" },
  { t: "E-commerce Store", g: "from-pink-500 via-rose-500 to-red-600" },
  { t: "Travel Booking App", g: "from-sky-500 via-blue-600 to-indigo-700" },
  { t: "Learning Platform", g: "from-amber-500 via-orange-500 to-pink-600" },
];

function UIDesignPortfolio() {
  return (
    <Section eyebrow="Product" title={<>UI Design <span className="text-gradient">Projects</span></>}
      subtitle="Interfaces built around real user goals — clean hierarchy, satisfying motion, frictionless flows.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {uiProjects.map((p, i) => (
          <div key={p.t} className="group relative overflow-hidden rounded-3xl glass p-6 glow-hover">
            {/* phone mockup */}
            <div className="relative mx-auto mb-5 h-[280px] w-[160px] float-slow" style={{ animationDelay: `${i * 0.3}s` }}>
              <div className="absolute inset-0 rounded-[2.2rem] border-2 border-white/15 bg-black p-1.5 shadow-2xl">
                <div className={`relative h-full w-full overflow-hidden rounded-[1.8rem] bg-gradient-to-br ${p.g}`}>
                  <div className="absolute left-1/2 top-1 h-1.5 w-12 -translate-x-1/2 rounded-full bg-black/40" />
                  <div className="absolute inset-x-4 top-6 space-y-2">
                    <div className="h-2 w-12 rounded-full bg-white/70" />
                    <div className="h-3 w-24 rounded-full bg-white/90" />
                  </div>
                  <div className="absolute inset-x-4 top-20 space-y-2">
                    <div className="h-14 rounded-xl bg-white/25 backdrop-blur" />
                    <div className="h-10 rounded-xl bg-white/15 backdrop-blur" />
                    <div className="h-10 rounded-xl bg-white/15 backdrop-blur" />
                    <div className="h-8 rounded-xl bg-white/15 backdrop-blur" />
                  </div>
                  <div className="absolute inset-x-3 bottom-3 h-10 rounded-2xl bg-white/30 backdrop-blur" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">{p.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">Figma · Photoshop</p>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-card/95 p-5 backdrop-blur transition-transform duration-500 group-hover:translate-y-0">
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div><span className="text-foreground">UX Goal:</span> Frictionless task completion</div>
                <div><span className="text-foreground">Process:</span> Research → Wireframe → Prototype</div>
                <div><span className="text-foreground">Color System:</span> Accessible, on-brand</div>
                <div><span className="text-foreground">Fidelity:</span> High-fidelity prototype</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────── packaging ─────────────────────── */

const packaging = [
  { t: "Cold Brew Coffee", g: "from-amber-700 via-orange-700 to-red-800", icon: "☕" },
  { t: "Volt Energy Drink", g: "from-yellow-400 via-amber-500 to-orange-600", icon: "⚡" },
  { t: "Organic Harvest", g: "from-emerald-600 via-green-700 to-lime-700", icon: "🌱" },
  { t: "Aura Cosmetic Box", g: "from-pink-500 via-rose-500 to-fuchsia-600", icon: "✨" },
  { t: "Crunch Snacks", g: "from-orange-500 via-red-500 to-pink-600", icon: "🥨" },
  { t: "Premium Tea Co.", g: "from-teal-600 via-emerald-700 to-cyan-700", icon: "🍵" },
];

function PackagingPortfolio() {
  return (
    <Section eyebrow="Print" title={<>Packaging <span className="text-gradient">Design</span></>}
      subtitle="Shelf-stopping packaging concepts built around brand strategy and tactile detail.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {packaging.map((p) => (
          <div key={p.t} className="group relative h-72 overflow-hidden rounded-3xl glass glow-hover">
            <div className={`absolute inset-0 bg-gradient-to-br ${p.g}`} />
            {/* box mockup */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-44 w-32 -rotate-6 rounded-md bg-gradient-to-b from-white/30 to-black/30 shadow-2xl backdrop-blur-sm transition group-hover:rotate-0 group-hover:scale-110">
                <div className="absolute inset-x-3 top-4 text-center text-3xl">{p.icon}</div>
                <div className="absolute inset-x-3 top-16 h-px bg-white/40" />
                <div className="absolute inset-x-3 top-20 text-center text-[10px] font-bold uppercase tracking-wider text-white/90">{p.t}</div>
                <div className="absolute inset-x-4 bottom-4 h-1 rounded bg-white/40" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-lg font-semibold text-white">{p.t}</h3>
            </div>
            <div className="absolute inset-0 flex items-end bg-black/80 p-5 opacity-0 transition group-hover:opacity-100">
              <ul className="space-y-1 text-xs text-white/90">
                <li>✦ Packaging Concept</li>
                <li>✦ Brand Strategy</li>
                <li>✦ Print Specifications</li>
                <li>✦ Visual Identity</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────── ads ─────────────────────── */

const ads = [
  { t: "Social Media Ads", g: "from-fuchsia-600 to-pink-600" },
  { t: "Product Launch Campaign", g: "from-indigo-600 to-blue-700" },
  { t: "Promotional Posters", g: "from-orange-500 to-red-700" },
  { t: "Sale Banners", g: "from-emerald-500 to-teal-700" },
  { t: "Event Advertisements", g: "from-violet-600 to-purple-800" },
  { t: "Brand Awareness Campaigns", g: "from-cyan-500 to-blue-700" },
];

function AdvertisementPortfolio() {
  return (
    <Section eyebrow="Performance" title={<>Advertisement <span className="text-gradient">Creatives</span></>}
      subtitle="Conversion-first ad creatives engineered to stop the scroll and drive action.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ads.map((a) => (
          <div key={a.t} className="group relative aspect-[4/5] overflow-hidden rounded-3xl glass glow-hover">
            <div className={`absolute inset-0 bg-gradient-to-br ${a.g}`} />
            <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:18px_18px] opacity-40" />
            <div className="absolute left-5 right-5 top-5 space-y-2">
              <div className="inline-block rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">Limited Time</div>
              <div className="text-4xl font-black leading-none text-white drop-shadow-lg">SHOP NOW</div>
              <div className="text-sm text-white/90">Up to 60% Off</div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
                <div className="text-sm font-semibold text-white">{a.t}</div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-end bg-black/80 p-5 opacity-0 transition group-hover:opacity-100">
              <ul className="space-y-1 text-xs text-white/90">
                <li>✦ Campaign Goal: Conversions</li>
                <li>✦ Target Audience: Defined personas</li>
                <li>✦ Conversion Focus: CTR & ROAS</li>
                <li>✦ Creative Strategy: Hook + offer + CTA</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────── journey ─────────────────────── */

const journey = [
  { y: "2023", t: "Started Freelancing", d: "Took the leap into full-time freelance design." },
  { y: "2023", t: "First Paid Client", d: "Delivered a brand identity package that became a long-term retainer." },
  { y: "2024", t: "Expanded into UI Design", d: "Started shipping product UI for early-stage startups." },
  { y: "2024", t: "Brand Identity Projects", d: "Crafted visual systems for 5+ DTC brands." },
  { y: "2025", t: "Advertising Campaign Work", d: "Led performance creative for paid social campaigns." },
];
const journeyStats = [
  { n: 15, s: "+", l: "Completed Projects" },
  { n: 10, s: "+", l: "Returning Clients" },
  { n: 100, s: "+", l: "Design Deliverables" },
  { n: 95, s: "%", l: "Client Satisfaction" },
];

function FreelanceJourney() {
  return (
    <Section eyebrow="Journey" title={<>Freelance <span className="text-gradient">Journey</span></>}
      subtitle="Two years of compounding craft, client wins, and creative range.">
      <div className="reveal mb-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {journeyStats.map((s) => (
          <div key={s.l} className="glass rounded-2xl p-5 glow-hover">
            <div className="text-4xl font-semibold text-gradient">
              <CountUp end={s.n} suffix={s.s} />
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand/70 via-brand-2/40 to-transparent md:left-1/2" />
        <ul className="space-y-8">
          {journey.map((m, i) => (
            <li key={m.t} className={`reveal relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>div]:col-start-2" : ""}`}>
              <div className="relative pl-12 md:pl-0">
                <span className="absolute -left-0.5 top-1.5 grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-xs font-bold text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={`glass rounded-2xl p-5 ${i % 2 ? "md:ml-12" : "md:mr-12"}`}>
                  <div className="text-xs uppercase tracking-wider text-brand">{m.y}</div>
                  <div className="mt-1 text-lg font-semibold">{m.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ─────────────────────── process ─────────────────────── */

const steps = [
  { n: "01", t: "Discovery", d: "Understanding client goals, audience and brand voice." },
  { n: "02", t: "Research", d: "Analyzing audience, competitors and design references." },
  { n: "03", t: "Design", d: "Creating visually compelling, on-brand concepts." },
  { n: "04", t: "Delivery", d: "Final polished assets, source files and revisions." },
];

function Process() {
  return (
    <Section id="process" eyebrow="Process" title={<>My Design <span className="text-gradient">Process</span></>}
      subtitle="A simple, transparent four-step workflow that consistently produces work clients love.">
      <div className="relative grid gap-5 lg:grid-cols-4">
        <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent lg:block" />
        {steps.map((s) => (
          <div key={s.n} className="reveal relative">
            <div className="glass rounded-3xl p-6 glow-hover">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-sm font-bold text-primary-foreground">{s.n}</div>
              <h3 className="text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────── testimonials ─────────────────────── */

const testimonials = [
  { n: "Arjun Kapoor", c: "Founder · Lumen AI", q: "Vaibhav's thumbnails doubled our CTR within two weeks. He just gets attention.", i: "AK" },
  { n: "Priya Shah", c: "Marketing Lead · NorthBean", q: "Our packaging redesign felt premium and shelf-ready. Sales jumped 38% the next quarter.", i: "PS" },
  { n: "Daniel Rivera", c: "CEO · PulseFit", q: "Easily the most thoughtful product designer I've worked with as a freelancer. Highly recommend.", i: "DR" },
  { n: "Neha Verma", c: "Creator · CreatorClub", q: "Reliable, creative, and fast. Vaibhav has become our go-to design partner.", i: "NV" },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <Section eyebrow="Testimonials" title={<>Client <span className="text-gradient">Feedback</span></>}
      subtitle="What founders, creators and marketers say after we ship.">
      <div className="reveal relative mx-auto max-w-3xl">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 glow">
          <Quote className="h-10 w-10 text-brand" />
          <p className="mt-6 text-xl leading-relaxed sm:text-2xl">{t.q}</p>
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand font-bold text-primary-foreground">{t.i}</div>
              <div>
                <div className="font-semibold">{t.n}</div>
                <div className="text-sm text-muted-foreground">{t.c}</div>
              </div>
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-brand text-brand" />)}
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-1.5">
            {testimonials.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gradient-brand" : "w-1.5 bg-white/15"}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)}
              className="grid h-10 w-10 place-items-center rounded-full glass transition hover:bg-white/10" aria-label="Previous">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => setI((i + 1) % testimonials.length)}
              className="grid h-10 w-10 place-items-center rounded-full glass transition hover:bg-white/10" aria-label="Next">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────── contact ─────────────────────── */

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact"
      title={<>Let's Create <span className="text-gradient">Something Great</span></>}
      subtitle="Have a project in mind? Let's discuss how strategic design can help your brand stand out.">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={(e) => { e.preventDefault(); }}
          className="reveal glass-strong rounded-3xl p-6 sm:p-8 glow"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name"><Input placeholder="Your full name" className="h-12 rounded-xl border-white/10 bg-white/5" /></Field>
            <Field label="Email"><Input type="email" placeholder="you@brand.com" className="h-12 rounded-xl border-white/10 bg-white/5" /></Field>
          </div>
          <Field label="Project Type" className="mt-4">
            <Input placeholder="Thumbnails / UI / Packaging / Ads" className="h-12 rounded-xl border-white/10 bg-white/5" />
          </Field>
          <Field label="Message" className="mt-4">
            <Textarea rows={5} placeholder="Tell me about your project, timeline and goals…" className="rounded-xl border-white/10 bg-white/5" />
          </Field>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button type="submit" className="h-12 rounded-full bg-gradient-brand px-6 text-primary-foreground glow glow-hover hover:opacity-90">
              <Send className="mr-2 h-4 w-4" /> Send Inquiry
            </Button>
            <Button type="button" variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 hover:bg-white/10">
              <CalendarClock className="mr-2 h-4 w-4" /> Schedule Discussion
            </Button>
          </div>
        </form>

        <div className="reveal space-y-4">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg font-semibold">Direct line</h3>
            <p className="mt-2 text-sm text-muted-foreground">Prefer to skip the form? Reach out directly — typical reply within 24 hours.</p>
            <a href="mailto:hello@vaibhav.design" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand">
              <Mail className="h-4 w-4" /> hello@vaibhav.design
            </a>
          </div>
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg font-semibold">Find me online</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {socials.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a href={href} aria-label={label}
                    className="group inline-flex items-center gap-2 rounded-full glass px-3.5 py-2 text-xs text-muted-foreground transition hover:text-foreground">
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl glass p-6">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/30 blur-3xl" />
            <div className="relative">
              <h3 className="text-lg font-semibold">Currently booking</h3>
              <p className="mt-2 text-sm text-muted-foreground">Now accepting 2 new freelance projects for this quarter.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

/* ─────────────────────── footer ─────────────────────── */

function Footer() {
  return (
    <footer className="relative z-10 mt-12 overflow-hidden border-t border-white/10">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(40rem 20rem at 10% 100%, oklch(0.78 0.18 305 / 0.45), transparent 60%), radial-gradient(40rem 20rem at 90% 100%, oklch(0.74 0.17 220 / 0.45), transparent 60%)",
          animation: "blob 18s ease-in-out infinite",
        }}
      />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand font-bold text-primary-foreground">VM</span>
            <span className="text-lg font-semibold">Vaibhav Mohindra</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Designing visual identities, thumbnails, UI and ads that earn attention and drive results.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#work" className="hover:text-foreground">Work</a></li>
            <li><a href="#process" className="hover:text-foreground">Process</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Connect</h4>
          <ul className="flex flex-wrap gap-2">
            {socials.map(({ Icon, label, href }) => (
              <li key={label}>
                <a href={href} aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full glass transition hover:bg-white/10 hover:text-foreground">
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Vaibhav Mohindra. All rights reserved.</p>
          <p>Crafted with intention · Designed in dark mode</p>
        </div>
      </div>
    </footer>
  );
}
