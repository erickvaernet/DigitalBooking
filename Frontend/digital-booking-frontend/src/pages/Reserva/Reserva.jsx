import React from "react";

import Header from "../../Components/Header/Header";
import BloqueHeader from "../../Components/BloqueHeader/BloqueHeader";
import Footer from "../../Components/Footer/Footer";
import DetalleReserva from "../../Components/DetalleReserva/DetalleReserva";
import BloquePoliticas from "../../Components/BloquePoliticas/BloquePoliticas";
import FormReserva from "../../Components/FormReserva/FormReserva";
import "./reserva.css";

const Reserva = () => {
  return (
    <div className="pantalla__reserva">
      <Header />
      <BloqueHeader />
      <h3 className="reserva__titulo">Completá tus datos</h3>
      <div className="pantalla__reserva--contenedor">
        <div className="pantalla__reserva--contenedor__principal">
          <FormReserva />
        </div>
        <div className="pantalla__reserva--contenedor__secundario">
          <DetalleReserva />
        </div>
      </div>
      <div className="reserva__politicas">
        <h3>Què tenès que saber</h3>
        <hr />
        <BloquePoliticas />
      </div>

      <Footer />
    </div>
  );
};

export default Reserva;
