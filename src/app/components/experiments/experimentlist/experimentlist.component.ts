import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experimentlist',
  templateUrl: './experimentlist.component.html',
  styleUrls: ['./experimentlist.component.sass']
})
export class ExperimentlistComponent implements OnInit {


  public message:string = "";


  constructor() { }

  ngOnInit() {
  }

}
