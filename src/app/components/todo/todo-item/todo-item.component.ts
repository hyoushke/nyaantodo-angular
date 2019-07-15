import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
          Using Pipes
          <br />
          <span>{{ dataString | uppercase }}</span>
          <br />
          <span>{{ dataString | lowercase }}</span>
          <br />
          <span>{{ dataString | titlecase }}</span>
          <br />
          <span>{{ dataString | slice:3:5 }}</span>
          <br />
          <span>{{ dataString | json }}</span>
          <br />

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

      <div [class]="styleBoxClass">
          Input value passing to event parameter
          <input #txtInputValue type="text" value="" />
          <br />
          Display
          <br />
          <span>{{ displayOutput }}</span>
          <br />
          <div><button (click)="onProcessText(txtInputValue)">Process Text</button></div>
          
      </div>

      <div [class]="styleBoxClass">
          Using ngFor Directive
          <ul *ngFor="let color of colors; last as l; first as f; index as i; odd as o; even as e;">
                <li>{{i}} {{color}} {{f}} {{l}} {{o}} {{e}}</li>
          </ul>
      </div>

      <div [class]="styleBoxClass">
          Using ngSwitch Directive
          <div><button (click)="clientType='EMPLOYEE'">Set Value to EMPLOYEE</button></div>
          <br />
          <div [ngSwitch]="clientType">
            <div *ngSwitchCase="'EMPLOYER'">I am Employer</div>
            <div *ngSwitchCase="'EMPLOYEE'">I am Employee</div>
            <div *ngSwitchCase="'AGENT'">I am Agent</div>
            <div *ngSwitchDefault>Yeahbah</div>
          </div>

          <br />
      </div>

      <div [class]="styleBoxClass">
          Using NgModel - 2 way binding
          <br />
          User Name <input [(ngModel)]="username" type="text" value="" /> {{username}}
          <br />
          Password <input [(ngModel)]="password" type="text" value="" /> {{password}}
          <br />
          Display
          <br />
          <span>{{ displayOutput }}</span>
          <br />
          <div><button (click)="onProcessText(txtInputValue)">Process Text</button></div>
          
      </div>


      <div [class]="styleBoxClass">
          Structural Directives
          <div *ngIf="true">
              I am inside ngIf directive
          </div>


          <br />

          <strong>ngIf with Else Block</strong>
          <br />
          <div *ngIf="showBox else elseBlock">
              I am inside ngIf True directive
          </div>

          <ng-template #elseBlock>
            I am the Else statement
            becahse showBox is {{showBox}}
          </ng-template>

          
      </div>



      <div [class]="styleBoxClass">
      Structural Directives
      <div *ngIf="true">
          I am inside ngIf directive
      </div>


      <br />

      <strong>ngIf with thenBlock and elseBlock</strong>
      <br />


      <div *ngIf="showBox then thenBlock; else elseBlock">
      </div>

      <ng-template #thenBlock>
         I am inside the thenBlock
      </ng-template>


      <ng-template #elseBlock>
        I am inside the elseBlock
      </ng-template>

      
  </div>









      <div><button>Edit</button></div>
      <div><button>Remove</button></div>
      <div><button>Set Enable</button></div>
      <div><button>Set Color</button></div>
      <div><button (click)="greetOnClick($event)" >Greet</button> Current Greeting Message is <span [style.color]="'green'">{{ greeting }}</span></div>
      <div><button (click)="counter = counter + 1">Click based on Expressoin</button>counter value is {{counter}}</div>
      <div><button (click)="counter = counter - 1">Decrement based on Expressoin</button>counter value is {{counter}}</div>

      <div><button (click)="onClickTodoItem()">Event Emitter</button></div>
    </div>
  `,
  styles: [
            `.text-success {color: green;}`,
            `.text-danger {color: red}`,
            `.text-special {font-weight: bold}`,                        
            `.box {display: block; width: 400px; height: 200px; border : 1px solid black;}`,                        
          ]
})
export class TodoItemComponent implements OnInit {

  public hasError = true;
  public isSpecial = true;

  public colors = ['red', 'gold', 'green', 'blue', 'white', 'yellow', 'black', 'pink'];

  public styleTextSuccessClass = 'text-success';
  public styleTextDangerClass = 'text-danger';
  public styleTextSpecialClass = 'text-special';
  public styleBoxClass = 'box';

  public messageClasses = {
    "text-danger": this.hasError,
    "text-success": !this.hasError, 
    "text-special" : this.isSpecial

  }

  dataString : string = "Hello World";

  public counter = 0;

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"

  }



  public highlightColor = "pink";

  public greeting = "";

  public displayOutput = "";



  public username = "";
  public password = "";

  public showBox = true;

  public clientType =  "EMPLOYER";
  

  

  constructor() { }

  @Output() todoItemEvent = new EventEmitter<string>();

  ngOnInit() {
  }

  greetOnClick(event){

      this.greeting = "Welcome to the Factory";

      alert(this.greeting);
      alert(event.type);

  }

  onProcessText(txt){

    this.displayOutput =  "The value of the text is " + txt.value;

  }

  onClickTodoItem(){

    this.todoItemEvent.emit('Hi Im from Todo Item Component');
    alert('has emitted');

  }

  onLogin(){

  }

}
