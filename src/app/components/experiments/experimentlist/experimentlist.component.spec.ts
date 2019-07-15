import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentlistComponent } from './experimentlist.component';

describe('ExperimentlistComponent', () => {
  let component: ExperimentlistComponent;
  let fixture: ComponentFixture<ExperimentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
