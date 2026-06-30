import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Einzelcoaching – Mentaltraining – Kompetenz Pferd",
  description:
    "Individuelles Mentaltraining mit Pferden als Co-Trainer. Ziele definieren, Ängste überwinden, Selbstbewusstsein stärken.",
};

const topics = [
  "Ziele finden und klar definieren",
  "Entspannung und emotionale Entlastung",
  "Selbstwert stärken und eigene Stärken entdecken",
  "Ängste überwinden und Authentizität entwickeln",
  "Kommunikationstraining – besser verstehen und verstanden werden",
  "Persönliche Muster erkennen und verändern",
  "Selbstvertrauen im Umgang mit dem Pferd aufbauen",
];

export default function Einzelcoaching() {
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
            Mentaltraining
          </p>
          <h1
            className="text-5xl sm:text-6xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Einzelcoaching
          </h1>
          <p
            className="text-xl leading-relaxed hero-subtitle max-w-2xl mx-auto"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            Eine Stunde, die dich verändern kann. Im Einzelcoaching bekommst du
            den Raum, deine ganz persönlichen Themen zu bearbeiten – mit dem
            Pferd als ehrlichem Spiegel.
          </p>
        </div>
        {/* Hero image strip */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <Image
            src="/einzelcoaching_1.jpg"
            alt="Einzelcoaching mit Pferd – Bernadette Fischl"
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--cp-deep)/30%, transparent)" }} />
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────── */}
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
                    Was wir bearbeiten können
                  </p>
                  <h2
                    className="text-4xl font-semibold mb-6"
                    style={{ color: "var(--cp-deep)" }}
                  >
                    Deine Themen im Fokus
                  </h2>
                  <ul className="space-y-4">
                    {topics.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <CheckCircle2
                          size={20}
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--cp-light)" }}
                        />
                        <span className="text-base" style={{ color: "var(--cp-text)" }}>
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="rounded-2xl p-6 border"
                  style={{ backgroundColor: "var(--cp-bg-alt)", borderColor: "var(--cp-bg-alt)" }}
                >
                  <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--cp-light)" }}>
                    Preis
                  </p>
                  <p className="text-3xl font-bold mb-1" style={{ color: "var(--cp-deep)" }}>
                    90,– €
                  </p>
                  <p className="text-base" style={{ color: "var(--cp-text-muted)" }}>
                    90 Minuten · Einzelperson
                  </p>
                  <p className="text-sm mt-3" style={{ color: "var(--cp-text-muted)" }}>
                    Optional mit ätherischen Ölen von doTERRA
                  </p>
                </div>

                {/* Second image */}
                <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-lg">
                  <LightboxImage
                    src="/einzelcoaching_2.jpg"
                    alt="Coaching-Einheit mit Pferd"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="space-y-8">
                <div>
                  <h2
                    className="text-3xl font-semibold mb-6"
                    style={{ color: "var(--cp-deep)" }}
                  >
                    Wie läuft eine Einheit ab?
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        n: "1",
                        title: "Vorgespräch",
                        text: "Wir klären dein Anliegen und dein Ziel für die Sitzung. Was beschäftigt dich? Was möchtest du klären oder verändern?",
                      },
                      {
                        n: "2",
                        title: "Begegnung mit dem Pferd",
                        text: "Du begegnest dem Pferd auf Augenhöhe – am Boden, ohne Druck. Das Pferd reagiert auf deinen Zustand und gibt dir ehrliches Feedback.",
                      },
                      {
                        n: "3",
                        title: "Coaching & Reflexion",
                        text: "Gemeinsam reflektieren wir, was das Pferd dir gezeigt hat. Welche Muster sind sichtbar geworden? Was kannst du mitnehmen?",
                      },
                      {
                        n: "4",
                        title: "Integration",
                        text: "Du verlässt die Einheit mit konkreten Erkenntnissen und einem klaren nächsten Schritt – für dein Leben, deine Beziehungen oder deinen Alltag.",
                      },
                    ].map((step) => (
                      <div key={step.n} className="flex gap-5">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                          style={{ backgroundColor: "var(--cp-light)" }}
                        >
                          {step.n}
                        </div>
                        <div>
                          <h3
                            className="text-lg font-semibold mb-1"
                            style={{ color: "var(--cp-deep)" }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-base leading-relaxed"
                            style={{ color: "var(--cp-text)" }}
                          >
                            {step.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-base italic" style={{ color: "var(--cp-text-muted)" }}>
                  Sitzungen können am Hof oder als Naturspaziergang stattfinden.
                  Keine Reiterfahrung notwendig. Robuste Kleidung und festes Schuhwerk empfohlen.
                </p>
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
              Jetzt eine Einheit buchen
            </h2>
            <p className="text-lg mb-10" style={{ color: "var(--cp-fg-mid)" }}>
              Ich freue mich auf ein erstes, unverbindliches Gespräch mit dir.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "var(--cp-accent)" }}
            >
              Termin anfragen <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
