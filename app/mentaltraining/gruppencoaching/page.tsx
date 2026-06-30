import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Building2, GraduationCap, Heart } from "lucide-react";
import Reveal from "@/components/Reveal";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Gruppencoaching – Mentaltraining – Kompetenz Pferd",
  description:
    "Seminare, Workshops und Aufstellungen für Familien, Unternehmen, Schulen und Vereine. Gruppencoaching mit Pferden.",
};

const audiences = [
  {
    icon: <Heart size={24} />,
    title: "Familien & Paare",
    text: "Gemeinsam Muster erkennen, Kommunikation verbessern und als Team stärker werden.",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Kinder & Jugendliche",
    text: "Soziale Kompetenz, Selbstvertrauen und Teamfähigkeit spielerisch entwickeln.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Unternehmen & Teams",
    text: "Teamdynamik sichtbar machen, Führungskompetenzen stärken, gemeinsam wachsen.",
  },
  {
    icon: <Users size={24} />,
    title: "Vereine & Schulklassen",
    text: "Gemeinschaftsgefühl stärken und Zusammenhalt durch einzigartige Erlebnisse fördern.",
  },
];

export default function Gruppencoaching() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="pt-36 pb-24 text-center"
        style={{ background: "var(--cp-hero-gradient)" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <p
            className="text-base font-semibold tracking-widest uppercase mb-5 hero-tag"
            style={{ color: "var(--cp-tag)" }}
          >
            Mentaltraining
          </p>
          <h1
            className="text-5xl sm:text-6xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Gruppencoaching
          </h1>
          <p
            className="text-xl leading-relaxed hero-subtitle max-w-2xl mx-auto"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            Gemeinsam wachsen. In Zusammenarbeit mit Kollegin Bernadette Vielnascher
            bieten wir Seminare, Workshops und Aufstellungen an – maßgeschneidert auf
            deine Gruppe.
          </p>
        </div>
      </section>

      {/* ── IMAGE PAIR ───────────────────────────────────────── */}
      <section className="py-12" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Reveal direction="left">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-lg">
                <LightboxImage
                  src="/gruppencoaching_1.jpg"
                  alt="Gruppencoaching mit Pferden"
                  sizes="(max-width: 768px) 50vw, 40vw"
                  priority
                />
              </div>
            </Reveal>
            <Reveal direction="right" delay={80}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-lg">
                <LightboxImage
                  src="/gruppencoaching_2.jpg"
                  alt="Gruppencoaching – Seminar mit Pferden"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FORMATS ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <p
                className="text-base font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--cp-light)" }}
              >
                Unsere Formate
              </p>
              <h2
                className="text-4xl font-semibold"
                style={{ color: "var(--cp-deep)" }}
              >
                Für jede Gruppe das richtige Angebot
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
            {[
              {
                title: "Workshops",
                text: "Halbtags- oder ganztägige Workshops zu spezifischen Themen: Kommunikation, Führung, Vertrauen, Teamarbeit.",
                duration: "Halbtag oder ganztags",
              },
              {
                title: "Seminare",
                text: "Mehrstündige oder mehrtägige Vertiefung mit theoretischen Inputs und praktischen Pferdeeinheiten.",
                duration: "1–2 Tage",
              },
              {
                title: "Aufstellungen",
                text: "Systemische Aufstellungen mit dem Pferd als lebendigem Element – für tieferes Systemverständnis.",
                duration: "Auf Anfrage",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div
                  className="rounded-3xl p-9 h-full"
                  style={{ backgroundColor: "var(--cp-bg-alt)" }}
                >
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: "var(--cp-deep)" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-5"
                    style={{ color: "var(--cp-text)" }}
                  >
                    {f.text}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--cp-light)" }}
                  >
                    ⏱ {f.duration}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Target audiences */}
          <Reveal>
            <h2
              className="text-3xl font-semibold mb-10 text-center"
              style={{ color: "var(--cp-deep)" }}
            >
              Für wen ist das Gruppencoaching?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div
                  className="flex gap-5 rounded-2xl p-7"
                  style={{ backgroundColor: "var(--cp-card)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--cp-fg)", color: "var(--cp-light)" }}
                  >
                    {a.icon}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: "var(--cp-deep)" }}
                    >
                      {a.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: "var(--cp-text)" }}>
                      {a.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVAILABILITY ─────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <Reveal>
            <div
              className="rounded-3xl p-10"
              style={{ backgroundColor: "var(--cp-card)" }}
            >
              <p
                className="text-base font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--cp-light)" }}
              >
                Termine auf Anfrage
              </p>
              <p
                className="text-xl leading-relaxed mb-8"
                style={{ color: "var(--cp-text)" }}
              >
                Derzeit sind keine fixen Termine geplant. Bei Interesse melde dich
                einfach – gemeinsam finden wir einen passenden Termin für deine Gruppe.
              </p>
              <p
                className="text-base mb-8"
                style={{ color: "var(--cp-text-muted)" }}
              >
                Preis je nach Format, Gruppengröße und Dauer auf Anfrage.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: "var(--cp-light)" }}
              >
                Anfrage stellen <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
