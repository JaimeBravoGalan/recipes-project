import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
@Component({
  selector: 'app-c-results',
  templateUrl: './c-results.component.html',
  styleUrls: ['./c-results.component.css']
})
export class CResultsComponent implements OnInit {
  @Input() resultsList: Recipe[];
  constructor() { }

  ngOnInit() {
    
  }
  hasResults():boolean{
    return this.resultsList && this.resultsList.length>0;
  }
}
