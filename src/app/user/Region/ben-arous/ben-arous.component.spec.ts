import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenArousComponent } from './ben-arous.component';

describe('BenArousComponent', () => {
  let component: BenArousComponent;
  let fixture: ComponentFixture<BenArousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenArousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenArousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
