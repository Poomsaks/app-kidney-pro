import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageProComponent } from './home-page-pro/home-page-pro.component';
import { ReportPageProComponent } from './report-page-pro/report-page-pro.component';
import { AdminPageUatComponent } from './admin-page-uat/admin-page-uat.component';
import { LogoutPageUatComponent } from './logout-page-uat/logout-page-uat.component';
import { LoginPageUatComponent } from './login-page-uat/login-page-uat.component';
import { AuthGuard } from 'src/AuthGuard';

const routes: Routes = [
  { path: '', component: HomePageProComponent },
  { path: 'app-home-page-pro', component: HomePageProComponent },
  { path: 'app-report-page-pro', component: ReportPageProComponent },
  { path: 'app-admin-page-uat', component: AdminPageUatComponent ,canActivate: [AuthGuard] },
  { path: 'app-logout-page-uat', component: LogoutPageUatComponent ,canActivate: [AuthGuard] },
  { path: 'app-login-page-uat', component: LoginPageUatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
