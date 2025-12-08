import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact-us" className="contact-wrapper">
      {/* fundal panoramic */}
      <div className="contact-bg"></div>

      {/* cardul suprapus */}
      <div className="contact-card">
        {/* textul din stânga */}
        <div className="contact-left">
          <h2>Kontakt</h2>
          <h3>Kontaktieren Sie mich direkt – unkompliziert & persönlich</h3>
          <p>
            Ob Beratung, Suchauftrag oder Rückfrage, gerne unterstütze ich Sie
            individuell bei Ihrem Immobilienanliegen.
          </p>

          <div className="contact-info">
            <p className="phone">+43 664 3883 786</p>
            <p className="email">office@fidelia.immo</p>
          </div>

          <div className="contact-buttons">
            <a href="tel:+436643883786" className="btn beige">
              JETZT ANRUFEN
            </a>
            <a href="mailto:office@fidelia.immo" className="btn beige">
              E-MAIL SCHREIBEN
            </a>
            <a href="sms:+436643883786" className="btn beige">
              SMS SCHREIBEN
            </a>
            <a
              href="https://wa.me/436643883786"
              target="_blank"
              rel="noopener noreferrer"
              className="btn beige"
            >
              WHATSAPP CHATTEN
            </a>
          </div>
        </div>

        {/* poza din dreapta */}
        <div className="contact-right">
          <img src="/profil1.jpeg" alt="Kontaktbild" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
