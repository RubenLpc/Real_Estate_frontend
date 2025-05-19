import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* linke Seite */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Baulandentwicklung<br />
              Betriebsansiedlung

              <br /> Immobilienvermittlung

            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Ich begleite Sie bei der Standortwahl, entwickle Bauland </span>
            <span>mit Weitblick und vermittle Immobilien diskret und professionell </span>
          <span>– mit Fokus auf Qualität, Struktur und Vertrauen.</span>
          </div>
{ /* Suchleiste 
          <SearchBar />

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium-Objekte</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Zufriedene Kunden</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Auszeichnungen</span>
            </div>
          </div>*/}
        </div>

        {/* rechte Seite */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="Immobilien" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
