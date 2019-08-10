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

  addPost() {

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
   let post = this.formPosts.value;
       post.id = '1';
       post.authorid = '1';
       post.status = 'Active';


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

              this.addPost();
              this.todoReactiveFormEvent.emit(data);
  }

  //ngSubmit
  sendFormPosts(){
     console.log(this.formPosts.value);
     this.onClickCreatePost();


  }


  //validation getters in UI
  get author() {
    return this.formPosts.get('author') as FormControl;
  }

  get title() {
    return this.formPosts.get('title') as FormControl;
  }

  get content() {
    return this.formPosts.get('content') as FormControl;
  }

  get categories() {
    return this.formPosts.get('categories') as FormControl;
  }

  get tags() {
    return this.formPosts.get('tags') as FormControl;
  }

  get likes() {
    return this.formPosts.get('likes') as FormControl;
  }

  get subscribers() {
    return this.formPosts.get('subscribers') as FormControl;
  }

  get shares() {
    return this.formPosts.get('shares') as FormControl;
  }

  get views() {
    return this.formPosts.get('views') as FormControl;
  }

  get imageurl() {
    return this.formPosts.get('imageurl') as FormControl;
  }

  get datecreated() {
    return this.formPosts.get('datecreated') as FormControl;
  }

  get datemodified() {
    return this.formPosts.get('datemodified') as FormControl;
  }




}
