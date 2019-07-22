import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }


  onClickCreatePost(){

    alert('hello world');

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
  



  }

}
