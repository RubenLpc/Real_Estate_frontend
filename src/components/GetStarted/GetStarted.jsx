import React from "react";
import "./GetStarted.css";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Textarea,
  Select,
  Button,
  Grid,
  Transition,
} from "@mantine/core";
import { toast } from "react-toastify";
import { sendInquiry } from "../../utils/api";
import { Check } from "lucide-react";

const GetStarted = () => {
  const form = useForm({
    initialValues: {
      vorname: "",
      nachname: "",
      email: "",
      telefon: "",
      immobilienart: "",
      ort: "",
      flaeche: "",
      nachricht: "",
    },
    validate: {
      vorname: (v) =>
        v.trim().length > 1 ? null : "Bitte geben Sie Ihren Vornamen ein",
      nachname: (v) =>
        v.trim().length > 1 ? null : "Bitte geben Sie Ihren Nachnamen ein",
      email: (v) =>
        /^\S+@\S+$/.test(v) ? null : "Bitte geben Sie eine gültige E-Mail ein",
      telefon: (v) =>
        v.trim().length >= 5 ? null : "Telefonnummer erforderlich",
      immobilienart: (v) =>
        v.trim().length > 0 ? null : "Bitte wählen Sie eine Immobilienart aus",
      ort: (v) =>
        v.trim().length > 1 ? null : "Bitte geben Sie einen Ort an",
      flaeche: (v) =>
        v.trim().length > 0 ? null : "Bitte geben Sie die Fläche an",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = form.validate();
    if (!result.hasErrors) {
      try {
        await sendInquiry(form.values);
        toast.success("Anfrage erfolgreich gesendet!");
        form.reset();
      } catch {
        toast.error("Fehler beim Senden");
      }
    } else {
      toast.error("Bitte alle Pflichtfelder überprüfen");
    }
  };

  return (
    <section id="get-started" className="getstarted-wrapper">
      <div className="getstarted-container">
        <h2 className="form-title">Suchauftrag</h2>

        <form className="form-box" onSubmit={handleSubmit}>
          <Grid gutter="md">
            {/* Vorname */}
            <Grid.Col xs={12} md={6}>
              <div className="input-wrapper">
                <TextInput
                  required
                  placeholder="Vorname"
                  {...form.getInputProps("vorname")}
                  data-valid={form.values.vorname.trim().length > 1}
                />
                <Transition
                  mounted={form.values.vorname.trim().length > 1}
                  transition="fade"
                  duration={300}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Check className="valid-icon" style={styles} size={18} />
                  )}
                </Transition>
              </div>
            </Grid.Col>

            {/* Nachname */}
            <Grid.Col xs={12} md={6}>
              <div className="input-wrapper">
                <TextInput
                  required
                  placeholder="Nachname"
                  {...form.getInputProps("nachname")}
                  data-valid={form.values.nachname.trim().length > 1}
                />
                <Transition
                  mounted={form.values.nachname.trim().length > 1}
                  transition="fade"
                  duration={300}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Check className="valid-icon" style={styles} size={18} />
                  )}
                </Transition>
              </div>
            </Grid.Col>

            {/* Email + Telefon */}
            <Grid.Col xs={12} md={6}>
              <div className="input-wrapper">
                <TextInput
                  required
                  placeholder="E-Mail"
                  {...form.getInputProps("email")}
                  data-valid={/^\S+@\S+$/.test(form.values.email)}
                />
                <Transition
                  mounted={/^\S+@\S+$/.test(form.values.email)}
                  transition="fade"
                  duration={300}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Check className="valid-icon" style={styles} size={18} />
                  )}
                </Transition>
              </div>
            </Grid.Col>

            <Grid.Col xs={12} md={6}>
              <div className="input-wrapper">
                <TextInput
                  required
                  placeholder="Telefonnummer"
                  {...form.getInputProps("telefon")}
                  data-valid={form.values.telefon.trim().length >= 5}
                />
                <Transition
                  mounted={form.values.telefon.trim().length >= 5}
                  transition="fade"
                  duration={300}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Check className="valid-icon" style={styles} size={18} />
                  )}
                </Transition>
              </div>
            </Grid.Col>

            {/* Art der Immobilie */}
            <Grid.Col xs={12}>
              <Select
                required
                placeholder="Welche Art von Immobilien suchen Sie?"
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
                {...form.getInputProps("immobilienart")}
              />
            </Grid.Col>

            {/* Ort + Fläche */}
            <Grid.Col xs={12} md={6}>
              <div className="input-wrapper">
                <TextInput
                  required
                  placeholder="Ort bzw. Suchradius"
                  {...form.getInputProps("ort")}
                  data-valid={form.values.ort.trim().length > 1}
                />
                <Transition
                  mounted={form.values.ort.trim().length > 1}
                  transition="fade"
                  duration={300}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Check className="valid-icon" style={styles} size={18} />
                  )}
                </Transition>
              </div>
            </Grid.Col>

            <Grid.Col xs={12} md={6}>
              <div className="input-wrapper">
                <TextInput
                  required
                  placeholder="Grundstücksfläche in m²"
                  {...form.getInputProps("flaeche")}
                  data-valid={form.values.flaeche.trim().length > 0}
                />
                <Transition
                  mounted={form.values.flaeche.trim().length > 0}
                  transition="fade"
                  duration={300}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Check className="valid-icon" style={styles} size={18} />
                  )}
                </Transition>
              </div>
            </Grid.Col>

            {/* Nachricht */}
            <Grid.Col xs={12}>
              <Textarea
                placeholder="Nachricht (optional)"
                minRows={4}
                {...form.getInputProps("nachricht")}
              />
            </Grid.Col>

            {/* Buton */}
            <Grid.Col xs={12}>
              <div className="button-wrapper">
                <Button type="submit" className="submit-btn">
                  ABSENDEN
                </Button>
              </div>
            </Grid.Col>
          </Grid>
        </form>
      </div>
    </section>
  );
};

export default GetStarted;
