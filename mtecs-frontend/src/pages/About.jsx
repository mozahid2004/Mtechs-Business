import FAQ from "../components/Faq";
import FounderSection from "../components/FounderSection";
import MissionVision from "../components/MissionVision";
import Process from "../components/Process"
import "./About.css";

export default function About() {
  return (
    <>
      <section className="about-hero">
    
          <div className="about-content">
            <h2>About Us</h2>
            <span className="underline"></span>
            <p>
              MTECS is a leading IT solutions provider based in Amravati, delivering modern, scalable, and high-performance web and software applications.
              We specialize in crafting websites, mobile apps, and digital solutions that help businesses grow and stand out in a competitive digital landscape.
            </p>
          </div>
      
      </section>


      <MissionVision />
      <Process/>
      <FounderSection />
      <FAQ />
    </>

  );
}
