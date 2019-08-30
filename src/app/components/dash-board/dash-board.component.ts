import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  constructor(public heroService: HeroService, private router: Router) { }

  ngOnInit() {
    // this.heros = this.heroService.getHeros();
    this.heroService.getHeros().subscribe(
      (data: Hero[]) => { this.heros = data; },
      (err: Hero[]) => { console.log(err) },
      () => { console.log("Fin fetch"); }
    );
  }

  private selectedHero: Hero;
  private heros: Hero[];
  onClickGoto(id: number) {
    console.log("edit/" + id);
    this.router.navigateByUrl("edit/" + id);
  }

}

