import { Component } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = HEROES
  selectedHero?: Hero

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
