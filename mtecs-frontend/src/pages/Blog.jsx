import { useState } from "react";
import "./Blog.css";

export default function BlogSection() {

  const blogs = [
    {
      id: 1,
      title: "Web Development for Small Businesses in Amravati",
      niche: "Business",
      date: "03 Feb 2026",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      excerpt:
        "Small businesses in Amravati can grow faster with a modern website, local SEO, and WhatsApp-based leads.",
      content: [
        { type: "heading", level: 2, value: "Introduction" },
        {
          type: "paragraph",
          value:
            "In today’s digital-first world, customers rarely make a purchase without researching online. Whether someone is searching for a local service, shop, or consultant, their first step is usually Google. For small businesses in Amravati, this creates a powerful opportunity. A professional website is no longer optional—it is a core business tool that acts as your digital showroom 24/7."
        },
        {
          type: "paragraph",
          value:
            "A well-designed website builds trust, increases visibility, generates leads, and helps smaller brands compete with larger companies that may have bigger budgets but weaker local presence."
        },

        { type: "heading", level: 3, value: "Why a Website Matters for Local Businesses" },
        {
          type: "paragraph",
          value:
            "Many business owners still rely only on word-of-mouth or social media. While those channels help, they are not enough anymore. A website serves as your official identity online and signals credibility and professionalism."
        },
        {
          type: "list",
          value: [
            "Customers can verify your business legitimacy",
            "Your business is visible even when closed",
            "You appear in Google search results",
            "Customers can instantly call or message you",
            "You can showcase services, pricing, and testimonials"
          ]
        },

        { type: "heading", level: 3, value: "Essential Features Every Business Website Should Have" },
        {
          type: "list",
          value: [
            "Fast loading speed under 3 seconds",
            "Mobile-friendly design",
            "Clear call-to-action buttons",
            "Visible contact details",
            "Well-explained services",
            "Customer reviews section",
            "Google map integration"
          ]
        },

        { type: "heading", level: 3, value: "Best Types of Websites for Small Businesses" },
        {
          type: "list",
          value: [
            "Landing page website for quick leads",
            "Portfolio website for service providers",
            "E-commerce website for products",
            "Booking website for clinics and consultants"
          ]
        },

        {
          type: "paragraph",
          value:
            "For small businesses in Amravati, investing in a professional website is one of the smartest growth decisions. A clean and fast website works as your digital employee—attracting customers and building trust automatically."
        }
      ]
    },

    {
      id: 2,
      title: "Website for Schools, Colleges & Coaching Centers",
      niche: "Education",
      date: "03 Feb 2026",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      excerpt:
        "A modern education website helps in admissions, trust-building, and showcasing results to parents and students.",
      content: [
        { type: "heading", level: 2, value: "Introduction" },
        {
          type: "paragraph",
          value:
            "Education institutions operate in a competitive environment where parents and students carefully research before choosing a school or coaching center. They check results, faculty experience, facilities, and reviews. If your institute lacks a professional website, you may lose trust before the conversation even begins."
        },
        {
          type: "paragraph",
          value:
            "A well-structured website acts as your digital prospectus, information desk, and counselor combined into one powerful platform."
        },

        { type: "heading", level: 3, value: "What Parents and Students Expect Online" },
        {
          type: "list",
          value: [
            "Course and class details",
            "Faculty qualifications",
            "Results and success stories",
            "Timings and contact information",
            "Campus photos",
            "Achievements and recognitions"
          ]
        },

        { type: "heading", level: 3, value: "Must-Have Features for Education Websites" },
        {
          type: "list",
          value: [
            "Online admission enquiry form",
            "WhatsApp contact button",
            "Notice board section",
            "Downloadable resources",
            "Event gallery",
            "Map and call button"
          ]
        },

        {
          type: "paragraph",
          value:
            "A strong website builds trust instantly. When parents see clear information, real results, and structured presentation, they feel confident contacting your institute. In many cases, a good website becomes the deciding factor in admissions."
        }
      ]
    },

    {
      id: 3,
      title: "Website for Organizational Companies (Trust + Branding)",
      niche: "Organization",
      date: "04 Feb 2026",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      excerpt:
        "For organizations and companies, a strong website builds authority, trust, and helps in client acquisition.",
      content: [
        { type: "heading", level: 2, value: "Introduction" },
        {
          type: "paragraph",
          value:
            "For organizations and corporate companies, a website is more than just an online presence—it is a reflection of brand identity. Potential clients often judge your professionalism solely based on your website before speaking to you."
        },

        { type: "heading", level: 3, value: "What Makes a Company Website Professional" },
        {
          type: "list",
          value: [
            "Clean and consistent design",
            "Clear brand identity",
            "Detailed service descriptions",
            "Company story and mission",
            "Client testimonials",
            "Portfolio or case studies",
            "Career opportunities section"
          ]
        },

        { type: "heading", level: 3, value: "Modern Web Standards Businesses Must Follow" },
        {
          type: "list",
          value: [
            "Fast loading speed",
            "SEO optimized pages",
            "Secure HTTPS protocol",
            "Mobile responsiveness",
            "Contact options on every page"
          ]
        },

        {
          type: "paragraph",
          value:
            "A professional website strengthens brand authority, builds trust, and directly contributes to acquiring new clients. In today’s market, it is one of the most powerful digital assets a company can own."
        }
      ]
    },

    {
      id: 4,
      title: "AI in Web Development (Real Use-Cases)",
      niche: "Technology",
      date: "04 Feb 2026",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      excerpt:
        "AI is making web development faster and smarter—helping with coding, content, design, chatbots, and automation.",
      content: [
        { type: "heading", level: 2, value: "Introduction" },
        {
          type: "paragraph",
          value:
            "Artificial Intelligence is transforming how websites and web applications are built. Tasks that once required hours of manual work can now be completed quickly using AI-assisted tools. Rather than replacing developers, AI enhances their productivity and creativity."
        },

        { type: "heading", level: 3, value: "How AI Helps Developers" },
        {
          type: "list",
          value: [
            "Writing and suggesting code",
            "Debugging errors faster",
            "Generating UI layouts",
            "Detecting bugs automatically"
          ]
        },

        { type: "heading", level: 3, value: "AI Applications for Business Websites" },
        {
          type: "list",
          value: [
            "Chatbots for instant support",
            "Smart lead forms",
            "Personalized recommendations",
            "Automated content generation"
          ]
        },

        {
          type: "paragraph",
          value:
            "In the coming years, AI will make websites faster, more personalized, and more accessible. Businesses that adopt AI early will gain a major competitive advantage in customer experience and conversions."
        }
      ]
    },

    {
      id: 5,
      title: "Local SEO in Amravati: Rank on Google & Get Leads",
      niche: "Marketing",
      date: "05 Feb 2026",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      excerpt:
        "A website + local SEO helps you rank on Google, appear on Maps, and get direct calls and WhatsApp leads.",
      content: [
        { type: "heading", level: 2, value: "Introduction" },
        {
          type: "paragraph",
          value:
            "If your business depends on local customers, local SEO is one of the fastest ways to generate real leads. When people search for services nearby, search engines prioritize businesses optimized for local visibility."
        },

        { type: "heading", level: 3, value: "How Local SEO Helps Businesses" },
        {
          type: "list",
          value: [
            "Higher ranking in search results",
            "Visibility on maps",
            "Direct phone calls from search",
            "Increased trust through reviews"
          ]
        },

        { type: "heading", level: 3, value: "Local SEO Checklist" },
        {
          type: "list",
          value: [
            "Proper business profile setup",
            "Consistent name, address, and phone number",
            "Fast mobile-friendly website",
            "Pages with local keywords",
            "Regular review collection"
          ]
        },

        {
          type: "paragraph",
          value:
            "Combining strong local SEO with a professional website creates a powerful growth engine. It attracts customers who are already searching for your services and converts them into real leads."
        }
      ]
    }
  ];


  const [activeBlog, setActiveBlog] = useState(blogs[0]);
  const openBlog = (blog) => {
    setActiveBlog(blog);
  
    // Scroll to the full blog section on all screen sizes
    setTimeout(() => {
      document
        .getElementById("blog-full")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };
  

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>MTECS Blog</h2>
        <p className="sub">Insights, ideas & knowledge from our niche</p>
      </div>

      <div className="blog-layout">
        {/* LEFT — BLOG LIST */}
        <div className="blog-list">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`blog-card ${activeBlog.id === blog.id ? "active" : ""
                }`}
              onClick={() => openBlog(blog)}
            >
              <div className="blog-meta">
                <span className="niche">{blog.niche}</span>
                <span className="date">{blog.date}</span>
              </div>

              <h4>{blog.title}</h4>
              <p>{blog.excerpt}</p>

              <span className="open-link">
                Read Article →
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT — FULL BLOG */}
        <div className="blog-full" id="blog-full">
          <img src={activeBlog.image} alt={activeBlog.title} />

          <div className="blog-meta">
            <span className="niche">{activeBlog.niche}</span>
            <span className="date">{activeBlog.date}</span>
          </div>

          <h2>{activeBlog.title}</h2>

          {activeBlog.content.map((block, i) => {
            switch (block.type) {
              case "heading":
                if (block.level === 2) return <h2 key={i}>{block.value}</h2>;
                if (block.level === 3) return <h3 key={i}>{block.value}</h3>;
                return <h4 key={i}>{block.value}</h4>;

              case "paragraph":
                return <p key={i}>{block.value}</p>;

              case "list":
                return (
                  <ul key={i}>
                    {block.value.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}

// =================
