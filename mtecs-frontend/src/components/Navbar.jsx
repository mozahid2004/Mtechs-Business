import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  FaHome, FaInfoCircle, FaServicestack, FaEnvelope, 
  FaBars, FaTimes, FaBlog, FaGopuram 
} from "react-icons/fa";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Scroll background change
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div className={`overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)} />

      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">MTECS</div>

          {/* Desktop Menu */}
          <nav className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blogs</NavLink>
            <NavLink to="/career">Career</NavLink>
          </nav>

          {/* Hamburger */}
          <div className="menu-icon" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>

      {/* Mobile Slide Menu */}
      <aside className={`mobile-menu ${open ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setOpen(false)}><FaHome /> Home</NavLink>
        <NavLink to="/services" onClick={() => setOpen(false)}><FaServicestack /> Services</NavLink>
        <NavLink to="/blog" onClick={() => setOpen(false)}><FaBlog /> Blog</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}><FaInfoCircle /> About</NavLink>
        <NavLink to="/career" onClick={() => setOpen(false)}><FaGopuram /> Career</NavLink>
      </aside>
    </>
  );
};

export default Navbar;
