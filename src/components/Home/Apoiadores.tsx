import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../../assets/css/components/home/apoiadores.css";
import "../../assets/css/utils/cores.css";
import CienciaComputacao from "../../assets/img/apoiadores/ciencia_computacao.svg";
import EngenhariaBiomedica from "../../assets/img/apoiadores/engenharia_biomedica.svg";
import JogosDigitais from "../../assets/img/apoiadores/jogos_digitais.svg";
import SistemasInformacao from "../../assets/img/apoiadores/sistemas_informacao.svg";
import Ufn from "../../assets/img/apoiadores/ufn.svg";
import Ufnbotz from "../../assets/img/apoiadores/ufnbotz.svg";
import DivisorSection from "../../common/DivisorSection";

const Apoiadores = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
          // else {
          //   setIsVisible(false);
          // }
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
    if (isVisible) {
      controls.start({ opacity: 1, transition: { duration: 0.5, delay: 0.2 } });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [isVisible, controls]);

  const logos = [
    Ufn,
    Ufnbotz,
    JogosDigitais,
    SistemasInformacao,
    CienciaComputacao,
    EngenhariaBiomedica,
  ];

  return (
    <>
      <section id="apoiadores" ref={ref}>
        <div className="apoiadores-bg">
          <DivisorSection fillClass="cor-branco" />
          <motion.div className="apoiadores-titulo" initial={{ opacity: 0 }} animate={controls}>
            <h3>Apoiadores</h3>
          </motion.div>
          <motion.div
            className="apoiadores-logos container"
            initial={{ opacity: 0 }}
            animate={controls}
          >
            <div className="slider">
              <div className="slide-track">
                {logos.map((logo, index) => (
                  <div className="slide" key={index}>
                    <img src={logo} alt={`Logo ${index + 1}`} />
                  </div>
                ))}
                {logos.map((logo, index) => (
                  <div className="slide" key={`duplicate-${index}`}>
                    <img src={logo} alt={`Logo duplicate ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Apoiadores;
