package com.digitalbooking.backend.Dto;

import com.digitalbooking.backend.Models.Politica;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class ItemPoliticaDTO {
    private Integer id;
    private String descripcion;
    private Politica politica;

    public ItemPoliticaDTO( Politica politica,String descripcion) {
        this.descripcion = descripcion;
        this.politica = politica;
    }
}
