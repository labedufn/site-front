import React from "react";
import { FaCode, FaGithub, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import Container from "../../common/Container";
import "../../styles/components/home/membros.css";
import ItemMembros from "./ItemMembros";
import SectionHeader from "./SectionHeader";

const Membros: React.FC = () => {
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
      nome: "Alessandro",
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
        <SectionHeader
          titulo="Membros"
          corBackground="cor-neutra1"
          corDivisor="cor-branco"
          corTexto="cor-branco-texto"
        />
        <Container>
          <div className="membros">
            {membrosData.map((membro, index) => (
              <ItemMembros key={index} {...membro} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Membros;
