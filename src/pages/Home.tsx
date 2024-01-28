import React from "react";
import Helmet from "react-helmet";
import "../assets/css/global/global.css";
import ImagemHero from "../assets/img/fotos/hero_bg.png";
import Apoiadores from "../components/Home/Apoiadores";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Membros from "../components/Home/Membros";
import Navbar from "../components/Home/Navbar";
import Projetos from "../components/Home/Projetos";
import Sobre from "../components/Home/Sobre";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>LABED - Laboratório de Eletrônica e Desenvolvimento</title>
        <meta
          name="description"
          content="LABED - Laboratório de Eletrônica e Desenvolvimento da Universidade Franciscana ⚡"
        />
      </Helmet>

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
          "O LABED, fruto da parceria entre alunos e professores, nasceu de encontros regulares para discutir ideias práticas em eletrônica. O laboratório não é apenas um espaço físico, mas um ambiente inclusivo. Sem focar em individualidades, o LABED é um ponto de encontro onde a paixão pela eletrônica se traduz em projetos tangíveis. Em encontros semanais, valorizamos a diversidade de perspectivas, acreditando que é dessa mistura que nascem as ideias mais criativas. O LABED é um hub de inovação, proporcionando oportunidades para aprender e criar em eletrônica, tornando a tecnologia acessível a todos os interessados."
        }
      />
      <Membros />
      <Projetos />
      <Apoiadores />
      <Footer />
    </>
  );
};

export default Home;
