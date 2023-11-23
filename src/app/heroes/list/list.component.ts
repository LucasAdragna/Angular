import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroesName: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];

  public heroBorrado?: string;

  deleteHero(): void {
    this.heroBorrado = this.heroesName.pop();
  }
}
