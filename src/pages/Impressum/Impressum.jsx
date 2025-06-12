import React from "react";
import {
  Container,
  Title,
  SimpleGrid,
  Card,
  Text,
  Divider,
  Anchor,
  ThemeIcon,
} from "@mantine/core";
import { IconBuilding, IconFileText, IconMail, IconLink } from "@tabler/icons-react";
import "./Impressum.css";

const Impressum = () => {
  return (
<Container fluid py="xl" className="impressum-container">
<Title order={2} align="center" className="impressum-header">
        Impressum
      </Title>

      <SimpleGrid
        cols={2}
        spacing="xl"
        breakpoints={[{ maxWidth: 768, cols: 1 }]}
        mb="xl"
      >
        <Card shadow="sm" radius="md" withBorder className="info-card">
          <ThemeIcon size={40} radius="md" variant="light" className="info-icon">
            <IconBuilding size={28} />
          </ThemeIcon>
          <Text weight={500} mt="sm">
            Unternehmensname
          </Text>
          <Text mb="sm">Dan Dutescu Real Treuhand GmbH</Text>

          <Text weight={500}>Rechtsform</Text>
          <Text mb="sm">GmbH</Text>

          <Text weight={500}>Geschäftsführer</Text>
          <Text mb="sm">Dan Dutescu, BA</Text>

          <Text weight={500}>Firmensitz</Text>
          <Text mb="sm">Pegasusweg 1, 4030 Linz</Text>

          <Text weight={500}>Telefon</Text>
          <Text mb="sm">+43 664 3883786</Text>

          <Text weight={500}>E-Mail</Text>
          <Anchor href="mailto:office@fidelia.immo" mb="sm">
            office@fidelia.immo
          </Anchor>
        </Card>

        <Card shadow="sm" radius="md" withBorder className="info-card">
          <ThemeIcon size={40} radius="md" variant="light" className="info-icon">
            <IconFileText size={28} />
          </ThemeIcon>
          <Text weight={500} mt="sm">
            Web
          </Text>
          <Anchor href="https://www.fidelia.immo" mb="sm" target="_blank">
            www.fidelia.immo
          </Anchor>

          <Text weight={500}>Firmenbuch</Text>
          <Text mb="sm">FN 123456 a (LG Innsbruck)</Text>

          <Text weight={500}>UID-Nr.</Text>
          <Text mb="sm">ATU 12345678</Text>

          <Text weight={500}>Gewerbebehörde</Text>
          <Text mb="sm">BH Linz-Land</Text>

          <Text weight={500}>WK-Mitglied</Text>
          <Text mb="sm">W Linz, Sparte Immobilien</Text>

          <Text weight={500}>Aufsichtsbehörde</Text>
          <Text>Magistrat Linz</Text>
        </Card>
      </SimpleGrid>

      <Divider my="xl" />

      <div className="footnote">
        <Text size="sm" mb="xs">
          <Text component="span" weight={500}>
            Berufsrecht:
          </Text>{" "}
          Immobilientreuhänder (Makler), Gewerbeordnung 1994 (
          <Anchor
            href="https://www.ris.bka.gv.at"
            target="_blank"
            size="sm"
            className="ris-link"
          >
            RIS
          </Anchor>
          )
        </Text>
        <Text size="sm" mb="xs">
          <Text component="span" weight={500}>
            Bildnachweis:
          </Text>{" "}
          Eigene Bilder, Adobe Stock, Canva
        </Text>
        <Text size="sm">
          <Text component="span" weight={500}>
            Haftung:
          </Text>{" "}
          Für Inhalte externer Links übernehmen wir keine Haftung.
        </Text>
      </div>

      <Anchor href="/" className="back-link" mt="xl" display="block">
        ← Zurück zur Startseite
      </Anchor>
    </Container>
  );
};

export default Impressum;
