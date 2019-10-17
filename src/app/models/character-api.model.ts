export interface ApiResult {
  info: any;
  results: CharacterApiModel[];
}

export interface CharacterApiModel {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: IPlace;
  name: string;
  origin: IPlace;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface IPlace {
  name: string;
  url: string;
}
