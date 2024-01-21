import React from "react";
import "../../assets/css/components/home/itens-hero.css";
import EletronicaIcon from "../../assets/img/icons/eletronica.svg";
import ProgramacaoIcon from "../../assets/img/icons/programacao.svg";
import RoboticaIcon from "../../assets/img/icons/robotica.svg";
import ItemConteudo from "./ItemConteudo";

const ItensHero: React.FC = () => {
  return (
    <>
      <div className="itens-bg">
        <div className="itens container">
          <ItemConteudo
            icone={EletronicaIcon}
            titulo={"ELETRÔNICA"}
            descricao={"Eletrônica aplicada a projetos reais."}
          />

          <ItemConteudo
            icone={ProgramacaoIcon}
            titulo={"PROGRAMAÇÃO"}
            descricao={"Desenvolvimento de softwares e aplicações."}
          />

          <ItemConteudo
            icone={RoboticaIcon}
            titulo={"ROBÓTICA"}
            descricao={"Criação de robôs para competição."}
          />
        </div>
      </div>
    </>
  );
};

export default ItensHero;
