import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KefComponent } from './kef.component';

describe('KefComponent', () => {
  let component: KefComponent;
  let fixture: ComponentFixture<KefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
