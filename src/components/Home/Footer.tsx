import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import Logo from "../../assets/img/logos/logo_original.svg?react";
import AnimacaoFadeCrescente from "../../common/AnimacaoFadeCrescente";
import Container from "../../common/Container";
import "../../styles/components/home/footer.css";

const sections = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "membros", label: "Membros" },
  { id: "apoiadores", label: "Apoiadores" },
];

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
        <Container>
          <div className="footer">
            <div className="footer-conteudo">
              <div className="footer-grid">
                <ScrollTrigger onEnter={() => setIsLogoVisible(true)}>
                  <AnimacaoFadeCrescente controls={controlsLogo}>
                    <motion.div className="footer-logo">
                      <NavLink to="#inicio" onClick={(e) => handleScroll(e, "inicio")}>
                        <Logo width={160} />
                      </NavLink>
                    </motion.div>
                  </AnimacaoFadeCrescente>
                </ScrollTrigger>
                <ScrollTrigger onEnter={() => setIsHomeVisible(true)}>
                  <AnimacaoFadeCrescente controls={controlsHome}>
                    <motion.div className="footer-home">
                      <h3 className="font-1-sl">LABED</h3>
                      <ul className="footer-anexos font-2-sm">
                        {sections.map((section) => (
                          <NavLink
                            key={section.id}
                            to={`#${section.id}`}
                            onClick={(e) => handleScroll(e, section.id)}
                          >
                            <li>{section.label}</li>
                          </NavLink>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimacaoFadeCrescente>
                </ScrollTrigger>
                <ScrollTrigger onEnter={() => setIsContatoVisible(true)}>
                  <AnimacaoFadeCrescente controls={controlsContato}>
                    <motion.div className="footer-contato">
                      <h3 className="font-1-sl">Contato</h3>
                      <div className="footer-contato-infos font-2-sm">
                        <div className="footer-email">
                          <MdMailOutline size={24} />
                          <NavLink to="mailto:labedufn@gmail.com">labedufn@gmail.com</NavLink>
                        </div>
                        <div className="footer-endereco">
                          <div className="endereco-icon">
                            <LuMapPin size={24} />
                          </div>
                          <NavLink to="https://maps.app.goo.gl/S8dV92rKibENyxCe8" target="blank">
                            Rua dos Andradas, 1614 - Centro, Universidade Franciscana - Conjunto I,
                            Prédio 3, Lab. 109, Santa Maria - RS, 97010-030
                          </NavLink>
                        </div>
                      </div>
                    </motion.div>
                  </AnimacaoFadeCrescente>
                </ScrollTrigger>
                <ScrollTrigger onEnter={() => setIsRedesVisible(true)}>
                  <AnimacaoFadeCrescente controls={controlsRedes}>
                    <motion.div className="footer-redes">
                      <h3 className="font-1-sl">Redes Sociais</h3>
                      <div className="footer-redes-icons">
                        <NavLink to="https://www.instagram.com/labedufn" target="blank">
                          <FaInstagram size={32} className="instagram-icon" />
                        </NavLink>
                        <NavLink to="https://github.com/labedufn" target="blank">
                          <FaGithub size={32} className="github-icon" />
                        </NavLink>
                      </div>
                    </motion.div>
                  </AnimacaoFadeCrescente>
                </ScrollTrigger>
              </div>
            </div>
            <ScrollTrigger onEnter={() => setIsCopyVisible(true)}>
              <AnimacaoFadeCrescente controls={controlsCopy}>
                <motion.div className="footer-copy">
                  <p className="footer-lab font-2-s">
                    &copy; {currentYear} LABED - Laboratório de Eletrônica e Desenvolvimento.
                  </p>
                  <p className="footer-dev font-2-s">
                    Desenvolvido por{" "}
                    <NavLink to="https://github.com/mauricioprb" target="blank">
                      @mauricioprb
                    </NavLink>
                  </p>
                </motion.div>
              </AnimacaoFadeCrescente>
            </ScrollTrigger>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
