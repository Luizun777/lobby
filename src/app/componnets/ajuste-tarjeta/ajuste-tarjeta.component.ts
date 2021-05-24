import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { ListadosService } from 'src/app/services/listados.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ajuste-tarjeta',
  templateUrl: './ajuste-tarjeta.component.html',
  styleUrls: ['./ajuste-tarjeta.component.scss']
})
export class AjusteTarjetaComponent implements OnInit, OnDestroy {

  listadoSub: Subscription;
  userSub: Subscription;
  grupos: any = [];

  constructor(
    public dialog: MatDialog,
    private listadosSrv: ListadosService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.getGrupos();
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
      (grupos: any) => {
        this.grupos = grupos.result;
        this.listadosSrv.totalTarjetas = this.grupos.length;
      },
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

  agregarEnlace(): void {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      width: '250px',
      data: {type: 'Crear', info: {}, grupo: false}
    });

    dialogRef.afterClosed().subscribe(() => {
      // setTimeout(() => {
      //   // this.getListado();
      // }, 1000);
    });
  }

}
