import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TataouineComponent } from './tataouine.component';

describe('TataouineComponent', () => {
  let component: TataouineComponent;
  let fixture: ComponentFixture<TataouineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TataouineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TataouineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
