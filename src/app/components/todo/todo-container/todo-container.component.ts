import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.sass']
})
export class TodoContainerComponent implements OnInit {

  public todos = [];

  constructor(private _todosService:TodosService ) { }

  ngOnInit() {
     console.log('I have been Initialize');

     this.todos = this._todosService.getTodos();

  }

}
