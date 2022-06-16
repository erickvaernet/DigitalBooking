import React from "react";

import SeleccionarCiudad from "./SeleccionarCiudad";
import BuscadorCalendario from "../BuscadorCalendario/BuscadorCalendario";

import "./bloque-buscador.css";

function SearchForm() {
  return (
    <form className="grid-container" action="">
      <div className="icon-select-box grid-item">
        <SeleccionarCiudad />
      </div>
      <div className="icon-select-box grid-item">
        <BuscadorCalendario />
      </div>
      <button className="button-search limitation">Buscar</button>
    </form>
  );
}

export default SearchForm;
