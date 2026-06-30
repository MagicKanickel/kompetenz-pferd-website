import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Schnüffeltraining – Duftnasenarbeit – Kompetenz Pferd",
  description:
    "Duftnasenarbeit aktiviert den natürlichen Suchinstinkt des Pferdes. Einzel- und Gruppentraining von Bernadette Fischl.",
};

export default function Schnuffeltraining() {
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
            Duftnasenarbeit
          </p>
          <h1
            className="text-6xl sm:text-7xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Schnüffeltraining
          </h1>
          <p
            className="text-xl leading-relaxed hero-subtitle max-w-2xl mx-auto"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            Pferde haben eine faszinierende Nase – und wir nutzen dieses Talent.
            Duftnasenarbeit aktiviert den natürlichen Suchinstinkt und bringt
            Freude, Konzentration und Entspannung.
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

      {/* ── WHAT IS IT ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {/* Flyer inline – natürliche Größe, nicht beschnitten */}
              <div className="w-full sm:w-64 sm:shrink-0 rounded-2xl overflow-hidden shadow-xl">
                <LightboxImage
                  src="/schnueffeltraining_1.jpg"
                  alt="Schnüffeltraining Flyer – Duftnasenarbeit mit Pferden"
                  width={300}
                  height={420}
                  priority
                />
              </div>

              <div className="space-y-5 text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                <h2 className="text-4xl font-semibold" style={{ color: "var(--cp-deep)" }}>
                  Was ist Duftnasenarbeit?
                </h2>
                <p>
                  Duftnasenarbeit – auch Schnüffeltraining oder Nose Work genannt –
                  kommt ursprünglich aus dem Hundesport und wurde erfolgreich auf Pferde
                  übertragen. Das Pferd sucht dabei nach versteckten Duftstoffen und wird
                  dabei mit Futter belohnt.
                </p>
                <p>
                  Diese Art von Arbeit spricht tief verwurzelte Instinkte des Pferdes an:
                  das Suchen, das Entdecken, das Fokussieren. Gleichzeitig fördert sie
                  die Bindung zwischen Mensch und Pferd, weil der Mensch lernt,
                  die Signale des Pferdes zu lesen und ihm zu vertrauen.
                </p>
                <p>
                  Besonders für Pferde, die unter Stress, Überreiztheit oder Monotonie im
                  Alltag leiden, ist Duftnasenarbeit ein wertvolles Werkzeug zur
                  Entspannung und mentalen Auslastung.
                </p>
              </div>
            </div>
          </Reveal>
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
                Was Schnüffeltraining bringt
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Mentale Auslastung", text: "Das Suchen nach Düften fordert das Gehirn – ohne körperliche Überanstrengung. Ideal als Ergänzung zum regulären Training." },
              { title: "Stressabbau", text: "Konzentriertes Suchen beruhigt das Nervensystem und reduziert Anspannung – nachweislich auch bei chronisch gestressten Pferden." },
              { title: "Selbstvertrauen", text: "Erfolge beim Suchen stärken das Selbstbewusstsein des Pferdes und fördern positive Lernerfahrungen." },
              { title: "Bindung & Vertrauen", text: "Mensch und Pferd entwickeln gemeinsam eine neue Sprache. Das Pferd lernt, dem Menschen seine Funde zu zeigen." },
              { title: "Freude & Motivation", text: "Schnüffeltraining macht Spaß! Die intrinsische Motivation des Pferdes wird genutzt – ohne Druck, mit viel Belohnung." },
              { title: "Für alle Pferde geeignet", text: "Ob jung oder alt, fit oder in Reha – Duftnasenarbeit ist schonend und lässt sich an jeden Fitnesszustand anpassen." },
            ].map((b, i) => (
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

      {/* ── PFERDEVISION ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-semibold mb-6" style={{ color: "var(--cp-deep)" }}>
                Warum Düfte für Pferde so bedeutsam sind
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                Pferde sind Dichromaten: Ihr Farbsehen ist ähnlich einer menschlichen
                Rot-Grün-Schwäche – sie nehmen die Welt in gedämpfteren Farben wahr.
                Dafür ist ihr Geruchssinn außergewöhnlich ausgeprägt. Mit bis zu
                300&nbsp;Millionen Riechzellen (wir Menschen haben etwa 6&nbsp;Millionen)
                erschnüffeln sie ihre Umgebung mit einer Präzision, die wir uns kaum
                vorstellen können. Genau diese Stärke macht die Duftnasenarbeit zur
                idealen mentalen Herausforderung – artgerecht und hochmotivierend.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <LightboxImage
                src="/schnuffeltraining_pferd_sicht.png"
                alt="Vergleich: Menschliches Trichromates Sehen vs. Pferdes Dichromates Sehen"
                width={1400}
                height={900}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── KOOPERATION ──────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div
              className="rounded-3xl p-10"
              style={{ backgroundColor: "var(--cp-card)" }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--cp-light)" }}
              >
                In Zusammenarbeit mit
              </p>
              <h2 className="text-3xl font-semibold mb-4" style={{ color: "var(--cp-deep)" }}>
                Maria Reiss
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--cp-text)" }}>
                Das Schnüffeltraining biete ich in Kooperation mit Maria Reiss an –
                gemeinsam begleiten wir Pferde und ihre Menschen auf dem Weg zu mehr
                Freude, Vertrauen und mentaler Balance.
              </p>
              <a
                href="https://www.goldmariechen.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: "var(--cp-light)" }}
              >
                www.goldmariechen.at <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PRICES ───────────────────────────────────────────── */}
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                {[
                  { label: "Einzeltraining", price: "60,– €", note: "ca. 60 Min." },
                  { label: "Gruppe (2 Pers.)", price: "25,– €", note: "pro Person · 60 Min." },
                  { label: "Gruppe (3 Pers.)", price: "20,– €", note: "pro Person · 60 Min." },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="rounded-2xl p-6"
                    style={{ backgroundColor: "var(--cp-card)" }}
                  >
                    <p className="text-2xl font-bold mb-1" style={{ color: "var(--cp-deep)" }}>
                      {p.price}
                    </p>
                    <p className="text-sm font-medium mb-1" style={{ color: "var(--cp-deep)" }}>
                      {p.label}
                    </p>
                    <p className="text-sm" style={{ color: "var(--cp-text-muted)" }}>
                      {p.note}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm mb-8" style={{ color: "var(--cp-text-muted)" }}>
                Fahrtkosten: 0,60 € / km · Training findet bei dir oder am Hof statt.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: "var(--cp-light)" }}
              >
                Jetzt buchen <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
