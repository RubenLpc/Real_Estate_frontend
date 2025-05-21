import React, { useState } from "react";
import { Modal, Stepper, Button, Box, Group, Select, MultiSelect, TextInput, Textarea, NumberInput, Checkbox } from "@mantine/core";
import { useForm } from "@mantine/form";
import { toast } from "react-toastify";
import { sendInquiry } from "../../utils/api";
import "./InquiryModal.css";

const InquiryModal = ({ opened, onClose }) => {
  const [active, setActive] = useState(0);
  const form = useForm({
    initialValues: {
      anrede: "",
      vorname: "",
      nachname: "",
      email: "",
      telefon: "",
      immobilienart: [],
      ort: "",
      flaeche: "",
      nachricht: "",
      consent: false,
    },
    validate: {
      anrede: (v) => (v ? null : "Pflichtfeld"),
      vorname: (v) => (v.length > 1 ? null : "Mindestens 2 Zeichen"),
      nachname: (v) => (v.length > 1 ? null : "Mindestens 2 Zeichen"),
      email: (v) => (/^\S+@\S+$/.test(v) ? null : "Ungültige E-Mail"),
      immobilienart: (v) => (v.length > 0 ? null : "Pflichtfeld"),
      ort: (v) => (v.length > 1 ? null : "Pflichtfeld"),
      consent: (v) => (v ? null : "Einwilligung erforderlich"),
    },
  });

  const nextStep = () => {
    // Validate only fields for the current step
    const stepFields = active === 0
      ? ["anrede", "vorname", "nachname", "email"]
      : ["immobilienart", "ort"];
    const result = form.validate();
    const hasRelevantErrors = stepFields.some(field => result.errors[field]);
    if (!hasRelevantErrors) {
      setActive((c) => Math.min(c + 1, 2));
    } else {
      toast.error("Bitte Felder im aktuellen Schritt überprüfen");
    }
  };

  const prevStep = () => setActive((c) => Math.max(c - 1, 0));

  const handleSubmit = async () => {
    const result = form.validate();
    if (!result.hasErrors) {
      try {
        await sendInquiry(form.values);
        toast.success("Anfrage erfolgreich gesendet!");
        onClose();
        form.reset();
        setActive(0);
      } catch {
        toast.error("Fehler beim Senden");
      }
    } else {
      toast.error("Bitte alle Felder überprüfen");
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Suchauftrag aufgeben" size="lg" centered>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm" allowNextStepsSelect={false}>
        <Stepper.Step label="Ihre Kontaktdaten" description="Schritt 1">
          <Box>
            <Select
              label="Anrede"
              placeholder="Herr / Frau"
              required
              data={[{ value: "Herr", label: "Herr" }, { value: "Frau", label: "Frau" }, { value: "Divers", label: "Divers" }]}
              {...form.getInputProps("anrede", { showError: true })}
              mt="sm"
            />
            <TextInput
              label="Vorname"
              placeholder="Vorname"
              required
              {...form.getInputProps("vorname", { showError: true })}
              mt="sm"
            />
            <TextInput
              label="Nachname"
              placeholder="Nachname"
              required
              {...form.getInputProps("nachname", { showError: true })}
              mt="sm"
            />
            <TextInput
              label="E-Mail-Adresse"
              placeholder="name@example.com"
              required
              {...form.getInputProps("email", { showError: true })}
              mt="sm"
            />
            <TextInput
              label="Telefonnummer"
              placeholder="0123456789"
              {...form.getInputProps("telefon")}
              required
              mt="sm"
            />
            <Group position="right" mt="md">
              <Button type="button" onClick={nextStep}>Weiter</Button>
            </Group>
          </Box>
        </Stepper.Step>

        <Stepper.Step label="Objektinformationen" description="Schritt 2">
          <Box>
            <MultiSelect
              label="Welche Art von Immoblien suchen Sie?"
              placeholder="Mehrfachauswahl möglich"
              required
              data={[
                "Ertragsobjekt / Zinshäuser",
                "Bauernhaus / Landwirtschaftliches Anwesen",
                "Acker- oder Grünlandflächen",
                "Waldflächen / Eigenjagd",
                "Pferdehof",
                "Gewerbegrundstück",
                "Betriebshalle",
                "Wohnhaus / Wohnung",
                "Wohnbaugrundstücke",
                "Baulandreserven",
                "Revitalisierungsprojekte",
                "Sonstiges",
              ]}
              {...form.getInputProps("immobilienart", { showError: true })}
              mt="sm"
            />
            <TextInput
              label="Ort bzw. Suchradius"
              placeholder="z.B. Wien / 50km"
              required
              {...form.getInputProps("ort", { showError: true })}
              mt="sm"
            />
            <NumberInput
              label="Grundstücksfläche (optional)"
              placeholder="m²"
              {...form.getInputProps("flaeche")}
              mt="sm"
            />
            <Group position="apart" mt="md">
              <Button variant="default" onClick={prevStep}>Zurück</Button>
              <Button type="button" onClick={nextStep}>Weiter</Button>
            </Group>
          </Box>
        </Stepper.Step>

        <Stepper.Step label="Nachricht & Einwilligung" description="Schritt 3">
          <Box component="form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <Textarea
              label="Gibt es Besonderheiten, Wünsche oder Fragen?"
              placeholder="Ihre Nachricht"
              {...form.getInputProps("nachricht")}
              mt="sm"
              minRows={4}
            />
            <Checkbox
              label="Ich stimme zu, dass meine Daten zur Bearbeitung meines Anliegens gespeichert werden."
              required
              {...form.getInputProps("consent", { type: "checkbox", showError: true })}
              mt="sm"
            />
            <Group position="apart" mt="md">
              <Button variant="default" onClick={prevStep}>Zurück</Button>
              <Button type="submit">Absenden</Button>
            </Group>
          </Box>
        </Stepper.Step>

        <Stepper.Completed>
          <Box ta="center" py="xl">
            Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen.
            <Group position="center" mt="md">
              <Button onClick={onClose}>Schließen</Button>
            </Group>
          </Box>
        </Stepper.Completed>
      </Stepper>
    </Modal>
  );
};

export default InquiryModal;