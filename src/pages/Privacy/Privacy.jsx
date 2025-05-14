import React from "react";
import "./Privacy.css";

export default function Privacy() {
  return (
    <main className="privacy-container">
      <section className="privacy-section">
        <h1 className="privacy-title">Datenschutzerklärung</h1>

        <h2 className="privacy-subtitle">1. Einleitung</h2>
        <p className="privacy-text">
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
          Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen
          Bestimmungen (DSGVO, TKG). In dieser Datenschutzerklärung informieren
          wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen
          unserer Website.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-subtitle">2. Verantwortlicher</h2>
        <address className="privacy-text">
          Dan Dutescu, BA<br />
          Fidelia.Immo<br />
          Pegasusweg 1, 4030 Linz<br />
          <a href="mailto:office@fidelia.immo" className="privacy-link">office@fidelia.immo</a><br />
          Tel: <a href="tel:+43664388786" className="privacy-link">0664 3883 786</a>
        </address>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-subtitle">3. Datenarten</h2>
        <ul className="privacy-list">
          <li>Kontaktdaten (Name, Telefonnummer, E‑Mail-Adresse)</li>
          <li>Nutzungsdaten (besuchte Seiten, Zugriffszeitpunkt, IP-Adresse)</li>
          <li>Übermittelte Formulardaten (Suchwünsche, Anfragen)</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-subtitle">4. Zweck der Verarbeitung</h2>
        <ul className="privacy-list">
          <li>Bearbeitung Ihrer Anfragen</li>
          <li>Bereitstellung und Optimierung unserer Website</li>
          <li>Immobilienvermittlung und Kommunikation mit Interessenten</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-subtitle">5. Rechtsgrundlagen</h2>
        <p className="privacy-text">
          Grundlage der Verarbeitung sind Art.6 Abs.1 lit. b DSGVO (Vertragserfüllung),
          lit. c DSGVO (rechtliche Verpflichtung) und lit. f DSGVO (berechtigtes
          Interesse). Ihre Einwilligung (Art.6 Abs.1 lit. a DSGVO) wird für Cookies
          separat eingeholt.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-subtitle">6. Speicherdauer</h2>
        <p className="privacy-text">
          Ihre Daten werden nur so lange gespeichert, wie es für den jeweiligen
          Zweck erforderlich ist oder gesetzlich vorgeschrieben wird.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-subtitle">7. Ihre Rechte</h2>
        <p className="privacy-text">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
          der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Bei
          datenschutzrechtlichen Anliegen wenden Sie sich bitte an:
          <a href="mailto:office@fidelia.immo" className="privacy-link">office@fidelia.immo</a>
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-subtitle">8. Beschwerderecht</h2>
        <p className="privacy-text">
          Sie haben das Recht, sich bei der Datenschutzbehörde zu beschweren, wenn
          Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen
          Daten gegen die DSGVO verstößt.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-subtitle">9. Weitere Informationen</h2>
        <p className="privacy-text">
          Detaillierte Informationen finden Sie in unserer vollständigen
          Datenschutzerklärung auf unserer Website.
        </p>
      </section>
    </main>
  );
}
