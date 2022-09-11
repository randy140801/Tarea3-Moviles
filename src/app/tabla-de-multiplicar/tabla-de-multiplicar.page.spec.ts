import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablaDeMultiplicarPage } from './tabla-de-multiplicar.page';

describe('TablaDeMultiplicarPage', () => {
  let component: TablaDeMultiplicarPage;
  let fixture: ComponentFixture<TablaDeMultiplicarPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDeMultiplicarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablaDeMultiplicarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
