import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Angebote – Kompetenz Pferd",
  description:
    "Mental Training, Pferdetraining, Pferdewiese, Duftnasenarbeit, Kinderangebote, Kindergeburtstag und Magnetfelddecke – alle Angebote von Kompetenz Pferd.",
};

const services = [
  {
    id: "mental-training",
    emoji: "🧠",
    tag: "Für Reiterinnen & Reiter",
    title: "Mental Training",
    intro:
      "Das Reiten ist zu 80 % Kopfsache. Mental Training hilft dir, Blockaden zu lösen, Nervosität zu überwinden und deine Verbindung zum Pferd auf ein neues Level zu bringen.",
    details: [
      {
        subtitle: "Einzelcoaching (90 Min.)",
        text: "Im Einzelsetting arbeiten wir gezielt an deinen persönlichen Themen: Lampenfieber vor dem Turnier, mangelndes Vertrauen zum Pferd, Angst nach einem Sturz oder schlicht der Wunsch, harmonischer zu reiten. Du erhältst konkrete Werkzeuge für den Alltag.",
      },
      {
        subtitle: "Gruppencoaching",
        text: "In der Gruppe erleben wir, dass wir mit unseren Herausforderungen nicht allein sind. Gruppencoaching schafft Gemeinschaft, Impulse und gemeinsames Wachstum – auf dich und dein Pferd abgestimmt.",
      },
      {
        subtitle: "Co-Trainer Programm",
        text: "Du bist selbst Trainerin oder Trainer und möchtest dein Coaching mit mentalen Elementen bereichern? Im Co-Trainer Programm lernst du, wie du Mental Training in deinen Unterricht integrierst.",
      },
    ],
    ctaHref: "/preise#mental-training",
    ctaLabel: "Preise ansehen",
  },
  {
    id: "pferdetraining",
    emoji: "🐴",
    tag: "Für dein Pferd",
    title: "Pferdetraining",
    intro:
      "Jedes Pferd ist einzigartig. Mein Pferdetraining setzt dort an, wo dein Pferd gerade steht – ohne Druck, ohne Tricks, mit echtem Verständnis für seine Sprache.",
    details: [
      {
        subtitle: "Reitunterricht auf deinem Pferd",
        text: "Ich komme zu dir und begleite euch beim Training direkt vor Ort. Egal ob Grundausbildung, Probleme im Galopp oder das Erarbeiten von Lektionen – wir schauen gemeinsam, was dein Pferd braucht.",
      },
      {
        subtitle: "Bodenarbeit & Freiarbeit",
        text: "Eine gute Verbindung beginnt am Boden. Durch gezielte Bodenarbeit stärkst du das Vertrauen deines Pferdes und legst die Basis für eine harmonische Zusammenarbeit – ob später im Sattel oder einfach im Alltag.",
      },
    ],
    ctaHref: "/preise#pferdetraining",
    ctaLabel: "Preise ansehen",
  },
  {
    id: "pferdewiese",
    emoji: "🌿",
    tag: "Begegnung & Entspannung",
    title: "Pferdewiese",
    intro:
      "Die Pferdewiese ist ein besonderer Ort der Begegnung: Hier dürfen Pferde einfach Pferde sein – und Menschen einfach Menschen. Kein Programm, keine Erwartungen.",
    details: [
      {
        subtitle: "Was dich erwartet",
        text: "Auf der Pferdewiese hast du die Möglichkeit, Pferde in ihrem natürlichen Umfeld zu erleben. Du kannst beobachten, dich annähern oder einfach in ihrer Gegenwart zur Ruhe kommen. Pferde zeigen uns viel über uns selbst.",
      },
      {
        subtitle: "Für wen ist das?",
        text: "Die Pferdewiese eignet sich für alle, die Pferde mögen, aber vielleicht noch wenig Erfahrung haben – und für erfahrene Reiterinnen und Reiter, die mal abseits von Leistung und Training die Seele baumeln lassen möchten.",
      },
    ],
    ctaHref: "/kontakt",
    ctaLabel: "Anfragen",
  },
  {
    id: "duftnasenarbeit",
    emoji: "🌸",
    tag: "Beschäftigung & Förderung",
    title: "Duftnasenarbeit",
    intro:
      "Pferde sind Meister der feinen Nase. Duftnasenarbeit – auch Scent Work genannt – aktiviert ihren natürlichen Suchinstinkt und fördert Konzentration, Selbstvertrauen und Freude an der Arbeit.",
    details: [
      {
        subtitle: "Was ist Duftnasenarbeit?",
        text: "Das Pferd lernt, gezielt nach einem bestimmten Duft zu suchen und ihn anzuzeigen. Diese Aufgabe ist mental anspruchsvoll, stärkt die Bindung zum Menschen und ist komplett gewaltfrei. Viele Pferde blühen dabei regelrecht auf.",
      },
      {
        subtitle: "Einzel- & Gruppenangebote",
        text: "Duftnasenarbeit ist sowohl als Einzeleinheit als auch in kleinen Gruppen möglich. Im Gruppenformat lernen Pferde voneinander und der Spaßfaktor ist enorm hoch – für Tier und Mensch.",
      },
    ],
    ctaHref: "/preise#duftnasenarbeit",
    ctaLabel: "Preise ansehen",
  },
  {
    id: "kinderangebote",
    emoji: "🧒",
    tag: "Für Kinder (3–10 Jahre)",
    title: "Kinderangebote",
    intro:
      "Pferde und Kinder – eine magische Kombination. Unsere Kinderangebote vermitteln Respekt, Empathie und Freude auf spielerische Weise.",
    details: [
      {
        subtitle: "Zwergerlreiten (60 Min.)",
        text: "Für Kinder zwischen 3 und 10 Jahren bieten wir geführtes Reiten auf unseren sanften und erfahrenen Pferden an. Unter sorgfältiger Aufsicht erleben die Kleinen hautnah, wie es ist, auf einem Pferd zu sitzen – sicher, sanft und unvergesslich.",
      },
      {
        subtitle: "Reitunterricht auf dem eigenen Pferd",
        text: "Du hast bereits ein Pferd und möchtest deinem Kind die Grundlagen beibringen lassen? Ich komme gerne zu euch und gebe individuellen Reitunterricht, abgestimmt auf das Können des Kindes.",
      },
    ],
    ctaHref: "/preise#kinderangebote",
    ctaLabel: "Preise ansehen",
  },
  {
    id: "geburtstag",
    emoji: "🎂",
    tag: "Für Kinder (max. 8 Kinder)",
    title: "Kindergeburtstag am Pferdehof",
    intro:
      "Ein Kindergeburtstag, den alle noch lange in Erinnerung behalten werden – mit Pferden, Spielen, Spaß und jeder Menge Abenteuer!",
    details: [
      {
        subtitle: "Was ist dabei? (3 Stunden)",
        text: "Geführtes Reiten für alle Kinder, Spiele rund ums Pferd, Pflegeworkshop (Pferd striegeln), ein Blick hinter die Kulissen des Stalllebens. Auf Wunsch inkl. Verpflegung mit Geburtstagskuchen und Snacks.",
      },
      {
        subtitle: "Rahmenbedingungen",
        text: "Die Party findet bei uns am Hof statt. Maximal 8 Kinder, damit jedes Kind ausreichend Aufmerksamkeit und Betreuung bekommt. Bitte kontaktiere mich rechtzeitig, da Termine schnell vergriffen sind.",
      },
    ],
    ctaHref: "/preise#geburtstag",
    ctaLabel: "Preise ansehen",
  },
  {
    id: "magnetfelddecke",
    emoji: "⚡",
    tag: "Wellness für dein Pferd",
    title: "Magnetfelddecke",
    intro:
      "Die Magnetfeldtherapie unterstützt die natürliche Regeneration des Pferdes – besonders nach intensiver Belastung, bei Verspannungen oder als präventive Maßnahme.",
    details: [
      {
        subtitle: "Wie funktioniert es?",
        text: "Die Magnetfelddecke erzeugt ein pulsierendes elektromagnetisches Feld, das die Durchblutung fördert, Muskeln entspannt und die Selbstheilungskräfte des Körpers anregt. Viele Pferde genießen die Behandlung sichtlich.",
      },
      {
        subtitle: "Einzel- & Wochenmiete",
        text: "Du kannst die Magnetfelddecke bei mir als Einzelanwendung buchen oder für eine ganze Woche mieten und zu Hause einsetzen. Ich erkläre dir alles Notwendige und begleite dich bei der ersten Anwendung.",
      },
    ],
    ctaHref: "/preise#magnetfelddecke",
    ctaLabel: "Preise ansehen",
  },
];

export default function Angebote() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section
        className="pt-36 pb-24 text-center"
        style={{ background: "linear-gradient(135deg, #1a2b0c 0%, #2a4214 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-base font-semibold tracking-widest uppercase mb-5 hero-tag" style={{ color: "#8abb5c" }}>
            Alles rund ums Pferd
          </p>
          <h1 className="text-6xl sm:text-7xl font-semibold mb-7 hero-title" style={{ color: "#f0f7e8" }}>
            Meine Angebote
          </h1>
          <p className="text-xl leading-relaxed hero-subtitle" style={{ color: "#b4d38a" }}>
            Von Mental Training über Pferdetraining bis zu unvergesslichen
            Kindergeburtstagen – für jeden etwas dabei.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ────────────────────────────────────── */}
      <div>
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="py-20 lg:py-28 scroll-mt-24"
            style={{ backgroundColor: index % 2 === 0 ? "#faf7f0" : "#f0e8d8" }}
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-14 items-start">
                <Reveal direction="left">
                  <div className="lg:sticky lg:top-32">
                    <div
                      className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-6"
                      style={{ backgroundColor: "#d9ecbd" }}
                    >
                      {service.emoji}
                    </div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#3d5e1e" }}>
                      {service.tag}
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-5 leading-tight" style={{ color: "#1a2b0c" }}>
                      {service.title}
                    </h2>
                    <p className="text-lg leading-relaxed mb-8" style={{ color: "#4a3728" }}>
                      {service.intro}
                    </p>
                    <Link
                      href={service.ctaHref}
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105"
                      style={{ backgroundColor: "#3d5e1e" }}
                    >
                      {service.ctaLabel}
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </Reveal>

                <div className="space-y-6">
                  {service.details.map((detail, di) => (
                    <Reveal key={detail.subtitle} delay={di * 100}>
                      <div className="bg-white rounded-3xl p-9 shadow-sm">
                        <h3 className="text-xl font-semibold mb-4" style={{ color: "#1a2b0c" }}>
                          {detail.subtitle}
                        </h3>
                        <p className="text-base leading-relaxed" style={{ color: "#4a3728" }}>
                          {detail.text}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #2a4214 0%, #1a2b0c 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6" style={{ color: "#f0f7e8" }}>
              Noch Fragen?
            </h2>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: "#b4d38a" }}>
              Ich beantworte gerne alle deine Fragen – per Telefon oder per
              E-Mail. Einfach melden!
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "#d4a853" }}
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
