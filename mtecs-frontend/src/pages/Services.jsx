import { useState, useEffect } from "react";
import "./Services.css";
import { FiArrowRight, FiMonitor, FiCode, FiSmartphone, FiPenTool } from "react-icons/fi";
import Testimonials from "../components/Testimonials";
import Sector from "../components/Sector";

import WebsiteImg from "../assets/BgImages/WebsiteImage.webp";
import SoftwareImg from "../assets/BgImages/SoftwareImge.webp";
import AppImg from "../assets/BgImages/AppImges.webp";
import Consultancy from "../assets/BgImages/ConsultancyIMg.webp";

const services = [
  {
    title: "Website Development",
    desc: "We design and develop fast, secure, and mobile-friendly websites for businesses, startups, schools, colleges, and coaching institutes.",
    icon: <FiMonitor />,
    bg: WebsiteImg,
  },
  {
    title: "Software Development",
    desc: "We build custom software solutions to simplify workflow, manage data, and improve productivity.",
    icon: <FiCode />,
    bg: SoftwareImg,
  },
  {
    title: "App Development",
    desc: "Launch powerful Android and web applications with clean UI and smooth performance.",
    icon: <FiSmartphone />,
    bg: AppImg,
  },
  {
    title: "Consultancy",
    desc: "Professional designs that strengthen your brand identity across marketing materials.",
    icon: <FiPenTool />,
    bg: Consultancy,
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(false);

  /* PRELOAD IMAGES */
  useEffect(() => {
    services.forEach(service => {
      const img = new Image();
      img.src = service.bg;
    });
  }, []);

  const handleHover = (i) => {
    setActive(i);
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50);
  };

  return (
    <>
      <section className="services">
        <div className="service-container">

          {/* TOP */}
          <div className="upperHeadding">
            <div className="sheading">
              <small className="tag">OUR SERVICE</small>
              <h2>
                What <span>Services</span><br /> We’re Offering
              </h2>
            </div>

            <p>
              We deliver complete digital solutions for businesses, startups,
              schools and organizations with focus on performance and scalability.
            </p>
          </div>

          {/* BOTTOM */}
          <div className="services-box">

            {/* LEFT LIST */}
            <div className="services-left">
              <ul className="services-Name">
                {services.map((service, i) => (
                  <li
                    key={i}
                    className={active === i ? "active" : ""}
                    onPointerEnter={() => handleHover(i)}
                  >
                    <span className="service-title">{service.title}</span>
                    <FiArrowRight className="serviceIcon" />
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT CARD */}
            <div className="services-right">
              <div
                key={active}
                className={`preview-card ${animate ? "fade" : ""}`}
                style={{ backgroundImage: `url(${services[active].bg})` }}
              >
                <div className="icon">{services[active].icon}</div>
                <h3>{services[active].title}</h3>
                <p>{services[active].desc}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Sector />
      <Testimonials />
    </>
  );
}