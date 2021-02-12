import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidiBouzidComponent } from './sidi-bouzid.component';

describe('SidiBouzidComponent', () => {
  let component: SidiBouzidComponent;
  let fixture: ComponentFixture<SidiBouzidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidiBouzidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidiBouzidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
