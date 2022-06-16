import React from "react";

import TitulosPrincipales from "../../Components/TitulosPrincipales/TitulosPrincipales";
import BloqueDeBusqueda from "../../Components/BloqueBuscador/BloqueDeBusqueda";
import BloqueListado from "../../Components/BloqueListado/CardListado";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <BloqueDeBusqueda />
      <BloqueListado />
      <Footer />
    </div>
  );
};

export default Home;
