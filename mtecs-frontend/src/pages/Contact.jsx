import { useState } from "react";
import { submitLead } from "../services/api";
import "./Contact.css";
import FAQ from "../components/Faq.jsx";
import PopupMessage from "../components/PopupMessage.jsx";

const Contact = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitLead(formData); // centralized API call
      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (err) {
      alert("Failed to send message");
    }
  };

  return (
    <>
      <section className="contact-wrapper" aria-label="Contact MTECS">
        <div className="contact-card">

          {/* LEFT FORM */}
          <div className="contact-left">
            <header>
              <h2>
                Get in <span>Touch</span>
              </h2>
              <p>
                Have a question or want to work together? Fill out the form below
                or reach out through our contact details. We’re here to help!
              </p>
            </header>

            <form
              className="contact-form"
              aria-label="Contact Form"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={handleChange}
              />

              {/* ✅ ONLY NEW FIELD */}
              <input
                type="text"
                name="service"
                placeholder="Service Required *"
                required
                value={formData.service}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Your Message *"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit">Send Message</button>

            </form>

            {showPopup && (
              <PopupMessage onClose={() => setShowPopup(false)} />
            )}


          </div>

          {/* RIGHT MAP */}
          <div className="contact-right">
            <iframe
              title="MTECS Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.1441192164011!2d77.82024623237804!3d21.02114984720774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a303aeab8055%3A0xc5d6132e0f389f3e!2zR3VsYW0gU2lyIEFjYWRlbXkg4KSX4KWB4KSy4KS-4KSuIOCkuOCksCDgpIXgpJXgpYXgpKHgpK7gpYA!5e0!3m2!1sen!2sin!4v1769009995093!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="block top-right"></div>
          <div className="block bottom-right"></div>
        </div>
      </section>

      <FAQ />
    </>
  );
};

export default Contact;
