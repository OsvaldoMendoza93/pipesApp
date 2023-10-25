import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsPipesComponent } from './pages/basics-pipes/basics-pipes.component';
import { CustomPipesComponent } from './pages/custom-pipes/custom-pipes.component';
import { NumberPipesComponent } from './pages/numbers-pipes/numbers-pipes.component';
import { UncommonPipesComponent } from './pages/uncommon-pipes/uncommon-pipes.component';


const routes: Routes = [
  {
    path: 'basics',
    component: BasicsPipesComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumberPipesComponent
  },
  {
    path: 'uncommons',
    component: UncommonPipesComponent
  },
  {
    path: 'customs',
    component: CustomPipesComponent
  },
  {
    path: '**',
    redirectTo: 'basics'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
