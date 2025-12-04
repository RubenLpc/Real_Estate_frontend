// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner innerWidth">
        {/* Stânga – logo */}
        <div className="footer-left">
          <img
            src="../logo6.png"
            alt="Dan Dutescu Real Treuhand Logo"
            className="footer-logo"
          />
        </div>

        {/* Centru – claim */}
        <div className="footer-center">

          <p className="footer-claim-line"><i>Wo Visionen</i></p>
          <p className="footer-claim-line"><i>Fläche finden.</i></p>
        </div>

        {/* Dreapta – contact + social */}
        <div className="footer-right">
          <a href="tel:+436643883786" className="footer-contact-line">
            +43 664 3883 786
          </a>
          <a
            href="mailto:office@fidelia.immo"
            className="footer-contact-line"
          >
            office@fidelia.immo
          </a>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/profile.php?id=61563885246419"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social-link"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/dandutescu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bara de jos – Impressum | Datenschutz */}
      <div className="footer-bottom">
        <a href="/impressum" className="footer-bottom-link">
          Impressum
        </a>
        <span className="footer-bottom-sep">|</span>
        <a href="/datenschutz" className="footer-bottom-link">
          Datenschutz
        </a>
      </div>
    </footer>
  );
};

export default Footer;
