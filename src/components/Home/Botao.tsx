import React from "react";
import "../../assets/css/components/home/botao.css";

interface BotaoProps {
  texto: string;
}

const Botao: React.FC<BotaoProps> = ({ texto }) => {
  return (
    <>
      <button className="botao">{texto}</button>
    </>
  );
};

export default Botao;
