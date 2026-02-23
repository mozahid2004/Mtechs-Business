import "./Home.css";
import BackegroundVideo from "../assets/BackgroundVideo.mp4";
import WhyChooseUs from "../components/WhyChooseUs";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
// import WebsiteImg from "../assets/BgImages/websiteImg.png";
// import GraphicImg from "../assets/BgImages/GraphicImg.jpg";
// import DigitalImg from "../assets/BgImages/DitalImg.png";
import { motion } from "framer-motion";
import WhatWeDo from "../components/WhatWeDo";
import OurPortfolio from "../components/ourPortfolio";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={BackegroundVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Transform Your Ideas into Digital Excellence</h1>

          <h5
            className="hero-how"
            onClick={() => navigate("/services")}
            style={{ cursor: "pointer" }}
          >
            How?
          </h5>

          <p>
            MTECS is a trusted Web Development and IT Company. We build fast, secure, and scalable websites, software,
            and digital solutions for small businesses, startups, schools,
            colleges, and coaching institutes.
          </p>

          <div className="hero-actions">
            {/* Call Button */}
            <a
              href="tel:+917057165338" className="btn-primary">
              <FiPhone />
              Call Now
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/917057165338?text=Hello%20MTECS%2C%20I%20want%20a%20website%20%2F%20software%20development%20service%20in%20Amravati.%20Please%20share%20details."
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <FaWhatsapp />
              Get Free Consultation
            </a>
          </div>
        </motion.div>
      </section>


      <WhatWeDo />

      <WhyChooseUs />
      <section className="scale-up-section">
        <div className="scale-up-container">
          {/* Right-side header/context */}
          <div className="scale-up-header">
            <h2>Scale Up <br /> with MTECS</h2>
            <p>
              Boost your business with MTECS solutions — modern web, seamless UX, and scalable architecture.
            </p>
          </div>

          {/* Left-side strips */}
          <div className="left-scale">
            <div className="scale-up-strips">
              {/* Strip 1 */}
              <div className="scale-strip">
                <img src="https://picsum.photos/1600/400?random=31" alt="Innovation" />
                <div className="strip-overlay">
                  <h3>"Innovate to Lead"</h3>
                  <p>
                    MTECS provides cutting-edge solutions to modernize your workflow and stay ahead of the competition. Our scalable web platforms ensure growth and efficiency.
                  </p>
                </div>
              </div>

              {/* Strip 2 */}
              <div className="scale-strip">
                <img src="https://picsum.photos/1600/400?random=32" alt="Digital Solutions" />
                <div className="strip-overlay">
                  <h3>"Digital First Approach"</h3>
                  <p>
                    Leverage technology to automate and optimize your business processes. Our custom solutions improve user engagement and drive conversions.
                  </p>
                </div>
              </div>

              {/* Strip 3 */}
              <div className="scale-strip">
                <img src="https://picsum.photos/1600/400?random=33" alt="Business Growth" />
                <div className="strip-overlay">
                  <h3>"Scale with Confidence"</h3>
                  <p>
                    From design to deployment, MTECS ensures your digital presence is robust, responsive, and ready for future growth. Experience seamless UX with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurPortfolio />
    </>
  );
};

export default Home;
