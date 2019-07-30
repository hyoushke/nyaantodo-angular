import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-navigation',
  templateUrl: './todo-navigation.component.html',
  styleUrls: ['./todo-navigation.component.sass']
})
export class TodoNavigationComponent implements OnInit {


  public message = "";

  constructor() { }

  ngOnInit() {
  }

  onClickCreate(){

    alert('Create Button was Clicked');

  }

}
