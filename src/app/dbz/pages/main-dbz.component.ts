import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-dbz',
  templateUrl: './main-dbz.component.html',
  styleUrls: ['./main-dbz.component.css'],
})
export class MainDbzComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }
  onDeleted(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
  newCharacter(character: Character): void {
    this.dbzService.newCharacter(character);
  }
}
