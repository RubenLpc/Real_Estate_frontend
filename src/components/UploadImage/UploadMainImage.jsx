// UploadMainImage.jsx
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button, Group } from "@mantine/core";
import "./UploadImage.css";

const UploadMainImage = ({ mainImage, setMainImage, nextStep, prevStep }) => {
  const [imageURL, setImageURL] = useState(mainImage);   // inițială din props
  const cloudinaryRef = useRef();
  const widgetRef     = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dxisyk5sy",
        uploadPreset: "wpfl2lxq",
        maxFiles: 1,
      },
      (err, result) => {
        if (result.event === "success") {
          setImageURL(result.info.secure_url);   // preview intern
          setMainImage(result.info.secure_url);  // trimite în formular
        }
      }
    );
  }, [setMainImage]);

  return (
    <div className="flexColCenter uploadWrapper">
      {!imageURL ? (
        <div className="uploadZone" onClick={() => widgetRef.current?.open()}>
          <AiOutlineCloudUpload size={50} color="grey" />
          <span>Bild hochladen</span>
        </div>
      ) : (
        <div className="uploadedImage" onClick={() => widgetRef.current?.open()}>
          <img src={imageURL} alt="Main" />
        </div>
      )}

      
    </div>
  );
};

export default UploadMainImage;
