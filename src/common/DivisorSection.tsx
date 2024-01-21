import React from "react";

interface DivisorSectionProps {
  fillClass?: string;
  inverter?: boolean;
}

const DivisorSection: React.FC<DivisorSectionProps> = ({ fillClass, inverter }) => {
  return (
    <>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1440 76"
        fill="#22B5D3"
        xmlns="http://www.w3.org/2000/svg"
        className={`divisor ${inverter ? "invertido" : ""}`}
      >
        <path
          d="M706.098 7.77107L0 76V0H1440V6.5L732.404 74.7318C725.354 75.4116 719.252 69.8697 719.252 62.7872V19.7154C719.252 12.6319 713.149 7.08978 706.098 7.77107Z"
          className={fillClass}
        />
      </svg>
    </>
  );
};

export default DivisorSection;
