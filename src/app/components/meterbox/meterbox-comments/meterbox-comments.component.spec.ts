import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterboxCommentsComponent } from './meterbox-comments.component';

describe('MeterboxCommentsComponent', () => {
  let component: MeterboxCommentsComponent;
  let fixture: ComponentFixture<MeterboxCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterboxCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterboxCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
