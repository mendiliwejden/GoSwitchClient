import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateEchangeComponent } from './validate-echange.component';

describe('ValidateEchangeComponent', () => {
  let component: ValidateEchangeComponent;
  let fixture: ComponentFixture<ValidateEchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateEchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateEchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
