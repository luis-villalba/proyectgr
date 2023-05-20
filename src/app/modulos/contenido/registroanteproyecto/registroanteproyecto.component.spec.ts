import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroanteproyectoComponent } from './registroanteproyecto.component';

describe('RegistroanteproyectoComponent', () => {
  let component: RegistroanteproyectoComponent;
  let fixture: ComponentFixture<RegistroanteproyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroanteproyectoComponent]
    });
    fixture = TestBed.createComponent(RegistroanteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
