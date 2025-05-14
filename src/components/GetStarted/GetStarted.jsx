import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Jetzt durchstarten mit Homyz</span>
          <span className="secondaryText">
            Abonnieren Sie und erhalten Sie unsere attraktiven Preisangebote.
            <br />
            Finden Sie schon bald Ihr neues Zuhause.
          </span>
          <a href="mailto:lupancuruben2@gmail.com" className="button">
            Jetzt starten
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
