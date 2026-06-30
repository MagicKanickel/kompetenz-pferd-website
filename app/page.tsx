import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Brain, Flower2, Baby, Cake, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: <Brain size={32} />,
    title: "Mental Training",
    description:
      "Coaching für Reiterinnen und Reiter, die mental stärker werden und ihre Verbindung zum Pferd vertiefen möchten.",
    href: "/mentaltraining",
  },
  {
    icon: <Heart size={32} />,
    title: "Pferdetraining",
    description:
      "Einfühlsame Arbeit mit dem Pferd – auf seine Bedürfnisse abgestimmt, in Harmonie und gegenseitigem Vertrauen.",
    href: "/pferdetraining",
  },
  {
    icon: <Flower2 size={32} />,
    title: "Pferdespielplatz",
    description:
      "Ein einzigartiger Begegnungsraum: freie Interaktion mit Pferden ohne Druck, im natürlichen Umfeld.",
    href: "/pferdespielplatz",
  },
  {
    icon: <Zap size={32} />,
    title: "Schnüffeltraining",
    description:
      "Duftnasenarbeit aktiviert den natürlichen Suchinstinkt des Pferdes – fordernd und befreiend zugleich.",
    href: "/schnuffeltraining",
  },
  {
    icon: <Baby size={32} />,
    title: "Kinderangebote",
    description:
      "Zwergerlreiten und spielerische Begegnungen mit Pferden für Kinder von 3 bis 10 Jahren.",
    href: "/lerntraining-zwergerlreiten",
  },
  {
    icon: <Cake size={32} />,
    title: "Kindergeburtstag",
    description:
      "Ein unvergesslicher Geburtstag am Pferdehof – mit Pferdepflege, Spielen und Spaß für bis zu 8 Kinder.",
    href: "/kindergeburtstag",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center min-h-screen pt-24"
        style={{ background: "var(--cp-hero-gradient)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative z-10 text-center px-5 max-w-5xl mx-auto">
          <p
            className="mb-6 text-base font-medium tracking-[0.3em] uppercase hero-tag"
            style={{ color: "var(--cp-tag)" }}
          >
            Bernadette Fischl
          </p>

          <h1
            className="text-6xl sm:text-7xl lg:text-8xl font-semibold leading-tight mb-10 hero-title"
            style={{
              color: "var(--cp-fg)",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Kompetenz Pferd
          </h1>

          <p
            className="text-xl sm:text-2xl italic max-w-3xl mx-auto mb-14 leading-relaxed hero-subtitle"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            „An einem edlen Pferd schätzt man nicht seine Kraft, sondern seinen Charakter."
            <span className="not-italic text-base block mt-3" style={{ color: "var(--cp-fg-dim)" }}>
              — Konfuzius
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center hero-cta">
            <Link
              href="/mentaltraining"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-lg font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "var(--cp-accent)" }}
            >
              Meine Angebote
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-lg font-semibold border-2 transition-all hover:bg-white/10"
              style={{ borderColor: "var(--cp-tag)", color: "var(--cp-fg)" }}
            >
              Termin anfragen
            </Link>
          </div>
        </div>

      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-36" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/bernadette.jpg"
                    alt="Bernadette Fischl mit ihrem Pferd"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <div
                  className="absolute -bottom-8 -right-8 w-40 h-40 rounded-3xl -z-10"
                  style={{ backgroundColor: "var(--cp-bg-alt)" }}
                />
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="space-y-7">
                <p
                  className="text-base font-semibold tracking-widest uppercase"
                  style={{ color: "var(--cp-light)" }}
                >
                  Über mich
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-semibold leading-tight"
                  style={{ color: "var(--cp-deep)", fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Mit Herz &amp; Kompetenz für dein Pferd
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                  Mein Name ist Bernadette Fischl und Pferde begleiten mich seit meiner
                  Kindheit. Was als Leidenschaft begann, ist heute mein Beruf und meine
                  Berufung: Menschen und Pferden zu helfen, eine tiefe, vertrauensvolle
                  Verbindung aufzubauen.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                  Mit Mental Training für Reiterinnen und Reiter, einfühlsamem
                  Pferdetraining, Duftnasenarbeit und Kinderangeboten biete ich ein
                  breites Spektrum rund ums Pferd – immer mit dem Wohlbefinden des
                  Tieres im Mittelpunkt.
                </p>
                <Link
                  href="/ueber-mich"
                  className="inline-flex items-center gap-2 text-lg font-semibold transition-all hover:gap-3"
                  style={{ color: "var(--cp-light)" }}
                >
                  Mehr über mich erfahren
                  <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-36" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <p
                className="text-base font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--cp-light)" }}
              >
                Was ich anbiete
              </p>
              <h2
                className="text-4xl lg:text-5xl font-semibold"
                style={{ color: "var(--cp-deep)", fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Meine Angebote
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <Link
                  href={service.href}
                  className="group block bg-white rounded-3xl p-9 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: "var(--cp-fg)", color: "var(--cp-light)" }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--cp-deep)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed mb-5" style={{ color: "var(--cp-text)" }}>
                    {service.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-base font-semibold group-hover:gap-3 transition-all"
                    style={{ color: "var(--cp-light)" }}
                  >
                    Mehr erfahren <ArrowRight size={16} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="text-center mt-14">
              <Link
                href="/mentaltraining"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: "var(--cp-light)" }}
              >
                Alle Angebote ansehen
                <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── QUOTE ────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-36 text-center"
        style={{ background: "var(--cp-hero-gradient2)" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <span className="text-6xl mb-10 block">🌿</span>
            <blockquote
              className="text-3xl sm:text-4xl italic font-medium leading-relaxed mb-8"
              style={{ color: "var(--cp-fg-light)", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              „Pferde lehren uns Geduld, Demut und aufrichtige Kommunikation –
              drei Dinge, die auch im Leben unverzichtbar sind."
            </blockquote>
            <p className="text-base" style={{ color: "var(--cp-fg-dim)" }}>
              — Bernadette Fischl
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PRICING TEASER ───────────────────────────────────── */}
      <section className="py-24 lg:py-36" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <Reveal>
            <p
              className="text-base font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--cp-light)" }}
            >
              Transparente Preise
            </p>
            <h2
              className="text-4xl lg:text-5xl font-semibold mb-7"
              style={{ color: "var(--cp-deep)", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Investition in dich &amp; dein Pferd
            </h2>
            <p
              className="text-lg leading-relaxed mb-14 max-w-2xl mx-auto"
              style={{ color: "var(--cp-text)" }}
            >
              Von Einzelcoaching über Gruppenangebote bis zu Geburtstagspartys –
              meine Preise sind fair und transparent.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
            {[
              { label: "Mental Training", price: "ab 90 €", note: "90 Min." },
              { label: "Pferdeunterricht", price: "ab 40 €", note: "60 Min." },
              { label: "Schnüffeltraining", price: "ab 20 €", note: "Gruppe" },
              { label: "Kindergeburtstag", price: "ab 300 €", note: "3 Std." },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div
                  className="bg-white rounded-2xl p-6 shadow-sm text-center h-full"
                >
                  <p className="text-3xl font-bold mb-2" style={{ color: "var(--cp-light)" }}>
                    {item.price}
                  </p>
                  <p className="text-sm font-medium mb-1" style={{ color: "var(--cp-deep)" }}>
                    {item.label}
                  </p>
                  <p className="text-sm" style={{ color: "var(--cp-text-muted)" }}>
                    {item.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <Link
              href="/preise"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "var(--cp-light)" }}
            >
              Alle Preise ansehen
              <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-36 text-center"
        style={{ backgroundColor: "var(--cp-accent)" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2
              className="text-4xl lg:text-6xl font-semibold mb-7"
              style={{ color: "var(--cp-deep)", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Bereit für den ersten Schritt?
            </h2>
            <p
              className="text-xl leading-relaxed mb-12 max-w-xl mx-auto"
              style={{ color: "var(--cp-text-dark)" }}
            >
              Ich freue mich darauf, dich und dein Pferd kennenzulernen. Schreib mir
              eine Nachricht oder ruf einfach an – ich melde mich schnell zurück.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-lg font-semibold bg-white transition-all hover:scale-105"
                style={{ color: "var(--cp-deep)" }}
              >
                Nachricht schreiben
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:069910361439"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-lg font-semibold border-2 transition-all hover:bg-black/10"
                style={{ borderColor: "var(--cp-deep)", color: "var(--cp-deep)" }}
              >
                0699 / 103 61 439
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
