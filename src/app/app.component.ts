import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>

    <bf-form [color]="'yellow'" maxlength="3" (submit)="addItem($event)"></bf-form>

    <ul *ngIf="items.length">
      <li *ngFor="let item of items">{{item}}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Better Facebook';
  items = [];

  addItem(value: string) {
    this.items.push(value);
  }
}
