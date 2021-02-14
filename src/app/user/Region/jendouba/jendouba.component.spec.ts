import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JendoubaComponent } from './jendouba.component';

describe('JendoubaComponent', () => {
  let component: JendoubaComponent;
  let fixture: ComponentFixture<JendoubaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JendoubaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JendoubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
