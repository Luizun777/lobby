import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListadosService {

  admin: boolean = false;
  client: string;
  idGrupo: string;
  totalTarjetas: number = 0;

  @Output() change: EventEmitter<void> = new EventEmitter();
  @Output() ajusteTarjetas: EventEmitter<void> = new EventEmitter();
  @Output() ajusteAjustes: EventEmitter<void> = new EventEmitter();

  constructor(private _snackBar: MatSnackBar, private http: HttpClient, public auth: AuthService) {
    this.auth.user$.subscribe((user: any) => this.client = user.sub.replace('auth0|',''));
  }

  getUser(): Observable<any> {
    const options = {
      params: new HttpParams().append('client_id', this.client)
    };
    return this.http.get(`${environment.urlApi}usuario`, options);
  }

  putUser(data: any): Observable<any> {
    return this.http.put(`${environment.urlApi}usuario/${this.client}`, data);
  }

  crearGrupo() : Observable<any> {
    const data = {
      client_id: this.client
    };
    return this.http.post(`${environment.urlApi}grupo`, data);
  }

  getGrupos(): Observable<any> {
    const options = {
      params: new HttpParams().append('client_id', this.client)
    };
    return this.http.get(`${environment.urlApi}grupo-listdo`, options);
  }

  putGruposOrden(data: any): Observable<any> {
    data.client_id = this.client;
    return this.http.put(`${environment.urlApi}grupo/orden`, data);
  }

  getListaTotal(): Observable<any> {
    const options = {
      params: new HttpParams().append('client_id', this.client)
    };
    return this.http.get(`${environment.urlApi}lista`, options);
  }

  putDato(id: number, data: any): Observable<any> {
    data.client_id = this.client;
    return this.http.put(`${environment.urlApi}lista/${id}`, data);
  }

  putGrupo(id: number, data: any): Observable<any> {
    data.client_id = this.client;
    return this.http.put(`${environment.urlApi}grupo/${id}`, data);
  }

  quitarLista(idGrupo: string, idTarjeta: string): Observable<any> {
    const data = {
      client_id: this.client
    };
    return this.http.put(`${environment.urlApi}grupo/${idGrupo}/lista/${idTarjeta}`, data);
  }

  eliminarEnlace(idGrupo: string, idTarjeta: string): Observable<any> {
    return this.http.delete(`${environment.urlApi}grupo/${idGrupo}/lista/${idTarjeta}`);
  }

  eliminarGrupo(idGrupo: string): Observable<any> {
    return this.http.delete(`${environment.urlApi}grupo/${idGrupo}`);
  }

  agregarDato(data: any) : Observable<any> {
    data.client_id = this.client;
    return this.http.post(`${environment.urlApi}lista`, data);
  }

  alertaError(emit: boolean, message?: string): void {
    let mensaje = message ? message : '?????? Error: No eres Admin ????';
    if (emit) {
      this.change.emit();
    }
    this._snackBar.open(mensaje, '???', {
      duration: 5000,
    });
  }

  alertaOk(): void {
    this._snackBar.open('?????? Se guardo correctamente', '', {
      duration: 2000,
    });
  }

  subirImg(file: any) {
    const headers = new HttpHeaders().set('access_token', 'Client-ID 97b6b340fb16284');
    return this.http.post('https://api.imgur.com/3/image', file, {headers});
  }
}
