import { Component, OnInit } from '@angular/core';
import {SearchRecipesService} from '../../services/search-recipes.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-v-home',
  templateUrl: './v-home.component.html',
  styleUrls: ['./v-home.component.css']
})
export class VHomeComponent implements OnInit {
  list: Object [];
  constructor(private searchRecipesService: SearchRecipesService,private router:Router) { }

  ngOnInit() {
  }
  searchRecipes($event:string){
    this.searchRecipesService.searchRecipes($event).subscribe(e=>{
      this.list = e.results;
    });
  }
}
