// Import necessary modules
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { NavLink } from "react-router-dom";
import "../../assets/css/components/home/item-membros.css";

// Define the prop types
interface ItemMembrosProps {
  foto: string;
  nome: string;
  curso: string;
  nomeCompleto: string;
  icone: React.ReactNode;
  redesSociaisIcons?: { icon: React.ReactNode; link: string }[];
}

// Define the functional component
const ItemMembros: React.FC<ItemMembrosProps> = ({
  foto,
  nome,
  curso,
  nomeCompleto,
  icone,
  redesSociaisIcons,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [frontHeight, setFrontHeight] = useState<React.CSSProperties["height"] | undefined>(
    undefined
  );
  const [frontWidth, setFrontWidth] = useState<React.CSSProperties["width"] | undefined>(undefined);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const handleFrontLoad = (event: React.SyntheticEvent<HTMLDivElement>) => {
    if (event.currentTarget) {
      setFrontHeight(event.currentTarget.offsetHeight);
      setFrontWidth(event.currentTarget.offsetWidth);
    }
  };

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="card-container"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <div className="item-membros" onLoad={handleFrontLoad}>
            <img className="item-membros-img" src={foto} alt={nome} />
            <div className="item-membros-infos">
              <h3 className="item-membros-nome">{nome}</h3>
              <p className="item-membros-curso">{curso}</p>
            </div>
          </div>
        </div>

        <div className="item-membros-back" style={{ height: frontHeight, width: frontWidth }}>
          <div className="item-membros-infos-back">
            <h3 className="item-membros-nome-back">{nome}</h3>
            <p className="item-membros-nome-completo-back">{nomeCompleto}</p>
            <div className="item-membros-curso-container-back">
              {icone}
              <p className="item-membros-curso-back">{curso}</p>
            </div>
          </div>
          <div className="item-membros-redes-back">
            {redesSociaisIcons?.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleIconClick}
              >
                {item.icon}
              </NavLink>
            ))}
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default ItemMembros;
