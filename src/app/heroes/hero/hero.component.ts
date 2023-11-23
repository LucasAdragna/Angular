import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public nombre: string = 'Lucas';
  public edad: number = 22;
  public metodo: string = 'Scrip';
  public capitalizado: string = 'Lucas';

  modificarNombre() {
    this.nombre = 'Juan';
  }
  modificarEdad() {
    this.edad = 24;
  }
  get heroCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  getHeroCambio(): string {
    return `${this.nombre} - ${this.edad}`;
  }
  reset() {
    this.nombre = 'Lucas';
    this.edad = 22;
  }
}
