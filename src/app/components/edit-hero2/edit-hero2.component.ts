import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-hero2',
  templateUrl: './edit-hero2.component.html',
  styleUrls: ['./edit-hero2.component.scss']
})
export class EditHero2Component implements OnInit {
  constructor(
    private heroService: HeroService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id: number = parseInt(this.activeRoute.snapshot.paramMap.get("id"));
    if (id) {
      this.getHero(id);
      this.title = "Edit";
      this.edit = true;
    } else {
      this.title = "New";
      this.hero = new Hero();
      this.edit = false;
    }
  };


  getHero(id: number): void {
    this.heroService.getHeroById(id).subscribe(
      data => {
        this.hero = data;
        console.log("GET Hero OK");
      },
      err => console.log("GET Hero ERR", err),
      () => console.log("GET Hero finish")
    );
  }



  hero: Hero;
  title: string;
  edit: boolean = false;
}
