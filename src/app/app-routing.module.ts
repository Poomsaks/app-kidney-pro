import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageProComponent } from './home-page-pro/home-page-pro.component';

const routes: Routes = [
  { path: '', component: HomePageProComponent },
  { path: 'app-home-page-pro', component: HomePageProComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
