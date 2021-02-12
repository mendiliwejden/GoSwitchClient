import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilianaComponent } from './siliana.component';

describe('SilianaComponent', () => {
  let component: SilianaComponent;
  let fixture: ComponentFixture<SilianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
