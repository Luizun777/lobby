import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-columna',
  templateUrl: './columna.component.html',
  styleUrls: ['./columna.component.scss']
})
export class ColumnaComponent implements OnInit {

  @Input() listado: any;

  @Input() list: string;
  @Output() cambio: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.listado);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listado.listado, event.previousIndex, event.currentIndex);
    const newOrden = this.listado.listado.map((lista: any) => {
      return lista.id;
    });
    console.log(newOrden);
  }

}
