import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown, MdCheck } from "react-icons/md";
import { Button, List, ThemeIcon, SimpleGrid, Title } from "@mantine/core";
import {
  IconBuilding,
  IconHome,
  IconLock,
  IconMapSearch,
  IconPhoto,
  IconDrone,
  IconFileText,
  IconShare,
  IconUsers,
  IconGavel,
  IconCalendarStats,
  IconUserCheck,
  IconMapPin,
  IconBriefcase,
  IconRefresh,
} from "@tabler/icons-react";
import {
  MdInsertPhoto,
  MdFilePresent,
  MdMenuBook,
  MdShare,
  MdGavel,
  MdPeople,
  MdCalendarToday,
  MdAccountBalance,
  MdHandshake,
  MdPersonSearch,
  MdWeb,
} from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";

import "react-accessible-accordion/dist/fancy-example.css";
import "./Value.css";
import InquiryModal from "../InquiryModal/InquiryModal.jsx";
const iconStyle = {
  backgroundColor: "var(--primary)",
  color: "white",
};
const Value = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const iconStyle = {
    backgroundColor: "#F8F3F2",
    color: "var(--primary)",
  };

  const sections = [
    {
      key: 0,
      title: "Kernkompetenzen - Was wir Ihnen bieten",
      icon: <IconBuilding size={25} />,
      content: (
        <>
          Mit langjähriger Erfahrung in der Standortentwicklung,
          Betriebsansiedlung sowie der Vermittlung von Liegenschaften begleite
          ich Sie beim Kauf oder Verkauf Ihrer Immobilie – professionell,
          diskret und individuell auf Ihre Situation abgestimmt.
          <br />
          <br />
          Von der ersten unverbindlichen Beratung bis zur Übergabe begleite ich
          Sie persönlich – strukturiert, zielorientiert und mit Blick auf Ihre
          individuellen Bedürfnisse.
          <br />
          <br />
          Ob Pferdehof, landwirtschaftliches Anwesen, Ackerfläche,
          Gewerbegrundstück, Betriebshalle oder Wohnhaus – für jede Immobilie
          entwickle ich eine passende Vermarktungsstrategie.
          <br />
          <br />
          <strong>Mein Ziel:</strong> Das bestmögliche Ergebnis für Sie als
          Eigentümer:in – wirtschaftlich durchdacht, steuerlich sinnvoll und
          emotional stimmig.
          <br />
          <br />
          Darüber hinaus unterstütze ich Sie bei der Entwicklung von
          Baulandentwicklungsprojekten – von der Erstbewertung über das
          Widmungsverfahren bis zur strukturierten Verwertung.
        </>
      ),
    },

    {
      key: 1,
      title: "Vermittlung von Immobilien",
      icon: <IconHome size={25} />,
      content: (
        <Accordion
          allowMultipleExpanded={false}
          allowZeroExpanded
          className="accordion sub-accordion"
        >
          {" "}
          {/* Sub-accordion: Sie suchen eine Immobilie? */}
          <AccordionItem uuid="sub0"  className="accordionItem">
            <AccordionItemHeading>
              <AccordionItemButton className="flexCenter accordionButton">
                <ThemeIcon
                  style={{ ...iconStyle, marginRight: "0.5rem" }}
                  radius="xl"
                  size={30}
                >
                  <MdCheck size={20} />
                </ThemeIcon>
                <span className="primaryText" >
                  Sie suchen eine Immobilie?
                </span>
                <MdOutlineArrowDropDown
                  className="dropIcon"
                  size={24}
                />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <span className="secondaryText" >
                Nehmen Sie gerne Kontakt mit mir auf – denn die meisten meiner
                Objekte werden nicht öffentlich präsentiert.
                <br />
                <br />
                Unabhängig davon ob Sie eine Immobilie für den Eigengebrauch
                oder als Anlageobjekt wünschen, sollte aktuell kein passendes
                Objekt verfügbar sein, können Sie mir Ihren Suchwunsch gerne
                über das folgende Formular übermitteln.
                <br />
                <br />
                <strong>Service für Kaufinteressenten:</strong>
                <List spacing="sm" size="sm" withPadding>
                  {[
                    "Professionelle und aussagekräftige Verkaufsunterlagen",
                    "Umfangreiche Präsentation im Internet",
                    "Individuelle Besichtigungen",
                    "Aktiv gepflegtes Vormerksystem",
                    "Abklärung rechtlicher Fragen",
                    "Unterstützung bei Finanzierungen",
                    "Organisation von Kaufverträgen",
                    "Persönliche Begleitung bei der Abwicklung",
                    "Zusätzliche Services wie Entrümpelung, Renovierung",
                  ].map((text, idx) => (
                    <List.Item
                      key={idx}
                      icon={
                        <ThemeIcon style={iconStyle} radius="xl" size={24}>
                          <MdCheck size={20} />
                        </ThemeIcon>
                      }

                      className="secondaryText"
                    >
                      {text}
                    </List.Item>
                  ))}
                </List>
              </span>
              <div style={{ marginTop: "1rem", textAlign: "right" }}>
                <Button
                  className="button"
                  size="sm"
                  onClick={() => setModalOpened(true)}
                >
                  Suchauftrag senden
                </Button>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          {/* Sub-accordion: Diskrete Vermarktung */}
          <AccordionItem uuid="sub1" className="accordionItem">
            <AccordionItemHeading>
              <AccordionItemButton className="flexCenter accordionButton">
                <ThemeIcon
                  style={{ ...iconStyle, marginRight: "0.5rem" }}
                  radius="xl"
                  size={30}
                >
                  <IconLock size={20} />
                </ThemeIcon>
                <span className="primaryText" >
                  Diskrete Vermarktung oder gezielte Suche abseits der
                  Öffentlichkeit
                </span>
                <MdOutlineArrowDropDown
                  size={24}
                  className="dropIcon"
                />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <span className="secondaryText" >
                <em>
                  Erfolg in der Stille – Ihre Immobilientransaktion diskret und
                  professionell.
                </em>
                <br />
                <br />
                Nicht jede Immobilientransaktion soll öffentlich sichtbar sein –
                sei es aus privaten, geschäftlichen oder strategischen Gründen.
                <br />
                <br />
                Ich biete Ihnen dafür maßgeschneiderte, diskrete
                Vermarktungskonzepte oder unterstütze Sie bei einer gezielten
                Suche im Off-Market-Bereich.
                <br />
                <br />
                Dank meines Netzwerks und meiner langjährigen Erfahrung kann ich
                Ihnen auch abseits klassischer Plattformen passende Lösungen
                anbieten – vertraulich, individuell und persönlich begleitet.
              </span>
              <div style={{ marginTop: "1rem", textAlign: "right" }}>
                <Button
                  className="button"
                  size="sm"
                  onClick={() => setModalOpened(true)}
                >
                  Suchauftrag senden
                </Button>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          {/* Sub-accordion: Professionelle Immobilienvermittlung */}
          <AccordionItem uuid="sub2" className="accordionItem">
            <AccordionItemHeading>
              <AccordionItemButton className="flexCenter accordionButton">
                <ThemeIcon
                  style={{ ...iconStyle, marginRight: "0.5rem" }}
                  radius="xl"
                  size={30}
                >
                  <IconBriefcase size={20} />
                </ThemeIcon>
                <span className="primaryText" >
                  Professionelle Immobilienvermittlung – strukturiert und
                  marktorientiert
                </span>
                <MdOutlineArrowDropDown
                  size={24}
                  className="dropIcon"
                />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <span
                className="secondaryText"
                style={{
                  
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Eine erfolgreiche Immobilienvermittlung erfordert mehr als nur
                die Veröffentlichung eines Exposés. Ich plane und begleite einen
                offenen, transparenten Vermarktungsprozess, der den
                Immobilienmarkt gezielt und effizient anspricht.
                <br />
                <br />
                Je nach Objekt gehe ich in Vorleistung, um Ihre Immobilie
                bestmöglich zu positionieren – sowohl inhaltlich als auch
                visuell. Ziel ist es, den bestmöglichen Verkaufspreis zu
                erzielen und den Verkaufsprozess so reibungslos wie möglich zu
                gestalten.
                <br />
                <br />
                Diesen Service kann ich Ihnen als verkaufende Partei anbieten:
              </span>
              <List spacing="sm" size="sm" withPadding>
                {[
                  {
                    icon: <MdInsertPhoto size={18} />,
                    text: "Professionelle Foto- und Videoaufnahmen zur optimalen Darstellung Ihrer Immobilie in Online-Galerien",
                  },
                  {
                    icon: <IconDrone size={18} />,
                    text: "Drohnenaufnahmen zur attraktiven Visualisierung der Lage und Umgebung",
                  },
                  {
                    icon: <MdFilePresent size={18} />,
                    text: "Erstellung hochwertiger Verkaufsunterlagen, die Ihre Immobilie ins beste Licht rücken",
                  },
                  {
                    icon: <MdMenuBook size={18} />,
                    text: "Leitfäden zur Vorbereitung auf Besichtigungstermine, damit Sie gut vorbereitet in die Gespräche gehen",
                  },
                  {
                    icon: <MdShare size={18} />,
                    text: "Gezielte Social-Media-Kampagnen und Plattformplatzierungen zur Maximierung der Reichweite",
                  },
                  {
                    icon: <MdGavel size={18} />,
                    text: "Klärung behördlicher Vorgaben und Bestimmungen, damit keine rechtlichen Hürden den Verkauf verzögern",
                  },
                  {
                    icon: <MdPeople size={18} />,
                    text: "Kontaktaufnahme mit vorgemerkten Kunden aus meinem Netzwerk, die auf der Suche nach einem passenden Objekt sind",
                  },
                  {
                    icon: <MdCalendarToday size={18} />,
                    text: "Umfangreiche Einzelbesichtigungen mit Interessenten (keine Massenbesichtigungen)",
                  },
                  {
                    icon: <MdGavel size={18} />,
                    text: "Prüfung rechtlicher Rahmenbedingungen und Problemstellungen, damit der Verkauf reibungslos und ohne Überraschungen erfolgt",
                  },
                  {
                    icon: <IconDrone size={18} />,
                    text: "Ständige Information des Verkäufers über die Verkaufsaktivitäten, damit Sie jederzeit auf dem neuesten Stand sind",
                  },
                  {
                    icon: <RiDraftLine size={18} />,
                    text: "Organisation von Kaufverträgen bei Anwalt și Notar, damit alle rechtlichen Schritte korrekt ablaufen",
                  },
                  {
                    icon: <MdHandshake size={18} />,
                    text: "Persönliche Begleitung bei der Kaufvertragsabwicklung, um den Abschluss professionell și effizient zu gestalten",
                  },
                  {
                    icon: <MdPersonSearch size={18} />,
                    text: "Selektion der Kauf- / Mietinteressenten, um sicherzustellen, dass nur seriöse Anfragen weiterverfolgt werden",
                  },
                  {
                    icon: <MdWeb size={18} />,
                    text: "Moderne Vermarktung: Ich kombiniere klassische și digitale Kanäle, um ein breites, aber qualifiziertes Publikum zu erreichen. Ziel ist es, Transparenz, Tempo și Verhandlungsspielraum in Einklang zu bringen – für einen erfolgreichen Abschluss, der für alle Seiten passt. Ich begleite Sie persönlich durch alle Phasen des Verkaufs – von der Marktanalyse bis zur notariellen Abwicklung.",
                  },
                ].map((item, idx) => (
                  <List.Item
                  className="secondaryText"
                    key={idx}
                    icon={
                      <ThemeIcon
                        style={{ ...iconStyle, marginRight: 0 }}
                        radius="xl"
                        size={24}
                      >
                        {item.icon}
                      </ThemeIcon>
                    }
                  >
                    {item.text}
                  </List.Item>
                ))}
              </List>

              <Title
                order={6}
                style={{ color: "var(--primary)", margin: "1.5rem 0 0.5rem" }}
                className="primaryText"
              >
                Vorteile der professionellen Immobilienvermittlung:
              </Title>
              <List spacing="sm" size="sm" withPadding>
                {[
                  {
                    icon: <MdPeople size={18} />,
                    text: "Individuelle Betreuung: Jede Immobilie erhält eine maßgeschneiderte Strategie...",
                  },
                  {
                    icon: <MdCalendarToday size={18} />,
                    text: "Hohe Transparenz: Sie erhalten regelmäßige Updates über den Fortschritt...",
                  },
                  {
                    icon: <MdGavel size={18} />,
                    text: "Ganzheitliche Abwicklung: Ich kümmere mich um alle Aspekte des Verkaufsprozesses...",
                  },
                ].map((item, idx) => (
                  <List.Item
                    key={idx}
                    className="secondaryText"
                    icon={
                      <ThemeIcon
                        style={{ ...iconStyle, marginRight: 0 }}
                        radius="xl"
                        size={24}
                      >
                        {item.icon}
                      </ThemeIcon>
                    }
                  >
                    {item.text}
                  </List.Item>
                ))}
              </List>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      ),
    },

    {
      key: 2,
      title: "Standortsuche und Betriebsansiedlung",
      icon: <IconMapSearch size={25} />,
      content: (
        <>
          Wenn Sie für Ihr Unternehmen den optimalen Standort suchen, sind Sie
          bei mir genau richtig. Ich führe eine strategische Analyse
          potenzieller Standorte durch und berate Sie bei der Auswahl geeigneter
          Betriebsflächen – mit dem Ziel, die wirtschaftlich und
          infrastrukturell beste Lösung für Ihr Vorhaben zu finden.
          <br />
          <br />
          Nach einem persönlichen Erstgespräch erstelle ich eine Longlist
          potenzieller Standorte, die Ihren Anforderungen entsprechen. In einem
          strukturierten Auswahlprozess verdichten wir diese gemeinsam zu einer
          Shortlist – auf deren Basis die nächsten Schritte im Projekt gezielt
          geplant und umgesetzt werden.
          <br />
          <br />
          <strong>
            Unterstützung bei Behördenwegen und Genehmigungen:
          </strong>{" "}
          Zahlreiche behördliche Genehmigungen und Verfahren sind notwendig. Ich
          unterstütze Sie mit meiner langjährigen Erfahrung im
          Behördenmanagement und begleite Sie gemeinsam mit Fachexperten
          verlässlich durch alle relevanten Abläufe.
          <br />
          <br />
          <strong>Finanzierungspartner aus meinem Netzwerk:</strong>{" "}
          Insbesondere Großprojekte fordern das Thema der Finanzierung sehr. Bei
          Bedarf empfehle ich Ihnen vertrauenswürdige Ansprechpartner aus meinem
          Netzwerk im Banken- und Investorenbereich.
          <br />
          <br />
          <strong>
            Vermittlung von Kommunikationspartnern für Anrainerthemen:
          </strong>{" "}
          Erweiterungen können Auswirkungen auf das Umfeld haben. Ich bringe Sie
          mit erfahrenen Kommunikationspartnern zusammen, die Sie bei
          Anrainerkommunikation, Bürgerbeteiligung und
          Informationsveranstaltungen unterstützen.
          <br />
          <br />
          Kontaktieren Sie mich gerne für ein unverbindliches Erstgespräch – ich
          freue mich auf Ihre Anfrage.

          <br />
          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
                      <Button className="button"  onClick={() => setModalOpened(true)}>
                        Suchauftrag senden
                      </Button>
                    </div>
        </>
      ),
    },
    {
      key: 3,
      title: "Baulandentwicklung",
      icon: <IconMapPin size={25} />,
      content: (
        <>
          <strong>Baulandentwicklung: </strong>Aus landwirtschaftlicher Fläche
          wird Bauland.
          <br />
          <br />
          Sie möchten wissen, wie aus Ihrer Grünlandfläche gewidmetes Bauland
          werden kann? Als erfahrener Projektentwickler begleite ich Sie durch
          diesen komplexen Prozess – rechtssicher, wirtschaftlich und technisch
          optimiert und individuell zugeschnitten.
          <br />
          <br />
          <strong>Unsere Leistungen im Überblick:</strong>
          <br />
          <List spacing="sm" size="sm" withPadding>
            {[
              "Analyse der Nutzungs- und Widmungspotenziale Ihres Grundstücks",
              "Erstellung eines schlüssigen Entwicklungskonzepts",
              "Begleitung im Behördenmanagement bis zur Erreichung der Flächenwidmung / Bebauungsplanes",
              "Parzellierung und Vermarktung der neuen Baugrundstücke",
              "Zusammenarbeit mit Partnern aus Rechts- & Steuerberatung sowie Planung und Technik",
            ].map((text, idx) => (
              <List.Item
                key={idx}
                className="secondaryText"
                icon={
                  <ThemeIcon style={iconStyle} radius="xl" size={24}>
                    <MdCheck size={16} />
                  </ThemeIcon>
                }
              >
                {text}
              </List.Item>
            ))}
          </List>
          <br />
          <strong>Ihre Vorteile:</strong>
          <br />
          <List spacing="sm" size="sm" withPadding>
            {[
              "Aktivierung stiller Reserven durch gezielte Planung (z. B. Immobilienertragsteuer)",
              "Schutz vor dem Eintritt in den gewerblichen Grundstückshandel",
              "Ganzheitliche Projektbegleitung – von Erstberatung bis Verkauf",
            ].map((text, idx) => (
              <List.Item
                key={idx}
                className="secondaryText"
                icon={
                  <ThemeIcon style={iconStyle} radius="xl" size={24}>
                    <MdCheck size={16} />
                  </ThemeIcon>
                }
              >
                {text}
              </List.Item>
            ))}
          </List>
        </>
      ),
    },
    {
      key: 4,
      title: "Revitalisierungsprojekte",
      icon: <IconRefresh size={25} />,
      content: (
        <>
          Auch Immobilien durchlaufen Lebenszyklen – und mit jeder Phase
          verändern sich die Nutzungsmöglichkeiten. Gezielte „Verjüngungskuren“
          wie Sanierungen oder Umnutzungen können den Wert und die
          Verwendbarkeit deutlich steigern.
          <br />
          <br />
          Ob sich eine solche Investition langfristig für Sie lohnt oder ob ein
          Verkauf an auf Revitalisierungen spezialisierte Käufer:innen die
          bessere Option ist, besprechen wir gerne in einem persönlichen
          Erstgespräch.
          <br />
          <br />
          Viele meiner Kund:innen sind insbesondere an sanierungsbedürftigen
          Einfamilienhäusern, Zinshäusern und Gewerbeliegenschaften
          interessiert.
        </>
      ),
    },
  ];

  return (
    <div>
      <section id="core-competencies" className="core-wrapper">
        <div className="paddings innerWidth flexCenter core-container">
          <div className="flexColStart v-right">
            <Accordion
              allowMultipleExpanded={false}
              allowZeroExpanded
              className="accordion"
            >
              {sections.map(({ key, title, icon, content }) => (
                <AccordionItem uuid={key} key={key}  className="accordionItem">
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <ThemeIcon
                        style={{ ...iconStyle, marginRight: "0.5rem" }}
                        radius="xl"
                        size={40}
                      >
                        {icon}
                      </ThemeIcon>
                      <span
                        className="primaryText"
                        
                      >
                        {title}
                      </span>
                      <MdOutlineArrowDropDown
                        size={28}
                        className="dropIcon"
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <span
                      className="secondaryText"
                      
                    >
                      {content}
                    </span>
                    <br />
                    <br />
                    <a href="#contact-us">
                    <Button variant="outline" fullWidth className="button">
                      Kontakt aufnehmen
                    </Button></a>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <InquiryModal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      />
    </div>
  );
};

export default Value;
