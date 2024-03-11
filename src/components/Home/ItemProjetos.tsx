import React, { useEffect, useState } from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/components/home/item-projetos.css";

interface ItemProjetosProps {
  thumbnail: string;
  imagem: string[];
  titulo: string;
  descricao: string;
  conteudo: string;
  slug: string;
}

const ItemProjetos: React.FC<ItemProjetosProps> = ({
  thumbnail,
  imagem,
  titulo,
  descricao,
  conteudo,
  slug,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const urlSlug = window.location.pathname.split("/").pop();
    if (urlSlug && decodeURIComponent(urlSlug) === slug) {
      setIsModalOpen(true);
      document.body.classList.add("modal-projetos-open");
    }
  }, [slug]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-projetos-open");
    window.history.pushState(null, "", `/projetos/${slug}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-projetos-open");
    window.history.replaceState(null, "", "/");
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("modal-projetos-open");
    };
  }, []);

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  };

  const shareOnWhatsApp = () => {
    const message = `Confira o projeto do LABED - ${titulo}: ${window.location.href}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const shareOnTwitter = () => {
    const message = `Confira o projeto do LABED - ${titulo}: ${window.location.href}`;
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="item-projetos">
        <div className="item-link" onClick={handleOpenModal}>
          <div className="item-projetos-imagem-container">
            <img src={thumbnail} alt={titulo} className="item-projetos-imagem" />
          </div>
          <div className="item-projetos-info">
            <h3 className="item-projetos-titulo font-1-sl">{titulo}</h3>
            <p className="item-projetos-descricao font-2-sm">{descricao}</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        className="modal-projetos"
        overlayClassName="modal-projetos-overlay"
      >
        <div className="modal-projetos-fechar">
          <IoClose size={40} onClick={handleCloseModal} />
        </div>
        <div className="modal-projetos-conteudo">
          {imagem.length > 1 ? (
            <Swiper
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Navigation, Pagination]}
              className="mySwiper"
            >
              {imagem.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`Slide ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            imagem.length === 1 && <img src={imagem[0]} alt={titulo} className="single-image" />
          )}
          <div className="modal-projetos-info">
            <h3 className="font-1-m-b">{titulo}</h3>
            <p className="font-2-sm">{conteudo}</p>
            <div className="modal-projetos-redes">
              <p className="font-2-sm">Compartilhar:</p>
              <div className="modal-icon" onClick={shareOnFacebook}>
                <FaFacebookF size={16} />
              </div>
              <div className="modal-icon" onClick={shareOnWhatsApp}>
                <FaWhatsapp size={16} />
              </div>
              <div className="modal-icon" onClick={shareOnTwitter}>
                <FaXTwitter size={16} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ItemProjetos;
