package com.digitalbooking.backend.Services;

import com.digitalbooking.backend.Dto.PaginaDTO;
import com.digitalbooking.backend.Dto.ReservaDTO;
import com.digitalbooking.backend.Dto.ReservaDTOList;

public interface IReservaService extends ICRUDService<ReservaDTO>{

        PaginaDTO<ReservaDTOList> findByProductoId(Integer productoId, Integer page, Integer size);


}
