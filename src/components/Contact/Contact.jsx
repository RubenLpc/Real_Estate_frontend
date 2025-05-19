import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import { Button } from "@mantine/core";

const Contact = () => {
  
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* linke Seite */}
        <div className="flexColStart c-left">
          <span className="orangeText">Kontakt</span>
          <span className="primaryText">Kontaktieren Sie mich direkt – unkompliziert & persönlich

          </span>
          <span className="secondaryText">
          Ob Beratung, Suchauftrag oder Rückfrage, gerne unterstütze ich Sie individuell bei Ihrem Immobilienanliegen.

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
                    <span className="secondaryText">+43 664 3883 786</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:+43 664 3883 786" rel="noopener noreferrer">
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
                  href="https://wa.me/436643883786"
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
                <a href="sms:+436643883786" className="flexCenter button">
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
                  href="mailto:office@fidelia.immo?subject=Anfrage"
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
            <img src="./profil.png" alt="Kontaktbild" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
