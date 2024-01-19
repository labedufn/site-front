import React from "react";
import "../assets/css/global/global.css";
import ImagemHero from "../assets/img/fotos/hero_bg.png";
import Navbar from "../common/Navbar";
import Hero from "../components/Hero";

const Inicio: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero
        titulo="SPARK THE SMART, BUILD THE BRIGHT."
        subtitulo="LABORATÓRIO DE ELETRÔNICA E DESENVOLVIMENTO"
        urlImagem={ImagemHero}
      />
    </>
  );
};

export default Inicio;
