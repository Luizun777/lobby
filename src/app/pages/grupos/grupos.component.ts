import { Component, OnInit } from '@angular/core';
import { ListadosService } from 'src/app/services/listados.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';

@Component({
  selector: 'grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

  grupos: any;
  listadoSub: Subscription;

  constructor(private ListadosSrv: ListadosService) { }

  ngOnInit(): void {
    this.getGrupos();
    this.ListadosSrv.change.subscribe(() => this.getGrupos());
  }

  ngOnDestroy(): void {
    this.listadoSub.unsubscribe();
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
