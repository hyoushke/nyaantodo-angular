import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterboxDownloadsComponent } from './meterbox-downloads.component';

describe('MeterboxDownloadsComponent', () => {
  let component: MeterboxDownloadsComponent;
  let fixture: ComponentFixture<MeterboxDownloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterboxDownloadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterboxDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
