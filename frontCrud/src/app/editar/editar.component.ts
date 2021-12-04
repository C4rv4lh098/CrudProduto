import { listService } from './../services/list.service';
import { UpdateService } from './../services/update.service';
import { Router, ActivatedRoute } from '@angular/router';
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

  _produtos: Produto[] = [];
  filteredProduto: Produto[] = [];

  id?: number;
  produto!: Produto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private listService: listService,
    private updateService: UpdateService,
    private router:Router) {}

    ngOnInit(){
      this.listService.getProduto().subscribe({next: produtos =>{
        this._produtos = produtos;
        this.filteredProduto = this._produtos;
        this.produto = new Produto();
        this.id = this.activatedRoute.snapshot.params['id'];
        this.updateService.getProdutoById(this.id).subscribe(data => {console.log(data);
        this.produto = data;
        });
      },
      error: err => console.log('Error', err)
    });
  }

  updateProduto(id: number) {
    this.updateService.updateProduto(id, this.produto).subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
    this.router.navigate(['/listar'])
  }

  refresh(): void{
    window.location.reload();
  }
}
