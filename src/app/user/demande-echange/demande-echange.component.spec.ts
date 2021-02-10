import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeEchangeComponent } from './demande-echange.component';

describe('DemandeEchangeComponent', () => {
  let component: DemandeEchangeComponent;
  let fixture: ComponentFixture<DemandeEchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeEchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeEchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
