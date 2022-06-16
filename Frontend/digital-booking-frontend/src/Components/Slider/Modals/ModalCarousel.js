import React from "react";
import Slider from "../Carousel/Slider";
import { UseModal } from "../../../hook/UseModal";

import Modal from "./Modal";

const Modals = () => {
  const [abierto, abrirModal, cerrarModal] = UseModal(false);

  return (
    <div className="modalOpen">
      <button className="btn_carousel" onClick={abrirModal}>
        Ver más
      </button>
      <Modal isOpen={abierto} closeModal={cerrarModal}>
        <div className="contenedor-modal">
          <Slider />
        </div>
      </Modal>
    </div>
  );
};

export default Modals;
