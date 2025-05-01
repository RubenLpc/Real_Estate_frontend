import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'; // pentru SMS
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you. We
            believe a good place to live can make your life better.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">0753 851 305</span>
                  </div>
                </div>
                <div className="flexCenter button">
                <a href="tel:+40753851305" target="_blank" rel="noopener noreferrer">
  Call now
</a>

                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaWhatsapp size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">WhatsApp</span>
                    <span className="secondaryText">Chat on WhatsApp</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/40753851305" // Linkul de WhatsApp (poți pune orice număr)
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flexCenter button"
                >
                  WhatsApp now
                </a>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">Send a message</span>
                  </div>
                </div>
                <a href="sms:+40753851305" className="flexCenter button">
  Message now
</a>

              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">Send us an email</span>
                  </div>
                </div>
                <a
                  href="mailto:lupancuruben2@gmail.com?subject=Inquiry"
                  className="flexCenter button"
                >
                  Email us
                </a>
              </div>
            </div>

            
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
