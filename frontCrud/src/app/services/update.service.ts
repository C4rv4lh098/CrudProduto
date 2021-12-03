import { Produto } from './../models/produto.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {Observable} from "rxjs/index";
import { environment } from 'src/environments/environment';


@Injectable()
export class UpdateService {

  constructor(
    private http: HttpClient) { }
    private baseUrl: string = 'http://localhost:8080/produtos';

  getProduto() : Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }


  getProdutoById(id: any): Observable<Produto> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  updateProduto(id: number, produto: Produto): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, produto);
  }
}
