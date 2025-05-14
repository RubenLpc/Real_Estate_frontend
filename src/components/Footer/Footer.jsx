// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner paddings innerWidth">
        {/* Stânga: logo + viziune */}
        <div className="footer-col vision">
          <img src="./logo1.png" alt="Dan Dutescu Real Treuhand Logo" className="footer-logo header-logo" />
          <p className="vision-text">
            Unsere Vision: Den Menschen den besten Ort zum Leben bieten.
          </p>
        </div>

        {/* Dreapta: Impressum card */}
        <div className="footer-col impressum-card">
          <h3 className="impressum-title">Impressum</h3>
          <div className="impressum-grid">
            <div>
              <p><span className="field-name">Unternehmensname:</span> Dan Dutescu Real Treuhand GmbH</p>
              <p><span className="field-name">Rechtsform:</span> GmbH</p>
              <p><span className="field-name">Geschäftsführer:</span> Dan Dutescu, BA</p>
              <p><span className="field-name">Firmensitz:</span> Pegasusweg 1, 4030 Linz</p>
              <p><span className="field-name">Telefon:</span> +43 664 3883786</p>
              <p><span className="field-name">E-Mail:</span> office@fidelia.immo</p>
            </div>
            <div>
              <p><span className="field-name">Web:</span> www.fidelia.immo</p>
              <p><span className="field-name">Firmenbuch:</span> FN 123456 a (LG Innsbruck)</p>
              <p><span className="field-name">UID-Nr.:</span> ATU 12345678</p>
              <p><span className="field-name">Gewerbebehörde:</span> BH Linz-Land</p>
              <p><span className="field-name">WK-Mitglied:</span> W Linz, Sparte Immobilien</p>
              <p><span className="field-name">Aufsichtsbehörde:</span> Magistrat Linz</p>
            </div>
          </div>
          <hr className="impressum-sep" />
          <p className="impressum-note">
            <strong>Berufsrecht:</strong> Immobilientreuhänder (Makler), Gewerbeordnung 1994  
            (<a href="https://www.ris.bka.gv.at" target="_blank" rel="noreferrer">RIS</a>)<br/>
            <strong>Bildnachweis:</strong> Eigene Bilder, Adobe Stock, Canva<br/>
            <strong>Haftung:</strong> Für Inhalte externer Links übernehmen wir keine Haftung.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
