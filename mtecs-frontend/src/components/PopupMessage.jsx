import { useEffect, useState } from "react";
import "./PopupMessage.css";

export default function PopupMessage({ onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setVisible(true);

    // Auto close after 3 seconds (optional)
    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), 2000); // wait for exit animation
  };

  return (
    <div className={`popup-overlay ${visible ? "show" : ""}`}>
      <div className={`popup success ${visible ? "animate-in" : "animate-out"}`}>
        <div className="icon">✔</div>
        <h2>Success!</h2>
        <p>Our team will contact you on WhatsApp using the number you provided in the form.</p>
        <button onClick={handleClose}>OK</button>
      </div>
    </div>
  );
}
