import React from "react";
import Helmet from "react-helmet";
import ImagemHero from "../assets/img/fotos/hero_bg.png";
import Apoiadores from "../components/Home/Apoiadores";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Membros from "../components/Home/Membros";
import Navbar from "../components/Home/Navbar";
import Projetos from "../components/Home/Projetos";
import Sobre from "../components/Home/Sobre";
import "../styles/components/home/hero.css";

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
        titulo="ELETRÔNICA E DESENVOLVIMENTO"
        subtitulo="LABORATÓRIO DE"
        urlImagem={ImagemHero}
      />
      <Sobre
        subtitulo={"SOBRE O"}
        titulo={"LABORATÓRIO DE ELETRÔNICA E DESENVOLVIMENTO"}
        paragrafo={
          "O LABED (Laboratório de Eletrônica e Desenvolvimento) da Universidade Franciscana é uma iniciativa pioneira que reflete o compromisso da instituição com a educação moderna e interativa, alinhada à expansão global do movimento Maker. Este laboratório foi desenvolvido para oferecer à comunidade acadêmica um espaço dinâmico e equipado para a prática e aprofundamento em áreas de robótica, programação, tecnologia, e muito mais, fomentando assim o aprendizado ativo. Os objetivos principais incluem estimular a criatividade, inovação, trabalho em equipe, pensamento crítico, e resolver problemas através do desenvolvimento de projetos práticos. Com projetos que já se destacaram em diversos eventos e feiras tecnológicas, o LABED se estabelece como um marco no engajamento e na disseminação do conhecimento tecnológico na Universidade Franciscana e na comunidade ao redor, destacando-se como um modelo de inovação educacional e colaboração multidisciplinar."
        }
      />
      <Projetos />
      <Membros />
      <Apoiadores />
      <Footer />
    </>
  );
};

export default Home;
