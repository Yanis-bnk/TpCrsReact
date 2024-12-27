import React, { useRef, useState } from "react";
import { COLORS } from "../design-system/color";

const ContactForm = () => {
  const ContainerStyle={
    backgroundColor: COLORS.primary
  }

 
  const [errors, setErrors] = useState({});
  const [isFormSent, setIsFormSent] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);
  const acceptAllConditions = useRef(null);

  const validateForm = () => {
    let isFormValid = true;
    let newErrors = {};

    const nameValue = name.current.value.trim();
    const emailValue = email.current.value.trim();
    const messageValue = message.current.value.trim();
    const acceptAllConditionsValue = acceptAllConditions.current.checked;

    if (!nameValue) {
      newErrors.name = "Le nom est obligatoire.";
      isFormValid = false;
    }

    if (!emailValue) {
      newErrors.email = "L'adresse email est obligatoire.";
      isFormValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
      newErrors.email = "L'adresse email n'est pas valide.";
      isFormValid = false;
    }

    if (!messageValue) {
      newErrors.message = "Le message est obligatoire.";
      isFormValid = false;
    }else if (messageValue.length < 200) {
        newErrors.message = "Le message doit contenir au moins 200 caractères.";
        isFormValid = false;
      }
      

    if (!acceptAllConditionsValue) {
      newErrors.acceptAllConditions = "Vous devez accepter les conditions.";
      isFormValid = false;
    }

    setErrors(newErrors);
    return isFormValid;
  };

  const handleInputChange = () => {
    // Réévaluer la validité du formulaire lors de chaque modification
    validateForm();
  };

  const resetForm = () => {
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
    acceptAllConditions.current.checked = false;
    setErrors({});
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsFormSent(true);
      resetForm();
    } else {
      setIsFormSent(false);
    }
  };

  return (
    <div style={ContainerStyle} className="container">
      {isFormSent && (
        <div className="alert alert-success" role="alert">
          <strong>Succès :</strong> Message envoyé avec succès !
        </div>
      )}

      <form onSubmit={submitForm}>
        <h1>Contact</h1>

        {/* Champ Nom */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="name">
            Nom
          </label>
          <input
            type="text"
            id="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            ref={name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Champ Email */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            Adresse email
          </label>
          <input
            type="text"
            id="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            ref={email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        {/* Champ Message */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            rows="4"
            ref={message}
            onChange={handleInputChange}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        {/* Case à cocher */}
        <div className="form-check mb-4">
          <input
            className={`form-check-input ${
              errors.acceptAllConditions ? "is-invalid" : ""
            }`}
            type="checkbox"
            id="acceptAllConditions"
            ref={acceptAllConditions}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="acceptAllConditions">
            J'accepte toutes les conditions
          </label>
          {errors.acceptAllConditions && (
            <div className="invalid-feedback">
              {errors.acceptAllConditions}
            </div>
          )}
        </div>

        {/* Bouton Envoyer */}
        <button
          disabled={Object.keys(errors).length > 0}
          type="submit"
          className="btn btn-primary w-100 mb-4"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
