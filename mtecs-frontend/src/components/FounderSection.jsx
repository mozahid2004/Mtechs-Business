import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import "./FounderSection.css";

import GulamAnsari from "../assets/Images/gulam-ansari.png";
import MozahidIzhar from "../assets/Images/mozahid-izhar.jpg";

const FounderSection = () => {
  return (
    <section className="founder-section" aria-label="Company Leadership and Vision">
      <div className="founder-wrapper">

        <header className="founder-content">
          <h2>
            Leadership <span>& Vision</span>
          </h2>

          <p className="founder-message">
            Our company thrives on innovation, discipline, and practical solutions. 
            We build products that deliver measurable impact and long-term value.
          </p>

          <blockquote className="founder-quote">
            <FaQuoteLeft aria-hidden="true" />
            <p>
              Success is not about titles. It’s about responsibility, clarity, 
              and the courage to execute.
            </p>
            <FaQuoteRight aria-hidden="true" />
          </blockquote>
        </header>

        <div className="founder-cards">

          <article className="founder-card ceo">
            <img 
              src={GulamAnsari} 
              alt="Gulam Ansari, Founder and CEO of MTECS" 
              loading="lazy" 
            />
            <h3>Gulam Ansari</h3>
            <span>Founder & CEO</span>
            <p>
              Visionary leader driving strategy, innovation, and sustainable growth.
            </p>
            <div className="socials">
              <a href="#" title="LinkedIn profile of Gulam Ansari"><FaLinkedin /></a>
              <a href="#" title="Twitter profile of Gulam Ansari"><FaTwitter /></a>
              <a href="#" title="Instagram profile of Gulam Ansari"><FaInstagram /></a>
            </div>
          </article>

          <article className="founder-card cofounder">
            <img 
              src={MozahidIzhar} 
              alt="Mozahid Izhar, Co-Founder and Developer of MTECS" 
              loading="lazy" 
            />
            <h3>Mozahid Izhar</h3>
            <span>Co-Founder & Developer</span>
            <p>
              Full-stack developer delivering scalable, clean, and high-performance web solutions.
            </p>
            <div className="socials">
              <a href="#" title="LinkedIn profile of Mozahid Izhar"><FaLinkedin /></a>
              <a href="#" title="GitHub profile of Mozahid Izhar"><FaGithub /></a>
              <a href="#" title="Instagram profile of Mozahid Izhar"><FaInstagram /></a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
