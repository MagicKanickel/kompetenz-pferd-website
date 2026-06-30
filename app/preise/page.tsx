import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Car } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Preise – Kompetenz Pferd",
  description:
    "Alle Preise für Mental Training, Pferdetraining, Duftnasenarbeit, Kinderangebote, Kindergeburtstag und Magnetfelddecke.",
};

const pricingCategories = [
  {
    id: "mental-training",
    emoji: "🧠",
    title: "Mental Training & Coaching",
    items: [
      { name: "Einzelcoaching (90 Min.)", price: "90,00 €" },
      { name: "Lerntraining (60 Min.)", price: "60,00 €" },
      { name: "Gruppencoaching", price: "auf Anfrage" },
      { name: "Co-Trainer Programm", price: "auf Anfrage" },
    ],
    note: null,
  },
  {
    id: "pferdetraining",
    emoji: "🐴",
    title: "Reitunterricht & Pferdetraining",
    items: [
      { name: "Reitunterricht auf deinem Pferd (60 Min.)", price: "40,00 €", sub: "zzgl. Fahrtkosten" },
      { name: "Anfahrt", price: "0,60 €/km", sub: "oder Platzmiete 5,00 €" },
    ],
    note: "Der Unterricht findet bei dir vor Ort statt.",
  },
  {
    id: "kinderangebote",
    emoji: "🧒",
    title: "Kinderangebote",
    items: [
      { name: "Zwergerlreiten (60 Min.) · Alter 3–10 Jahre", price: "45,00 €", sub: "auf unseren Pferden" },
      { name: "Reitunterricht für Kinder (auf eigenem Pferd)", price: "40,00 €", sub: "zzgl. Fahrtkosten" },
    ],
    note: null,
  },
  {
    id: "duftnasenarbeit",
    emoji: "🌸",
    title: "Duftnasenarbeit",
    items: [
      { name: "Einzeleinheit (60 Min.)", price: "60,00 €" },
      { name: "Gruppe: 2 Teilnehmer (60 Min.)", price: "25,00 € / Person" },
      { name: "Gruppe: 3 Teilnehmer (60 Min.)", price: "20,00 € / Person" },
      { name: "Anfahrt", price: "0,60 €/km", sub: "bei Angeboten bei dir vor Ort" },
    ],
    note: "Kurse auf Anfrage – Preis je nach Kursformat.",
  },
  {
    id: "geburtstag",
    emoji: "🎂",
    title: "Kindergeburtstag",
    items: [
      { name: "3 Stunden · max. 8 Kinder · ohne Verpflegung", price: "300,00 €" },
      { name: "3 Stunden · max. 8 Kinder · inkl. Verpflegung", price: "350,00 €" },
    ],
    note: "Bitte frühzeitig anfragen, da Termine begrenzt sind.",
  },
  {
    id: "magnetfelddecke",
    emoji: "⚡",
    title: "Magnetfelddecke",
    items: [
      { name: "Einzelanwendung", price: "30,00 €" },
      { name: "Wochenmiete", price: "120,00 €" },
    ],
    note: "Einweisung in die Anwendung inklusive.",
  },
];

export default function Preise() {
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
            Faire Preise
          </p>
          <h1
            className="text-6xl sm:text-7xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Preisübersicht
          </h1>
          <p className="text-xl leading-relaxed hero-subtitle" style={{ color: "var(--cp-fg-mid)" }}>
            Alle Preise auf einen Blick – transparent und ohne versteckte Kosten.
          </p>
        </div>
      </section>

      {/* ── PRICING GRID ─────────────────────────────────────── */}
      <section className="py-24 lg:py-36" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {pricingCategories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 70}>
                <div
                  id={cat.id}
                  className="rounded-3xl p-9 shadow-sm scroll-mt-28 h-full"
                  style={{ backgroundColor: "var(--cp-card)" }}
                >
                  <div className="flex items-center gap-4 mb-7">
                    <span className="text-4xl">{cat.emoji}</span>
                    <h2 className="text-2xl font-semibold" style={{ color: "var(--cp-deep)" }}>
                      {cat.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {cat.items.map((item) => (
                      <div key={item.name} className="flex justify-between items-start gap-4">
                        <div>
                          <p className="text-base font-medium" style={{ color: "var(--cp-deep)" }}>
                            {item.name}
                          </p>
                          {"sub" in item && item.sub && (
                            <p className="text-sm mt-0.5" style={{ color: "var(--cp-text-muted)" }}>
                              {item.sub}
                            </p>
                          )}
                        </div>
                        <span
                          className="text-base font-bold whitespace-nowrap"
                          style={{ color: "var(--cp-light)" }}
                        >
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {cat.note && (
                    <p
                      className="mt-6 pt-6 text-sm leading-relaxed border-t"
                      style={{ color: "var(--cp-text-muted)", borderColor: "var(--cp-bg-alt)" }}
                    >
                      💡 {cat.note}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div
              className="mt-8 rounded-3xl p-8 flex items-start gap-5"
              style={{ backgroundColor: "var(--cp-fg)" }}
            >
              <Car size={22} className="shrink-0 mt-0.5" style={{ color: "var(--cp-light)" }} />
              <div>
                <p className="text-base font-semibold mb-2" style={{ color: "var(--cp-deep)" }}>
                  Fahrtkosten bei Hausbesuchen
                </p>
                <p className="text-base" style={{ color: "var(--cp-text)" }}>
                  Für Angebote, die ich zu dir nach Hause bringe, werden Fahrtkosten
                  von <strong>0,60 €/km</strong> verrechnet, oder alternativ eine
                  Platzmiete von <strong>5,00 €</strong> – je nachdem, was günstiger ist.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-28" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2
              className="text-3xl font-semibold mb-12 text-center"
              style={{ color: "var(--cp-deep)" }}
            >
              Gut zu wissen
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {[
              {
                q: "Wie buche ich einen Termin?",
                a: "Einfach per Telefon oder über das Kontaktformular melden. Ich melde mich schnellstmöglich zurück und wir finden gemeinsam einen passenden Termin.",
              },
              {
                q: "Gibt es eine Absagemöglichkeit?",
                a: "Ja – Absagen bitte mindestens 24 Stunden vorher. Bei kurzfristiger Absage ohne triftigen Grund wird die Hälfte des Preises in Rechnung gestellt.",
              },
              {
                q: "Sind die Preise inkl. Mehrwertsteuer?",
                a: "Alle angegebenen Preise sind Endpreise inkl. aller Abgaben.",
              },
              {
                q: "Gibt es Gruppenrabatte?",
                a: "Bei regelmäßiger Buchung oder größeren Gruppen sprechen wir gerne über individuelle Konditionen. Einfach anfragen!",
              },
            ].map((item, i) => (
              <Reveal key={item.q} delay={i * 80}>
                <div
                  className="rounded-3xl p-8 shadow-sm h-full"
                  style={{ backgroundColor: "var(--cp-card)" }}
                >
                  <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--cp-deep)" }}>
                    {item.q}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--cp-text)" }}>
                    {item.a}
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
              Bereit loszulegen?
            </h2>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--cp-fg-mid)" }}>
              Frag einfach an – ich helfe dir, das richtige Angebot für dich und
              dein Pferd zu finden.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "var(--cp-accent)" }}
            >
              Jetzt anfragen
              <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
