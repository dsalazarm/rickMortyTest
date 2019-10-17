import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResult, CharacterApiModel} from './models/character-api.model';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  baseUrl;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api/';
  }

  getCharacters(randomNumbersArray: number[]): Observable<CharacterApiModel[]> {
    const charactersUrl = `${this.baseUrl}character/${randomNumbersArray.join(',')}`;

    return this.httpClient.get<CharacterApiModel[]>(charactersUrl);
  }
}
