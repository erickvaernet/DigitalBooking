package com.digitalbooking.backend.Repository;

import com.digitalbooking.backend.Models.ItemPolitica;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IItemPoliticaRepository extends JpaRepository<ItemPolitica,Integer> {
    Page<ItemPolitica> findAll(Pageable pageable);
}
