// UploadPdf.jsx
import { useEffect, useRef } from "react";
import { Button } from "@mantine/core";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function UploadPdf({ value, onChange }) {
  const cloud = useRef();
  const widget = useRef();

  useEffect(() => {
    cloud.current = window.cloudinary;
    widget.current = cloud.current.createUploadWidget(
      {
        cloudName: "do3wzvgto",
        uploadPreset: "r2ocxngt",
        maxFiles: 1,
        sources: ["local", "url"],
        resourceType: "raw",        // <-- PDF
        clientAllowedFormats: ["pdf"],
      },
      (err, res) => {
        if (res.event === "success") onChange(res.info.secure_url);
      }
    );
  }, []);

  return (
    <div onClick={() => widget.current?.open()} style={{cursor:"pointer"}}>
      {value ? (
        <Button variant="light">PDF hochgeladen ✅ (Klick zum Ändern)</Button>
      ) : (
        <Button leftIcon={<AiOutlineCloudUpload size={18}/>}>
          Energieausweis hochladen
        </Button>
      )}
    </div>
  );
}
