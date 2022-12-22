import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraPersonaEncontradaComponent } from './muestra-persona-encontrada.component';

describe('MuestraPersonaEncontradaComponent', () => {
  let component: MuestraPersonaEncontradaComponent;
  let fixture: ComponentFixture<MuestraPersonaEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestraPersonaEncontradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuestraPersonaEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
