import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchRecipesService {

  constructor(private http:HttpClient) { }
  
  searchRecipes(query:string): Observable<any>{
    return this.http.get(`http://www.recipepuppy.com/api?q=${query}`)
  }
}
