import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../shared/modules/prime-ng/prime-ng.module';


import { BasicsPipesComponent } from './pages/basics-pipes/basics-pipes.component';
import { CustomPipesComponent } from './pages/custom-pipes/custom-pipes.component';
import { NumberPipesComponent } from './pages/numbers-pipes/numbers-pipes.component';
import { UncommonPipesComponent } from './pages/uncommon-pipes/uncommon-pipes.component';


import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { PipesRoutingModule } from './pipes-module-routing.module';

@NgModule({
  declarations: [
    /* Components */
    BasicsPipesComponent,
    NumberPipesComponent,
    UncommonPipesComponent,
    CustomPipesComponent,

    /* Pipes */
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    PipesRoutingModule
  ],
  exports: [
    BasicsPipesComponent,
    NumberPipesComponent,
    UncommonPipesComponent,
    CustomPipesComponent
  ]
})
export class PipesModule { }
