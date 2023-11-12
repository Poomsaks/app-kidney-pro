import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageProComponent } from './home-page-pro/home-page-pro.component';
import { ReportPageProComponent } from './report-page-pro/report-page-pro.component';
import { LogoutPageUatComponent } from './logout-page-uat/logout-page-uat.component';
import { LoginPageUatComponent } from './login-page-uat/login-page-uat.component';
import { AdminPageUatComponent } from './admin-page-uat/admin-page-uat.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageProComponent,
    ReportPageProComponent,
    LogoutPageUatComponent,
    LoginPageUatComponent,
    AdminPageUatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
