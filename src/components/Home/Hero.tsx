import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import "../../assets/css/components/home/hero.css";
import DivisorSection from "../../common/DivisorSection";
import ItemHero from "./ItemHero";
import ScrollButton from "./ScrollButton";

interface HeroProps {
  titulo: string;
  subtitulo: string;
  urlImagem: string;
}

const Hero: React.FC<HeroProps> = ({ titulo, subtitulo, urlImagem }) => {
  const [offset, setOffset] = useState(0);
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [tituloSemPonto, pontoFinal] = titulo.match(/(.*)(\.)/)?.slice(1) || [titulo, ""];

  // Animação para o título e subtítulo
  const titleVariants = {
    hidden: { scale: 1.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  useEffect(() => {
    if (isComponentVisible) {
      controls.start("visible");
    }
  }, [controls, isComponentVisible]);

  const onEnterViewport = () => {
    setIsComponentVisible(true);
  };

  return (
    <>
      <ScrollTrigger onEnter={onEnterViewport}>
        <section
          id="inicio"
          className="hero"
          style={{ backgroundImage: `url(${urlImagem})`, backgroundPositionY: offset * 0.5 }}
        >
          <div className="ruido-bg"></div>
          <div className="hero-texto container">
            <motion.h1 initial="hidden" animate={controls} variants={titleVariants}>
              {tituloSemPonto}
              <span className="ponto-final">{pontoFinal}</span>
            </motion.h1>
            <motion.p initial="hidden" animate={controls} variants={titleVariants}>
              {subtitulo}
            </motion.p>
          </div>
          <div className="hero-divisor">
            <motion.div
              className="scroll-button"
              initial="hidden"
              animate={controls}
              variants={titleVariants}
            >
              <ScrollButton />
            </motion.div>
            <DivisorSection inverter={true} />
          </div>
        </section>
      </ScrollTrigger>
      <ItemHero />
      <div className="hero-divisor-bottom">
        <DivisorSection />
      </div>
    </>
  );
};

export default Hero;
