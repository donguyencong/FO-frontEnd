import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatIconModule,
  MatExpansionModule,
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { FoodPostCreateComponent } from './food-post/food-post-create/food-post-create.component';
import { FoodPostListComponent } from './food-post/food-post-list/food-post-list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterComponent } from './food-post/filter/filter.component';
import { FeaturePostComponent } from './feature-post/feature-post.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

import { CheckPasswordDirective } from './auth/signup/valid-passwords.directive';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create_food_post', component: FoodPostCreateComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FoodPostCreateComponent,
    FoodPostListComponent,
    HomeComponent,
    NavbarComponent,
    FilterComponent,
    FeaturePostComponent,
    LoginComponent,
    SignupComponent,
    CheckPasswordDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
