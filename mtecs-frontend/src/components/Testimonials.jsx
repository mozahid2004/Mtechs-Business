import React from "react";
import "./Testimonials.css";
import { FaCheckCircle, FaClock, FaShieldAlt, FaRocket } from "react-icons/fa";

const trustPoints = [
  {
    title: "Fast Delivery",
    desc: "On-time project delivery with clean code, smooth UI, and professional execution.",
    icon: <FaClock />,
  },
  {
    title: "Modern UI/UX",
    desc: "Premium design that looks modern, feels smooth, and builds trust for your brand.",
    icon: <FaRocket />,
  },
  {
    title: "Secure & Reliable",
    desc: "Best practices for performance, security, and long-term stability of your website or software.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Support & Maintenance",
    desc: "Post-launch support, updates, and maintenance to keep everything running perfectly.",
    icon: <FaCheckCircle />,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Why Clients <span>Trust MTECS</span></h2>
      <p>
        MTECS is a trusted Web Development and IT Company in Amravati, focused on
        delivering quality work, strong performance, and reliable long-term
        support—so your business grows without stress.
      </p>

      <div className="testimonial-container">
        {/* LEFT SIDE */}
        <div className="msgForCustumer">
          <h3>Our Promise</h3>

          <p>
            We don’t just build websites—we create complete digital solutions
            that look premium, load fast, and help businesses, startups, schools,
            colleges, and coaching institutes convert visitors into real leads.
          </p>

          <div className="promise-list">
            <div className="promise-item">
              <span className="dot"></span>
              Clean, scalable & maintainable code
            </div>
            <div className="promise-item">
              <span className="dot"></span>
              100% mobile responsive & modern design
            </div>
            <div className="promise-item">
              <span className="dot"></span>
              SEO-friendly structure for better Google ranking
            </div>
            <div className="promise-item">
              <span className="dot"></span>
              On-time delivery with full support & guidance
            </div>
          </div>

          <a href="https://wa.me/917057165338?text=Hello%20MTECS%2C%20I%20want%20a%20website%20%2F%20software%20development%20service%20in%20Amravati.%20Please%20share%20details."
            target="_blank"
            rel="noreferrer" className="testimonial-btn">Get a Free Consultation</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="testimonial-marquee">
          <div className="testimonial-track">
            {[...trustPoints, ...trustPoints].map((item, index) => (
              <div className="testimonial-card trust-card" key={index}>
                <div className="trust-top">
                  <div className="trust-icon">{item.icon}</div>
                  <h4 className="trust-title">{item.title}</h4>
                </div>
                <p className="trust-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
