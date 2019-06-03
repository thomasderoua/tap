import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTapComponent } from './button-tap.component';

describe('ButtonTapComponent', () => {
  let component: ButtonTapComponent;
  let fixture: ComponentFixture<ButtonTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
