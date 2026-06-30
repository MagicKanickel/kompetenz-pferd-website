import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Heart, MessageCircle, Shield } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Was ist Mentaltraining? – Kompetenz Pferd",
  description:
    "Erfahre, wie pferdegestütztes Coaching funktioniert und warum Pferde ideale Co-Trainer für persönliches Wachstum sind.",
};

const pillars = [
  {
    icon: <Eye size={24} />,
    title: "Ehrliche Spiegelung",
    text: "Pferde reagieren auf das, was wirklich in uns passiert – nicht auf Fassaden oder Masken. Sie sind authentische Biofeedback-Geber.",
  },
  {
    icon: <Heart size={24} />,
    title: "Keine Wertung",
    text: "Ein Pferd urteilt nicht. Es gibt neutrales Feedback ohne persönliche Motive, Vorannahmen oder soziale Erwartungen.",
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Körpersprache pur",
    text: "In der Begegnung mit dem Pferd lernen wir, bewusster mit unserer Körpersprache umzugehen – ein Schlüssel zu echter Kommunikation.",
  },
  {
    icon: <Shield size={24} />,
    title: "Keine Reiterfahrung nötig",
    text: "Alle Einheiten finden am Boden statt. Reiten ist nicht Teil des Coachings – im Fokus steht die Verbindung, nicht der Sport.",
  },
];

export default function WasIstMentaltraining() {
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
            Grundlagen
          </p>
          <h1
            className="text-5xl sm:text-6xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Was ist Mentaltraining?
          </h1>
          <p
            className="text-xl leading-relaxed hero-subtitle max-w-2xl mx-auto"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            Pferdegestütztes Coaching ist eine wirkungsvolle Methode zur
            Persönlichkeitsentwicklung – für Menschen jedes Alters und ohne
            jegliche Reiterfahrung.
          </p>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="space-y-8 text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
              <p>
                Während meiner Ausbildung zur tiergestützten Coach stellte ich erstaunt fest:
                Mein Vorwissen über Reiten war dabei völlig unerheblich. Denn es ging nicht
                um Sport – es ging um mich. Darum, wie ich kommuniziere, was ich wirklich
                fühle und welche Muster ich unbewusst wiederhole.
              </p>
              <p>
                Pferde sind Herdentiere und damit vollständig auf nonverbale Signale
                angewiesen. Sie spüren sofort, wenn jemand lächelt, aber innerlich aufgeregt,
                wütend oder ängstlich ist. Diese Inkongruenz zwischen äußerem Verhalten und
                innerem Zustand zeigen sie klar – durch Abwenden, Unruhe oder mangelndes
                Vertrauen.
              </p>
              <p>
                Wenn das Pferd hingegen Ruhe bleibt, sich nähert oder besondere Reaktionen
                zeigt, bekommt die Person ein sofortiges, unverfälschtes Feedback. Dieses
                Erlebnis öffnet Türen zur Selbstreflexion, die konventionelles Coaching oft
                nicht erreicht.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PILLARS ──────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold" style={{ color: "var(--cp-deep)" }}>
                Die vier Grundprinzipien
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div
                  className="rounded-3xl p-9 h-full"
                  style={{ backgroundColor: "var(--cp-card)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "var(--cp-fg)", color: "var(--cp-light)" }}
                  >
                    {p.icon}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "var(--cp-deep)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--cp-text)" }}>
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ───────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2
              className="text-3xl font-semibold mb-8"
              style={{ color: "var(--cp-deep)" }}
            >
              Was erwartet mich in einer Einheit?
            </h2>
          </Reveal>
          <div className="space-y-6">
            {[
              { step: "01", title: "Ankommen & Ausrichten", text: "Wir beginnen mit einem Gespräch zu deinem aktuellen Anliegen. Welches Thema, welches Ziel möchtest du heute bearbeiten?" },
              { step: "02", title: "Begegnung mit dem Pferd", text: "In der Begegnung am Boden – ohne Sattel, ohne Zaumzeug – zeigst du dich dem Pferd. Es reagiert auf deinen inneren Zustand." },
              { step: "03", title: "Reflexion & Integration", text: "Gemeinsam besprechen wir, was das Pferd gespiegelt hat. Was bedeutet das für dein alltägliches Leben? Was kannst du jetzt anders machen?" },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <div className="flex gap-6 items-start">
                  <span
                    className="text-3xl font-bold shrink-0 leading-none mt-1"
                    style={{ color: "var(--cp-bg-alt)" }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: "var(--cp-deep)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: "var(--cp-text)" }}>
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{ background: "var(--cp-hero-gradient)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="text-4xl font-semibold mb-6" style={{ color: "var(--cp-fg)" }}>
              Bereit für dein erstes Erlebnis?
            </h2>
            <p className="text-lg mb-10" style={{ color: "var(--cp-fg-mid)" }}>
              Entscheide dich für Einzelcoaching oder ein Gruppenangebot – ich begleite dich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mentaltraining/einzelcoaching"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: "var(--cp-accent)" }}
              >
                Zum Einzelcoaching <ArrowRight size={18} />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold border-2 transition-all hover:bg-white/10"
                style={{ borderColor: "var(--cp-tag)", color: "var(--cp-fg)" }}
              >
                Fragen? Kontakt aufnehmen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
