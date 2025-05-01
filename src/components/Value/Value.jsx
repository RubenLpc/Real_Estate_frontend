import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";
// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {
  return (
    <div>
      <section id="value" className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          {/* left side */}
          <div className="v-left">
            <div className="image-container">
              <img src="./value.png" alt="" />
            </div>
          </div>

          {/* right */}
          <div className="flexColStart v-right">
            <span className="orangeText">Our Value</span>

            <span className="primaryText">Value We Give to You</span>

            <span className="secondaryText">
              We always ready to help by providijng the best services for you.
              <br />
              We beleive a good blace to live can make your life better
            </span>

            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => {
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem
                    className={`accordionItem ${className}`}
                    uuid={i}
                    key={i}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton ">
                        {/* just for getting state of item */}
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
      <section id="about-us" className="about-us-wrapper">
        <div className="paddings innerWidth flexCenter about-us-container">
          {/* Left side - Imagine despre companie */}

          {/* Right side - Detalii despre companie */}
          <div className="flexColStart about-us-right">
            <span className="orangeText">About Us</span>
            <span className="primaryText">Who We Are</span>

            <span className="secondaryText">
              We are a company dedicated to providing the best services for our
              clients. Our team of professionals is committed to delivering
              excellent results in everything we do. Our company has been in the
              business for over 10 years, offering innovative solutions and
              creating long-lasting relationships with our clients.
              <br />
              <br />
              Our team of experts is dedicated to creating a positive impact,
              helping our clients achieve their goals and grow their businesses.
            </span>
            <br />
            {/* Viziune */}
            <div className="vision">
              <span className="primaryText">Our Vision</span>
              <p className="secondaryText">
                Our vision is to be the leading company in our industry, known
                for innovation, customer satisfaction, and reliability. We aim
                to be the preferred choice for businesses looking for quality
                services and impactful solutions.
              </p>
            </div>
            <br />
            {/* Misiune */}
            <div className="mission">
              <span className="primaryText">Our Mission</span>
              <p className="secondaryText">
                Our mission is to empower businesses by providing them with
                tools and services that foster growth, improve efficiency, and
                help them stay ahead in a competitive market.
              </p>
            </div>

            {/* Buton pentru a contacta */}
            <div className="about-us-button"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Value;
