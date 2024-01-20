import React, { useEffect, useState } from "react";
import "../../assets/css/components/home/hero.css";
import DivisorSection from "../../common/DivisorSection";
import ItensHero from "./ItensHero";

interface HeroProps {
  titulo: string;
  subtitulo: string;
  urlImagem: string;
}

const Hero: React.FC<HeroProps> = ({ titulo, subtitulo, urlImagem }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [tituloSemPonto, pontoFinal] = titulo.match(/(.*)(\.)/)?.slice(1) || [titulo, ""];

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${urlImagem})`, backgroundPositionY: offset * 0.5 }}
      >
        <div className="ruido-bg"></div>
        <div className="hero-texto container">
          <h1>
            {tituloSemPonto}
            <span className="ponto-final">{pontoFinal}</span>
          </h1>
          <p>{subtitulo}</p>
        </div>
        <DivisorSection />
      </section>
      <ItensHero />
      <DivisorSection inverter={true} />
    </>
  );
};

export default Hero;
