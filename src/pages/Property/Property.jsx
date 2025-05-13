// src/pages/Property/Property.jsx
import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { Button } from "@mantine/core";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { AiFillHeart } from "react-icons/ai";
import Map from "../../components/Map/Map";
import { getResidency } from "../../utils/api";
import "./Property.css";

export default function Property() {
  const { pathname } = useLocation();
  const id = pathname.split("/").pop();
  const { data, isLoading, isError } = useQuery(
    ["residency", id],
    () => getResidency(id)
  );

  if (isLoading)
    return (
      <div className="wrapper flexCenter paddings">
        <PuffLoader />
      </div>
    );
  if (isError || !data)
    return (
      <div className="wrapper flexCenter paddings">
        <span>Fehler beim Laden der Objekt-Daten.</span>
      </div>
    );

  const {
    title,
    shortDescription,
    description,
    propertyType,
    status,
    landArea,
    livingArea,
    rooms,
    constructionYear,
    renovationNeed,
    zoning,
    energyCertificate,
    documents = [],
    image,
    images = [],
    videoUrl,
    droneVideoUrl,
    price,
    negotiable,
    commission,
    availabilityDate,
    address,
    city,
    country,
    region,
    features = [],
    tags = [],
  } = data;

  return (
    <div className="wrapper">
      <div className="property-container innerWidth paddings">
        {/* 1. Header: Titel + Standort */}
        <div className="like">
          <AiFillHeart size={28} color="#e74c3c" />
        </div>
        <h1 className="primaryText">{title}</h1>
        <p className="secondaryText">
          {address && `${address}, `}
          {city && `${city}, `}
          {region || "Nicht angegeben"}
          {country && `, ${country}`}
        </p>

        {/* 2. Teaser */}
        {shortDescription && (
          <p className="teaserText">{shortDescription}</p>
        )}

        {/* 3. Medienbereich */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="property-image-slider"
        >
          <SlideNavButtons />
          {image && (
            <SwiperSlide>
              <img src={image} alt="Hauptbild" className="property-image" />
            </SwiperSlide>
          )}
          {images.map((url, i) => (
            <SwiperSlide key={i}>
              <img
                src={url}
                alt={`Bild ${i + 1}`}
                className="property-image"
              />
            </SwiperSlide>
          ))}
          {videoUrl && (
            <SwiperSlide>
              <div className="video-wrapper">
                <iframe
                  src={videoUrl}
                  title="Video"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </SwiperSlide>
          )}
          {droneVideoUrl && (
            <SwiperSlide>
              <iframe
                src={droneVideoUrl}
                title="Drohnenvideo"
                frameBorder="0"
                allowFullScreen
              />
            </SwiperSlide>
          )}
        </Swiper>

        {/* 4–8. Main + Sidebar Grid */}
        <div className="details-grid">
          {/* Main Column */}
          <div className="main-column">
            {/* 5. Langtext */}
            <section className="description-section">
              <h3>Beschreibung</h3>
              <p className="secondaryText">{description}</p>
            </section>

            {/* 6. Lage + Karte */}
            <section className="map-section">
              <h3>Lage</h3>
              <Map address={address} city={city} country={country} />
            </section>

            {/* 7. Dokumente */}
            {documents.length > 0 && (
              <section className="docs-section">
                <h3>Dokumente</h3>
                <ul>
                  {documents.map((url, i) => (
                    <li key={i}>
                      <a
                        href={url}
                        download={`Dokument_${i + 1}.pdf`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Dokument {i + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 9. Extras & Tags */}
            {(features.length > 0 || tags.length > 0) && (
              <section className="tags-section">
                {features.length > 0 && (
                  <>
                    <h3>Ausstattung</h3>
                    <ul className="feature-list">
                      {features.map((f) => (
                        <li key={f}>✅ {f}</li>
                      ))}
                    </ul>
                  </>
                )}
                {tags.length > 0 && (
                  <>
                    <h3>Highlights</h3>
                    <ul className="tag-list">
                      {tags.map((t) => (
                        <li key={t}>🏷️ {t}</li>
                      ))}
                    </ul>
                  </>
                )}
              </section>
            )}

            {/* 10. CTA */}
            <div className="cta-section">
              <Button className="button">Besichtigung anfragen</Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="sidebar">
            <h3>Objekt-Details</h3>
            <ul className="facts-box">
              <li><strong>Objektart:</strong> {propertyType || "–"}</li>
              <li><strong>Status:</strong> {status || "–"}</li>
              <li>
                <strong>Grundst.:</strong>{" "}
                {landArea != null ? `${landArea} m²` : "–"}
              </li>
              <li>
                <strong>Wohn-/Nutzf.:</strong>{" "}
                {livingArea != null ? `${livingArea} m²` : "–"}
              </li>
              <li><strong>Zimmer:</strong> {rooms != null ? rooms : "–"}</li>
              <li>
                <strong>Baujahr:</strong>{" "}
                {constructionYear != null ? constructionYear : "–"}
              </li>
              <li>
                <strong>Sanierungsbedarf:</strong> {renovationNeed || "–"}
              </li>
              <li><strong>Widmung:</strong> {zoning || "–"}</li>
              <li>
                <strong>Energieausweis:</strong>{" "}
                {energyCertificate ? (
                  <a href={energyCertificate} target="_blank" rel="noreferrer">
                    herunterladen
                  </a>
                ) : (
                  "–"
                )}
              </li>
            </ul>

            <h3>Preis</h3>
            <p className="orangeText">€ {price.toLocaleString()}</p>
            {negotiable && <p>VB</p>}
            {commission && <p>Provision: {commission}</p>}
            {availabilityDate && (
              <p>
                Verfügbar ab:{" "}
                {new Date(availabilityDate).toLocaleDateString()}
              </p>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

// Swiper custom nav
const SlideNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons flexCenter">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        ‹
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        ›
      </button>
    </div>
  );
};
