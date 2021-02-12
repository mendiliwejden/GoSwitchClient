import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizerteComponent } from './bizerte.component';

describe('BizerteComponent', () => {
  let component: BizerteComponent;
  let fixture: ComponentFixture<BizerteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizerteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
