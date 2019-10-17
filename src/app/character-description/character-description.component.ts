import {Component, Input, OnInit} from '@angular/core';
import {CharacterModel} from '../models/character.model';

@Component({
  selector: 'app-character-description',
  templateUrl: './character-description.component.html',
  styleUrls: ['./character-description.component.scss']
})
export class CharacterDescriptionComponent implements OnInit {
  @Input() character: CharacterModel;

  constructor() { }

  ngOnInit() {
  }

}
