import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {
  constructor(public heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeros().subscribe(
      (data: Hero[]) => { this.heros = data; },
      (err: Hero[]) => { console.log(err) },
      () => { console.log("Fin fetch"); }
    );
  }

  private selectedHero: Hero;
  recibirEmit(llamada: boolean): void {
    console.log("llamada: ", llamada);
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  heros: Hero[];
}