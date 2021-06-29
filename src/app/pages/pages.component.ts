import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { ListadosService } from '../services/listados.service';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  colum: boolean;
  columSub: Subscription;
  isAuth: boolean;
  // https://res.cloudinary.com/dzbpfuieg/image/upload/v1616549192/iswn9m5wv2gw1znq6lmd.jpg

  constructor(private listadosSrv: ListadosService, public auth: AuthService) { }

  ngOnInit(): void {
    this.isAuth = false;
    this.auth.user$.subscribe(
      () => this.isAuth = true,
      () => this.isAuth = false
    );
    this.changeColums();
    this.columSub = this.listadosSrv.ajusteTarjetas.subscribe(() => this.changeColums());
  }

  changeColums(): void {
    this.colum = localStorage.getItem('ajuste-tarjetas') === 'Column';
  }

}
