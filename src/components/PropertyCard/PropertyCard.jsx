import React from "react";
import './PropertyCard.css';
import { truncate } from 'lodash';
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";

const PropertyCard = ({ card }) => {
  const navigate = useNavigate();

  // German terms
  const unspecifiedPriceText = 'Preis auf Anfrage';
  const soldText = 'Verkauft';
  const reservedText = 'Reserviert';

  const renderPrice = () => {
    if (card.status === 'verkauft') return soldText;
    if (card.status === 'reserviert') return reservedText;
    if (card.price > 0) {
      return (
        <>
          <span style={{ color: "orange" }}>$</span>
          <span>{card.price.toLocaleString("de-DE")}</span>
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

      <span className="primaryText r-title">
  {card.title}
</span>


<span className="secondaryText">
  {[card.address, card.region].filter(Boolean).join(", ")}<br />
  {card.shortDescription
  ? truncate(card.shortDescription, { length: 80 })
  : truncate(card.description, { length: 80 })}

</span>

    </div>
  );
};

export default PropertyCard;
