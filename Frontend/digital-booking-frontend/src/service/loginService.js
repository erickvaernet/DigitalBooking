/* eslint-disable no-unused-expressions */
import axios from "axios";
import instanceApi from "./instanceApi";
import jwt_decode from "jwt-decode";

function GetJWT(usuario, contrasena, navigat, setUser, setErrores, setUsuario) {
 
  axios;
  instanceApi
    .post(`/auth/login`, {
      nombreUsuario: usuario,
      password: contrasena,
    })
    .then(({ data: response }) => {
      const dat = response;
      setUsuario(dat);
      localStorage.setItem("userName", dat.nombre);
      localStorage.setItem("userEmail", dat.email);
      localStorage.setItem("userLastName", dat.apellido);
      localStorage.setItem("token", dat.token);
      localStorage.setItem("roles", jwt_decode(dat.token).rol);
      localStorage.setItem("id", jwt_decode(dat.token).id);
      setUser(true);
      navigat("/");
    })
    .catch((error) => {
      setErrores([
        "Las credenciales son inválidas. Por favor intentalo nuevamente. ",
      ]);
      throw new Error(`the products could not be returned correctly: ${error}`);
    });
}

export { GetJWT };
