import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroitemsComponent } from './registroitems.component';

describe('RegistroitemsComponent', () => {
  let component: RegistroitemsComponent;
  let fixture: ComponentFixture<RegistroitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroitemsComponent]
    });
    fixture = TestBed.createComponent(RegistroitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
