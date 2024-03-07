import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const appRoutes : Routes = [
  {path:'',component:HomeComponent }, //localhost:4200
  {path:'users',component:UsersComponent},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule, RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
