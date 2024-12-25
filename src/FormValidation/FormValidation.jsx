import { useRef, useState } from "react";

export default function FormValidation() {
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const acceptAllConditions = useRef();
  const [errors, setErrors] = useState([]);
  const [isFormSent, setIsFormSent] = useState(false);

  const validateForm = () => {
    const nameValue = name.current.value.trim();
    const emailValue = email.current.value.trim();
    const messageValue = message.current.value.trim();
    const acceptAllConditionsValue = acceptAllConditions.current.checked;

    const newErrors = [];

    if (nameValue === "") {
      newErrors.push({ field: "name", message: "Le nom est vide." });
    }

    if (emailValue === "") {
      newErrors.push({ field: "email", message: "L'adresse email est vide." });
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
      newErrors.push({ field: "email", message: "L'adresse email n'est pas valide." });
    }

    if (messageValue === "") {
      newErrors.push({ field: "message", message: "Le message est vide." });
    }

    if (!acceptAllConditionsValue) {
      newErrors.push({ field: "acceptAllConditions", message: "Vous devez accepter toutes les conditions." });
    }

    setErrors(newErrors);

    return newErrors.length === 0; // Retourne true si pas d'erreurs
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

  const resetForm = () => {
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
    acceptAllConditions.current.checked = false;
  };

  const displayErrors = () => {
    return errors.map((error, index) => (
      <li key={index}>
        <strong>{error.field} :</strong> {error.message}
      </li>
    ));
  };

  return (
    <div className="container">
      {isFormSent && (
        <div className="alert alert-success" role="alert">
          <strong>Succès :</strong> Message envoyé avec succès !
        </div>
      )}

      <form onSubmit={submitForm}>
        {errors.length > 0 && (
          <div className="alert alert-danger" role="alert">
            <strong>Erreurs :</strong>
            <ul>{displayErrors()}</ul>
          </div>
        )}

        <h1>Contact</h1>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="name">
            Nom
          </label>
          <input type="text" id="name" className="form-control" ref={name} />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            Adresse email
          </label>
          <input type="text" id="email" className="form-control" ref={email} />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" rows="4" ref={message}></textarea>
        </div>

        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="acceptAllConditions"
            ref={acceptAllConditions}
          />
          <label className="form-check-label" htmlFor="acceptAllConditions">
            J'accepte toutes les conditions
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-4">
          Envoyer
        </button>
      </form>
    </div>
  );
}
