import React, { useEffect } from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/components/home/modal-projetos.css";

interface ModalProjetosProps {
  isOpen: boolean;
  onRequestClose: () => void;
  titulo: string;
  imagem: string;
  descricao: string;
}

const ModalProjetos: React.FC<ModalProjetosProps> = ({
  isOpen,
  onRequestClose,
  titulo,
  imagem,
  descricao,
}) => {
  const handleModalClose = () => {
    document.body.classList.remove("modal-projetos-open");
    onRequestClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-projetos-open");
    }

    return () => {
      document.body.classList.remove("modal-projetos-open");
    };
  }, [isOpen]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleModalClose}
        className="modal-projetos"
        overlayClassName="modal-projetos-overlay"
      >
        <div className="modal-projetos-fechar">
          <IoClose size={40} onClick={handleModalClose} />
        </div>
        <div className="modal-projetos-conteudo">
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
            <SwiperSlide>
              <img src={imagem} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imagem} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imagem} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imagem} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imagem} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imagem} />
            </SwiperSlide>
          </Swiper>
          <div className="modal-projetos-info">
            <h3 className="font-1-m-b">{titulo}</h3>
            <p className="font-2-sm">{descricao}</p>
            <div className="modal-projetos-redes">
              <p className="font-2-sm">Compartilhar:</p>
              <div className="modal-icon">
                <FaFacebookF size={16} />
              </div>
              <div className="modal-icon">
                <FaWhatsapp size={16} />
              </div>
              <div className="modal-icon">
                <FaXTwitter size={16} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalProjetos;
