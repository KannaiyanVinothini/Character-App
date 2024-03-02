import { Component, Input } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  @Input()
  characters!: Character[];
  characterId!: any;
  showList = true;
  character: any;

  hideListing (character: any,characterId: number){
this.showList = false;
this.characterId= characterId;
this.character = character;
console.log(character)
  }
}
