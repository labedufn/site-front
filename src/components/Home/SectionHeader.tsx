import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import AnimacaoFadeCrescente from "../../common/AnimacaoFadeCrescente";
import DivisorSection from "../../common/DivisorSection";
import "../../styles/components/home/section-header.css";

interface SectionHeaderProps {
  titulo: string;
  corBackground: string;
  corTexto: string;
  corDivisor: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  titulo,
  corBackground,
  corTexto,
  corDivisor,
}) => {
  const controlsTitulo = useAnimation();
  const [isTituloVisible, setIsTituloVisible] = useState(false);

  useEffect(() => {
    controlsTitulo.start({ opacity: 0 });

    if (isTituloVisible) {
      controlsTitulo.start({ opacity: 1, transition: { duration: 0.5, delay: 0.1 } });
    }
  }, [isTituloVisible, controlsTitulo]);

  const sectionHeaderClasses = `section-header ${corBackground}`;
  const sectionHeaderTituloClasses = `section-header-titulo font-1-l-b ${corTexto}`;

  return (
    <div className={sectionHeaderClasses}>
      <div className="section-header-divisor-top">
        <DivisorSection fillClass={corDivisor} />
      </div>
      <ScrollTrigger onEnter={() => setIsTituloVisible(true)}>
        <AnimacaoFadeCrescente controls={controlsTitulo}>
          <motion.h2 className={sectionHeaderTituloClasses}>{titulo}</motion.h2>
        </AnimacaoFadeCrescente>
      </ScrollTrigger>
      <div className="section-header-divisor-bottom">
        <DivisorSection fillClass={corDivisor} inverter={true} />
      </div>
    </div>
  );
};

export default SectionHeader;
