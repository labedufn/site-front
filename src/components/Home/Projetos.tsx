import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import "../../assets/css/components/home/projetos.css";
import "../../assets/css/utils/cores.css";
import ProjetoCabine from "../../assets/img/fotos/cabine_rv.png";
import ProjetoSeguidorLinha from "../../assets/img/fotos/robo_seguidor.png";
import ProjetoRobos from "../../assets/img/fotos/robos_combate.png";
import AnimacaoFadeCrescente from "../../common/AnimacaoFadeCrescente";
import DivisorSection from "../../common/DivisorSection";
import Botao from "./Botao";
import ItemProjetos from "./ItemProjetos";

const Projetos: React.FC = () => {
  const controlsTitulo = useAnimation();
  const controlsBotao = useAnimation();
  const controlsProjetos = useAnimation();

  const [isTituloVisible, setIsTituloVisible] = useState(false);
  const [isBotaoVisible, setIsBotaoVisible] = useState(false);
  const [isProjetosVisible, setIsProjetosVisible] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projetos = [
    {
      imagem: ProjetoCabine,
      titulo: "Cabine de RV",
      descricao:
        "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut.",
      link: "",
    },
    {
      imagem: ProjetoRobos,
      titulo: "Robôs de Combate",
      descricao:
        "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut.",
      link: "",
    },
    {
      imagem: ProjetoSeguidorLinha,
      titulo: "Seguidor de Linha",
      descricao:
        "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut.",
      link: "",
    },
    {
      imagem: ProjetoSeguidorLinha,
      titulo: "Seguidor de Linha",
      descricao:
        "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut.",
      link: "",
    },
    {
      imagem: ProjetoSeguidorLinha,
      titulo: "Seguidor de Linha",
      descricao:
        "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut.",
      link: "",
    },
  ];

  const visibleProjects = showAllProjects ? projetos : projetos.slice(0, 3);

  useEffect(() => {
    controlsTitulo.start({ opacity: 0 });

    if (isTituloVisible) {
      controlsTitulo.start({ opacity: 1, transition: { duration: 0.5, delay: 0.1 } });
    }

    controlsProjetos.start({ opacity: 0 });

    if (isProjetosVisible) {
      controlsProjetos.start({ opacity: 1, transition: { duration: 0.5, delay: 0.2 } });
    }

    controlsBotao.start({ opacity: 0 });

    if (isBotaoVisible) {
      controlsBotao.start({ opacity: 1, transition: { duration: 0.5, delay: 0.4 } });
    }
  }, [
    isTituloVisible,
    isProjetosVisible,
    isBotaoVisible,
    controlsTitulo,
    controlsProjetos,
    controlsBotao,
  ]);

  return (
    <>
      <section id="projetos" className="projetos-bg">
        <div className="projetos">
          <div className="projetos-header">
            <div className="projetos-divisor-top">
              <DivisorSection fillClass="cor-branco" />
            </div>
            <ScrollTrigger onEnter={() => setIsTituloVisible(true)}>
              <AnimacaoFadeCrescente controls={controlsTitulo}>
                <motion.h2 className="projetos-titulo">Projetos</motion.h2>
              </AnimacaoFadeCrescente>
            </ScrollTrigger>
            <div className="projetos-divisor-bottom">
              <DivisorSection fillClass="cor-branco" inverter={true} />
            </div>
          </div>
          <div className="projetos-itens container">
            {visibleProjects.map((projeto, index) => (
              <ScrollTrigger key={index} onEnter={() => setIsProjetosVisible(true)}>
                <AnimacaoFadeCrescente controls={controlsProjetos}>
                  <ItemProjetos
                    imagem={projeto.imagem}
                    titulo={projeto.titulo}
                    descricao={projeto.descricao}
                    link={projeto.link}
                  />
                </AnimacaoFadeCrescente>
              </ScrollTrigger>
            ))}
          </div>
          <ScrollTrigger onEnter={() => setIsBotaoVisible(true)}>
            <div className="projetos-botao">
              <AnimacaoFadeCrescente controls={controlsBotao}>
                <Botao
                  texto={showAllProjects ? "Ver menos projetos" : "Ver todos os projetos"}
                  secundario={true}
                  onClick={() => setShowAllProjects(!showAllProjects)}
                />
              </AnimacaoFadeCrescente>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </>
  );
};

export default Projetos;
