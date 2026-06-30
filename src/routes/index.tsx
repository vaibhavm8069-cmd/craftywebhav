import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import portrait from "@/assets/vaibhav-portrait.png.asset.json";
import uiSilver from "@/assets/ui-silver.jpg.asset.json";
import uiGold from "@/assets/ui-gold.jpg.asset.json";
import uiNike from "@/assets/ui-nike.jpg.asset.json";
import uiXroller from "@/assets/ui-xroller.jpg.asset.json";
import uiCravetoShowcase from "@/assets/ui-craveto-showcase.png.asset.json";
import thumbnail1 from "@/assets/thumbnail-1.png.asset.json";
import thumbnail3 from "@/assets/thumbnail-3.png.asset.json";
import thumbnail4 from "@/assets/thumbnail-4.png.asset.json";
import thumbnail5 from "@/assets/thumbnail-5.png.asset.json";
import thumbnail6 from "@/assets/thumbnail-6.png.asset.json";
import thumbnail7 from "@/assets/thumbnail-7.png.asset.json";
import thumbnail8 from "@/assets/thumbnail-8.png.asset.json";
import thumbnail9 from "@/assets/thumbnail-9.png.asset.json";
import thumbnail10 from "@/assets/thumbnail-10.png.asset.json";
import thumbnailWebDesign from "@/assets/thumbnail-web-design.png.asset.json";
import posterPizza from "@/assets/poster-pizza.jpg.asset.json";
import posterBurger from "@/assets/poster-burger.png.asset.json";
import posterBurgerBillboard from "@/assets/poster-burger-billboard.png.asset.json";
import posterPizzaBillboard from "@/assets/poster-pizza-billboard.jpg.asset.json";
import posterAgera from "@/assets/poster-agera.png.asset.json";
import packagingJuiceCan from "@/assets/packaging-juice-can.png.asset.json";
import packagingJuiceLabel from "@/assets/packaging-juice-label.png.asset.json";
import {
  ArrowRight, Linkedin, Instagram, Mail,
  Sparkles, Palette, Layers, Camera, Wand2,
  Send, CalendarClock,
  Youtube, Smartphone, ArrowUpRight, X as XIcon,
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
      <ParticlesBackground />
      <Nav />
      <Hero />
      <LogoMarquee />
      <About />
      <Tools />
      <ThumbnailPortfolio />
      <UIDesignPortfolio />
      <PackagingPosterPortfolio />
      <Process />
      <Contact />
      <Footer />
      <Lightbox />
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

function ParticlesBackground() {
  const particles = Array.from({ length: 22 });
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <svg className="absolute -left-32 top-10 h-[28rem] w-[28rem] animate-spin-slow opacity-[0.08]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="80" stroke="url(#pgrad)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" stroke="url(#pgrad)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="40" stroke="url(#pgrad)" strokeWidth="0.5" />
        <defs>
          <linearGradient id="pgrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.18 305)" />
            <stop offset="100%" stopColor="oklch(0.74 0.17 220)" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute -right-24 bottom-20 h-[22rem] w-[22rem] opacity-[0.08]" viewBox="0 0 200 200">
        <polygon points="100,10 190,80 160,190 40,190 10,80" stroke="oklch(0.78 0.18 305)" strokeWidth="0.4" fill="none" />
        <polygon points="100,40 160,85 140,160 60,160 40,85" stroke="oklch(0.74 0.17 220)" strokeWidth="0.4" fill="none" />
      </svg>
      {particles.map((_, i) => {
        const size = 2 + (i % 5);
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const delay = (i % 7) * 0.6;
        const dur = 8 + (i % 6);
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background: i % 2 ? "oklch(0.78 0.18 305 / 0.55)" : "oklch(0.74 0.17 220 / 0.55)",
              boxShadow: "0 0 14px currentColor",
              color: i % 2 ? "oklch(0.78 0.18 305 / 0.6)" : "oklch(0.74 0.17 220 / 0.6)",
              animation: `floatY ${dur}s ease-in-out ${delay}s infinite`,
              opacity: 0.55,
            }}
          />
        );
      })}
    </div>
  );
}

/* ─────────────────────── lightbox ─────────────────────── */

let lightboxOpener: ((src: string, alt: string) => void) | null = null;
function openLightbox(src: string, alt: string) {
  lightboxOpener?.(src, alt);
}

function Lightbox() {
  const [state, setState] = useState<{ src: string; alt: string } | null>(null);
  useEffect(() => {
    lightboxOpener = (src, alt) => setState({ src, alt });
    return () => { lightboxOpener = null; };
  }, []);
  useEffect(() => {
    if (!state) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setState(null); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [state]);
  if (!state) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={() => setState(null)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
    >
      <button
        aria-label="Close"
        onClick={() => setState(null)}
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full glass-strong text-white transition hover:scale-110 hover:bg-white/10"
      >
        <XIcon className="h-5 w-5" />
      </button>
      <img
        src={state.src}
        alt={state.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] max-w-[92vw] rounded-2xl object-contain shadow-[0_30px_120px_-20px_rgba(0,0,0,0.8)]"
      />
    </div>
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
  { Icon: Instagram, href: "https://www.instagram.com/_vaibhav_.mohindra994?igsh=MXE0cDVwZDJkdWl2MQ==", label: "Instagram" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/vaibhav-mohindra-a17662380?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:vaibhavmohindra22155@gmail.com", label: "Email" },
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

/* ─────────────────────── thumbnails ─────────────────────── */

type ThumbnailItem = {
  title: string;
  niche: string;
  image: string;
  accent: string;
  metrics: string;
  features: string[];
};

const thumbs: ThumbnailItem[] = [
  {
    title: "Reset Your Algorithm",
    niche: "Growth",
    image: thumbnail1.url,
    accent: "from-emerald-400 via-lime-400 to-yellow-300",
    metrics: "High-contrast growth storytelling",
    features: ["Bold performance framing", "Arrow-led visual flow", "Emotion-first subject crop", "Large CTR-focused typography"],
  },
  {
    title: "The Only Way to Make Your Tech Startup Successful",
    niche: "Startup",
    image: thumbnail3.url,
    accent: "from-cyan-400 via-sky-400 to-indigo-400",
    metrics: "Expert-led conversation thumbnail",
    features: ["Authority-driven guest layout", "Quote card composition", "Hierarchy around key phrase", "Podcast-interview framing"],
  },
  {
    title: "Master Color Grading",
    niche: "Creative",
    image: thumbnail4.url,
    accent: "from-amber-300 via-orange-400 to-fuchsia-400",
    metrics: "Premium tutorial visual system",
    features: ["Before-after storytelling", "Tool-centric branding", "Clean creator cutout", "Course-style headline emphasis"],
  },
  {
    title: "With ChatGPT!",
    niche: "AI",
    image: thumbnail5.url,
    accent: "from-emerald-400 via-green-400 to-cyan-300",
    metrics: "Revenue-focused AI hook",
    features: ["Monetization proof element", "Mobile mockup context", "Strong reaction expression", "Dark-grid fintech backdrop"],
  },
  {
    title: "This Update Is Insane!",
    niche: "Tech",
    image: thumbnail6.url,
    accent: "from-sky-300 via-cyan-300 to-indigo-300",
    metrics: "Product launch thumbnail energy",
    features: ["Bright ecosystem palette", "Device-led composition", "Big app icon hero", "Urgency-driven headline"],
  },
  {
    title: "Billionaires Are Wired Differently",
    niche: "Business",
    image: thumbnail7.url,
    accent: "from-yellow-300 via-amber-300 to-orange-300",
    metrics: "Debate and insight packaging",
    features: ["Face collage tension", "Topic authority anchor", "Contrast-driven highlight strip", "Business podcast atmosphere"],
  },
  {
    title: "I Made 60 Lakhs From One Show",
    niche: "Podcast",
    image: thumbnail8.url,
    accent: "from-pink-300 via-rose-300 to-orange-300",
    metrics: "Story-led success thumbnail",
    features: ["Income claim focal point", "Host-guest balance", "Studio depth layering", "Quote-first layout"],
  },
  {
    title: "When We Used to Play Here",
    niche: "Gaming",
    image: thumbnail9.url,
    accent: "from-red-400 via-orange-400 to-yellow-300",
    metrics: "Horror nostalgia thumbnail",
    features: ["Cinematic suspense lighting", "Character reaction crop", "Monster reveal centerpiece", "Brush-style horror typography"],
  },
  {
    title: "Maya Ek Pishachini",
    niche: "Horror",
    image: thumbnail10.url,
    accent: "from-rose-400 via-red-400 to-fuchsia-400",
    metrics: "Drama-horror poster treatment",
    features: ["Shock-expression subject", "Villain reveal layering", "Moody filmic grading", "Regional title styling"],
  },
  {
    title: "Close Clients In Just 7 Days!",
    niche: "Marketing",
    image: thumbnailWebDesign.url,
    accent: "from-emerald-400 via-green-400 to-lime-300",
    metrics: "Web design lead-gen thumbnail",
    features: ["Money-green focal accent", "Client payments mockup overlay", "Upward growth chart cue", "Bold italic CTR headline"],
  },
];

function ThumbnailPortfolio() {
  const [active, setActive] = useState("All");
  const thumbCats = ["All", ...Array.from(new Set(thumbs.map((t) => t.niche)))];
  const filtered = active === "All" ? thumbs : thumbs.filter((t) => t.niche === active);
  const visible = filtered.length > 1 ? [...filtered, ...filtered] : filtered;
  return (
    <Section eyebrow="YouTube" title={<> 
      <span className="thumbnail-heading inline-flex flex-wrap items-end gap-x-3 gap-y-1">
        <span className="thumbnail-heading-word">Thumbnail</span>
        <span className="thumbnail-heading-accent text-gradient">Design</span>
      </span>
    </>}
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
      <div className="reveal overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className={`thumbnail-scroll-track flex w-max gap-5 ${filtered.length > 1 ? "animate-thumbnail-scroll" : ""}`}>
          {visible.map((t, index) => (
            <article
              key={`${t.title}-${index}`}
              className="thumbnail-card group relative h-[250px] w-[360px] shrink-0 overflow-hidden rounded-[1.6rem] glass glow-hover sm:h-[280px] sm:w-[440px]"
            >
              <img
                src={t.image}
                alt={`${t.title} YouTube thumbnail design`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10" />
              <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${t.accent}`} />
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                  {t.niche}
                </span>
                <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                  {t.metrics}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 transition duration-500 group-hover:-translate-y-1 group-hover:opacity-0">
                <h3 className="max-w-[18ch] text-2xl font-black leading-[0.95] text-white drop-shadow-lg sm:text-[2rem]">
                  {t.title}
                </h3>
              </div>
              <div className="absolute inset-0 flex items-end bg-black/72 p-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/65">Thumbnail features</div>
                  <ul className="space-y-2 text-sm text-white/92">
                    {t.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────── UI design ─────────────────────── */

const uiProjects = [
  {
    t: "Noise Smartwatch — Silver Steel",
    image: uiSilver.url,
    category: "E-commerce Product Page",
    tools: "Figma · Photoshop",
    details: [
      "Hero product configurator with color swatches",
      "Premium dark glass UI with soft radial glows",
      "Conversion-first PDP hierarchy",
    ],
  },
  {
    t: "Noise Smartwatch — Gold Link",
    image: uiGold.url,
    category: "Product Variant UI",
    tools: "Figma · Photoshop",
    details: [
      "Variant selection with live preview",
      "Warm gold gradient mood per color",
      "Feature chips for spec scannability",
    ],
  },
  {
    t: "Nike Super Rep GO",
    image: uiNike.url,
    category: "Sportswear Landing",
    tools: "Figma · Illustrator",
    details: [
      "Editorial typography lockup",
      "Iconic side rail navigation",
      "Bold neon accent on product hero",
    ],
  },
  {
    t: "X-Roller Xbox Controller",
    image: uiXroller.url,
    category: "Gaming Product Site",
    tools: "Figma · Photoshop",
    details: [
      "Asymmetric editorial image grid",
      "Pill nav with deep red CTA",
      "Feature badges with custom icons",
    ],
  },
  {
    t: "Craveto — Food Delivery App Showcase",
    image: uiCravetoShowcase.url,
    category: "App UI Case Study",
    tools: "Figma · Photoshop",
    details: [
      "Full app showcase: splash, menu, detail, payments, tracking",
      "Crimson brand system with bold script wordmark",
      "Category chips, neumorphic cards & persistent CTAs",
      "Live order tracking with status timeline",
    ],
  },
];

function UIDesignPortfolio() {
  const visible = uiProjects.length > 1 ? [...uiProjects, ...uiProjects] : uiProjects;
  return (
    <Section id="work" eyebrow="Product" title={<>UI / Web Page <span className="text-gradient">Design</span></>}
      subtitle="Interfaces built around real user goals — clean hierarchy, satisfying motion, frictionless flows.">
      <div className="reveal overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="thumbnail-scroll-track flex w-max gap-5 animate-thumbnail-scroll">
        {visible.map((p, i) => (
          <article
            key={`${p.t}-${i}`}
            onClick={() => openLightbox(p.image, p.t)}
            className="group relative w-[360px] sm:w-[440px] shrink-0 cursor-zoom-in overflow-hidden rounded-3xl glass glow-hover"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.t} UI design`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 transition duration-500 group-hover:opacity-0">
                <h3 className="text-xl font-semibold text-white drop-shadow sm:text-2xl">{p.t}</h3>
                <p className="mt-1 text-xs text-white/70">{p.tools}</p>
              </div>
              <div className="absolute inset-0 flex items-end bg-black/75 p-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/65">Design highlights</div>
                  <ul className="space-y-2 text-sm text-white/90">
                    {p.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-white/60">{p.tools}</div>
                </div>
              </div>
            </div>
          </article>
        ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────── packaging & posters ─────────────────────── */

type PosterItem = {
  t: string;
  category: string;
  image: string;
  tools: string;
  details: string[];
  span?: string;
};

const posters: PosterItem[] = [
  {
    t: "Juicey Organo — Can Mockup",
    category: "Packaging Design",
    image: packagingJuiceCan.url,
    tools: "Photoshop · Illustrator",
    details: ["Beverage can label wrap", "Premium gloss + droplet finish", "No-preservatives trust badge", "Splash-driven hero composition"],
  },
  {
    t: "Juicey Organo — Label Artwork",
    category: "Packaging Design",
    image: packagingJuiceLabel.url,
    tools: "Illustrator · Photoshop",
    details: ["Flat label print-ready layout", "Custom citrus display type", "250ml volume hierarchy", "Organic certification badge"],
  },
  {
    t: "Super Sizzling Pizza — Social Poster",
    category: "Poster Advertisement",
    image: posterPizza.url,
    tools: "Photoshop",
    details: ["Distressed editorial type stack", "Topping splash composition", "50% OFF chalk-style mark", "Order Now + free delivery CTA"],
  },
  {
    t: "Delicious Burger — Campaign Poster",
    category: "Poster Advertisement",
    image: posterBurger.url,
    tools: "Photoshop",
    details: ["Bold grunge headline", "Yellow price-tag focal point", "Floating ingredient parallax", "Combo + drink storytelling"],
  },
  {
    t: "Pizza Billboard — Metro Mockup",
    category: "Outdoor Ad Mockup",
    image: posterPizzaBillboard.url,
    tools: "Photoshop",
    details: ["DOOH metro-station placement", "High-impact vertical hero", "Brand recall headline lockup", "Real-world context render"],
  },
  {
    t: "Burger Billboard — Street Mockup",
    category: "Outdoor Ad Mockup",
    image: posterBurgerBillboard.url,
    tools: "Photoshop",
    details: ["Night-scene storefront mockup", "Glow lit-frame product hero", "Order Now CTA placement", "Premium QSR campaign feel"],
  },
  {
    t: "Koeinsegg Agera — Auto Print",
    category: "Poster Advertisement",
    image: posterAgera.url,
    tools: "Illustrator · Photoshop",
    details: ["Editorial automotive layout", "Performance spec data grid", "Custom torn-edge masthead", "Iconography-driven feature row"],
    span: "md:col-span-2",
  },
];

function PackagingPosterPortfolio() {
  const visible = posters.length > 1 ? [...posters, ...posters] : posters;
  return (
    <Section eyebrow="Print & Campaigns"
      title={<>Packaging & <span className="text-gradient">Poster Design</span></>}
      subtitle="Shelf-ready packaging and high-impact poster advertisements built to stop the scroll — and the foot traffic.">
      <div className="reveal overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="thumbnail-scroll-track flex w-max gap-5 animate-thumbnail-scroll">
        {visible.map((p, i) => (
          <article
            key={`${p.t}-${i}`}
            onClick={() => openLightbox(p.image, p.t)}
            className="group relative w-[280px] sm:w-[340px] shrink-0 cursor-zoom-in overflow-hidden rounded-3xl glass glow-hover"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.t} — ${p.category}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 transition duration-500 group-hover:opacity-0">
                <h3 className="text-lg font-semibold text-white drop-shadow sm:text-xl">{p.t}</h3>
                <p className="mt-1 text-xs text-white/70">{p.tools}</p>
              </div>
              <div className="absolute inset-0 flex items-end bg-black/75 p-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/65">Design highlights</div>
                  <ul className="space-y-2 text-sm text-white/90">
                    {p.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-white/60">{p.tools}</div>
                </div>
              </div>
            </div>
          </article>
        ))}
        </div>
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
            <a href="mailto:vaibhavmohindra22155@gmail.com" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand">
              <Mail className="h-4 w-4" /> vaibhavmohindra22155@gmail.com
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
