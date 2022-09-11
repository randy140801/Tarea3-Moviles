import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaDeMultiplicarPageRoutingModule } from './tabla-de-multiplicar-routing.module';

import { TablaDeMultiplicarPage } from './tabla-de-multiplicar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaDeMultiplicarPageRoutingModule
  ],
  declarations: [TablaDeMultiplicarPage]
})
export class TablaDeMultiplicarPageModule {}
