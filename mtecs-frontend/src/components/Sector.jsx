import "./Sector.css";

// ✅ React Icons
import {
  FiHeart,
  FiBookOpen,
  FiCreditCard,
  FiBriefcase,
  FiTrendingUp,
  FiHome,
  FiArrowRight
} from "react-icons/fi";

const sectors = [
  {
    title: "Healthcare",
    desc: "We develop healthcare websites, appointment booking systems, patient dashboards, and secure admin panels for hospitals, clinics, and diagnostic centers to improve service and operations.",
    icon: <FiHeart />,
  },
  {
    title: "Education",
    desc: "Professional institute websites, admission enquiry systems, student portals, result panels, notice boards, and digital solutions for schools, colleges, and coaching institutes in Amravati.",
    icon: <FiBookOpen />,
  },
  {
    title: "Banking & Finance",
    desc: "Secure dashboards, customer management portals, reporting systems, and finance-based web solutions designed with performance, privacy, and reliability in mind.",
    icon: <FiCreditCard />,
  },
  {
    title: "Organizations & Offices",
    desc: "We build internal dashboards, ERP-style panels, inventory management, reporting tools, and workflow solutions that help organizations manage work efficiently.",
    icon: <FiBriefcase />,
  },
  {
    title: "Business & Startups",
    desc: "From business websites to scalable startup products, we create lead generation websites, landing pages, CRM tools, and digital platforms that support long-term growth.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Real Estate",
    desc: "We create property listing websites, lead capture pages, enquiry systems, map integration, and booking solutions to help real estate businesses generate quality leads faster.",
    icon: <FiHome />,
  },
];

export default function Sector() {
  return (
    <section className="sector-section">
      <div className="sector-container">
        {/* Heading */}
        <div className="sector-heading">
          <h2>
            Industries <span>We Work In</span>
          </h2>
          <p>
            W e deliver
            modern, scalable, and high-performing solutions for multiple
            industries. Our focus is simple—premium quality, fast delivery, and
            real business results.
          </p>
        </div>

        {/* Grid */}
        <div className="sector-grid">
          {sectors.map((item, index) => (
            <div className="sector-card" key={index}>
              <div className="sector-top">
                <div className="sector-icon">{item.icon}</div>
              </div>

              <h3>{item.title}</h3>

              <div className="sector-overlay">
                <p>{item.desc}</p>
              </div>

              {/* Arrow icon */}
              <div className="sector-arrow">
                <FiArrowRight />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Strip */}
        <div className="sector-strip">
          <div className="strip-box">
            <h4>Custom Solutions</h4>
            <p>
              Tailor-made websites, software, and applications designed for your
              industry requirements.
            </p>
          </div>
          <div className="strip-box">
            <h4>Fast Delivery</h4>
            <p>
              Clean development, modern UI, and on-time project delivery with a
              professional approach.
            </p>
          </div>
          <div className="strip-box">
            <h4>Full Support</h4>
            <p>
              Long-term support, updates, and maintenance to keep your digital
              system running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
