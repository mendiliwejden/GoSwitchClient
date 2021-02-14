import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManoubaComponent } from './manouba.component';

describe('ManoubaComponent', () => {
  let component: ManoubaComponent;
  let fixture: ComponentFixture<ManoubaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManoubaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManoubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
