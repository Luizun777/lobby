import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';

registerLocaleData(es);

@NgModule({
  imports: [
    DragDropModule,
    NzButtonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule
  ],
  exports: [
    DragDropModule,
    NzButtonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
