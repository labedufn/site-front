import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCode, FaGithub, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import ScrollTrigger from "react-scroll-trigger";
import "../../assets/css/components/home/membros.css";
import "../../assets/css/utils/cores.css";
import AnimacaoFadeCrescente from "../../common/AnimacaoFadeCrescente";
import DivisorSection from "../../common/DivisorSection";
import ItemMembros from "./ItemMembros";

const Membros: React.FC = () => {
  const controlsTitulo = useAnimation();
  const controlsMembros = useAnimation();

  const [isTituloVisible, setIsTituloVisible] = useState(false);
  const [isMembrosVisible, setIsMembrosVisible] = useState(false);

  useEffect(() => {
    controlsTitulo.start({ opacity: 0 });

    if (isTituloVisible) {
      controlsTitulo.start({ opacity: 1, transition: { duration: 0.5, delay: 0.1 } });
    }

    controlsMembros.start({ opacity: 0 });

    if (isMembrosVisible) {
      controlsMembros.start({ opacity: 1, transition: { duration: 0.5, delay: 0.4 } });
    }
  }, [isTituloVisible, isMembrosVisible, controlsTitulo, controlsMembros]);

  const membrosData = [
    {
      foto: "https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",
      nome: "Nome",
      curso: "Ciência da Computação",
      nomeCompleto: "Nome Completo",
      icone: <FaCode size={24} />,
      redesSociaisIcons: [
        { icon: <MdMailOutline size={32} />, link: "mailto:teste@teste.com" },
        { icon: <FaGithub size={32} />, link: "/" },
        { icon: <FaInstagram size={32} />, link: "/" },
      ],
    },
    {
      foto: "https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",
      nome: "Nome",
      curso: "Ciência da Computação",
      nomeCompleto: "Nome Completo",
      icone: <FaCode size={24} />,
      redesSociaisIcons: [
        { icon: <MdMailOutline size={32} />, link: "mailto:teste@teste.com" },
        { icon: <FaGithub size={32} />, link: "/" },
        { icon: <FaInstagram size={32} />, link: "/" },
      ],
    },
    {
      foto: "https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",
      nome: "Nome",
      curso: "Ciência da Computação",
      nomeCompleto: "Nome Completo",
      icone: <FaCode size={24} />,
      redesSociaisIcons: [
        { icon: <MdMailOutline size={32} />, link: "mailto:teste@teste.com" },
        { icon: <FaGithub size={32} />, link: "/" },
        { icon: <FaInstagram size={32} />, link: "/" },
      ],
    },
    {
      foto: "https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",
      nome: "Nome",
      curso: "Ciência da Computação",
      nomeCompleto: "Nome Completo",
      icone: <FaCode size={24} />,
      redesSociaisIcons: [
        { icon: <MdMailOutline size={32} />, link: "mailto:teste@teste.com" },
        { icon: <FaGithub size={32} />, link: "/" },
        { icon: <FaInstagram size={32} />, link: "/" },
      ],
    },
    {
      foto: "https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",
      nome: "Nome",
      curso: "Ciência da Computação",
      nomeCompleto: "Nome Completo",
      icone: <FaCode size={24} />,
      redesSociaisIcons: [
        { icon: <MdMailOutline size={32} />, link: "mailto:teste@teste.com" },
        { icon: <FaGithub size={32} />, link: "/" },
        { icon: <FaInstagram size={32} />, link: "/" },
      ],
    },
    {
      foto: "https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",
      nome: "Nome",
      curso: "Ciência da Computação",
      nomeCompleto: "Nome Completo",
      icone: <FaCode size={24} />,
      redesSociaisIcons: [
        { icon: <MdMailOutline size={32} />, link: "mailto:teste@teste.com" },
        { icon: <FaGithub size={32} />, link: "/" },
        { icon: <FaInstagram size={32} />, link: "/" },
      ],
    },
    {
      foto: "https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",
      nome: "Nome",
      curso: "Ciência da Computação",
      nomeCompleto: "Nome Completo",
      icone: <FaCode size={24} />,
      redesSociaisIcons: [
        { icon: <MdMailOutline size={32} />, link: "mailto:teste@teste.com" },
        { icon: <FaGithub size={32} />, link: "/" },
        { icon: <FaInstagram size={32} />, link: "/" },
      ],
    },
  ];

  return (
    <>
      <section id="membros" className="membros-bg">
        <ScrollTrigger onEnter={() => setIsTituloVisible(true)}>
          <AnimacaoFadeCrescente controls={controlsTitulo}>
            <div className="membros-header">
              <div className="membros-divisor-top">
                <DivisorSection fillClass="cor-branco" />
              </div>
              <ScrollTrigger onEnter={() => setIsTituloVisible(true)}>
                <AnimacaoFadeCrescente controls={controlsTitulo}>
                  <motion.h2 className="membros-titulo">membros</motion.h2>
                </AnimacaoFadeCrescente>
              </ScrollTrigger>
              <div className="membros-divisor-bottom">
                <DivisorSection fillClass="cor-branco" inverter={true} />
              </div>
            </div>
          </AnimacaoFadeCrescente>
        </ScrollTrigger>
        <ScrollTrigger onEnter={() => setIsMembrosVisible(true)}>
          <AnimacaoFadeCrescente controls={controlsMembros}>
            <motion.div className="membros container">
              {membrosData.map((membro, index) => (
                <ItemMembros key={index} {...membro} />
              ))}
            </motion.div>
          </AnimacaoFadeCrescente>
        </ScrollTrigger>
      </section>
    </>
  );
};

export default Membros;
