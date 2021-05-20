import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjusteTarjetaComponent } from './ajuste-tarjeta.component';

describe('AjusteTarjetaComponent', () => {
  let component: AjusteTarjetaComponent;
  let fixture: ComponentFixture<AjusteTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjusteTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjusteTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
