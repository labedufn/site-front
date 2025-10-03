import React from "react";
import { BiAtom } from "react-icons/bi";
import { BsClipboard2DataFill } from "react-icons/bs";
import { FaChalkboardTeacher, FaCode, FaGamepad, FaGithub, FaInstagram } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import IconeLattes from "../../assets/img/icons/lattes.svg";
import Container from "../../common/Container";
import { membros } from "../../data/membros-data";
import "../../styles/components/home/membros.css";
import ItemMembros from "./ItemMembros";
import SectionHeader from "./SectionHeader";

const Membros: React.FC = () => {
  const getIconeCurso = (curso: string) => {
    switch (curso.toLowerCase()) {
      case "ciência da computação":
        return <FaCode size={24} />;
      case "professor orientador":
        return <FaChalkboardTeacher size={24} />;
      case "engenharia biomédica":
        return <FaGears size={24} />;
      case "ppg nanociências":
        return <BiAtom size={24} />;
      case "jogos digitais":
        return <FaGamepad size={24} />;
      case "ciência de dados":
        return <BsClipboard2DataFill size={24} />;
      case "egresso":
        return <IoSchool size={24} />;
      default:
        return null;
    }
  };

  const criarRedesSociaisIcons = (emailContato: string, redesSociais: string[]) => {
    const redes = [emailContato, ...redesSociais];

    return redes.map((redeSocial, index) => {
      let icon;
      let link;
      let userEmail;

      if (redeSocial.includes("instagram.com")) {
        icon = <FaInstagram size={32} />;
        link = `https://${redeSocial}`;
      } else if (redeSocial.includes("github.com")) {
        icon = <FaGithub size={32} />;
        link = `https://${redeSocial}`;
      } else if (
        redeSocial.includes("http://lattes.cnpq.br/") ||
        redeSocial.includes("https://lattes.cnpq.br/")
      ) {
        icon = <img src={IconeLattes} alt="Lattes" style={{ width: 32, height: 32 }} />;
        link = redeSocial;
      } else {
        icon = <MdMailOutline size={32} />;
        userEmail = redeSocial;
        link = `mailto:${redeSocial}`;
      }

      return { icon, link, key: index, userEmail };
    });
  };

  membros.sort((a, b) => a.nome.localeCompare(b.nome));

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
            {membros.map((membro, index) => (
              <ItemMembros
                key={index}
                foto={
                  membro.foto
                    ? membro.foto
                    : "https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif"
                }
                nomeCompleto={membro.nome}
                nome={membro.nome.split(" ")[0]}
                curso={membro.curso}
                icone={getIconeCurso(membro.curso)}
                redesSociaisIcons={
                  membro.redesSociais && membro.redesSociais.length > 0
                    ? criarRedesSociaisIcons(membro.emailContato, membro.redesSociais)
                    : [
                        {
                          icon: <MdMailOutline size={32} />,
                          link: `mailto:${membro.emailContato}`,
                          key: 0,
                          userEmail: membro.emailContato,
                        },
                      ]
                }
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Membros;
