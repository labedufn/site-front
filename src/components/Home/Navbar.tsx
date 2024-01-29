import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import FecharIcon from "../../assets/img/icons/fechar_icon.svg?react";
import HamburgerIcon from "../../assets/img/icons/hamburger_icon.svg?react";
import LogoAbreviado from "../../assets/img/logos/logo_abreviado.svg?react";
import Container from "../../common/Container";
import "../../styles/components/home/navbar.css";

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
      threshold: 0.5,
    });

    const sections = ["inicio", "sobre", "membros", "projetos", "apoiadores"];

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
      setActiveSection(sectionId); // Atualize o activeSection ao clicar em um link
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
              {isMenuOpen ? <FecharIcon /> : <HamburgerIcon />}
            </div>

            <div className={`navbar-links ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
              <NavLink
                to="#inicio"
                onClick={(e) => handleNavLinkClick(e, "inicio")}
                className={activeSection === "inicio" ? "link-ativo" : "link"}
              >
                Início
              </NavLink>
              <NavLink
                to="#sobre"
                onClick={(e) => handleNavLinkClick(e, "sobre")}
                className={activeSection === "sobre" ? "link-ativo" : "link"}
              >
                Sobre
              </NavLink>
              <NavLink
                to="#membros"
                onClick={(e) => handleNavLinkClick(e, "membros")}
                className={activeSection === "membros" ? "link-ativo" : "link"}
              >
                Membros
              </NavLink>
              <NavLink
                to="#projetos"
                onClick={(e) => handleNavLinkClick(e, "projetos")}
                className={activeSection === "projetos" ? "link-ativo" : "link"}
              >
                Projetos
              </NavLink>
              <NavLink
                to="#apoiadores"
                onClick={(e) => handleNavLinkClick(e, "apoiadores")}
                className={activeSection === "apoiadores" ? "link-ativo" : "link"}
              >
                Apoiadores
              </NavLink>
            </div>

            <div className="navbar-icons">
              <a
                href="https://www.instagram.com/labedufn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} className="instagram-icon" />
              </a>
              <a href="https://github.com/labedufn" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} className="github-icon" />
              </a>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Navbar;
