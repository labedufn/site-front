import React from "react";
import "../../assets/css/components/sobre.css";
import Foto from "../../assets/img/ilustracoes/chiko_desenho.svg";
import Botao from "./Botao";

interface SobreProps {
  subtitulo: string;
  titulo: string;
  paragrafo: string;
}

const Sobre: React.FC<SobreProps> = ({ subtitulo, titulo, paragrafo }) => {
  return (
    <>
      <div className="sobre">
        <div className="sobre-content container">
          <div className="sobre-textos">
            <h2 className="subtitulo">{subtitulo}</h2>
            <h1 className="titulo">{titulo}</h1>
            <p className="paragrafo">{paragrafo}</p>
            <Botao texto="Conheça os membros" />
          </div>
          <img src={Foto} alt="Robô" className="sobre-imagem" />
        </div>
        <div className="teste"></div>
      </div>
    </>
  );
};

export default Sobre;
