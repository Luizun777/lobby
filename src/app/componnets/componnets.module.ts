import { CommonModule } from '@angular/common';
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
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatRadioModule } from '@angular/material/radio';
import { AjusteTarjetaComponent } from './ajuste-tarjeta/ajuste-tarjeta.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    ImageCropperModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSlideToggleModule
  ],
  declarations: [
    TarjetaComponent,
    ColumnaComponent,
    BotonOptionComponent,
    BotonComponent,
    ModalEditComponent,
    SidenavComponent,
    AjusteTarjetaComponent,
    ModalConfirmComponent,
    EditPerfilComponent
  ],
  exports: [
    TarjetaComponent,
    ColumnaComponent,
    BotonOptionComponent,
    BotonComponent,
    ModalEditComponent,
    SidenavComponent,
    ModalConfirmComponent
  ]
})
export class CompoentsModule { }
