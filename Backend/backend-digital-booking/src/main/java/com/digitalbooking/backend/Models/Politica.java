package com.digitalbooking.backend.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="politicas")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Politica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToMany(mappedBy = "politicas")
    @JsonIgnore
    private Set<Producto> productos;
    @Column(nullable = false)
    private String titulo;
    @OneToMany(mappedBy = "politica",cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<ItemPolitica> items;

}
