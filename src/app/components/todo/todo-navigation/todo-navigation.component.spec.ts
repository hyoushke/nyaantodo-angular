import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNavigationComponent } from './todo-navigation.component';

describe('TodoNavigationComponent', () => {
  let component: TodoNavigationComponent;
  let fixture: ComponentFixture<TodoNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
