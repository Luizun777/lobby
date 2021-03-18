import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListadosService {

  @Output() change: EventEmitter<void> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getGrupos(): Observable<any> {
    return this.http.get(`${environment.urlApi}grupo-listdo`);
  }

  putDato(id: number, data: any): Observable<any> {
    return this.http.put(`${environment.urlApi}lista/${id}`, data);
  }

  agregarDato(data: any) : Observable<any> {
    return this.http.post(`${environment.urlApi}lista`, data);
  }
}
