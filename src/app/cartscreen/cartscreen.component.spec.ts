import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartscreenComponent } from './cartscreen.component';

describe('CartscreenComponent', () => {
  let component: CartscreenComponent;
  let fixture: ComponentFixture<CartscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
