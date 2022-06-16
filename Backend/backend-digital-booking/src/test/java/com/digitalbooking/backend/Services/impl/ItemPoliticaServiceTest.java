package com.digitalbooking.backend.Services.impl;

import com.digitalbooking.backend.Dto.ItemPoliticaDTO;
import com.digitalbooking.backend.Dto.PaginaDTO;
import com.digitalbooking.backend.Dto.PoliticaDTO;
import com.digitalbooking.backend.Models.Politica;
import com.digitalbooking.backend.Services.IItemPoliticaService;
import com.digitalbooking.backend.Services.IPoliticaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestPropertySource(locations = "classpath:test.properties")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class ItemPoliticaServiceTest {

    @Autowired
    public IItemPoliticaService itemPoliticaService;
    @Autowired
    public IPoliticaService politicaService;
    @Autowired
    private ObjectMapper mapper;

    private Politica politica;

    @BeforeAll
    void setUp() {
        PoliticaDTO politicaDTO = new PoliticaDTO("politica0");
        politica=mapEntity(politicaService.create(politicaDTO));
        assertNotNull(politica);
        assertTrue(politica.getId()> 0);
    }

    @Test
    void create() {
        ItemPoliticaDTO itemPoliticaDTO= new ItemPoliticaDTO(politica, "item0");
        itemPoliticaDTO=itemPoliticaService.create(itemPoliticaDTO);
        assertNotNull(itemPoliticaDTO);
        assertTrue(itemPoliticaDTO.getId()>0);
    }

    @Test
    void update() {
        ItemPoliticaDTO itemPoliticaDTO= new ItemPoliticaDTO(politica,"item0");
        itemPoliticaDTO=itemPoliticaService.create(itemPoliticaDTO);
        assertNotNull(itemPoliticaDTO);
        assertTrue(itemPoliticaDTO.getId()>0);

        PoliticaDTO politicaDTO = new PoliticaDTO("politicaNueva");
        Politica nuevaPolitica=mapEntity(politicaService.create(politicaDTO));
        assertNotNull(nuevaPolitica);
        assertTrue(nuevaPolitica.getId()> 0);

        String titulonuevo="itemErick";

        itemPoliticaDTO.setDescripcion(titulonuevo);
        itemPoliticaDTO.setPolitica(nuevaPolitica);

        itemPoliticaService.update(itemPoliticaDTO);

        ItemPoliticaDTO dt=itemPoliticaService.findById(itemPoliticaDTO.getId());
        assertNotNull(dt);
        assertEquals(titulonuevo,dt.getDescripcion());
        //TODO arreglar esto
        //assertEquals(nuevaPolitica.getId(),dt.getPolitica().getId());
    }

    @Test
    void findById() {
        ItemPoliticaDTO itemPoliticaDTO= new ItemPoliticaDTO(politica,"item0");
        itemPoliticaDTO=itemPoliticaService.create(itemPoliticaDTO);
        assertNotNull(itemPoliticaDTO);
        assertTrue(itemPoliticaDTO.getId()>0);
        ItemPoliticaDTO dt=itemPoliticaService.findById(itemPoliticaDTO.getId());
        assertNotNull(dt);
    }

    @Test
    void deleteById() {
        ItemPoliticaDTO itemPoliticaDTO= new ItemPoliticaDTO(politica,"asds");
        itemPoliticaDTO=itemPoliticaService.create(itemPoliticaDTO);
        int id= itemPoliticaDTO.getId();
        itemPoliticaService.deleteById(id);
        ItemPoliticaDTO dt=null;
        try {
            dt = itemPoliticaService.findById(id);
        }catch (Exception e){
            assertTrue(e.getMessage().contains("No se encontro"));
        }
        assertNull(dt);
    }

    @Test
    void findAll() {
        ItemPoliticaDTO itemPoliticaDTO = new ItemPoliticaDTO(politica,"itemPolitica5");
        itemPoliticaDTO = itemPoliticaService.create(itemPoliticaDTO);
        assertNotNull(itemPoliticaDTO);
        assertTrue(itemPoliticaDTO.getId() > 0);
        ItemPoliticaDTO dt = itemPoliticaService.findById(itemPoliticaDTO.getId());
        assertNotNull(dt);
        PaginaDTO<ItemPoliticaDTO> pagina = itemPoliticaService.findAll(null,null);
        assertTrue(pagina.getResultados().size() > 0);
    }

    @Test
    void findAllWithPages() {
        ItemPoliticaDTO itemPoliticaDTO = new ItemPoliticaDTO(politica,"itemPolitica5");
        itemPoliticaDTO = itemPoliticaService.create(itemPoliticaDTO);
        assertNotNull(itemPoliticaDTO);
        assertTrue(itemPoliticaDTO.getId() > 0);
        ItemPoliticaDTO dt = itemPoliticaService.findById(itemPoliticaDTO.getId());
        assertNotNull(dt);
        PaginaDTO<ItemPoliticaDTO> pagina  = itemPoliticaService.findAll(0,10);
        assertTrue(pagina.getResultados().size() > 0);
    }

    //Mapers
    public Politica mapEntity(PoliticaDTO politicaDTO){
        return mapper.convertValue(politicaDTO, Politica.class);
    }
}