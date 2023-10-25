import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Modulo personalizado */
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';

import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
