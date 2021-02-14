import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GafsaComponent } from './gafsa.component';

describe('GafsaComponent', () => {
  let component: GafsaComponent;
  let fixture: ComponentFixture<GafsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GafsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GafsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
