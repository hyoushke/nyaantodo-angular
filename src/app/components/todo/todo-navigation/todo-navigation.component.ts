import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-navigation',
  templateUrl: './todo-navigation.component.html',
  styleUrls: ['./todo-navigation.component.sass']
})
export class TodoNavigationComponent implements OnInit {


  public message = "";
  public counter:number = 0;

  @Output() navigationEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClickNavigateItem(todoNavigation:string){

    let data = {message: "broadcast from navigation child",
                counter: this.counter,
                navigation: todoNavigation };
    this.counter++;
    this.navigationEvent.emit(data);

    //alert('Create Button was Clicked');
    //alert('broadcast: hide todolis, hide todoreports, hide todosummary, show todoform');

  }

}
