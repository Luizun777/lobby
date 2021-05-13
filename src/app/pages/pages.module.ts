import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material-components/material-components.module';
import { CompoentsModule } from '../componnets/componnets.module';

import { PagesComponent } from './pages.component';
import { GruposComponent } from './grupos/grupos.component';

@NgModule({
  declarations: [
    PagesComponent,
    GruposComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    MaterialModule,
    CompoentsModule
  ]
})
export class PageModule { }
