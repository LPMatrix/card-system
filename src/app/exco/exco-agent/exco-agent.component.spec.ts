import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcoAgentComponent } from './exco-agent.component';

describe('ExcoAgentComponent', () => {
  let component: ExcoAgentComponent;
  let fixture: ComponentFixture<ExcoAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcoAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcoAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
