import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '../models/character';
import { ListPage } from '../models/list-page';

@Injectable()

export class ApiService {

  constructor(private http: HttpClient) { }

  readonly apiRoot = 'https://rickandmortyapi.com/api/';

  getList() {
    return this.http.get<ListPage<Character>>(`${this.apiRoot}character`);
  }
  getCharacter(id: number) {
    return this.http.get<Character>(`${this.apiRoot}character/${id}`);
  }
}


