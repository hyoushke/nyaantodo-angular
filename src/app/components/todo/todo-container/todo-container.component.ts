import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
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

  public child:string;
  public counter:number;
  public message:string;
  public navigation:string;
  public toaster:string;
  public isLoading:boolean = false;

  public todoContainerMessage:string;

  public todo_data = null;
  public todo_action = null;
  public todo_notification = null;
  public todo_sidebar = null;
  public todo_summary = null;


  constructor(private _todosService:TodosService ) { }

  ngOnInit(): void {
     console.log('I have been Initialize');
     this.getTodos();
     //this.todos$ = this._todosService.getTodos();
     this._todosService.postsSource.subscribe(todos => this.todos = todos);

  }

  getTodos(): void {
    this._todosService.getTodos().subscribe(todos => this.todos = todos);

  }




  //handles child component events data sharing
  //we can rename it all as
  //onHandlesComponentEvent in the future..
  recieveNavigationEvent($event): void{

    this.isLoading = true;
    this.navigation = 'TDO_LOADING';

    setTimeout( ()=>{

      this.child = 'Todo Navigation';
      this.navigation = $event.navigation;
      this.counter = $event.counter;
      this.message = $event.message;
      this.toaster = 'Toasted Notification';
      this.isLoading = false;


    }, 2000);

  }

  recieveTodoFormEvent($event): void{
    this.child = 'Todo Form';
    this.navigation = $event.navigation;
    this.counter = $event.counter;
    this.message = $event.message;
    this.toaster = 'Toasted Notification';

    alert('New Todo Successfully Created');

    this.navigation = 'TDO_LIST';
    this.getTodos();
  }

  recieveTodoReactiveFormEvent($event): void{
    this.child = 'Todo Reactive Form';
    this.navigation = $event.navigation;
    this.counter = $event.counter;
    this.message = $event.message;
    this.toaster = 'Toasted Notification';

    alert('New Todo Reactive Successfully Created');

    this.navigation = 'TDO_LIST';
    this.getTodos();
  }

  recieveTodoReactiveFormv2Event($event): void{
    this.child = 'Todo Reactive v2 Form';
    this.navigation = $event.navigation;
    this.counter = $event.counter;
    this.message = $event.message;
    this.toaster = 'Toasted Notification';

    alert('New Todo Reactive Successfully Created');

    this.navigation = 'TDO_LIST';
    this.getTodos();
  }


}
