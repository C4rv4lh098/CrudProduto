import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";



@Injectable()
export class DeleteService{

  constructor(
    private http: HttpClient) { }
    private baseUrl: string = 'http://localhost:8080/produtos';

    deleteProdutoById(id: any): Observable<any>{
      return this.http.delete<any>(`${this.baseUrl}/${id}`);
    }
}
