import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  @Input() datos: any;
  img: string = 'https://material.angular.io/assets/img/examples/shiba1.jpg';

  constructor() { }

  ngOnInit(): void {
    this.img = this.datos.imgUrl ? this.datos.imgUrl : this.img;
  }

  abirEnlace() {
    window.open(`${this.datos.url}`, '_blank');
  }

}
