import React from "react";
import "../../assets/css/components/home/projetos.css";
import "../../assets/css/utils/cores.css";
import ProjetoCabine from "../../assets/img/fotos/cabine_rv.png";
import ProjetoSeguidor from "../../assets/img/fotos/robo_seguidor.png";
import ProjetoRobo from "../../assets/img/fotos/robos_combate.png";
import DivisorSection from "../../common/DivisorSection";
import Botao from "./Botao";
import ItemProjetos from "./ItemProjetos";

const Projetos: React.FC = () => {
  return (
    <>
      <section className="projetos-bg">
        <div className="projetos">
          <div className="projetos-header">
            <div className="projetos-divisor-top">
              <DivisorSection fillClass="cor-branco" />
            </div>
            <h2 className="projetos-titulo">Projetos</h2>
            <div className="projetos-divisor-bottom">
              <DivisorSection fillClass="cor-branco" inverter={true} />
            </div>
          </div>
          <div className="projetos-itens container">
            <ItemProjetos
              imagem={ProjetoCabine}
              titulo={"Cabine de RV"}
              descricao={
                "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut."
              }
            />
            <ItemProjetos
              imagem={ProjetoRobo}
              titulo={"Robôs de Combate"}
              descricao={
                "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut."
              }
            />
            <ItemProjetos
              imagem={ProjetoSeguidor}
              titulo={"Seguidor de Linha"}
              descricao={
                "Lorem ipsum dolor sit amet consectetur. Sodales sed enim pretium interdum duis. Ipsum sed enim sed nisl tortor faucibus ut."
              }
            />
          </div>
          <div className="projetos-botao">
            <Botao texto={"Ver todos os projetos"} secundario={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projetos;
