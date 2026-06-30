import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, Users, Heart, Lightbulb } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Mentaltraining – Kompetenz Pferd",
  description:
    "Mentaltraining für Reiterinnen und Reiter mit Pferden als Co-Trainer. Einzel- und Gruppencoaching von Bernadette Fischl.",
};

const subpages = [
  {
    href: "/mentaltraining/was-ist-mentaltraining",
    icon: <Lightbulb size={28} />,
    title: "Was ist Mentaltraining?",
    text: "Pferde spiegeln unsere inneren Zustände wider. Erfahre, wie equine-gestütztes Coaching funktioniert.",
  },
  {
    href: "/mentaltraining/einzelcoaching",
    icon: <Brain size={28} />,
    title: "Einzelcoaching",
    text: "Individuelles Coaching, abgestimmt auf deine persönlichen Ziele, Stärken und Themen.",
  },
  {
    href: "/mentaltraining/gruppencoaching",
    icon: <Users size={28} />,
    title: "Gruppencoaching",
    text: "Seminare und Workshops für Familien, Unternehmen, Schulklassen und andere Gruppen.",
  },
  {
    href: "/mentaltraining/co-trainer",
    icon: <Heart size={28} />,
    title: "Das Pferd als Co-Trainer",
    text: "Warum Pferde einzigartige Spiegel unseres Verhaltens sind – und was wir von ihnen lernen können.",
  },
];

export default function Mentaltraining() {
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
            Coaching mit Pferden
          </p>
          <h1
            className="text-6xl sm:text-7xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Mentaltraining
          </h1>
          <p
            className="text-xl leading-relaxed hero-subtitle max-w-2xl mx-auto"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            „A horse can change the way you see the world." Pferde als ehrliche Spiegel –
            für ein tieferes Verständnis deiner selbst.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 hero-cta">
            <Link
              href="/mentaltraining/einzelcoaching"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "var(--cp-accent)" }}
            >
              Einzelcoaching <ArrowRight size={18} />
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold border-2 transition-all hover:bg-white/10"
              style={{ borderColor: "var(--cp-tag)", color: "var(--cp-fg)" }}
            >
              Termin anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/mentaltraining_1.jpg"
                    alt="Mentaltraining mit Pferden – Bernadette Fischl"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-6 -right-6 w-36 h-36 rounded-3xl -z-10"
                  style={{ backgroundColor: "var(--cp-bg-alt)" }}
                />
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="space-y-6">
                <p
                  className="text-base font-semibold tracking-widest uppercase"
                  style={{ color: "var(--cp-light)" }}
                >
                  Mein Ansatz
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-semibold leading-tight"
                  style={{ color: "var(--cp-deep)" }}
                >
                  Pferde lügen nicht
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                  Pferde reagieren ausschließlich auf das, was wirklich in uns vorgeht –
                  nicht auf das, was wir nach außen zeigen. Jede Inkongruenz zwischen
                  unseren Worten und unserem inneren Zustand wird sofort gespiegelt.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                  In meinen Trainingseinheiten braucht es keine Reiterfahrung. Im Fokus
                  steht die Begegnung von Mensch und Pferd auf Augenhöhe – ohne Druck,
                  mit ganzem Vertrauen.
                </p>
                <p className="text-base italic leading-relaxed" style={{ color: "var(--cp-text-muted)" }}>
                  Die Sitzungen finden wahlweise am Hof oder als Naturspaziergang statt.
                  Optional kann ich ätherische Öle von doTERRA integrieren.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SUBPAGE CARDS ────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <p
                className="text-base font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--cp-light)" }}
              >
                Entdecke mehr
              </p>
              <h2
                className="text-4xl lg:text-5xl font-semibold"
                style={{ color: "var(--cp-deep)" }}
              >
                Alle Angebote im Überblick
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {subpages.map((sp, i) => (
              <Reveal key={sp.href} delay={i * 80}>
                <Link
                  href={sp.href}
                  className="group block bg-white rounded-3xl p-9 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: "var(--cp-fg)", color: "var(--cp-light)" }}
                  >
                    {sp.icon}
                  </div>
                  <h3
                    className="text-2xl font-semibold mb-3"
                    style={{ color: "var(--cp-deep)" }}
                  >
                    {sp.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-5"
                    style={{ color: "var(--cp-text)" }}
                  >
                    {sp.text}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-base font-semibold group-hover:gap-3 transition-all"
                    style={{ color: "var(--cp-light)" }}
                  >
                    Mehr erfahren <ArrowRight size={16} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ────────────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{ background: "var(--cp-hero-gradient2)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <blockquote
              className="text-3xl sm:text-4xl italic font-medium leading-relaxed mb-6"
              style={{ color: "var(--cp-fg-light)", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              „Das Schwierigste an der Arbeit mit einem Pferd ist die Arbeit an sich selbst."
            </blockquote>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105 mt-8"
              style={{ backgroundColor: "var(--cp-accent)" }}
            >
              Kostenloses Erstgespräch anfragen <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
