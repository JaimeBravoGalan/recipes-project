import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c-search',
  templateUrl: './c-search.component.html',
  styleUrls: ['./c-search.component.css']
})
export class CSearchComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
   
  }
  searchRecipes(value:string){
    this.search.emit(value);
  }
  // onKey(value:string){
  //   console.log(value);
  // }
}
