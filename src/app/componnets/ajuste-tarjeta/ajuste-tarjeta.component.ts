import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { ListadosService } from 'src/app/services/listados.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'ajuste-tarjeta',
  templateUrl: './ajuste-tarjeta.component.html',
  styleUrls: ['./ajuste-tarjeta.component.scss']
})
export class AjusteTarjetaComponent implements OnInit, OnDestroy {

  listadoSub: Subscription;
  userSub: Subscription;
  grupos: any = [];

  constructor(private listadosSrv: ListadosService, public auth: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.auth.user$.subscribe(() => this.getGrupos());
    this.listadoSub = this.listadosSrv.change.subscribe(() => this.getGrupos());
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.listadoSub.unsubscribe();
  }

  crearGrupo(): void {
    this.listadosSrv.crearGrupo().subscribe(() => this.listadosSrv.change.emit());
  }

  getGrupos(): void {
    this.listadosSrv.getGrupos().subscribe(
      (grupos: any) => this.grupos = grupos.result,
      (error) => {
        if (!error.error.ordenDB) {
          this.crearGrupo();
        }
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.grupos, event.previousIndex, event.currentIndex);
    const payload = {
      grupoListId: this.grupos.map((grupo: any) => grupo._id)
    };
    this.listadosSrv.putGruposOrden(payload).subscribe(() => this.listadosSrv.change.emit());
  }

}
