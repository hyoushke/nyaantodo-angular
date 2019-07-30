import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoNavigationComponent } from './components/todo/todo-navigation/todo-navigation.component';
import { TodoContainerComponent } from './components/todo/todo-container/todo-container.component';
import { ExperimentitemComponent } from './components/experiments/experimentitem/experimentitem.component';
import { ExperimentlistComponent } from './components/experiments/experimentlist/experimentlist.component';
import { MeterboxLikesComponent } from './components/meterbox/meterbox-likes/meterbox-likes.component';
import { MeterboxSharesComponent } from './components/meterbox/meterbox-shares/meterbox-shares.component';
import { MeterboxDownloadsComponent } from './components/meterbox/meterbox-downloads/meterbox-downloads.component';
import { MeterboxFollowersComponent } from './components/meterbox/meterbox-followers/meterbox-followers.component';
import { MeterboxViewsComponent } from './components/meterbox/meterbox-views/meterbox-views.component';
import { MeterboxCommentsComponent } from './components/meterbox/meterbox-comments/meterbox-comments.component';
import { MeterboxComponent } from './components/meterbox/meterbox/meterbox.component';
import { TodoFormComponent } from './components/todo/todo-form/todo-form.component';
import { TodosService } from './services/todos.service';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { ContentNavComponent } from './components/layouts/content-nav/content-nav.component';
import { ContentContainerComponent } from './components/layouts/content-container/content-container.component';
import { ContentComponent } from './components/layouts/content/content.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { NavigationComponent } from './components/layouts/navigation/navigation.component';
import { NotificationComponent } from './components/layouts/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './components/post/post/post.component';

import {routing} from './app-routing';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoNavigationComponent,
    TodoContainerComponent,
    ExperimentitemComponent,
    ExperimentlistComponent,
    MeterboxLikesComponent,
    MeterboxSharesComponent,
    MeterboxDownloadsComponent,
    MeterboxFollowersComponent,
    MeterboxViewsComponent,
    MeterboxCommentsComponent,
    MeterboxComponent,
    TodoFormComponent,
    FooterComponent,
    ContentNavComponent,
    ContentContainerComponent,
    ContentComponent,
    HeaderComponent,
    NavigationComponent,
    NotificationComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
