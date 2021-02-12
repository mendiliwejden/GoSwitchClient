import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GabesComponent } from './gabes.component';

describe('GabesComponent', () => {
  let component: GabesComponent;
  let fixture: ComponentFixture<GabesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GabesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GabesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
