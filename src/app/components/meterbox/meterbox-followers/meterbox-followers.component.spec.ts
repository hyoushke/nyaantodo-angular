import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterboxFollowersComponent } from './meterbox-followers.component';

describe('MeterboxFollowersComponent', () => {
  let component: MeterboxFollowersComponent;
  let fixture: ComponentFixture<MeterboxFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterboxFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterboxFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
