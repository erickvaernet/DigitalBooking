import React from "react";
import { FiltroCategoria } from "../../service/productoService";

import "./bloque-categorias.css";

const CardCategoria = ({ id, urlImagen, titulo, descripcion, setData }) => {
   const handleClick = () =>{
    FiltroCategoria(id,setData)
   }
  return (
    <div className="card-categoria" onClick={handleClick}>
      <img src={urlImagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default CardCategoria;
