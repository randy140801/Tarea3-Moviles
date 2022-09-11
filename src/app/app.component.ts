import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sumadora', url: '/sumadora', icon: 'calculator' },
    { title: 'Traductor', url: '/traductor', icon: 'language' },
    { title: 'Tabla de multiplicar', url: '/tabla-de-multiplicar', icon: 'grid' },
    { title: 'Info', url: '/info', icon: 'help-circle' },
  ];
  constructor() {}
}
