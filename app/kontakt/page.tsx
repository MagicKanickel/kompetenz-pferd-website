import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Kontakt – Kompetenz Pferd",
  description:
    "Kontaktiere Bernadette Fischl für Anfragen zu Mental Training, Pferdetraining, Duftnasenarbeit und Kinderangeboten.",
};

export default function Kontakt() {
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
            Ich freue mich auf dich
          </p>
          <h1
            className="text-6xl sm:text-7xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Kontakt
          </h1>
          <p className="text-xl leading-relaxed hero-subtitle" style={{ color: "var(--cp-fg-mid)" }}>
            Hast du Fragen oder möchtest du einen Termin anfragen? Melde dich
            einfach – ich bin gerne für dich da.
          </p>
        </div>
      </section>

      {/* ── CONTACT CONTENT ──────────────────────────────────── */}
      <section className="py-24 lg:py-36" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

            {/* Left: contact info */}
            <Reveal direction="left">
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-semibold mb-8" style={{ color: "var(--cp-deep)" }}>
                    So erreichst du mich
                  </h2>
                  <div className="space-y-7">
                    <a href="tel:069910361439" className="flex items-start gap-5 group">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "var(--cp-fg)", color: "var(--cp-light)" }}
                      >
                        <Phone size={20} />
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-wider mb-1"
                          style={{ color: "var(--cp-text-muted)" }}
                        >
                          Telefon / WhatsApp
                        </p>
                        <p
                          className="text-lg font-medium group-hover:underline"
                          style={{ color: "var(--cp-deep)" }}
                        >
                          0699 / 103 61 439
                        </p>
                      </div>
                    </a>

                    <a href="mailto:bernadette-fischl@gmx.at" className="flex items-start gap-5 group">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "var(--cp-fg)", color: "var(--cp-light)" }}
                      >
                        <Mail size={20} />
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-wider mb-1"
                          style={{ color: "var(--cp-text-muted)" }}
                        >
                          E-Mail
                        </p>
                        <p
                          className="text-lg font-medium group-hover:underline"
                          style={{ color: "var(--cp-deep)" }}
                        >
                          bernadette-fischl@gmx.at
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "var(--cp-fg)", color: "var(--cp-light)" }}
                      >
                        <Clock size={20} />
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-wider mb-1"
                          style={{ color: "var(--cp-text-muted)" }}
                        >
                          Erreichbarkeit
                        </p>
                        <p className="text-base" style={{ color: "var(--cp-deep)" }}>
                          Mo – Fr: 9:00 – 18:00 Uhr
                        </p>
                        <p className="text-base mt-0.5" style={{ color: "var(--cp-text)" }}>
                          Antwort i. d. R. innerhalb von 24 Stunden
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "var(--cp-fg)", color: "var(--cp-light)" }}
                      >
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-wider mb-1"
                          style={{ color: "var(--cp-text-muted)" }}
                        >
                          Standort
                        </p>
                        <p className="text-base" style={{ color: "var(--cp-deep)" }}>Österreich</p>
                        <p className="text-base mt-0.5" style={{ color: "var(--cp-text)" }}>
                          Hausbesuche österreichweit möglich
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: "var(--cp-fg)" }}>
                  <div className="aspect-[4/3] flex flex-col items-center justify-center gap-3 text-center p-10">
                    <span className="text-7xl">🏡</span>
                    <p className="text-base font-medium" style={{ color: "var(--cp-light)" }}>
                      Foto vom Hof folgt
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal direction="right" delay={100}>
              <div
                className="rounded-3xl p-10 shadow-sm"
                style={{ backgroundColor: "var(--cp-card)" }}
              >
                <h2 className="text-3xl font-semibold mb-8" style={{ color: "var(--cp-deep)" }}>
                  Schreib mir eine Nachricht
                </h2>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
