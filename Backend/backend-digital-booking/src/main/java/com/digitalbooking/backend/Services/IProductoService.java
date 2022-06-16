package com.digitalbooking.backend.Services;

import com.digitalbooking.backend.Dto.PaginaDTO;
import com.digitalbooking.backend.Dto.ProductoDTO;

import java.util.List;

public interface IProductoService extends ICRUDService<ProductoDTO>{
    PaginaDTO findByCiudadId(Integer id, Integer page, Integer size);
    PaginaDTO findByCategoriaId(Integer id, Integer page, Integer size);
}
