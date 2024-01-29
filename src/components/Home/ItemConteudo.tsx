import React from "react";
import "../../styles/components/home/item-conteudo.css";

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
        <h3 className="font-1-m-b">{titulo}</h3>
        <p className="font-2-sl">{descricao}</p>
      </div>
    </>
  );
};

export default ItemConteudo;
