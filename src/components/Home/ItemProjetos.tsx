import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/home/item-projetos.css";
import ModalProjetos from "./ModalProjetos";

interface ItemProjetosProps {
  link: string;
  imagem: string;
  titulo: string;
  descricao: string;
}

const ItemProjetos: React.FC<ItemProjetosProps> = ({ link, imagem, titulo, descricao }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="item-projetos">
        <NavLink to={link} className="item-link" onClick={handleOpenModal}>
          <div>
            <div className="item-projetos-imagem-container">
              <img src={imagem} alt={titulo} className="item-projetos-imagem" />
            </div>
            <div className="item-projetos-info">
              <h3 className="item-projetos-titulo font-1-sl">{titulo}</h3>
              <p className="item-projetos-descricao font-2-sm">{descricao}</p>
            </div>
          </div>
        </NavLink>
      </div>

      <ModalProjetos
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        titulo={titulo}
        imagem={imagem}
        descricao={descricao}
      />
    </>
  );
};

export default ItemProjetos;
