import React from "react";

import SearchForm from "./SearchForm";
import BuscadorTitulo from "../BuscadorTitulo/BuscadorTitulo";

import "./bloque-buscador.css";

function BloqueDeBusqueda() {
  return (
    <div className="container-total-busqueda">
      <BuscadorTitulo />
      <div className="container delimiter">
        <div className="subContainer delimiterChild">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default BloqueDeBusqueda;
