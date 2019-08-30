import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeListComponent } from './components/home-list/home-list.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { EditHero2Component } from './components/edit-hero2/edit-hero2.component';


const routes: Routes = [
  { path: "list", component: HomeListComponent },
  { path: "dashboard", component: DashBoardComponent },
  { path: "edit/:id", component: EditHero2Component },
  { path: "new", component: EditHero2Component },
  { path: "", component: DashBoardComponent },
  { path: "**", component: NotFound404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
