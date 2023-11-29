import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from 'src/app/dbz/interfaces/character.interface';

@Component({
  selector: 'app-dbz-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };
  addCharacter(): void {
    console.log(this.character);

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}

// public nombre: string = 'Lucas';
// public edad: number = 22;
// public metodo: string = 'Scrip';
// public capitalizado: string = 'Lucas';

// modificarNombre() {
//   this.nombre = 'Juan';
// }
// modificarEdad() {
//   this.edad = 24;
// }
// get heroCapitalizado(): string {
//   return this.nombre.toUpperCase();
// }

// getHeroCambio(): string {
//   return `${this.nombre} - ${this.edad}`;
// }
// reset() {
//   this.nombre = 'Lucas';
//   this.edad = 22;
// }
