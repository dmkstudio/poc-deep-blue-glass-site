"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import {
  ArrowDown, ArrowRight, Building2, Camera, CarFront, Check, ChevronDown,
  Landmark, Mail, Menu, Phone, Send, ShieldCheck, Sparkles, UserRound, X,
} from "lucide-react";
import { copy, directionKeys, pillars, type DirectionKey, type Locale } from "./poc-data";

const languages: Locale[] = ["en", "fr", "ru"];
const icons = { business: Building2, property: Landmark, relocation: Sparkles, mobility: CarFront, brand: UserRound };
const contactLinks = [{ name: "Instagram", Icon: Camera }, { name: "Telegram", Icon: Send }, { name: "Email", Icon: Mail }, { name: "Call", Icon: Phone }];

function Brand({ compact = false }: { compact?: boolean }) {
  return <a className="brand" href="#home" aria-label="POC — Private Office Consulting, home">
    <span className="brand-mark">POC</span><span className="brand-rule" />
    {!compact && <span className="brand-name">Private Office<br />Consulting</span>}
  </a>;
}

function LanguageSwitch({ locale, setLocale }: { locale: Locale; setLocale: (v: Locale) => void }) {
  return <div className="language-orb" role="group" aria-label="Language">
    <span className="orb-sheen" aria-hidden="true" />
    {languages.map((language) => <button key={language} className={locale === language ? "active" : ""} onClick={() => setLocale(language)} aria-pressed={locale === language}>{language.toUpperCase()}</button>)}
  </div>;
}

export default function PocSite() {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<DirectionKey | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: .25 });
  const t = copy(locale);

  useEffect(() => {
    const saved = localStorage.getItem("poc-locale") as Locale | null;
    const timer = window.setTimeout(() => { if (saved && languages.includes(saved)) setLocaleState(saved); }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [menuOpen]);

  function setLocale(v: Locale) { setLocaleState(v); localStorage.setItem("poc-locale", v); document.documentElement.lang = v; }
  function selectDirection(key: DirectionKey) { setActive(key); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" }), 120); }

  return <MotionConfig reducedMotion="user" transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}>
    <a className="skip" href="#main">{t.nav.skip}</a>
    <motion.div className="scroll-progress" style={{ scaleX: progress }} />
    <header className="topbar">
      <Brand />
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#home">POC</a><a href="#approach">{t.nav.approach}</a><a href="#services">{t.nav.expertise}</a><a href="#confidentiality">{t.nav.confidentiality}</a><a href="#contact">{t.nav.contact}</a>
      </nav>
      <LanguageSwitch locale={locale} setLocale={setLocale} />
      <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <AnimatePresence>{menuOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} aria-label="Mobile navigation">
      {[ ["#home", "POC"], ["#approach", t.nav.approach], ["#services", t.nav.expertise], ["#confidentiality", t.nav.confidentiality], ["#contact", t.nav.contact] ].map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      <div className="mobile-languages">{languages.map(l => <button key={l} onClick={() => setLocale(l)} className={locale === l ? "active" : ""}>{l.toUpperCase()}</button>)}</div>
    </motion.nav>}</AnimatePresence>

    <main id="main">
      <section className="hero" id="home">
        <motion.div className="hero-image" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.8 }} />
        <div className="hero-vignette" />
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>
          <p className="hero-monogram">POC</p><span className="gold-line" />
          <h1>{t.hero.title}</h1>
          <a className="text-cta" href="#services">{t.hero.secondary}<ArrowDown /></a>
        </motion.div>
        <motion.div className="hero-marker" animate={reduce ? {} : { opacity: [.35, 1, .35], y: [0, 8, 0] }} transition={{ duration: 2.4, repeat: Infinity }}><span>{t.hero.scroll}</span><ArrowDown /></motion.div>
      </section>

      <section className="intro" id="approach">
        <Reveal><p className="kicker">{t.positioning.label}</p><h2>{t.positioning.title}</h2><span className="gold-line center" /></Reveal>
        <Reveal className="approach-copy"><p>{t.positioning.paragraphs[0]}</p><p>{t.positioning.paragraphs[1]}</p></Reveal>
        <div className="assurances">{t.positioning.assurances.map((item, index) => <Reveal key={item} className="assurance"><span>0{index + 1}</span><p>{item}</p></Reveal>)}</div>
      </section>

      <section className="services" id="services" aria-labelledby="services-title">
        <div className="section-head"><p className="kicker">{t.expertise.label}</p><h2 id="services-title">{t.expertise.title}</h2><p>{t.expertise.body}</p></div>
        <div className="service-grid">
          {directionKeys.map((key, index) => {
            const item = pillars[locale][key]; const Icon = icons[key]; const opened = active === key;
            return <motion.article key={key} className={`service-card ${opened ? "opened" : ""}`} layout>
              <button className="service-summary" onClick={() => setActive(opened ? null : key)} aria-expanded={opened} aria-controls={`detail-${key}`}>
                <span className="service-number">0{index + 1}</span><span className="short-line" /><Icon aria-hidden="true" /><h3>{item.title}</h3><span className="service-arrow"><ArrowRight /></span>
              </button>
              <AnimatePresence initial={false}>{opened && <motion.div id={`detail-${key}`} className="service-detail" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                <p>{item.summary}</p>{item.groups.map(group => <div key={group.title}><h4>{group.title}</h4><ul>{group.items.map(service => <li key={service}>{service}</li>)}</ul></div>)}
                <button className="gold-button" onClick={() => selectDirection(key)}>{t.expertise.discuss}<ArrowRight /></button>
              </motion.div>}</AnimatePresence>
            </motion.article>;
          })}
        </div>
      </section>

      <section className="custom-request">
        <div className="custom-image" /><div className="custom-glass"><p className="kicker">{t.custom.label}</p><h2>{t.custom.title}</h2><p>{t.custom.body}</p><a href="#contact" className="round-arrow" aria-label={t.custom.cta}><ArrowRight /></a></div>
      </section>

      <section className="confidentiality" id="confidentiality">
        <Reveal><ShieldCheck /><p className="kicker">{t.confidentiality.label}</p><h2>{t.confidentiality.title}</h2><p className="lead">{t.confidentiality.body}</p></Reveal>
        <div className="confidential-points">{t.confidentiality.points.map(point => <Reveal key={point} className="confidential-point"><Check /><span>{point}</span></Reveal>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-aside"><p className="kicker">{t.form.label}</p><h2>{t.form.title}</h2><p>{t.form.body}</p><ContactLinks label={t.form.unavailable} /></div>
        <RequestForm key={`${locale}-${active ?? "none"}`} locale={locale} initialDirection={active} />
      </section>
    </main>

    <footer><Brand /><div><p>{t.footer.line}</p><p>{t.footer.region}</p></div><ContactLinks label={t.form.unavailable} compact /><p className="legal">© {new Date().getFullYear()} {t.footer.rights}</p></footer>
  </MotionConfig>;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }}>{children}</motion.div>;
}

function ContactLinks({ label, compact = false }: { label: string; compact?: boolean }) {
  return <div className={`contact-links ${compact ? "compact" : ""}`}>{contactLinks.map(({ name, Icon }) => <a key={name} href="#contact" title={label} aria-label={`${name}. ${label}`}><Icon /><span>{compact ? "" : name}</span></a>)}</div>;
}

function RequestForm({ locale, initialDirection }: { locale: Locale; initialDirection: DirectionKey | null }) {
  const t = copy(locale); const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [direction, setDirection] = useState<string>(initialDirection ?? "");
  const options = useMemo(() => directionKeys.map(k => ({ value: k, label: pillars[locale][k].title })), [locale]);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const data = new FormData(e.currentTarget); setStatus("sending");
    const payload = { name: data.get("name"), email: data.get("email"), phone: data.get("phone"), direction: data.get("direction"), task: data.get("task"), locale, sourcePath: location.pathname };
    try { const res = await fetch("/api/request", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }); if (!res.ok) throw new Error(); setStatus("success"); form.current?.reset(); setDirection(""); }
    catch { setStatus("error"); }
  }
  if (status === "success") return <div className="form-card success"><Check /><h3>{t.form.successTitle}</h3><p>{t.form.successBody}</p><button className="gold-button" onClick={() => setStatus("idle")}>{t.form.another}</button></div>;
  return <form ref={form} className="form-card" onSubmit={submit}>
    <label><span>{t.form.name}</span><input name="name" required minLength={2} maxLength={100} autoComplete="name" /></label>
    <label><span>{t.form.email}</span><input name="email" type="email" required maxLength={254} autoComplete="email" /></label>
    <label><span>{t.form.phone}</span><input name="phone" type="tel" maxLength={40} autoComplete="tel" /></label>
    <label><span>{t.form.direction}</span><span className="select-wrap"><select name="direction" required value={direction} onChange={e => setDirection(e.target.value)}><option value="" disabled>{t.form.select}</option>{options.map(o => <option value={o.value} key={o.value}>{o.label}</option>)}<option value="custom">{t.form.custom}</option><option value="unsure">{t.form.unsure}</option></select><ChevronDown /></span></label>
    <label className="task"><span>{t.form.task}</span><textarea name="task" required minLength={20} maxLength={3000} rows={5} /></label>
    <p className="privacy"><ShieldCheck />{t.form.privacy}</p>
    {status === "error" && <p className="error" role="alert">{t.form.sendError}</p>}
    <button className="gold-button submit" disabled={status === "sending"}>{status === "sending" ? t.form.sending : t.form.submit}<ArrowRight /></button>
  </form>;
}
