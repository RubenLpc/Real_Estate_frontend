// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner paddings innerWidth">
        {/* Stânga: logo + viziune */}
        <div className="footer-col vision">
          <img src="../logo1.png" alt="Dan Dutescu Real Treuhand Logo" className="footer-logo" />
          <a href="/impressum" className="footer-impressum-link">
            Impressum
         </a>
         <br />

          <p className="vision-text">
            Unsere Vision: Den Menschen den besten Ort zum Leben bieten.
          </p>
        </div>

        {/* Dreapta: Impressum card */}
        
      </div>
    </footer>
  );
};

export default Footer;
