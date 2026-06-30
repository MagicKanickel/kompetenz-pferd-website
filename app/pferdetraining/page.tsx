import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Pferdetraining – Kompetenz Pferd",
  description:
    "Einfühlsames Pferdetraining: Bodenarbeit, Gelassenheitstraining, Equikinetic, Centered Riding und mehr. Bernadette Fischl.",
};

const services = [
  "Alltagstraining",
  "Bodenarbeit",
  "Gelassenheitstraining",
  "Positionstraining",
  "Gymnastizierende Arbeit",
  "Equikinetic",
  "Mentaltraining für Reiter",
  "Unterricht nach Centered Riding® (Sally Swift) mit eigenem Pferd",
  "Sitzschulung an der Longe",
];

export default function Pferdetraining() {
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
            Für Pferd & Reiter
          </p>
          <h1
            className="text-6xl sm:text-7xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Pferdetraining
          </h1>
          <p
            className="text-xl leading-relaxed hero-subtitle max-w-2xl mx-auto"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            „Das Schwierigste an der Arbeit mit einem Pferd ist die Arbeit an sich selbst."
            Einfühlsames Training – abgestimmt auf die Bedürfnisse jedes Pferdes.
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
        {/* Hero image */}
        <div className="relative h-80 sm:h-[28rem] w-full overflow-hidden">
          <Image
            src="/pferdetraining.jpg"
            alt="Pferdetraining – Bernadette Fischl"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div className="space-y-6">
                <p
                  className="text-base font-semibold tracking-widest uppercase"
                  style={{ color: "var(--cp-light)" }}
                >
                  Meine Philosophie
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-semibold leading-tight"
                  style={{ color: "var(--cp-deep)" }}
                >
                  Harmonie statt Kraft
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                  Pferde lernen am besten, wenn sie entspannt sind und Freude an der
                  Aufgabe haben. Deshalb verzichte ich auf Zwang und setze auf
                  Verstehen, Geduld und konsequente Freundlichkeit.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                  Jedes Pferd ist einzigartig – mit seiner eigenen Geschichte, seinen
                  Stärken und Herausforderungen. Ich nehme mir die Zeit, das Tier
                  wirklich kennenzulernen, bevor ich mit dem Training beginne.
                </p>
                <p className="text-base italic" style={{ color: "var(--cp-text-muted)" }}>
                  Reitunterricht mit eigenem Pferd und Anfahrt nach Vereinbarung.
                  Fahrtkosten: 0,60 € / km oder Hofpauschale 5,– €.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                <LightboxImage
                  src="/pferdetraining_2.jpg"
                  alt="Pferdetraining – Bernadette Fischl beim Unterricht"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-right"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ALLTAGSTRAINING ──────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                <LightboxImage
                  src="/pferdetraining_alltagstraining_1.jpg"
                  alt="Alltagstraining mit dem Pferd"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-right"
                />
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div>
                <p
                  className="text-base font-semibold tracking-widest uppercase mb-6"
                  style={{ color: "var(--cp-light)" }}
                >
                  Meine Angebote
                </p>
                <ul className="space-y-4">
                  {services.map((s) => (
                    <li key={s} className="flex items-start gap-4">
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--cp-light)" }}
                      />
                      <span className="text-base" style={{ color: "var(--cp-text)" }}>
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRICE ────────────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div
              className="rounded-3xl p-10 text-center"
              style={{ backgroundColor: "var(--cp-card)" }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--cp-light)" }}
              >
                Preise
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "var(--cp-bg)" }}
                >
                  <p className="text-3xl font-bold mb-1" style={{ color: "var(--cp-deep)" }}>
                    40,– €
                  </p>
                  <p className="text-base" style={{ color: "var(--cp-text)" }}>
                    Unterricht mit eigenem Pferd
                  </p>
                  <p className="text-sm mt-1" style={{ color: "var(--cp-text-muted)" }}>
                    60 Minuten
                  </p>
                </div>
                <div
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "var(--cp-bg)" }}
                >
                  <p className="text-3xl font-bold mb-1" style={{ color: "var(--cp-deep)" }}>
                    45,– €
                  </p>
                  <p className="text-base" style={{ color: "var(--cp-text)" }}>
                    Zwergerlreiten (3–10 Jahre)
                  </p>
                  <p className="text-sm mt-1" style={{ color: "var(--cp-text-muted)" }}>
                    60 Minuten · auf meinen Pferden
                  </p>
                </div>
              </div>
              <p className="text-sm mb-8" style={{ color: "var(--cp-text-muted)" }}>
                Stornierung bis 24 Stunden vor der Einheit kostenfrei. Danach wird die volle Einheit verrechnet.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: "var(--cp-light)" }}
              >
                Jetzt anfragen <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
