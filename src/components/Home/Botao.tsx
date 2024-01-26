import React from "react";
import "../../assets/css/components/home/botao.css";

interface BotaoProps {
  texto: string;
  secundario?: boolean;
  onClick?: () => void;
}

const Botao: React.FC<BotaoProps> = ({ texto, secundario = false, onClick }) => {
  const buttonClass = secundario ? "botao botao-outline" : "botao";

  return (
    <>
      <button className={buttonClass} onClick={onClick}>
        {texto}
      </button>
    </>
  );
};

export default Botao;
