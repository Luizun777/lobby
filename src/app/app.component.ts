import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditComponent } from './componnets/modal-edit/modal-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lobby-app';

  constructor(public dialog: MatDialog) {}

  nuevoEnlace() {
    this.dialog.open(ModalEditComponent, {
      width: '250px',
      data: {type: 'Crear', info: {}, grupo: false}
    });
  }
}
