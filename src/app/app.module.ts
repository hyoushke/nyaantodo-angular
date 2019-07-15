import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoNavigationComponent } from './components/todo/todo-navigation/todo-navigation.component';
import { TodoContainerComponent } from './components/todo/todo-container/todo-container.component';
import { ExperimentitemComponent } from './components/experiments/experimentitem/experimentitem.component';
import { ExperimentlistComponent } from './components/experiments/experimentlist/experimentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoNavigationComponent,
    TodoContainerComponent,
    ExperimentitemComponent,
    ExperimentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
