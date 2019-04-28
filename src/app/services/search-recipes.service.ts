import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../models/recipe.model';
import { RequestRecipe } from '../models/requestRecipe.model';

@Injectable({
  providedIn: 'root'
})
export class SearchRecipesService {

  constructor(private http:HttpClient) { }
  
  searchRecipes(query:string): Observable<Recipe[]>{
    return this.http.get<RequestRecipe>(`http://www.recipepuppy.com/api?q=${query}`)
    .pipe(map(request=>request.results));
  }
}
