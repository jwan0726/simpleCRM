import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingInterpolComponent } from './binding-interpol.component';

describe('BindingInterpolComponent', () => {
  let component: BindingInterpolComponent;
  let fixture: ComponentFixture<BindingInterpolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingInterpolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingInterpolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
