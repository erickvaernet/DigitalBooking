import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import StarRating from "../Estrellas/StarRating";
import { GetProductById } from "../../service/productoService";
import DetalleReservaCheck from "../DetalleReservaCheck/DetalleReservaCheck";
import DetalleProductoBoton from "../DetalleProductoBoton/DetalleProductoBoton";

import "./detalle-reserva.css";
import { userContext } from "../../context/UserContext";

const checkIn = "Check in";
const checkOut = "Check out";

const DetalleReserva = () => {
  const { id } = useParams();
  const { user, setUser } = useContext(userContext);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    GetProductById(id, setProduct);
  }, [id]);
  return (
    <div className="detalle">
      <div className="detalle_contenedro--uno">
        <h2 className="detalle__titulo">Detalle de la reserva</h2>
        <img
          src="https://cdn.pixabay.com/photo/2014/10/16/08/39/bedroom-490779__340.jpg"
          alt="fondo"
        />
      </div>
      <div className="detalle_contenedro--dos">
        <div className="detalle__datos">
          <p className="detalle__categoria">Hoteles</p>
          <h3>{product.titulo}</h3>
          <div className="detalle_estrellas">
            <StarRating />
          </div>
          <div className="detalle_ubicacion">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>
              Av. Colón 1643, Buenos Aires, Ciudad Autónoma de Buenos Aires,
              Argentina
            </p>
          </div>
          <hr />
          <DetalleReservaCheck
            check={checkIn}
            fecha={user?.reserva?.fechaInicial}
          />
          <hr />
          <DetalleReservaCheck
            check={checkOut}
            fecha={user?.reserva?.fechaFinal}
          />
          <hr />
          <DetalleProductoBoton />
        </div>
      </div>
    </div>
  );
};

export default DetalleReserva;
