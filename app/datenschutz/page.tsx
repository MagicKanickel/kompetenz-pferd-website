import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – Kompetenz Pferd",
};

export default function Datenschutz() {
  return (
    <>
      <section
        className="pt-36 pb-14 text-center"
        style={{ background: "linear-gradient(135deg, #1a2b0c 0%, #2a4214 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h1 className="text-5xl sm:text-6xl font-semibold hero-title" style={{ color: "#f0f7e8" }}>
            Datenschutz
          </h1>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#faf7f0" }}>
        <div
          className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 bg-white rounded-3xl p-12 shadow-sm space-y-10"
          style={{ color: "#4a3728" }}
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold" style={{ color: "#1a2b0c" }}>
              1. Datenschutz auf einen Blick
            </h2>
            <p className="text-base leading-relaxed">
              Die Betreiberin dieser Website nimmt den Schutz Ihrer
              persönlichen Daten sehr ernst. Personenbezogene Daten werden
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften (DSGVO) sowie dieser
              Datenschutzerklärung behandelt.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold" style={{ color: "#1a2b0c" }}>
              2. Verantwortliche Person
            </h2>
            <p className="text-base leading-relaxed">
              Bernadette Fischl – Kompetenz Pferd
              <br />
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

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold" style={{ color: "#1a2b0c" }}>
              3. Erhebung und Verarbeitung von Daten
            </h2>
            <p className="text-base leading-relaxed">
              Beim Besuch dieser Website werden automatisch technische
              Informationen erhoben, die Ihr Browser an den Server übermittelt
              (z. B. Browsertyp, Betriebssystem, Referrer-URL, IP-Adresse,
              Uhrzeit der Anfrage). Diese Daten sind nicht bestimmten Personen
              zuordenbar und werden nicht mit personenbezogenen Daten
              zusammengeführt.
            </p>
            <p className="text-base leading-relaxed">
              Wenn Sie das Kontaktformular nutzen, werden die von Ihnen
              eingegebenen Daten (Name, E-Mail-Adresse, Nachricht) zur
              Bearbeitung Ihrer Anfrage verarbeitet. Die Daten werden nicht ohne
              Ihre Einwilligung an Dritte weitergegeben.
            </p>
            <p className="text-base leading-relaxed">
              Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold" style={{ color: "#1a2b0c" }}>
              4. Cookies
            </h2>
            <p className="text-base leading-relaxed">
              Diese Website verwendet ausschließlich technisch notwendige
              Cookies, die für den Betrieb der Seite erforderlich sind. Es
              werden keine Tracking- oder Analyse-Cookies gesetzt.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold" style={{ color: "#1a2b0c" }}>
              5. Ihre Rechte
            </h2>
            <p className="text-base leading-relaxed">
              Sie haben gemäß DSGVO jederzeit das Recht auf:
            </p>
            <ul className="list-disc list-inside space-y-1 text-base leading-relaxed ml-2">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch gegen die Verarbeitung</li>
            </ul>
            <p className="text-base leading-relaxed">
              Wenden Sie sich für die Ausübung dieser Rechte bitte per E-Mail an{" "}
              <a
                href="mailto:bernadette-fischl@gmx.at"
                className="underline"
                style={{ color: "#3d5e1e" }}
              >
                bernadette-fischl@gmx.at
              </a>
              .
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold" style={{ color: "#1a2b0c" }}>
              6. Beschwerderecht
            </h2>
            <p className="text-base leading-relaxed">
              Sie haben das Recht, sich bei der österreichischen
              Datenschutzbehörde (DSB) zu beschweren, wenn Sie der Ansicht
              sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen
              die DSGVO verstößt. Weitere Informationen:{" "}
              <a
                href="https://www.dsb.gv.at"
                className="underline"
                style={{ color: "#3d5e1e" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                www.dsb.gv.at
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
