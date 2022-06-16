package com.digitalbooking.backend.Controllers;

import com.digitalbooking.backend.Dto.ItemPoliticaDTO;
import com.digitalbooking.backend.Dto.PaginaDTO;
import com.digitalbooking.backend.Services.impl.ItemPoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin
@RestController
@RequestMapping("/itemsPoliticas")
public class ItemPoliticaController {

        @Autowired
        private ItemPoliticaService itemPoliticaService;

        @GetMapping("{id}")
        public ResponseEntity<ItemPoliticaDTO> findById(@PathVariable("id")Integer id){
            ItemPoliticaDTO itemPolitica = itemPoliticaService.findById(id);
            return new ResponseEntity<>(itemPolitica, HttpStatus.OK);
        }

        @PreAuthorize("hasRole('ADMIN')")
        @PostMapping
        public ResponseEntity<ItemPoliticaDTO> create(@RequestBody ItemPoliticaDTO itemPoliticaDTO){
            ItemPoliticaDTO respuestaItemPolitica = itemPoliticaService.create(itemPoliticaDTO);
            return new ResponseEntity<>(respuestaItemPolitica, HttpStatus.OK);
        }

        @PreAuthorize("hasRole('ADMIN')")
        @PutMapping
        public ResponseEntity<ItemPoliticaDTO> update(@RequestBody ItemPoliticaDTO itemPoliticaDTO){
            ItemPoliticaDTO newItemPoliticaDTO = itemPoliticaService.update(itemPoliticaDTO);
            return new ResponseEntity<>(newItemPoliticaDTO, HttpStatus.OK);
        }
        @PreAuthorize("hasRole('ADMIN')")
        @DeleteMapping("/{id}")
        public ResponseEntity<String> deleteById(@PathVariable("id")Integer id){
            itemPoliticaService.deleteById(id);
            return new ResponseEntity<>("ItemPolitica Eliminada", HttpStatus.OK);
        }
        @GetMapping
        public ResponseEntity<PaginaDTO<ItemPoliticaDTO>> findAll(
                @RequestParam(value = "pagina", required = false)Integer page,
                @RequestParam(value = "tamanio", required = false)Integer size,
                HttpServletRequest request
        ){
            PaginaDTO<ItemPoliticaDTO> paginaItemPoliticas = itemPoliticaService.findAll(page, size);
            paginaItemPoliticas.setUrlBase(request.getRequestURL().toString());
            return new ResponseEntity<>(paginaItemPoliticas , HttpStatus.OK);
        }
}
