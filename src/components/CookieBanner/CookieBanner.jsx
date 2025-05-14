import React from "react";
import CookieConsent from "react-cookie-consent";
import { useLocation, useNavigate } from "react-router-dom";

export default function CookieBanner() {
  const location = useLocation();
  const navigate = useNavigate();

  // nu vrem overlay pe pagina de Privacy
  const isPrivacy = location.pathname === "/privacy";

  return (
    <CookieConsent
      location="bottom"
      buttonText="Alle Akzeptieren"
      declineButtonText="Nur Notwendige"
      enableDeclineButton
      cookieName="siteCookieConsent"
      style={{ background: "rgba(0,0,0,0.8)", color: "#fff", fontSize: "14px" }}
      buttonStyle={{ background: "#4066ff", color: "#fff", fontSize: "14px" }}
      declineButtonStyle={{ background: "#666", color: "#fff", fontSize: "14px" }}
      onAccept={() => {
        /* init analytics */
      }}
      onDecline={() => {
        /* doar necesare */
      }}
      cookieSecure
      expires={365}
      // dacă nu suntem pe /privacy, afișăm overlay, altfel nu
      {...(!isPrivacy ? { overlay: true } : {})}
    >
      Diese Website verwendet Cookies, um Ihnen ein optimales Nutzererlebnis zu bieten, Inhalte und Anzeigen zu personalisieren und die Zugriffe auf unsere Website zu analysieren.
      <span
        onClick={() => navigate("/privacy")}
        style={{ textDecoration: "underline", cursor: "pointer", marginLeft: "0.5rem" }}
      >
        Datenschutzerklärung
      </span>
    </CookieConsent>
  );
}
