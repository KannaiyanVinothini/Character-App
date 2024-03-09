import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '../models/character';
import { ListPage } from '../models/list-page';


  const apiRoot = 'https://rickandmortyapi.com/api/';

  function composeFilterQueryString(page: number) {
    return `page=${page}`;
  }
@Injectable()

export class ApiService {

  constructor(private http: HttpClient) { }

  getList(page = 1) {
    const queryString = composeFilterQueryString(page);
    return this.http.get<ListPage<Character>>(`${apiRoot}character/?${queryString}`);
  }
  getCharacter(id: number) {
    return this.http.get<Character>(`${apiRoot}character/${id}`);
  }
}


