import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Slider from "react-infinite-logo-slider";
import ScrollTrigger from "react-scroll-trigger";
import CienciaComputacao from "../../assets/img/apoiadores/ciencia_computacao.svg";
import Conectare from "../../assets/img/apoiadores/conectare.svg";
import JogosDigitais from "../../assets/img/apoiadores/jogos_digitais.svg";
import SistemasInformacao from "../../assets/img/apoiadores/sistemas_informacao.svg";
import SolidWorks from "../../assets/img/apoiadores/solidworks.svg";
import Ufn from "../../assets/img/apoiadores/ufn.svg";
import Ufnbotz from "../../assets/img/apoiadores/ufnbotz.svg";
import AnimacaoFadeCrescente from "../../common/AnimacaoFadeCrescente";
import Container from "../../common/Container";
import DivisorSection from "../../common/DivisorSection";
import "../../styles/components/home/apoiadores.css";

const Apoiadores = () => {
  const controlsTitulo = useAnimation();
  const controlsLogos = useAnimation();
  const ref = useRef(null);
  const [isTituloVisible, setIsTituloVisible] = useState(false);
  const [isLogosVisible, setIsLogosVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTituloVisible(true);
          }
        });
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
  }, []);

  useEffect(() => {
    controlsTitulo.start({ opacity: 0 });

    if (isTituloVisible) {
      controlsTitulo.start({ opacity: 1, transition: { duration: 0.5, delay: 0.1 } });
    }

    controlsLogos.start({ opacity: 0 });

    if (isLogosVisible) {
      controlsLogos.start({ opacity: 1, transition: { duration: 0.5, delay: 0.2 } });
    }
  }, [isTituloVisible, isLogosVisible, controlsTitulo, controlsLogos]);

  const logos = [
    Ufn,
    SistemasInformacao,
    Ufnbotz,
    SolidWorks,
    JogosDigitais,
    CienciaComputacao,
    Conectare,
  ];

  return (
    <>
      <section id="apoiadores" ref={ref}>
        <div className="apoiadores-bg">
          <DivisorSection fillClass="cor-branco" />
          <ScrollTrigger onEnter={() => setIsTituloVisible(true)}>
            <AnimacaoFadeCrescente controls={controlsTitulo}>
              <motion.div className="apoiadores-titulo">
                <h3 className="font-1-sl">Apoiadores</h3>
              </motion.div>
            </AnimacaoFadeCrescente>
          </ScrollTrigger>
          <ScrollTrigger onEnter={() => setIsLogosVisible(true)}>
            <AnimacaoFadeCrescente controls={controlsLogos}>
              <Container>
                <motion.div className="apoiadores-logos">
                  <Slider duration={20} pauseOnHover={true}>
                    {logos.map((item, index) => (
                      <Slider.Slide key={index}>
                        <img className="logo" src={item} alt={`Logo ${index}`} />
                      </Slider.Slide>
                    ))}
                  </Slider>
                </motion.div>
              </Container>
            </AnimacaoFadeCrescente>
          </ScrollTrigger>
        </div>
      </section>
    </>
  );
};

export default Apoiadores;
