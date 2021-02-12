import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfaxComponent } from './sfax.component';

describe('SfaxComponent', () => {
  let component: SfaxComponent;
  let fixture: ComponentFixture<SfaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
