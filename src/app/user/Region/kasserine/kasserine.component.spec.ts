import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KasserineComponent } from './kasserine.component';

describe('KasserineComponent', () => {
  let component: KasserineComponent;
  let fixture: ComponentFixture<KasserineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KasserineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KasserineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
