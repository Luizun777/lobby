import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ListadosService } from 'src/app/services/listados.service';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit, OnDestroy {

  @Input() datos: any;
  @Input() newTarjeta: boolean = false;
  img: string = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  ajusteSubnombre: boolean;
  ajusteKanji: boolean;
  ajustesSub: Subscription;

  constructor(private listadosSrv: ListadosService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.validarTitulos();
    if (!this.newTarjeta) {
      this.img = this.datos.imgUrl ? this.datos.imgUrl : this.img;
    }
    this.ajustesSub = this.listadosSrv.ajusteAjustes.subscribe(() => this.validarTitulos());
  }

  ngOnDestroy(): void {
    this.ajustesSub.unsubscribe();
  }

  abirEnlace() {
    window.open(`${this.datos.url}`, '_blank');
  }

  validarTitulos(): void {
    this.ajusteSubnombre = localStorage.getItem('ajuste-subnombre') === 'true';
    this.ajusteKanji = localStorage.getItem('ajuste-kanji') === 'true';
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
