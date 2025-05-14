import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* linke Seite */}
        <div className="flexColStart c-left">
          <span className="orangeText">Kontakt</span>
          <span className="primaryText">Einfach Kontakt aufnehmen</span>
          <span className="secondaryText">
            Wir sind immer bereit, Ihnen die besten Services zu bieten. Wir glauben,
            dass ein schöner Wohnort Ihr Leben verbessern kann.
          </span>

          <div className="flexColStart contactModes">
            {/* erste Zeile */}
            <div className="flexStart row">
              {/* Telefon */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Anrufen</span>
                    <span className="secondaryText">0753 851 305</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:+40753851305" rel="noopener noreferrer">
                    Jetzt anrufen
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaWhatsapp size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">WhatsApp</span>
                    <span className="secondaryText">Chat starten</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/40753851305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flexCenter button"
                >
                  Jetzt chatten
                </a>
              </div>
            </div>

            {/* zweite Zeile */}
            <div className="flexStart row">
              {/* SMS */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">SMS</span>
                    <span className="secondaryText">Nachricht senden</span>
                  </div>
                </div>
                <a href="sms:+40753851305" className="flexCenter button">
                  Jetzt SMS
                </a>
              </div>

              {/* E-Mail */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">E-Mail</span>
                    <span className="secondaryText">E-Mail senden</span>
                  </div>
                </div>
                <a
                  href="mailto:lupancuruben2@gmail.com?subject=Anfrage"
                  className="flexCenter button"
                >
                  Jetzt schreiben
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* rechte Seite */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Kontaktbild" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
