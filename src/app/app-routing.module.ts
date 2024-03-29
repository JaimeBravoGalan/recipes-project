import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VHomeComponent } from './views/v-home/v-home.component';

const routes: Routes = [
  {
    path: 'home', component: VHomeComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
