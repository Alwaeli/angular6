import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddskillComponent } from './addskill/addskill.component';
import { AllskillComponent } from './allskill/allskill.component';
import { MyskillComponent } from './myskill/myskill.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireDatabaseModule } from 'angularfire2/database';

const routes : Routes = [
  {path : '' , redirectTo :'home' ,pathMatch: 'full' },
  {path : 'home' , component : HomeComponent },
  {path : 'addskill' , component :AddskillComponent },
  {path : 'login' , component :LoginComponent },
  {path : 'register' , component :RegisterComponent },
  {path : 'myskill' , component :MyskillComponent },
  {path : 'allskill' , component :AllskillComponent },
  
]
@NgModule({
  declarations: [
    AppComponent,
    AddskillComponent,
    AllskillComponent,
    MyskillComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
