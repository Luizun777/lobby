import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalEditComponent } from './componnets/modal-edit/modal-edit.component';
import { ListadosService } from './services/listados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lobby-app';

  constructor(private listadosService: ListadosService) {
    if (!localStorage.getItem('key')) {
      localStorage.setItem('key', 'No Admin');
    }
    if (!localStorage.getItem('ajuste-tarjetas')) {
      localStorage.setItem('ajuste-tarjetas', 'Column');
    }
    this.listadosService.validAdmin();
  }
}
