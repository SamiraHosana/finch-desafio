package com.desafio.repository;

import antlr.collections.impl.LList;
import com.desafio.model.Carrinho;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {
}
