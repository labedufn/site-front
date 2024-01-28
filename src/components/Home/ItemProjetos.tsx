import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/components/home/item-projetos.css";

interface ItemProjetosProps {
  link: string;
  imagem: string;
  titulo: string;
  descricao: string;
}

const ItemProjetos: React.FC<ItemProjetosProps> = ({ link, imagem, titulo, descricao }) => {
  return (
    <>
      <div className="item-projetos">
        <NavLink to={link} className="item-link">
          <div className="item-projetos-imagem-container">
            <img src={imagem} alt={titulo} className="item-projetos-imagem" />
          </div>
          <div className="item-projetos-info">
            <h3 className="item-projetos-titulo">{titulo}</h3>
            <p className="item-projetos-descricao">{descricao}</p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default ItemProjetos;
