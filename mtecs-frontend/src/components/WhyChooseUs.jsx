import { useEffect, useRef, useState } from "react";
import "./WhyChooseUs.css";
import { motion } from "framer-motion";

import {
  FiCpu,
  FiBarChart2,
  FiTrendingUp,
  FiArrowRight,
  FiSettings,
} from "react-icons/fi";

const WhyChooseUs = () => {
  const [active, setActive] = useState("purple");
  const intervalRef = useRef(null);

  const slices = [
    { id: "purple", color: "purple", icon: <FiCpu />, text: "Quality & Innovation" },
    { id: "orange", color: "orange", icon: <FiBarChart2 />, text: "Transparent Workflow" },
    { id: "yellow", color: "yellow", icon: <FiTrendingUp />, text: "Growth Focused" },
    { id: "green", color: "green", icon: <FiArrowRight />, text: "Clear Strategy" },
    { id: "blue", color: "blue", icon: <FiSettings />, text: "Reliable Support" },
  ];

  /* ================= AUTO ROTATE ================= */

  const startAuto = () => {
    if (window.innerWidth <= 768) return;
    if (intervalRef.current) return;

    let i = 0;
    intervalRef.current = setInterval(() => {
      setActive(slices[i].id);
      i = (i + 1) % slices.length;
    }, 2500);
  };

  const stopAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  /* ================= ANIMATION VARIANTS ================= */

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const sliceAnim = {
    hidden: (i) => ({
      opacity: 0,
      scale: 0,
      rotate: -180
    }),
    show: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: i * 72,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 120
      }
    })
  };

  const infoAnim = (isActive) => ({
    opacity: isActive ? 1 : 0,
    y: isActive ? 0 : 40
  });

  /* ================= UI ================= */

  return (
    <section className="whyChoose">
      <motion.div
        className="wheelWrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >

        {/* INFO BLOCKS */}

        <motion.div
          className={`info ${active === "purple" ? "show" : ""}`}
          animate={infoAnim(active === "purple")}
          transition={{ duration: 0.4 }}
        >
          <h4>Quality with Innovation</h4>
          <p>
            We build premium-quality websites and software with clean,
            scalable, and maintainable code. Our goal is modern UI,
            smooth performance, and future-ready solutions.
          </p>
        </motion.div>

        <motion.div
          className={`info ${active === "blue" ? "show" : ""}`}
          animate={infoAnim(active === "blue")}
          transition={{ duration: 0.4 }}
        >
          <h4>Reliable Support</h4>
          <p>
            Delivery is not the end. We provide updates, fixes, and
            maintenance so your platform stays stable and secure.
          </p>
        </motion.div>

        {/* ================= WHEEL ================= */}

        <motion.div
          className="wheel"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="center">Why Choose Us?</div>

          {slices.map((item, index) => (
            <motion.div
              key={item.id}
              className={`slice ${item.color}`}
              custom={index}
              variants={sliceAnim}
              style={{ "--angle": `${index * 72}deg` }}
              onMouseEnter={() => {
                stopAuto();
                setActive(item.id);
              }}
              onMouseLeave={() => {
                startAuto();
              }}
            >
              <span className="wicon">{item.icon}</span>

              <div className="sliceInner">
                <span className="sliceText">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* MORE INFO */}

        <motion.div
          className={`info ${active === "orange" ? "show" : ""}`}
          animate={infoAnim(active === "orange")}
          transition={{ duration: 0.4 }}
        >
          <h4>Transparent Workflow</h4>
          <p>
            Clear timelines, regular updates, honest communication.
            No confusion, no hidden charges.
          </p>
        </motion.div>

        <motion.div
          className={`info ${active === "yellow" ? "show" : ""}`}
          animate={infoAnim(active === "yellow")}
          transition={{ duration: 0.4 }}
        >
          <h4>Growth-Focused Development</h4>
          <p>
            Designed for real results — better speed, strong UX,
            and lead-focused pages.
          </p>
        </motion.div>

        <motion.div
          className={`info ${active === "green" ? "show" : ""}`}
          animate={infoAnim(active === "green")}
          transition={{ duration: 0.4 }}
        >
          <h4>Clear Technical Strategy</h4>
          <p>
            We analyze first, choose right tech, and build scalable
            systems that grow with you.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
