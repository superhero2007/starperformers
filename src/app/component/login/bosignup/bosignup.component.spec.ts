import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BosignupComponent } from './bosignup.component';

describe('BosignupComponent', () => {
  let component: BosignupComponent;
  let fixture: ComponentFixture<BosignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BosignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BosignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
