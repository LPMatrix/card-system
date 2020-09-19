import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcoLoginComponent } from './exco-login.component';

describe('ExcoLoginComponent', () => {
  let component: ExcoLoginComponent;
  let fixture: ComponentFixture<ExcoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
