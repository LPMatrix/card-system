import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcoProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ExcoProfileComponent;
  let fixture: ComponentFixture<ExcoProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcoProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
