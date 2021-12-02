import { Observable } from 'rxjs';
import { Produto } from './../models/produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";





@Injectable()
export class CreateService {

  constructor(
    private http: HttpClient) { }
    private baseUrl: string = 'http://localhost:8080/produtos';

  createProduto(produto: Produto): Observable<any>{
    return this.http.post<any>(this.baseUrl, produto);
  }
}
