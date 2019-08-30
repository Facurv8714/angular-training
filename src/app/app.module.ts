import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { EditHeroComponent } from './components/home-list/edit-hero/edit-hero.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { EditHero2Component } from './components/edit-hero2/edit-hero2.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    EditHeroComponent,
    DashBoardComponent,
    NavComponent,
    NotFound404Component,
    EditHero2Component,
    AddHeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
