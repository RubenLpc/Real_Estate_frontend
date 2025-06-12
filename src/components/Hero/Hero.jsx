// Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.css";

const SLIDE_DURATION = 5000;

// animație cuvinte
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.3 } },
};
const wordVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const timer = setInterval(() => {
      setSlide((curr) => (curr + 1) % 2);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isMobile]);

  const handleClick = () => {
    if (isMobile) return;
    setSlide((curr) => (curr + 1) % 2);
  };

  return (
    <section className="hero-wrapper">
      {/* ─── aici avem gradientul care acoperă tot: slide + caption */}
      <div className="hero">
        
      <motion.div
  key="words"
  className="slide slide-words"
  style={{ backgroundImage: `url('/hero.jpg')` }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  <motion.h1
    className="hero-heading"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.span variants={wordVariants}>
      Baulandentwicklung
    </motion.span>
    <motion.span variants={wordVariants}>
      Betriebsansiedlung
    </motion.span>
    <motion.span variants={wordVariants}>
      Immobilienvermittlung
    </motion.span>
  </motion.h1>

  {/* Blocul “desktop” – apare doar pe ecrane mari */}
  <div className="desktop">
    <p className="desktop-caption">
      Ich begleite Sie bei der Standortwahl, entwickle Bauland mit
      Weitblick und vermittle Immobilien diskret und professionell –
      mit Fokus auf Qualität, Struktur und Vertrauen.
      <br />
      <button className="button desk_btn">
      <a
  href="#core-competencies"
  style={{ textAlign: "right", display: "block" }}
>
  Mehr erfahren…
</a></button>

    </p>
    
  </div>
</motion.div>

        

       
      </div>

      {/* ─── containerul cu paragraful + butonul (afișat doar pe mobil) ─── */}
      <div className="hero-caption-container">
        <img
          src="./logo1.png"
          alt="Dan Dutescu Logo"
          className="hero-caption-logo"
        />
        <p className="hero-caption-text">
          Ich begleite Sie bei der Standortwahl, entwickle Bauland mit
          Weitblick und vermittle Immobilien diskret und professionell –
          mit Fokus auf Qualität, Struktur und Vertrauen.
        </p>
        <button className="button">
        <a href="#core-competencies" >
                    Mehr erfahren…
                  </a></button>
      </div>
    </section>
  );
}
