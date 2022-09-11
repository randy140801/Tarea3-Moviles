import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  n1:number = 0;
  n2:number = 0;
  result:number;

  sumar():void
  {
    this.result = this.n1 + this.n2;
  }

}
