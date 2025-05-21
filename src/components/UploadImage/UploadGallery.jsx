// UploadGallery.jsx (fixed)
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button, Group } from "@mantine/core";
import "./UploadImage.css";

const UploadGallery = ({ gallery = [], onChange, nextStep, prevStep }) => {
  // preluăm imaginile existente doar la prima randare
  const [urls, setUrls] = useState(gallery);
  const widgetRef = useRef(null);

  useEffect(() => {
    // nu crea widget-ul de mai multe ori
    if (widgetRef.current) return;

    widgetRef.current = window.cloudinary.createUploadWidget(
      {
        cloudName: "do3wzvgto",
        uploadPreset: "r2ocxngt",
        multiple: true,
        maxFiles: 20,
      },
      (error, result) => {
        if (!error && result.event === "success") {
          // adaugă noua imagine în state
          setUrls((prev) => {
            const updated = [...prev, result.info.secure_url];
            onChange && onChange(updated);      // raportează în formular
            return updated;
          });
        }
      }
    );
  }, [onChange]);            // va rula o singură dată (onChange e stabil)

  const handleNext = () => nextStep();

  return (
    <div className="flexColCenter uploadWrapper">
      <div
        className="flexColCenter uploadZone"
        onClick={() => widgetRef.current?.open()}
      >
        <AiOutlineCloudUpload size={40} color="grey" />
        <span>Bilder hochladen</span>
      </div>

      {/* preview imagini */}
      <div className="galleryPreview">
        {urls.map((u, i) => (
          <img key={i} src={u} alt={`img-${i}`} className="thumbnail" />
        ))}
      </div>

      
    </div>
  );
};

export default UploadGallery;
