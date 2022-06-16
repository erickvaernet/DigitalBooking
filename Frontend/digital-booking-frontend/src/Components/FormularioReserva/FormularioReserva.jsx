import React from "react";
import "./formulario-reserva.css";

export default function FormularioReserva() {
  return (
    <div className="contenedorFormulario">
      <form>
        <div className="formulario1">
          <div className="tituloinput">
            <h3>Nombre</h3>
            <input
              className="nombreInput"
              type="text"
              name="nombre"
              placeholder="Nombre"
              disabled={true}
            />
          </div>
          <div className="tituloinput">
            <h3>Apellido</h3>
            <input
              className="apellidoInput"
              type="text"
              name="apellido"
              placeholder="Apellido"
              disabled={true}
            />
          </div>
        </div>
        <div className="formulario2">
          <div className="tituloinput">
            <h3>Correo electrónico</h3>
            <input
              className="emailInput"
              type="email"
              name="email"
              placeholder="Correo electronico "
              disabled={true}
            />
          </div>
          <div className="tituloinput">
            <h3>Ciudad</h3>
            <input
              className="ciudadInput"
              type="text"
              name="ciudad"
              placeholder="Ciudad"
              required={true}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
