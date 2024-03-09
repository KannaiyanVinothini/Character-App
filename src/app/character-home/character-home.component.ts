import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-character-home',
  templateUrl: './character-home.component.html',
  styleUrls: ['./character-home.component.css'],
  providers: [ApiService]
})
export class CharacterHomeComponent implements OnInit {
  
  page = 1;
  pages?: number;

  @Input() characters!: Character[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCharacterPage();
  }

  loadCharacterPage() {
    this.apiService.getList(this.page)
      .subscribe(data => {
        this.characters = data.results;
        this.pages = data.info.pages;
      });
  }
  setPage(page: number) {
    this.page = page;
    this.loadCharacterPage();
  }
}
