package com.digitalbooking.backend.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="caracteristicas")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Caracteristica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    // PREGUNTAR POR EL USO DE LA TABLA IMAGEN?
    private String urlImagen;
    /*
    @ManyToMany(mappedBy = "caracteristicas")
    private Set<Producto> productos;
    */


}
