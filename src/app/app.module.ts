import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VHomeModule } from './views/v-home/v-home.module';
import { SearchRecipesService } from './services/search-recipes.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
