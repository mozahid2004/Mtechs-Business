import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./Career.css";
import Contact from "./Contact";

export default function Career() {
  return (
    <>
      <section className="career-section" aria-label="Career Opportunities at MTECS">
        <div className="career-container">

          <header className="career-policy">
            <h2>About Our Policies</h2>
            <p>
              At MTECS, we prioritize fairness, transparency, and professional growth.
              Every team member is encouraged to contribute creatively, share ideas,
              and maintain integrity in all interactions. Our policies foster
              collaboration and ensure a safe, inclusive, and thriving work environment.
            </p>
          </header>

          <div className="career-left">
            <h2>Join Our Team</h2>
            <p>
              We are looking for passionate and talented individuals to join our team.
              Share your resume and connect with us via WhatsApp or email.
              Together, let's build innovative digital solutions.
            </p>

            <div className="career-contact">
              <a
                href="https://wa.me/917057165338?text=Hello%20MTECS%2C%20I%20want%20to%20talk%20to%20HR%20regarding%20career%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn whatsapp"
                title="Chat with our HR team on WhatsApp"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>


              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mtecs101@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn email"
              >
                <FaEnvelope /> Send Email
              </a>


            </div>
          </div>

        </div>
      </section>

      <Contact />
    </>
  );
}
