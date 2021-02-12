import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonastirComponent } from './monastir.component';

describe('MonastirComponent', () => {
  let component: MonastirComponent;
  let fixture: ComponentFixture<MonastirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonastirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonastirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
