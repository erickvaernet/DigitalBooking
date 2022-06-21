import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userContext } from "../../context/UserContext";

import "./detalle-producto-boton.css";

const DetalleProductoBoton = () => {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      user?.reserva?.fechaFinal.length === 10 &&
      user?.reserva?.fechaInicial.length === 10
    ) {
      Swal.fire({
        position: "Center",
        imageUrl:
          "https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-orange.png",
        imageHeight: 100,
        imageWidth: 100,
        imageAlt: "Reserva exitosa",
        title: "¡Muchas gracias!",
        text: "Su reserva se ha realizado con éxito!",
      });
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } else {
      Swal.fire("", "Debes seleccionar checkIn checkOut", "error");
    }
  };

  return (
    <div className="contenedor__boton">
      <form onSubmit={handleSubmit}>
        <button type="submit">Confirmar Reserva</button>
      </form>
    </div>
  );
};

export default DetalleProductoBoton;
