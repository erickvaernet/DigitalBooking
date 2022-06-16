package com.digitalbooking.backend.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="items_politicas")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ItemPolitica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String descripcion;
    @ManyToOne
    @JoinColumn(name="politica_id", nullable = false)
    @JsonBackReference
    private Politica politica;
}
