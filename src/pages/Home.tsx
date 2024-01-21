import React from "react";
import "../assets/css/global/global.css";
import ImagemHero from "../assets/img/fotos/hero_bg.png";
import Navbar from "../common/Navbar";
import Apoiadores from "../components/Home/Apoiadores";
import Hero from "../components/Home/Hero";
import Projetos from "../components/Home/Projetos";
import Sobre from "../components/Home/Sobre";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero
        titulo="SPARK THE SMART, BUILD THE BRIGHT."
        subtitulo="LABORATÓRIO DE ELETRÔNICA E DESENVOLVIMENTO"
        urlImagem={ImagemHero}
      />
      <Sobre
        subtitulo={"SOBRE O"}
        titulo={"LABORATÓRIO DE ELETRÔNICA E DESENVOLVIMENTO"}
        paragrafo={
          "Lorem ipsum dolor sit amet consectetur. Id purus lacinia malesuada vitae orci et posuere. Volutpat tristique vivamus fermentum velit nisl quam lobortis tempus. Diam eleifend vitae consectetur risus suspendisse platea etiam. Viverra potenti est proin vel eget turpis."
        }
      />
      <Projetos />
      <Apoiadores />
    </>
  );
};

export default Home;
