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
import { IconBuilding, IconFileText } from "@tabler/icons-react";
import "./Impressum.css";

const Impressum = () => (
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
      {/* Card 1: Kontaktdaten */}
      <Card shadow="sm" radius="md" withBorder className="info-card">
        <ThemeIcon size={40} radius="md" variant="light" className="info-icon">
          <IconBuilding size={28} />
        </ThemeIcon>

        <Text weight={500} mt="sm">Dan Dutescu, BA</Text>
        <Text mb="sm">Pegasusweg 1, 4030 Linz</Text>

        <Text weight={500}>Immobilientreuhänder</Text>
        <Text mb="sm">
          (Immobilienmakler, Immobilienverwalter, Bauträger), eingeschränkt auf Immobilienmakler
        </Text>

        <Text weight={500}>Telefon</Text>
        <Text mb="sm">+43 664 3883 786</Text>

        <Text weight={500}>E-Mail</Text>
        <Anchor href="mailto:office@fidelia.immo" mb="sm">
          office@fidelia.immo
        </Anchor>

        <Text weight={500}>UID</Text>
        <Text mb="sm">ATU 81065856</Text>

        <Text weight={500}>Mitgliedschaft</Text>
        <Text mb="sm">Mitglied der WKÖ, FG Immobilien- und Vermögenstreuhänder</Text>

        <Text weight={500}>Gewerbebehörde</Text>
        <Text>Bezirkshauptmannschaft Linz-Land</Text>
      </Card>

      {/* Card 2: Rechtliches */}
      <Card shadow="sm" radius="md" withBorder className="info-card">
        <ThemeIcon size={40} radius="md" variant="light" className="info-icon">
          <IconFileText size={28} />
        </ThemeIcon>

        <Text mb="md">
          <strong>Haftung:</strong><br/>
          Dan Dutescu, BA recherchiert sorgfältig und setzt alles daran, nur vollständige und richtige Informationen auf seiner Website www.fidelia.immo zu veröffentlichen. Es wird jedoch keine Gewähr oder Haftung für die Vollständigkeit, Richtigkeit, Qualität und Aktualität der Informationen übernommen. Die Nutzung der Informationen liegt im alleinigen Verantwortungsbereich des Nutzers.
        </Text>

        <Text mb="md">
          <strong>Nutzung:</strong><br/>
          Sämtliche Inhalte, einschließlich aller Texte, Bilder, Grafiken, Icons, Animationen etc. der Website von Dan Dutescu, BA sind urheberrechtlich geschützt. Dan Dutescu, BA erlaubt Ihnen jedoch, das Material zur internen Nutzung in Ihrem Haus herunterzuladen und zu vervielfältigen. Jede weitergehende kommerzielle Verwendung, insbesondere die Veröffentlichung, Speicherung in Datenbanken sowie jede Form von gewerblicher Nutzung ohne Zustimmung der Rechteinhaber ist untersagt.
        </Text>

        <Text>
          <strong>Links:</strong><br/>
          Auf der Website von Dan Dutescu, BA wird mittels Links auf andere Websites verwiesen. Vor der Veröffentlichung dieser Links wurden die fremden Sites auf rechtswidrige Inhalte überprüft. Dan Dutescu, BA jedoch keine Kontrolle über das Material, welches auf solchen Sites veröffentlicht wird und ist nicht für die Inhalte sowie die Datenschutzstrategien fremder Sites verantwortlich. Dan Dutescu, BA übernimmt keinerlei Haftung für die Inhalte der Sites, auf die verwiesen wird. Hinweise auf rechtswidrige Inhalte wird Dan Dutscu, BA überprüfen und gegebenenfalls den Link entfernen.
        </Text>
      </Card>
    </SimpleGrid>

    <Divider my="xl" />
    <Anchor href="/" className="back-link" mt="xl" display="block">
      ← Zurück zur Startseite
    </Anchor>
  </Container>
);

export default Impressum;
