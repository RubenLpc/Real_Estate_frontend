// UploadVideo.jsx
import React, { useRef, useEffect } from "react";
import { TextInput, Button, Group } from "@mantine/core";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./UploadImage.css";

/**
 * Props:
 *   videoUrl : string         – link existent (sau '')
 *   onChange : func(url)      – actualizează formularul
 *   nextStep / prevStep       – navigare Stepper
 */
const UploadVideo = ({ videoUrl = "", onChange, nextStep, prevStep }) => {
  const widgetRef = useRef();

  // Inițializez Cloudinary doar o dată
  useEffect(() => {
    widgetRef.current = window.cloudinary?.createUploadWidget(
      {
        cloudName: "do3wzvgto",
        uploadPreset: "r2ocxngt",
        resourceType: "video",   // permite MP4, MOV etc.
        maxFiles: 1,
      },
      (err, result) => {
        if (!err && result.event === "success") {
          onChange && onChange(result.info.secure_url); // trimitem URL-ul
        }
      }
    );
  }, [onChange]);

  return (
    <div className="flexColCenter uploadWrapper">
      {/* input link manual */}
      <TextInput
        label="Video-Link (YouTube, Vimeo o. Ä.)"
        placeholder="https://..."
        value={videoUrl}
        onChange={(e) => onChange(e.target.value)}
        mt="sm"
      />

      <div
        className="flexColCenter uploadZone"
        style={{ marginTop: "1rem" }}
        onClick={() => widgetRef.current?.open()}
      >
        <AiOutlineCloudUpload size={40} color="grey" />
        <span>Oder Video-Datei hochladen</span>
      </div>

      {videoUrl && (
        <div className="videoPreview" style={{ marginTop: "1rem" }}>
          <small>Gewählter Link / Upload:</small>
          <br />
          <a href={videoUrl} target="_blank" rel="noreferrer">
            {videoUrl.length > 40 ? videoUrl.slice(0, 40) + "..." : videoUrl}
          </a>
        </div>
      )}

      
    </div>
  );
};

export default UploadVideo;
