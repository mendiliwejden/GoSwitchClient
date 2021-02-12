import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KairouanComponent } from './kairouan.component';

describe('KairouanComponent', () => {
  let component: KairouanComponent;
  let fixture: ComponentFixture<KairouanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KairouanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KairouanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
