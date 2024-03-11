import { useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import AnimacaoFadeCrescente from "../../common/AnimacaoFadeCrescente";
import Container from "../../common/Container";
import { projetos } from "../../data/projetos-data";
import "../../styles/components/home/projetos.css";
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

  const visibleProjects = showAllProjects ? projetos : projetos.slice(0, 3);

  const criarSlug = (titulo: string) => {
    const timestamp = Date.now();
    const valorAleatorio = Math.random().toString(36).substring(2, 15);
    const baseHash = `${titulo}-${timestamp}-${valorAleatorio}`;
    const hashSimples = baseHash.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);

    return (
      titulo
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ /g, "-") + `+${Math.abs(hashSimples).toString(36)}`
    );
  };

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
                      thumbnail={projeto.thumbnail}
                      imagem={projeto.imagem}
                      titulo={projeto.titulo}
                      descricao={projeto.descricao}
                      conteudo={projeto.conteudo}
                      slug={criarSlug(projeto.titulo)}
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
