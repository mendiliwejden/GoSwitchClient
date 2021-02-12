import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TunisComponent } from './tunis.component';

describe('TunisComponent', () => {
  let component: TunisComponent;
  let fixture: ComponentFixture<TunisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
