import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Über mich – Kompetenz Pferd",
  description:
    "Lernen Sie Bernadette Fischl kennen – Pferdetrainerin, Mental Coach und leidenschaftliche Reiterin aus Österreich.",
};

const qualifications = [
  "Ausgebildete Mental Trainerin für Reiterinnen und Reiter",
  "Zertifizierte Trainerin für Duftnasenarbeit beim Pferd",
  "Langjährige Erfahrung in der Pferdeausbildung",
  "Spezialisierung auf Pferd-Mensch-Kommunikation",
  "Ausbildung in pferdegestütztem Lernen",
  "Erste-Hilfe am Pferd",
];

const values = [
  {
    emoji: "💚",
    title: "Respekt",
    text: "Das Pferd ist kein Sportgerät, sondern ein empfindungsfähiges Lebewesen mit eigenem Charakter, das unseren Respekt verdient.",
  },
  {
    emoji: "🌿",
    title: "Natürlichkeit",
    text: "Ich orientiere mich an den natürlichen Bedürfnissen und Verhaltensweisen des Pferdes – ohne Zwang, mit Verständnis.",
  },
  {
    emoji: "🤝",
    title: "Partnerschaft",
    text: "Mensch und Pferd als Team. Eine echte Verbindung entsteht nur durch gegenseitiges Vertrauen und aufrichtige Kommunikation.",
  },
  {
    emoji: "📚",
    title: "Weiterentwicklung",
    text: "Ich bilde mich kontinuierlich weiter, um meinen Klientinnen und Klienten stets das Beste bieten zu können.",
  },
];

export default function UeberMich() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section
        className="pt-36 pb-24 text-center"
        style={{ background: "var(--cp-hero-gradient)" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <p
            className="text-base font-semibold tracking-widest uppercase mb-5 hero-tag"
            style={{ color: "var(--cp-tag)" }}
          >
            Meine Geschichte
          </p>
          <h1
            className="text-6xl sm:text-7xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Über mich
          </h1>
          <p
            className="text-xl leading-relaxed hero-subtitle"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            Bernadette Fischl – Pferdetrainerin, Mental Coach und leidenschaftliche
            Reiterin aus Österreich.
          </p>
        </div>
      </section>

      {/* ── MY STORY ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-36" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <Reveal direction="left">
              <div className="space-y-5 lg:sticky lg:top-32">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative">
                  <LightboxImage
                    src="/uebermich_1.jpg"
                    alt="Bernadette Fischl – Pferdetrainerin und Mental Coach"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-right"
                    priority
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-2xl overflow-hidden relative shadow">
                    <LightboxImage
                      src="/uebermich_2.jpg"
                      alt="Bernadette Fischl mit Pferd"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden relative shadow">
                    <LightboxImage
                      src="/uebermich_3.jpg"
                      alt="Bernadette Fischl beim Training"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-12">
              <Reveal delay={100}>
                <div className="space-y-5">
                  <h2 className="text-3xl font-semibold" style={{ color: "var(--cp-deep)" }}>
                    Meine Leidenschaft – Pferde
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                    Schon als kleines Mädchen war ich von Pferden fasziniert. Die Kraft, die
                    Eleganz, die Sanftheit – diese Tiere haben etwas Magisches. Was als
                    Leidenschaft begann, wurde mit den Jahren immer mehr zu meinem Beruf
                    und meiner tiefsten Berufung.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                    Heute verbinde ich meine langjährige Erfahrung als Pferdetrainerin mit
                    modernem Mental Coaching für Reiterinnen und Reiter. Ich glaube daran,
                    dass die Arbeit mit Pferden nicht nur sportlich, sondern auch
                    persönlichkeitsstärkend ist.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="space-y-5">
                  <h2 className="text-3xl font-semibold" style={{ color: "var(--cp-deep)" }}>
                    Mein Ansatz
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                    Jedes Pferd ist einzigartig – genauso wie jeder Mensch. Ich nehme mir
                    Zeit, die Persönlichkeit von Pferd und Reiter zu verstehen, bevor ich
                    mit dem Training beginne. Denn nur was passt, funktioniert auch langfristig.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                    Ob Mental Training, Duftnasenarbeit oder einfühlsames Pferdetraining:
                    Bei mir steht das Wohlbefinden des Tieres immer an erster Stelle.
                    Pferde lernen am besten, wenn sie entspannt sind und Freude an der
                    Aufgabe haben.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="space-y-5">
                  <h2 className="text-3xl font-semibold" style={{ color: "var(--cp-deep)" }}>
                    Meine Ausbildung
                  </h2>
                  <ul className="space-y-4">
                    {qualifications.map((q) => (
                      <li key={q} className="flex items-start gap-4">
                        <CheckCircle2
                          size={20}
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--cp-light)" }}
                        />
                        <span className="text-base" style={{ color: "var(--cp-text)" }}>
                          {q}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-36" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <p
                className="text-base font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--cp-light)" }}
              >
                Was mich antreibt
              </p>
              <h2
                className="text-4xl lg:text-5xl font-semibold"
                style={{ color: "var(--cp-deep)", fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Meine Werte
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="bg-white rounded-3xl p-10 shadow-sm h-full">
                  <span className="text-5xl block mb-5">{v.emoji}</span>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--cp-deep)" }}>
                    {v.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--cp-text)" }}>
                    {v.text}
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
        style={{ background: "var(--cp-hero-gradient2)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2
              className="text-4xl sm:text-5xl font-semibold mb-6"
              style={{ color: "var(--cp-fg)" }}
            >
              Lerne mich persönlich kennen
            </h2>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--cp-fg-mid)" }}>
              Ich freue mich auf ein unverbindliches Erstgespräch – per Telefon oder
              direkt am Hof.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "var(--cp-accent)" }}
            >
              Kontakt aufnehmen
              <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
