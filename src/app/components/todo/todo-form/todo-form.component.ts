import { Component, OnInit, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { IPost } from 'src/app/interface/IPost';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass']
})
export class TodoFormComponent implements OnInit {

  public author:string = "";
  public title:string = "";
  public content:string = "";
  public categories:string = "";
  public tags:string = "";
  public likes:string = "";
  public subscribers:string = "";
  public shares:string = "";
  public views:string = "";
  public imageurl:string = "";
  public datecreated:string = "";
  public datemodified:string = "";

  public post:IPost;

  constructor(private _todoService: TodosService) { }

  ngOnInit() {

    //this.post.author = "";
    //this.post.title = "";
    //this.post.content = "";
    //this.post.categories = "";
    //this.post.tags = "";
    //this.post.likes = "";
    //this.post.subscribers = "";
    //this.post.shares = "";
    //this.post.views = "";
    //this.post.imageurl = "";
    //this.post.datecreated = "";
    //this.post.datemodified = "";

  }

  addPost(){
              alert('hello world');


              //console.log(this.post);
            
              console.log( this.author );
              console.log( this.title );
              console.log( this.content );
              console.log( this.categories );
              console.log( this.tags );
              console.log( this.likes );
              console.log( this.subscribers );
              console.log( this.shares );
              console.log( this.views );
              console.log( this.imageurl );
              console.log( this.datecreated );
              console.log( this.datemodified );

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

    this.addPost();
  }

}
