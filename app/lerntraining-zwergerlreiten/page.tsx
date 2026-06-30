import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Lerntraining & Zwergerlreiten – Kompetenz Pferd",
  description:
    "Pferdegestütztes Lerntraining für Kinder: Selbstbewusstsein, Konzentration, Teamwork. Zwergerlreiten für Kinder von 3–10 Jahren.",
};

const learningBenefits = [
  "Stärkung des Selbstbewusstseins",
  "Verbesserung der Konzentration",
  "Teamwork und soziale Kompetenz",
  "Aufmerksamkeit & Fokus",
  "Unterstützung bei Legasthenie und Rechenschwäche",
  "Abbau von Ängsten und Problemlösung",
  "Begleitung bei Überaktivität",
  "Motivation und Freude am Lernen",
];

const zwergerlActivities = [
  "Gemeinsam das Pferd pflegen und putzen",
  "Mähne flechten und bürsten",
  "Spiele mit dem Pferd spielen",
  "Geführtes Reiten (ca. 30 Minuten)",
  "Grundlagen der Pferdepflege kennenlernen",
];

const lernGallery = [
  "/lerntraining_galerie_1.jpg",
  "/lerntraining_galerie_2.jpg",
  "/lerntraining_galerie_3.jpg",
  "/lerntraining_galerie_4.jpg",
  "/lerntraining_galerie_5.jpg",
  "/lerntraining_galerie_6.jpg",
];

const zwergerlGallery = [
  "/zwergerlreiten_galerie_1.jpg",
  "/zwergerlreiten_galerie_2.jpg",
  "/zwergerlreiten_galerie_3.jpg",
  "/zwergerlreiten_galerie_4.jpg",
];

export default function LerntrainingZwergerlreiten() {
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
            Für Kinder & Jugendliche
          </p>
          <h1
            className="text-5xl sm:text-6xl font-semibold mb-7 hero-title leading-tight"
            style={{ color: "var(--cp-fg)" }}
          >
            Lerntraining &<br />Zwergerlreiten
          </h1>
          <p
            className="text-xl leading-relaxed hero-subtitle max-w-2xl mx-auto"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            Pferde als Lernpartner für Kinder: spielerisch, einfühlsam und
            nachhaltig wirksam. Für Kinder von 3 bis zu Jugendlichen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 hero-cta">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "var(--cp-accent)" }}
            >
              Termin anfragen <ArrowRight size={18} />
            </Link>
            <Link
              href="/preise"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold border-2 transition-all hover:bg-white/10"
              style={{ borderColor: "var(--cp-tag)", color: "var(--cp-fg)" }}
            >
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* ── LERNTRAINING ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <Reveal direction="left">
              <div className="space-y-6">
                <p
                  className="text-base font-semibold tracking-widest uppercase"
                  style={{ color: "var(--cp-light)" }}
                >
                  Pferdegestütztes Lernen
                </p>
                <h2
                  className="text-4xl font-semibold leading-tight"
                  style={{ color: "var(--cp-deep)" }}
                >
                  Lerntraining mit Pferden
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                  In der modernen Welt stehen Kinder und Jugendliche vor vielfältigen
                  Herausforderungen: Schulstress, Mobbing, familiäre Spannungen oder
                  Lernschwierigkeiten. Pferde können helfen – auf eine Art, die kein
                  Schulbuch ersetzen kann.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                  In spielerischen Einheiten mit dem Pferd als Partner entwickeln Kinder
                  wichtige Lebenskompetenzen. Das Tier spiegelt, lobt und begleitet –
                  ohne zu werten. Das schafft Raum zum Wachsen.
                </p>

                <div
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "var(--cp-bg-alt)" }}
                >
                  <p
                    className="text-sm font-semibold uppercase tracking-widest mb-4"
                    style={{ color: "var(--cp-light)" }}
                  >
                    Was wir fördern
                  </p>
                  <ul className="space-y-3">
                    {learningBenefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--cp-light)" }}
                        />
                        <span className="text-base" style={{ color: "var(--cp-text)" }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="rounded-2xl p-6 border"
                  style={{ backgroundColor: "var(--cp-card)", borderColor: "var(--cp-bg-alt)" }}
                >
                  <p className="text-sm font-semibold uppercase mb-2" style={{ color: "var(--cp-light)" }}>
                    Preis
                  </p>
                  <p className="text-2xl font-bold mb-1" style={{ color: "var(--cp-deep)" }}>
                    60,– €
                  </p>
                  <p className="text-base" style={{ color: "var(--cp-text-muted)" }}>
                    60 Minuten · Einzelperson
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="space-y-6">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                  <LightboxImage
                    src="/lerntraining.jpg"
                    alt="Lerntraining mit Pferden für Kinder"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                {/* Mini gallery */}
                <div className="grid grid-cols-3 gap-3">
                  {lernGallery.map((src, i) => (
                    <div key={src} className="aspect-square rounded-xl overflow-hidden relative">
                      <LightboxImage
                        src={src}
                        alt={`Lerntraining Galerie ${i + 1}`}
                        sizes="(max-width: 1024px) 33vw, 17vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ZWERGERLREITEN ────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <Reveal direction="left">
              <div className="space-y-6">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                  <LightboxImage
                    src="/zwergerlreiten_1.jpg"
                    alt="Zwergerlreiten für Kinder von 3–10 Jahren"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Mini gallery */}
                <div className="grid grid-cols-4 gap-3">
                  {zwergerlGallery.map((src, i) => (
                    <div key={src} className="aspect-square rounded-xl overflow-hidden relative">
                      <LightboxImage
                        src={src}
                        alt={`Zwergerlreiten Galerie ${i + 1}`}
                        sizes="(max-width: 1024px) 25vw, 13vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="space-y-6">
                <p
                  className="text-base font-semibold tracking-widest uppercase"
                  style={{ color: "var(--cp-light)" }}
                >
                  Für die Kleinsten
                </p>
                <h2
                  className="text-4xl font-semibold leading-tight"
                  style={{ color: "var(--cp-deep)" }}
                >
                  Zwergerlreiten
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                  Für Kinder von 3 bis 10 Jahren biete ich das Zwergerlreiten an –
                  ein liebevolles Einstiegserlebnis in die Welt der Pferde. Die Kleinen
                  lernen, wie man mit Tieren umgeht, und dürfen selbst auf dem Rücken
                  des Pferdes sitzen.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                  Alles in kindgerechtem Tempo, mit viel Geduld und absoluter Sicherheit.
                  Einzel- oder Gruppenteilnahme möglich.
                </p>

                <div
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "var(--cp-card)" }}
                >
                  <p
                    className="text-sm font-semibold uppercase tracking-widest mb-4"
                    style={{ color: "var(--cp-light)" }}
                  >
                    Was wir machen
                  </p>
                  <ul className="space-y-3">
                    {zwergerlActivities.map((a) => (
                      <li key={a} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--cp-light)" }}
                        />
                        <span className="text-base" style={{ color: "var(--cp-text)" }}>
                          {a}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="rounded-2xl p-6 border"
                  style={{ backgroundColor: "var(--cp-card)", borderColor: "var(--cp-bg-alt)" }}
                >
                  <p className="text-sm font-semibold uppercase mb-2" style={{ color: "var(--cp-light)" }}>
                    Preis
                  </p>
                  <p className="text-2xl font-bold mb-1" style={{ color: "var(--cp-deep)" }}>
                    45,– €
                  </p>
                  <p className="text-base" style={{ color: "var(--cp-text-muted)" }}>
                    60 Minuten · Kinder 3–10 Jahre
                  </p>
                  <p className="text-sm mt-1" style={{ color: "var(--cp-text-muted)" }}>
                    Auf meinen Pferden · Einzel oder Gruppe
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{ background: "var(--cp-hero-gradient2)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="text-4xl font-semibold mb-6" style={{ color: "var(--cp-fg)" }}>
              Jetzt einen Termin vereinbaren
            </h2>
            <p className="text-lg mb-10" style={{ color: "var(--cp-fg-mid)" }}>
              Ich freue mich auf eure Anfrage – für Kinder, Jugendliche oder die ganze Familie.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "var(--cp-accent)" }}
            >
              Kontakt aufnehmen <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
