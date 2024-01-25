import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import "../assets/css/common/navbar.css";
import FecharIcon from "../assets/img/icons/fechar_icon.svg?react";
import HamburgerIcon from "../assets/img/icons/hamburger_icon.svg?react";
import LogoAbreviado from "../assets/img/logos/logo_abreviado.svg?react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust this threshold as needed
    });

    const sections = ["inicio", "sobre", "projetos", "apoiadores"];
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`navbar-bg ${isScrolled ? "navbar-bg-scrolled" : ""}`}>
        <nav className="navbar container">
          <a
            href="#inicio"
            onClick={(e) => handleNavLinkClick(e, "inicio")}
            className={activeSection === "inicio" ? "link-ativo" : ""}
          >
            <LogoAbreviado className="navbar-logo" />
          </a>

          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FecharIcon /> : <HamburgerIcon />}
          </div>

          <div className={`navbar-links ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
            <a
              href="#inicio"
              onClick={(e) => handleNavLinkClick(e, "inicio")}
              className={activeSection === "inicio" ? "link-ativo" : "link"}
            >
              Início
            </a>
            <a
              href="#sobre"
              onClick={(e) => handleNavLinkClick(e, "sobre")}
              className={activeSection === "sobre" ? "link-ativo" : "link"}
            >
              Sobre
            </a>
            <a
              href="#projetos"
              onClick={(e) => handleNavLinkClick(e, "projetos")}
              className={activeSection === "projetos" ? "link-ativo" : "link"}
            >
              Projetos
            </a>
            <a
              href="#apoiadores"
              onClick={(e) => handleNavLinkClick(e, "apoiadores")}
              className={activeSection === "apoiadores" ? "link-ativo" : "link"}
            >
              Apoiadores
            </a>
          </div>

          <div className="navbar-icons">
            <a href="https://www.instagram.com/labedufn" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="instagram-icon" />
            </a>
            <a href="https://github.com/labedufn" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="github-icon" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
