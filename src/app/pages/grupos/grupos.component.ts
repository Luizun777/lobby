import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListadosService } from 'src/app/services/listados.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit, OnDestroy {

  minWidthList: any[] = [];
  minWidthSub: Subscription;
  contador: number = 0;
  grupos: any;
  listadoSub: Subscription;
  userSub: Subscription;
  cargando: boolean;
  colum: boolean;
  columSub: Subscription;

  constructor(
    private listadosSrv: ListadosService,
    public auth: AuthService,
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.minWidth();
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
    this.minWidthSub.unsubscribe();
  }

  escucharWidth() {
    this.minWidthSub = this.breakpointObserver.observe(this.minWidthList).subscribe((state: any) => {
      this.contador = 0;
      for (const key in state.breakpoints) {
        if (state.breakpoints.hasOwnProperty(key)) {
          if (state.breakpoints[key]) {
            this.contador++;
          } else {
            this.validContador();
            break;
          }
        }
      }
    });
  }

  minWidth() {
    for (let i = 1; i < 1000; i++) {
      this.minWidthList.push(`(min-width: ${i}rem)`);
    }
    this.escucharWidth();
  }

  validContador(): void {
    if (this.contador <= 60) {
      this.contador -= 0.5;
    } else if (this.contador > 60 && this.contador <= 100) {
      this.contador -= 5;
    } else if (this.contador > 100 && this.contador <= 110) {
      this.contador -= 20;
    } else if (this.contador > 110 && this.contador <= 120) {
      this.contador -= 25;
    } else {
      this.contador -= 30;
    }
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
