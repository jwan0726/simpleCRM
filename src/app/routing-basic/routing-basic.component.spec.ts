import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingBasicComponent } from './routing-basic.component';

describe('RoutingBasicComponent', () => {
  let component: RoutingBasicComponent;
  let fixture: ComponentFixture<RoutingBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
