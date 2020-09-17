import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExcosComponent } from './view-excos.component';

describe('ViewExcosComponent', () => {
  let component: ViewExcosComponent;
  let fixture: ComponentFixture<ViewExcosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExcosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
