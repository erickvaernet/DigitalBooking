import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faCar,
  faTv,
  faPaw,
  faSink,
  faClock,
  faFan,
  faBanSmoking,
} from "@fortawesome/free-solid-svg-icons";

import "./caracteristicas.css";



const CaracteristicasProducto = () => {
  return (
    <div className="contenedor-bloque">
      <div className="bloqueUno">
        <div className="columnaUno">
          <div className="bloqueUno__caja">
            <FontAwesomeIcon icon={faSink} />
            <h4>Cocina</h4>
          </div>
          <div className="bloqueUno__caja">
            <FontAwesomeIcon icon={faCar} />
            <h4>Estacionamiento gratuito</h4>
          </div>
        </div>

        <div className="columnaDos">
          <div className="bloqueUno__caja">
            <FontAwesomeIcon icon={faTv} />
            <h4>Televisor</h4>
          </div>
          <div className="bloqueUno__caja">
            <FontAwesomeIcon icon={faClock} />
            <h4>24 horas</h4>
          </div>
        </div>
      </div>

      <div className="bloqueDos">
        <div className="columnaUno">
          <div className="bloqueUno__caja">
            <FontAwesomeIcon icon={faFan} />
            <h4>Aire acondicionado</h4>
          </div>
          <div className="bloqueUno__caja">
            <FontAwesomeIcon icon={faWifi} />
            <h4>Wifi</h4>
          </div>
        </div>

        <div className="columnaDos">
          <div className="bloqueUno__caja">
            <FontAwesomeIcon icon={faPaw} />
            <h4>Apto mascotas</h4>
          </div>
          <div className="bloqueUno__caja">
            <FontAwesomeIcon icon={faBanSmoking} />
            <h4>Prohibido fumar</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaracteristicasProducto;
