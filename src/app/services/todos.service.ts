import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ITodo } from 'src/app/interface/ITodo';
import { IPost } from 'src/app/interface/IPost';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}



@Injectable({
  providedIn: 'root'
})
export class TodosService {


  //private _url:string = "/assets/data/todos.json";
  private _url:string = "http://localhost:8080/posts/500/1/1/test";
  //private _url:string = "http://ec2-18-216-74-216.us-east-2.compute.amazonaws.com:8080/posts/500/1/1/test";

  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  private options = {
    headers: this.headers
  };

  public postsSource = new BehaviorSubject<IPost[]>([]);
  currentData = this.postsSource.asObservable();


  constructor(private http:HttpClient ) { }

  errorHandler(error:HttpErrorResponse){

    return Observable.throw(error.message || "Server Error");

  }

  createPost(post: IPost):Observable<IPost>{

    //let url = "http://ec2-18-216-74-216.us-east-2.compute.amazonaws.com:8080/posts/";
    let url = "http://localhost:8080/posts/";

    return this.http.post<IPost>(url, post,  {headers: new HttpHeaders({'Content-Type':  'application/json'})})



  }

  updateTodos(posts:IPost[]){
      this.postsSource.next(posts);
  }

  getTodos():Observable<IPost[]>{

    return this.http.get<IPost[]>(this._url).pipe( map( res => {
                                                        const g = (res as any);
                                                        const posts = g.details.docs;

                                                        this.updateTodos(posts);

                                                        return posts; } )  ).catch(this.errorHandler);






    /*
    return [
              {title:'Go to Market', description: 'So many todo so little time', status:'Done', date: '1m'},
              {title:'Pet the dog', description: 'So many todo so little time', status:'Done', date: '1m'},
              {title:'Wash the Dishes', description: 'So many todo so little time', status:'Done', date: '1m'},
              {title:'Trip to the zoo', description: 'So many todo so little time', status:'Done', date: '1m'},
              {title:'Date with friend', description: 'So many todo so little time', status:'Done', date: '1m'},
            ];
    */


  }
}
