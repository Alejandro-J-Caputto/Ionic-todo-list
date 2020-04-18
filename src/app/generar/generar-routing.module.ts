import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarPage } from './generar.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarPageRoutingModule {}
