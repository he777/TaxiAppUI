import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { RegisterComponent } from './component/register/register.component';
import { ConditionsComponent } from './component/conditions/conditions.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'conditions', component: ConditionsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    ConditionsComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
