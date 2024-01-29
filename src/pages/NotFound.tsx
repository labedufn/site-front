import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import "../styles/pages/not-found.css";

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>LABED - Página não encontrada</title>
        <meta
          name="description"
          content="LABED - Laboratório de Eletrônica e Desenvolvimento da Universidade Franciscana ⚡"
        />
      </Helmet>
      <NavLink to="/">
        <div className="not-found">
          <h1>404 :(</h1>
        </div>
      </NavLink>
    </>
  );
};

export default NotFound;
