import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterboxSharesComponent } from './meterbox-shares.component';

describe('MeterboxSharesComponent', () => {
  let component: MeterboxSharesComponent;
  let fixture: ComponentFixture<MeterboxSharesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterboxSharesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterboxSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
