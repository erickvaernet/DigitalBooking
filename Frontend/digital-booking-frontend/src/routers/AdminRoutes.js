import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registro from "../pages/Registro/Registro.jsx";
import DetalleProducto from "../pages/DetalleProducto/DetalleProducto";
import Reserva from "../pages/Reserva/Reserva";

const AdminRoutes = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/producto/:id/reserva" element={<Reserva />} /> 
                


        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AdminRoutes;
