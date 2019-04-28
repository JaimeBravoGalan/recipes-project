import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c-results',
  templateUrl: './c-results.component.html',
  styleUrls: ['./c-results.component.css']
})
export class CResultsComponent implements OnInit {
  @Input() resultsList: Object[];
  @Output() item: EventEmitter<Object> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  showDetailEvent(event){
    this.item.emit(event);
  }
  hasResults(){
    if(this.resultsList)
    return this.resultsList.length>0
    else return;
  }
}
