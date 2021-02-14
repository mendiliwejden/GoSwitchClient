import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAvailableComponent } from './home-available.component';

describe('HomeAvailableComponent', () => {
  let component: HomeAvailableComponent;
  let fixture: ComponentFixture<HomeAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
