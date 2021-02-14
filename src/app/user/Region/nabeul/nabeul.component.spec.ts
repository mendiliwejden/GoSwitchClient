import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NabeulComponent } from './nabeul.component';

describe('NabeulComponent', () => {
  let component: NabeulComponent;
  let fixture: ComponentFixture<NabeulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NabeulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NabeulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
