import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import EletronicaIcon from "../../assets/img/icons/eletronica.svg";
import ProgramacaoIcon from "../../assets/img/icons/programacao.svg";
import RoboticaIcon from "../../assets/img/icons/robotica.svg";
import AnimacaoFadeCrescente from "../../common/AnimacaoFadeCrescente";
import Container from "../../common/Container";
import "../../styles/components/home/item-hero.css";
import ItemConteudo from "./ItemConteudo";

const ItemHero: React.FC = () => {
  const controlsEletronica = useAnimation();
  const controlsProgramacao = useAnimation();
  const controlsRobotica = useAnimation();

  const [isEletronicaVisible, setIsEletronicaVisible] = useState(false);
  const [isProgramacaoVisible, setIsProgramacaoVisible] = useState(false);
  const [isRoboticaVisible, setIsRoboticaVisible] = useState(false);

  useEffect(() => {
    controlsEletronica.start({ opacity: 0 });
    controlsProgramacao.start({ opacity: 0 });
    controlsRobotica.start({ opacity: 0 });

    if (isEletronicaVisible) {
      controlsEletronica.start({ opacity: 1, transition: { duration: 0.5, delay: 0.2 } });
    }
    if (isProgramacaoVisible) {
      controlsProgramacao.start({
        opacity: 1,
        transition: { duration: 0.5, delay: 0.4 },
      });
    }
    if (isRoboticaVisible) {
      controlsRobotica.start({ opacity: 1, transition: { duration: 0.5, delay: 0.6 } });
    }
  }, [isEletronicaVisible, isProgramacaoVisible, isRoboticaVisible]);

  return (
    <>
      <div className="itens-bg">
        <Container>
          <div className="itens">
            <ScrollTrigger onEnter={() => setIsEletronicaVisible(true)}>
              <AnimacaoFadeCrescente controls={controlsEletronica}>
                <motion.div>
                  <ItemConteudo
                    icone={EletronicaIcon}
                    titulo={"Eletrônica"}
                    descricao={
                      "Usamos as mais variadas placas programaveis para criar circuitos, aplicando teoria em sistemas embarcados práticos."
                    }
                  />
                </motion.div>
              </AnimacaoFadeCrescente>
            </ScrollTrigger>

            <ScrollTrigger onEnter={() => setIsProgramacaoVisible(true)}>
              <AnimacaoFadeCrescente controls={controlsProgramacao}>
                <motion.div>
                  <ItemConteudo
                    icone={ProgramacaoIcon}
                    titulo={"Programação"}
                    descricao={
                      "Em programação, criamos softwares e sistemas embarcados, focando em soluções práticas e acessíveis."
                    }
                  />
                </motion.div>
              </AnimacaoFadeCrescente>
            </ScrollTrigger>

            <ScrollTrigger onEnter={() => setIsRoboticaVisible(true)}>
              <AnimacaoFadeCrescente controls={controlsRobotica}>
                <motion.div>
                  <ItemConteudo
                    icone={RoboticaIcon}
                    titulo={"Robótica"}
                    descricao={
                      "A nossa equipe de robótica participa de competições na área e desenvolve projetos do zero, mesclando prática e inovação."
                    }
                  />
                </motion.div>
              </AnimacaoFadeCrescente>
            </ScrollTrigger>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ItemHero;
