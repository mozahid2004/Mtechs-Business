import React, { useRef } from "react";
import "./Process.css";
import { FaChartPie, FaCode, FaRocket, FaLightbulb } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { id: "01", title: "Analysis", desc: "Requirement study & planning", icon: <FaChartPie /> },
  { id: "02", title: "Development", desc: "Coding & architecture", icon: <FaCode /> },
  { id: "03", title: "Deploy", desc: "Testing & launch", icon: <FaRocket /> },
  { id: "04", title: "Growth", desc: "Optimization & scale", icon: <FaLightbulb /> }
];

export default function Process() {

  const ref = useRef(null);

  /* scroll progress */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center center"]
  });

  /* animations tied to scroll */
  const titleY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const circleY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const circleOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="process-section" ref={ref}>

      {/* TITLE */}
      <motion.h2
        className="process-title"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        Our Process
      </motion.h2>

      <div className="timeline">

        {/* CURVE */}
        <svg className="timeline-line" viewBox="0 0 1200 300">

          <defs>
            <linearGradient id="curveGradient">
              <stop offset="0%" stopColor="#22c1ff" />
              <stop offset="50%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#b14bff" />
            </linearGradient>
          </defs>

          <motion.path
            d="M110 150 C250 50 250 250 400 150 S650 50 800 150 S1050 250 1100 150"
            stroke="url(#curveGradient)"
            strokeWidth="5"
            fill="none"
            style={{ pathLength }}
          />
        </svg>

        {/* STEPS */}
        {steps.map((step, i) => {

          /* stagger range per item */
          const start = i * 0.18;
          const end = start + 0.25;

          const y = useTransform(scrollYProgress, [start, end], [100, 0]);
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);

          return (
            <motion.div
              className="circle"
              key={i}
              style={{ y, opacity, scale }}
              whileHover={{ scale: 1.08 }}
            >
              <div className="icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>

              <span className="badge">{step.id}</span>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}