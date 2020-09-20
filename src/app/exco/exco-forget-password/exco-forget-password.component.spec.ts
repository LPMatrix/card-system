import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcoForgetPasswordComponent } from './exco-forget-password.component';

describe('ExcoForgetPasswordComponent', () => {
  let component: ExcoForgetPasswordComponent;
  let fixture: ComponentFixture<ExcoForgetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcoForgetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcoForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
