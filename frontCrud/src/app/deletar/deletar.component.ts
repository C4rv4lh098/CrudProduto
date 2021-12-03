import { Produto } from './../models/produto.model';
import { DeleteService } from './../services/delete.service';
import { Router } from '@angular/router';
import { listService } from './../services/list.service';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  produtos!: Observable<any>;

  searchText: any;

  _produtos: Produto[] = [];
  filteredProduto: Produto[] = [];
  _filterBy: any;

  //@ts-ignore
  dtOptions: DataTables.Settings = {};
  //@ts-ignore
  @ViewChild('dtOptions', {static: true})table;

  private searchTerms = new Subject<any>();

  constructor(
    private listService: listService,
    private DeleteService: DeleteService,
    private router:Router) {}

    ngOnInit(){
      this.listService.getProduto().subscribe({next: produtos =>{
        this._produtos = produtos;
        this.filteredProduto = this._produtos;
      },
      error: err => console.log('Error', err)
    });
  }

  deleteProduto(produto: Produto){
    console.log(produto)
    this.DeleteService.deleteProdutoById(produto.id).subscribe((resposta) => {
      console.log("resposta após ser deletado o item", resposta)
      const indexDeletedProduto = this._produtos.findIndex((item) => item.id == produto.id)
      this._produtos.splice(indexDeletedProduto, 1)
      this.filteredProduto = this._produtos
      this._filterBy = ""
    })
    alert("Produto excluido");
    this.router.navigate(['/listar'])
  }

}
