import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c-search',
  templateUrl: './c-search.component.html',
  styleUrls: ['./c-search.component.css']
})
export class CSearchComponent implements OnInit {

  @Output() updateValue: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  updateRecipe(value:string):void{
    this.updateValue.emit(value);
  }
}
