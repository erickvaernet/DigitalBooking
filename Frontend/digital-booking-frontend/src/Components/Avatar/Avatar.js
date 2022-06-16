import React from "react";

import StackedAvatar from "./stacked-avatar";
import Credenciales from "../Credenciales/Credenciales";
import Logout from "../Logout/Logout";

import "./avatar.css";

const Avatar = () => {
  const avatars = [
    {
      twitterHandle: " ",
      name: `${Credenciales.nombre} ${Credenciales.apellido}`,
    },
  ];
  return (
    <div className="avatar">
      <StackedAvatar maxAvatars={1} round={true} size={50} avatars={avatars} className='avatar_icono' />
      <div className="bienvenido">
        <div className="saludo">
          <p className="hola">Hola,</p>
          <Logout />
        </div>
        <p className="nombre-avatar">
          {" "}
          {`${Credenciales.nombre} ${Credenciales.apellido}`}
        </p>
      </div>
    </div>
  );
};

export default Avatar;
