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
      <div>
          <span class="text-success">Views</span>
          <span class="text-danger">Share</span>
          <span class="text-special">Comments</span>
      </div>
      <div>
          <span [class]="styleTextSuccessClass">Views * class binding *</span>
      </div>

      <div>
          Expression Evaluation
          <br />
          <span [class.text-danger]="hasError">I am red because i have hasError is {{hasError}}</span>
      </div>

      <div>
          Using NgClass Directive
          <br />
          <span [ngClass]="messageClasses">I am red because i have hasError is {{hasError}} and isSpecial is also {{isSpecial}}</span>
      </div>

      <div>
          Using Style Binding Simple
          <br />
          <span [style.color]="'orange'">I am orange</span>
      </div>

      <div>
          Using Style Binding using Condition
          <br />
          <span [style.color]="hasError ? 'red' : 'green' ">I am red because i have error again</span>
      </div>

      <div>
          Highlight Color
          <br />
          <span [style.color]="highlightColor">I am using the highlightColor {{highlightColor}} property</span>
      </div>

      <div>
          Style Binding using NgDirective
          <br />
          <span [ngStyle]="titleStyles">I am using the titleStyles property in ngDirective</span>
      </div>


      <div><button>Edit</button></div>
      <div><button>Remove</button></div>
      <div><button>Set Enable</button></div>
      <div><button>Set Color</button></div>
      <div><button (click)="greetOnClick($event)" >Greet</button> Current Greeting Message is <span [style.color]="'green'">{{ greeting }}</span></div>
      <div><button (click)="counter = counter + 1">Click based on Expressoin</button>counter value is {{counter}}</div>
      <div><button (click)="counter = counter - 1">Decrement based on Expressoin</button>counter value is {{counter}}</div>
    </div>
  `,
  styles: [
            `.text-success {color: green;}`,
            `.text-danger {color: red}`,
            `.text-special {font-weight: bold}`,                        
          ]
})
export class TodoItemComponent implements OnInit {

  public hasError = true;
  public isSpecial = true;

  public styleTextSuccessClass = 'text-success';
  public styleTextDangerClass = 'text-danger';
  public styleTextSpecialClass = 'text-special';

  public messageClasses = {
    "text-danger": this.hasError,
    "text-success": !this.hasError, 
    "text-special" : this.isSpecial

  }

  public counter = 0;

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"

  }



  public highlightColor = "pink";

  public greeting = "";

  

  constructor() { }

  ngOnInit() {
  }

  greetOnClick(event){

      this.greeting = "Welcome to the Factory";

      alert(this.greeting);
      alert(event.type);

  }

}
