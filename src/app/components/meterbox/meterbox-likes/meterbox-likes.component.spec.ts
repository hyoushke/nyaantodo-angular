import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterboxLikesComponent } from './meterbox-likes.component';

describe('MeterboxLikesComponent', () => {
  let component: MeterboxLikesComponent;
  let fixture: ComponentFixture<MeterboxLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterboxLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterboxLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
