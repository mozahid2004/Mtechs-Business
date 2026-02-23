import React from "react";
import "./ourPortfolio.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Portfolio from "../assets/ProjectImg/Portfolio.png"
import Vaidyaaz from "../assets/ProjectImg/Vaidyaaz.png"
import Academy from "../assets/ProjectImg/Academy.png"



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const portfolioData = [
  {
    id: 1,
    img: Vaidyaaz,
    title: "Vaidyaaz Corporation PVT LTD",
    desc: "Business website for manufacturing and coating solutions.",
    link: "https://vaidyaaz.com",
  },

  {
    id: 3,
    img: Portfolio,
    title: "MTECS Portfolio",
    desc: "Fullstack developer portfolio showcasing projects and skills.",
    link: "https://mtechs-mozahid2004s-projects.vercel.app"
  },
  {
    id: 2,
    img: Academy,
    title: "Gulam Sir Academy",
    desc: "Coaching classes website with modern layout and course info.",
    link: "https://gulamsiracademy.in",
  },
  {
    id: 1,
    img: Vaidyaaz,
    title: "Vaidyaaz Corporation PVT LTD",
    desc: "Business website for manufacturing and coating solutions.",
    link: "https://vaidyaaz.com",
  },
  {
    id: 3,
    img: Portfolio,
    title: "MTECS Portfolio",
    desc: "Fullstack developer portfolio showcasing projects and skills.",
    link: "https://mtechs-mozahid2004s-projects.vercel.app"
  },

];

export default function OurPortfolio() {
  return (
    <section className="portfolio-section">
      {/* HEADER */}
      <div className="portfolio-header">
        <h2>Our Work</h2>
        <p>
          A showcase of our latest projects delivering performance,
          aesthetics, and scalable architecture.
        </p>
      </div>

      {/* SLIDER AREA */}
      <div className="slider-area">
        <button className="nav-btn prevBtn">&#10094;</button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          centeredSlides={true}
          loop={true}
          speed={800}
          grabCursor={true}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".prevBtn",
            nextEl: ".nextBtn",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          className="portfolio-swiper"
        >
          {portfolioData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="portfolio-card">
                <img src={item.img} alt={item.title} />
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a
                    href={item.link}
                    className="card-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="nav-btn nextBtn">&#10095;</button>
      </div>

      {/* PAGINATION OUTSIDE */}
      <div className="custom-pagination"></div>
    </section>
  );
}