import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  @Input() datos: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.datos.URL);
  }

  abirEnlace() {
    window.open(`//${this.datos.URL}`, '_blank');
  }

}
