import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListadosService {

  admin: boolean = false;

  @Output() change: EventEmitter<void> = new EventEmitter();
  @Output() ajusteTarjetas: EventEmitter<void> = new EventEmitter();

  constructor(private _snackBar: MatSnackBar, private http: HttpClient) { }

  validAdmin(): void {
    const options = {
      params: new HttpParams().append('key', localStorage.getItem('key'))
    };
    this.http.get(`${environment.urlApi}admin`, options).subscribe((rest: any) => this.admin = rest.admin);
  }

  getGrupos(): Observable<any> {
    const options = {
      params: new HttpParams().append('key', localStorage.getItem('key'))
    };
    return this.http.get(`${environment.urlApi}grupo-listdo`, options);
  }

  getListaTotal(): Observable<any> {
    return this.http.get(`${environment.urlApi}lista`);
  }

  putDato(id: number, data: any): Observable<any> {
    data.key = localStorage.getItem('key');
    return this.http.put(`${environment.urlApi}lista/${id}`, data);
  }

  putGrupo(id: number, data: any): Observable<any> {
    data.key = localStorage.getItem('key');
    return this.http.put(`${environment.urlApi}grupo/${id}`, data);
  }

  agregarDato(data: any) : Observable<any> {
    data.key = localStorage.getItem('key');
    return this.http.post(`${environment.urlApi}lista`, data);
  }

  alertaError(emit: boolean, message?: string): void {
    let mensaje = message ? message : '⚠️ Error: No eres Admin 🔑';
    if (emit) {
      this.change.emit();
    }
    this._snackBar.open(mensaje, '❌', {
      duration: 5000,
    });
  }

  alertaOk(): void {
    this._snackBar.open('✔️ Se guardo correctamente', '', {
      duration: 2000,
    });
  }

  subirImg(file: any) {
    return this.http.post('https://api.cloudinary.com/v1_1/dzbpfuieg/image/upload?upload_preset=me7wb9ao', file);
  }
}
