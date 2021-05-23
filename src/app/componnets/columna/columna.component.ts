import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { ListadosService } from 'src/app/services/listados.service';

@Component({
  selector: 'app-columna',
  templateUrl: './columna.component.html',
  styleUrls: ['./columna.component.scss']
})
export class ColumnaComponent implements OnInit {

  @Input() listado: any;

  @Input() list: string;
  @Output() cambio: EventEmitter<any> = new EventEmitter<any>();
  colum: boolean;
  columSub: Subscription;

  constructor(private listadosSrv: ListadosService) { }

  ngOnInit(): void {
    this.changeColums();
    this.columSub = this.listadosSrv.ajusteTarjetas.subscribe(() => this.changeColums());
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listado.listadoId, event.previousIndex, event.currentIndex);
  }

  changeColums(): void {
    this.colum = localStorage.getItem('ajuste-tarjetas') === 'Column';
  }

  tarjetaSelect(): void {
    this.listadosSrv.idGrupo = this.listado._id;
  }

}
