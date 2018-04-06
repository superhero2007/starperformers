import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BologinComponent } from './bologin.component';

describe('BologinComponent', () => {
  let component: BologinComponent;
  let fixture: ComponentFixture<BologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
