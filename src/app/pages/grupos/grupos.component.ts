import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListadosService } from 'src/app/services/listados.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit, OnDestroy {

  grupos: any;
  listadoSub: Subscription;
  userSub: Subscription;
  cargando: boolean;
  colum: boolean;
  columSub: Subscription;

  constructor(private listadosSrv: ListadosService, public auth: AuthService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.changeColums();
    this.userSub = this.auth.user$.subscribe(() => this.getGrupos());
    this.listadoSub = this.listadosSrv.change.subscribe(() => this.getGrupos());
    this.columSub = this.listadosSrv.ajusteTarjetas.subscribe(() => this.changeColums());
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.listadoSub.unsubscribe();
    this.columSub.unsubscribe();
  }

  getGrupos(): void {
    this.listadosSrv.getGrupos().subscribe((grupos: any) => {
      this.cargando = !grupos.ok;
      this.grupos = grupos.result;
    }, (error) => this.cargando = error.ok);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.grupos, event.previousIndex, event.currentIndex);
  }

  changeColums(): void {
    this.colum = localStorage.getItem('ajuste-tarjetas') === 'Column';
  }

}
