import React from "react";
import "./bloque-politicas.css";

const BloquePoliticas = () => {
  return (
    <section className="bloque_politicas">
        <div className="reglas-container">
          <h3>Normas de la casa</h3>
          <p>Check-out 10:00</p>
          <p>No se permiten fiestas</p>
          <p>No fumar</p>
        </div>
      <div className="seguridad-container">
            <h3>Salud y seguridad</h3>
            <p>
              Se aplican las pautas de distanciamiento social y otras normas
              relacionadas con el coronavirus
            </p>
            <p>Detector de humo</p>
            <p>Depósito de seguridad</p>
          </div>

          

      

          <div className="cancelacion-container">
            <h3>Política de cancelación</h3>
            <p>
              Agregá la fecha de tu viaje para obtener los detalles de la
              cancelación de esta estadía.
            </p>
          </div>

    </section>
  );
};

export default BloquePoliticas;
