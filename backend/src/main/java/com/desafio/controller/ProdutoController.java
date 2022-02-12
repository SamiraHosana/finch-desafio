package com.desafio.controller;

import com.desafio.model.Produto;
import com.desafio.services.ProdutoService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
    // lista todos, lista por id, exclui, insere
    private static final Logger LOGGER= Logger.getLogger(LoggerFactory.getLogger(ProdutoController.class).getName());

    @Autowired
    ProdutoService produtoService;

    @GetMapping
    public ResponseEntity<List<Produto>> listar(){
        List<Produto> produtos= produtoService.listar();
        return new ResponseEntity<>(produtos, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> listarPorId(@PathVariable Long id){
        Optional<Produto> p = produtoService.listarPorId(id);
        return p.map(produto -> new ResponseEntity<>(produto, HttpStatus.ACCEPTED))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }


    @PostMapping
    public ResponseEntity<Produto> save(@RequestBody Produto produto){
        LOGGER.info("Porduto:"+produto);
        Produto prod =  produtoService.save(produto);

        return new ResponseEntity<>(prod, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public HttpStatus delete(@PathVariable Long id){
        produtoService.excluir(id);
        return HttpStatus.NO_CONTENT;
    }



}
