import React, { useContext } from "react";
import BotonesHeader from "../BotonesHeader/BotonesHeader";
import { userContext } from "../../context/UserContext";
import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";
import Burguer from "../Navbar/Burguer";

import "./header.css";

const Header = () => {
  const { user } = useContext(userContext);
  
  return (
    <header>
      <div className="contenedor-logo">
        <Logo />
        <h2>Sentite como en tu hogar</h2>
      </div>
      <div className="contenedor-menu">
        {user === true ? <Avatar /> : <BotonesHeader />}
      </div>
      <div className="iconoBurguer">
        <Burguer />
      </div>
    </header>
  );
};

export default Header;
