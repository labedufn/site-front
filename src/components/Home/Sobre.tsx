import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Foto from "../../assets/img/ilustracoes/chiko_desenho.png";
import Container from "../../common/Container";
import "../../styles/components/home/sobre.css";
import Botao from "./Botao";

interface SobreProps {
  subtitulo: string;
  titulo: string;
  paragrafo: string;
}

const Sobre: React.FC<SobreProps> = ({ subtitulo, titulo, paragrafo }) => {
  const controlsTextos = useAnimation();
  const controlsImagem = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controlsTextos.start({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } });
          controlsImagem.start({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controlsTextos, controlsImagem]);

  const handleSobreLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="sobre" className="sobre" ref={ref}>
        <Container>
          <div className="sobre-conteudo">
            <motion.div
              className="sobre-textos"
              initial={{ opacity: 0, x: -100 }}
              animate={controlsTextos}
            >
              <h2 className="subtitulo font-1-m">{subtitulo}</h2>
              <h1 className="titulo font-1-l-b">{titulo}</h1>
              <p className="paragrafo font-2-sl">{paragrafo}</p>
              <NavLink to={"#projetos"} onClick={(e) => handleSobreLinkClick(e, "projetos")}>
                <Botao texto="Conheça nossos projetos" />
              </NavLink>
            </motion.div>
            <motion.img
              src={Foto}
              alt="Robô"
              className="sobre-imagem"
              initial={{ opacity: 0, x: 100 }}
              animate={controlsImagem}
            />
          </div>
        </Container>
        <div className="teste"></div>
      </section>
    </>
  );
};

export default Sobre;
