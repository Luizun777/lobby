import { Component, OnInit } from '@angular/core';
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

  constructor(private listadosSrv: ListadosService) { }

  ngOnInit(): void {
    this.changeColums();
    this.columSub = this.listadosSrv.ajusteTarjetas.subscribe(() => this.changeColums());
  }

  changeColums(): void {
    this.colum = localStorage.getItem('ajuste-tarjetas') === 'Column';
  }

}
