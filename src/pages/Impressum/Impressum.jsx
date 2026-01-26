import React from "react";
import "./Impressum.css";

const Impressum = () => {
  return (
    <div className="impressum-page">
      <div className="impressum-box">
        <h1>IMPRESSUM</h1>

        <p className="intro">
          Angaben gemäß § 5 E-Commerce-Gesetz (ECG), § 14
          Unternehmensgesetzbuch (UGB) sowie § 24 Mediengesetz (MedienG)
        </p>
        <hr />

        <section>
          <h2>Unternehmensangaben</h2>
          <p>
            <b>fidelia.immo GmbH</b><br />
            Pegasusweg 1<br />
            4030 Linz<br />
            Österreich
          </p>
          <p>
            <b>Telefon:</b> +43 664 3883 786<br />
            <b>E-Mail:</b>{" "}
            <a href="mailto:office@fidelia.immo">office@fidelia.immo</a>
          </p>
        </section>
        <hr />

        <section>
          <h2>Unternehmensform und Vertretung</h2>
          <p>
            <b>Rechtsform: </b>Gesellschaft mit beschränkter Haftung (GmbH)<br />
            <b>Geschäftsführer: </b>Dan Dutescu, BA
          </p>
        </section>
<hr />
        <section>
          <h2>Firmenbuch</h2>
          <p>
            <b>Firmenbuchnummer: </b>FN 668241 h<br />
            <b>Firmenbuchgericht:</b> Landesgericht Linz
          </p>
        </section>
<hr />
        <section>
          <h2>Umsatzsteuer</h2>
          <p><b>UID-Nummer: </b>ATU82793924</p>
        </section>
<hr />
        <section>
          <h2>Gewerberechtliche Angaben</h2>
          <p>
            <b>Unternehmensgegenstand:</b><br />
            Immobilienvermittlung, Standortentwicklung sowie Beratung in
            Immobilienangelegenheiten
          </p>
          <p>
            <b>Gewerbebehörde:</b><br />
            Magistrat Linz
          </p>
          <p>
            <b>Mitgliedschaft:</b><br />
            Wirtschaftskammer Österreich (WKÖ)<br />
            Fachgruppe: Immobilien- und Vermögenstreuhänder
          </p>
          <p>
            <b>Anwendbare Rechtsvorschriften:</b><br />
            Gewerbeordnung 1994 (GewO), Maklergesetz<br />
            Abrufbar unter:{" "}
            <a
              href="https://www.ris.bka.gv.at"
              target="_blank"
              rel="noreferrer"
            >
              https://www.ris.bka.gv.at
            </a>
          </p>
        </section>
<hr />
        <section>
          <h2>Aufsichtsbehörde</h2>
          <p>Magistrat Linz</p>
        </section>
<hr />
        <section>
          <h2>Haftungsausschluss</h2>
          <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Haftung.
          Als Diensteanbieter sind wir gemäß § 18 ECG nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
          </p>
        </section>
<hr />
        <section>
          <h2>Haftung für Links</h2>
          <p>
          Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Haftung. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
          </p>
        </section>
<hr />
        <section>
          <h2>Urheberrecht</h2>
          <p>
          Die auf dieser Website veröffentlichten Inhalte, Texte, Bilder, Grafiken und sonstigen Werke unterliegen dem österreichischen Urheberrecht. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der fidelia.immo GmbH.
          </p>
        </section>
<hr />
        <section>
          <h2>Bildnachweise</h2>
          <p>
          Eigene Aufnahmen sowie lizenzierte Bilder von Drittanbietern (z. B. Fotografen, Bilddatenbanken, Drohnenaufnahmen).
          </p>
        </section>
<hr />
        <section>
          <h2>Online-Streitbeilegung</h2>
          <p>
          Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten:<br />
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            <br />
            Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <a href="/" className="back-link">← Zurück zur Startseite</a>
      </div>
    </div>
  );
};

export default Impressum;
