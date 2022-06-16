import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

import Credenciales from "../../Components/Credenciales/Credenciales";
import { userContext } from "../../context/UserContext";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import "./login.css";

const Login = () => {
  const { user, setUser } = useContext(userContext);
  console.log(user);
  const [email, setEmail] = useState("");
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const [errores, setErrores] = useState([]);
  const navigate = useNavigate();

  const validarCredenciales = (e) => {
    e.preventDefault();
    if (email !== Credenciales.email || password !== Credenciales.password) {
      setErrores([
        "Las credenciales son inválidas. Por favor intentalo nuevamente. ",
      ]);
    } else {
      Swal.fire({
        position: "Center",
        imageUrl:
          "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_600/https://codigofuente.io/wp-content/uploads/2018/09/progress.gif",
        imageHeight: 150,
        imageWidth: 150,
        imageAlt: "Cargando",
        showConfirmButton: false,
        timer: 1500,
      });
      setUser(true);
      navigate("/", {
        replace: true,
      });
    }
  };

  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className="login-contenedor">
      <Header />
      <div className="formulario-login">
        <h2>Iniciar sesión</h2>
        <form onSubmit={validarCredenciales}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />

          <label htmlFor="password">Contraseña</label>
          <div className="input-icon">
            <input
              type={isShowPassword ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={handleChangePassword}
            />
            <div
              className="icon-container"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? (
                <FaRegEyeSlash className="icon" />
              ) : (
                <FaRegEye className="icon" />
              )}
            </div>
          </div>

          <p className="error">{errores}</p>
          <button type="submit">Ingresar</button>
          <div className="registrate">
            <p>¿Aún no tenes cuenta?</p>
            <Link to="/registro">Registrate</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
