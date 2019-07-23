import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { IPost } from 'src/app/interface/IPost';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.sass']
})
export class TodoContainerComponent implements OnInit {

  //public todos$:Observable<IPost[]>;
  public todos:IPost[];

  constructor(private _todosService:TodosService ) { }

  ngOnInit() {
     console.log('I have been Initialize');
     this.getTodos();
     //this.todos$ = this._todosService.getTodos();
     this._todosService.postsSource.subscribe(todos => this.todos = todos);

  }

  getTodos(){
    this._todosService.getTodos().subscribe(todos => this.todos = todos);

  }

}
