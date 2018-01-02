import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie'
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';
import { recipeService } from './recipe.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegistrationComponent } from './home/register/register.component';

import { RecipeComponent } from './recipes/recipe.component';
import { RecipeNewComponent } from './recipes/new/recipe-new.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { NavComponent } from './nav/nav.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MealAddComponent } from './calendar/meal-add/meal-add.component';
import { MealEditComponent } from './calendar/meal-edit/meal-edit.component';
import { RecipeTableComponent } from './recipes/recipe-table/recipe-table.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeNewComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    RecipeDetailComponent,
    NavComponent,
    CalendarComponent,
    MealAddComponent,
    MealEditComponent,
    RecipeTableComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [AuthService,recipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
