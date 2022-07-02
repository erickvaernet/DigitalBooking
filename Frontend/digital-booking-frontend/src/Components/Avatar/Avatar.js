import React from "react";

import StackedAvatar from "./stacked-avatar";
import Logout from "../Logout/Logout";

import "./avatar.css";
import { Link } from "react-router-dom";

const Avatar = () => {
  const userName = (localStorage.getItem('userName'));
  const userLastName = (localStorage.getItem('userLastName'));
  const avatars = [
    {
      twitterHandle: " ",
      name: `${userName} ${userLastName}`,
    },
  ];
  return (
    <div className="avatar">
      <Link to={`/administracion/crear-producto`}>
      <div className="administracion">
        <h3>Administración</h3>
        <div></div>
      </div>
      </Link>
      <StackedAvatar maxAvatars={1} round={true} size={50} avatars={avatars} className='avatar_icono' />
      <div className="bienvenido">
        <div className="saludo">
          <p className="hola">Hola,</p>
          <Logout />
        </div>
        <p className="nombre-avatar">
          {" "}
          {`${userName} ${userLastName}`}
        </p>
      </div>
    </div>
  );
};

export default Avatar;
