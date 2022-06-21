import React, { useState } from "react";

import axios from "axios";

import "./form-reserva.css";

const FormReserva = () => {
  const [form, setForm] = useState({});

  const handleChange = async (e) => {
    await setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  // axios.get(`ciudades/por-nombre/{nombre}`, {
  //     params:{ciudad: form.ciudad
  //     }
  // } )
  // .then(function(response){
  //     console.log(response.data);
  // })
  // .catch(function(error){
  //     console.log(error)
  // });

  // iniciarSesion =async()=>{
  //     await axios.get(baseUrl, {params:{nombre: form.nombre, apellido: form.apellido, email: form.email}})
  //     .then(response=>{
  //         console.log(response.data);
  //     })
  //     .catch(error=>{
  //         console.log(error);
  //     })
  // }

  return (
    <div className="contenedor-form">
      <div className="formulario">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={form.nombre}
              onChange={handleChange}
              disabled
            />
          </div>

          <div className="input-box">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              name="apellido"
              id="Apellido"
              value={form.apellido}
              onChange={handleChange}
              disabled
            />
          </div>

          <div className="input-box">
            <label htmlFor="email">Correo electronico</label>
            <input
              className="box-email"
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              disabled
            />
          </div>

          <div className="input-box">
            <label htmlFor="ciudad">Ciudad</label>
            <input
              type="text"
              name="ciudad"
              id="ciudad"
              placeholder="Ciudad"
              value={form.ciudad}
              onChange={handleChange}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormReserva;
