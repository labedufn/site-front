import React from "react";
import "../../assets/css/components/home/apoiadores.css";
import Ufn from "../../assets/img/apoiadores/ufn.svg";

const Apoiadores: React.FC = () => {
  return (
    <section>
      <div>
        <h3>Apoiadores</h3>
        <div>
          <img src={Ufn} />
        </div>
      </div>
    </section>
  );
};

export default Apoiadores;
