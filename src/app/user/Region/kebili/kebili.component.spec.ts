import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KebiliComponent } from './kebili.component';

describe('KebiliComponent', () => {
  let component: KebiliComponent;
  let fixture: ComponentFixture<KebiliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KebiliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KebiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
