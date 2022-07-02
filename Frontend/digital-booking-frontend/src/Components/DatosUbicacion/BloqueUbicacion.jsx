import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import StarRating from "../Estrellas/StarRating";

import "./bloque-ubicacion.css";
import { useParams } from "react-router-dom";
import { GetProductById } from "../../service/productoService";

const BloqueUbicacion = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [categoria, setcategoria] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    GetProductById(id, setProduct, setcategoria, setImagenes, setCiudades);
  }, [id]);
  return (
    <div className="cont-ubicacion">
      <div className="cont-localizacion">
        <FontAwesomeIcon icon={faLocationDot} />
        <div className="localizacion">
          <p>
            {" "}
            {ciudades.nombre}, Ciudad Autónoma de {ciudades.nombre}, Argentina
          </p>
          <p> A 940 m del centro</p>
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
