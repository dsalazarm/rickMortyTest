import {Component, OnInit} from '@angular/core';
import {CharacterModel} from './models/character.model';
import {RickMortyService} from './rick-morty.service';
import {CharacterApiModel} from './models/character-api.model';
import * as _ from 'lodash';

export const TOTAL_EPISODES = 395;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  characters: CharacterModel[];

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    const randomNumbers = this.getRandomArray(20, TOTAL_EPISODES);
    this.rickMortyService.getCharacters(randomNumbers).subscribe(result => {
      this.characters = _.orderBy(this.mapToCharacters(result), 'lastEpisode', 'desc');
    });
  }

  getRandomArray(elementNumber, limit) {
    const randomNumbers = [];

    for (let i = 0; i < elementNumber; i++) {
      randomNumbers.push(Math.floor(Math.random() * limit));
    }

    return randomNumbers;
  }

  mapToCharacters(charactersToMap: CharacterApiModel[]): CharacterModel[] {
    return _.map(charactersToMap, (character: CharacterApiModel) => {
      return {
        name: character.name,
        status: character.status,
        imgRoute: character.image,
        origin: character.origin.name,
        gender: character.gender,
        lastLocation: character.location.name,
        species: character.species,
        lastEpisode: this.getLastEpisode(character.episode)
      };
    });
  }

  getLastEpisode(episodes): number {
    const episodesNumbers = _.map(episodes, episode => _.parseInt(episode.substr(episode.lastIndexOf('/') + 1)));
    const lastEpisode = this.getBiggestNumber(episodesNumbers);

    return lastEpisode;
  }

  getBiggestNumber(arrOfNumbers: number[]): number {
    let biggest = arrOfNumbers[0];

    for (let i = 1; i < arrOfNumbers.length; i++) {
      const currentNumber = arrOfNumbers[i];
      if (currentNumber > biggest) {
        biggest = currentNumber;
      }
    }

    return biggest;
  }
}
