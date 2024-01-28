import React from "react";
import { FaChalkboardTeacher, FaCode, FaGithub, FaInstagram } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

import { MdMailOutline } from "react-icons/md";
import "../../assets/css/components/home/membros.css";
import "../../assets/css/utils/cores.css";
import DivisorSection from "../../common/DivisorSection";
import ItemMembros from "./ItemMembros";

const Membros: React.FC = () => {
  const redes = [
    { icon: <MdMailOutline size={32} />, link: "mailto:mauprb@gmail.com" },
    { icon: <FaGithub size={32} />, link: "/" },
    { icon: <FaInstagram size={32} />, link: "/" },
  ];
  return (
    <>
      <section id="membros" className="membros-bg">
        <DivisorSection fillClass="cor-branco" />
        <h2 className="membros-titulo">Membros</h2>
        <div className="membros container">
          <ItemMembros
            foto={"https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif"}
            nome={"Mauricio"}
            curso={"Ciência da Computação"}
            nomeCompleto={"Mauricio Pereira Braga"}
            icone={<FaCode size={24} />}
            redesSociaisIcons={redes}
          />
          <ItemMembros
            foto={"https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif"}
            nome={"Alessandro"}
            curso={"Professor Orientador"}
            nomeCompleto={"Alessandro André Mainardi de Oliveira"}
            icone={<FaChalkboardTeacher size={24} />}
          />
          <ItemMembros
            foto={"https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif"}
            nome={"Gabriel"}
            curso={"Ciência da Computação"}
            nomeCompleto={"	Gabriel Azenha Fachim"}
            icone={<FaCode size={24} />}
          />
          <ItemMembros
            foto={"https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif"}
            nome={"Lourdinha"}
            curso={"Engenharia Biomédica"}
            nomeCompleto={"Lourdes Maria Favarin"}
            icone={<FaGears size={24} />}
          />
          <ItemMembros
            foto={"https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif"}
            nome={"Matheus"}
            curso={"Ciência da Computação"}
            nomeCompleto={"Matheus Machado Faccin"}
            icone={<FaCode size={24} />}
          />
          <ItemMembros
            foto={"https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif"}
            nome={"Kalleby"}
            curso={"Ciência da Computação"}
            nomeCompleto={"Kalleby Evangelho Mota"}
            icone={<FaCode size={24} />}
          />
        </div>
      </section>
    </>
  );
};

export default Membros;
