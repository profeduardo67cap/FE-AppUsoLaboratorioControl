import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturarCurpComponent } from './capturar-curp.component';

describe('CapturarCurpComponent', () => {
  let component: CapturarCurpComponent;
  let fixture: ComponentFixture<CapturarCurpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturarCurpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturarCurpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
