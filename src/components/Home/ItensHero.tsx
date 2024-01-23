import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import "../../assets/css/components/home/itens-hero.css";
import EletronicaIcon from "../../assets/img/icons/eletronica.svg";
import ProgramacaoIcon from "../../assets/img/icons/programacao.svg";
import RoboticaIcon from "../../assets/img/icons/robotica.svg";
import ItemConteudo from "./ItemConteudo";

const ItensHero: React.FC = () => {
  const controlsEletronica = useAnimation();
  const controlsProgramacao = useAnimation();
  const controlsRobotica = useAnimation();

  const [isEletronicaVisible, setIsEletronicaVisible] = useState(false);
  const [isProgramacaoVisible, setIsProgramacaoVisible] = useState(false);
  const [isRoboticaVisible, setIsRoboticaVisible] = useState(false);

  useEffect(() => {
    // Inicia as animações com opacidade 0 e scale maior
    controlsEletronica.start({ opacity: 0, scale: 1.2 });
    controlsProgramacao.start({ opacity: 0, scale: 1.2 });
    controlsRobotica.start({ opacity: 0, scale: 1.2 });

    // Atualiza a animação com base na visibilidade
    if (isEletronicaVisible) {
      controlsEletronica.start({ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } });
    }
    if (isProgramacaoVisible) {
      controlsProgramacao.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 0.4 },
      });
    }
    if (isRoboticaVisible) {
      controlsRobotica.start({ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } });
    }
  }, [isEletronicaVisible, isProgramacaoVisible, isRoboticaVisible]);

  return (
    <>
      <div className="itens-bg">
        <div className="itens container">
          <ScrollTrigger onEnter={() => setIsEletronicaVisible(true)}>
            <motion.div initial={{ opacity: 0, scale: 1.2 }} animate={controlsEletronica}>
              <ItemConteudo
                icone={EletronicaIcon}
                titulo={"ELETRÔNICA"}
                descricao={
                  "Usamos as mais variadas placas programaveis para criar circuitos, aplicando teoria em sistemas embarcados práticos."
                }
              />
            </motion.div>
          </ScrollTrigger>

          <ScrollTrigger onEnter={() => setIsProgramacaoVisible(true)}>
            <motion.div initial={{ opacity: 0, scale: 1.2 }} animate={controlsProgramacao}>
              <ItemConteudo
                icone={ProgramacaoIcon}
                titulo={"PROGRAMAÇÃO"}
                descricao={
                  "Em programação, criamos softwares e sistemas embarcados, focando em soluções práticas e acessíveis."
                }
              />
            </motion.div>
          </ScrollTrigger>

          <ScrollTrigger onEnter={() => setIsRoboticaVisible(true)}>
            <motion.div initial={{ opacity: 0, scale: 1.2 }} animate={controlsRobotica}>
              <ItemConteudo
                icone={RoboticaIcon}
                titulo={"ROBÓTICA"}
                descricao={
                  "A nossa equipe de robótica participa de competições na área e desenvolve projetos do zero, mesclando prática e inovação."
                }
              />
            </motion.div>
          </ScrollTrigger>
        </div>
      </div>
    </>
  );
};

export default ItensHero;
