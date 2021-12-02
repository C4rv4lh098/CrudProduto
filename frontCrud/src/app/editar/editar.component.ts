import { Router } from '@angular/router';
import { listService } from './../services/list.service';
import { Produto } from './../models/produto.model';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


  produtos!: Observable<any>;

  filteredProduto: Produto[] = [];
  _produtos: Produto[] = [];

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

  updateProduto(id:number){
    this.router.navigate(['/editar', id])
  }

}
