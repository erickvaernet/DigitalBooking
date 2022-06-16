import React from "react";

import { faWifi, faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Iconos-listado.css";

const IconosListado = () => {
  return (
    <div className="iconos-listado">
      <FontAwesomeIcon icon={faWifi} />
      <FontAwesomeIcon icon={faPersonSwimming} />
    </div>
  );
};

export default IconosListado;
