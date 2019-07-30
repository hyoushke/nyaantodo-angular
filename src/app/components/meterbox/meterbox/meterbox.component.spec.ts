import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterboxComponent } from './meterbox.component';

describe('MeterboxComponent', () => {
  let component: MeterboxComponent;
  let fixture: ComponentFixture<MeterboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
