import { Component } from '@angular/core';
import {CharacterModel} from './models/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  characters: CharacterModel[] = [
    {
      name: 'Alan Rails',
      status: 'Dead',
      imgRoute: '../assets/images/alan-rails.jpeg',
      origin: 'unknown',
      gender: 'Male',
      lastLocation: 'Worldender\'s lair',
      species: 'Human, Superhuman (Ghost trains summoner)'
    },
    {
      name: 'Bearded Lady',
      status: 'Dead',
      imgRoute: './../assets/images/bearded-lady.jpeg',
      origin: 'unknown',
      gender: 'Female',
      lastLocation: 'Earth (Replacement Dimension)',
      species: 'Alien, Parasite'
    },
    {
      name: 'Doofus Rick',
      status: 'unknown',
      imgRoute: './../assets/images/doofus-rick.jpeg',
      origin: 'Earth (J19ζ7)',
      gender: 'Male',
      lastLocation: 'Earth (Replacement Dimension)',
      species: 'Human'
    },
    {
      name: 'Greasy Grandma',
      status: 'Alive',
      imgRoute: './../assets/images/greasy-grandma.jpeg',
      origin: 'Greasy Grandma World',
      gender: 'Female',
      lastLocation: 'Greasy Grandma World',
      species: 'Human, Grandma'
    },
    {
      name: 'SEAL Team Rick',
      status: 'Dead',
      imgRoute: './../assets/images/seal-team-rick.jpeg',
      origin: 'unknown',
      gender: 'Male',
      lastLocation: 'Citadel of Ricks',
      species: 'Human'
    },
    {
      name: 'Morphizer-XE Customer Support',
      status: 'unknown',
      imgRoute: './../assets/images/morphizer-xe-customer-support.jpeg',
      origin: 'unknown',
      gender: 'Male',
      lastLocation: 'Earth (Replacement Dimension)',
      species: 'Alien'
    }
  ];
}
