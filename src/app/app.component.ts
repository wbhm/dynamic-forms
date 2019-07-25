import { Component } from '@angular/core';
import { person } from '../data/bruce';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular dynamic reactive forms</h1>

    <app-person-list></app-person-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-forms';
  person;

  constructor() {
    this.person = person;
  }
}
