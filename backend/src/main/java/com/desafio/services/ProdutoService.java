package com.desafio.services;

import com.desafio.model.Produto;
import com.desafio.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {
    // lista todos, lista por id, exclui, insere
    //método de insert
    @Autowired
    ProdutoRepository produtoRepository;

    public Produto save(Produto produto){
        return produtoRepository.save(produto);
    }

    public List<Produto> listar(){
        return produtoRepository.findAll();
    }

    public Optional<Produto> listarPorId(Long id){
        return produtoRepository.findById(id);
    }

    public void excluir(Long id){
         produtoRepository.deleteById(id);
    }



}
