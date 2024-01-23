import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import "../../assets/css/components/home/projetos.css";
import "../../assets/css/utils/cores.css";
import ProjetoCabine from "../../assets/img/fotos/cabine_rv.png";
import ProjetoSeguidor from "../../assets/img/fotos/robo_seguidor.png";
import ProjetoRobo from "../../assets/img/fotos/robos_combate.png";
import DivisorSection from "../../common/DivisorSection";
import Botao from "./Botao";
import ItemProjetos from "./ItemProjetos";

const Projetos: React.FC = () => {
  const controlsCabine = useAnimation();
  const controlsRobo = useAnimation();
  const controlsSeguidor = useAnimation();
  const controlsTitulo = useAnimation();
  const controlsBotao = useAnimation();

  const [isCabineVisible, setIsCabineVisible] = useState(false);
  const [isRoboVisible, setIsRoboVisible] = useState(false);
  const [isSeguidorVisible, setIsSeguidorVisible] = useState(false);
  const [isTituloVisible, setIsTituloVisible] = useState(false);
  const [isBotaoVisible, setIsBotaoVisible] = useState(false);

  useEffect(() => {
    controlsCabine.start({ opacity: 0 });
    controlsRobo.start({ opacity: 0 });
    controlsSeguidor.start({ opacity: 0 });
    controlsTitulo.start({ opacity: 0 });
    controlsBotao.start({ opacity: 0 });

    if (isCabineVisible) {
      controlsCabine.start({ opacity: 1, transition: { duration: 0.5, delay: 0.2 } });
    }
    if (isRoboVisible) {
      controlsRobo.start({ opacity: 1, transition: { duration: 0.5, delay: 0.4 } });
    }
    if (isSeguidorVisible) {
      controlsSeguidor.start({ opacity: 1, transition: { duration: 0.5, delay: 0.6 } });
    }
    if (isTituloVisible) {
      controlsTitulo.start({ opacity: 1, transition: { duration: 0.5, delay: 0.1 } });
    }
    if (isBotaoVisible) {
      controlsBotao.start({ opacity: 1, transition: { duration: 0.5, delay: 0.8 } });
    }
  }, [isCabineVisible, isRoboVisible, isSeguidorVisible, isTituloVisible, isBotaoVisible]);

  return (
    <>
      <section id="projetos" className="projetos-bg">
        <div className="projetos">
          <div className="projetos-header">
            <div className="projetos-divisor-top">
              <DivisorSection fillClass="cor-branco" />
            </div>
            <ScrollTrigger onEnter={() => setIsTituloVisible(true)}>
              <motion.h2
                className="projetos-titulo"
                initial={{ opacity: 0 }}
                animate={controlsTitulo}
              >
                Projetos
              </motion.h2>
            </ScrollTrigger>
            <div className="projetos-divisor-bottom">
              <DivisorSection fillClass="cor-branco" inverter={true} />
            </div>
          </div>
          <div className="projetos-itens container">
            <ScrollTrigger onEnter={() => setIsCabineVisible(true)}>
              <motion.div initial={{ opacity: 0 }} animate={controlsCabine}>
                <ItemProjetos
                  imagem={ProjetoCabine}
                  titulo={"Cabine de RV"}
                  descricao={
                    "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut."
                  }
                />
              </motion.div>
            </ScrollTrigger>
            <ScrollTrigger onEnter={() => setIsRoboVisible(true)}>
              <motion.div initial={{ opacity: 0 }} animate={controlsRobo}>
                <ItemProjetos
                  imagem={ProjetoRobo}
                  titulo={"Robôs de Combate"}
                  descricao={
                    "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut."
                  }
                />
              </motion.div>
            </ScrollTrigger>
            <ScrollTrigger onEnter={() => setIsSeguidorVisible(true)}>
              <motion.div initial={{ opacity: 0 }} animate={controlsSeguidor}>
                <ItemProjetos
                  imagem={ProjetoSeguidor}
                  titulo={"Seguidor de Linha"}
                  descricao={
                    "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut."
                  }
                />
              </motion.div>
            </ScrollTrigger>
          </div>
          <ScrollTrigger onEnter={() => setIsBotaoVisible(true)}>
            <div className="projetos-botao">
              <motion.div initial={{ opacity: 0 }} animate={controlsBotao}>
                <Botao texto={"Ver todos os projetos"} secundario={true} />
              </motion.div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </>
  );
};

export default Projetos;
