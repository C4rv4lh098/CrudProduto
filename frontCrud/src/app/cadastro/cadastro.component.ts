import { Router } from '@angular/router';
import { CreateService } from './../services/create.service';
import { Produto } from './../models/produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  produto: Produto = new Produto();
  submitted = false;

  constructor(public CreateService: CreateService,
    private router: Router) { }

  ngOnInit(){ }

  onSubmit(){
    this.submitted = true;
    this.CreateService.createProduto(this.produto).subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
    this.router.navigate(['/cadastro']);
  }
}
