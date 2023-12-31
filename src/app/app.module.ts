import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

/* Modulo personalizado */
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PipesModule } from './pipes-module/pipes-module.module';

/* Cambiar el locale de la applicacion */
import localeES from "@angular/common/locales/es-MX";
import localeFR from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeES);
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    PipesModule
  ],
  providers: [
    /* Cambiar de forma global el locale */
    {provide: LOCALE_ID, useValue: 'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
