import React from "react";
import "./Leistungen.css";
import Value from "../../components/Value/Value";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";

const Leistungen = () => {
  return (
    <section id="leistungen" className="lt-wrapper">
      {/* HERO TITLE + BACKGROUND IMAGE */}
      <div className="lt-hero">
        <div className="lt-hero-inner innerWidth">
          <h2 className="lt-heading">
            <span>Kernkompetenzen&nbsp;–</span>
            <br />
            <span>Was wir Ihnen bieten</span>
          </h2>
        </div>

        <div className="lt-hero-image">
          <img src="/contact_back.jpg" alt="Landschaft Österreich" />
        </div>
      </div>

      {/* TEXT + IMAGE SECTION */}
      <div className="lt-section-inner">
        <div className="lt-content innerWidth">
          {/* Coloana imagine */}
          <div className="lt-image-col">
            <div className="lt-image-frame">
              <img
                src="/leistungen.jpg"
                alt="Betriebsansiedlung und Baulandentwicklung"
                className="lt-main-image"
              />
            </div>
          </div>

          {/* Coloana text */}
          <div className="lt-text-col">
            <p className="lt-body">
              Mit langjähriger Erfahrung in der Standortentwicklung,
              Betriebsansiedlung sowie der Vermittlung von Liegenschaften
              begleite ich Sie beim Kauf oder Verkauf Ihrer Immobilie –
              professionell, diskret und individuell auf Ihre Situation
              abgestimmt.
            </p>
            <p className="lt-body">
              Von der ersten unverbindlichen Beratung bis zur Übergabe begleite
              ich Sie persönlich – strukturiert, zielorientiert und mit Blick auf
              Ihre individuellen Bedürfnisse.
            </p>
            <p className="lt-body">
              Ob Pferdehof, landwirtschaftliches Anwesen, Ackerfläche,
              Gewerbegrundstück, Betriebshalle oder Wohnhaus – für jede Immobilie
              entwickle ich eine passende Vermarktungsstrategie.
            </p>
            <p className="lt-body">
              <strong>Mein Ziel:</strong> Das bestmögliche Ergebnis für Sie als
              Eigentümer:in – wirtschaftlich durchdacht, steuerlich sinnvoll und
              emotional stimmig.
            </p>
            <p className="lt-body">
              Darüber hinaus unterstütze ich Sie bei der Entwicklung von
              Baulandentwicklungsprojekten – von der Erstbewertung über das
              Widmungsverfahren bis zur strukturierten Verwertung.
            </p>

            <a href="#contact-us" className="lt-cta-link">
              <button className="lt-cta-button">KONTAKT AUFNEHMEN</button>
            </a>
          </div>
        </div>
      </div>

      {/* Core-competencies acordeon */}
      <Value />

      {/* Formularul “Kontakt” de jos */}
      <ContactForm />
    </section>
  );
};

export default Leistungen;
