import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <p><b>Counter: </b>{{ counter }}</p>
    <button (click)="incrementarBy(+1)"><b>+1</b></button>
    <button (click)="incrementarBy(-1)"><b>-1</b></button>
    <button (click)="reset()"><b>Reset</b></button>`,
})
export class CounterComponent {
  public counter: number = 0;
  incrementarBy(value: number): void {
    this.counter += value;
  }
  reset() {
    this.counter = 0;
  }
}
