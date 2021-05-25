import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListadosService } from 'src/app/services/listados.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  @Input() datos: any;
  img: string = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  ajusteSubnombre: boolean;
  ajusteKanji: boolean;
  ajustesSub: Subscription;

  constructor(private listadosSrv: ListadosService) { }

  ngOnInit(): void {
    this.validarTitulos();
    this.img = this.datos.imgUrl ? this.datos.imgUrl : this.img;
    this.ajustesSub = this.listadosSrv.ajusteAjustes.subscribe(() => this.validarTitulos());
  }

  abirEnlace() {
    window.open(`${this.datos.url}`, '_blank');
  }

  validarTitulos(): void {
    this.ajusteSubnombre = localStorage.getItem('ajuste-subnombre') === 'true';
    this.ajusteKanji = localStorage.getItem('ajuste-kanji') === 'true';
  }

}
