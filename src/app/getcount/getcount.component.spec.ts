import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcountComponent } from './getcount.component';

describe('GetcountComponent', () => {
  let component: GetcountComponent;
  let fixture: ComponentFixture<GetcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
