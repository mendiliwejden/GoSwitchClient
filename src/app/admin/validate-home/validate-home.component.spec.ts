import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateHomeComponent } from './validate-home.component';

describe('ValidateHomeComponent', () => {
  let component: ValidateHomeComponent;
  let fixture: ComponentFixture<ValidateHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
