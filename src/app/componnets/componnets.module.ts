import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ColumnaComponent } from './columna/columna.component';
import { BotonOptionComponent } from './boton-option/boton-option.component';
import { BotonComponent } from './boton/boton.component';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    BrowserModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [
    TarjetaComponent,
    ColumnaComponent,
    BotonOptionComponent,
    BotonComponent,
    ModalEditComponent
  ],
  exports: [
    TarjetaComponent,
    ColumnaComponent,
    BotonOptionComponent,
    BotonComponent,
    ModalEditComponent
  ]
})
export class CompoentsModule { }
