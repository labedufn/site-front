import React from "react";
import "../assets/css/components/itens-hero.css";
import EletronicaIcon from "../assets/img/icons/eletronica.svg";
import ProgramacaoIcon from "../assets/img/icons/programacao.svg";
import RoboticaIcon from "../assets/img/icons/robotica.svg";
import ItemConteudo from "./ItemConteudo";

const ItensHero: React.FC = () => {
  return (
    <>
      <div className="itens-bg">
        <div className="itens container">
          <ItemConteudo
            icone={EletronicaIcon}
            titulo={"ELETRÔNICA"}
            descricao={"Lorem ipsum dolor sit amet consectetur."}
          />

          <ItemConteudo
            icone={ProgramacaoIcon}
            titulo={"PROGRAMAÇÃO"}
            descricao={"Lorem ipsum dolor sit amet consectetur."}
          />

          <ItemConteudo
            icone={RoboticaIcon}
            titulo={"ROBÓTICA"}
            descricao={"Lorem ipsum dolor sit amet consectetur."}
          />
        </div>
      </div>
    </>
  );
};

export default ItensHero;
