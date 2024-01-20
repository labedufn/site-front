import React from "react";
import "../../assets/css/components/item-conteudo.css";

interface ItemConteudoProps {
  icone: string;
  titulo: string;
  descricao: string;
}

const ItemConteudo: React.FC<ItemConteudoProps> = ({ icone, titulo, descricao }) => {
  return (
    <>
      <div className="item">
        <img src={icone} alt={titulo} />
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </>
  );
};

export default ItemConteudo;
