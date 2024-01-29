import React from "react";
import "../../styles/components/home/botao.css";

interface BotaoProps {
  texto: string;
  secundario?: boolean;
  onClick?: () => void;
}

const Botao: React.FC<BotaoProps> = ({ texto, secundario = false, onClick }) => {
  const buttonClass = secundario ? "botao botao-outline font-2-sm-b" : "botao font-2-sm-b";

  return (
    <>
      <button className={buttonClass} onClick={onClick}>
        {texto}
      </button>
    </>
  );
};

export default Botao;
