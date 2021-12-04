import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class listService {

  constructor(
    private http: HttpClient) { }
    private baseUrl: string = 'http://localhost:8080/produtos';



  getProduto() : Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getProdutoById(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  deleteById(id: any): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`);

  }
}
