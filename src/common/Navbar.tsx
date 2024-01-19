import React, { useEffect, useState } from "react";
import "../assets/css/common/navbar.css";
import FecharIcon from "../assets/img/icons/fechar_icon.svg";
import IconGitHub from "../assets/img/icons/github_negativo.svg";
import HamburgerIcon from "../assets/img/icons/hamburger_icon.svg";
import IconInstagram from "../assets/img/icons/instagram_negativo.svg";
import IconUfn from "../assets/img/icons/ufn_negativo.svg";
import LogoAbreviado from "../assets/img/logos/logo_abreviado.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona o listener para o evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpa o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`navbar-bg ${isScrolled ? "navbar-bg-scrolled" : ""}`}>
        <nav className="navbar container">
          <a href="/">
            <img src={LogoAbreviado} alt="LABED" className="navbar-logo" />
          </a>

          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <img src={FecharIcon} alt="" /> : <img src={HamburgerIcon} alt="" />}
          </div>

          <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
            <a href="/inicio">Início</a>
            <a href="/sobre">Sobre</a>
            <a href="/membros">Membros</a>
            <a href="/projetos">Projetos</a>
            <a href="/blog">Blog</a>
          </div>

          <div className="navbar-icons">
            <a href="https://www.instagram.com/labedufn" target="blank">
              <img src={IconInstagram} alt="Instagram" />
            </a>
            <a href="https://github.com/labedufn" target="blank">
              <img src={IconGitHub} alt="GitHub" />
            </a>
            <a href="https://site.ufn.edu.br/" target="blank">
              <img src={IconUfn} alt="UFN" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
