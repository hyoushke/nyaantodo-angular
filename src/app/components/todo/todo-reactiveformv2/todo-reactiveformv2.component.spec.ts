import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoReactiveformv2Component } from './todo-reactiveformv2.component';

describe('TodoReactiveformv2Component', () => {
  let component: TodoReactiveformv2Component;
  let fixture: ComponentFixture<TodoReactiveformv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoReactiveformv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoReactiveformv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
