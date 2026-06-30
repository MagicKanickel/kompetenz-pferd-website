import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Pferdespielplatz – Kompetenz Pferd",
  description:
    "Der Pferdespielplatz fördert Gelassenheit, Koordination und Konzentration – stärkt die Zusammenarbeit zwischen Pferd und Mensch.",
};

const benefits = [
  { title: "Gelassenheit", text: "Der Spielplatz konfrontiert das Pferd auf spielerische Weise mit unbekannten Situationen – und stärkt so seine Ruhe und Sicherheit im Alltag." },
  { title: "Koordination", text: "Verschiedene Hindernisse fördern die Körperkontrolle und Geschicklichkeit – sowohl beim Pferd als auch beim Menschen." },
  { title: "Konzentration", text: "Durch das gemeinsame Navigieren von Aufgaben bleibt das Pferd fokussiert und lernt, auf seinen Menschen zu hören." },
  { title: "Teamwork", text: "Pferd und Mensch arbeiten als Team. Vertrauen und Kommunikation werden spielerisch entwickelt und vertieft." },
  { title: "Alltagstraining", text: "Begegnungen mit Planen, Bällen, Brücken und anderen Objekten bereiten das Pferd auf unvorhergesehene Situationen im Alltag vor." },
  { title: "Spaß & Abwechslung", text: "Spielerisches Training ist Motivation pur – für Pferd und Mensch. Es verbindet und macht die Arbeit leichter." },
];

export default function Pferdespielplatz() {
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
            Training mit Spaßfaktor
          </p>
          <h1
            className="text-6xl sm:text-7xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Pferdespielplatz
          </h1>
          <p
            className="text-xl leading-relaxed hero-subtitle max-w-2xl mx-auto"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            Training muss nicht ernst sein, um wirksam zu sein. Der Pferdespielplatz
            verbindet spielerische Herausforderungen mit echtem Lerneffekt – für
            Pferd und Mensch.
          </p>
          <div className="mt-10 hero-cta">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "var(--cp-accent)" }}
            >
              Termin & Preise anfragen <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT IS IT ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                <h2 className="text-4xl font-semibold mb-4" style={{ color: "var(--cp-deep)" }}>
                  Was ist der Pferdespielplatz?
                </h2>
                <p>
                  Der Pferdespielplatz ist ein vielseitig gestalteter Trainingsbereich,
                  der Pferd und Mensch gemeinsam herausfordert. Unterschiedliche Stationen –
                  von Bällen über Planen und Brücken bis zu Slalom und Bodenmarkierungen –
                  fördern spielerisch alle wichtigen Grundkompetenzen.
                </p>
                <p>
                  Im Mittelpunkt steht nicht das Perfektionieren von Übungen, sondern das
                  Erleben: Was machen Pferd und Mensch, wenn sie auf Unbekanntes treffen?
                  Wer führt, wer folgt? Wie kommunizieren wir ohne Worte?
                </p>
                <p>
                  Termine und Preise auf Anfrage – ich passe das Programm gerne auf das
                  Niveau und die Bedürfnisse deines Pferdes an.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                <LightboxImage
                  src="/pferdespielplatz_1.jpg"
                  alt="Pferdespielplatz – Training mit Hindernissen"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center mb-14">
              <h2
                className="text-4xl font-semibold"
                style={{ color: "var(--cp-deep)" }}
              >
                Was der Spielplatz fördert
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <div
                  className="rounded-3xl p-8 h-full"
                  style={{ backgroundColor: "var(--cp-card)" }}
                >
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "var(--cp-deep)" }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--cp-text)" }}>
                    {b.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{ backgroundColor: "var(--cp-accent)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2
              className="text-4xl font-semibold mb-6"
              style={{ color: "var(--cp-deep)", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Neugierig geworden?
            </h2>
            <p className="text-lg mb-10" style={{ color: "var(--cp-text-dark)" }}>
              Termin und Preise auf Anfrage – ich freue mich auf eure Nachricht!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-lg font-semibold bg-white transition-all hover:scale-105"
                style={{ color: "var(--cp-deep)" }}
              >
                Kontakt aufnehmen <ArrowRight size={20} />
              </Link>
              <Link
                href="/preise"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-lg font-semibold border-2 transition-all hover:bg-black/10"
                style={{ borderColor: "var(--cp-deep)", color: "var(--cp-deep)" }}
              >
                Alle Preise
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
