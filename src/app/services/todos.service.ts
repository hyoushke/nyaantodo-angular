import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  getTodos(){
    return [
              {title:'Go to Market', description: 'So many todo so little time', status:'Done', date: '1m'},
              {title:'Pet the dog', description: 'So many todo so little time', status:'Done', date: '1m'},
              {title:'Wash the Dishes', description: 'So many todo so little time', status:'Done', date: '1m'},
              {title:'Trip to the zoo', description: 'So many todo so little time', status:'Done', date: '1m'},
              {title:'Date with friend', description: 'So many todo so little time', status:'Done', date: '1m'},
            ];


  }
}
