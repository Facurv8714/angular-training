import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  @Input() hero: Hero;
  @Output() llamada: EventEmitter<boolean> = new EventEmitter();

  action(action) {
    this.llamada.emit(action);
  };
}
