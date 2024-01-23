import React from "react";
import "../../assets/css/components/home/botao.css";

interface BotaoProps {
  texto: string;
  secundario?: boolean;
}

const Botao: React.FC<BotaoProps> = ({ texto, secundario = false }) => {
  const buttonClass = secundario ? "botao botao-outline" : "botao";

  return (
    <>
      <button className={buttonClass}>{texto}</button>
    </>
  );
};

export default Botao;
