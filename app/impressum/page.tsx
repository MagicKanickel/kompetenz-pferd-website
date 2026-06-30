import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Kompetenz Pferd",
};

export default function Impressum() {
  return (
    <>
      <section
        className="pt-36 pb-14 text-center"
        style={{ background: "linear-gradient(135deg, #1a2b0c 0%, #2a4214 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h1 className="text-5xl sm:text-6xl font-semibold hero-title" style={{ color: "#f0f7e8" }}>
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#faf7f0" }}>
        <div
          className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 bg-white rounded-3xl p-12 shadow-sm space-y-8"
          style={{ color: "#4a3728" }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: "#1a2b0c" }}>
              Angaben gemäß § 5 ECG
            </h2>
            <p className="text-base leading-relaxed">
              <strong>Bernadette Fischl</strong>
              <br />
              Kompetenz Pferd
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: "#1a2b0c" }}>
              Kontakt
            </h2>
            <p className="text-base leading-relaxed">
              Telefon: 0699 / 103 61 439
              <br />
              E-Mail:{" "}
              <a
                href="mailto:bernadette-fischl@gmx.at"
                className="underline"
                style={{ color: "#3d5e1e" }}
              >
                bernadette-fischl@gmx.at
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: "#1a2b0c" }}>
              Unternehmensgegenstand
            </h2>
            <p className="text-base leading-relaxed">
              Mental Training für Reiterinnen und Reiter, Pferdetraining,
              Duftnasenarbeit, Kinderangebote rund ums Pferd.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: "#1a2b0c" }}>
              Haftungsausschluss
            </h2>
            <p className="text-base leading-relaxed">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte wird keine Gewähr übernommen. Als Diensteanbieter bin ich
              gemäß § 7 Abs.1 ECG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: "#1a2b0c" }}>
              Urheberrecht
            </h2>
            <p className="text-base leading-relaxed">
              Die auf dieser Website veröffentlichten Inhalte und Werke sind
              urheberrechtlich geschützt. Jede Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen
              Autorin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
