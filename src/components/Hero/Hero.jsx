import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      {/* Partea de sus – secțiune albă, două coloane */}
      <div className="hero-top">
        <div className="hero-left">
          <h1 className="hero-heading">
            Baulandentwicklung <br />
            Betriebsansiedlung <br />
            Immobilienvermittlung
          </h1>
        </div>

        <div className="hero-right">
          <p>
            Ich begleite Sie bei der Standortwahl, entwickle Bauland mit
            Weitblick und vermittle Immobilien diskret und professionell – mit
            Fokus auf Qualität, Struktur und Vertrauen.
          </p>

          <a href="#core-competencies" className="hero-btn">
  MEHR ERFAHREN
</a>
        </div>
      </div>

      {/* Imagine panoramică de jos */}
      <div className="hero-bottom">
        <img src="/hero.jpg" alt="Landschaft" />
      </div>
    </section>
  );
}
