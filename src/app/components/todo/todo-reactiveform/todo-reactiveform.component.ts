import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { IPost } from 'src/app/interface/IPost';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-todo-reactiveform',
  templateUrl: './todo-reactiveform.component.html',
  styleUrls: ['./todo-reactiveform.component.sass']
})
export class TodoReactiveformComponent implements OnInit {

  public formPosts: FormGroup;
  public post:IPost;

  @Output() todoReactiveFormEvent = new EventEmitter<any>();

  constructor(private _todoService: TodosService, formBuilder: FormBuilder) {

    this.formPosts = formBuilder.group({
      author: null,
      title: null,
      content: null,
      categories: null,
      tags: null,
      likes: null,
      subscribers: null,
      shares: null,
      views: null,
      imageurl: null,
      datecreated: null,
      datemodified: null
    });

    this.logFormPostValue();


  }

  ngOnInit() {
  }

  logFormPostValue(){
    console.log(this.formPosts);
  }

  addPost(){
    alert('hello world');

    let post = {
                id: '1',
                status: 'Active',
                authorid: '1',
                author: this.author,
                title: this.title,
                content: this.content,
                categories: this.categories,
                tags: this.tags,
                likes: this.likes,
                subscribers: this.subscribers,
                shares: this.shares,
                views: this.views,
                imageurl: this.imageurl,
                datecreated: this.datecreated,
                datemodified: this.datemodified
    }


    this._todoService.createPost(post).subscribe( res => {

      console.log(res)
      this._todoService.getTodos().subscribe(res => { console.log('******************'); console.log(res); console.log('******************'); });





    });


}


onClickCreatePost(){


let data = {
message: "broadcast from todo form child [successfully created new todo]",
counter: 44,
navigation: 'TDO_REACTIVEFORM'
};

this.todoReactiveFormEvent.emit(data);
this.addPost();

}


}
