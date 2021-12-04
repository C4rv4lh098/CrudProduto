import { listService } from './../services/list.service';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Produto } from './../models/produto.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

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
    private router:Router) {}

    ngOnInit(){
      this.listService.getProduto().subscribe({next: produtos =>{
        this._produtos = produtos;
        this.filteredProduto = this._produtos;
      },
      error: err => console.log('Error', err)
    });
  }

  produto: Produto = new Produto();
}
