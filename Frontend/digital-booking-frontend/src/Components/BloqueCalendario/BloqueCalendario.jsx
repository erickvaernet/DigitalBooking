import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { DateObject } from "react-multi-date-picker";

import gregorian_en_lowercase from "../../utils/calendar.locale";
import Flecha from "../FlechaCalendario/FlechaCalendario";
import Calendario from "../Calendario/Calendario";

import "./bloque_calendario.css";
import { GetProductById } from "../../service/productoService";


export default function BloqueCalendario() {
  const [values, setValues] = useState([new DateObject()]);
  const [producto, setProducto] = useState([]);
  const {id} = useParams()

  useEffect(() => {
     GetProductById(id, setProducto)
  }, [id]);

console.log(producto.id);


  let arrow = (direction, handleClick) => (
    <Flecha direction={direction} click={handleClick} />
  );
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let calendario;
  if (width < 768) {
    const PropiedadesCalendario = {
      readOnly: true,
      range: false,
      value: values,
      onChange: { setValues },
      numberOfMonths: 1,
      locale: gregorian_en_lowercase,
      renderButton: arrow,
      className: "detalles",
      minDate: new DateObject().subtract(60, "days"),
      maxDate: new DateObject().add(364, "days"),
      mapDays: ({ date, today }) => {
        let props = {};
        let result = date.toDays() - today.toDays();
        if (result < 0) props.disabled = true;
        return props;
      },
    };
    calendario = <Calendario {...PropiedadesCalendario} />;
  } else {
    const PropiedadesCalendarioDesktop = {
      readOnly: true,
      range: false,
      value: values,
      onChange: { setValues },
      numberOfMonths: 2,
      locale: gregorian_en_lowercase,
      renderButton: arrow,
      className: "detalles",
      minDate: new DateObject().subtract(60, "days"),
      maxDate: new DateObject().add(364, "days"),
      mapDays: ({ date, today }) => {
        let props = {};
        let result = date.toDays() - today.toDays();
        if (result < 0) props.disabled = true;
        return props;
      },
    };
    calendario = <Calendario {...PropiedadesCalendarioDesktop} />;
  }
  console.log(values);

  return (
    <>
      <div className="fila_calendario">
        <div className="calendarioDet">{calendario}</div>
        <div className="toreserva">
          <div className="pReserva">
            <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          </div>
          <div className="boton-reserva">
          <Link to={`/producto/${producto.id}/reserva`}><button >Iniciar reserva</button></Link>    
          </div>
        </div>
      </div>
    </>
  );
}
