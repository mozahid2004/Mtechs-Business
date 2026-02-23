import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./FAQ.css";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide complete web development services including UI/UX design, frontend and backend development, deployment, and maintenance."
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on scope and requirements. Small websites usually take 1–2 weeks, while larger projects may take 4–8 weeks."
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Yes, we provide post-delivery support and maintenance based on the selected plan."
  },
  {
    question: "Is the website fully responsive?",
    answer:
      "Absolutely. All our websites are optimized for mobile, tablet, and desktop devices."
  },
  {
    question: "How can I contact your team?",
    answer:
      "You can contact us through the contact form, email, or phone number listed on our website."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Adjust max-height dynamically for smooth animation
    answerRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.style.maxHeight =
          activeIndex === idx ? ref.scrollHeight + "px" : "0px";
      }
    });
  }, [activeIndex]);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before getting started</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
              role="button"
              tabIndex={0}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
              onKeyDown={(e) => e.key === "Enter" && toggleFAQ(index)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <span className="faq-icon">
                  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>

              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                ref={(el) => (answerRefs.current[index] = el)}
                aria-hidden={activeIndex !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;