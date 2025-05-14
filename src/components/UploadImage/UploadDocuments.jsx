// src/components/UploadImage/UploadDocuments.jsx
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button, Group } from "@mantine/core";
import "./UploadImage.css";

/**
 * Props:
 *   value:      string[]            // existing document URLs
 *   onChange:   (newUrls:string[])  // called when upload widget returns a new URL
 *   nextStep:   () => void
 *   prevStep:   () => void
 */
export default function UploadDocuments({ value = [], onChange, nextStep, prevStep }) {
  const [docs, setDocs] = useState(value);
  const widgetRef = useRef(null);

  useEffect(() => {
    // initialize Cloudinary widget just once
    if (widgetRef.current) return;
    widgetRef.current = window.cloudinary.createUploadWidget(
      {
        cloudName: "do3wzvgto",
        uploadPreset: "r2ocxngt",
        resourceType: "raw", // for PDF/DOC
        multiple: true,
        maxFiles: 10,
      },
      (err, result) => {
        if (!err && result.event === "success") {
          const url = result.info.secure_url;
          setDocs((prev) => {
            const next = [...prev, url];
            onChange(next);   // notify parent *inside* the callback
            return next;
          });
        }
      }
    );
  }, [onChange]);

  return (
    <div className="flexColCenter uploadWrapper">
      <div className="flexColCenter uploadZone" onClick={() => widgetRef.current.open()}>
        <AiOutlineCloudUpload size={50} color="grey" />
        <span>Dokumente hochladen (PDF / DOC)</span>
      </div>

      <div className="docsList">
        {docs.map((url, i) => (
          <a
            key={i}
            href={url}
            download={`Dokument_${i + 1}.pdf`}
            target="_blank"
            rel="noreferrer"
            className="docLink"
          >
            ↓ Dokument {i + 1}
          </a>
        ))}
      </div>

      <Group position="apart" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Zurück
        </Button>
        <Button onClick={nextStep} disabled={docs.length === 0}>
          Weiter
        </Button>
      </Group>
    </div>
  );
}
