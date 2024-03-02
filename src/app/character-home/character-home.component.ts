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

  @Input() characters!: Character[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCharacterPage();
  }

  loadCharacterPage() {
    this.apiService.getList()
      .subscribe(data => {
        this.characters = data.results;
      });
  }
}
