import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button, Group, TextInput } from "@mantine/core";
import "./UploadImage.css";


const UploadGallery = ({
  propertyDetails,
  setPropertyDetails,
  nextStep,
  prevStep,
}) => {
  const [images, setImages] = useState(propertyDetails.images || []);
  const [videoLink, setVideoLink] = useState(propertyDetails.video || "");
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const handleNext = () => {
    setPropertyDetails((prev) => ({
      ...prev,
      images,
      video: videoLink.trim(), // include doar dacă există
    }));
    nextStep();
  };

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "do3wzvgto",
        uploadPreset: "r2ocxngt",
        multiple: true,
        maxFiles: 10,
      },
      (err, result) => {
        if (result.event === "success") {
          setImages((prev) => [...prev, result.info.secure_url]);
        }
      }
    );
  }, []);

  return (
    <div className="flexColCenter uploadWrapper">
      <div
        className="flexColCenter uploadZone"
        onClick={() => widgetRef.current?.open()}
      >
        <AiOutlineCloudUpload size={40} color="grey" />
        <span>Upload Gallery Images</span>
      </div>

      <div className="uploadedGallery">
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`uploaded ${i}`}
            style={{ height: "100px", margin: "0.5rem", borderRadius: "8px" }}
          />
        ))}
      </div>

      <TextInput
        placeholder="YouTube video link (optional)"
        label="Video"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
        style={{ width: "100%", marginTop: "1rem" }}
      />

      <Group position="center" mt={"xl"}>
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleNext}>Next</Button>
      </Group>
    </div>
  );
};

export default UploadGallery;
