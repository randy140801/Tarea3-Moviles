import { Component, OnInit } from '@angular/core';
import { IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-tabla-de-multiplicar',
  templateUrl: './tabla-de-multiplicar.page.html',
  styleUrls: ['./tabla-de-multiplicar.page.scss'],
})
export class TablaDeMultiplicarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  n:number = 0;
  ntabla = [];
  cont:number = 1;

  tabla()
  {
    for (let i = 1; i < 13; i++) {
      this.ntabla[i-1] = this.n + "x" + i + "=" + this.n * i;
    }
  }

}
