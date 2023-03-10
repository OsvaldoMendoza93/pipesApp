import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modulo personalizado */
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';

import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
