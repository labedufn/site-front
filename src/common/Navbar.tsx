import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import "../assets/css/common/navbar.css";
import FecharIcon from "../assets/img/icons/fechar_icon.svg";
import HamburgerIcon from "../assets/img/icons/hamburger_icon.svg";
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

    window.addEventListener("scroll", handleScroll);

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
