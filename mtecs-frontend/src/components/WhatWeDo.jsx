import React from "react";
import "./WhatWeDo.css";

import WebsiteImg from "../assets/BgImages/WebsiteImage.webp";
import SoftwareImg from "../assets/BgImages/SoftwareImge.webp";
import AppImg from "../assets/BgImages/AppImges.webp";
import Consultancy from "../assets/BgImages/ConsultancyIMg.webp";
import NewTech from "../assets/BgImages/NewTech.webp";
const services = [
  {
    id: 1,
    title: "Latest Technologies",
    desc: "We use modern tools, frameworks, and latest technologies to build fast, secure, and scalable digital solutions for businesses.",
    img: NewTech,
  },
  {
    id: 2,
    title: "Web Development",
    desc: "We design and develop responsive, fast, and user-friendly websites that help your business grow online and attract more customers.",
    img: WebsiteImg,
  },
  {
    id: 3,
    title: "Software Development",
    desc: "We create custom software solutions to automate work, manage data easily, and improve productivity for companies and organizations.",
    img: SoftwareImg,
  },
  {
    id: 4,
    title: "App Development",
    desc: "We build powerful mobile and web applications with clean design, smooth performance, and real business value.",
    img: AppImg,
  },
  {
    id: 5,
    title: "Consultancy",
    desc: "We provide expert IT and digital consulting to guide your business with the right technology, strategy, and growth solutions.",
    img: Consultancy,
  },
];

function WhatWeDo() {
  return (
    <section className="wwd-section-container">

      {/* HEADING */}
      <div className="wheadding">
        <h2>What We Do ?</h2>
        <span>
          We provide complete IT services for businesses and organizations —
          website development, branding, and digital marketing to help you grow faster.
        </span>
      </div>

      <div className="wwd-section">

        {/* LEFT BIG IMAGE */}
        <div className="wwd-left">
          <div className="wwd-card big">
            <img
              src={services[0].img}
              alt={services[0].title}
              loading="eager"
              onLoad={(e) => e.target.classList.add("loaded")}
            />
            <div className="wwd-overlay">
              <h3>{services[0].title}</h3>
              <p>{services[0].desc}</p>
            </div>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="wwd-right">
          <div className="wwd-grid">
            {services.slice(1, 5).map((service) => (
              <div key={service.id} className="wwd-card small">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  onLoad={(e) => e.target.classList.add("loaded")}
                />
                <div className="wwd-overlay">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhatWeDo;