import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Das Pferd als Co-Trainer – Kompetenz Pferd",
  description:
    "Warum Pferde ideale Co-Trainer sind: Sie spiegeln unbewusste Muster und geben ehrliches, wertungsfreies Feedback.",
};

const qualities = [
  {
    title: "Vollständige Authentizität",
    text: "Pferde vertrauen nur dem, was wirklich ist. Sie reagieren auf unseren inneren Zustand – nicht auf das, was wir zeigen wollen. Inkongruenz zwischen Gesagtem und Gefühltem spüren sie sofort.",
  },
  {
    title: "Kein Urteil, kein Motiv",
    text: "Das Pferd hat kein persönliches Interesse daran, dir zu schmeicheln oder dich zu kritisieren. Es gibt neutrales Feedback – ohne Agenda, ohne Erwartung, ohne Hintergedanken.",
  },
  {
    title: "Der beste Spiegel",
    text: '„Das Pferd ist der beste Spiegel unserer unbewussten Verhaltensweisen." Was uns im Alltag verborgen bleibt, zeigt sich in der Begegnung mit dem Pferd oft sehr deutlich.',
  },
  {
    title: "Ursprüngliche Weisheit",
    text: "Als Herdentiere sind Pferde seit Jahrmillionen auf nonverbale Kommunikation angewiesen. Ihr Überleben hing davon ab. Dieses evolutionäre Erbe macht sie zu einzigartigen Partnern im Coaching.",
  },
];

export default function CoTrainer() {
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
            className="text-4xl sm:text-5xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Das Pferd als Co-Trainer
          </h1>
          <p
            className="text-xl leading-relaxed hero-subtitle max-w-2xl mx-auto"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            Pferde verlassen sich vollständig auf ihre Herde und vertrauen nur
            dem, was authentisch ist. Genau das macht sie zu den ehrlichsten
            Coaches der Welt.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div className="space-y-7 text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                <p>
                  Stell dir vor, du lächelst – aber innerlich bist du ärgerlich oder traurig.
                  In menschlichen Beziehungen kommt diese Diskrepanz oft durch. Im Umgang mit
                  dem Pferd ist das sofort spürbar: Es weicht zurück, zeigt Desinteresse oder
                  reagiert mit Unruhe.
                </p>
                <p>
                  Wenn du hingegen wirklich präsent bist, wenn deine Worte und dein innerer
                  Zustand übereinstimmen, dann öffnet sich das Pferd. Es kommt näher. Es
                  vertraut. Dieses unmittelbare Feedback verändert Menschen.
                </p>
                <p>
                  In der Arbeit mit dem Pferd gibt es keine Möglichkeit zu täuschen.
                  Das ist manchmal unbequem – aber immer ehrlich. Und genau diese Ehrlichkeit
                  ist das wertvollste Werkzeug in jedem Coaching-Prozess.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                <LightboxImage
                  src="/co-trainer_1.jpg"
                  alt="Das Pferd als Co-Trainer – Mensch und Pferd in Begegnung"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── QUALITIES ────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center mb-14">
              <h2
                className="text-4xl font-semibold"
                style={{ color: "var(--cp-deep)" }}
              >
                Warum Pferde einzigartige Co-Trainer sind
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {qualities.map((q, i) => (
              <Reveal key={q.title} delay={i * 80}>
                <div
                  className="rounded-3xl p-9 h-full border-l-4"
                  style={{
                    backgroundColor: "var(--cp-card)",
                    borderLeftColor: "var(--cp-light)",
                  }}
                >
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "var(--cp-deep)" }}
                  >
                    {q.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--cp-text)" }}>
                    {q.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ────────────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{ background: "var(--cp-hero-gradient)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <blockquote
              className="text-2xl sm:text-3xl italic font-medium leading-relaxed mb-8"
              style={{ color: "var(--cp-fg-light)", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              „Das Pferd ist der beste Spiegel unserer unbewussten Verhaltensweisen –
              weil es nie lügt."
            </blockquote>
            <p className="text-base mb-10" style={{ color: "var(--cp-tag)" }}>
              — Bernadette Fischl
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mentaltraining/einzelcoaching"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: "var(--cp-accent)" }}
              >
                Einzelcoaching buchen <ArrowRight size={18} />
              </Link>
              <Link
                href="/mentaltraining/was-ist-mentaltraining"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold border-2 transition-all hover:bg-white/10"
                style={{ borderColor: "var(--cp-tag)", color: "var(--cp-fg)" }}
              >
                Mehr über Mentaltraining
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
