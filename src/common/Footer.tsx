import React from "react";
import "../assets/css/common/footer.css";
import "../assets/css/utils/cores.css";
import EmailIcon from "../assets/img/icons/email.svg";
import FooterGitHub from "../assets/img/icons/github_negativo.svg";
import FooterInsta from "../assets/img/icons/instagram_negativo.svg";
import EnderecoIcon from "../assets/img/icons/local.svg";
import Logo from "../assets/img/logos/logo_original.svg";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-bg">
        <div className="footer container">
          <div className="footer-conteudo">
            <div className="footer-grid">
              <div className="footer-logo">
                <a href="#">
                  <img src={Logo} />
                </a>
              </div>
              <div className="footer-home">
                <h3>LABED</h3>
                <ul className="footer-anexos">
                  <a href="#">
                    <li>Início</li>
                  </a>
                  <a href="#">
                    <li>Sobre</li>
                  </a>
                  <a href="#">
                    <li>Membros</li>
                  </a>
                  <a href="#">
                    <li>Projetos</li>
                  </a>
                  <a href="#">
                    <li>Blog</li>
                  </a>
                </ul>
              </div>
              <div className="footer-contato">
                <h3>Contato</h3>
                <div className="footer-contato-infos">
                  <div className="footer-email">
                    <img src={EmailIcon} />
                    <a href="mailto:labedufn@gmail.com">labedufn@gmail.com</a>
                  </div>
                  <div className="footer-endereco">
                    <img src={EnderecoIcon} />
                    <p>
                      Rua dos Andradas, 1614 - Centro, Universidade Franciscana - Conjunto I, Prédio
                      3, Lab. 109, Santa Maria - RS, 97010-030
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-redes">
                <h3>Redes Sociais</h3>
                <div className="footer-redes-icons">
                  <a href="#">
                    <img src={FooterInsta} />
                  </a>
                  <a href="#">
                    <img src={FooterGitHub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copy">
            <p>
              &copy; {currentYear} LABED - Laboratório de Eletrônica e Desenvolvimento. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
