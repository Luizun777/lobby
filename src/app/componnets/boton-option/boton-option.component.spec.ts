import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonOptionComponent } from './boton-option.component';

describe('BotonOptionComponent', () => {
  let component: BotonOptionComponent;
  let fixture: ComponentFixture<BotonOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
