import React from "react";
import { FaBullseye, FaCogs } from "react-icons/fa";
import "./MissionVision.css";
import MissionImg from "../assets/BgImages/missionBanner.webp"

function MissionVision() {
  return (
    <section className="mv-section">

      {/* TOP SECTION */}
      <div className="mv-top">

        {/* LEFT */}
        <div className="mv-left">
          <h2>Our Mission & Vision</h2>
          <p>
            We define our future by clear goals, strong purpose, deep expertise,
            and a commitment to delivering high-quality digital solutions.
          </p>
        </div>

        {/* RIGHT */}
        <div className="mv-right">

          <article className="mv-card">
            <span className="mv-icon">
              <FaBullseye />
            </span>
            <h3 className="mv-card-header">Built for Your Growth</h3>
            <p>
              We create fast, responsive, and SEO-friendly websites designed to
              attract visitors, improve user experience, and convert traffic into
              real customers.
            </p>
          </article>

          <article className="mv-card">
            <span className="mv-icon">
              <FaCogs />
            </span>
            <h3 className="mv-card-header">Reliable Development</h3>
            <p>
              From design to deployment, we deliver secure, scalable, and
              performance-optimized web solutions tailored to your business goals.
            </p>
          </article>

        </div>


      </div>

      {/* IMAGE SECTION */}
      <div className="mv-image">
        <img src={MissionImg} alt="MTECS team collaborating on IT projects" />
        <span className="overlay left" />
        <span className="overlay right" />
      </div>

    </section>
  );
}

export default MissionVision;
