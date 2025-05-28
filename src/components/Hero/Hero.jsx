// Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.css";


const SLIDE_DURATION = 5000;

// animaţie cuvinte
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.3 } },
};
const wordVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
// animaţie deco imagine
const decoVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};
const imageVariants = {
  hidden: { scale: 1.2 },
  visible: { scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
};

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setSlide((curr) => (curr + 1) % 2),
      SLIDE_DURATION
    );
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => setSlide((curr) => (curr + 1) % 2);

  return (
    <section
      className="hero"
      onClick={handleClick}
      title="Click pentru a schimba ilustrația"
    >
      {/* logo supradimensionat pe slide-words, mic pe card */}
      

<AnimatePresence mode="wait">
  {slide === 0 ? (
  <motion.div
    key="words"
    className="slide slide-words"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="slide-left">

      <motion.h1
        className="hero-heading"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <motion.span variants={wordVariants}>Baulandentwicklung</motion.span>
        <motion.span variants={wordVariants}>Betriebsansiedlung</motion.span>
        <motion.span variants={wordVariants}>Immobilienvermittlung</motion.span>
      </motion.h1>

      <p className="hero-caption">
      Ich begleite Sie bei der Standortwahl, entwickle Bauland mit Weitblick und vermittle Immobilien diskret und professionell – mit Fokus auf Qualität, Struktur und Vertrauen.
      </p>
    </div>

    <motion.div
      className="slide-right"
      variants={decoVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src="./hero-image.png"
        alt="Clădire interesantă"
        className="words-image"
        variants={imageVariants}
      />
      <div className="image-overlay" />
    </motion.div>
  </motion.div>
)  : (
          <motion.div
            key="card"
            className="slide slide-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card">
              <div className="card-image">
                <img src="./profil_1.jpeg" alt="Dan Dutescu" />
              </div>
              <div className="card-text">
              <div className="logo_card"><img
        src="./logo1.png"
        alt="Dan Dutescu Logo"
        className={`hero-logo ${slide === 0 ? "large" : "small"}`}
      /></div>
                <p className="subtext">
                Ich begleite Sie bei der Standortwahl, entwickle Bauland mit Weitblick und vermittle Immobilien diskret und professionell – mit Fokus auf Qualität, Struktur und Vertrauen.
                </p>
                <a href="#core-competencies" className="cta">
                  Mehr erfahren…
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pagination">
        <button
          className={`dot${slide === 0 ? " active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setSlide(0);
          }}
        />
        <button
          className={`dot${slide === 1 ? " active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setSlide(1);
          }}
        />
      </div>
    </section>
  );
}
