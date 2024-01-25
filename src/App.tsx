import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./assets/css/global/reset.css";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
