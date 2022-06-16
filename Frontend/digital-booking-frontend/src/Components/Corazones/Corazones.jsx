import React, { useState } from "react";
import { Corazon } from "./components/Corazon";
import { corazones } from "../../data/data";

import "./corazon.css";

export default function Corazones() {
  const [corazonesLista, setCorazonesLista] = useState(corazones);

  const handleClickCorazon = (id) => {
    let nuevaListaDeCorazones = corazonesLista.map((corazon) => {
      if (corazon.id === id) {
        return {
          id: corazon.id,
          roto: !corazon.roto,
        };
      }
      return corazon;
    });
    setCorazonesLista(nuevaListaDeCorazones);
  };

  return (
    <div className="corazon_me_gusta">
      <div className="content">
        {corazonesLista.map((corazon) => (
          <Corazon
            key={corazon.id}
            id={corazon.id}
            roto={corazon.roto}
            onClick={handleClickCorazon}
          />
        ))}
      </div>
    </div>
  );
}
