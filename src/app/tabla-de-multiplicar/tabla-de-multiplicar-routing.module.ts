import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaDeMultiplicarPage } from './tabla-de-multiplicar.page';

const routes: Routes = [
  {
    path: '',
    component: TablaDeMultiplicarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaDeMultiplicarPageRoutingModule {}
