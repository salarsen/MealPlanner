import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipes/recipe.component';
import { RecipeNewComponent } from './recipes/new/recipe-new.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegistrationComponent } from './home/register/register.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';
import { recipeService } from './recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeNewComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [AuthService,recipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
