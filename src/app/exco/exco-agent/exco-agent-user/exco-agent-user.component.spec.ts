import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcoAgentUserComponent } from './exco-agent-user.component';

describe('ExcoAgentUserComponent', () => {
  let component: ExcoAgentUserComponent;
  let fixture: ComponentFixture<ExcoAgentUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcoAgentUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcoAgentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
