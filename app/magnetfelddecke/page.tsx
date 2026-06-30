import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Magnetfelddecke – Kompetenz Pferd",
  description:
    "INNOVATIV · GANZHEITLICH · WIRKUNGSVOLL. Die Magnetfelddecke mit PEMA-Signal für Pferde, Hunde, Katzen und Menschen.",
};

const modes = [
  {
    name: "RELAX",
    color: "#4a90d9",
    text: "Für Sehnen- und Bänderprobleme. Fördert Entspannung und Regeneration im Gewebe.",
  },
  {
    name: "BALANCE",
    color: "#5cb85c",
    text: "Unterstützt Präsenz, Gleichgewicht und Fokus – ideal vor dem Training.",
  },
  {
    name: "ENERGIZE",
    color: "#f0ad4e",
    text: "Maximale Energie vor körperlicher oder mentaler Belastung. Aktiviert und vitalisiert.",
  },
  {
    name: "SYNCHRONIZE",
    color: "#9b59b6",
    text: "Synchronisiert die Körperrhythmen; harmonisiert Körper, Geist und Seele.",
  },
  {
    name: "TRANSFORM",
    color: "#e74c3c",
    text: "Fördert Regeneration und Durchblutung; unterstützt schnellere Wundheilung.",
  },
];

const gallery = Array.from({ length: 8 }, (_, i) => `/magnetfelddecke_${i + 1}.jpg`);

export default function Magnetfelddecke() {
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
            Innovativ · Ganzheitlich · Wirkungsvoll
          </p>
          <h1
            className="text-6xl sm:text-7xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Magnetfelddecke
          </h1>
          <p
            className="text-xl leading-relaxed hero-subtitle max-w-2xl mx-auto"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            Modernste PEMA-Technologie (pulsierende elektromagnetische Aktivierung)
            für die natürliche Regeneration von Pferd und Mensch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 hero-cta">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "var(--cp-accent)" }}
            >
              Anfragen <ArrowRight size={18} />
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

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                <h2 className="text-4xl font-semibold mb-4" style={{ color: "var(--cp-deep)" }}>
                  Wie funktioniert die Magnetfelddecke?
                </h2>
                <p>
                  Die Magnetfelddecke arbeitet mit dem modernsten PEMA-Signal – pulsierender
                  elektromagnetischer Aktivierung. Dieses Signal unterstützt die natürlichen
                  Regenerationsprozesse des Körpers auf Zellebene und kann zur
                  vorbeugenden oder rehabilitativen Nutzung eingesetzt werden.
                </p>
                <p>
                  Mit 5 Signalmodi und 5 Intensitätsstufen lässt sich die Anwendung
                  präzise auf die aktuellen Bedürfnisse abstimmen. Die Decke ist für
                  Pferde konzipiert, lässt sich aber mit dem veterinären Set auch für
                  Hunde, Katzen und Menschen einsetzen.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                <LightboxImage
                  src="/magnetfelddecke_1.jpg"
                  alt="Magnetfelddecke für Pferde – PEMA Technologie"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── MODES ────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center mb-14">
              <h2
                className="text-4xl font-semibold"
                style={{ color: "var(--cp-deep)" }}
              >
                Die 5 Signalmodi
              </h2>
            </div>
          </Reveal>

          <div className="space-y-5">
            {modes.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <div
                  className="flex gap-6 items-start rounded-2xl p-7"
                  style={{ backgroundColor: "var(--cp-card)" }}
                >
                  <div
                    className="w-28 h-12 rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: m.color }}
                  >
                    {m.name}
                  </div>
                  <p className="text-base leading-relaxed pt-1" style={{ color: "var(--cp-text)" }}>
                    {m.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section className="py-12" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {gallery.slice(1).map((src, i) => (
              <Reveal key={src} delay={i * 50}>
                <div className="aspect-square rounded-2xl overflow-hidden relative shadow">
                  <LightboxImage
                    src={src}
                    alt={`Magnetfelddecke Anwendung ${i + 2}`}
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div
              className="rounded-3xl p-10 text-center"
              style={{ backgroundColor: "var(--cp-bg-alt)" }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-6"
                style={{ color: "var(--cp-light)" }}
              >
                Preise
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                <div
                  className="rounded-2xl p-7"
                  style={{ backgroundColor: "var(--cp-card)" }}
                >
                  <p className="text-3xl font-bold mb-1" style={{ color: "var(--cp-deep)" }}>
                    30,– €
                  </p>
                  <p className="text-base font-medium" style={{ color: "var(--cp-text)" }}>
                    Einzelanwendung
                  </p>
                </div>
                <div
                  className="rounded-2xl p-7"
                  style={{ backgroundColor: "var(--cp-card)" }}
                >
                  <p className="text-3xl font-bold mb-1" style={{ color: "var(--cp-deep)" }}>
                    120,– €
                  </p>
                  <p className="text-base font-medium" style={{ color: "var(--cp-text)" }}>
                    Wochenmietung
                  </p>
                </div>
              </div>
              <p className="text-sm mb-8" style={{ color: "var(--cp-text-muted)" }}>
                Anwendbar für Pferde, Hunde, Katzen und Menschen (veterinäres Set).
                Weitere Infos auch unter{" "}
                <a
                  href="https://centropix.eu/BernadetteFischl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "var(--cp-light)" }}
                >
                  centropix.eu/BernadetteFischl
                </a>
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
