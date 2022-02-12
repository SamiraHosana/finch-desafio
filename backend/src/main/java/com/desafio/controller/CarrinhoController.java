package com.desafio.controller;

import com.desafio.model.Carrinho;
import com.desafio.services.CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/carrinho")
public class CarrinhoController {

    @Autowired
    CarrinhoService carrinhoService;

    @PostMapping
    public ResponseEntity<Carrinho> save(@RequestBody Carrinho carrinho){

        Carrinho  car = carrinhoService.save(carrinho);
        return new ResponseEntity<>(car, HttpStatus.CREATED);
    }


}
