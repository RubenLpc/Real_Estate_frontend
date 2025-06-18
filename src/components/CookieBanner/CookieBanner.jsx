import React from "react";
import CookieConsent from "react-cookie-consent";
import { useLocation, useNavigate } from "react-router-dom";

export default function CookieBanner() {
  const location = useLocation();
  const navigate = useNavigate();
  const isPrivacy = location.pathname === "/privacy";

  // Render the CookieConsent component to display a cookie banner
  return (
    <CookieConsent
      location="bottom" // Position the banner at the bottom of the page
      buttonText="Alle Akzeptieren" // Text for the accept button
      declineButtonText="Nur Notwendige" // Text for the decline button
      enableDeclineButton // Enable the decline button
      cookieName="siteCookieConsent" // Name of the cookie to store consent
      style={{ background: "rgba(0,0,0,0.8)", color: "#fff", fontSize: "14px" }} // Styling for the banner
      buttonStyle={{ background: "#4066ff", color: "#fff", fontSize: "14px" }} // Styling for the accept button
      declineButtonStyle={{ background: "#666", color: "#fff", fontSize: "14px" }} // Styling for the decline button
      onAccept={() => {
        // Callback for when the user accepts cookies
        // Initialize analytics or other services
      }}
      onDecline={() => {
        // Callback for when the user declines cookies
        // Use only strictly necessary cookies
      }}
      cookieSecure // Ensure the cookie is set securely
      expires={365} // Set the cookie expiration to 365 days
      {...(!isPrivacy ? { overlay: true } : {})} // Add an overlay if not on the privacy page
    >
      {/* Content of the cookie banner */}
      Hinweis zur Nutzung von Cookies:<br />
      Auf unserer Internetseite werden Cookies verwendet. Cookies sind kleine Textdateien, die auf dem Gerät platziert werden, und einen Benutzer bei erneuter Nutzung der Seite wiedererkennen. Wir verwenden Cookies, um unsere Angebote an Ihre Bedürfnisse anzupassen, Ihnen die Nutzung unserer Services zu erleichtern, und zu analysieren, wie unsere Dienste arbeiten und verwendet werden. Sie können in Ihrem Browser Einstellungen vornehmen, um die Verwendung von Cookies zu steuern, zum Beispiel dass vor der Verwendung eines Cookies Ihre Einwilligung eingeholt werden muss, oder Cookies generell blockiert werden. Unsere Services funktionieren aber nur dann ordnungsgemäß, wenn die Verwendung von Cookies nicht deaktiviert wurde.
      
      {/* Link to the privacy policy 
      <span
        onClick={() => navigate("/privacy")} // Navigate to the privacy page on click
        style={{ textDecoration: "underline", cursor: "pointer", marginLeft: "0.5rem" }} // Styling for the link
      >
        Datenschutzerklärung
      </span>*/}
    </CookieConsent>
  );
}
