import React from "react";
import Select from "react-select";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import "./detalle-reserva-select.css";

export default function DetalleReservaSelect() {
  const options = [
    { value: 1, label: "01:00 AM" },
    { value: 2, label: "02:00 AM" },
    { value: 3, label: "03:00 AM" },
    { value: 4, label: "04:00 AM" },
    { value: 5, label: "05:00 AM" },
    { value: 6, label: "06:00 AM" },
    { value: 7, label: "07:00 AM" },
    { value: 8, label: "08:00 AM" },
    { value: 9, label: "09:00 AM" },
    { value: 10, label: "10:00 AM" },
    { value: 11, label: "11:00 AM" },
    { value: 12, label: "12:00 PM" },
    { value: 13, label: "1:00 PM" },
    { value: 14, label: "2:00 PM" },
    { value: 15, label: "15:00 PM" },
    { value: 16, label: "16:00 PM" },
    { value: 17, label: "17:00 PM" },
    { value: 18, label: "18:00 PM" },
    { value: 19, label: "19:00 PM" },
    { value: 20, label: "20:00 PM" },
    { value: 21, label: "21:00 PM" },
    { value: 22, label: "22:00 PM" },
    { value: 23, label: "23:00 PM" },
    { value: 24, label: "12:00 AM" },
  ];

  return (
    <div className="select_contenedor">
      <div className="select__reserva--ok">
        <IoIosCheckmarkCircleOutline className="ok" />
        <h3>
          Tu habitación va a estar lista para el check-in entre las 10:00 AM y
          las 11:00 PM
        </h3>
      </div>
      <p>Indicá tu horario estimado de llegada </p>

      <div className="select__horario">
        <Select
          options={options}
          className="select"
          placeholder="Seleccionar hora de llegada"
          name="horaReserva"
        />
      </div>
    </div>
  );
}
