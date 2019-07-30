import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterboxViewsComponent } from './meterbox-views.component';

describe('MeterboxViewsComponent', () => {
  let component: MeterboxViewsComponent;
  let fixture: ComponentFixture<MeterboxViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterboxViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterboxViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
