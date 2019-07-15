import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  @Input() todos = [];
  constructor() { }

/*  
  public todos = [

     {title:'Go to Market', description: 'So many todo so little time', status:'Done', date: '1m'},
     {title:'Pet the dog', description: 'So many todo so little time', status:'Done', date: '1m'},
     {title:'Wash the Dishes', description: 'So many todo so little time', status:'Done', date: '1m'},
     {title:'Trip to the zoo', description: 'So many todo so little time', status:'Done', date: '1m'},
     {title:'Date with friend', description: 'So many todo so little time', status:'Done', date: '1m'},
  ];
*/  

  ngOnInit() {
    console.log(this.todos);
  }

}
