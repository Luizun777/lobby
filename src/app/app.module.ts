import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompoentsModule } from './componnets/componnets.module';
import { MaterialModule } from './material-components/material-components.module';
import { AuthModule } from '@auth0/auth0-angular';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CompoentsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'luizun.auth0.com',
      clientId: 'tDYc9Szsf1vWk3KM5Pv3Ty5fCOSwuMA1',
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
