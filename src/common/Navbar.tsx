/// <reference types="vite-plugin-svgr/client" />
import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import "../assets/css/common/navbar.css";
import FecharIcon from "../assets/img/icons/fechar_icon.svg?react";
import HamburgerIcon from "../assets/img/icons/hamburger_icon.svg?react";
import LogoAbreviado from "../assets/img/logos/logo_abreviado.svg?react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Referência para o menu com tipo específico

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fechar o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Fechar o menu ao clicar em um link
    }
  };

  return (
    <>
      <header className={`navbar-bg ${isScrolled ? "navbar-bg-scrolled" : ""}`}>
        <nav className="navbar container">
          <a href="#inicio" onClick={(e) => handleScroll(e, "inicio")}>
            <LogoAbreviado className="navbar-logo" />
          </a>

          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FecharIcon /> : <HamburgerIcon />}
          </div>

          <div
            className={`navbar-links ${isMenuOpen ? "active" : ""}`}
            ref={menuRef} // Adiciona a referência aqui
          >
            <a href="#inicio" onClick={(e) => handleScroll(e, "inicio")}>
              Início
            </a>
            <a href="#sobre" onClick={(e) => handleScroll(e, "sobre")}>
              Sobre
            </a>
            <a href="#projetos" onClick={(e) => handleScroll(e, "projetos")}>
              Projetos
            </a>
            <a href="#apoiadores" onClick={(e) => handleScroll(e, "apoiadores")}>
              Apoiadores
            </a>
          </div>

          <div className="navbar-icons">
            <a href="https://www.instagram.com/labedufn" target="blank">
              <FaInstagram size={24} className="instagram-icon" />
            </a>
            <a href="https://github.com/labedufn" target="blank">
              <FaGithub size={24} className="github-icon" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
