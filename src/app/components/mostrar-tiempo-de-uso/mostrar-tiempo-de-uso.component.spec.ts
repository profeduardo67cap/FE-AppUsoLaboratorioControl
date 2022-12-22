import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTiempoDeUsoComponent } from './mostrar-tiempo-de-uso.component';

describe('MostrarTiempoDeUsoComponent', () => {
  let component: MostrarTiempoDeUsoComponent;
  let fixture: ComponentFixture<MostrarTiempoDeUsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTiempoDeUsoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarTiempoDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
