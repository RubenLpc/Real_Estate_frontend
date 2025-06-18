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
import { IconMail, IconFileText } from "@tabler/icons-react";
import "./Datenschutz.css";

const Datenschutz = () => {
  return (
    <Container fluid py="xl" className="datenschutz-container">
      <Title order={2} align="center" className="datenschutz-header">
        Datenschutzinformation für Interessenten und Kunden
      </Title>

      <SimpleGrid
        cols={2}
        spacing="xl"
        breakpoints={[{ maxWidth: 768, cols: 1 }]}
        mb="xl"
      >
        {/* Card 1: Verantwortlicher */}
        <Card shadow="sm" radius="md" withBorder className="info-card">
          <ThemeIcon size={40} radius="md" variant="light" className="info-icon">
            <IconMail size={28} />
          </ThemeIcon>

          <Text weight={500} mt="sm">Verantwortlicher</Text>
          <Text mb="sm">
            <strong>Firmenwortlaut:</strong> Dan Dutescu, BA, Immobilientreuhänder (Immobilienmakler, Immobilienverwalter, Bauträger), eingeschränkt auf Immobilienmakler
          </Text>
          <Text mb="sm">
            <strong>Adresse:</strong> Pegasusweg 1, 4030 Linz
          </Text>
          <Text mb="sm">
            <strong>Telefonnummer:</strong> +43 664 3883 786
          </Text>

          <Text weight={500} mt="md">Datenschutzbeauftragter</Text>
          <Text>
            Es ist kein Datenschutzbeauftragter bestellt, da keine gesetzliche Notwendigkeit besteht
          </Text>
        </Card>

        {/* Card 2: Verarbeitung, Rechtsgrundlage... */}
        <Card shadow="sm" radius="md" withBorder className="info-card">
          <ThemeIcon size={40} radius="md" variant="light" className="info-icon">
            <IconFileText size={28} />
          </ThemeIcon>

          <Text mb="sm">
            <strong>Zu welchem Zweck verarbeiten wir Ihre Daten:</strong><br />
            Interessenten- und Kundenverwaltung im Rahmen der Immobilienvermittlung (einschließlich automationsunterstützt erstellter und archivierter Textdokumente (wie z. B. Korrespondenz) in diesen Angelegenheiten)          </Text>
          <Text mb="sm">
            <strong>Rechtsgrundlage:</strong><br />
            Vertrag, Vertragsanbahnung (Vermittlungsvertrag) sowie gesetzliche Grundlage
            </Text>
          <Text mb="sm">
            <strong>Wie lange speichern wir Ihre Daten:</strong><br />
            Die Daten werden während der Dauer des Vertragsverhältnisses und nach Beendigung dessen zumindest solange aufbewahrt, als gesetzliche Aufbewahrungsfristen bestehen oder Verjährungsfristen potentieller Rechtsansprüche noch nicht abgelaufen sind.
            </Text>
          <Text mb="sm">
            <strong>An wen geben wir Ihre Daten weiter:</strong><br />
            Wir speichern und verarbeiten die uns übermittelten bzw. bekannt gegebenen personenbezogenen Daten nur soweit es mit der Abwicklung des Vertrages (Vermittlungsvertrag) im Zusammenhang steht. Eine Weitergabe erfolgt nur im minimal erforderlichen Umfang und soweit es für die Vertragsabwicklung notwendig ist, auf einer gesetzlichen Grundlage beruht oder ein berechtigtes Interesse an der Geschäftsabwicklung beteiligter (Dritter) besteht.
Mögliche Empfänger können sein: Abteilungen des Unternehmens, die mit der Geschäftsabwicklung befasst sind (z.B. EDV, sonstige Verwaltungseinheiten) oder an der Geschäftsabwicklung beteiligte Dritte (an der Geschäftsabwicklung notwendigerweise teilnehmende Personen und potentielle Vertragspartner, weitere Makler, Vermittlungsplattformen, Hausverwaltungen, Finanzierungsunternehmen, private und öffentliche Stellen, die Informationen zu Objekten bekannt geben können oder benötigen, Versicherungen).
Dienstleister des Verantwortlichen (z.B. Steuerberater, Lohnverrechnung, Rechtsanwalt) sowie Behörden (Sozialversicherung, Finanzamt, sonstige Behörden), Rechtsvertreter (bei der Durchsetzung von Rechten oder Abwehr von Ansprüchen oder im Rahmen von Behördenverfahren) oder Unternehmen, die im Rahmen der Betreuung der IT-Infrastruktur (Software, Hardware) als Auftragnehmer tätig sind.
          </Text>
          
          <Text mb="sm">
          Keinesfalls werden Ihre Daten zu Werbezwecken o.ä. weitergegeben. Unsere Mitarbeiter und unsere Dienstleistungsunternehmen sind zur Verschwiegenheit und zur Einhaltung der Datenschutzbestimmungen verpflichtet.           </Text>
          <Text mb="sm">
          Eine Übermittlung an Empfänger in einem Drittland (außerhalb der EU) oder an eine internationale Organisation ist vorgesehen; die Übermittlung beruht auf Standarddatenschutzklauseln sowie Angemessenheitsbeschluss.          </Text>
          <Text mb="sm">
          Es besteht keine automatisierte Entscheidungsfindung (Profiling).
          </Text>
          <Text mb="sm">
          Die Angabe der Daten ist erforderlich, damit das Vertragsverhältnis ordnungsgemäß durchgeführt werden kann.          </Text>
        </Card>
      </SimpleGrid>

      <Divider my="xl" />

      <div className="footnote">
        <Text size="sm" mb="xs">
        Als betroffener Person steht Ihnen grundsätzlich das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit im Rahmen der gesetzlichen Bestimmungen zu. Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
        <strong>Dan Dutescu, BA</strong>, +43 664 3883 786; <Anchor href="mailto:office@fidelia.immo">office@fidelia.immo</Anchor>
        </Text>
        <Text size="sm">
        Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in irgendeiner Weise verletzt worden sind, können Sie sich bei der Datenschutzbehörde beschweren.        </Text>
      </div>

      <Anchor href="/" className="back-link" mt="xl" display="block">
        ← Zurück zur Startseite
      </Anchor>
    </Container>
  );
};

export default Datenschutz;
