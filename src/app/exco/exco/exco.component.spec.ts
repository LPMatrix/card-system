import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcoComponent } from './exco.component';

describe('ExcoComponent', () => {
  let component: ExcoComponent;
  let fixture: ComponentFixture<ExcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
