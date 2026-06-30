import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Unsere Pferde – Kompetenz Pferd",
  description:
    "Lerne Juliano und Ing Baier kennen – die vierbeinigen Herzen von Kompetenz Pferd.",
};

const horses = [
  {
    name: "Juliano",
    breed: "Traber",
    image: "/unserepferde_juliano.jpg",
    description:
      "Juliano ist ein einfühlsamer und aufmerksamer Traber, der schon vielen Menschen geholfen hat, zu sich selbst zu finden. Mit seiner ruhigen Art und seiner feinen Wahrnehmung ist er ein idealer Co-Trainer im Mentaltraining.",
    traits: ["Einfühlsam", "Geduldig", "Feinfühlig"],
  },
  {
    name: "Ing Baier",
    breed: "Traber",
    image: "/unserepferde_Ing_Baier.jpg",
    description:
      "Ing Baier bringt Energie und Lebensfreude in jede Einheit. Als aufmerksamer und neugieriger Charakter spiegelt er besonders deutlich, wenn Menschen in ihrer Mitte sind – oder eben nicht.",
    traits: ["Energievoll", "Neugierig", "Direkt"],
  },
];

const gallery = Array.from({ length: 21 }, (_, i) => `/unserepferde_galerie_${i + 1}.jpg`);

export default function UnserePferde() {
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
            Unsere vierbeinigen Partner
          </p>
          <h1
            className="text-6xl sm:text-7xl font-semibold mb-7 hero-title"
            style={{ color: "var(--cp-fg)" }}
          >
            Unsere Pferde
          </h1>
          <p
            className="text-xl leading-relaxed hero-subtitle max-w-2xl mx-auto"
            style={{ color: "var(--cp-fg-mid)" }}
          >
            Ohne sie wäre nichts möglich. Juliano und Ing Baier sind die Seele
            von Kompetenz Pferd – ehrlich, weise und unbedingt liebenswert.
          </p>
        </div>
      </section>

      {/* ── HORSES ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--cp-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-28">
            {horses.map((horse, i) => (
              <Reveal key={horse.name} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* For even: image left, text right. For odd: text left, image right. */}
                  {i % 2 === 0 ? (
                    <>
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                        <LightboxImage
                          src={horse.image}
                          alt={horse.name}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={i === 0}
                        />
                      </div>
                      <div className="space-y-6">
                        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--cp-light)" }}>
                          {horse.breed}
                        </p>
                        <h2 className="text-5xl font-semibold" style={{ color: "var(--cp-deep)" }}>
                          {horse.name}
                        </h2>
                        <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                          {horse.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {horse.traits.map((t) => (
                            <span key={t} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "var(--cp-fg)", color: "var(--cp-light)" }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-6">
                        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--cp-light)" }}>
                          {horse.breed}
                        </p>
                        <h2 className="text-5xl font-semibold" style={{ color: "var(--cp-deep)" }}>
                          {horse.name}
                        </h2>
                        <p className="text-lg leading-relaxed" style={{ color: "var(--cp-text)" }}>
                          {horse.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {horse.traits.map((t) => (
                            <span key={t} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "var(--cp-fg)", color: "var(--cp-light)" }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                        <LightboxImage
                          src={horse.image}
                          alt={horse.name}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section className="py-12" style={{ backgroundColor: "var(--cp-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="text-2xl font-semibold mb-8 text-center" style={{ color: "var(--cp-deep)" }}>
              Galerie
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={i * 25}>
                <div className="aspect-square rounded-2xl overflow-hidden relative shadow">
                  <LightboxImage
                    src={src}
                    alt={`Unsere Pferde – Galerie ${i + 1}`}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{ background: "var(--cp-hero-gradient2)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <span className="text-6xl block mb-8">🌿</span>
            <blockquote
              className="text-3xl sm:text-4xl italic font-medium leading-relaxed mb-8"
              style={{ color: "var(--cp-fg-light)", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              „An einem edlen Pferd schätzt man nicht seine Kraft, sondern seinen Charakter."
            </blockquote>
            <p className="text-base mb-10" style={{ color: "var(--cp-tag)" }}>
              — Konfuzius
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "var(--cp-accent)" }}
            >
              Lerne unsere Pferde kennen <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
