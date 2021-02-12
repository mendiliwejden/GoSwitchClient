import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TozeurComponent } from './tozeur.component';

describe('TozeurComponent', () => {
  let component: TozeurComponent;
  let fixture: ComponentFixture<TozeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TozeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TozeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
