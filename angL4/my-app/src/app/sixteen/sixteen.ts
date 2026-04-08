import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` Reverse Machine: {{ word }} `,
  imports: [],
})
export class App {
  word = 'You are a champion';
}
