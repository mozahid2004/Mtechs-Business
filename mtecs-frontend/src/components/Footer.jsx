import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col brand">
          <h2>MTECS</h2>
          <p>
            Building scalable digital solutions, modern websites, and
            high-performance applications for businesses worldwide.
          </p>

          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blogs</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services">Website Development</Link></li>
            <li><Link to="/services">Web Applications</Link></li>
            <li><Link to="/services">Maintenance</Link></li>
            <li><Link to="/services">SEO Optimization</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps?q=N.H+06+Nandgaon+Peth+Amravati+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
            >
              N.H 06, Nandgoan Peth, Amravati, Maharashtra
            </a>
          </p>

          <p>
            <FaPhoneAlt />
            <a href="tel:+917057165338">+91 7057165338</a>
          </p>

          <p>
            <FaEnvelope />
            <a href="mailto:mtecs101@gmail.com">mtecs101@gmail.com</a>
          </p>

          <button onClick={scrollTop} className="top-btn">
            <FaArrowUp /> Back to top
          </button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MTECS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
