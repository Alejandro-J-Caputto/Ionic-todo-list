import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerarPage } from './generar.page';

describe('GenerarPage', () => {
  let component: GenerarPage;
  let fixture: ComponentFixture<GenerarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
