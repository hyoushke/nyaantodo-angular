import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { IPost } from 'src/app/interface/IPost';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-todo-reactiveform',
  templateUrl: './todo-reactiveform.component.html',
  styleUrls: ['./todo-reactiveform.component.sass']
})
export class TodoReactiveformComponent implements OnInit {

  public formPosts: FormGroup;
  public post:IPost;

  @Output() todoReactiveFormEvent = new EventEmitter<any>();

  constructor(private _todoService: TodosService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.formPosts = this.formBuilder.group({
      author: [null, [Validators.required]],
      title: [null, [Validators.required]],
      content: [null, [Validators.required]],
      categories: [null, [Validators.required]],
      tags: [null, [Validators.required]],
      likes: [null, [Validators.required]],
      subscribers: [null, [Validators.required]],
      shares: [null, [Validators.required]],
      views: [null, [Validators.required]],
      imageurl: [null, [Validators.required]],
      datecreated: [null, [Validators.required]],
      datemodified: [null, [Validators.required]]
    });

    this.logFormPostValue();

  }

  logFormPostValue(){
    console.log(this.formPosts);
  }

  addPost(){
    alert('hello world');

    /*
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
    */
   let post = null;


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

              //this.todoReactiveFormEvent.emit(data);
              //this.addPost();
  }



  //validation getters in UI
  get author(){
    return this.formPosts.get('author');
  }
  get title(){
    return this.formPosts.get('title');
  }
  get content(){
    return this.formPosts.get('content');
  }
  get categories(){
    return this.formPosts.get('categories');
  }
  get tags(){
    return this.formPosts.get('tags');
  }
  get likes(){
    return this.formPosts.get('likes');
  }
  get subscribers(){
    return this.formPosts.get('subscribers');
  }
  get shares(){
    return this.formPosts.get('shares');
  }
  get views(){
    return this.formPosts.get('views');
  }
  get imageurl(){
    return this.formPosts.get('imageurl');
  }
  get datecreated(){
    return this.formPosts.get('datecreated');
  }
  get datemodified(){
    return this.formPosts.get('datemodified');
  }



}
