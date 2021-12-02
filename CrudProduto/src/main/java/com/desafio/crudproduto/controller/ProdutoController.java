package com.desafio.crudproduto.controller;

import com.desafio.crudproduto.domain.Produto;
import com.desafio.crudproduto.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Produto> listar(@PathVariable Integer id){
        Produto produto = produtoService.listar(id);

        return ResponseEntity.ok().body(produto);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Produto>> listarTodos(){
        List<Produto> produtos = produtoService.listarTodos();

        return ResponseEntity.ok().body(produtos);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Produto> inserir(@RequestBody Produto produto) {
        produto = produtoService.inserir(produto);

        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Produto> atualizar(@PathVariable Integer id, @RequestBody Produto produto){
        produto = produtoService.atualizar(id, produto);

        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public  ResponseEntity<Produto> excluir(@PathVariable Integer id){
        produtoService.excluir(id);

        return ResponseEntity.noContent().build();
    }

}
