import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  @Input() text: string;
  @Input() icon: string;
  @Input() desactivado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
