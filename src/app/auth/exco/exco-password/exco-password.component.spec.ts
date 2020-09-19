import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcoPasswordComponent } from './exco-password.component';

describe('ExcoPasswordComponent', () => {
  let component: ExcoPasswordComponent;
  let fixture: ComponentFixture<ExcoPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcoPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcoPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
