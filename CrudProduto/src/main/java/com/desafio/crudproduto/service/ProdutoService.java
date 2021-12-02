package com.desafio.crudproduto.service;

import com.desafio.crudproduto.domain.Produto;
import com.desafio.crudproduto.repository.ProdutoRepository;
import com.desafio.crudproduto.service.exception.NotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public Produto listar(Integer id){
        Optional<Produto> produto = produtoRepository.findById(id);

        return produto.orElseThrow(() -> new NotFound(
                "Produto não cadastrado! ID: " + id));
    }

    public List<Produto> listarTodos(){
        return produtoRepository.findAll();
    }

    public Produto inserir(Produto produto){
        return produtoRepository.save(produto);
    }

    public Produto atualizar(Integer id, Produto produto){
        produto.setId(id);
        return produtoRepository.save(produto);
    }

    public void excluir(Integer id){
        listar(id);
        produtoRepository.deleteById(id);
    }

}
