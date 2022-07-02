import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProductById } from "../../service/productoService";

import "./bloque-descripcion.css";

const BloqueDescripcion = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [categoria, setcategoria] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    GetProductById(id, setProduct, setcategoria, setImagenes, setCiudades);
  }, [id]);
  return (
    <div className="bloque__descripcion">
      <p>
        Está situado solo unas calles de la avenida Alvear, de la avenida
        quientana, del parque San Martín y el distrito de Recoleta. En las
        inmediaciones también hay varios lugares de interes, como la calle
        Florida, el centro comercial Galerías Pacifíco, la zona de Puerto
        Madero, la plaza de Mayo y el palacio Municipal{" "}
      </p>
      <p>
        Nuestros clientes dicen que esta parte de {ciudades.nombre} es su
        favorita, según los comentarios independientes.
      </p>
      <p>
        El Hotel es un hotel sofisticado de 4 estrellas que goza de una
        ubicación tranquila, a poca distancia de prestigiosas galerías de arte,
        teatros, museos y zonas comerciales. Además, hay WiFi gratuita. El
        establecimiento sirve un desayuno variado de 07:00 a 10:30.
      </p>
    </div>
  );
};

export default BloqueDescripcion;
