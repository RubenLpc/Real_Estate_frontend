import React from "react";
import './PropertyCard.css';
import { truncate } from 'lodash';
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";

const PropertyCard = ({ card }) => {
  const navigate = useNavigate();

  // German terms
  const unspecifiedPriceText = 'Nicht spezifiziert';
  const soldText = 'Verkauft';
  const reservedText = 'Reserviert';

  const renderPrice = () => {
    if (card.status === 'verkauft') return soldText;
    if (card.status === 'reserviert') return reservedText;
    if (card.price > 0) {
      return (
        <>
          <span style={{ color: "orange" }}>$</span>
          <span>{card.price}</span>
        </>
      );
    }
    return unspecifiedPriceText;
  };

  return (
    <div
      className="flexColStart r-card"
      onClick={() => navigate(`../properties/${card.id}`)}
    >
      <div style={{ visibility: 'hidden' }}>
        <Heart id={card.id} />
      </div>

      <img src={card.image} alt="home" />

      <span className="secondaryText r-price">
        {renderPrice()}
      </span>

      <span className="primaryText">
        {truncate(card.title, { length: 15 })}
      </span>

      <span className="secondaryText">
        {truncate(card.description, { length: 80 })}
      </span>
    </div>
  );
};

export default PropertyCard;
