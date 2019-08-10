import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoReactiveformComponent } from './todo-reactiveform.component';

describe('TodoReactiveformComponent', () => {
  let component: TodoReactiveformComponent;
  let fixture: ComponentFixture<TodoReactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoReactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
