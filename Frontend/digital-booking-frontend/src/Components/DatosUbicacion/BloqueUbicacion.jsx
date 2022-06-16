import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import data from "../../data/dataBloqueHeader.json";
import StarRating from "../Estrellas/StarRating";
import DatosUbicacion from "./DatosUbicacion";

import "./bloque-ubicacion.css";

const BloqueUbicacion = () => {
  return (
    <div className="cont-ubicacion">
      <div className="cont-localizacion">
        <FontAwesomeIcon icon={faLocationDot} />

        <div className="localizacion">
          {data.map((data) => (
            <DatosUbicacion {...data} key={data.titulo} />
          ))}
        </div>
      </div>

      <div className="cont-calificacion">
        <p>Muy bueno</p>
        <div className="rating-ubicacion">
          <StarRating />
        </div>
      </div>
    </div>
  );
};

export default BloqueUbicacion;
