import { Component, OnInit } from '@angular/core';
import { Fondos } from 'src/assets/fondo/fondos';

@Component({
  selector: 'app-fondos',
  templateUrl: './fondos.component.html',
  styleUrls: ['./fondos.component.scss']
})
export class FondosComponent implements OnInit {

  fondos: string[] = Fondos;
  path: string = '../../../assets/fondo/';

  constructor() { }

  ngOnInit(): void {
  }

}
