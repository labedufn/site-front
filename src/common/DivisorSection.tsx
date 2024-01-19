import React from "react";
import "../assets/css/components/itens-hero.css";
import DivisorBottom from "../assets/img/utils/divisor_section_bottom.svg";
import DivisorTop from "../assets/img/utils/divisor_section_top.svg";

interface DivisorSectionProps {
  inverter?: boolean;
}

const DivisorSection: React.FC<DivisorSectionProps> = ({ inverter = false }) => {
  const ImagemUrl = inverter ? DivisorBottom : DivisorTop;

  return (
    <>
      <img src={ImagemUrl} className="divisor" />
    </>
  );
};

export default DivisorSection;
