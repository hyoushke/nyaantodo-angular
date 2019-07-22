import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ITodo } from 'src/app/interface/ITodo';
import { IPost } from 'src/app/interface/IPost';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import  'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class TodosService {


  //private _url:string = "/assets/data/todos.json";
  private _url:string = "http://localhost:8080/posts/5/1/1/test";

  constructor(private http:HttpClient ) { }

  errorHandler(error:HttpErrorResponse){

    return Observable.throw(error.message || "Server Error");

  }

  getTodos():Observable<IPost[]>{

    return this.http.get<any>(this._url).pipe( map( res => { 
                                                        const items = res.details.docs;
      
                                                        return items; } )  ).catch(this.errorHandler);




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
