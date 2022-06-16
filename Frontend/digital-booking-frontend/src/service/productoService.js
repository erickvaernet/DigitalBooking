/* eslint-disable no-unused-expressions */
import axios from "axios";
import instanceApi from "./instanceApi";

function GetProducto(setProducto) {
  axios;
  instanceApi
    .get("/productos?pagina=0")
    .then(({ data: response }) => {
      const { resultados } = response;
      setProducto(resultados);
    })
    .catch((error) => {
      throw new Error(`the products could not be returned correctly: ${error}`);
    });
}

function GetProductById(id, setProduct) {
  axios;
  instanceApi
    .get(`/productos/${id}`)
    .then(({ data: response }) => {
      const dat = response;
      setProduct(dat);
    })
    .catch((error) => {
      throw new Error(`the products could not be returned correctly: ${error}`);
    });
}

function Paginacion(page, setProducto) {
  axios;
  instanceApi
    .get(`/productos/?pagina=${page}`)
    .then(({ data: response }) => {
      const { resultados } = response;
      setProducto(resultados);
    })
    .catch((error) => {
      throw new Error(`the products could not be returned correctly: ${error}`);
    });
}

function FiltroCategoria(id, setCard) {
  axios;
  instanceApi
    .get(`productos?categoria_id=${id}`)
    .then(({ data: response }) => {
      const { resultados } = response;
      setCard(resultados);
    })
    .catch((error) => {
      throw new Error(`the products could not be returned correctly: ${error}`);
    });
}

export { GetProducto, GetProductById, Paginacion, FiltroCategoria };
