import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraritemsComponent } from './registraritems.component';

describe('RegistraritemsComponent', () => {
  let component: RegistraritemsComponent;
  let fixture: ComponentFixture<RegistraritemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistraritemsComponent]
    });
    fixture = TestBed.createComponent(RegistraritemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
