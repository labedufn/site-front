import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import Container from "../../common/Container";
import DivisorSection from "../../common/DivisorSection";
import "../../styles/components/home/hero.css";
import "../../styles/utils/tipografia.css";
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
          <Container>
            <motion.div
              className="hero-texto"
              initial="hidden"
              animate={controls}
              variants={titleVariants}
            >
              <h3 className="font-1-l">{subtitulo}</h3>
              <h1 className="font-1-xxl">{titulo}</h1>
              <div className="scroll-button-hero">
                <ScrollButton />
              </div>
            </motion.div>
          </Container>
          <div className="hero-divisor">
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
