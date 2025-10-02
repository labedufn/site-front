import React from "react";
import { FaCode, FaGithub, FaInstagram } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";
import { IoSchool } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
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
        return <IoSchool size={24} />;
      case "engenharia biomédica":
        return <FaGears size={24} />;
      case "ppg nanociências":
        return <GiMaterialsScience size={24} />;
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
