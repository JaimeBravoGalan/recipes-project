import { Component, OnInit } from '@angular/core';
import {SearchRecipesService} from '../../services/search-recipes.service'
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-v-home',
  templateUrl: './v-home.component.html',
  styleUrls: ['./v-home.component.css']
})
export class VHomeComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  searchRecipesTerms =  new Subject<string>();
  constructor(private searchRecipesService: SearchRecipesService) { }

  ngOnInit():void {
    this.getRecipes();
  }
  getRecipes():void{
    this.recipes$ = this.searchRecipesTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.searchRecipesService.searchRecipes(term))
    );
  }
  updateValue(value:string):void{
    this.searchRecipesTerms.next(value)
  }
}
