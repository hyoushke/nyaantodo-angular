import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  //templateUrl: './todo-item.component.html',
  //styleUrls: ['./todo-item.component.sass']

  template: 
  `
    <div>
      <span>Hello World</span>
      <img src="" style="width: 200px;" />
      <div><button>Edit</button></div>
      <div><button>Remove</button></div>
      <div><button>Set Enable</button></div>
      <div><button>Set Color</button></div>
    </div>
  `,
  styles: [
            ``,
            ``,
            ``,                        
          ]
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
