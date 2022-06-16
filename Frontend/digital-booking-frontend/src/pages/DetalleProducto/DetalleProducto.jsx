import React, { useEffect, useState } from "react";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MapaGeneral from "../../Components/Mapa/MapaGeneral";
import BloqueHeader from "../../Components/BloqueHeader/BloqueHeader";
import BloqueUbicacion from "../../Components/DatosUbicacion/BloqueUbicacion";
import IconosCompartir from "../../Components/IconosCompartir/IconosCompartir";
import BloqueCalendario from "../../Components/BloqueCalendario/BloqueCalendario";
import BloqueDescripcion from "../../Components/BloqueDescripcion/BloqueDescripcion";
import CaracteristicasProducto from "../../Components/CaracteristicasProducto/CaracteristicasProducto";
import BloquePoliticas from "../../Components/BloquePoliticas/BloquePoliticas";
import BloqueImagenes from "../../Components/BloqueImagenes/BloqueImagenes";
import SliderTablet from "../../Components/SliderTablet/SliderTablet";

import "./detalleProducto.css";

const DetalleProducto = () => {
  return (
    <div className="detalle__producto">
      <Header />

      <BloqueHeader />
      <BloqueUbicacion />
      <div className="compartir">
        <IconosCompartir />
      </div>
      <BloqueImagenes />
      <SliderTablet />
      <h2 className="detalle__producto--titulo alojate">
        Alójate en el corazón de Buenos Aires
      </h2>
      <BloqueDescripcion />
      <h2 className="detalle__producto--titulo">¿Que ofrece este lugar?</h2>
      <hr />
      <CaracteristicasProducto />
      <h2 className="detalle__producto--titulo fechas">Fechas disponibles</h2>
      <BloqueCalendario />
      <h2 className="detalle__producto--titulo">¿Donde vas a estar?</h2>
      <hr />
      <p className="lugar">Buenos Aires, Argentina</p>
      <MapaGeneral />
      <h2 className="detalle__producto--titulo">Qué tenés que saber</h2>
      <hr />
      <BloquePoliticas />
      <small className="temporal"></small>
      <Footer />
    </div>
  );
};

export default DetalleProducto;
