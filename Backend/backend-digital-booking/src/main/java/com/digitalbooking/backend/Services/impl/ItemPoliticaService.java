package com.digitalbooking.backend.Services.impl;

import com.digitalbooking.backend.Dto.ItemPoliticaDTO;
import com.digitalbooking.backend.Dto.PaginaDTO;
import com.digitalbooking.backend.Exceptions.EntityNotFoundException;
import com.digitalbooking.backend.Exceptions.InvalidIdException;
import com.digitalbooking.backend.Models.ItemPolitica;
import com.digitalbooking.backend.Repository.IItemPoliticaRepository;
import com.digitalbooking.backend.Services.IItemPoliticaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ItemPoliticaService implements IItemPoliticaService {
    
    @Autowired
    private IItemPoliticaRepository itemPoliticaRepository;
    @Autowired
    private ObjectMapper mapper;

    public static final String ENTITY_NOT_FOUND_MESSAGE  = "No se encontro el item de politica con el id indicado";

    @Override
    public ItemPoliticaDTO create(ItemPoliticaDTO obj) {
        ItemPolitica itemPolitica = mapEntity(obj);
        ItemPolitica newitemPolitica = itemPoliticaRepository.save(itemPolitica);
        return mapDTO(newitemPolitica);
    }

    @Override
    public ItemPoliticaDTO update(ItemPoliticaDTO obj) {
        int id = obj.getId();
        if(id <= 0) throw new InvalidIdException();
        itemPoliticaRepository.findById(obj.getId())
                .orElseThrow(()-> new EntityNotFoundException(ENTITY_NOT_FOUND_MESSAGE));
        ItemPolitica itemPolitica = mapEntity(obj);
        ItemPolitica newitemPolitica = itemPoliticaRepository.save(itemPolitica);
        return mapDTO(newitemPolitica);
    }

    @Override
    public ItemPoliticaDTO findById(Integer id) {
        if(id <= 0) throw new InvalidIdException();
        ItemPolitica itemPolitica = itemPoliticaRepository.findById(id)
                .orElseThrow(()-> new EntityNotFoundException(ENTITY_NOT_FOUND_MESSAGE));
        return mapDTO(itemPolitica);
    }

    @Override
    public void deleteById(Integer id) {
        itemPoliticaRepository.findById(id)
                .orElseThrow(()-> new EntityNotFoundException(ENTITY_NOT_FOUND_MESSAGE));
        itemPoliticaRepository.deleteById(id);
    }

    @Override
    public PaginaDTO<ItemPoliticaDTO> findAll(Integer page, Integer size) {
        page=page==null?0:page;
        size=size==null?8:size;
        Pageable pageRequest= PageRequest.of(page,size);
        Page<ItemPolitica> paginaItemsPoliticas=itemPoliticaRepository.findAll(pageRequest);
        List<ItemPolitica> listaItemsPoliticas = paginaItemsPoliticas.getContent();
        List<ItemPoliticaDTO> listaItemsPoliticasDto=
                listaItemsPoliticas.stream().map(this::mapDTO).collect(Collectors.toList());
        long numeroItemsPoliticas = paginaItemsPoliticas.getTotalElements();
        return new PaginaDTO<>(page,size,numeroItemsPoliticas,listaItemsPoliticasDto);
    }

    //------ MAPPER----
    private ItemPoliticaDTO mapDTO(ItemPolitica itemPolitica){
        return mapper.convertValue(itemPolitica, ItemPoliticaDTO.class);
    }

    public ItemPolitica mapEntity(ItemPoliticaDTO itemPoliticaDTO){
        return mapper.convertValue(itemPoliticaDTO, ItemPolitica.class);
    }

}
