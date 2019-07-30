import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentitemComponent } from './experimentitem.component';

describe('ExperimentitemComponent', () => {
  let component: ExperimentitemComponent;
  let fixture: ComponentFixture<ExperimentitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
