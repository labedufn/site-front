import Hamburger from "hamburger-react";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import LogoAbreviado from "../../assets/img/logos/logo_abreviado.svg?react";
import Container from "../../common/Container";
import "../../styles/components/home/navbar.css";

const sections = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "membros", label: "Membros" },
  { id: "apoiadores", label: "Apoiadores" },
];

const socialLinks = [
  {
    url: "https://www.instagram.com/labedufn",
    icon: <FaInstagram size={24} className="instagram-icon" />,
  },
  { url: "https://github.com/labedufn", icon: <FaGithub size={24} className="github-icon" /> },
];

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
    setIsScrolled(offset > 50);
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
      threshold: 0.5,
    });

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        observer.observe(sectionElement);
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
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`navbar-bg ${isScrolled ? "navbar-bg-scrolled" : ""}`}>
        <Container>
          <nav className="navbar font-2-sm">
            <NavLink
              to="#inicio"
              onClick={(e) => handleNavLinkClick(e, "inicio")}
              className={activeSection === "inicio" ? "link-ativo" : ""}
            >
              <LogoAbreviado className="navbar-logo" />
            </NavLink>

            <div className="menu-icon" onClick={toggleMenu}>
              <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={32} rounded />
            </div>

            <div className={`navbar-links ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
              {sections.map((section) => (
                <NavLink
                  key={section.id}
                  to={`#${section.id}`}
                  onClick={(e) => handleNavLinkClick(e, section.id)}
                  className={activeSection === section.id ? "link-ativo" : "link"}
                >
                  {section.label}
                </NavLink>
              ))}
            </div>

            <div className="navbar-icons">
              {socialLinks.map((socialLink, index) => (
                <a key={index} href={socialLink.url} target="_blank" rel="noopener noreferrer">
                  {socialLink.icon}
                </a>
              ))}
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Navbar;
