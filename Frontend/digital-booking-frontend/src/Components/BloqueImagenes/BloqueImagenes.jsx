import React from 'react'
import Modals from '../Slider/Modals/ModalCarousel'

import './bloque-imagenes.css'

const BloqueImagenes = () => {
  return (
    <div className="contenedor__imagenes">
        <div className="contenedor__imagenes--principal">
               <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/05/30122005/hoteles-lujo-destacada-1.jpg" alt="" />
        </div>
        <div className="contenedor__imagenes--secuendaria">
              <div className="bloque__uno">
              <img src="https://cdn.pixabay.com/photo/2016/07/08/23/36/beach-house-1505461__340.jpg" alt="" />
              <img src="https://cdn.pixabay.com/photo/2016/11/19/06/22/wine-1838132__340.jpg" alt="" />

              </div>
              <div className="bloque__dos">
              <img src="https://cdn.pixabay.com/photo/2017/08/06/14/56/people-2593251__340.jpg" alt="" />
              <img src="https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406__340.jpg" alt="" />
              </div>
              <div className="vermas_modal">
               <Modals/>
              </div>
        </div>
    </div>
  )
}

export default BloqueImagenes