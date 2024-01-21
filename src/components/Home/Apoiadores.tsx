import React from "react";
import "../../assets/css/components/home/apoiadores.css";
import "../../assets/css/utils/cores.css";
import CienciaComputacao from "../../assets/img/apoiadores/ciencia_computacao.svg";
import EngenhariaBiomedica from "../../assets/img/apoiadores/engenharia_biomedica.svg";
import JogosDigitais from "../../assets/img/apoiadores/jogos_digitais.svg";
import SistemasInformacao from "../../assets/img/apoiadores/sistemas_informacao.svg";
import Ufn from "../../assets/img/apoiadores/ufn.svg";
import Ufnbotz from "../../assets/img/apoiadores/ufnbotz.svg";
import DivisorSection from "../../common/DivisorSection";

const Apoiadores: React.FC = () => {
  return (
    <section>
      <div className="apoiadores-bg">
        <DivisorSection fillClass="cor-branco" />
        <div className="apoiadores-titulo">
          <h3>Apoiadores</h3>
        </div>
        <div className="apoiadores-logos container">
          <img src={Ufn} />
          <img src={Ufnbotz} />
          <img src={JogosDigitais} />
          <img src={SistemasInformacao} />
          <img src={CienciaComputacao} />
          <img src={EngenhariaBiomedica} />
        </div>
      </div>
    </section>
  );
};

export default Apoiadores;
