import { Component, OnInit } from '@angular/core';
import { ListadosService } from 'src/app/services/listados.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

  grupos: any;

  constructor(private ListadosSrv: ListadosService) { }

  ngOnInit(): void {
    this.getGrupos();
  }

  getGrupos(): void {
    this.ListadosSrv.getGrupos().subscribe((grupos: any) => {
      console.log(grupos.result);
      this.grupos = grupos.result;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.grupos, event.previousIndex, event.currentIndex);
  }

}
