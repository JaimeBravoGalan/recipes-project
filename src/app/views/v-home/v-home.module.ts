import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSearchComponent } from 'src/app/components/c-search/c-search.component';
import { CResultsComponent } from 'src/app/components/c-results/c-results.component';
import { VHomeComponent } from './v-home.component';
@NgModule({
    declarations: [
        VHomeComponent,
        CSearchComponent,
        CResultsComponent,
    ],
    imports: [
        CommonModule,
    ],
    
    exports: [
        VHomeComponent,
    ]
})


export class VHomeModule { }
