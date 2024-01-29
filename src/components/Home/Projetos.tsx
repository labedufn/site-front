import { useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import AnimacaoFadeCrescente from "../../common/AnimacaoFadeCrescente";
import Container from "../../common/Container";
import "../../styles/components/home/projetos.css";
import "../../styles/utils/cores.css";
import Botao from "./Botao";
import ItemProjetos from "./ItemProjetos";
import SectionHeader from "./SectionHeader";

const Projetos: React.FC = () => {
  const controlsTitulo = useAnimation();
  const controlsBotao = useAnimation();
  const controlsProjetos = useAnimation();

  const [isBotaoVisible, setIsBotaoVisible] = useState(false);
  const [isProjetosVisible, setIsProjetosVisible] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projetosData = [
    {
      imagem: "https://placehold.co/720x520.png",
      titulo: "Nome Projeto",
      descricao:
        "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut.",
      link: "",
    },
    {
      imagem: "https://placehold.co/720x520.png",
      titulo: "Nome Projeto",
      descricao:
        "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut.",
      link: "",
    },
    {
      imagem: "https://placehold.co/720x520.png",
      titulo: "Nome Projeto",
      descricao:
        "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut.",
      link: "",
    },
    {
      imagem: "https://placehold.co/720x520.png",
      titulo: "Nome Projeto",
      descricao:
        "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut.",
      link: "",
    },
    {
      imagem: "https://placehold.co/720x520.png",
      titulo: "Nome Projeto",
      descricao:
        "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut.",
      link: "",
    },
    {
      imagem: "https://placehold.co/720x520.png",
      titulo: "Nome Projeto",
      descricao:
        "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut.",
      link: "",
    },
  ];

  const visibleProjects = showAllProjects ? projetosData : projetosData.slice(0, 3);

  useEffect(() => {
    controlsTitulo.start({ opacity: 0 });

    controlsProjetos.start({ opacity: 0 });

    if (isProjetosVisible) {
      controlsProjetos.start({ opacity: 1, transition: { duration: 0.5, delay: 0.2 } });
    }

    controlsBotao.start({ opacity: 0 });

    if (isBotaoVisible) {
      controlsBotao.start({ opacity: 1, transition: { duration: 0.5, delay: 0.4 } });
    }
  }, [isProjetosVisible, isBotaoVisible, controlsTitulo, controlsProjetos, controlsBotao]);

  return (
    <>
      <section id="projetos" className="projetos-bg">
        <div className="projetos">
          <SectionHeader
            titulo="Projetos"
            corBackground={"cor-primaria1"}
            corTexto={"cor-neutra1-texto"}
            corDivisor={"cor-branco"}
          />
          <Container>
            <div className="projetos-itens">
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
          </Container>
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
