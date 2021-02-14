import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaghouanComponent } from './zaghouan.component';

describe('ZaghouanComponent', () => {
  let component: ZaghouanComponent;
  let fixture: ComponentFixture<ZaghouanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaghouanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaghouanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
