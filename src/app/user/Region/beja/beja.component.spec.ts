import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BejaComponent } from './beja.component';

describe('BejaComponent', () => {
  let component: BejaComponent;
  let fixture: ComponentFixture<BejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
