import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { ListadosService } from '../services/listados.service';
import { PicturesService } from '../services/pictures.service';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy {

  colum: boolean;
  columSub: Subscription;
  isAuth: boolean;
  fondo = 'https://lovy.com.mx/assets/fondo/fondo03.jpg';
  urlFondo: string = 'https://lovy.com.mx/assets/fondo/';
  fondoSub: Subscription;

  constructor(
    private listadosSrv: ListadosService,
    private picturesSrv: PicturesService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.validFondo();
    this.isAuth = false;
    this.auth.user$.subscribe(
      () => this.isAuth = true,
      () => this.isAuth = false
    );
    this.changeColums();
    this.columSub = this.listadosSrv.ajusteTarjetas.subscribe(() => this.changeColums());
    this.fondoSub = this.picturesSrv.changeFondo.subscribe(() => this.validFondo());
  }

  ngOnDestroy(): void {
    this.fondoSub.unsubscribe();
  }

  changeColums(): void {
    this.colum = localStorage.getItem('ajuste-tarjetas') === 'Column';
  }

  validFondo(): void {
    if (localStorage.getItem('local-fondo')) {
      this.fondo = this.urlFondo+localStorage.getItem('local-fondo');
    }
  }

}
