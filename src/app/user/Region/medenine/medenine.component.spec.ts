import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedenineComponent } from './medenine.component';

describe('MedenineComponent', () => {
  let component: MedenineComponent;
  let fixture: ComponentFixture<MedenineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedenineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedenineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
