import React from "react";

import "./detalle-producto-boton.css";

const DetalleProductoBoton = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="contenedor-boton">
      <form onSubmit={handleSubmit}>
        <button type="submit">Confirmar Reserva</button>
      </form>
    </div>
  );
};

export default DetalleProductoBoton;
