import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExcoComponent } from './add-exco.component';

describe('AddExcoComponent', () => {
  let component: AddExcoComponent;
  let fixture: ComponentFixture<AddExcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
