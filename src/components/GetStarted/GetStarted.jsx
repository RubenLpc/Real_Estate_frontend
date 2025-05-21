import React, { useState } from "react";
import "./GetStarted.css";
import InquiryModal from "../InquiryModal/InquiryModal";
import { Button, Group } from "@mantine/core";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const GetStarted = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Bleiben wir in Kontakt!</span>
          

          {/* Hauptaktion: Suchauftrag aufgeben */}
          <Button
            className="button"
            size="sm"
            style={{ backgroundColor: 'var(--primary)', color: 'white' }}
            onClick={() => setModalOpened(true)}
          >
            Suchauftrag aufgeben
          </Button>

          {/* Social Media Buttons: Responsive Wrap */}
          <Group
            spacing="sm"
            mt="md"
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Button
              component="a"
              href="https://www.facebook.com/profile.php?id=61563885246419"
              target="_blank"
              leftIcon={<Facebook size={16} />}
              variant="outline"
              size="sm"
              className="button"
              style={{ flex: '1 1 120px', margin: '0.25rem' }}
            >
              Facebook
            </Button>
            <Button
              component="a"
              href="https://www.instagram.com/dan.dutescu.immo"
              target="_blank"
              leftIcon={<Instagram size={16} />}
              variant="outline"
              className="button"
              size="sm"
              style={{ flex: '1 1 120px', margin: '0.25rem' }}
            >
              Instagram
            </Button>
            <Button
              component="a"
              href="https://www.linkedin.com/in/dandutescu"
              target="_blank"
              leftIcon={<Linkedin size={16} />}
              variant="outline"
              size="sm"
              style={{ flex: '1 1 120px', margin: '0.25rem' }}
              className="button"
            >
              LinkedIn
            </Button>
          </Group>
        </div>
      </div>

      <InquiryModal opened={modalOpened} onClose={() => setModalOpened(false)} />
    </div>
  );
};

export default GetStarted;
