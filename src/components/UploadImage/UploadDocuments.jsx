import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button, Group } from "@mantine/core";
import { downloadFile } from "../../utils/download.js";

import "./UploadImage.css";

const UploadDocuments = ({ initialDocs = [], onChange, nextStep, prevStep }) => {
  const [urls, setUrls] = useState(initialDocs);
  const widgetRef = useRef();

  useEffect(() => {
    widgetRef.current = window.cloudinary.createUploadWidget(
      {
        cloudName: "do3wzvgto",
        uploadPreset: "r2ocxngt",
        resourceType: "raw",
        multiple: true,
        maxFiles: 10,
      },
      (err, result) => {
        if (!err && result.event === "success") {
          const newUrl = result.info.secure_url;
          setUrls(prev => {
            const updated = [...prev, newUrl];
            onChange(updated);
            return updated;
          });
        }
      }
    );
  }, [onChange]);

  return (
    <div className="flexColCenter uploadWrapper">
      <div className="flexColCenter uploadZone" onClick={() => widgetRef.current?.open()}>
        <AiOutlineCloudUpload size={50} color="grey" />
        <span>Dokumente hochladen (PDF / DOC)</span>
      </div>

      <div className="docsList">
        {urls.map((url, i) => (
          <Button
            key={i}
            variant="subtle"
            onClick={() => downloadFile(url, `Dokument_${i + 1}.pdf`)}
            style={{ display: "block", margin: "0.5rem 0" }}
          >
            ↓ Dokument&nbsp;{i + 1}
          </Button>
        ))}
      </div>

      <Group position="apart" mt="xl">
        <Button variant="default" onClick={prevStep}>Zurück</Button>
        <Button onClick={nextStep} disabled={urls.length === 0}>Weiter</Button>
      </Group>
    </div>
  );
};

export default UploadDocuments;
