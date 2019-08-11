import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { IPost } from 'src/app/interface/IPost';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';



@Component({
  selector: 'app-todo-reactiveformv2',
  templateUrl: './todo-reactiveformv2.component.html',
  styleUrls: ['./todo-reactiveformv2.component.sass']
})
export class TodoReactiveformv2Component implements OnInit {

  public formPosts: FormGroup;
  public post: IPost;
  //public selectedFile: File;

  public imageUrl: string;
  public fileImage: File;
  public fileUploadProgress: string;

  @Output() todoReactiveFormEvent = new EventEmitter<any>();

  constructor(private todoService: TodosService,
              private formBuilder: FormBuilder,
              private http: HttpClient) {

  }

  ngOnInit() {
    this.formPosts = this.formBuilder.group({
                                              fileupload: [null, [Validators.required]],
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
                                              datemodified: [null, [Validators.required]]   });
  }


  addPost() {

        const post: IPost = this.formPosts.value as IPost;
        post.id = '1';
        post.authorid = '1';
        post.status = 'Active';



        this.todoService.createPost(post).subscribe( res => {

            console.log(res);

            this.todoService
            .getTodos()
            .subscribe(res => {
              console.log('******************');
              console.log(res);
              console.log('******************'); });

    });




}

  // ngSubmit
  sendFormPosts() {
    const data = {
                message: 'broadcast from todo form child [successfully created new todo]',
                counter: 99,
                navigation: 'TDO_REACTIVEFORM'};

    this.addPost();
    this.todoReactiveFormEvent.emit(data);

  }


  // validation getters in UI
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

  get fileupload() {
    return this.formPosts.get('fileupload') as FormControl;
  }


  handlesFileChange(event){

    console.log(event);
    console.log(event.target);

    const fileReader = new FileReader();

    fileReader.onload = (event: any)=>{
      this.imageUrl = event.target.result;
    };
    this.fileImage = event.target.files[0];
    fileReader.readAsDataURL(this.fileImage)


  }

  handlesFileImageUpload() {

    const apiUrl = 'http://localhost:8080/uploadimage';
    const apiFileFieldName = 'imageurl';

    const formData = new FormData();

    formData.append(apiFileFieldName, this.fileImage, this.fileImage.name);

    this.http.post(apiUrl, formData, {
      reportProgress: true,
      observe: 'events'
    })
    .subscribe( event => {

      if (event.type === HttpEventType.UploadProgress ){
        this.fileUploadProgress = 'Upload Progress' + Math.round( event.loaded / event.total ) * 100 + '%';
        console.log(this.fileUploadProgress);
      }

      if (event.type === HttpEventType.Response) {
        console.log(event);
      }



     })




  }


}
