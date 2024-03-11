// Import necessary modules
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import ScrollTrigger from "react-scroll-trigger";
import AnimacaoFadeCrescente from "../../common/AnimacaoFadeCrescente";
import "../../styles/components/home/item-membros.css";

interface ItemMembrosProps {
  foto?: string;
  nome: string;
  curso: string;
  nomeCompleto: string;
  icone: React.ReactNode;
  redesSociaisIcons?: { icon: React.ReactNode; link: string }[];
}

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

  const controlsMembros = useAnimation();

  const [isMembrosVisible, setIsMembrosVisible] = useState(false);

  useEffect(() => {
    controlsMembros.start({ opacity: 0 });

    if (isMembrosVisible) {
      controlsMembros.start({ opacity: 1, transition: { duration: 0.5, delay: 0.4 } });
    }
  }, [isMembrosVisible, controlsMembros]);

  return (
    <>
      <ScrollTrigger onEnter={() => setIsMembrosVisible(true)}>
        <AnimacaoFadeCrescente controls={controlsMembros}>
          <motion.div
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <div className="item-membros" onLoad={handleFrontLoad}>
                <img className="item-membros-img" src={foto} alt={nome} />
                <div className="item-membros-infos">
                  <h3 className="item-membros-nome font-1-sl">{nome}</h3>
                  <p className="item-membros-curso font-2-sm">{curso}</p>
                </div>
              </div>

              <div className="item-membros-back" style={{ height: frontHeight, width: frontWidth }}>
                <div className="item-membros-infos-back">
                  <h3 className="item-membros-nome-back font-1-sl">{nome}</h3>
                  <p className="item-membros-nome-completo-back font-2-sm">{nomeCompleto}</p>
                  <div className="item-membros-curso-container-back">
                    {icone}
                    <p className="item-membros-curso-back font-2-sm-b">{curso}</p>
                  </div>
                </div>
                <div className="item-membros-redes-back">
                  {redesSociaisIcons?.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleIconClick}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </ReactCardFlip>
          </motion.div>
        </AnimacaoFadeCrescente>
      </ScrollTrigger>
    </>
  );
};

export default ItemMembros;
