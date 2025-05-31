import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import Contact from "../../components/Contact/Contact.jsx";

// Iconițele pe care le folosim
import {
  BiHomeAlt,        // tip proprietate
  BiRuler,          // suprafață
  BiDoorOpen,       // camere
  BiCalendar,       // an construcție / disponibilitate
  BiWrench,         // necesită reparații
  BiMapPin,         // zonare / locație
  BiSolidZap,           // energie / certificat energetic
  BiFile,           // documente
  BiEnvelope,       // contact/email
  BiPhone,          // telefon
  BiInfoCircle,     // descriere
  BiLocationPlus,   // subtitlu secțiune „Lage”
  BiTag,            // Highlights
  BiCheckShield,    // Ausstattung
} from "react-icons/bi";

import {
  Button,
  Modal,
  TextInput,
  Textarea,
  Checkbox,
  Select,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { AiOutlineFilePdf } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import { Video } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import ReactPlayer from "react-player";
import LeafletMap from "../../components/Map/LeafLetMap.jsx";

import { getResidency, sendPropertyContact } from "../../utils/api";
import InquiryModal from "../../components/InquiryModal/InquiryModal.jsx";

import "./Property.css";
import { toast } from "react-toastify";

export default function Property() {
  const { pathname } = useLocation();
  const id = pathname.split("/").pop();
  const { data, isLoading, isError } = useQuery(["residency", id], () =>
    getResidency(id)
  );
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const form = useForm({
    initialValues: {
      anrede: "",
      vorname: "",
      nachname: "",
      email: "",
      telefon: "",
      nachricht: "",
      agbs: false,
      widerruf: false,
      datenschutz: false,
      interests: { call: false, visit: false, finance: false },
      provisionOk: false,
    },
    validate: {
      anrede: (v) => (v ? null : "Pflichtfeld"),
      vorname: (v) => (v.length > 1 ? null : "Mindestens 2 Zeichen"),
      nachname: (v) => (v.length > 1 ? null : "Mindestens 2 Zeichen"),
      email: (v) => (/^\S+@\S+$/.test(v) ? null : "Ungültige E-Mail"),
      agbs: (v) => (v ? null : "Erforderlich"),
      widerruf: (v) => (v ? null : "Erforderlich"),
      datenschutz: (v) => (v ? null : "Erforderlich"),
      provisionOk: (v) => (v ? null : "Erforderlich"),
    },
  });

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
    video,
    droneVideo,
    price,
    negotiable,
    commission,
    availabilityDate,
    address,
    plz,
    city,
    region,
    country,
    locationDescription,
    features = [],
    tags = [],
    pois = [],
    contactLink,
  } = data;

  const isOffMarket = status === "diskret";
  const displayRegion = region || "";
  const displayCountry = "Austria";
  const fullAddress = [address, displayRegion, displayCountry]
    .filter(Boolean)
    .join(", ");

  const mediaItems = [];
  if (image) mediaItems.push({ src: image, type: "image" });
  images.filter(Boolean).forEach((src) => mediaItems.push({ src, type: "image" }));
  if (video) mediaItems.push({ src: video, type: "video" });
  if (droneVideo) mediaItems.push({ src: droneVideo, type: "video" });

  const imageSlides = mediaItems
    .filter((m) => m.type === "image")
    .map((m) => ({ src: m.src }));
  const slides = mediaItems.map((item) =>
    item.type === "image"
      ? { src: item.src }
      : {
          type: "video",
          width: 1280,
          height: 720,
          sources: [{ src: item.src, type: "video/mp4" }],
        }
  );

  const handleContactSubmit = async (values) => {
    const validation = form.validate();
    if (validation.hasErrors) {
      Object.entries(validation.errors).forEach(([field, error]) => {
        if (error) toast.error(error);
      });
      return;
    }
    try {
      await sendPropertyContact({
        propertyTitle: title,
        anrede: values.anrede,
        vorname: values.vorname,
        nachname: values.nachname,
        email: values.email,
        telefon: values.telefon,
        nachricht: values.nachricht,
        interests: values.interests || {},
      });
      setShowModal(false);
      toast.success("Anfrage erfolgreich gesendet!");
      form.reset();
    } catch (error) {
      // error handled in sendPropertyContact
    }
  };

  return (
    <div className="wrapper">
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={imageSlides}
      />

      <div className="property-container innerWidth paddings">
        {/* Titlu proprietate */}
        <div className="header flexBetween">
          <h1 className="primaryText">{title}</h1>
        </div>
        <p className="secondaryText location">
          {isOffMarket
            ? "Standort auf Anfrage"
            : [plz, city].filter(Boolean).join(" ") +
              (region ? ` | ${region}` : "")}
        </p>

        {/* Scurtă descriere */}
        {!isOffMarket && shortDescription && (
          <p className="teaserText">{shortDescription}</p>
        )}

        {/* Slider imagini / video */}
        {!isOffMarket && mediaItems.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="property-image-slider"
          >
            <SlideNavButtons />
            {mediaItems.map((item, idx) => (
              <SwiperSlide
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                style={{ cursor: "pointer" }}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`slide-${idx}`}
                    className="property-image"
                  />
                ) : (
                  <div className="video-wrapper">
                    <ReactPlayer
                      url={item.src}
                      width="100%"
                      height="100%"
                      controls
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Conținutul principal și sidebar */}
        <div className="details-grid">
          <div className="main-column">
            {/* Secțiunea „Beschreibung” */}
            <section className="description-section">
              <h3 className="section-title">
                <BiInfoCircle className="title-icon" />
                Beschreibung
              </h3>
              <p className="secondaryText">{description}</p>
            </section>

            {/* Secțiunea „Lage” */}
            <section className="location-desc-section">
              <h3 className="section-title">
                <BiLocationPlus className="title-icon" />
                Lage
              </h3>

              {locationDescription && (
                <p className="secondaryText">{locationDescription}</p>
              )}

              {address || region ? (
                <LeafletMap fullAddress={fullAddress} />
              ) : (
                <p className="secondaryText">Adresse nicht verfügbar.</p>
              )}

              {pois.length > 0 && (
                <ul className="poi-list">
                  {pois.map((poi, idx) => (
                    <li key={idx}>
                      • {poi.name} ({poi.distance} km)
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* Secțiunea „Ausstattung” */}
            {(features.length || tags.length) > 0 && (
              <section className="tags-section">
                <h3 className="section-title">
                  <BiCheckShield className="title-icon" />
                  Ausstattung
                </h3>
                {features.length > 0 && (
                  <ul className="feature-list facilities">
                    {features.map((f, i) => (
                      <li key={i} className="facility">
                         {f}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {/* Secțiunea „Highlights” */}
            {tags.length > 0 && (
              <section className="tags-section">
                <h3 className="section-title">
                  <BiTag className="title-icon" />
                  Highlights
                </h3>
                <ul className="tag-list facilities">
                  {tags.map((t, i) => (
                    <li key={i} className="facility">
                      🏷️ {t}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Secțiunea „Dokumente” */}
            {!isOffMarket && documents.length > 0 && (
              <section className="docs-section">
                <h3 className="section-title">
                  <BiFile className="title-icon" />
                  Dokumente
                </h3>
                <ul className="docs-list">
                  {documents.map((url, i) => (
                    <li key={i} className="docs-item">
                      <AiOutlineFilePdf
                        size={20}
                        style={{ marginRight: 8, color: "#4066ff" }}
                      />
                      <a
                        href={url.replace(
                          "/raw/upload/",
                          "/raw/upload/fl_attachment/"
                        )}
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

            {/* Buton „Exposé anfordern” / „Kontaktformular” */}
            <div className="cta-section">
              {!isOffMarket ? (
                <Button
                  component="a"
                  onClick={() => setShowModal(true)}
                  className="button cta-button"
                >
                  Jetzt Exposé anfordern
                </Button>
              ) : (
                <Button className="button cta-button" onClick={() => setShowModal(true)}>
                  Kontaktformular anfordern
                </Button>
              )}
            </div>
          </div>

          {/* Sidebar: Detalii proprietate */}
          <aside className="sidebar">
            <h3 className="section-title">
              <BiHomeAlt className="title-icon" />
              Objekt-Details
            </h3>
            <ul className="facts-box">
              {!!propertyType && (
                <li>
                  <BiHomeAlt className="fact-icon" />
                  <strong>Objektart: </strong> {propertyType}
                </li>
              )}
              {landArea > 0 && (
                <li>
                  <BiRuler className="fact-icon" />
                  <strong>Grundstück: </strong> {landArea} m²
                </li>
              )}
              {livingArea > 0 && (
                <li>
                  <BiRuler className="fact-icon" />
                  <strong>Wohn-/Nutzfläche: </strong> ca. {livingArea} m²
                </li>
              )}
              {rooms > 0 && (
                <li>
                  <BiDoorOpen className="fact-icon" />
                  <strong>Zimmer: </strong> {rooms}
                </li>
              )}
              {!!constructionYear && (
                <li>
                  <BiCalendar className="fact-icon" />
                  <strong>Baujahr: </strong> ca. {constructionYear}
                </li>
              )}
              {renovationNeed && (
                <li>
                  <BiWrench className="fact-icon" />
                  <strong>Sanierungsbedarf: </strong> {renovationNeed}
                </li>
              )}
              {zoning && (
                <li>
                  <BiMapPin className="fact-icon" />
                  <strong>Widmung: </strong> {zoning}
                </li>
              )}
              {energyCertificate && (
                <li>
                  <BiSolidZap className="fact-icon" />
                  <strong>Energieausweis: </strong>{" "}
                  <a
                    href={energyCertificate}
                    target="_blank"
                    rel="noreferrer"
                    className="fact-link"
                  >
                    Download
                  </a>
                </li>
              )}
              {price > 0 && (
                <li className="price-item">
                  <BiHomeAlt className="fact-icon" />
                  <strong>Preis: </strong>{" "}
                  <span className="price-value">
                    € {price.toLocaleString()}
                  </span>
                </li>
              )}
              {negotiable && (
                <li>
                  <BiHomeAlt className="fact-icon" />
                  <strong>Verhandlungsbasis </strong>
                </li>
              )}
              {availabilityDate && (
                <li>
                  <BiCalendar className="fact-icon" />
                  <strong>Verfügbar ab: </strong>{" "}
                  {new Date(availabilityDate).toLocaleDateString()}
                </li>
              )}
            </ul>
          </aside>
        </div>

        {/* Secțiune finală cu buton de „Suchauftrag” */}
        {/* …alte coduri… */}

<div className="cta-wrapper">
  <p className="cta-text">
    Nehmen Sie gerne Kontakt mit mir auf – denn die meisten meiner Objekte werden 
    nicht öffentlich präsentiert. Unabhängig davon, ob Sie eine Immobilie für 
    den Eigengebrauch oder als Anlageobjekt wünschen, können Sie mir Ihren 
    Suchwunsch über das folgende Formular übermitteln.
  </p>
  <Button
    className="button cta-button"
    onClick={() => setModalOpened(true)}
  >
    Suchauftrag aufgeben
  </Button>
</div>

{/* …alte coduri… */}



        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          title={
            isOffMarket ? "Kontaktformular anfordern" : "Suchauftrag / Kontaktformular"
          }
          size="lg"
          centered
        >
          <form onSubmit={form.onSubmit(handleContactSubmit)}>
            <Select
              label="Anrede *"
              {...form.getInputProps("anrede")}
              data={[
                { value: "Herr", label: "Herr" },
                { value: "Frau", label: "Frau" },
              ]}
              mt="sm"
              error={form.errors.anrede}
            />
            <TextInput
              label="Vorname *"
              {...form.getInputProps("vorname")}
              mt="sm"
              error={form.errors.vorname}
            />
            <TextInput
              label="Nachname *"
              {...form.getInputProps("nachname")}
              mt="sm"
              error={form.errors.nachname}
            />
            <TextInput
              label="E-Mail-Adresse *"
              type="email"
              {...form.getInputProps("email")}
              mt="sm"
              error={form.errors.email}
            />
            <TextInput
              label="Telefonnummer"
              {...form.getInputProps("telefon")}
              mt="sm"
            />
            <Textarea
              label="Nachricht *"
              {...form.getInputProps("nachricht")}
              mt="sm"
              error={form.errors.nachricht}
            />

            {/* Checkbox: Interessen */}
            <Checkbox
              label="Ich wünsche ein unverbindliches Telefonat"
              {...form.getInputProps("interests.call", { type: "checkbox" })}
              mt="sm"
            />
            <Checkbox
              label="Ich bitte um einen Besichtigungstermin"
              {...form.getInputProps("interests.visit", { type: "checkbox" })}
              mt="sm"
            />
            <Checkbox
              label="Ich habe Fragen zur Finanzierung / Investitionsmodell"
              {...form.getInputProps("interests.finance", { type: "checkbox" })}
              mt="sm"
            />

            {/* Checkbox: consimțământ legal */}
            <Checkbox
              label="* Ich habe die Allgemeinen Geschäftsbedingungen gelesen und akzeptiert."
              {...form.getInputProps("agbs", { type: "checkbox" })}
              mt="sm"
              error={form.errors.agbs}
            />
            <Checkbox
              label="* Ich bestätige die Widerrufsbelehrung gelesen zu haben und über die Rechtsfolgen belehrt worden zu sein."
              {...form.getInputProps("widerruf", { type: "checkbox" })}
              mt="sm"
              error={form.errors.widerruf}
            />
            <Checkbox
              label="* Der Immobilienmakler erhält bei Abschluss des notariel beurkundeten Kaufvertrages die Provision."
              {...form.getInputProps("provisionOk", { type: "checkbox" })}
              mt="sm"
              error={form.errors.provisionOk}
            />
            <Checkbox
              label="* Ich willige in die Verarbeitung meiner Daten zum Zweck der Bearbeitung meiner Anfrage ein und habe die Datenschutzerklärung gelesen."
              {...form.getInputProps("datenschutz", { type: "checkbox" })}
              mt="sm"
              error={form.errors.datenschutz}
            />

            <Group position="right" mt="md">
              <Button variant="default" onClick={() => setShowModal(false)}>
                Abbrechen
              </Button>
              <Button type="submit">Absenden</Button>
            </Group>
          </form>
        </Modal>
      </div>

      <InquiryModal opened={modalOpened} onClose={() => setModalOpened(false)} />
      <Contact />
    </div>
  );
}

// Componente suplimentară pentru butoanele slider-ului
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
