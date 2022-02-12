package com.desafio.services;

import com.desafio.model.Carrinho;
import com.desafio.model.Produto;
import com.desafio.repository.CarrinhoRepository;
import com.desafio.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class CarrinhoService {

    @Autowired
    CarrinhoRepository carrinhoRepository;

    @Autowired
    ProdutoRepository produtoRepository;

    public Carrinho save(Carrinho carrinho){

        Carrinho car = carrinho;

        for (Produto p: carrinho.getProdutos()){
            Produto produto = produtoRepository.getById(p.getId());
            car.getProdutos().add(produto);
        }

        return carrinhoRepository.save(car);



    }

}
