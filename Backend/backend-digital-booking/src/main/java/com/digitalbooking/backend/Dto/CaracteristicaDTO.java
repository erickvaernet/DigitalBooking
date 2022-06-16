package com.digitalbooking.backend.Dto;


import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class CaracteristicaDTO {
    private Integer id;
    private String titulo;
    // PREGUNTAR POR EL USO DE LA TABLA IMAGEN?
    private String urlImagen;

    public CaracteristicaDTO(String titulo, String urlImagen) {
        this.titulo = titulo;
        this.urlImagen = urlImagen;
    }
}
