import React, { useState } from "react";
import "./ContactForm.css";
import { sendKontaktForm } from "../../utils/api"; // ajustează calea dacă e nevoie
import { toast } from "react-toastify";

const ContactForm = () => {
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    nachricht: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (values) => {
    const newErrors = {};

    if (!values.vorname.trim()) {
      newErrors.vorname = "Pflichtfeld";
    }
    if (!values.nachname.trim()) {
      newErrors.nachname = "Pflichtfeld";
    }
    if (!values.email.trim()) {
      newErrors.email = "Pflichtfeld";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = "Ungültige E-Mail";
    }
    // telefon opțional, nu validăm strict
    if (!values.nachricht.trim()) {
      newErrors.nachricht = "Pflichtfeld";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // live validation
    const updated = { ...form, [name]: value };
    const newErrors = validate(updated);
    setErrors(newErrors);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({
      vorname: true,
      nachname: true,
      email: true,
      telefon: true,
      nachricht: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Bitte füllen Sie alle Pflichtfelder korrekt aus.");
      return;
    }

    try {
      setIsSubmitting(true);
      await sendKontaktForm(form);
      setForm({
        vorname: "",
        nachname: "",
        email: "",
        telefon: "",
        nachricht: "",
      });
      setErrors({});
      setTouched({});
    } catch (err) {
      console.error(err);
      // toast-ul e deja în util, aici nu mai trebuie
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClasses = (name) => {
    const hasError = touched[name] && errors[name];
    const isValid = touched[name] && !errors[name] && form[name].trim() !== "";
    return [
      "kf-input",
      hasError ? "kf-input-error" : "",
      isValid ? "kf-input-success" : "",
    ]
      .join(" ")
      .trim();
  };

  const renderStatusIcon = (name, isTextarea = false) => {
    const hasError = touched[name] && errors[name];
    const isValid =
      touched[name] && !errors[name] && form[name].trim() !== "";

    if (!hasError && !isValid) return null;

    return (
      <span
        className={`kf-status-icon ${
          hasError ? "kf-status-error" : "kf-status-ok"
        } ${isTextarea ? "kf-status-textarea" : ""}`}
      >
        {hasError ? "!" : "✓"}
      </span>
    );
  };

  return (
    <section id="contact-us" className="kf-wrapper">
      <div className="kf-inner innerWidth">
        <h2 className="kf-heading">Kontakt</h2>

        <form className="kf-form" onSubmit={handleSubmit} noValidate>
          {/* row 1 */}
          <div className="kf-row">
            <div className="kf-field">
              <input
                type="text"
                name="vorname"
                placeholder="Vorname"
                value={form.vorname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClasses("vorname")}
              />
              {renderStatusIcon("vorname")}
            </div>

            <div className="kf-field">
              <input
                type="text"
                name="nachname"
                placeholder="Nachname"
                value={form.nachname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClasses("nachname")}
              />
              {renderStatusIcon("nachname")}
            </div>
          </div>

          {/* row 2 */}
          <div className="kf-row">
            <div className="kf-field">
              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClasses("email")}
              />
              {renderStatusIcon("email")}
            </div>

            <div className="kf-field">
              <input
                type="tel"
                name="telefon"
                placeholder="Telefonnummer"
                value={form.telefon}
                onChange={handleChange}
                onBlur={handleBlur}
                className="kf-input"
              />
              {/* Telefonul e opțional – nu afișăm icon valid/invalid */}
            </div>
          </div>

          {/* Nachricht */}
          <div className="kf-row kf-row-full">
            <div className="kf-field">
              <textarea
                name="nachricht"
                placeholder="Nachricht"
                value={form.nachricht}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                className={getInputClasses("nachricht")}
              />
              {renderStatusIcon("nachricht", true)}
            </div>
          </div>

          {/* Button */}
          <div className="kf-button-wrap">
            <button
              type="submit"
              className="kf-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SENDEN..." : "ABSENDEN"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
