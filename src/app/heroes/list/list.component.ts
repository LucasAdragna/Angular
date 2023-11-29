import { Component, Input, Output, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from 'src/app/dbz/interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterDbz: Character[] = [
    {
      id: uuid(),
      name: 'Tunks',
      power: 10,
    },
  ];
  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string) {
    if (!id) return;
    this.onDeleted.emit(id);
  }
}
