import React, { useState } from "react";
import {
  Modal,
  Stepper,
  Button,
  Container,
  TextInput,
  Select,
  Textarea,
  NumberInput,
  FileInput,
  Stack,
  Group,
  Checkbox,
  Radio,
  MultiSelect,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { createResidency, updateResidency } from "../../utils/api";
import { toast } from "react-toastify";
import UploadDocuments from "../UploadImage/UploadDocuments";
import UploadMainImage from "../UploadImage/UploadMainImage";
import UploadVideo from "../UploadImage/UploadVideo";
import UploadGallery from "../UploadImage/UploadGallery";
import UploadPdf from "../UploadImage/UploadPdf";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const AddPropertyModal = ({ opened, onClose, property, onSaved }) => {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [newOpt, setNewOpt] = useState("");
  const [options, setOptions] = useState([
    "Reitplatz",
    "Lagerhalle",
    "Brunnen",
    "Photovoltaik",
    "Garage",
  ]);
  const addOption = () => {
    if (newOpt.trim() === "" || options.includes(newOpt)) return;
    setOptions((o) => [...o, newOpt]);
    form.setFieldValue("features", [...form.values.features, newOpt]);
    setNewOpt("");
  };
  const form = useForm({
    initialValues: {
      title: "",
      propertyType: "",
      status: "",
      description: "",
      address: "",
      region: "",
      landArea: 0,
      livingArea: 0,
      rooms: 0,
      constructionYear: 0,
      renovationNeed: "",
      zoning: "",
      energyCertificate: null,
      price: 0,
      negotiable: false,
      commission: "",
      availabilityDate: null,
      mainImage: null,
      galleryImages: [],
      videoUrl: "",
      droneVideoUrl: "",
      documents: [],
      features: [],
      tags: [],
    },
    validate: {
      title: (value) => (value ? null : "Pflichtfeld"),
      propertyType: (value) => (value.length > 0 ? null : "Bitte auswählen"),
      status: (value) => (value ? null : "Pflichtfeld"),
      description: (value) => (value ? null : "Pflichtfeld"),
      region: (value) => (value ? null : "Pflichtfeld"),
    },
  });
  useEffect(() => {
    if (property) {
      // map your API fields into the form shape
      form.setValues({
        title: property.title,
        propertyType: property.propertyType,
        status: property.status,
        description: property.description,
        address: property.address,
        region: property.region,
        landArea: property.landArea,
        livingArea: property.livingArea,
        rooms: property.rooms,
        constructionYear: property.constructionYear,
        renovationNeed: property.renovationNeed,
        zoning: property.zoning,
        energyCertificate: property.energyCertificate,
        price: property.price,
        negotiable: property.negotiable,
        commission: property.commission,
        availabilityDate: property.availabilityDate
          ? new Date(property.availabilityDate)
          : null,
        mainImage: property.image,
        galleryImages: property.images || [],
        videoUrl: property.video,
        droneVideoUrl: property.droneVideo,
        documents: property.documents || [],
        features: property.features || [],
        tags: property.tags || [],
      });
    } else {
      form.reset();
    }
  }, [property]);

  const nextStep = () => {
    if (active === 0 || active === 1) {
      const validation = form.validate();
      if (!validation.hasErrors) {
        setActive((current) => current + 1);
      }
    } else {
      setActive((current) => Math.min(current + 1, 5));
    }
  };

  const prevStep = () => setActive((current) => Math.max(current - 1, 0));
  const handleSubmit = async () => {
    try {
      if (property) {
        await updateResidency(property.id, form.values);
        toast.success("Immobilie erfolgreich aktualisiert!");
      } else {
        await createResidency(form.values);
        toast.success("Immobilie erfolgreich hinzugefügt!");
      }
      onSaved(); // tell parent to close and refetch
      setActive(0);
      form.reset();
    } catch (err) {
      toast.error("Fehler beim Speichern der Immobilie.");
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      closeOnClickOutside
      size="xxl"
      title="Immobiliendaten erfassen"
      centered
    >
      <Container>
        <Stepper
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          allowNextStepsSelect={false}
        >
          <Stepper.Step
            label="Allgemeine Daten"
            description="Basisinformationen"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                nextStep();
              }}
            >
              <TextInput
                withAsterisk
                label="Titel"
                placeholder="z. B. Charmanter Vierkanthof"
                {...form.getInputProps("title")}
                mt="sm"
              />
              <Select
                withAsterisk
                label="Objektart"
                placeholder="Bitte auswählen"
                data={[
                  "Wohnhaus",
                  "Zinshaus",
                  "Bauernhaus",
                  "Gewerbegrundstück",
                  "Wohnbaugrundstücke",
                  "Baulandreserven",
                  "Revitalisierungsprojekte",
                  "Sonstiges",
                ]}
                {...form.getInputProps("propertyType")}
                mt="sm"
              />
              <Select
                withAsterisk
                label="Status"
                placeholder="Bitte auswählen"
                data={["verfügbar", "reserviert", "verkauft", "diskret"]}
                {...form.getInputProps("status")}
                mt="sm"
              />
              <Textarea
                withAsterisk
                label="Beschreibung"
                placeholder="Detaillierte Objektbeschreibung"
                {...form.getInputProps("description")}
                autosize
                minRows={4}
                mt="sm"
              />
              <TextInput
                label="Adresse (optional)"
                placeholder="Straße, PLZ, Ort"
                {...form.getInputProps("address")}
                mt="sm"
              />
              <Select
                withAsterisk
                label="Region"
                placeholder="z. B. Oberösterreich"
                data={[
                  "Oberösterreich",
                  "Steiermark",
                  "Wien",
                  "Niederösterreich",
                  "Burgenland",
                ]}
                {...form.getInputProps("region")}
                mt="sm"
              />
              <Group position="right" mt="md">
                <Button type="submit">Weiter</Button>
              </Group>
            </form>
          </Stepper.Step>

          <Stepper.Step
            label="Flächen & Eckdaten"
            description="Optionale Werte"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                nextStep();
              }}
            >
              <NumberInput
                label="Grundstücksfläche (m²)"
                placeholder="z. B. 8230"
                {...form.getInputProps("landArea")}
                mt="sm"
              />
              <NumberInput
                label="Wohn-/Nutzfläche (m²)"
                placeholder="z. B. 320"
                {...form.getInputProps("livingArea")}
                mt="sm"
              />
              <NumberInput
                label="Anzahl Zimmer"
                placeholder="z. B. 7"
                {...form.getInputProps("rooms")}
                mt="sm"
              />
              <NumberInput
                label="Baujahr"
                placeholder="z. B. 1930"
                {...form.getInputProps("constructionYear")}
                mt="sm"
              />
              <Radio.Group
                label="Sanierungsbedarf"
                {...form.getInputProps("renovationNeed")}
                mt="sm"
              >
                <Radio value="Ja" label="Ja" />
                <Radio value="Nein" label="Nein" />
                <Radio value="Teilweise" label="Teilweise" />
              </Radio.Group>
              <Select
                label="Widmung / Nutzung"
                placeholder="Bitte auswählen"
                data={["Grünland", "Bauland", "Gewerbegebiet", "Sonstiges"]}
                {...form.getInputProps("zoning")}
                mt="sm"
              />
              <br />
              <UploadPdf
                value={form.values.energyCertificate}
                onChange={(url) => form.setFieldValue("energyCertificate", url)}
              />
              <Group position="apart" mt="md">
                <Button variant="default" onClick={prevStep}>
                  Zurück
                </Button>
                <Button type="submit">Weiter</Button>
              </Group>
            </form>
          </Stepper.Step>

          <Stepper.Step label="Preisangaben" description="Preisinformationen">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                nextStep();
              }}
            >
              <NumberInput
                label="Kaufpreis (€)"
                placeholder="z. B. 325000"
                parser={(value) => value.replace(/\D/g, "")}
                formatter={(value) =>
                  !value ? "" : `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
                }
                {...form.getInputProps("price")}
                mt="sm"
              />
              <Checkbox
                label="Verhandlungsbasis (VB)"
                {...form.getInputProps("negotiable", { type: "checkbox" })}
                mt="sm"
              />
              <TextInput
                label="Vermittlungshonorar / Provision"
                placeholder="z. B. 3 % zzgl. USt"
                {...form.getInputProps("commission")}
                mt="sm"
              />
              <DatePicker
                label="Verfügbarkeit ab"
                placeholder="Datum auswählen"
                {...form.getInputProps("availabilityDate")}
                mt="sm"
              />
              <Group position="apart" mt="md">
                <Button variant="default" onClick={prevStep}>
                  Zurück
                </Button>
                <Button type="submit">Weiter</Button>
              </Group>
            </form>
          </Stepper.Step>

          {/* PAS 4: Medien */}
          {/* PAS 4: Medien */}
          <Stepper.Step label="Medien" description="Bilder & Dokumente">
            {/* încarcă imaginea principală */}
            <UploadMainImage
              mainImage={form.values.mainImage}
              setMainImage={(url) => form.setFieldValue("mainImage", url)}
              nextStep={nextStep}
              prevStep={prevStep}
            />

            {/* încarcă galeria */}
            <UploadGallery
              onChange={(arr) => form.setFieldValue("galleryImages", arr)}
              nextStep={nextStep}
              prevStep={prevStep}
            />

            {form.values.galleryImages.length > 0 && (
              <>
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={10}
                  slidesPerView={1}
                  style={{ width: "100%", height: 400, margin: "1rem 0" }}
                >
                  {form.values.galleryImages.map((url, idx) => (
                    <SwiperSlide key={idx}>
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          borderRadius: 8,
                          overflow: "hidden",
                        }}
                      >
                        {/* butonul X pentru ștergere */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const newGallery = form.values.galleryImages.filter(
                              (_u, i) => i !== idx
                            );
                            form.setFieldValue("galleryImages", newGallery);
                          }}
                          style={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            zIndex: 2,
                            background: "rgba(0,0,0,0.5)",
                            border: "none",
                            color: "white",
                            borderRadius: "50%",
                            width: 24,
                            height: 24,
                            cursor: "pointer",
                            fontSize: 16,
                            lineHeight: "24px",
                            textAlign: "center",
                          }}
                        >
                          ×
                        </button>

                        {/* miniatura */}
                        <img
                          src={url}
                          alt={`preview-${idx}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setLightboxIndex(idx);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Lightbox simplu doar pentru imagini */}
                <Lightbox
                  open={lightboxOpen}
                  close={() => setLightboxOpen(false)}
                  index={lightboxIndex}
                  slides={form.values.galleryImages.map((src) => ({ src }))}
                />
              </>
            )}

            {/* încarcă videoclip */}
            <UploadVideo
              videoUrl={form.values.videoUrl}
              onChange={(url) => form.setFieldValue("videoUrl", url)}
              nextStep={nextStep}
              prevStep={prevStep}
            />

            {/* încărcare documente */}
            <UploadDocuments
              initialDocs={form.values.documents}
              onChange={(docs) => form.setFieldValue("documents", docs)}
              prevStep={prevStep}
              nextStep={nextStep}
            />

            <Group position="apart" mt="md">
              <Button variant="default" onClick={prevStep}>
                Zurück
              </Button>
              <Button onClick={nextStep}>Weiter</Button>
            </Group>
          </Stepper.Step>

          <Stepper.Step label="Ausstattung" description="Extras & Highlights">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                nextStep();
              }}
            >
              <div>
                <Checkbox.Group
                  label="Ausstattung"
                  description="z. B. Reitplatz, Photovoltaik etc."
                  {...form.getInputProps("features")}
                  mt="sm"
                >
                  <Stack>
                    {options.map((item) => (
                      <Checkbox key={item} value={item} label={item} />
                    ))}
                  </Stack>
                </Checkbox.Group>

                <TextInput
                  mt="md"
                  placeholder="Alte Ausstattung..."
                  value={newOpt}
                  onChange={(e) => setNewOpt(e.currentTarget.value)}
                  onKeyDown={(e) => e.key === "Enter" && addOption()}
                />

                <Button mt="xs" onClick={addOption}>
                  Adaugă la Ausstattung
                </Button>
              </div>
              <MultiSelect
                label="Highlights / Tags"
                placeholder="z. B. ruhige Lage"
                data={form.values.tags}
                searchable
                creatable
                {...form.getInputProps("tags")}
                getCreateLabel={(query) => `+ ${query}`}
                onCreate={(query) => {
                  const newTags = [...form.values.tags, query];
                  form.setFieldValue("tags", newTags);
                  return query;
                }}
                mt="sm"
              />

              <Group position="apart" mt="md">
                <Button variant="default" onClick={prevStep}>
                  Zurück
                </Button>
                <Button type="submit" onClick={handleSubmit}>
                  {property ? "Speichern" : "Erstellen"}
                </Button>
              </Group>
            </form>
          </Stepper.Step>

          <Stepper.Completed>
            <div>Immobilie erfolgreich hinzugefügt!</div>
          </Stepper.Completed>
        </Stepper>
      </Container>
    </Modal>
  );
};

export default AddPropertyModal;
