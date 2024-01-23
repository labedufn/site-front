import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import "../../assets/css/components/home/sobre.css";
import Foto from "../../assets/img/ilustracoes/chiko_desenho.png";
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
          // Elemento entrou na viewport - dispara as animações
          controlsTextos.start({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } });
          controlsImagem.start({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } });
        }
        // else {
        //   // Elemento saiu da viewport - reinicia as animações
        //   controlsTextos.start({ opacity: 0, x: -100, transition: { duration: 0.5 } });
        //   controlsImagem.start({ opacity: 0, x: 100, transition: { duration: 0.5 } });
        // }
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

  return (
    <>
      <section id="sobre" className="sobre" ref={ref}>
        <div className="sobre-conteudo container">
          <motion.div
            className="sobre-textos"
            initial={{ opacity: 0, x: -100 }}
            animate={controlsTextos}
          >
            <h2 className="subtitulo">{subtitulo}</h2>
            <h1 className="titulo">{titulo}</h1>
            <p className="paragrafo">{paragrafo}</p>
            <Botao texto="Conheça os membros" />
          </motion.div>
          <motion.img
            src={Foto}
            alt="Robô"
            className="sobre-imagem"
            initial={{ opacity: 0, x: 100 }}
            animate={controlsImagem}
          />
        </div>
        <div className="teste"></div>
      </section>
    </>
  );
};

export default Sobre;
