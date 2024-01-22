import "../../assets/css/components/home/apoiadores.css"; // Certifique-se de que o CSS do slider está aqui
import "../../assets/css/utils/cores.css";
import CienciaComputacao from "../../assets/img/apoiadores/ciencia_computacao.svg";
import EngenhariaBiomedica from "../../assets/img/apoiadores/engenharia_biomedica.svg";
import JogosDigitais from "../../assets/img/apoiadores/jogos_digitais.svg";
import SistemasInformacao from "../../assets/img/apoiadores/sistemas_informacao.svg";
import Ufn from "../../assets/img/apoiadores/ufn.svg";
import Ufnbotz from "../../assets/img/apoiadores/ufnbotz.svg";
import DivisorSection from "../../common/DivisorSection";

const Apoiadores = () => {
  const logos = [
    Ufn,
    Ufnbotz,
    JogosDigitais,
    SistemasInformacao,
    CienciaComputacao,
    EngenhariaBiomedica,
  ];

  return (
    <section>
      <div className="apoiadores-bg">
        <DivisorSection fillClass="cor-branco" />
        <div className="apoiadores-titulo">
          <h3>Apoiadores</h3>
        </div>
        <div className="apoiadores-logos container">
          <div className="slider">
            <div className="slide-track">
              {logos.map((logo, index) => (
                <div className="slide" key={index}>
                  <img src={logo} alt={`Logo ${index + 1}`} />
                </div>
              ))}
              {logos.map((logo, index) => (
                <div className="slide" key={`duplicate-${index}`}>
                  <img src={logo} alt={`Logo duplicate ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apoiadores;
