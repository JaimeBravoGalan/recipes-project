import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSearchComponent } from 'src/app/components/c-search/c-search.component';
import { CResultsComponent } from 'src/app/components/c-results/c-results.component';
import { CDetailsComponent } from 'src/app/components/c-details/c-details.component';
import { VHomeComponent } from './v-home.component';
import { SearchRecipesService } from 'src/app/services/search-recipes.service';
@NgModule({
    declarations: [
        VHomeComponent,
        CSearchComponent,
        CResultsComponent,
        CDetailsComponent
    ],
    imports: [
        CommonModule,
    ],
    
    exports: [
        VHomeComponent,
    ]
})


export class VHomeModule { }
