import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Kindergeburtstag am Pferdehof – Kompetenz Pferd",
  description:
    "Unvergesslicher Kindergeburtstag am Pferdehof: 3 Stunden, bis zu 8 Kinder, Pferdepflege, Reiten, Kuchen & mehr.",
};

const activities = [
  "Pferde striegeln und pflegen",
  "Mähnen flechten",
  "Memory-Spiel vom Pferderücken aus spielen",
  "Hindernisparcours gemeinsam mit dem Pferd aufbauen und absolvieren",
  "Kuchen essen und Geschenke auspacken",
  "Pferde bemalen",
  "Ratespiele, blinde Eselspiele, Basteln & Zeichnen",
];

const gallery = Array.from({ length: 17 }, (_, i) => `/kindergeburtstag_galerie_${i + 1}.jpg`);

export default function Kindergeburtstag() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="pt-36 pb-0 text-center"
        style={{ background: "var(--cp-hero-gradient)" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 pb-16">
          <p
            className="text-base font-semibold tracking-widest uppercase mb-5 hero-tag"
            style={{ color: "var(--cp-tag)" }}
          >
            Geburtstagsspaß am Pferdehof
          </p>
          <h1
            className="text-6xl sm:text-7xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Kindergeburtstag
          </h1>
          <p
            className="text-xl leading-relaxed hero-subtitle max-w-2xl mx-auto"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            Ein unvergesslicher Geburtstag am Pferdehof – mit Pferden, Spielen,
            Kuchen und ganz viel Spaß! Für bis zu 8 Kinder, 3 Stunden lang.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 hero-cta">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "var(--cp-accent)" }}
            >
              Termin anfragen <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── DETAILS ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            <Reveal direction="left">
              <div className="space-y-8">
                <div>
                  <p
                    className="text-base font-semibold tracking-widest uppercase mb-4"
                    style={{ color: "var(--cp-light)" }}
                  >
                    Was euch erwartet
                  </p>
                  <h2
                    className="text-4xl font-semibold mb-6"
                    style={{ color: "var(--cp-deep)" }}
                  >
                    3 Stunden voller Erlebnisse
                  </h2>
                  <ul className="space-y-4">
                    {activities.map((a) => (
                      <li key={a} className="flex items-start gap-3">
                        <CheckCircle2
                          size={20}
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
                  className="rounded-2xl p-6 grid grid-cols-3 gap-4 text-center"
                  style={{ backgroundColor: "var(--cp-bg-alt)" }}
                >
                  {[
                    { value: "3 Std.", label: "Dauer" },
                    { value: "max. 8", label: "Kinder" },
                    { value: "Ab 300 €", label: "Preis" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-bold mb-1" style={{ color: "var(--cp-deep)" }}>
                        {s.value}
                      </p>
                      <p className="text-sm" style={{ color: "var(--cp-text-muted)" }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="space-y-8">
                {/* Pricing */}
                <div>
                  <h2
                    className="text-3xl font-semibold mb-6"
                    style={{ color: "var(--cp-deep)" }}
                  >
                    Preise
                  </h2>
                  <div className="space-y-4">
                    <div
                      className="rounded-2xl p-7 flex justify-between items-center"
                      style={{ backgroundColor: "var(--cp-bg-alt)" }}
                    >
                      <div>
                        <p className="text-lg font-semibold" style={{ color: "var(--cp-deep)" }}>
                          Ohne Verpflegung
                        </p>
                        <p className="text-sm mt-1" style={{ color: "var(--cp-text-muted)" }}>
                          Ihr bringt Kuchen & Getränke selbst mit
                        </p>
                      </div>
                      <p className="text-2xl font-bold" style={{ color: "var(--cp-light)" }}>
                        300,– €
                      </p>
                    </div>
                    <div
                      className="rounded-2xl p-7 flex justify-between items-center border-2"
                      style={{ backgroundColor: "var(--cp-card)", borderColor: "var(--cp-light)" }}
                    >
                      <div>
                        <p className="text-lg font-semibold" style={{ color: "var(--cp-deep)" }}>
                          Inkl. Verpflegung
                        </p>
                        <p className="text-sm mt-1" style={{ color: "var(--cp-text-muted)" }}>
                          Kuchen und Getränke inklusive
                        </p>
                      </div>
                      <p className="text-2xl font-bold" style={{ color: "var(--cp-light)" }}>
                        350,– €
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cancellation */}
                <div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "var(--cp-deep)" }}
                  >
                    Stornierungsbedingungen
                  </h3>
                  <div className="space-y-3">
                    {[
                      { when: "Bis 2 Wochen vorher", cost: "Kostenfrei" },
                      { when: "Bis 4 Tage vorher", cost: "25 % des Preises" },
                      { when: "Bis 2 Tage vorher", cost: "50 % des Preises" },
                      { when: "Ab 2 Tage vorher / Nichterscheinen", cost: "100 % des Preises" },
                    ].map((r) => (
                      <div
                        key={r.when}
                        className="flex justify-between items-center py-2.5 border-b"
                        style={{ borderColor: "var(--cp-bg-alt)" }}
                      >
                        <span className="text-base" style={{ color: "var(--cp-text)" }}>
                          {r.when}
                        </span>
                        <span className="text-base font-semibold" style={{ color: "var(--cp-deep)" }}>
                          {r.cost}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105"
                  style={{ backgroundColor: "var(--cp-light)" }}
                >
                  Termin anfragen <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ────────────────────────────────────── */}
      <section className="py-12" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="text-2xl font-semibold mb-8 text-center" style={{ color: "var(--cp-deep)" }}>
              Eindrücke vom Pferdehof
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={i * 30}>
                <div className="aspect-square rounded-2xl overflow-hidden relative shadow">
                  <LightboxImage
                    src={src}
                    alt={`Kindergeburtstag am Pferdehof ${i + 1}`}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: "var(--cp-accent)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2
              className="text-4xl font-semibold mb-6"
              style={{ color: "var(--cp-deep)", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Ein Geburtstag, den alle in Erinnerung behalten!
            </h2>
            <p className="text-lg mb-10" style={{ color: "var(--cp-text-dark)" }}>
              Melde dich früh genug – beliebte Termine sind schnell vergeben.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold bg-white transition-all hover:scale-105"
              style={{ color: "var(--cp-deep)" }}
            >
              Jetzt Termin anfragen <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
