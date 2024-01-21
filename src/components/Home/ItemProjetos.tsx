import React from "react";
import "../../assets/css/components/home/item-projetos.css";

interface ItemProjetosProps {
  imagem: string;
  titulo: string;
  descricao: string;
}

const ItemProjetos: React.FC<ItemProjetosProps> = ({ imagem, titulo, descricao }) => {
  return (
    <>
      <div className="item-projetos">
        <img src={imagem} alt={titulo} className="item-projetos-imagem" />
        <div className="item-projetos-info">
          <h3 className="item-projetos-titulo">{titulo}</h3>
          <p className="item-projetos-descricao">{descricao}</p>
        </div>
      </div>
    </>
  );
};

export default ItemProjetos;
