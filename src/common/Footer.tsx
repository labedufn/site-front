/// <reference types="vite-plugin-svgr/client" />
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import ScrollTrigger from "react-scroll-trigger";
import "../assets/css/common/footer.css";
import "../assets/css/utils/cores.css";
import Logo from "../assets/img/logos/logo_original.svg?react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const controlsLogo = useAnimation();
  const controlsHome = useAnimation();
  const controlsContato = useAnimation();
  const controlsRedes = useAnimation();
  const controlsCopy = useAnimation();

  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [isHomeVisible, setIsHomeVisible] = useState(false);
  const [isContatoVisible, setIsContatoVisible] = useState(false);
  const [isRedesVisible, setIsRedesVisible] = useState(false);
  const [isCopyVisible, setIsCopyVisible] = useState(false);

  useEffect(() => {
    controlsLogo.start({ opacity: 0 });
    controlsHome.start({ opacity: 0 });
    controlsContato.start({ opacity: 0 });
    controlsRedes.start({ opacity: 0 });
    controlsCopy.start({ opacity: 0 });

    if (isLogoVisible) {
      controlsLogo.start({ opacity: 1, transition: { duration: 0.5, delay: 0.2 } });
    }
    if (isHomeVisible) {
      controlsHome.start({ opacity: 1, transition: { duration: 0.5, delay: 0.4 } });
    }
    if (isContatoVisible) {
      controlsContato.start({ opacity: 1, transition: { duration: 0.5, delay: 0.6 } });
    }
    if (isRedesVisible) {
      controlsRedes.start({ opacity: 1, transition: { duration: 0.5, delay: 0.8 } });
    }
    if (isCopyVisible) {
      controlsCopy.start({ opacity: 1, transition: { duration: 0.5, delay: 0.2 } });
    }
  }, [isLogoVisible, isHomeVisible, isContatoVisible, isRedesVisible, isCopyVisible]);

  const handleScroll = (
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
      <footer className="footer-bg">
        <div className="footer container">
          <div className="footer-conteudo">
            <div className="footer-grid">
              <ScrollTrigger onEnter={() => setIsLogoVisible(true)}>
                <motion.div className="footer-logo" initial={{ opacity: 0 }} animate={controlsLogo}>
                  <a href="#inicio" onClick={(e) => handleScroll(e, "inicio")}>
                    <Logo width={180} />
                  </a>
                </motion.div>
              </ScrollTrigger>
              <ScrollTrigger onEnter={() => setIsHomeVisible(true)}>
                <motion.div className="footer-home" initial={{ opacity: 0 }} animate={controlsHome}>
                  <h3>LABED</h3>
                  <ul className="footer-anexos">
                    <a href="#inicio" onClick={(e) => handleScroll(e, "inicio")}>
                      <li>Início</li>
                    </a>
                    <a href="#sobre" onClick={(e) => handleScroll(e, "sobre")}>
                      <li>Sobre</li>
                    </a>
                    <a href="#projetos" onClick={(e) => handleScroll(e, "projetos")}>
                      <li>Projetos</li>
                    </a>
                    <a href="#apoiadores" onClick={(e) => handleScroll(e, "apoiadores")}>
                      <li>Apoiadores</li>
                    </a>
                  </ul>
                </motion.div>
              </ScrollTrigger>
              <ScrollTrigger onEnter={() => setIsContatoVisible(true)}>
                <motion.div
                  className="footer-contato"
                  initial={{ opacity: 0 }}
                  animate={controlsContato}
                >
                  <h3>Contato</h3>
                  <div className="footer-contato-infos">
                    <div className="footer-email">
                      <MdMailOutline size={24} />
                      <a href="mailto:labedufn@gmail.com">labedufn@gmail.com</a>
                    </div>
                    <div className="footer-endereco">
                      <div className="endereco-icon">
                        <LuMapPin size={24} />
                      </div>
                      <a href="https://maps.app.goo.gl/oEeGiputU7H2fRjd7" target="blank">
                        Rua dos Andradas, 1614 - Centro, Universidade Franciscana - Conjunto I,
                        Prédio 3, Lab. 109, Santa Maria - RS, 97010-030
                      </a>
                    </div>
                  </div>
                </motion.div>
              </ScrollTrigger>
              <ScrollTrigger onEnter={() => setIsRedesVisible(true)}>
                <motion.div
                  className="footer-redes"
                  initial={{ opacity: 0 }}
                  animate={controlsRedes}
                >
                  <h3>Redes Sociais</h3>
                  <div className="footer-redes-icons">
                    <a href="https://www.instagram.com/labedufn" target="blank">
                      <FaInstagram size={32} className="instagram-icon" />
                    </a>
                    <a href="https://github.com/labedufn" target="blank">
                      <FaGithub size={32} className="github-icon" />
                    </a>
                  </div>
                </motion.div>
              </ScrollTrigger>
            </div>
          </div>
          <ScrollTrigger onEnter={() => setIsCopyVisible(true)}>
            <motion.div className="footer-copy" initial={{ opacity: 0 }} animate={controlsCopy}>
              <p className="footer-lab">
                &copy; {currentYear} LABED - Laboratório de Eletrônica e Desenvolvimento.
              </p>
              <p className="footer-dev">
                Desenvolvido por{" "}
                <a href="https://github.com/mauricioprb" target="blank">
                  @mauricioprb
                </a>
              </p>
            </motion.div>
          </ScrollTrigger>
        </div>
      </footer>
    </>
  );
};

export default Footer;
