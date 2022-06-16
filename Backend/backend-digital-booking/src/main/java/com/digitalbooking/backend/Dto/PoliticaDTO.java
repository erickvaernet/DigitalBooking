package com.digitalbooking.backend.Dto;

import com.digitalbooking.backend.Models.ItemPolitica;
import com.digitalbooking.backend.Models.Producto;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@NoArgsConstructor
@Data
public class PoliticaDTO {
    private Integer id;
    private Set<Producto> productos;
    private String titulo;
    private Set<ItemPolitica> items;

    public PoliticaDTO(String titulo) {
        this.titulo = titulo;
    }

    public PoliticaDTO(String titulo, Set<ItemPolitica> items) {
        this.titulo = titulo;
        this.items = items;
    }
}
